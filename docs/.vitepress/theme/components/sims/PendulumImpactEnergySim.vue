<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-header-top">
        <div class="sim-badge-group">
          <span class="sim-badge">MODULE 5</span>
          <span class="sim-badge-secondary">ENERGY + IMPACT + MOMENTUM · SEC. 13.4C</span>
        </div>
        <button class="ref-toggle-btn" @click="showRef = !showRef">
          📖 {{ showRef ? 'Hide' : 'Show' }} Textbook Figure
        </button>
      </div>
      <h3 class="sim-title">Three-Stage Pendulum Impact &amp; Energy Partition Simulator</h3>
      <p class="sim-desc">
        Modeled directly on Beer &amp; Johnston Section 13.4C, Fig. 13.28 (pp. 889–890): analyze a multi-principle problem by combining <strong>Conservation of Energy</strong> during the swings with <strong>Conservation of Momentum &amp; Restitution</strong> during impact, plus <strong>Newton&rsquo;s 2nd Law</strong> (&Sigma;<em>F<sub>n</sub></em> = <em>ma<sub>n</sub></em>) for peak cord tension.
      </p>
    </div>

    <!-- Collapsible Textbook Figure Reference -->
    <div v-if="showRef" class="slide-ref-panel">
      <div class="slide-ref-img-wrap">
        <img
          :src="withBase('/images/physics/mod5/mod5_fig13_28_pendulum_impact_energy.png')"
          alt="Beer and Johnston Fig 13.28 Three-Part Pendulum Impact and Energy"
        />
      </div>
      <div class="slide-ref-info">
        <span class="slide-ref-tag">Textbook Reference · Sec. 13.4C, Fig. 13.28 (pp. 889–890)</span>
        <p>
          <strong>Why one principle alone is insufficient:</strong> Mechanical energy is conserved from (a)&rarr;(b) and from (c)&rarr;(d), but kinetic energy &Delta;<em>E</em><sub>loss</sub> = <em>T</em><sub>2</sub> &minus; <em>T</em><sub>3</sub> is lost during inelastic impact (b)&rarr;(c) whenever <em>e</em> &lt; 1. Conversely, horizontal momentum is conserved across impact (b)&rarr;(c), while external gravity and cord forces act during the swings!
        </p>
      </div>
    </div>

    <!-- Presets -->
    <div class="sim-presets">
      <span class="preset-label">Presets:</span>
      <button
        class="preset-btn"
        :class="{ active: activePreset === 'textbook' }"
        @click="applyPreset('textbook')"
      >
        Fig. 13.28 Textbook Setup (&theta;<sub>0</sub>=90&deg;, m<sub>A</sub>=2kg, m<sub>B</sub>=3kg, e=0.80)
      </button>
      <button
        class="preset-btn"
        :class="{ active: activePreset === 'cradle' }"
        @click="applyPreset('cradle')"
      >
        Newton&rsquo;s Cradle Elastic (&theta;<sub>0</sub>=90&deg;, m<sub>A</sub>=m<sub>B</sub>=2kg, e=1.00)
      </button>
      <button
        class="preset-btn"
        :class="{ active: activePreset === 'plastic' }"
        @click="applyPreset('plastic')"
      >
        Plastic Coupled Swing (&theta;<sub>0</sub>=90&deg;, m<sub>A</sub>=2kg, m<sub>B</sub>=2kg, e=0.00)
      </button>
      <button
        class="preset-btn"
        :class="{ active: activePreset === 'rebound' }"
        @click="applyPreset('rebound')"
      >
        Light Bob Rebound (&theta;<sub>0</sub>=75&deg;, m<sub>A</sub>=1kg, m<sub>B</sub>=4kg, e=0.85)
      </button>
    </div>

    <!-- Live 3-Stage Principle Banner + Quick Snapshot Jumpers -->
    <div class="stage-banner-grid">
      <div
        class="stage-pill"
        :class="{ active: activeStage === 1 }"
        @click="jumpToSnapshot('a')"
      >
        <div class="stage-pill-top">
          <span class="stage-num">STAGE 1 · (a)&rarr;(b)</span>
          <span class="stage-tag">Energy Conserved</span>
        </div>
        <div class="stage-eq">
          <em>m<sub>A</sub>gy</em><sub>1</sub> = &frac12;<em>m<sub>A</sub></em>(<em>v<sub>A</sub></em>)<sub>2</sub><sup>2</sup> &rArr; (<em>v<sub>A</sub></em>)<sub>2</sub> = {{ vA2.toFixed(2) }} m/s
        </div>
      </div>

      <div
        class="stage-pill impact-pill"
        :class="{ active: activeStage === 2 }"
        @click="jumpToSnapshot('b')"
      >
        <div class="stage-pill-top">
          <span class="stage-num">STAGE 2 · (b)&rarr;(c)</span>
          <span class="stage-tag">Momentum + Restitution</span>
        </div>
        <div class="stage-eq">
          (<em>v<sub>A</sub></em>)<sub>3</sub> = {{ vA3 >= 0 ? '+' : '' }}{{ vA3.toFixed(2) }} m/s, (<em>v<sub>B</sub></em>)<sub>3</sub> = +{{ vB3.toFixed(2) }} m/s
        </div>
      </div>

      <div
        class="stage-pill"
        :class="{ active: activeStage === 3 }"
        @click="jumpToSnapshot('d')"
      >
        <div class="stage-pill-top">
          <span class="stage-num">STAGE 3 · (c)&rarr;(d)</span>
          <span class="stage-tag">Energy Conserved</span>
        </div>
        <div class="stage-eq">
          <em>y</em><sub>4</sub> = {{ yB4.toFixed(3) }} m &rArr; &theta;<sub><em>B</em>4</sub> = {{ thetaB4Deg.toFixed(1) }}&deg;
        </div>
      </div>
    </div>

    <!-- Playback & 4-Subfigure Snapshot Bar -->
    <div class="playback-bar">
      <button class="play-btn" @click="togglePlay">
        {{ isPlaying ? '⏸ Pause' : (prog >= 0.995 ? '↺ Replay Drop' : '▶ Release Bob A') }}
      </button>
      <button class="action-btn" @click="resetSim">↺ Reset</button>

      <div class="subfig-jumps">
        <button class="snap-btn" :class="{ active: activeSubfig === 'a' }" @click="jumpToSnapshot('a')">(a) A<sub>1</sub></button>
        <button class="snap-btn" :class="{ active: activeSubfig === 'b' }" @click="jumpToSnapshot('b')">(b) Pre</button>
        <button class="snap-btn" :class="{ active: activeSubfig === 'c' }" @click="jumpToSnapshot('c')">(c) Post</button>
        <button class="snap-btn" :class="{ active: activeSubfig === 'd' }" @click="jumpToSnapshot('d')">(d) Peak &theta;</button>
      </div>

      <div class="time-slider-wrapper">
        <input
          type="range"
          min="0"
          max="1"
          step="0.002"
          v-model.number="prog"
          @input="isPlaying = false"
        />
      </div>
    </div>

    <!-- Sliders -->
    <div class="sim-controls-grid">
      <div class="control-box">
        <div class="control-header">
          <label>Bob A Mass (<em>m<sub>A</sub></em>)</label>
          <span class="val-chip">{{ mA.toFixed(1) }} kg</span>
        </div>
        <input type="range" min="0.5" max="5.0" step="0.1" v-model.number="mA" @input="onParamChange" />
      </div>

      <div class="control-box">
        <div class="control-header">
          <label>Bob B Mass (<em>m<sub>B</sub></em>)</label>
          <span class="val-chip">{{ mB.toFixed(1) }} kg</span>
        </div>
        <input type="range" min="0.5" max="5.0" step="0.1" v-model.number="mB" @input="onParamChange" />
      </div>

      <div class="control-box">
        <div class="control-header">
          <label>Cord Length (<em>l</em>)</label>
          <span class="val-chip">{{ cordL.toFixed(1) }} m</span>
        </div>
        <input type="range" min="0.8" max="2.5" step="0.1" v-model.number="cordL" @input="onParamChange" />
      </div>

      <div class="control-box">
        <div class="control-header">
          <label>Release Angle (&theta;<sub>0</sub>)</label>
          <span class="val-chip">{{ theta0Deg }}&deg;</span>
        </div>
        <input type="range" min="30" max="90" step="1" v-model.number="theta0Deg" @input="onParamChange" />
      </div>

      <div class="control-box">
        <div class="control-header">
          <label>Restitution (<em>e</em>)</label>
          <span class="val-chip highlight">{{ restE.toFixed(2) }}</span>
        </div>
        <input type="range" min="0" max="1" step="0.05" v-model.number="restE" @input="onParamChange" />
      </div>
    </div>

    <!-- Canvas Viewport -->
    <div class="sim-viewport-wrapper">
      <canvas ref="canvasRef" class="lab-canvas"></canvas>
    </div>

    <!-- Readout Dashboard (including Newton's 2nd Law Cord Tension Supplement on p. 890!) -->
    <div class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Bob B Max Elevation &amp; Angle</span>
        <span class="dash-val highlight">y<sub>4</sub> = {{ yB4.toFixed(3) }} <small>m</small> ({{ thetaB4Deg.toFixed(1) }}&deg;)</span>
        <span class="dash-sub">
          Bob A Final: &theta;<sub>A4</sub> = {{ vA3 < -1e-4 ? '−' : vA3 > 1e-4 ? '+' : '' }}{{ thetaA4Deg.toFixed(1) }}&deg; (y<sub>A4</sub> = {{ yA4.toFixed(3) }} m)
        </span>
      </div>

      <div class="dash-card" style="border-left: 4px solid #10b981;">
        <span class="dash-label">Impact Velocities (b)&rarr;(c)</span>
        <span class="dash-val">(v<sub>B</sub>)<sub>3</sub> = +{{ vB3.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">
          (v<sub>A</sub>)<sub>2</sub> = {{ vA2.toFixed(2) }} &rarr; (v<sub>A</sub>)<sub>3</sub> = {{ vA3 >= 0 ? '+' : '' }}{{ vA3.toFixed(2) }} m/s
        </span>
      </div>

      <div class="dash-card" style="border-left: 4px solid #ef4444;">
        <span class="dash-label">Impact Energy Loss (&Delta;E<sub>loss</sub>)</span>
        <span class="dash-val" :style="{ color: eLoss > 0.01 ? '#ef4444' : '#10b981' }">
          {{ eLoss.toFixed(2) }} <small>J</small> ({{ eLossPct.toFixed(1) }}%)
        </span>
        <span class="dash-sub">T<sub>2</sub> = {{ E1.toFixed(2) }} J &rarr; T<sub>3</sub> = {{ T3Total.toFixed(2) }} J</span>
      </div>

      <div class="dash-card" style="border-left: 4px solid #38bdf8;">
        <span class="dash-label">Peak Cord Tension A<sub>2</sub> (&Sigma;F<sub>n</sub>=ma<sub>n</sub>)</span>
        <span class="dash-val">{{ tensionA2.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">m<sub>A</sub>g + m<sub>A</sub>(v<sub>A</sub>)<sub>2</sub><sup>2</sup>/l = {{ (tensionA2 / (mA * g)).toFixed(2) }} W<sub>A</sub></span>
      </div>

      <div class="dash-card" style="border-left: 4px solid #f59e0b;">
        <span class="dash-label">Peak Cord Tension B<sub>3</sub> (&Sigma;F<sub>n</sub>=ma<sub>n</sub>)</span>
        <span class="dash-val">{{ tensionB3.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">m<sub>B</sub>g + m<sub>B</sub>(v<sub>B</sub>)<sub>3</sub><sup>2</sup>/l = {{ (tensionB3 / (mB * g)).toFixed(2) }} W<sub>B</sub></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'

const g = 9.81
const showRef = ref(false)
const activePreset = ref<'textbook' | 'cradle' | 'plastic' | 'rebound' | 'custom'>('textbook')

// Default parameters match Preset 1: Fig. 13.28 Textbook Setup
const mA = ref(2.0)
const mB = ref(3.0)
const cordL = ref(1.5)
const theta0Deg = ref(90)
const restE = ref(0.80)

// Normalized timeline [0..1]:
// [0.00 .. 0.44]: Stage 1 (A1 -> A2, Conservation of Energy)
// (0.44 .. 0.50]: Stage 2 Pre-Impact (b: A2, B2)
// (0.50 .. 0.56): Stage 2 Post-Impact (c: A3, B3 + flash)
// [0.56 .. 1.00]: Stage 3 (A3, B3 -> A4, B4, Conservation of Energy)
const prog = ref(0.0)
const isPlaying = ref(false)

const theta0Rad = computed(() => (theta0Deg.value * Math.PI) / 180)
const y1 = computed(() => cordL.value * (1 - Math.cos(theta0Rad.value)))
const E1 = computed(() => mA.value * g * y1.value)

// Stage 1 end: just before impact at bottom (A_2)
const vA2 = computed(() => Math.sqrt(2 * g * y1.value))

// Stage 2: Impact (Momentum + Restitution)
const vA3 = computed(() => ((mA.value - restE.value * mB.value) / (mA.value + mB.value)) * vA2.value)
const vB3 = computed(() => ((mA.value * (1 + restE.value)) / (mA.value + mB.value)) * vA2.value)

const TA3 = computed(() => 0.5 * mA.value * vA3.value * vA3.value)
const TB3 = computed(() => 0.5 * mB.value * vB3.value * vB3.value)
const T3Total = computed(() => TA3.value + TB3.value)
const eLoss = computed(() => Math.max(0, E1.value - T3Total.value))
const eLossPct = computed(() => (E1.value > 1e-9 ? (eLoss.value / E1.value) * 100 : 0))

// Stage 3: Peak elevations & angles (capped cleanly at 2*l so arccos stays well-defined)
const yB4Raw = computed(() => (vB3.value * vB3.value) / (2 * g))
const yB4 = computed(() => Math.min(2 * cordL.value, yB4Raw.value))
const thetaB4Rad = computed(() => Math.acos(Math.max(-1, Math.min(1, 1 - yB4.value / cordL.value))))
const thetaB4Deg = computed(() => (thetaB4Rad.value * 180) / Math.PI)

const yA4Raw = computed(() => (vA3.value * vA3.value) / (2 * g))
const yA4 = computed(() => Math.min(2 * cordL.value, yA4Raw.value))
const thetaA4Rad = computed(() => Math.acos(Math.max(-1, Math.min(1, 1 - yA4.value / cordL.value))))
const thetaA4Deg = computed(() => (thetaA4Rad.value * 180) / Math.PI)

// Supplement via Newton's 2nd Law (ΣF_n = m*a_n, highlighted on textbook p. 890!)
const tensionA2 = computed(() => mA.value * g + (mA.value * vA2.value * vA2.value) / cordL.value)
const tensionB3 = computed(() => mB.value * g + (mB.value * vB3.value * vB3.value) / cordL.value)

const activeStage = computed<1 | 2 | 3>(() => {
  if (prog.value <= 0.44) return 1
  if (prog.value < 0.56) return 2
  return 3
})

const activeSubfig = computed<'a' | 'b' | 'c' | 'd'>(() => {
  if (prog.value < 0.22) return 'a'
  if (prog.value <= 0.50) return 'b'
  if (prog.value < 0.78) return 'c'
  return 'd'
})

// Instantaneous kinematic & energy state across [0..1]
const liveState = computed(() => {
  const p = prog.value
  const l = cordL.value

  if (p <= 0.44) {
    // Stage 1: A swings from -theta0 down to 0
    const u = p / 0.44
    const sinHalf = -Math.sin(theta0Rad.value / 2) * Math.cos(0.5 * Math.PI * u)
    const thetaA = 2 * Math.asin(Math.max(-1, Math.min(1, sinHalf)))
    const yA = l * (1 - Math.cos(thetaA))
    const VA = mA.value * g * yA
    const TA = Math.max(0, E1.value - VA)
    const vA = Math.sqrt((2 * TA) / mA.value)
    const tensA = mA.value * g * Math.cos(thetaA) + (mA.value * vA * vA) / l
    const tensB = mB.value * g
    return {
      thetaA,
      thetaB: 0,
      vA,
      vB: 0,
      TA,
      VA,
      TB: 0,
      VB: 0,
      lost: 0,
      tensA,
      tensB,
      phaseTag: p < 0.04 ? '(a) Release from Rest A₁' : 'Stage 1: Swing Down (Energy Conserved)'
    }
  } else if (p <= 0.50) {
    // Stage 2a: Just before impact (b)
    return {
      thetaA: 0,
      thetaB: 0,
      vA: vA2.value,
      vB: 0,
      TA: E1.value,
      VA: 0,
      TB: 0,
      VB: 0,
      lost: 0,
      tensA: tensionA2.value,
      tensB: mB.value * g,
      phaseTag: '(b) Just Before Impact (A₂, B₂)'
    }
  } else if (p < 0.56) {
    // Stage 2b: Just after impact (c)
    const tensA3 = mA.value * g + (mA.value * vA3.value * vA3.value) / l
    return {
      thetaA: 0,
      thetaB: 0,
      vA: vA3.value,
      vB: vB3.value,
      TA: TA3.value,
      VA: 0,
      TB: TB3.value,
      VB: 0,
      lost: eLoss.value,
      tensA: tensA3,
      tensB: tensionB3.value,
      phaseTag: '(c) Just After Impact (A₃, B₃)'
    }
  } else {
    // Stage 3: Both bobs swing to peak (A_4, B_4)
    const u = (p - 0.56) / 0.44
    const s = Math.sin(0.5 * Math.PI * u)

    const dirA = Math.abs(vA3.value) < 1e-6 ? 0 : Math.sign(vA3.value)
    const sinHalfA = dirA * Math.sin(thetaA4Rad.value / 2) * s
    const thetaA = 2 * Math.asin(Math.max(-1, Math.min(1, sinHalfA)))
    const yA = l * (1 - Math.cos(thetaA))
    const VA = mA.value * g * yA
    const TA = Math.max(0, TA3.value - VA)
    const vA = dirA * Math.sqrt((2 * TA) / mA.value)

    const sinHalfB = Math.sin(thetaB4Rad.value / 2) * s
    const thetaB = 2 * Math.asin(Math.max(-1, Math.min(1, sinHalfB)))
    const yB = l * (1 - Math.cos(thetaB))
    const VB = mB.value * g * yB
    const TB = Math.max(0, TB3.value - VB)
    const vB = Math.sqrt((2 * TB) / mB.value)

    const tensA = Math.max(0, mA.value * g * Math.cos(thetaA) + (mA.value * vA * vA) / l)
    const tensB = Math.max(0, mB.value * g * Math.cos(thetaB) + (mB.value * vB * vB) / l)

    return {
      thetaA,
      thetaB,
      vA,
      vB,
      TA,
      VA,
      TB,
      VB,
      lost: eLoss.value,
      tensA,
      tensB,
      phaseTag: p > 0.97 ? '(d) Maximum Excursion (A₄, B₄)' : 'Stage 3: Post-Impact Rise (Energy Conserved)'
    }
  }
})

function applyPreset(name: 'textbook' | 'cradle' | 'plastic' | 'rebound') {
  activePreset.value = name
  isPlaying.value = false
  prog.value = 0
  cordL.value = 1.5
  if (name === 'textbook') {
    theta0Deg.value = 90
    mA.value = 2.0
    mB.value = 3.0
    restE.value = 0.80
  } else if (name === 'cradle') {
    theta0Deg.value = 90
    mA.value = 2.0
    mB.value = 2.0
    restE.value = 1.00
  } else if (name === 'plastic') {
    theta0Deg.value = 90
    mA.value = 2.0
    mB.value = 2.0
    restE.value = 0.00
  } else {
    theta0Deg.value = 75
    mA.value = 1.0
    mB.value = 4.0
    restE.value = 0.85
  }
}

function onParamChange() {
  activePreset.value = 'custom'
}

function jumpToSnapshot(snap: 'a' | 'b' | 'c' | 'd') {
  isPlaying.value = false
  if (snap === 'a') prog.value = 0.0
  else if (snap === 'b') prog.value = 0.47
  else if (snap === 'c') prog.value = 0.53
  else prog.value = 1.0
}

function togglePlay() {
  if (!isPlaying.value && prog.value >= 0.995) {
    prog.value = 0
  }
  isPlaying.value = !isPlaying.value
}

function resetSim() {
  isPlaying.value = false
  prog.value = 0
}

// ==================== CANVAS RENDERING ====================
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let logicalW = 780
const logicalH = 415
let resObs: ResizeObserver | null = null
let rafId: number | null = null
let lastTs = 0

function drawArrow(
  c: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  lw = 3,
  head = 9
) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 2) return
  const ang = Math.atan2(dy, dx)
  c.save()
  c.strokeStyle = color
  c.fillStyle = color
  c.lineWidth = lw
  c.beginPath()
  c.moveTo(x1, y1)
  c.lineTo(x2, y2)
  c.stroke()

  c.beginPath()
  c.moveTo(x2, y2)
  c.lineTo(x2 - head * Math.cos(ang - Math.PI / 6), y2 - head * Math.sin(ang - Math.PI / 6))
  c.lineTo(x2 - head * Math.cos(ang + Math.PI / 6), y2 - head * Math.sin(ang + Math.PI / 6))
  c.closePath()
  c.fill()
  c.restore()
}

function drawSphereBob(
  c: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  primaryHex: string,
  lightHex: string,
  darkHex: string,
  ghost = false
) {
  c.save()
  if (ghost) c.globalAlpha = 0.22
  const grad = c.createRadialGradient(cx - r * 0.35, cy - r * 0.35, r * 0.12, cx, cy, r)
  grad.addColorStop(0, lightHex)
  grad.addColorStop(0.55, primaryHex)
  grad.addColorStop(1, darkHex)

  c.fillStyle = grad
  c.strokeStyle = 'rgba(255,255,255,0.45)'
  c.lineWidth = 1.2
  c.beginPath()
  c.arc(cx, cy, r, 0, Math.PI * 2)
  c.fill()
  c.stroke()
  c.restore()
}

function drawCanvas() {
  if (!ctx || !canvasRef.value) return
  const w = logicalW
  const h = logicalH
  const c = ctx

  c.clearRect(0, 0, w, h)
  c.fillStyle = '#0f172a'
  c.fillRect(0, 0, w, h)

  // Left ~62%: Twin-Pendulum Rig; Right ~38%: Mechanical Energy & Momentum Partition
  const splitX = Math.floor(w * 0.61)

  c.strokeStyle = 'rgba(148, 163, 184, 0.2)'
  c.lineWidth = 1
  c.beginPath()
  c.moveTo(splitX, 14)
  c.lineTo(splitX, h - 14)
  c.stroke()

  const st = liveState.value
  const p = prog.value

  // ==================== LEFT PANEL: TWIN-PENDULUM RIG (FIG. 13.28) ====================
  c.fillStyle = '#e2e8f0'
  c.font = 'bold 11px sans-serif'
  c.textAlign = 'left'
  c.fillText(st.phaseTag, 16, 24)

  const bobRA = Math.round(11 + mA.value * 1.3)
  const bobRB = Math.round(11 + mB.value * 1.3)
  const rContact = Math.round((bobRA + bobRB) / 2)

  // Ensure pendulum cord fits both horizontally (left release up to 90°, right rise up to >90°) and vertically
  const centerX = Math.floor(splitX * 0.50)
  const ceilingY = 66
  const pivotY = ceilingY + 14
  const maxLPxHoriz = Math.min(centerX - rContact - 34, splitX - centerX - rContact - 46)
  const maxLPxVert = h - pivotY - 76
  const lPx = Math.max(95, Math.min(maxLPxHoriz, maxLPxVert))

  const pivotAX = centerX - bobRA
  const pivotBX = centerX + bobRB
  const datumY = pivotY + lPx

  // Ceiling support block & twin blue triangular clevis pins (exact Fig. 13.28 aesthetic!)
  const beamW = Math.max(84, bobRA + bobRB + 56)
  const beamGrad = c.createLinearGradient(0, ceilingY - 12, 0, ceilingY)
  beamGrad.addColorStop(0, '#475569')
  beamGrad.addColorStop(1, '#94a3b8')
  c.fillStyle = beamGrad
  c.fillRect(centerX - beamW / 2, ceilingY - 12, beamW, 12)

  c.strokeStyle = '#cbd5e1'
  c.lineWidth = 1.5
  c.beginPath()
  c.moveTo(centerX - beamW / 2, ceilingY)
  c.lineTo(centerX + beamW / 2, ceilingY)
  c.stroke()

  // Two adjacent triangular clevises
  for (const px of [pivotAX, pivotBX]) {
    c.fillStyle = '#38bdf8'
    c.strokeStyle = '#bae6fd'
    c.lineWidth = 1.1
    c.beginPath()
    c.moveTo(px - 8, ceilingY)
    c.lineTo(px + 8, ceilingY)
    c.lineTo(px, pivotY)
    c.closePath()
    c.fill()
    c.stroke()
  }

  // Horizontal dashed Datum line y = 0 at bottom equilibrium (Fig. 13.28d)
  c.save()
  c.setLineDash([5, 4])
  c.strokeStyle = 'rgba(148, 163, 184, 0.45)'
  c.lineWidth = 1.3
  c.beginPath()
  c.moveTo(22, datumY)
  c.lineTo(splitX - 18, datumY)
  c.stroke()
  c.restore()

  c.fillStyle = '#94a3b8'
  c.font = '10px monospace'
  c.textAlign = 'left'
  c.fillText('Datum (y = 0)', 22, datumY + 14)

  // Ghost Reference A_1 (initial release) & B_4 (peak swing) + circular swing arcs
  const a1X = pivotAX - lPx * Math.sin(theta0Rad.value)
  const a1Y = pivotY + lPx * Math.cos(theta0Rad.value)

  // Swing arc for A (left) and B (right)
  c.save()
  c.setLineDash([3, 4])
  c.strokeStyle = 'rgba(56, 189, 248, 0.25)'
  c.lineWidth = 1.2
  c.beginPath()
  c.arc(pivotAX, pivotY, lPx, Math.PI / 2, Math.PI / 2 + theta0Rad.value)
  c.stroke()

  if (thetaB4Rad.value > 0.03) {
    c.strokeStyle = 'rgba(248, 113, 113, 0.28)'
    c.beginPath()
    c.arc(pivotBX, pivotY, lPx, Math.PI / 2 - thetaB4Rad.value, Math.PI / 2)
    c.stroke()
  }
  c.restore()

  if (p > 0.04) {
    c.save()
    c.setLineDash([3, 3])
    c.strokeStyle = 'rgba(56, 189, 248, 0.24)'
    c.beginPath()
    c.moveTo(pivotAX, pivotY)
    c.lineTo(a1X, a1Y)
    c.stroke()
    c.restore()
    drawSphereBob(c, a1X, a1Y, bobRA, '#0284c7', '#bae6fd', '#0369a1', true)
    c.fillStyle = 'rgba(186, 230, 253, 0.55)'
    c.font = '10px sans-serif'
    c.textAlign = 'center'
    c.fillText('A₁', a1X, a1Y - bobRA - 5)
  }

  // Ghost peak B_4 preview when before peak
  const b4X = pivotBX + lPx * Math.sin(thetaB4Rad.value)
  const b4Y = pivotY + lPx * Math.cos(thetaB4Rad.value)
  if (p < 0.96 && thetaB4Rad.value > 0.05) {
    drawSphereBob(c, b4X, b4Y, bobRB, '#dc2626', '#fecaca', '#991b1b', true)
    c.fillStyle = 'rgba(254, 202, 202, 0.5)'
    c.font = '10px sans-serif'
    c.textAlign = 'center'
    c.fillText('B₄', b4X + 6, b4Y - bobRB - 5)
  }

  // Live coordinates of Bob A and Bob B
  const curAX = pivotAX + lPx * Math.sin(st.thetaA)
  const curAY = pivotY + lPx * Math.cos(st.thetaA)
  const curBX = pivotBX + lPx * Math.sin(st.thetaB)
  const curBY = pivotY + lPx * Math.cos(st.thetaB)

  // Vertical reference line from pivotB for angle θ arc (like Fig. 13.28d)
  if (st.thetaB > 0.08) {
    c.save()
    c.setLineDash([3, 3])
    c.strokeStyle = 'rgba(226, 232, 240, 0.45)'
    c.beginPath()
    c.moveTo(pivotBX, pivotY)
    c.lineTo(pivotBX, pivotY + 58)
    c.stroke()
    c.restore()

    c.strokeStyle = '#fbbf24'
    c.lineWidth = 1.5
    c.beginPath()
    c.arc(pivotBX, pivotY, 40, Math.PI / 2 - st.thetaB, Math.PI / 2)
    c.stroke()

    const midAng = Math.PI / 2 - st.thetaB / 2
    c.fillStyle = '#fde68a'
    c.font = 'bold 11px sans-serif'
    c.textAlign = 'left'
    c.fillText(
      `θ=${((st.thetaB * 180) / Math.PI).toFixed(0)}°`,
      pivotBX + 44 * Math.cos(midAng) - 4,
      pivotY + 44 * Math.sin(midAng) + 8
    )
  }

  // Elevation callout y_4 on right when Bob B rises (matching Fig. 13.28d!)
  if (datumY - curBY > 14) {
    const dimX = Math.min(splitX - 26, Math.max(curBX + bobRB + 18, b4X + bobRB + 12))
    c.strokeStyle = 'rgba(226, 232, 240, 0.5)'
    c.lineWidth = 1.1
    c.beginPath()
    c.moveTo(curBX + bobRB + 3, curBY)
    c.lineTo(dimX + 6, curBY)
    c.moveTo(dimX, curBY)
    c.lineTo(dimX, datumY)
    c.stroke()

    const curYB = cordL.value * (1 - Math.cos(st.thetaB))
    c.fillStyle = '#fde68a'
    c.font = 'bold 10px monospace'
    c.textAlign = 'right'
    c.fillText(`y=${curYB.toFixed(2)}m`, dimX - 4, (curBY + datumY) / 2 + 4)
  }

  // Live Pendulum Cords (cyan-blue matching Fig. 13.28)
  c.strokeStyle = '#38bdf8'
  c.lineWidth = 2.4
  c.beginPath()
  c.moveTo(pivotAX, pivotY)
  c.lineTo(curAX, curAY)
  c.stroke()

  c.strokeStyle = '#7dd3fc'
  c.beginPath()
  c.moveTo(pivotBX, pivotY)
  c.lineTo(curBX, curBY)
  c.stroke()

  // Cord length 'l' labels
  c.fillStyle = '#bae6fd'
  c.font = 'italic bold 11px serif'
  c.textAlign = 'center'
  c.fillText('l', (pivotAX + curAX) / 2 - 9, (pivotY + curAY) / 2 - 4)
  c.fillText('l', (pivotBX + curBX) / 2 + 10, (pivotY + curBY) / 2 - 4)

  // Impact Flash Shockwave during Stage 2 transition
  if (p > 0.49 && p < 0.555) {
    const uFlash = (p - 0.49) / 0.065
    const rRing = 14 + Math.sin(uFlash * Math.PI) * 22
    c.save()
    c.strokeStyle = '#fbbf24'
    c.fillStyle = 'rgba(251, 191, 36, 0.25)'
    c.lineWidth = 2.2
    c.beginPath()
    c.arc(centerX, datumY, rRing, 0, Math.PI * 2)
    c.fill()
    c.stroke()
    c.restore()
  }

  // Draw Sky-Blue Bob A & Crimson-Red Bob B
  drawSphereBob(c, curAX, curAY, bobRA, '#0ea5e9', '#e0f2fe', '#0369a1', false)
  drawSphereBob(c, curBX, curBY, bobRB, '#ef4444', '#fee2e2', '#991b1b', false)

  // Subscripted A & B labels matching Fig. 13.28
  const subIdx = activeStage.value === 1 ? (p < 0.04 ? '₁' : '₁→₂') : activeSubfig.value === 'b' ? '₂' : activeSubfig.value === 'c' ? '₃' : '₄'
  c.font = 'bold 11px sans-serif'
  c.textAlign = 'center'
  c.fillStyle = '#bae6fd'
  c.fillText(`A${subIdx}`, curAX, curAY + bobRA + 15)
  c.fillStyle = '#fca5a5'
  c.fillText(`B${subIdx}`, curBX, curBY + bobRB + 15)

  // Live Emerald-Green Velocity Vectors (modeled directly on Fig. 13.28b & 13.28c!)
  const vScale = 52 / Math.max(3.5, vA2.value * 1.25)

  if (p < 0.03) {
    c.fillStyle = '#94a3b8'
    c.font = 'bold 11px monospace'
    c.textAlign = 'center'
    c.fillText('(v_A)₁ = 0', curAX, curAY + bobRA + 30)
  } else if (activeSubfig.value === 'b' && p > 0.44) {
    // Pre-impact green arrow pushing into A_2 from left (exact Fig. 13.28b!)
    const lenV = Math.max(28, vA2.value * vScale)
    drawArrow(c, curAX - bobRA - lenV - 4, curAY, curAX - bobRA - 3, curAY, '#10b981', 4, 10)
    c.fillStyle = '#6ee7b7'
    c.font = 'bold 11px monospace'
    c.textAlign = 'right'
    c.fillText(`(v_A)₂=${vA2.value.toFixed(2)}m/s`, curAX - bobRA - 8, curAY - 10)
    c.textAlign = 'left'
    c.fillText('(v_B)₂ = 0', curBX + bobRB + 8, curBY - 6)
  } else if (activeSubfig.value === 'c' && p >= 0.50 && p < 0.58) {
    // Post-impact green arrows (exact Fig. 13.28c!)
    if (Math.abs(vA3.value) > 0.05) {
      const lenVA = Math.max(20, Math.abs(vA3.value) * vScale)
      if (vA3.value > 0) {
        drawArrow(c, curAX - bobRA - lenVA - 4, curAY, curAX - bobRA - 3, curAY, '#10b981', 3.5, 9)
      } else {
        drawArrow(c, curAX - bobRA - 3, curAY, curAX - bobRA - lenVA - 4, curAY, '#10b981', 3.5, 9)
      }
    }
    c.fillStyle = '#6ee7b7'
    c.font = 'bold 10px monospace'
    c.textAlign = 'right'
    c.fillText(`(v_A)₃=${vA3.value.toFixed(2)}`, curAX - bobRA - 6, curAY - 12)

    const lenVB = Math.max(26, vB3.value * vScale)
    drawArrow(c, curBX + bobRB + 3, curBY, curBX + bobRB + 3 + lenVB, curBY, '#10b981', 4, 10)
    c.textAlign = 'left'
    c.fillText(`(v_B)₃=${vB3.value.toFixed(2)}m/s`, curBX + bobRB + 6, curBY - 12)
  } else {
    // Tangential velocity vectors during live swing
    if (Math.abs(st.vA) > 0.15) {
      const tx = Math.cos(st.thetaA) * Math.sign(st.vA)
      const ty = -Math.sin(st.thetaA) * Math.sign(st.vA)
      const len = Math.max(16, Math.abs(st.vA) * vScale)
      drawArrow(c, curAX, curAY, curAX + tx * (bobRA + len), curAY + ty * (bobRA + len), '#10b981', 2.8, 8)
    }
    if (Math.abs(st.vB) > 0.15) {
      const tx = Math.cos(st.thetaB)
      const ty = -Math.sin(st.thetaB)
      const len = Math.max(16, Math.abs(st.vB) * vScale)
      drawArrow(c, curBX, curBY, curBX + tx * (bobRB + len), curBY + ty * (bobRB + len), '#10b981', 2.8, 8)
    }
  }

  // Bottom-left live Cord Tension box (Newton's 2nd Law supplement on p. 890)
  c.fillStyle = 'rgba(15, 23, 42, 0.85)'
  c.strokeStyle = 'rgba(56, 189, 248, 0.3)'
  c.lineWidth = 1
  c.beginPath()
  c.roundRect(14, h - 42, splitX - 30, 30, 6)
  c.fill()
  c.stroke()

  c.fillStyle = '#cbd5e1'
  c.font = '10px monospace'
  c.textAlign = 'left'
  c.fillText(
    `ΣF_n = m·a_n Cord Tensions  |  Live T_A = ${st.tensA.toFixed(1)} N (Peak A₂: ${tensionA2.value.toFixed(1)} N)  ·  Live T_B = ${st.tensB.toFixed(1)} N (Peak B₃: ${tensionB3.value.toFixed(1)} N)`,
    22,
    h - 23
  )

  // ==================== RIGHT PANEL: STACKED ENERGY & MOMENTUM PARTITION ====================
  const rx = splitX + 16
  const rw = w - rx - 16

  // 1. Compact 4-Badge Subfigure Strip
  const badges: Array<{ id: 'a' | 'b' | 'c' | 'd'; label: string }> = [
    { id: 'a', label: '(a) Release' },
    { id: 'b', label: '(b) Pre' },
    { id: 'c', label: '(c) Post' },
    { id: 'd', label: '(d) Peak θ' }
  ]
  const bw = (rw - 9) / 4
  badges.forEach((b, idx) => {
    const bx = rx + idx * (bw + 3)
    const isAct = activeSubfig.value === b.id
    c.fillStyle = isAct ? 'rgba(2, 132, 199, 0.35)' : 'rgba(30, 41, 59, 0.9)'
    c.strokeStyle = isAct ? '#38bdf8' : '#334155'
    c.lineWidth = isAct ? 1.5 : 1
    c.beginPath()
    c.roundRect(bx, 14, bw, 22, 5)
    c.fill()
    c.stroke()

    c.fillStyle = isAct ? '#f0f9ff' : '#94a3b8'
    c.font = isAct ? 'bold 10px sans-serif' : '10px sans-serif'
    c.textAlign = 'center'
    c.fillText(b.label, bx + bw / 2, 29)
  })

  // 2. Horizontal Stacked Total Energy Bar (proving T_A + V_A + T_B + V_B + ΔE_loss === E_1!)
  c.fillStyle = '#cbd5e1'
  c.font = 'bold 11px sans-serif'
  c.textAlign = 'left'
  c.fillText(`SYSTEM ENERGY BUDGET (E₁ = ${E1.value.toFixed(1)} J)`, rx, 56)

  const stackY = 64
  const stackH = 22
  const eTot = Math.max(0.01, E1.value)
  const segments = [
    { val: st.TA, color: '#38bdf8', label: 'T_A' },
    { val: st.VA, color: '#0284c7', label: 'V_A' },
    { val: st.TB, color: '#fb7185', label: 'T_B' },
    { val: st.VB, color: '#e11d48', label: 'V_B' },
    { val: st.lost, color: '#64748b', label: 'ΔE_lost' }
  ]

  c.fillStyle = '#1e293b'
  c.beginPath()
  c.roundRect(rx, stackY, rw, stackH, 5)
  c.fill()

  let curSX = rx
  segments.forEach((seg) => {
    const sw = (seg.val / eTot) * rw
    if (sw > 0.5) {
      c.fillStyle = seg.color
      c.fillRect(curSX, stackY, sw, stackH)
      if (sw > 30) {
        c.fillStyle = '#ffffff'
        c.font = 'bold 9px monospace'
        c.textAlign = 'center'
        c.fillText(seg.label, curSX + sw / 2, stackY + 14)
      }
      curSX += sw
    }
  })

  c.strokeStyle = '#475569'
  c.lineWidth = 1
  c.strokeRect(rx, stackY, rw, stackH)

  // 3. Individual Vertical Partition Bars (T_A, V_A, T_B, V_B, ΔE_loss)
  const chartTop = 108
  const chartBot = h - 98
  const chartH = chartBot - chartTop

  c.strokeStyle = '#475569'
  c.lineWidth = 1.2
  c.beginPath()
  c.moveTo(rx, chartBot)
  c.lineTo(rx + rw, chartBot)
  c.stroke()

  const colW = rw / 5
  segments.forEach((seg, i) => {
    const barW = Math.min(30, colW * 0.62)
    const bx = rx + i * colW + (colW - barW) / 2
    const bh = Math.max(0, (seg.val / eTot) * (chartH - 18))
    const by = chartBot - bh

    c.fillStyle = seg.color
    c.beginPath()
    c.roundRect(bx, by, barW, Math.max(2, bh), [4, 4, 0, 0])
    c.fill()

    c.fillStyle = '#e2e8f0'
    c.font = 'bold 10px monospace'
    c.textAlign = 'center'
    c.fillText(`${seg.val.toFixed(1)}J`, bx + barW / 2, by - 5)

    c.fillStyle = '#94a3b8'
    c.font = 'bold 10px sans-serif'
    c.fillText(seg.label, bx + barW / 2, chartBot + 15)
  })

  // 4. Horizontal Linear Momentum Tracker at bottom right
  const momTop = h - 68
  c.fillStyle = 'rgba(30, 41, 59, 0.85)'
  c.strokeStyle = activeStage.value === 2 ? '#10b981' : '#334155'
  c.lineWidth = activeStage.value === 2 ? 1.6 : 1
  c.beginPath()
  c.roundRect(rx, momTop, rw, 54, 7)
  c.fill()
  c.stroke()

  const pxA = mA.value * st.vA * Math.cos(st.thetaA)
  const pxB = mB.value * st.vB * Math.cos(st.thetaB)
  const pxTot = pxA + pxB
  const pImpact = mA.value * vA2.value

  c.fillStyle = activeStage.value === 2 ? '#6ee7b7' : '#cbd5e1'
  c.font = 'bold 10px sans-serif'
  c.textAlign = 'left'
  c.fillText(
    activeStage.value === 2
      ? '✓ HORIZONTAL MOMENTUM CONSERVED IN IMPACT!'
      : 'HORIZONTAL MOMENTUM p_x = m_A v_Ax + m_B v_Bx',
    rx + 10,
    momTop + 17
  )

  c.fillStyle = '#94a3b8'
  c.font = '10px monospace'
  c.fillText(
    `Live p_x = ${pxTot.toFixed(2)} N·s   |   Impact p₂ = p₃ = ${pImpact.toFixed(2)} N·s`,
    rx + 10,
    momTop + 34
  )
  c.fillStyle = '#fde68a'
  c.fillText(
    `Restitution Check: (v_B₃ − v_A₃)/v_A₂ = ${((vB3.value - vA3.value) / Math.max(1e-6, vA2.value)).toFixed(2)} = e`,
    rx + 10,
    momTop + 47
  )
}

function tick(ts: number) {
  if (!lastTs) lastTs = ts
  const dt = Math.min(0.05, (ts - lastTs) / 1000)
  lastTs = ts

  if (isPlaying.value) {
    // Deliberate slow-motion dwell across Stage 2 [0.44..0.56] so Pre-Impact (b) & Post-Impact (c) are clearly visible!
    const speed = prog.value >= 0.44 && prog.value <= 0.56 ? 0.16 : 0.40
    prog.value += dt * speed
    if (prog.value >= 1.0) {
      prog.value = 1.0
      isPlaying.value = false
    }
  }

  drawCanvas()
  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  if (canvasRef.value) {
    ctx = canvasRef.value.getContext('2d')
    const updateSize = () => {
      if (!canvasRef.value) return
      const rect = canvasRef.value.getBoundingClientRect()
      if (rect.width > 0) logicalW = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasRef.value.width = Math.round(logicalW * dpr)
      canvasRef.value.height = Math.round(logicalH * dpr)
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawCanvas()
    }
    updateSize()
    if (typeof ResizeObserver !== 'undefined') {
      resObs = new ResizeObserver(updateSize)
      resObs.observe(canvasRef.value)
    }
  }
  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (rafId !== null) cancelAnimationFrame(rafId)
  if (resObs) resObs.disconnect()
})
</script>

<style scoped>
.sim-card {
  background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid var(--vp-c-divider, rgba(226, 232, 240, 0.8));
  border-radius: 14px;
  padding: 1.4rem;
  margin: 1.75rem 0;
  box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);
}

.sim-header {
  margin-bottom: 1rem;
}

.sim-header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.45rem;
}

.sim-badge-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.sim-badge {
  background: var(--vp-c-brand-1, #0284c7);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  letter-spacing: 0.04em;
}

.sim-badge-secondary {
  background: var(--vp-c-bg-elv, #e2e8f0);
  color: var(--vp-c-text-2, #475569);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  letter-spacing: 0.03em;
}

.ref-toggle-btn {
  padding: 0.32rem 0.78rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1, #0284c7);
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.1));
  color: var(--vp-c-brand-1, #0284c7);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
}

.ref-toggle-btn:hover {
  background: var(--vp-c-brand-1, #0284c7);
  color: #ffffff;
}

.sim-title {
  margin: 0.2rem 0 0.4rem !important;
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  color: var(--vp-c-text-1, #0f172a);
}

.sim-desc {
  margin: 0 !important;
  font-size: 0.87rem;
  color: var(--vp-c-text-2, #475569);
  line-height: 1.5;
}

/* Reference Panel */
.slide-ref-panel {
  display: grid;
  grid-template-columns: minmax(240px, 390px) 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.9rem 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
}

.slide-ref-img-wrap {
  background: #ffffff;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.28);
  display: flex;
  justify-content: center;
}

.slide-ref-img-wrap img {
  max-height: 175px;
  width: auto;
  object-fit: contain;
}

.slide-ref-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-brand-1, #0284c7);
  margin-bottom: 0.25rem;
}

.slide-ref-info p {
  margin: 0 !important;
  font-size: 0.83rem;
  line-height: 1.5;
  color: var(--vp-c-text-2, #475569);
}

@media (max-width: 720px) {
  .slide-ref-panel {
    grid-template-columns: 1fr;
  }
}

/* Presets Bar */
.sim-presets {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.85rem;
  padding: 0.6rem 0.8rem;
  background: var(--vp-c-bg-elv, #f1f5f9);
  border-radius: 8px;
}

.preset-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--vp-c-text-2, #64748b);
}

.preset-btn {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  color: var(--vp-c-text-1, #334155);
  padding: 0.28rem 0.68rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.18s ease;
}

.preset-btn:hover {
  border-color: var(--vp-c-brand-1, #0284c7);
  color: var(--vp-c-brand-1, #0284c7);
}

.preset-btn.active {
  background: var(--vp-c-brand-1, #0284c7);
  border-color: var(--vp-c-brand-1, #0284c7);
  color: #ffffff;
}

/* 3-Stage Principle Banner */
.stage-banner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.6rem;
  margin-bottom: 0.85rem;
}

.stage-pill {
  padding: 0.55rem 0.8rem;
  border-radius: 9px;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  cursor: pointer;
  transition: all 0.18s ease;
}

.stage-pill.active {
  border-color: #0284c7;
  background: rgba(2, 132, 199, 0.09);
  box-shadow: 0 0 0 1px rgba(2, 132, 199, 0.25);
}

.stage-pill.impact-pill.active {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  box-shadow: 0 0 0 1px rgba(16, 185, 129, 0.25);
}

.stage-pill-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
}

.stage-num {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--vp-c-text-1, #0f172a);
}

.stage-tag {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  background: var(--vp-c-bg-elv, #f1f5f9);
  color: var(--vp-c-brand-1, #0284c7);
}

.impact-pill .stage-tag {
  color: #059669;
}

.stage-eq {
  font-size: 0.76rem;
  font-family: var(--vp-font-family-mono, monospace);
  color: var(--vp-c-text-2, #475569);
}

/* Playback Bar */
.playback-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.85rem;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  padding: 0.65rem 0.95rem;
  border-radius: 8px;
}

.play-btn {
  background: var(--vp-c-brand-1, #0284c7);
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.42rem 0.95rem;
  border-radius: 7px;
  cursor: pointer;
}

.action-btn {
  background: var(--vp-c-bg-elv, #f1f5f9);
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  color: var(--vp-c-text-1, #334155);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 7px;
  cursor: pointer;
}

.subfig-jumps {
  display: flex;
  gap: 0.3rem;
}

.snap-btn {
  padding: 0.3rem 0.55rem;
  font-size: 0.74rem;
  font-weight: 700;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  background: var(--vp-c-bg, #ffffff);
  color: var(--vp-c-text-2, #475569);
  cursor: pointer;
}

.snap-btn.active {
  border-color: var(--vp-c-brand-1, #0284c7);
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.12));
  color: var(--vp-c-brand-1, #0284c7);
}

.time-slider-wrapper {
  flex: 1;
  min-width: 160px;
  display: flex;
  align-items: center;
}

.time-slider-wrapper input[type="range"] {
  width: 100%;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1, #0284c7);
}

/* Controls Grid */
.sim-controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
  gap: 0.7rem;
  margin-bottom: 0.95rem;
}

.control-box {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 0.65rem 0.8rem;
}

.control-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.35rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #0f172a);
}

.val-chip {
  background: var(--vp-c-bg-elv, #f1f5f9);
  padding: 0.12rem 0.42rem;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--vp-c-brand-1, #0284c7);
}

.val-chip.highlight {
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.14));
}

.control-box input[type="range"] {
  width: 100%;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1, #0284c7);
}

/* Canvas Viewport */
.sim-viewport-wrapper {
  background: #0f172a;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #1e293b;
  margin-bottom: 1rem;
}

.lab-canvas {
  width: 100%;
  height: 415px;
  display: block;
}

/* Readout Dashboard */
.sim-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 0.7rem;
}

.dash-card {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 9px;
  padding: 0.72rem 0.85rem;
  display: flex;
  flex-direction: column;
}

.dash-card.result-main {
  border-left: 4px solid var(--vp-c-brand-1, #0284c7);
}

.dash-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-text-2, #64748b);
  margin-bottom: 0.18rem;
}

.dash-val {
  font-size: 1.1rem;
  font-weight: 800;
  font-family: var(--vp-font-family-mono, monospace);
  color: var(--vp-c-text-1, #0f172a);
}

.dash-val.highlight {
  color: var(--vp-c-brand-1, #0284c7);
}

.dash-sub {
  font-size: 0.71rem;
  color: var(--vp-c-text-2, #64748b);
  margin-top: 0.2rem;
}
</style>
