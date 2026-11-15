<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-header-top">
        <div class="sim-badge-group">
          <span class="sim-badge">MODULE 5</span>
          <span class="sim-badge-secondary">IMPULSE &amp; LINEAR MOMENTUM · SEC. 13.3</span>
        </div>
        <button class="ref-toggle-btn" @click="showRef = !showRef">
          📖 {{ showRef ? 'Hide' : 'Show' }} Textbook Figure
        </button>
      </div>
      <h3 class="sim-title">Linear Momentum Conservation &amp; Impulsive Motion Lab</h3>
      <p class="sim-desc">
        Modeled directly on Beer &amp; Johnston Section 13.3 (pp. 859–860): verify zero net horizontal momentum (&Sigma;<em>p<sub>x</sub></em> = 0) and stationary mass center <strong>G</strong> for two boats pulled together (Fig. 13.18), and analyze millisecond impulsive forces <strong>F</strong><sub>avg</sub>&middot;&Delta;<em>t</em> &gg; <strong>W</strong>&middot;&Delta;<em>t</em> in a baseball strike (Figs. 13.16, 13.17 &amp; 13.19).
      </p>
    </div>

    <!-- Collapsible Textbook Figure Reference Card -->
    <div v-if="showRef" class="slide-ref-panel" :class="{ 'wide-gallery': activeTab === 'baseball' }">
      <div v-if="activeTab === 'boats'" class="slide-ref-img-wrap">
        <img
          :src="withBase('/images/physics/mod5/mod5_fig13_18_two_boats_momentum.png')"
          alt="Beer and Johnston Fig 13.18 Two Boats Momentum Conservation"
        />
      </div>
      <div v-else class="slide-ref-multi-wrap">
        <div class="ref-subfig">
          <img
            :src="withBase('/images/physics/mod5/mod5_fig13_17_impulse_momentum_diagram.png')"
            alt="Fig 13.17 Impulse Momentum Vector Diagram"
          />
          <span>Fig. 13.17: <em>m</em><strong>v</strong><sub>1</sub> + <strong>Imp</strong><sub>1&rarr;2</sub> = <em>m</em><strong>v</strong><sub>2</sub></span>
        </div>
        <div class="ref-subfig">
          <img
            :src="withBase('/images/physics/mod5/mod5_fig13_19_baseball_impulsive.png')"
            alt="Fig 13.19 Baseball Impulsive Motion"
          />
          <span>Fig. 13.19: Impulsive Bat Strike (<strong>W</strong>&Delta;<em>t</em> &approx; 0)</span>
        </div>
        <div class="ref-subfig">
          <img
            :src="withBase('/images/physics/mod5/mod5_fig13_16_impulse_components.png')"
            alt="Fig 13.16 Force Time Impulse Area"
          />
          <span>Fig. 13.16: Force–Time Impulse Area</span>
        </div>
      </div>

      <div class="slide-ref-info">
        <span class="slide-ref-tag">
          {{ activeTab === 'boats' ? 'Textbook Reference · Sec. 13.3, Fig. 13.18 (p. 860)' : 'Textbook Reference · Sec. 13.3, Figs. 13.16, 13.17 & 13.19 (pp. 859–860)' }}
        </span>
        <p v-if="activeTab === 'boats'">
          <strong>Beer &amp; Johnston Fig. 13.18 (p. 860): Linear momentum conservation for two boats pulled together from rest.</strong>
          Because external weights and buoyant forces balance vertically and horizontal water drag is negligible (&Sigma;<strong>Imp</strong><sub><em>x</em></sub> = 0), initial rest momentum is preserved:
          0 = <em>m<sub>A</sub></em><strong>v</strong>&prime;<sub><em>A</em></sub> + <em>m<sub>B</sub></em><strong>v</strong>&prime;<sub><em>B</em></sub>, and both boats meet right at their stationary mass center <strong>G</strong>.
        </p>
        <p v-else>
          <strong>Beer &amp; Johnston Figs. 13.16, 13.17 &amp; 13.19:</strong> Over a millisecond bat-ball contact &Delta;<em>t</em>, the time integral of contact force
          &int;<strong>F</strong> d<em>t</em> = <strong>F</strong><sub>avg</sub>&middot;&Delta;<em>t</em> reaches thousands of newtons, whereas gravitational impulse
          <strong>W</strong>&middot;&Delta;<em>t</em> is negligible (non-impulsive force).
        </p>
      </div>
    </div>

    <!-- Two-Tab Mode Switcher -->
    <div class="mode-toggles">
      <button
        class="mode-btn"
        :class="{ active: activeTab === 'boats' }"
        @click="activeTab = 'boats'"
      >
        🚣 Two Boats Pulled Together (Fig. 13.18)
      </button>
      <button
        class="mode-btn"
        :class="{ active: activeTab === 'baseball' }"
        @click="activeTab = 'baseball'"
      >
        ⚾ Variable Force Impulse &amp; Baseball Strike (Figs. 13.16, 13.17 &amp; 13.19)
      </button>
    </div>

    <!-- ================= TAB 1: TWO BOATS PULLED TOGETHER ================= -->
    <div v-show="activeTab === 'boats'">
      <div class="sim-presets">
        <span class="preset-label">Presets:</span>
        <button
          class="preset-btn"
          :class="{ active: boatPreset === 'asymmetric' }"
          @click="applyBoatPreset('asymmetric')"
        >
          Fig. 13.18 Asymmetric (m<sub>A</sub>=120kg, m<sub>B</sub>=80kg)
        </button>
        <button
          class="preset-btn"
          :class="{ active: boatPreset === 'equal' }"
          @click="applyBoatPreset('equal')"
        >
          Equal Boats (100kg vs 100kg)
        </button>
        <button
          class="preset-btn"
          :class="{ active: boatPreset === 'barge' }"
          @click="applyBoatPreset('barge')"
        >
          Heavy Barge vs Skiff (280kg vs 50kg)
        </button>
        <button
          class="preset-btn toggle-pill"
          :class="{ active: showVertForces }"
          @click="showVertForces = !showVertForces"
        >
          {{ showVertForces ? '✓ Vertical W & Buoyancy Shown' : '+ Show W & Buoyancy' }}
        </button>
      </div>

      <!-- Playback Bar -->
      <div class="playback-bar">
        <button class="play-btn" @click="toggleBoatsPlay">
          {{ isPlayingBoats ? '⏸ Pause' : (boatTime >= tMeet - 0.005 ? '↺ Replay Pull' : '▶ Pull Rope') }}
        </button>
        <button class="action-btn" @click="resetBoats">↺ Reset</button>
        <div class="time-slider-wrapper">
          <span class="time-label">
            t: <strong>{{ boatTime.toFixed(2) }} s</strong> / {{ tMeet.toFixed(2) }} s
          </span>
          <input
            type="range"
            min="0"
            :max="tMeet"
            step="0.01"
            v-model.number="boatTime"
            @input="isPlayingBoats = false"
          />
        </div>
      </div>

      <!-- Sliders -->
      <div class="sim-controls-grid">
        <div class="control-box">
          <div class="control-header">
            <label>Boat A + Person Mass (<em>m<sub>A</sub></em>)</label>
            <span class="val-chip">{{ mA }} kg</span>
          </div>
          <input type="range" min="60" max="300" step="5" v-model.number="mA" @input="onBoatParamChange" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Boat B Mass (<em>m<sub>B</sub></em>)</label>
            <span class="val-chip">{{ mB }} kg</span>
          </div>
          <input type="range" min="40" max="300" step="5" v-model.number="mB" @input="onBoatParamChange" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Initial Separation (<em>d</em><sub>0</sub>)</label>
            <span class="val-chip">{{ d0 }} m</span>
          </div>
          <input type="range" min="10" max="20" step="0.5" v-model.number="d0" @input="onBoatParamChange" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Rope Pulling Tension (<em>T</em>)</label>
            <span class="val-chip highlight">{{ ropeT }} N</span>
          </div>
          <input type="range" min="40" max="250" step="5" v-model.number="ropeT" @input="onBoatParamChange" />
        </div>
      </div>

      <!-- Canvas Viewport -->
      <div class="sim-viewport-wrapper">
        <canvas ref="canvasBoatsRef" class="lab-canvas"></canvas>
      </div>

      <!-- Readout Dashboard -->
      <div class="sim-dashboard">
        <div class="dash-card result-main">
          <span class="dash-label">Stationary Mass Center G</span>
          <span class="dash-val highlight">x<sub>G</sub> = {{ xG.toFixed(2) }} <small>m</small></span>
          <span class="dash-sub">v<sub>G</sub> = 0 m/s · Meet at t = {{ tMeet.toFixed(2) }} s</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #f43f5e;">
          <span class="dash-label">Boat A Velocity &amp; Momentum</span>
          <span class="dash-val">+{{ curVA.toFixed(2) }} <small>m/s &rarr;</small></span>
          <span class="dash-sub">m<sub>A</sub>v&prime;<sub>A</sub> = +{{ curPA.toFixed(1) }} N&middot;s (&Delta;x<sub>A</sub> = {{ curXA.toFixed(2) }} m)</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #fb7185;">
          <span class="dash-label">Boat B Velocity &amp; Momentum</span>
          <span class="dash-val">&minus;{{ Math.abs(curVB).toFixed(2) }} <small>m/s &larr;</small></span>
          <span class="dash-sub">m<sub>B</sub>v&prime;<sub>B</sub> = &minus;{{ Math.abs(curPB).toFixed(1) }} N&middot;s (|&Delta;x<sub>B</sub>| = {{ (d0 - curXB).toFixed(2) }} m)</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #22c55e;">
          <span class="dash-label">Speed Ratio |v&prime;<sub>A</sub> / v&prime;<sub>B</sub>| = m<sub>B</sub> / m<sub>A</sub></span>
          <span class="dash-val">{{ (mB / mA).toFixed(3) }}</span>
          <span class="dash-sub">&Sigma;p<sub>x</sub> = (+{{ curPA.toFixed(1) }}) + (&minus;{{ Math.abs(curPB).toFixed(1) }}) = 0.0 N&middot;s</span>
        </div>
      </div>
    </div>

    <!-- ================= TAB 2: BASEBALL STRIKE & VARIABLE IMPULSE ================= -->
    <div v-show="activeTab === 'baseball'">
      <div class="sim-presets">
        <span class="preset-label">Presets:</span>
        <button
          class="preset-btn"
          :class="{ active: ballPreset === 'homerun' }"
          @click="applyBallPreset('homerun')"
        >
          Line-Drive Strike (v<sub>1</sub>=35 m/s, v<sub>2</sub>=45 m/s, &theta;<sub>2</sub>=25&deg;, &Delta;t=1.5 ms)
        </button>
        <button
          class="preset-btn"
          :class="{ active: ballPreset === 'fig1319' }"
          @click="applyBallPreset('fig1319')"
        >
          Fig. 13.19 Horizontal Return (&theta;<sub>2</sub>=0&deg;, v<sub>1</sub>=35, v<sub>2</sub>=42 m/s)
        </button>
        <button
          class="preset-btn"
          :class="{ active: ballPreset === 'dwell' }"
          @click="applyBallPreset('dwell')"
        >
          Long-Dwell Pop-Up (&theta;<sub>2</sub>=40&deg;, &Delta;t=4.2 ms)
        </button>

        <div class="pulse-shape-group">
          <button
            class="preset-btn"
            :class="{ active: pulseShape === 'sine' }"
            @click="pulseShape = 'sine'"
          >
            📈 Half-Sine Shock F<sub>peak</sub>&middot;sin(&pi;t/&Delta;t)
          </button>
          <button
            class="preset-btn"
            :class="{ active: pulseShape === 'rect' }"
            @click="pulseShape = 'rect'"
          >
            ▭ Constant Rectangular F<sub>avg</sub>
          </button>
        </div>
      </div>

      <!-- Playback Bar -->
      <div class="playback-bar">
        <button class="play-btn" @click="toggleBallPlay">
          {{ isPlayingBall ? '⏸ Pause' : (ballAnimProg >= 0.995 ? '↺ Replay Strike' : '▶ Pitch & Strike') }}
        </button>
        <button class="action-btn" @click="resetBall">↺ Reset</button>
        <div class="time-slider-wrapper">
          <span class="time-label">
            Stage: <strong>{{ ballStageLabel }}</strong>
          </span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.005"
            v-model.number="ballAnimProg"
            @input="isPlayingBall = false"
          />
        </div>
      </div>

      <!-- Sliders -->
      <div class="sim-controls-grid">
        <div class="control-box">
          <div class="control-header">
            <label>Incoming Pitch Speed (<em>v</em><sub>1</sub> &larr;)</label>
            <span class="val-chip">{{ v1Ball }} m/s</span>
          </div>
          <input type="range" min="20" max="45" step="1" v-model.number="v1Ball" @input="ballPreset = 'custom'" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Exit Launch Speed (<em>v</em><sub>2</sub>)</label>
            <span class="val-chip">{{ v2Ball }} m/s</span>
          </div>
          <input type="range" min="25" max="55" step="1" v-model.number="v2Ball" @input="ballPreset = 'custom'" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Exit Launch Angle (&theta;<sub>2</sub>)</label>
            <span class="val-chip">{{ theta2Deg }}&deg;</span>
          </div>
          <input type="range" min="0" max="45" step="1" v-model.number="theta2Deg" @input="ballPreset = 'custom'" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Contact Duration (&Delta;<em>t</em>)</label>
            <span class="val-chip highlight">{{ dtMs.toFixed(1) }} ms</span>
          </div>
          <input type="range" min="0.5" max="5.0" step="0.1" v-model.number="dtMs" @input="ballPreset = 'custom'" />
        </div>
      </div>

      <!-- Split Canvas Viewport -->
      <div class="sim-viewport-wrapper">
        <canvas ref="canvasBallRef" class="lab-canvas tall-canvas"></canvas>
      </div>

      <!-- Readout Dashboard -->
      <div class="sim-dashboard">
        <div class="dash-card result-main">
          <span class="dash-label">Total Bat Impulse |Imp<sub>1&rarr;2</sub>|</span>
          <span class="dash-val highlight">{{ impMag.toFixed(2) }} <small>N&middot;s</small></span>
          <span class="dash-sub">&ang; {{ impAngleDeg.toFixed(1) }}&deg; · Imp<sub>x</sub>={{ impX.toFixed(2) }}, Imp<sub>y</sub>={{ impY.toFixed(2) }} N&middot;s</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #f43f5e;">
          <span class="dash-label">Average Bat Force (F<sub>avg</sub>)</span>
          <span class="dash-val">{{ (fAvg / 1000).toFixed(2) }} <small>kN</small></span>
          <span class="dash-sub">{{ Math.round(fAvg).toLocaleString() }} N over &Delta;t = {{ dtMs.toFixed(1) }} ms</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #f97316;">
          <span class="dash-label">Peak Force (F<sub>max</sub>)</span>
          <span class="dash-val">{{ (fPeak / 1000).toFixed(2) }} <small>kN</small></span>
          <span class="dash-sub">{{ pulseShape === 'sine' ? 'F_max = (π/2)·F_avg (Half-Sine)' : 'F_max = F_avg (Rectangular)' }}</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #eab308;">
          <span class="dash-label">Impulsive Ratio F<sub>avg</sub> / W</span>
          <span class="dash-val">{{ Math.round(fAvgOverW).toLocaleString() }}&times;</span>
          <span class="dash-sub">W = {{ ballWeight.toFixed(2) }} N · W&Delta;t = {{ wImpulse.toFixed(4) }} N&middot;s &approx; 0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'

const g = 9.81
const showRef = ref(false)
const activeTab = ref<'boats' | 'baseball'>('boats')

// ==================== TAB 1: TWO BOATS STATE ====================
const mA = ref(120)
const mB = ref(80)
const d0 = ref(15)
const ropeT = ref(120)
const showVertForces = ref(false)
const boatPreset = ref<'asymmetric' | 'equal' | 'barge' | 'custom'>('asymmetric')

const boatTime = ref(0)
const isPlayingBoats = ref(false)
const waterWavePhase = ref(0)

// Reduced mass m_eff = (mA * mB) / (mA + mB)
// x_A(t) = 0.5 * (T / mA) * t^2, x_B(t) = d0 - 0.5 * (T / mB) * t^2
// Meet when x_A(t) = x_B(t) => t_meet = sqrt(2 * d0 * m_eff / T)
const mEff = computed(() => (mA.value * mB.value) / (mA.value + mB.value))
const tMeet = computed(() => Math.sqrt((2 * d0.value * mEff.value) / ropeT.value))
const xG = computed(() => (mB.value / (mA.value + mB.value)) * d0.value)

const curXA = computed(() => {
  const t = Math.min(boatTime.value, tMeet.value)
  return 0.5 * (ropeT.value / mA.value) * t * t
})

const curXB = computed(() => {
  const t = Math.min(boatTime.value, tMeet.value)
  return d0.value - 0.5 * (ropeT.value / mB.value) * t * t
})

const curVA = computed(() => {
  const t = Math.min(boatTime.value, tMeet.value)
  return (ropeT.value / mA.value) * t
})

const curVB = computed(() => {
  const t = Math.min(boatTime.value, tMeet.value)
  return -(ropeT.value / mB.value) * t
})

const curPA = computed(() => mA.value * curVA.value)
const curPB = computed(() => mB.value * curVB.value)

function applyBoatPreset(preset: 'asymmetric' | 'equal' | 'barge') {
  boatPreset.value = preset
  isPlayingBoats.value = false
  boatTime.value = 0
  if (preset === 'asymmetric') {
    mA.value = 120
    mB.value = 80
    d0.value = 15
    ropeT.value = 120
  } else if (preset === 'equal') {
    mA.value = 100
    mB.value = 100
    d0.value = 15
    ropeT.value = 120
  } else {
    mA.value = 280
    mB.value = 50
    d0.value = 16
    ropeT.value = 140
  }
}

function onBoatParamChange() {
  boatPreset.value = 'custom'
  isPlayingBoats.value = false
  if (boatTime.value > tMeet.value) {
    boatTime.value = tMeet.value
  }
}

function toggleBoatsPlay() {
  if (!isPlayingBoats.value && boatTime.value >= tMeet.value - 0.005) {
    boatTime.value = 0
  }
  isPlayingBoats.value = !isPlayingBoats.value
}

function resetBoats() {
  isPlayingBoats.value = false
  boatTime.value = 0
}

// ==================== TAB 2: BASEBALL IMPULSE STATE ====================
const ballMass = 0.15 // kg
const ballWeight = ballMass * g // 1.4715 N

const v1Ball = ref(35)
const v2Ball = ref(45)
const theta2Deg = ref(25)
const dtMs = ref(1.5)
const pulseShape = ref<'sine' | 'rect'>('sine')
const ballPreset = ref<'homerun' | 'fig1319' | 'dwell' | 'custom'>('homerun')

// Animation progress [0..1]:
// [0.00 .. 0.36]: Incoming pitch leftward at v1
// [0.36 .. 0.64]: Slow-mo millisecond contact window [0 .. dt] (fills F(t) curve!)
// [0.64 .. 1.00]: Outgoing rebound at v2, angle theta2
const ballAnimProg = ref(1.0)
const isPlayingBall = ref(false)

const theta2Rad = computed(() => (theta2Deg.value * Math.PI) / 180)
const dtSec = computed(() => dtMs.value * 1e-3)
const wImpulse = computed(() => ballWeight * dtSec.value)

// Incoming velocity is leftward: (-v1, 0)
// Outgoing velocity is (+v2 cos θ2, +v2 sin θ2)
// m*v1 + F_bat*Δt + W_vec*Δt = m*v2  =>  Imp_bat = m*v2 - m*v1 - (0, -W*Δt)
const p1X = computed(() => -ballMass * v1Ball.value)
const p2X = computed(() => ballMass * v2Ball.value * Math.cos(theta2Rad.value))
const p2Y = computed(() => ballMass * v2Ball.value * Math.sin(theta2Rad.value))

const impX = computed(() => p2X.value - p1X.value)
const impY = computed(() => p2Y.value + wImpulse.value)
const impMag = computed(() => Math.sqrt(impX.value * impX.value + impY.value * impY.value))
const impAngleDeg = computed(() => (Math.atan2(impY.value, impX.value) * 180) / Math.PI)

const fAvg = computed(() => impMag.value / dtSec.value)
const fPeak = computed(() => (pulseShape.value === 'sine' ? (Math.PI / 2) * fAvg.value : fAvg.value))
const fAvgOverW = computed(() => fAvg.value / ballWeight)

const ballStageLabel = computed(() => {
  const p = ballAnimProg.value
  if (p < 0.36) return '1. Pitch Approach (m·v₁)'
  if (p <= 0.64) {
    const frac = (p - 0.36) / 0.28
    return `2. Bat Contact (${(frac * dtMs.value).toFixed(2)} / ${dtMs.value.toFixed(1)} ms)`
  }
  return '3. Struck Exit (m·v₂)'
})

function applyBallPreset(preset: 'homerun' | 'fig1319' | 'dwell') {
  ballPreset.value = preset
  isPlayingBall.value = false
  ballAnimProg.value = 1.0
  if (preset === 'homerun') {
    v1Ball.value = 35
    v2Ball.value = 45
    theta2Deg.value = 25
    dtMs.value = 1.5
  } else if (preset === 'fig1319') {
    v1Ball.value = 35
    v2Ball.value = 42
    theta2Deg.value = 0
    dtMs.value = 1.5
  } else {
    v1Ball.value = 30
    v2Ball.value = 34
    theta2Deg.value = 40
    dtMs.value = 4.2
  }
}

function toggleBallPlay() {
  if (!isPlayingBall.value && ballAnimProg.value >= 0.995) {
    ballAnimProg.value = 0
  }
  isPlayingBall.value = !isPlayingBall.value
}

function resetBall() {
  isPlayingBall.value = false
  ballAnimProg.value = 0
}

// ==================== CANVAS HELPERS & RENDERING ====================
const canvasBoatsRef = ref<HTMLCanvasElement | null>(null)
const canvasBallRef = ref<HTMLCanvasElement | null>(null)
let ctxBoats: CanvasRenderingContext2D | null = null
let ctxBall: CanvasRenderingContext2D | null = null
let wBoats = 760
const hBoats = 380
let wBall = 760
const hBall = 420

let resObsBoats: ResizeObserver | null = null
let resObsBall: ResizeObserver | null = null
let rafId: number | null = null
let lastFrameTs = 0

function drawArrow(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  lineWidth = 2.6,
  headLen = 9,
  dashed = false
) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 1.5) return
  const angle = Math.atan2(dy, dx)

  ctx.save()
  ctx.strokeStyle = color
  ctx.fillStyle = color
  ctx.lineWidth = lineWidth
  if (dashed) ctx.setLineDash([4, 3])
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()

  ctx.setLineDash([])
  ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x2 - headLen * Math.cos(angle - Math.PI / 6), y2 - headLen * Math.sin(angle - Math.PI / 6))
  ctx.lineTo(x2 - headLen * Math.cos(angle + Math.PI / 6), y2 - headLen * Math.sin(angle + Math.PI / 6))
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

function drawWoodenBoat(
  ctx: CanvasRenderingContext2D,
  bowX: number,
  waterY: number,
  facingRight: boolean,
  hullLen: number,
  hasPerson: boolean,
  isGhost: boolean,
  pullPhase: number
) {
  ctx.save()
  if (isGhost) ctx.globalAlpha = 0.25

  const dir = facingRight ? -1 : 1 // hull extends behind bowX
  const sternX = bowX + dir * hullLen
  const deckY = waterY - 12
  const keelY = waterY + 8
  const midX = (bowX + sternX) / 2

  // Wooden hull matching Beer & Johnston Fig. 13.18 warm cedar tone
  const grad = ctx.createLinearGradient(0, deckY - 4, 0, keelY)
  grad.addColorStop(0, '#e5a96d')
  grad.addColorStop(1, '#b8763a')

  ctx.fillStyle = grad
  ctx.strokeStyle = '#78350f'
  ctx.lineWidth = 1.6
  ctx.beginPath()
  ctx.moveTo(bowX, deckY - 3) // raised bow tip
  ctx.quadraticCurveTo(bowX + dir * (hullLen * 0.14), keelY, bowX + dir * (hullLen * 0.28), keelY)
  ctx.lineTo(sternX - dir * (hullLen * 0.14), keelY)
  ctx.quadraticCurveTo(sternX, keelY - 2, sternX, deckY - 2) // raised stern
  ctx.quadraticCurveTo(midX, deckY + 2, bowX, deckY - 3)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()

  // Gunwale trim
  ctx.strokeStyle = '#fef3c7'
  ctx.lineWidth = 1.2
  ctx.beginPath()
  ctx.moveTo(sternX, deckY - 2)
  ctx.quadraticCurveTo(midX, deckY + 2, bowX, deckY - 3)
  ctx.stroke()

  // Bow cleat pin (exact particle coordinate x_A or x_B)
  ctx.fillStyle = '#38bdf8'
  ctx.beginPath()
  ctx.arc(bowX, deckY - 4, 3.2, 0, Math.PI * 2)
  ctx.fill()

  // Seated person silhouette in Boat A pulling horizontal rope (Fig. 13.18)
  if (hasPerson) {
    const seatX = bowX + dir * (hullLen * 0.34)
    const lean = isGhost ? 0 : Math.sin(pullPhase * 7) * 2.5 - 3
    const shoulderX = seatX + lean
    const shoulderY = deckY - 22

    // Torso
    ctx.strokeStyle = '#334155'
    ctx.fillStyle = '#1e293b'
    ctx.lineWidth = 6.5
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(seatX, deckY - 2)
    ctx.lineTo(shoulderX, shoulderY)
    ctx.stroke()

    // Teal shirt highlight (like Fig. 13.18)
    ctx.strokeStyle = '#0d9488'
    ctx.lineWidth = 4.5
    ctx.beginPath()
    ctx.moveTo(seatX, deckY - 4)
    ctx.lineTo(shoulderX, shoulderY + 2)
    ctx.stroke()

    // Head
    ctx.fillStyle = '#1e293b'
    ctx.beginPath()
    ctx.arc(shoulderX + 1, shoulderY - 8, 5.5, 0, Math.PI * 2)
    ctx.fill()

    // Arms reaching forward to pull rope
    ctx.strokeStyle = '#0f766e'
    ctx.lineWidth = 3.2
    ctx.beginPath()
    ctx.moveTo(shoulderX + 1, shoulderY + 3)
    ctx.lineTo(bowX - 2, deckY - 5)
    ctx.stroke()
  }

  ctx.restore()
}

function drawBoatsCanvas() {
  if (!ctxBoats || !canvasBoatsRef.value) return
  const w = wBoats
  const h = hBoats
  const ctx = ctxBoats

  ctx.clearRect(0, 0, w, h)

  // Sky background gradient
  const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.66)
  skyGrad.addColorStop(0, '#090f1d')
  skyGrad.addColorStop(1, '#16243d')
  ctx.fillStyle = skyGrad
  ctx.fillRect(0, 0, w, h)

  const waterY = Math.round(h * 0.64)

  // Water body gradient
  const waterGrad = ctx.createLinearGradient(0, waterY, 0, h)
  waterGrad.addColorStop(0, 'rgba(14, 116, 144, 0.55)')
  waterGrad.addColorStop(0.35, 'rgba(12, 74, 110, 0.72)')
  waterGrad.addColorStop(1, '#082f49')
  ctx.fillStyle = waterGrad
  ctx.fillRect(0, waterY, w, h - waterY)

  // Subtle animated calm-water ripples
  ctx.strokeStyle = 'rgba(125, 211, 252, 0.35)'
  ctx.lineWidth = 1.4
  ctx.beginPath()
  for (let px = 0; px <= w; px += 6) {
    const wy = waterY + Math.sin(px * 0.045 + waterWavePhase.value) * 1.6
    if (px === 0) ctx.moveTo(px, wy)
    else ctx.lineTo(px, wy)
  }
  ctx.stroke()

  for (let row = 1; row <= 3; row++) {
    const ry = waterY + row * 24
    ctx.strokeStyle = `rgba(125, 211, 252, ${0.16 - row * 0.035})`
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let px = 20; px <= w - 20; px += 18) {
      const seg = Math.sin(px * 0.03 - waterWavePhase.value * 0.8 + row)
      if (seg > 0.1) {
        ctx.moveTo(px, ry)
        ctx.lineTo(px + 10, ry)
      }
    }
    ctx.stroke()
  }

  // Coordinate mapping: Boat A hull on left [-hullM..0], separation [0..d0], Boat B hull on right [d0..d0+hullM]
  const hullPx = Math.min(92, Math.max(62, w * 0.115))
  const padSide = hullPx + 38
  const spanPx = Math.max(180, w - 2 * padSide)
  const mToPx = (xm: number) => padSide + (xm / d0.value) * spanPx

  const x0Px = mToPx(0)
  const xB0Px = mToPx(d0.value)
  const xGPx = mToPx(xG.value)
  const curXAPx = mToPx(curXA.value)
  const curXBPx = mToPx(curXB.value)

  // Meter scale ruler near bottom of water
  const rulerY = h - 26
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)'
  ctx.lineWidth = 1.2
  ctx.beginPath()
  ctx.moveTo(x0Px, rulerY)
  ctx.lineTo(xB0Px, rulerY)
  ctx.stroke()

  ctx.fillStyle = '#94a3b8'
  ctx.font = '10px monospace'
  ctx.textAlign = 'center'
  const stepM = d0.value > 15 ? 5 : 3
  for (let xm = 0; xm <= d0.value + 0.01; xm += stepM) {
    const px = mToPx(xm)
    ctx.beginPath()
    ctx.moveTo(px, rulerY - 4)
    ctx.lineTo(px, rulerY + 4)
    ctx.stroke()
    ctx.fillText(`${xm}m`, px, rulerY + 15)
  }
  if (d0.value % stepM !== 0) {
    ctx.fillText(`${d0.value}m`, xB0Px, rulerY + 15)
  }

  // Initial ghost boats at t = 0 (showing rest configuration like left side of Fig. 13.18)
  if (boatTime.value > 0.03) {
    drawWoodenBoat(ctx, x0Px, waterY, true, hullPx, true, true, 0)
    drawWoodenBoat(ctx, xB0Px, waterY, false, hullPx, false, true, 0)

    // Displacement traces from t = 0 to current bows
    ctx.save()
    ctx.setLineDash([4, 3])
    ctx.strokeStyle = 'rgba(248, 113, 113, 0.5)'
    ctx.beginPath()
    ctx.moveTo(x0Px, waterY + 26)
    ctx.lineTo(curXAPx, waterY + 26)
    ctx.stroke()

    ctx.strokeStyle = 'rgba(251, 113, 133, 0.5)'
    ctx.beginPath()
    ctx.moveTo(xB0Px, waterY + 26)
    ctx.lineTo(curXBPx, waterY + 26)
    ctx.stroke()
    ctx.restore()

    ctx.font = '10px monospace'
    ctx.fillStyle = '#fca5a5'
    ctx.textAlign = 'center'
    if (curXAPx - x0Px > 28) {
      ctx.fillText(`Δx_A=${curXA.value.toFixed(1)}m`, (x0Px + curXAPx) / 2, waterY + 40)
    }
    if (xB0Px - curXBPx > 28) {
      ctx.fillText(`|Δx_B|=${(d0.value - curXB.value).toFixed(1)}m`, (xB0Px + curXBPx) / 2, waterY + 40)
    }
  }

  // Golden Stationary System Mass Center G Line
  ctx.save()
  ctx.setLineDash([6, 4])
  ctx.strokeStyle = '#fbbf24'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(xGPx, 48)
  ctx.lineTo(xGPx, rulerY - 6)
  ctx.stroke()
  ctx.restore()

  // Golden G badge at top
  ctx.fillStyle = 'rgba(251, 191, 36, 0.16)'
  ctx.strokeStyle = '#fbbf24'
  ctx.lineWidth = 1.4
  const badgeW = 148
  ctx.beginPath()
  ctx.roundRect(xGPx - badgeW / 2, 16, badgeW, 26, 6)
  ctx.fill()
  ctx.stroke()

  ctx.fillStyle = '#fde68a'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(`Mass Center G (x_G = ${xG.value.toFixed(2)} m)`, xGPx, 33)

  // Golden marker diamond on water at G
  ctx.fillStyle = '#fbbf24'
  ctx.beginPath()
  ctx.arc(xGPx, waterY - 16, 4.5, 0, Math.PI * 2)
  ctx.fill()

  // Horizontal Rope between Boat A bow and Boat B bow
  const ropeY = waterY - 16
  if (curXBPx - curXAPx > 2) {
    ctx.strokeStyle = '#7dd3fc'
    ctx.lineWidth = 2.6
    ctx.beginPath()
    ctx.moveTo(curXAPx, ropeY)
    ctx.lineTo(curXBPx, ropeY)
    ctx.stroke()

    // Internal opposite tension arrows +T and -T when enough gap exists
    if (curXBPx - curXAPx > 76) {
      drawArrow(ctx, curXAPx + 4, ropeY - 8, curXAPx + 30, ropeY - 8, '#38bdf8', 1.8, 6)
      drawArrow(ctx, curXBPx - 4, ropeY - 8, curXBPx - 30, ropeY - 8, '#38bdf8', 1.8, 6)
      ctx.fillStyle = '#7dd3fc'
      ctx.font = '10px monospace'
      ctx.textAlign = 'center'
      ctx.fillText(`T = ${ropeT.value} N`, (curXAPx + curXBPx) / 2, ropeY - 11)
    }
  }

  // Draw live Boat A and Boat B
  drawWoodenBoat(ctx, curXAPx, waterY, true, hullPx, true, false, boatTime.value)
  drawWoodenBoat(ctx, curXBPx, waterY, false, hullPx, false, false, boatTime.value)

  // Boat labels on/under hulls
  const centerAX = curXAPx - hullPx * 0.48
  const centerBX = curXBPx + hullPx * 0.48
  ctx.fillStyle = '#f8fafc'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(`Boat A (${mA.value} kg)`, centerAX, waterY + 22)
  ctx.fillText(`Boat B (${mB.value} kg)`, centerBX, waterY + 22)

  // Optional External Vertical Forces (Weight W downward, Buoyancy B upward)
  if (showVertForces.value) {
    const vLenA = Math.min(48, 22 + mA.value * 0.09)
    const vLenB = Math.min(48, 22 + mB.value * 0.09)
    drawArrow(ctx, centerAX - 12, waterY, centerAX - 12, waterY + vLenA, '#94a3b8', 2, 7)
    drawArrow(ctx, centerAX + 12, waterY, centerAX + 12, waterY - vLenA, '#34d399', 2, 7)
    ctx.font = '10px monospace'
    ctx.fillStyle = '#cbd5e1'
    ctx.fillText('W_A', centerAX - 24, waterY + vLenA - 2)
    ctx.fillStyle = '#6ee7b7'
    ctx.fillText('B_A', centerAX + 24, waterY - vLenA + 8)

    drawArrow(ctx, centerBX - 12, waterY, centerBX - 12, waterY + vLenB, '#94a3b8', 2, 7)
    drawArrow(ctx, centerBX + 12, waterY, centerBX + 12, waterY - vLenB, '#34d399', 2, 7)
    ctx.fillStyle = '#cbd5e1'
    ctx.fillText('W_B', centerBX - 24, waterY + vLenB - 2)
    ctx.fillStyle = '#6ee7b7'
    ctx.fillText('B_B', centerBX + 24, waterY - vLenB + 8)
  }

  // Momentum vectors above boats (modeled directly on Beer & Johnston Fig. 13.18!)
  const arrowY = waterY - 68
  const pMag = Math.abs(curPA.value)
  const pMax = ropeT.value * tMeet.value

  if (boatTime.value < 0.02) {
    ctx.fillStyle = '#fda4af'
    ctx.font = 'bold 12px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('m_A v_A = 0', centerAX, arrowY)
    ctx.fillText('m_B v_B = 0', centerBX, arrowY)
  } else {
    const arrowLen = Math.min(96, Math.max(24, (pMag / Math.max(1, pMax)) * 84))
    // Rightward red arrow above Boat A: m_A v'_A
    drawArrow(ctx, centerAX - arrowLen * 0.35, arrowY, centerAX + arrowLen * 0.65, arrowY, '#f43f5e', 4, 11)
    ctx.fillStyle = '#fda4af'
    ctx.font = 'bold 12px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(`m_A v'_A = +${pMag.toFixed(0)} N·s`, centerAX + arrowLen * 0.15, arrowY - 11)

    // Leftward red arrow above Boat B: m_B v'_B (exact equal length, opposite direction!)
    drawArrow(ctx, centerBX + arrowLen * 0.35, arrowY, centerBX - arrowLen * 0.65, arrowY, '#f43f5e', 4, 11)
    ctx.fillText(`m_B v'_B = −${pMag.toFixed(0)} N·s`, centerBX - arrowLen * 0.15, arrowY - 11)
  }

  // Meeting banner when boats meet right at G
  if (Math.abs(boatTime.value - tMeet.value) < 0.02) {
    ctx.fillStyle = 'rgba(16, 185, 129, 0.2)'
    ctx.strokeStyle = '#10b981'
    ctx.lineWidth = 1.5
    const mw = 248
    ctx.beginPath()
    ctx.roundRect(xGPx - mw / 2, 52, mw, 26, 6)
    ctx.fill()
    ctx.stroke()
    ctx.fillStyle = '#6ee7b7'
    ctx.font = 'bold 11px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('✓ Boats Meet Directly at Mass Center G!', xGPx, 69)
  }
}

function drawStitchedBaseball(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.save()
  const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.1, cx, cy, r)
  grad.addColorStop(0, '#ffffff')
  grad.addColorStop(0.75, '#e2e8f0')
  grad.addColorStop(1, '#94a3b8')

  ctx.fillStyle = grad
  ctx.strokeStyle = '#475569'
  ctx.lineWidth = 1.4
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.fill()
  ctx.stroke()

  // Classic red curved baseball seams (like Fig. 13.19)
  ctx.strokeStyle = '#dc2626'
  ctx.lineWidth = 1.3
  ctx.beginPath()
  ctx.arc(cx - r * 0.82, cy, r * 0.68, -0.68, 0.68)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(cx + r * 0.82, cy, r * 0.68, Math.PI - 0.68, Math.PI + 0.68)
  ctx.stroke()
  ctx.restore()
}

function drawBallCanvas() {
  if (!ctxBall || !canvasBallRef.value) return
  const w = wBall
  const h = hBall
  const ctx = ctxBall

  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#0f172a'
  ctx.fillRect(0, 0, w, h)

  // Split regions: Left 54% = Animated Strike + Fig. 13.17/13.19 Diagram; Right 46% = Fig. 13.16 Force-Time Plot
  const splitX = Math.floor(w * 0.54)

  // Vertical divider
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(splitX, 14)
  ctx.lineTo(splitX, h - 14)
  ctx.stroke()

  // ==================== LEFT TOP: LIVE ANIMATED BASEBALL STRIKE ====================
  ctx.fillStyle = '#94a3b8'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText('IMPULSIVE BAT–BALL STRIKE (m = 0.15 kg)', 16, 24)

  const arenaH = Math.floor(h * 0.50)
  const hitX = Math.max(76, Math.floor(splitX * 0.27))
  const hitY = Math.floor(arenaH * 0.68)
  const prog = ballAnimProg.value

  // Incoming pitch dashed path (from right toward hitX leftward, matching Fig. 13.19)
  const startPitchX = splitX - 34
  ctx.save()
  ctx.setLineDash([4, 4])
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)'
  ctx.lineWidth = 1.4
  ctx.beginPath()
  ctx.moveTo(startPitchX, hitY)
  ctx.lineTo(hitX, hitY)
  ctx.stroke()

  // Outgoing exit dashed path at angle theta2
  const exitLen = splitX - hitX - 38
  const exitEndX = hitX + exitLen * Math.cos(theta2Rad.value)
  const exitEndY = hitY - exitLen * Math.sin(theta2Rad.value)
  ctx.strokeStyle = 'rgba(244, 63, 94, 0.45)'
  ctx.beginPath()
  ctx.moveTo(hitX, hitY)
  ctx.lineTo(exitEndX, exitEndY)
  ctx.stroke()
  ctx.restore()

  // Angle arc θ_2 if > 0
  if (theta2Deg.value > 2) {
    ctx.strokeStyle = '#fbbf24'
    ctx.lineWidth = 1.3
    ctx.beginPath()
    ctx.arc(hitX, hitY, 34, -theta2Rad.value, 0)
    ctx.stroke()
    ctx.fillStyle = '#fde68a'
    ctx.font = '10px monospace'
    ctx.fillText(`θ₂=${theta2Deg.value}°`, hitX + 38, hitY - 6)
  }

  // Bat barrel cross-section / angled bat silhouette near hitX
  const impRad = Math.atan2(impY.value, impX.value)
  const batOffset = prog < 0.36 ? -18 * (1 - prog / 0.36) : prog <= 0.64 ? 0 : 6
  const batCX = hitX - (18 - batOffset) * Math.cos(impRad)
  const batCY = hitY + (18 - batOffset) * Math.sin(impRad)

  ctx.save()
  ctx.translate(batCX, batCY)
  ctx.rotate(-impRad + Math.PI / 2)
  const batGrad = ctx.createLinearGradient(-28, 0, 28, 0)
  batGrad.addColorStop(0, '#92400e')
  batGrad.addColorStop(0.5, '#f59e0b')
  batGrad.addColorStop(1, '#78350f')
  ctx.fillStyle = batGrad
  ctx.strokeStyle = '#fef3c7'
  ctx.lineWidth = 1.2
  ctx.beginPath()
  ctx.roundRect(-26, -7, 52, 14, 7)
  ctx.fill()
  ctx.stroke()
  ctx.restore()

  // Live Ball position along trajectory
  let ballX = hitX
  let ballY = hitY
  if (prog < 0.36) {
    const u = prog / 0.36
    ballX = startPitchX + (hitX - startPitchX) * u
    ballY = hitY
    drawArrow(ctx, ballX - 14, ballY, ballX - 54, ballY, '#38bdf8', 2.4, 8)
    ctx.fillStyle = '#7dd3fc'
    ctx.font = '10px monospace'
    ctx.fillText(`v₁=${v1Ball.value}m/s`, ballX - 54, ballY - 14)
  } else if (prog <= 0.64) {
    // Contact flash!
    const cFrac = (prog - 0.36) / 0.28
    const shockR = 16 + Math.sin(cFrac * Math.PI) * 18
    ctx.save()
    ctx.strokeStyle = '#fb7185'
    ctx.fillStyle = 'rgba(244, 63, 94, 0.25)'
    ctx.lineWidth = 2.2
    ctx.beginPath()
    ctx.arc(hitX, hitY, shockR, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
    ctx.restore()

    drawArrow(
      ctx,
      hitX,
      hitY,
      hitX + 54 * Math.cos(impRad),
      hitY - 54 * Math.sin(impRad),
      '#f43f5e',
      3,
      9
    )
    ctx.fillStyle = '#fda4af'
    ctx.font = 'bold 11px sans-serif'
    ctx.fillText('💥 F(t) CONTACT!', hitX + 12, hitY - 28)
  } else {
    const u = (prog - 0.64) / 0.36
    ballX = hitX + (exitEndX - hitX) * u
    ballY = hitY + (exitEndY - hitY) * u
    drawArrow(
      ctx,
      ballX,
      ballY,
      ballX + 46 * Math.cos(theta2Rad.value),
      ballY - 46 * Math.sin(theta2Rad.value),
      '#f43f5e',
      2.6,
      8
    )
    ctx.fillStyle = '#fda4af'
    ctx.font = '10px monospace'
    ctx.fillText(`v₂=${v2Ball.value}m/s`, ballX + 12, ballY + 22)
  }

  drawStitchedBaseball(ctx, ballX, ballY, 11)

  // ==================== LEFT BOTTOM: 3-STAGE IMPULSE-MOMENTUM DIAGRAM (FIGS. 13.17 & 13.19) ====================
  const diagTop = arenaH + 8
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.18)'
  ctx.beginPath()
  ctx.moveTo(14, diagTop)
  ctx.lineTo(splitX - 14, diagTop)
  ctx.stroke()

  ctx.fillStyle = '#cbd5e1'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText('IMPULSE–MOMENTUM DIAGRAM (FIGS. 13.17 & 13.19)', 16, diagTop + 20)

  const cyDiag = Math.floor((diagTop + 26 + h - 18) / 2) + 8
  const colW = (splitX - 24) / 3
  const c1X = 14 + colW * 0.52
  const c2X = 14 + colW * 1.48
  const c3X = 14 + colW * 2.42
  const rDiag = 14

  // Vector scale so arrows fit cleanly in each column
  const maxVec = Math.max(impMag.value, Math.abs(p1X.value), ballMass * v2Ball.value, 6)
  const vecScale = Math.min(48, colW * 0.42) / maxVec

  // Stage 1: Ball + leftward m*v_1
  drawStitchedBaseball(ctx, c1X, cyDiag, rDiag)
  const lenP1 = Math.max(22, Math.abs(p1X.value) * vecScale)
  drawArrow(ctx, c1X - rDiag - 2, cyDiag, c1X - rDiag - 2 - lenP1, cyDiag, '#f43f5e', 3.2, 8)
  ctx.fillStyle = '#fda4af'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('m v₁', c1X - rDiag - lenP1 * 0.5, cyDiag - 10)
  ctx.font = '10px monospace'
  ctx.fillStyle = '#94a3b8'
  ctx.fillText(`${Math.abs(p1X.value).toFixed(2)} N·s`, c1X, cyDiag + 30)

  // Plus sign '+'
  ctx.fillStyle = '#f43f5e'
  ctx.font = 'bold 22px sans-serif'
  ctx.fillText('+', (c1X + c2X) / 2, cyDiag + 7)

  // Stage 2: Ball + Bat Impulse F_avg*Δt + tiny dashed downward W*Δt ≈ 0 (exact Fig. 13.19!)
  drawStitchedBaseball(ctx, c2X, cyDiag, rDiag)
  const lenImp = Math.max(28, impMag.value * vecScale)
  drawArrow(
    ctx,
    c2X + (rDiag + 1) * Math.cos(impRad),
    cyDiag - (rDiag + 1) * Math.sin(impRad),
    c2X + (rDiag + 1 + lenImp) * Math.cos(impRad),
    cyDiag - (rDiag + 1 + lenImp) * Math.sin(impRad),
    '#f43f5e',
    3.4,
    9
  )
  ctx.fillStyle = '#fda4af'
  ctx.font = 'bold 11px sans-serif'
  ctx.fillText(
    'F·Δt',
    c2X + (rDiag + lenImp * 0.6) * Math.cos(impRad),
    cyDiag - (rDiag + lenImp * 0.6) * Math.sin(impRad) - 10
  )

  // Dashed downward non-impulsive W*Δt ≈ 0 (matching Fig. 13.19!)
  drawArrow(ctx, c2X, cyDiag + 2, c2X, cyDiag + 38, '#fb7185', 1.8, 6, true)
  ctx.fillStyle = '#fca5a5'
  ctx.font = '10px monospace'
  ctx.fillText('W·Δt ≈ 0', c2X, cyDiag + 51)

  // Equals sign '='
  ctx.fillStyle = '#f43f5e'
  ctx.font = 'bold 22px sans-serif'
  ctx.fillText('=', (c2X + c3X) / 2, cyDiag + 7)

  // Stage 3: Ball + Resultant m*v_2 (plus faint tip-to-tail triangle from Fig. 13.17!)
  drawStitchedBaseball(ctx, c3X, cyDiag, rDiag)
  const p2Mag = ballMass * v2Ball.value
  const lenP2 = Math.max(24, p2Mag * vecScale)

  // Faint tip-to-tail construction (m*v1 + Imp = m*v2)
  ctx.save()
  ctx.globalAlpha = 0.28
  const tailX = c3X - Math.abs(p1X.value) * vecScale * 0.65
  drawArrow(ctx, c3X, cyDiag, tailX, cyDiag, '#94a3b8', 1.6, 5)
  drawArrow(
    ctx,
    tailX,
    cyDiag,
    c3X + lenP2 * Math.cos(theta2Rad.value),
    cyDiag - lenP2 * Math.sin(theta2Rad.value),
    '#fb7185',
    1.6,
    5
  )
  ctx.restore()

  drawArrow(
    ctx,
    c3X + (rDiag + 1) * Math.cos(theta2Rad.value),
    cyDiag - (rDiag + 1) * Math.sin(theta2Rad.value),
    c3X + (rDiag + 1 + lenP2) * Math.cos(theta2Rad.value),
    cyDiag - (rDiag + 1 + lenP2) * Math.sin(theta2Rad.value),
    '#f43f5e',
    3.2,
    8
  )
  ctx.fillStyle = '#fda4af'
  ctx.font = 'bold 11px sans-serif'
  ctx.fillText(
    'm v₂',
    c3X + (rDiag + lenP2 * 0.65) * Math.cos(theta2Rad.value),
    cyDiag - (rDiag + lenP2 * 0.65) * Math.sin(theta2Rad.value) - 10
  )
  ctx.font = '10px monospace'
  ctx.fillStyle = '#94a3b8'
  ctx.fillText(`${p2Mag.toFixed(2)} N·s`, c3X, cyDiag + 30)

  // ==================== RIGHT REGION: FORCE-TIME IMPULSE AREA (FIG. 13.16) ====================
  const rx0 = splitX + 52
  const rx1 = w - 24
  const rw = Math.max(120, rx1 - rx0)
  const ryTop = 64
  const ryBot = h - 54
  const rh = ryBot - ryTop

  ctx.fillStyle = '#cbd5e1'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText('FORCE–TIME IMPULSE AREA: Imp = ∫ F(t) dt (FIG. 13.16)', splitX + 16, 24)

  // Dynamic fill fraction: during contact [0.36..0.64] sweeps from 0..1; before or after shows full reference (with active highlight)
  const fillFrac = prog < 0.36 ? 1.0 : prog <= 0.64 ? (prog - 0.36) / 0.28 : 1.0
  const isPreContact = prog < 0.36

  const fScaleMax = Math.max(10, Math.ceil((fPeak.value / 1000) * 1.18)) // kN
  const yFromKN = (kn: number) => ryBot - (kn / fScaleMax) * rh
  const xFromFrac = (u: number) => rx0 + (0.10 + u * 0.80) * rw // pad left/right like Fig. 13.16 t1..t2!

  const t1X = xFromFrac(0)
  const t2X = xFromFrac(1)
  const tFillX = xFromFrac(fillFrac)

  // Grid lines & kN ticks
  ctx.font = '10px monospace'
  ctx.textAlign = 'right'
  const knStep = fScaleMax > 24 ? 10 : fScaleMax > 12 ? 5 : 2
  for (let kn = 0; kn <= fScaleMax; kn += knStep) {
    const py = yFromKN(kn)
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.14)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(rx0, py)
    ctx.lineTo(rx1, py)
    ctx.stroke()
    ctx.fillStyle = '#94a3b8'
    ctx.fillText(`${kn}`, rx0 - 7, py + 3)
  }

  // Axes
  ctx.strokeStyle = '#64748b'
  ctx.lineWidth = 1.6
  ctx.beginPath()
  ctx.moveTo(rx0, ryTop - 8)
  ctx.lineTo(rx0, ryBot)
  ctx.lineTo(rx1, ryBot)
  ctx.stroke()

  ctx.fillStyle = '#cbd5e1'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText('F (kN)', rx0 - 6, ryTop - 14)
  ctx.textAlign = 'center'
  ctx.fillText('O', rx0 - 8, ryBot + 15)
  ctx.fillText('t₁ = 0', t1X, ryBot + 17)
  ctx.fillText(`t₂ = ${dtMs.value.toFixed(1)} ms`, t2X, ryBot + 17)
  ctx.fillText('t', rx1 - 4, ryBot + 17)

  // Coral-red shaded Impulse Area ∫ F(t) dt (modeled on Beer & Johnston Fig. 13.16)
  const fAtFracKN = (u: number) => {
    if (u < 0 || u > 1) return 0
    if (pulseShape.value === 'sine') {
      return (fPeak.value / 1000) * Math.sin(Math.PI * u)
    }
    return fAvg.value / 1000
  }

  ctx.save()
  ctx.fillStyle = isPreContact ? 'rgba(244, 63, 94, 0.16)' : 'rgba(251, 113, 133, 0.36)'
  ctx.beginPath()
  ctx.moveTo(t1X, ryBot)
  const N = 70
  for (let i = 0; i <= N; i++) {
    const u = (i / N) * fillFrac
    ctx.lineTo(xFromFrac(u), yFromKN(fAtFracKN(u)))
  }
  ctx.lineTo(tFillX, ryBot)
  ctx.closePath()
  ctx.fill()
  ctx.restore()

  // Vertical boundary lines at t1 and t2 (like Fig. 13.16)
  ctx.strokeStyle = '#cbd5e1'
  ctx.lineWidth = 1.3
  ctx.beginPath()
  ctx.moveTo(t1X, ryBot)
  ctx.lineTo(t1X, yFromKN(fAtFracKN(0)))
  ctx.moveTo(t2X, ryBot)
  ctx.lineTo(t2X, yFromKN(fAtFracKN(1)))
  ctx.stroke()

  // Full F(t) curve in crimson/coral red
  ctx.strokeStyle = '#f43f5e'
  ctx.lineWidth = 2.8
  ctx.beginPath()
  for (let i = 0; i <= 80; i++) {
    const u = i / 80
    const px = xFromFrac(u)
    const py = yFromKN(fAtFracKN(u))
    if (i === 0) ctx.moveTo(px, py)
    else ctx.lineTo(px, py)
  }
  ctx.stroke()

  // Dashed F_avg equivalent rectangle line
  const yAvg = yFromKN(fAvg.value / 1000)
  ctx.save()
  ctx.setLineDash([5, 4])
  ctx.strokeStyle = '#38bdf8'
  ctx.lineWidth = 1.6
  ctx.beginPath()
  ctx.moveTo(t1X, yAvg)
  ctx.lineTo(t2X, yAvg)
  ctx.stroke()
  ctx.restore()

  ctx.fillStyle = '#7dd3fc'
  ctx.font = 'bold 10px monospace'
  ctx.textAlign = 'left'
  ctx.fillText(`F_avg = ${(fAvg.value / 1000).toFixed(2)} kN`, t1X + 6, yAvg - 6)

  if (pulseShape.value === 'sine') {
    const yPeak = yFromKN(fPeak.value / 1000)
    ctx.fillStyle = '#fda4af'
    ctx.textAlign = 'center'
    ctx.fillText(`F_max = ${(fPeak.value / 1000).toFixed(2)} kN`, (t1X + t2X) / 2, yPeak - 8)
  }

  // Area label inside shaded region
  ctx.fillStyle = '#ffe4e6'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'center'
  const labelY = Math.min(ryBot - 16, (yAvg + ryBot) / 2 + 4)
  ctx.fillText(`Area = |Imp| = ${impMag.value.toFixed(2)} N·s`, (t1X + t2X) / 2, labelY)

  // Bottom non-impulsive weight comparison note
  ctx.fillStyle = '#fde68a'
  ctx.font = '10px monospace'
  ctx.textAlign = 'center'
  ctx.fillText(
    `Ball Weight W = 1.47 N  ⇒  F_avg / W = ${Math.round(fAvgOverW.value).toLocaleString()}× (W is non-impulsive!)`,
    splitX + (w - splitX) / 2,
    h - 14
  )
}

function tick(ts: number) {
  if (!lastFrameTs) lastFrameTs = ts
  const dt = Math.min(0.05, (ts - lastFrameTs) / 1000)
  lastFrameTs = ts

  if (activeTab.value === 'boats') {
    waterWavePhase.value = (waterWavePhase.value + dt * 1.9) % (Math.PI * 2)
    if (isPlayingBoats.value) {
      boatTime.value += dt
      if (boatTime.value >= tMeet.value) {
        boatTime.value = tMeet.value
        isPlayingBoats.value = false
      }
    }
    drawBoatsCanvas()
  } else {
    if (isPlayingBall.value) {
      // Slightly slower sweep during [0.36..0.64] contact window so student clearly sees millisecond F(t) impulse!
      const rate = ballAnimProg.value >= 0.36 && ballAnimProg.value <= 0.64 ? 0.24 : 0.45
      ballAnimProg.value += dt * rate
      if (ballAnimProg.value >= 1.0) {
        ballAnimProg.value = 1.0
        isPlayingBall.value = false
      }
    }
    drawBallCanvas()
  }

  rafId = requestAnimationFrame(tick)
}

let resizeBoats = () => {}
let resizeBall = () => {}

watch(activeTab, () => {
  nextTick(() => {
    resizeBoats()
    resizeBall()
  })
})

onMounted(() => {
  if (canvasBoatsRef.value) {
    ctxBoats = canvasBoatsRef.value.getContext('2d')
    resizeBoats = () => {
      if (!canvasBoatsRef.value) return
      const rect = canvasBoatsRef.value.getBoundingClientRect()
      if (rect.width > 0) wBoats = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasBoatsRef.value.width = Math.round(wBoats * dpr)
      canvasBoatsRef.value.height = Math.round(hBoats * dpr)
      ctxBoats?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawBoatsCanvas()
    }
    resizeBoats()
    if (typeof ResizeObserver !== 'undefined') {
      resObsBoats = new ResizeObserver(resizeBoats)
      resObsBoats.observe(canvasBoatsRef.value)
    }
  }

  if (canvasBallRef.value) {
    ctxBall = canvasBallRef.value.getContext('2d')
    resizeBall = () => {
      if (!canvasBallRef.value) return
      const rect = canvasBallRef.value.getBoundingClientRect()
      if (rect.width > 0) wBall = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasBallRef.value.width = Math.round(wBall * dpr)
      canvasBallRef.value.height = Math.round(hBall * dpr)
      ctxBall?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawBallCanvas()
    }
    resizeBall()
    if (typeof ResizeObserver !== 'undefined') {
      resObsBall = new ResizeObserver(resizeBall)
      resObsBall.observe(canvasBallRef.value)
    }
  }

  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (rafId !== null) cancelAnimationFrame(rafId)
  if (resObsBoats) resObsBoats.disconnect()
  if (resObsBall) resObsBall.disconnect()
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
  grid-template-columns: minmax(220px, 340px) 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.9rem 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
}

.slide-ref-panel.wide-gallery {
  grid-template-columns: 1fr;
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
  max-height: 150px;
  width: auto;
  object-fit: contain;
}

.slide-ref-multi-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.ref-subfig {
  background: #ffffff;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.28);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.ref-subfig img {
  max-height: 135px;
  width: auto;
  object-fit: contain;
}

.ref-subfig span {
  font-size: 0.73rem;
  font-weight: 600;
  color: #334155;
  text-align: center;
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

@media (max-width: 700px) {
  .slide-ref-panel {
    grid-template-columns: 1fr;
  }
}

/* Mode Toggles */
.mode-toggles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.mode-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 0.9rem;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  color: var(--vp-c-text-2, #475569);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}

.mode-btn:hover {
  border-color: var(--vp-c-brand-1, #0284c7);
}

.mode-btn.active {
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.1));
  border-color: var(--vp-c-brand-1, #0284c7);
  color: var(--vp-c-brand-1, #0284c7);
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

.pulse-shape-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-left: auto;
}

.preset-btn {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  color: var(--vp-c-text-1, #334155);
  padding: 0.28rem 0.68rem;
  font-size: 0.76rem;
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

.preset-btn.toggle-pill {
  margin-left: auto;
}

/* Playback Bar */
.playback-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
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

.time-slider-wrapper {
  flex: 1;
  min-width: 210px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.time-label {
  font-size: 0.79rem;
  font-family: var(--vp-font-family-mono, monospace);
  color: var(--vp-c-text-2, #475569);
  white-space: nowrap;
}

.time-slider-wrapper input[type="range"] {
  flex: 1;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1, #0284c7);
}

/* Controls Grid */
.sim-controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
  gap: 0.75rem;
  margin-bottom: 0.95rem;
}

.control-box {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 0.7rem 0.85rem;
}

.control-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
  font-size: 0.79rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #0f172a);
}

.val-chip {
  background: var(--vp-c-bg-elv, #f1f5f9);
  padding: 0.12rem 0.45rem;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono, monospace);
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--vp-c-brand-1, #0284c7);
}

.val-chip.highlight {
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.12));
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
  height: 380px;
  display: block;
}

.lab-canvas.tall-canvas {
  height: 420px;
}

/* Readout Dashboard */
.sim-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.dash-card {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 9px;
  padding: 0.75rem 0.9rem;
  display: flex;
  flex-direction: column;
}

.dash-card.result-main {
  border-left: 4px solid var(--vp-c-brand-1, #0284c7);
}

.dash-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-text-2, #64748b);
  margin-bottom: 0.2rem;
}

.dash-val {
  font-size: 1.15rem;
  font-weight: 800;
  font-family: var(--vp-font-family-mono, monospace);
  color: var(--vp-c-text-1, #0f172a);
}

.dash-val.highlight {
  color: var(--vp-c-brand-1, #0284c7);
}

.dash-sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-2, #64748b);
  margin-top: 0.22rem;
}
</style>
