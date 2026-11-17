<template>
  <div class="quiz-container">
    <div class="quiz-header">
      <div class="quiz-title-area">
        <div class="quiz-badge">Interactive Assessment</div>
        <h3 class="quiz-title">{{ title || 'Concept Check & Knowledge Quiz' }}</h3>
      </div>
      <div class="quiz-score-badge" v-if="answeredCount > 0">
        Score: <span class="score-num">{{ score }}</span> / {{ questions.length }}
        <span class="score-pct">({{ Math.round((score / questions.length) * 100) }}%)</span>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="quiz-progress-track">
      <div 
        class="quiz-progress-fill" 
        :style="{ width: `${(answeredCount / questions.length) * 100}%` }"
      ></div>
    </div>

    <!-- Questions List -->
    <div class="quiz-questions">
      <div 
        v-for="(q, qIdx) in questions" 
        :key="qIdx" 
        class="question-card"
        :class="{
          'is-answered': selectedAnswers[qIdx] !== undefined,
          'is-correct': selectedAnswers[qIdx] === q.answer,
          'is-incorrect': selectedAnswers[qIdx] !== undefined && selectedAnswers[qIdx] !== q.answer
        }"
      >
        <div class="question-meta">
          <span class="question-number">Question {{ qIdx + 1 }} of {{ questions.length }}</span>
          <span 
            v-if="selectedAnswers[qIdx] !== undefined"
            class="result-pill"
            :class="selectedAnswers[qIdx] === q.answer ? 'pill-correct' : 'pill-incorrect'"
          >
            {{ selectedAnswers[qIdx] === q.answer ? '✓ Correct' : '✗ Review Solution' }}
          </span>
        </div>

        <p class="question-text">{{ q.question }}</p>

        <div class="options-grid">
          <button
            v-for="(opt, optIdx) in q.options"
            :key="optIdx"
            type="button"
            class="option-btn"
            :class="{
              'opt-selected': selectedAnswers[qIdx] === optIdx,
              'opt-correct': selectedAnswers[qIdx] !== undefined && optIdx === q.answer,
              'opt-wrong': selectedAnswers[qIdx] === optIdx && optIdx !== q.answer,
              'opt-dimmed': selectedAnswers[qIdx] !== undefined && optIdx !== q.answer && selectedAnswers[qIdx] !== optIdx
            }"
            :disabled="selectedAnswers[qIdx] !== undefined"
            @click="selectOption(qIdx, optIdx)"
          >
            <span class="opt-indicator">
              <span v-if="selectedAnswers[qIdx] === undefined">
                {{ ['A', 'B', 'C', 'D', 'E'][optIdx] || optIdx + 1 }}
              </span>
              <span v-else-if="optIdx === q.answer">✓</span>
              <span v-else-if="selectedAnswers[qIdx] === optIdx">✗</span>
              <span v-else>{{ ['A', 'B', 'C', 'D', 'E'][optIdx] || optIdx + 1 }}</span>
            </span>
            <span class="opt-label">{{ opt }}</span>
          </button>
        </div>

        <!-- Explanation Drawer -->
        <transition name="fade">
          <div 
            v-if="selectedAnswers[qIdx] !== undefined" 
            class="explanation-box"
            :class="selectedAnswers[qIdx] === q.answer ? 'exp-correct' : 'exp-incorrect'"
          >
            <div class="exp-title">
              <span class="exp-icon">{{ selectedAnswers[qIdx] === q.answer ? '💡' : '📌' }}</span>
              <strong>Solution & Explanation:</strong>
            </div>
            <p class="exp-content">{{ q.explanation }}</p>
          </div>
        </transition>
      </div>
    </div>

    <!-- Quiz Footer / Retake Action -->
    <div class="quiz-footer" v-if="answeredCount > 0">
      <div class="footer-summary">
        <span>Completed {{ answeredCount }} of {{ questions.length }} questions</span>
      </div>
      <button type="button" class="retake-btn" @click="resetQuiz">
        ↺ Reset & Retake Quiz
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

const props = withDefaults(
  defineProps<{
    title?: string;
    questions?: QuizQuestion[];
  }>(),
  {
    title: 'Concept Check & Knowledge Quiz',
    questions: () => []
  }
);

// Map of question index -> selected option index
const selectedAnswers = ref<Record<number, number>>({});

const answeredCount = computed(() => {
  return Object.keys(selectedAnswers.value).length;
});

const score = computed(() => {
  let s = 0;
  for (let i = 0; i < props.questions.length; i++) {
    if (selectedAnswers.value[i] === props.questions[i].answer) {
      s++;
    }
  }
  return s;
});

function selectOption(qIdx: number, optIdx: number) {
  if (selectedAnswers.value[qIdx] !== undefined) return;
  selectedAnswers.value = {
    ...selectedAnswers.value,
    [qIdx]: optIdx
  };
}

function resetQuiz() {
  selectedAnswers.value = {};
}
</script>

<style scoped>
.quiz-container {
  margin: 2.2rem 0;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  padding: 1.75rem;
  font-family: var(--vp-font-family-base);
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.quiz-badge {
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-soft);
  padding: 0.22rem 0.7rem;
  border-radius: 999px;
  margin-bottom: 0.35rem;
}

.quiz-title {
  margin: 0;
  font-size: 1.35rem;
  font-weight: 400;
  letter-spacing: -0.015em;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.quiz-score-badge {
  font-size: 0.92rem;
  font-weight: 500;
  padding: 0.42rem 0.95rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  color: var(--vp-c-text-1);
}

.score-num {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.score-pct {
  color: var(--vp-c-text-2);
  font-size: 0.82rem;
  margin-left: 0.25rem;
}

.quiz-progress-track {
  width: 100%;
  height: 6px;
  background: var(--vp-c-gutter);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 1.75rem;
}

.quiz-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #1a73e8, #4285f4, #34a853);
  transition: width 0.35s ease;
}

.quiz-questions {
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.question-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-gutter);
  border-radius: 20px;
  padding: 1.4rem;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.question-card.is-correct {
  border-color: #81c995;
}

.question-card.is-incorrect {
  border-color: #f28b82;
}

.question-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.question-number {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.result-pill {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.pill-correct {
  background: rgba(34, 197, 94, 0.15);
  color: #16a34a;
}

.pill-incorrect {
  background: rgba(239, 68, 68, 0.15);
  color: #dc2626;
}

.question-text {
  font-size: 1.03rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
  line-height: 1.55;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  text-align: left;
  padding: 0.78rem 1.05rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  cursor: pointer;
  font-size: 0.94rem;
  color: var(--vp-c-text-1);
  transition: all 0.2s cubic-bezier(0.34, 0.8, 0.34, 1);
}

.option-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  transform: translateX(2px);
}

.option-btn:disabled {
  cursor: default;
}

.opt-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 500;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  flex-shrink: 0;
  color: var(--vp-c-text-2);
}

.opt-correct {
  background: #e6f4ea !important;
  border-color: #34a853 !important;
  color: #202124 !important;
}

.dark .opt-correct {
  background: rgba(52, 168, 83, 0.16) !important;
  color: #e8eaed !important;
}

.opt-correct .opt-indicator {
  background: #1e8e3e;
  border-color: #1e8e3e;
  color: #ffffff;
}

.opt-wrong {
  background: #fce8e6 !important;
  border-color: #ea4335 !important;
  color: #202124 !important;
}

.dark .opt-wrong {
  background: rgba(234, 67, 53, 0.16) !important;
  color: #e8eaed !important;
}

.opt-wrong .opt-indicator {
  background: #d93025;
  border-color: #d93025;
  color: #ffffff;
}

.opt-dimmed {
  opacity: 0.55;
}

.explanation-box {
  margin-top: 1rem;
  padding: 0.95rem 1.15rem;
  border-radius: 14px;
  font-size: 0.92rem;
  line-height: 1.58;
}

.exp-correct {
  background: #e6f4ea;
  border: 1px solid #a8dab5;
  color: var(--vp-c-text-1);
}

.dark .exp-correct {
  background: rgba(52, 168, 83, 0.12);
  border-color: rgba(129, 201, 149, 0.35);
}

.exp-incorrect {
  background: #fce8e6;
  border: 1px solid #f6aea9;
  color: var(--vp-c-text-1);
}

.dark .exp-incorrect {
  background: rgba(234, 67, 53, 0.12);
  border-color: rgba(242, 139, 130, 0.35);
}

.exp-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.35rem;
  color: var(--vp-c-text-1);
}

.exp-content {
  margin: 0;
  color: var(--vp-c-text-2);
}

.quiz-footer {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.footer-summary {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
}

.retake-btn {
  padding: 0.55rem 1.25rem;
  font-size: 0.86rem;
  font-weight: 500;
  border-radius: 999px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.2s ease;
}

.retake-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
