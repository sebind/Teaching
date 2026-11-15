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
          <div class="course-meta">5 Modules · 7 Interactive Labs</div>
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
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.course-card {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.65rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  border: 1px solid transparent;
  text-decoration: none !important;
  color: inherit;
  transition: all 0.18s ease;
  position: relative;
}

.course-card:hover {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-divider);
  transform: translateY(-1px);
}

.course-card.is-active {
  background: var(--vp-c-bg-elv);
  border-color: rgba(37, 99, 235, 0.3);
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
}

.course-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
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
  background: rgba(37, 99, 235, 0.12);
  color: #2563eb;
}

.electronics-icon {
  background: rgba(245, 158, 11, 0.14);
  color: #d97706;
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
  font-weight: 700;
  color: #16a34a;
  background: rgba(34, 197, 94, 0.14);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.badge-stage2 {
  font-size: 0.62rem;
  font-weight: 700;
  color: #d97706;
  background: rgba(245, 158, 11, 0.14);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
}

.course-name {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.25;
}

.course-meta {
  font-size: 0.68rem;
  color: var(--vp-c-text-2);
  line-height: 1.2;
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
  background: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.instructor-tag {
  margin-top: 0.65rem;
  padding: 0.35rem 0.45rem;
  font-size: 0.7rem;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 6px;
  background: var(--vp-c-bg-alt);
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
