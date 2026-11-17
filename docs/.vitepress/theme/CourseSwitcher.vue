<template>
  <div class="course-switcher">
    <div class="switcher-header">
      <span class="switcher-label">ACADEMIC PROGRAM</span>
      <span class="institution-pill">PSG IAS</span>
    </div>

    <div class="course-list">
      <!-- Course 1: Physics 23IM102 -->
      <a 
        :href="physicsLink" 
        class="course-card" 
        :class="{ 'is-active': isPhysicsActive }"
      >
        <div class="course-icon physics-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          </svg>
        </div>
        <div class="course-info">
          <div class="course-title-row">
            <span class="course-code">23IM102</span>
            <span class="badge-active">Full Course</span>
          </div>
          <div class="course-name">Physics & Mechanics</div>
          <div class="course-meta">5 Modules · 10 Interactive Labs</div>
        </div>
        <div v-if="isPhysicsActive" class="active-indicator">
          <span class="dot"></span>
        </div>
      </a>

      <!-- Course 2: Basics of Electronics 23IR202 -->
      <a 
        :href="electronicsLink" 
        class="course-card" 
        :class="{ 'is-active': isElectronicsActive }"
      >
        <div class="course-icon electronics-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <div class="course-info">
          <div class="course-title-row">
            <span class="course-code">23IR202</span>
            <span class="badge-stage2">Stage 2</span>
          </div>
          <div class="course-name">Basics of Electronics</div>
          <div class="course-meta">5 Modules Roadmap</div>
        </div>
        <div v-if="isElectronicsActive" class="active-indicator">
          <span class="dot"></span>
        </div>
      </a>
    </div>

    <div class="instructor-tag">
      <span class="inst-icon">👨‍🏫</span>
      <span class="inst-name">Dr. Sebin Devasia · Dept. of Physics</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, withBase } from 'vitepress';

const route = useRoute();

const physicsLink = withBase('/physics/');
const electronicsLink = withBase('/electronics/');

const isElectronicsActive = computed(() => {
  return route.path.includes('/electronics');
});

const isPhysicsActive = computed(() => {
  return route.path.includes('/physics');
});
</script>

<style scoped>
.course-switcher {
  padding: 0.85rem 0.75rem 1rem;
  margin-bottom: 0.85rem;
  border-bottom: 1px solid var(--vp-c-divider);
  font-family: var(--vp-font-family-base);
}

.switcher-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.65rem;
  padding: 0 0.25rem;
}

.switcher-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
}

.institution-pill {
  font-size: 0.68rem;
  font-weight: 500;
  padding: 0.16rem 0.55rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-2);
  border-radius: 999px;
  letter-spacing: 0.04em;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.course-card {
  display: flex;
  align-items: center;
  gap: 0.68rem;
  padding: 0.62rem 0.78rem;
  border-radius: 16px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-gutter);
  text-decoration: none !important;
  color: inherit;
  transition: all 0.2s cubic-bezier(0.34, 0.8, 0.34, 1);
  position: relative;
}

.course-card:hover {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-divider);
  transform: translateY(-1px);
}

.course-card.is-active {
  background: var(--vp-c-brand-soft);
  border-color: rgba(26, 115, 232, 0.28);
  box-shadow: none;
}

.course-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.course-icon svg {
  width: 18px;
  height: 18px;
}

.physics-icon {
  background: rgba(26, 115, 232, 0.12);
  color: #1a73e8;
}

.electronics-icon {
  background: rgba(251, 188, 4, 0.18);
  color: #ea8600;
}

.course-info {
  flex: 1;
  min-width: 0;
}

.course-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  line-height: 1.1;
  margin-bottom: 0.15rem;
}

.course-code {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: var(--vp-c-text-1);
}

.badge-active {
  font-size: 0.62rem;
  font-weight: 500;
  color: #137333;
  background: #e6f4ea;
  padding: 0.12rem 0.48rem;
  border-radius: 999px;
}

.badge-stage2 {
  font-size: 0.62rem;
  font-weight: 500;
  color: #ea8600;
  background: #fef7e0;
  padding: 0.12rem 0.48rem;
  border-radius: 999px;
}

.course-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.28;
}

.course-meta {
  font-size: 0.7rem;
  color: var(--vp-c-text-2);
  line-height: 1.25;
}

.active-indicator {
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #1a73e8;
  box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.22);
}

.instructor-tag {
  margin-top: 0.68rem;
  padding: 0.4rem 0.65rem;
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 999px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-gutter);
}

.inst-icon {
  font-size: 0.8rem;
}

.inst-name {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
