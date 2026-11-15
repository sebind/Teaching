<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-header-top">
        <div class="sim-badge-group">
          <span class="sim-badge">MODULE 2</span>
          <span class="sim-badge-secondary">MULTI-PARTICLE KINEMATICS</span>
        </div>
        <button class="ref-toggle-btn" @click="showSlideRef = !showSlideRef">
          📐 {{ showSlideRef ? 'Hide' : 'Show' }} PDF Slide Figure
        </button>
      </div>
      <h3 class="sim-title">Elevator Shaft & Thrown Ball Intercept Lab</h3>
      <p class="sim-desc">
        Interactive animation modeled directly on Dr. Sebin Devasia's elevator shaft worked problem (Mod 2 Part 2, Slide 15): track simultaneous motion <em>y<sub>B</sub>(t)</em> and <em>y<sub>E</sub>(t)</em> and relative impact velocity <em>v<sub>B/E</sub> = v<sub>B</sub> − v<sub>E</sub></em>.
      </p>
    </div>

    <!-- Collapsible Original PDF Figure Reference -->
    <div v-if="showSlideRef" class="slide-ref-panel">
      <div class="slide-ref-img-wrap">
        <img :src="withBase('/images/physics/mod2/mod2_elevator_ball_shaft.png')" alt="Lecture Slide 15 Elevator and Ball Shaft Diagram" />
      </div>
      <div class="slide-ref-info">
        <span class="slide-ref-tag">Original PDF Reference · Mod 2 Part 2, Slide 15</span>
        <p>
          At <em>t</em> = 0, the ball is launched upward from <em>y</em><sub>0</sub> = 12 m at <em>v</em><sub>0</sub> = +18 m/s while the open-platform elevator passes <em>y</em><sub>E0</sub> = 5 m moving upward at constant speed <em>v</em><sub>E</sub> = +2 m/s. Setting <em>y</em><sub>B</sub>(<em>t</em>) = <em>y</em><sub>E</sub>(<em>t</em>) yields intercept at <strong>t = 3.65 s</strong>, <strong>y = 12.31 m</strong>, and <strong>v<sub>B/E</sub> = −19.83 m/s</strong>.
        </p>
      </div>
    </div>

    <!-- Presets -->
    <div class="sim-presets">
      <span class="preset-label">Presets:</span>
      <button class="preset-btn" :class="{ active: activePreset === 'lecture' }" @click="applyPreset('lecture')">
        Lecture Default (y_B0 = 12m, v_B0 = 18 m/s, y_E0 = 5m, v_E = 2 m/s)
      </button>
      <button class="preset-btn" :class="{ active: activePreset === 'fast_elev' }" @click="applyPreset('fast_elev')">
        Fast Express Elevator (v_E = 6 m/s)
      </button>
      <button class="preset-btn" :class="{ active: activePreset === 'high_throw' }" @click="applyPreset('high_throw')">
        High Velocity Throw (v_B0 = 22 m/s)
      </button>
    </div>

    <!-- Playback Bar -->
    <div class="playback-bar">
      <button class="play-btn" @click="togglePlay">
        {{ isPlaying ? '⏸ Pause' : '▶ Launch & Ascend' }}
      </button>
      <button class="action-btn" @click="resetSim">↺ Reset</button>
      <div class="time-slider-wrapper">
        <span class="time-label">t: <strong>{{ curTime.toFixed(2) }} s</strong> / {{ tIntercept.toFixed(2) }} s</span>
        <input type="range" min="0" :max="tIntercept" step="0.01" v-model.number="curTime" @input="isPlaying = false" />
      </div>
    </div>

    <!-- Controls -->
    <div class="sim-controls-grid">
      <div class="control-box">
        <div class="control-header">
          <label>Ball Launch Height (y<sub>B0</sub>)</label>
          <span class="val-chip">{{ yB0 }} m</span>
        </div>
        <input type="range" min="6" max="20" step="1" v-model.number="yB0" @input="onParamChange" />
      </div>
      <div class="control-box">
        <div class="control-header">
          <label>Ball Initial Velocity (v<sub>B0</sub>)</label>
          <span class="val-chip">{{ vB0 }} m/s</span>
        </div>
        <input type="range" min="8" max="26" step="1" v-model.number="vB0" @input="onParamChange" />
      </div>
      <div class="control-box">
        <div class="control-header">
          <label>Elevator Speed (v<sub>E</sub>)</label>
          <span class="val-chip">{{ vE }} m/s</span>
        </div>
        <input type="range" min="1" max="8" step="0.5" v-model.number="vE" @input="onParamChange" />
      </div>
    </div>

    <!-- Canvas -->
    <div class="sim-viewport-wrapper">
      <canvas ref="canvasRef" class="lab-canvas"></canvas>
    </div>

    <!-- Readout Dashboard -->
    <div class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Intercept Time & Height</span>
        <span class="dash-val highlight">{{ tIntercept.toFixed(2) }} <small>s</small> @ {{ yIntercept.toFixed(2) }} <small>m</small></span>
        <span class="dash-sub">y<sub>B</sub>(t) = y<sub>E</sub>(t)</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Ball Elevation y<sub>B</sub>(t)</span>
        <span class="dash-val">{{ curYB.toFixed(2) }} <small>m</small></span>
        <span class="dash-sub">Peak: {{ yPeak.toFixed(2) }} m at {{ tPeak.toFixed(2) }} s</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Elevator Elevation y<sub>E</sub>(t)</span>
        <span class="dash-val">{{ curYE.toFixed(2) }} <small>m</small></span>
        <span class="dash-sub">y<sub>E0</sub> = {{ yE0 }} m + {{ vE }}t</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Relative Velocity v<sub>B/E</sub></span>
        <span class="dash-val">{{ curVRel.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">Impact v<sub>B/E</sub> = {{ vRelImpact.toFixed(2) }} m/s</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { withBase } from 'vitepress';

const g = 9.81;
const showSlideRef = ref(true);
const activePreset = ref<'lecture' | 'fast_elev' | 'high_throw' | 'custom'>('lecture');

const yB0 = ref(12);
const vB0 = ref(18);
const yE0 = ref(5);
const vE = ref(2);

const curTime = ref(0);
const isPlaying = ref(false);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let logicalW = 760;
let logicalH = 380;
let rafId: number | null = null;
let lastTs = 0;

// Solve 0.5*g*t^2 - (vB0 - vE)*t - (yB0 - yE0) = 0 (since yB0 >= yE0, positive root always exists)
const tIntercept = computed(() => {
  const a = 0.5 * g;
  const b = -(vB0.value - vE.value);
  const c = -(yB0.value - yE0.value);
  const disc = Math.max(0, b * b - 4 * a * c);
  return (-b + Math.sqrt(disc)) / (2 * a);
});

const yIntercept = computed(() => yE0.value + vE.value * tIntercept.value);
const tPeak = computed(() => Math.max(0, vB0.value / g));
const yPeak = computed(() => yB0.value + (vB0.value * vB0.value) / (2 * g));

const curYB = computed(() => yB0.value + vB0.value * curTime.value - 0.5 * g * curTime.value * curTime.value);
const curYE = computed(() => yE0.value + vE.value * curTime.value);
const curVB = computed(() => vB0.value - g * curTime.value);
const curVRel = computed(() => curVB.value - vE.value);
const vRelImpact = computed(() => (vB0.value - g * tIntercept.value) - vE.value);

function applyPreset(name: 'lecture' | 'fast_elev' | 'high_throw') {
  activePreset.value = name;
  isPlaying.value = false;
  curTime.value = 0;
  yE0.value = 5;
  if (name === 'lecture') {
    yB0.value = 12; vB0.value = 18; vE.value = 2;
  } else if (name === 'fast_elev') {
    yB0.value = 12; vB0.value = 18; vE.value = 6;
  } else {
    yB0.value = 12; vB0.value = 22; vE.value = 2;
  }
}

function onParamChange() {
  activePreset.value = 'custom';
  isPlaying.value = false;
  if (curTime.value > tIntercept.value) curTime.value = tIntercept.value;
}

function togglePlay() {
  if (curTime.value >= tIntercept.value - 0.01) {
    curTime.value = 0;
  }
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    lastTs = performance.now();
    rafId = requestAnimationFrame(step);
  }
}

function resetSim() {
  isPlaying.value = false;
  curTime.value = 0;
  draw();
}

function step(ts: number) {
  if (!isPlaying.value) return;
  const dt = Math.min(0.05, (ts - lastTs) / 1000);
  lastTs = ts;
  curTime.value += dt;
  if (curTime.value >= tIntercept.value) {
    curTime.value = tIntercept.value;
    isPlaying.value = false;
    draw();
    return;
  }
  draw();
  rafId = requestAnimationFrame(step);
}

function resizeCanvas() {
  const c = canvasRef.value;
  if (!c || !c.parentElement) return;
  const rect = c.parentElement.getBoundingClientRect();
  if (rect.width <= 0) return;
  const dpr = window.devicePixelRatio || 1;
  logicalW = Math.floor(rect.width);
  logicalH = 380;
  c.width = logicalW * dpr;
  c.height = logicalH * dpr;
  c.style.width = `${logicalW}px`;
  c.style.height = `${logicalH}px`;
  const ctx = c.getContext('2d');
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  draw();
}

function draw() {
  const c = canvasRef.value;
  if (!c) return;
  const ctx = c.getContext('2d');
  if (!ctx) return;
  const dpr = window.devicePixelRatio || 1;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, logicalW, logicalH);

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, logicalW, logicalH);

  const maxY = Math.max(32, Math.ceil((Math.max(yPeak.value, yIntercept.value) + 4) / 5) * 5);
  const shaftLeft = 58;
  const shaftW = Math.min(200, Math.max(145, Math.floor(logicalW * 0.27)));
  const shaftRight = shaftLeft + shaftW;
  const topPad = 28;
  const botY = logicalH - 34;
  const yToPx = (y: number) => botY - (y / maxY) * (botY - topPad);

  // Shaft architectural walls (modeled after Slide 15 figure)
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(shaftLeft - 10, topPad - 8, 10, botY - topPad + 12);
  ctx.fillRect(shaftRight, topPad - 8, 10, botY - topPad + 12);
  ctx.fillStyle = '#0b1220';
  ctx.fillRect(shaftLeft, topPad - 4, shaftW, botY - topPad + 4);

  // Height ruler ticks on left of shaft
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.22)';
  ctx.fillStyle = '#94a3b8';
  ctx.font = '11px monospace';
  ctx.textAlign = 'right';
  for (let ym = 0; ym <= maxY; ym += 5) {
    const py = yToPx(ym);
    ctx.beginPath();
    ctx.moveTo(shaftLeft, py);
    ctx.lineTo(shaftRight, py);
    ctx.stroke();
    ctx.fillText(`${ym}m`, shaftLeft - 14, py + 4);
  }

  // Ground Datum O
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(shaftLeft - 18, botY);
  ctx.lineTo(shaftRight + 18, botY);
  ctx.stroke();
  ctx.fillStyle = '#cbd5e1';
  ctx.textAlign = 'left';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('Datum O (y = 0)', shaftLeft + 6, botY + 18);

  // Hoist cable & Open-Platform Elevator
  const elevX = shaftLeft + shaftW * 0.42;
  const platW = shaftW * 0.56;
  const pyE = yToPx(curYE.value);

  // Center cable
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(elevX, topPad - 8);
  ctx.lineTo(elevX, pyE - 24);
  ctx.stroke();

  // Elevator stirrup frame + platform (matching Slide 15 open-platform sketch)
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(elevX - platW / 2, pyE - 24, platW, 24);
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(elevX - platW / 2 - 2, pyE - 5, platW + 4, 7);

  // Elevator velocity arrow
  ctx.strokeStyle = '#38bdf8';
  ctx.fillStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(elevX - platW / 2 + 10, pyE - 10);
  ctx.lineTo(elevX - platW / 2 + 10, pyE - 38);
  ctx.stroke();
  ctx.font = '10px monospace';
  ctx.fillText(`vE=${vE.value}m/s`, shaftLeft + 4, pyE + 14);

  // Launch ledge at yB0 on right wall
  const pyB0 = yToPx(yB0.value);
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(shaftRight - 22, pyB0, 22, 4);

  // Dotted trajectory guide in shaft (hairpin loop like Slide 15 Fig. 1)
  const ballXUp = elevX + platW * 0.16;
  const ballXDown = elevX + platW * 0.28;
  const pyPeak = yToPx(yPeak.value);
  ctx.save();
  ctx.setLineDash([4, 3]);
  ctx.strokeStyle = 'rgba(251, 146, 60, 0.55)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(ballXUp, pyB0);
  ctx.lineTo(ballXUp, pyPeak + 6);
  ctx.arc((ballXUp + ballXDown) / 2, pyPeak + 6, (ballXDown - ballXUp) / 2, Math.PI, 0, false);
  ctx.lineTo(ballXDown, yToPx(yIntercept.value));
  ctx.stroke();
  ctx.restore();

  // Ball current position
  const bx = curTime.value <= tPeak.value ? ballXUp : ballXDown;
  const pyB = yToPx(curYB.value);
  ctx.fillStyle = '#fb923c';
  ctx.beginPath();
  ctx.arc(bx, pyB - 6, 6.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Collision flash badge when t == tIntercept
  if (Math.abs(curTime.value - tIntercept.value) < 0.03) {
    ctx.fillStyle = '#f43f5e';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('💥 IMPACT!', elevX - 28, pyB - 32);
  }

  // RIGHT PANEL: Synchronized y(t) Graph
  const gx0 = shaftRight + 56;
  const gx1 = logicalW - 24;
  const gw = Math.max(120, gx1 - gx0);
  if (gw > 130) {
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(gx0, topPad);
    ctx.lineTo(gx0, botY);
    ctx.lineTo(gx1, botY);
    ctx.stroke();

    const tMaxPlot = Math.max(4.2, tIntercept.value * 1.12);
    const tToPx = (t: number) => gx0 + (t / tMaxPlot) * gw;

    // Grid & time ticks
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    const stepT = tMaxPlot > 6 ? 2 : 1;
    for (let tt = 0; tt <= tMaxPlot; tt += stepT) {
      const tx = tToPx(tt);
      ctx.strokeStyle = 'rgba(148,163,184,0.14)';
      ctx.beginPath();
      ctx.moveTo(tx, topPad);
      ctx.lineTo(tx, botY);
      ctx.stroke();
      ctx.fillText(`${tt}s`, tx, botY + 15);
    }

    // Elevator line yE(t)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(tToPx(0), yToPx(yE0.value));
    ctx.lineTo(tToPx(tIntercept.value), yToPx(yIntercept.value));
    ctx.stroke();

    // Ball parabola yB(t)
    ctx.strokeStyle = '#fb923c';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    const N = 80;
    for (let i = 0; i <= N; i++) {
      const tt = (i / N) * tIntercept.value;
      const yy = yB0.value + vB0.value * tt - 0.5 * g * tt * tt;
      const px = tToPx(tt);
      const py = yToPx(yy);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Current time cursor
    const cx = tToPx(curTime.value);
    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.beginPath();
    ctx.moveTo(cx, topPad);
    ctx.lineTo(cx, botY);
    ctx.stroke();
    ctx.restore();

    // Current dots
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(cx, pyE, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#fb923c';
    ctx.beginPath();
    ctx.arc(cx, pyB, 5, 0, Math.PI * 2);
    ctx.fill();

    // Intercept marker
    const ix = tToPx(tIntercept.value);
    const iy = yToPx(yIntercept.value);
    ctx.strokeStyle = '#f43f5e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ix, iy, 7, 0, Math.PI * 2);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('Elevation Curves: y_B(t) [Orange] vs y_E(t) [Blue]', gx0 + 8, topPad - 8);
  }
}

watch([curTime, yB0, vB0, vE], () => draw());

onMounted(() => {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
});

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId);
  window.removeEventListener('resize', resizeCanvas);
});
</script>

<style scoped>
.sim-card {
  margin: 2rem 0;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.08);
}
.sim-header {
  padding: 1.25rem 1.5rem 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.sim-header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.sim-badge-group {
  display: flex;
  gap: 0.5rem;
}
.sim-badge {
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.sim-badge-secondary {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.15);
  color: var(--vp-c-text-2);
}
.ref-toggle-btn {
  padding: 0.3rem 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
}
.sim-title {
  margin: 0.2rem 0 0.35rem !important;
  font-size: 1.2rem !important;
  font-weight: 700 !important;
}
.sim-desc {
  margin: 0 !important;
  font-size: 0.86rem;
  color: var(--vp-c-text-2);
}
.slide-ref-panel {
  display: grid;
  grid-template-columns: minmax(180px, 280px) 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.9rem 1.4rem;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}
.slide-ref-img-wrap {
  background: #ffffff;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: center;
}
.slide-ref-img-wrap img {
  max-height: 170px;
  width: auto;
  object-fit: contain;
}
.slide-ref-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.3rem;
}
.slide-ref-info p {
  margin: 0 !important;
  font-size: 0.83rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}
@media (max-width: 680px) {
  .slide-ref-panel {
    grid-template-columns: 1fr;
  }
}
.sim-presets {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.4rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.preset-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--vp-c-text-2);
}
.preset-btn {
  padding: 0.32rem 0.72rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
}
.preset-btn.active,
.preset-btn:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
.playback-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.4rem;
  border-bottom: 1px solid var(--vp-c-divider);
}
.play-btn {
  padding: 0.42rem 0.95rem;
  border-radius: 8px;
  border: none;
  background: var(--vp-c-brand-1);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
}
.action-btn {
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}
.time-slider-wrapper {
  flex: 1;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.time-label {
  font-size: 0.8rem;
  font-family: var(--vp-font-family-mono);
  white-space: nowrap;
}
.time-slider-wrapper input[type="range"] {
  flex: 1;
}
.sim-controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.85rem;
  padding: 0.9rem 1.4rem;
}
.control-box {
  padding: 0.65rem 0.85rem;
  border-radius: 8px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}
.control-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}
.val-chip {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-brand-1);
  font-weight: 700;
}
.control-box input[type="range"] {
  width: 100%;
}
.sim-viewport-wrapper {
  padding: 0 1.2rem 1rem;
}
.lab-canvas {
  display: block;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #1e293b;
}
.sim-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  gap: 0.75rem;
  padding: 0 1.2rem 1.25rem;
}
.dash-card {
  padding: 0.75rem 0.9rem;
  border-radius: 10px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  flex-direction: column;
}
.dash-card.result-main {
  border-left: 4px solid var(--vp-c-brand-1);
}
.dash-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-text-2);
}
.dash-val {
  font-size: 1.15rem;
  font-weight: 800;
  font-family: var(--vp-font-family-mono);
  margin: 0.2rem 0;
}
.dash-val.highlight {
  color: var(--vp-c-brand-1);
}
.dash-sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}
</style>
