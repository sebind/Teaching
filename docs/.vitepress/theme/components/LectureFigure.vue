<template>
  <figure class="lecture-fig-card">
    <div class="lecture-fig-stage" :class="{ 'dual-stage': !!src2 }">
      <div class="lecture-fig-frame" :style="{ maxWidth: src2 ? '48%' : maxWidth }" @click="openZoom(resolvedSrc, alt || caption)">
        <img :src="resolvedSrc" :alt="alt || caption || 'Lecture slide figure'" loading="lazy" class="lecture-fig-img" />
        <span class="zoom-hint" title="Click to enlarge">🔍 Enlarge</span>
      </div>
      <div v-if="src2" class="lecture-fig-frame" :style="{ maxWidth: '48%' }" @click="openZoom(resolvedSrc2, alt2 || caption)">
        <img :src="resolvedSrc2" :alt="alt2 || caption || 'Lecture slide companion figure'" loading="lazy" class="lecture-fig-img" />
        <span class="zoom-hint" title="Click to enlarge">🔍 Enlarge</span>
      </div>
    </div>
    <figcaption v-if="caption || slide" class="lecture-fig-caption">
      <div class="lecture-fig-meta">
        <span class="lecture-fig-badge">{{ badge }}</span>
        <span v-if="slide" class="lecture-fig-slide">{{ slide }}</span>
      </div>
      <span v-if="caption" class="lecture-fig-text">{{ caption }}</span>
    </figcaption>

    <Teleport v-if="isMounted && zoomedSrc" to="body">
      <div class="lecture-lightbox" @click="closeZoom">
        <button class="lightbox-close" @click.stop="closeZoom" aria-label="Close zoomed figure">✕ Close</button>
        <div class="lightbox-inner" @click.stop>
          <img :src="zoomedSrc" :alt="zoomedAlt" class="lightbox-img" />
          <p v-if="caption" class="lightbox-caption">{{ caption }} <span v-if="slide">({{ slide }})</span></p>
        </div>
      </div>
    </Teleport>
  </figure>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { withBase } from 'vitepress';

const props = withDefaults(defineProps<{
  src: string;
  alt?: string;
  src2?: string;
  alt2?: string;
  caption?: string;
  slide?: string;
  badge?: string;
  maxWidth?: string;
}>(), {
  alt: '',
  src2: '',
  alt2: '',
  caption: '',
  slide: '',
  badge: '📐 Lecture Figure',
  maxWidth: '680px'
});

const resolvedSrc = computed(() => withBase(props.src));
const resolvedSrc2 = computed(() => (props.src2 ? withBase(props.src2) : ''));

const isMounted = ref(false);
const zoomedSrc = ref('');
const zoomedAlt = ref('');

function openZoom(url: string, label: string) {
  zoomedSrc.value = url;
  zoomedAlt.value = label;
}

function closeZoom() {
  zoomedSrc.value = '';
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && zoomedSrc.value) {
    closeZoom();
  }
}

onMounted(() => {
  isMounted.value = true;
  window.addEventListener('keydown', onKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown);
});
</script>

<style scoped>
.lecture-fig-card {
  margin: 1.75rem 0;
  border-radius: 24px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  font-family: var(--vp-font-family-base);
}

.lecture-fig-stage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.35rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid var(--vp-c-gutter);
}

.lecture-fig-frame {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: zoom-in;
  border-radius: 8px;
  transition: transform 0.18s ease;
}

.lecture-fig-frame:hover {
  transform: scale(1.01);
}

.lecture-fig-img {
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 440px;
  object-fit: contain;
  border-radius: 6px;
}

.zoom-hint {
  position: absolute;
  bottom: 8px;
  right: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.72);
  color: #f8fafc;
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.18s ease;
  pointer-events: none;
}

.lecture-fig-frame:hover .zoom-hint {
  opacity: 1;
}

.lecture-fig-caption {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 0.75rem 1.15rem;
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.lecture-fig-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}

.lecture-fig-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.16rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-2);
}

.lecture-fig-slide {
  font-size: 0.76rem;
  font-weight: 500;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}

.lecture-fig-text {
  color: var(--vp-c-text-1);
}

@media (max-width: 680px) {
  .lecture-fig-stage.dual-stage .lecture-fig-frame {
    max-width: 100% !important;
  }
}

.lecture-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(11, 15, 23, 0.88);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: zoom-out;
}

.lightbox-close {
  position: fixed;
  top: 1.25rem;
  right: 1.5rem;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(15, 23, 42, 0.9);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.lightbox-inner {
  max-width: 92vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: default;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 82vh;
  object-fit: contain;
  background: #ffffff;
  padding: 0.75rem;
  border-radius: 10px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.lightbox-caption {
  margin: 0;
  color: #e2e8f0;
  font-size: 0.88rem;
  text-align: center;
  max-width: 760px;
}
</style>
