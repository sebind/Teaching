<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-header-top">
        <div class="sim-badge-group">
          <span class="sim-badge">MODULE 4</span>
          <span class="sim-badge-secondary">ENERGY METHODS & POWER</span>
        </div>
        <button class="ref-toggle-btn" @click="showSlideRef = !showSlideRef">
          📐 {{ showSlideRef ? 'Hide' : 'Show' }} PDF Slide Figure
        </button>
      </div>
      <h3 class="sim-title">Conservation of Energy Collar & Dumbwaiter Power Simulator</h3>
      <p class="sim-desc">
        Modeled directly on Dr. Sebin Devasia's Module 4 lecture figures: explore work-energy conservation on the 8 m × 6 m spring-collar rod (Slide 14) and instantaneous motor power for the counterweighted dumbwaiter (Slide 17).
      </p>
    </div>

    <!-- Original PDF Slide Figure Reference -->
    <div v-if="showSlideRef" class="slide-ref-panel">
      <div class="slide-ref-img-wrap">
        <img
          :src="withBase(activeTab === 'collar' ? '/images/physics/mod4/mod4_collar_spring_rod.png' : '/images/physics/mod4/mod4_dumbwaiter_motor.png')"
          :alt="activeTab === 'collar' ? 'Module 4 Slide 14 Spring Collar Rod Figure' : 'Module 4 Slide 17 Dumbwaiter and Counterweight Figure'"
        />
      </div>
      <div class="slide-ref-info">
        <span class="slide-ref-tag">
          {{ activeTab === 'collar' ? 'Original PDF Reference · Module 4, Slide 14' : 'Original PDF Reference · Module 4, Slide 17' }}
        </span>
        <p v-if="activeTab === 'collar'">
          Fixed spring anchor on the left at 8 m span from the smooth vertical rod; the 2 kg collar drops 6 m from Position <strong>1</strong> (<em>x</em><sub>1</sub> = 4 m stretch) to Position <strong>2</strong> (<em>l</em><sub>2</sub> = 10 m, <em>x</em><sub>2</sub> = 6 m stretch), reaching <strong>v<sub>2</sub> = 9.36 m/s</strong>.
        </p>
        <p v-else>
          Counterweight <strong>C</strong> (800 N) hangs on a 2:1 movable pulley (<em>v</em><sub>C</sub> = ½<em>v</em><sub>D</sub> downward, 2<em>T</em> upward), while Dumbwaiter <strong>D</strong> (600 N) is hoisted upward by cable <em>T</em> plus floor-mounted Motor <strong>M</strong> force <em>F</em>.
        </p>
      </div>
    </div>

    <!-- Tab Selector -->
    <div class="mode-toggles">
      <button 
        class="mode-btn" 
        :class="{ active: activeTab === 'collar' }"
        @click="activeTab = 'collar'"
      >
        <span class="mode-icon">🪢</span> Tab 1: Vertical Rod Collar & Spring Energy Lab
      </button>
      <button 
        class="mode-btn" 
        :class="{ active: activeTab === 'dumbwaiter' }"
        @click="activeTab = 'dumbwaiter'"
      >
        <span class="mode-icon">⚡</span> Tab 2: Dumbwaiter Motor Power (Uniform vs Accelerated)
      </button>
    </div>

    <!-- ================= TAB 1: COLLAR & SPRING CONSERVATION OF ENERGY ================= -->
    <div v-show="activeTab === 'collar'">
      <!-- Presets -->
      <div class="sim-presets">
        <span class="preset-label">Lecture Presets:</span>
        <button class="preset-btn" @click="applyCollarPreset('lecture')">
          Lecture Q11 Default (m = 2 kg, k = 3 N/m, Δy = 6m ⇒ v₂ = 9.36 m/s)
        </button>
        <button class="preset-btn" @click="applyCollarPreset('friction')">
          Non-Conservative Thermal Loss (μk = 0.15)
        </button>
        <button class="preset-btn" @click="applyCollarPreset('stiff')">
          Stiff Spring Trap (k = 6 N/m)
        </button>
      </div>

      <!-- Playback Bar -->
      <div class="playback-bar">
        <button class="play-btn" @click="togglePlayCollar">
          {{ isPlayingCollar ? '⏸ Pause' : '▶ Drop Collar' }}
        </button>
        <button class="action-btn" @click="resetCollar">↺ Reset</button>

        <div class="time-slider-wrapper">
          <span class="time-label">Collar Drop y: <strong>{{ collarY.toFixed(2) }} m</strong> / 6.00 m</span>
          <input 
            type="range" 
            min="0" 
            max="6" 
            step="0.05" 
            v-model.number="collarY" 
          />
        </div>
      </div>

      <!-- Collar Controls -->
      <div class="sim-controls-grid">
        <div class="control-box">
          <div class="control-header">
            <label>Collar Mass (m)</label>
            <span class="val-chip">{{ collarMass }} kg</span>
          </div>
          <input type="range" min="1" max="10" step="0.5" v-model.number="collarMass" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Spring Constant (k)</label>
            <span class="val-chip">{{ springK }} N/m</span>
          </div>
          <input type="range" min="1" max="15" step="0.5" v-model.number="springK" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Rod Friction (μ_k)</label>
            <span class="val-chip">{{ muK.toFixed(2) }} ({{ muK > 0 ? 'Dissipative' : 'Conservative' }})</span>
          </div>
          <input type="range" min="0" max="0.30" step="0.02" v-model.number="muK" />
        </div>
      </div>

      <!-- Canvas Viewport -->
      <div class="sim-viewport-wrapper">
        <canvas ref="canvasCollarRef" class="lab-canvas"></canvas>
      </div>

      <!-- Energy Dashboard -->
      <div class="sim-dashboard">
        <div class="dash-card result-main">
          <span class="dash-label">Collar Speed (v)</span>
          <span class="dash-val highlight">{{ curSpeedCollar.toFixed(2) }} <small>m/s</small></span>
          <span class="dash-sub">At y = 6m: v₂ = 9.36 m/s (Lecture)</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #38bdf8;">
          <span class="dash-label">Kinetic Energy (T)</span>
          <span class="dash-val">{{ curT.toFixed(1) }} <small>J</small></span>
          <span class="dash-sub">T = ½ m v²</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #a855f7;">
          <span class="dash-label">Elastic Spring Energy (V_e)</span>
          <span class="dash-val">{{ curVe.toFixed(1) }} <small>J</small></span>
          <span class="dash-sub">V_e = ½ k (l - l₀)² (l₀ = 4m)</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #22c55e;">
          <span class="dash-label">Gravitational Work (ΔV_g)</span>
          <span class="dash-val">{{ curVgLoss.toFixed(1) }} <small>J</small></span>
          <span class="dash-sub">mg · y released to system</span>
        </div>
        <div class="dash-card" style="border-left: 4px solid #ef4444;" v-if="muK > 0">
          <span class="dash-label">Thermal Dissipation (E_th)</span>
          <span class="dash-val" style="color: #ef4444;">{{ curEth.toFixed(1) }} <small>J</small></span>
          <span class="dash-sub">∫ μ_k N dy non-conservative loss</span>
        </div>
      </div>
    </div>

    <!-- ================= TAB 2: DUMBWAITER MOTOR POWER ================= -->
    <div v-show="activeTab === 'dumbwaiter'">
      <!-- Presets -->
      <div class="sim-presets">
        <span class="preset-label">Lecture Presets:</span>
        <button class="preset-btn" @click="applyDumbwaiterPreset('uniform')">
          (a) Uniform Speed (a = 0 ⇒ P = 1600 W / 2.14 hp)
        </button>
        <button class="preset-btn" @click="applyDumbwaiterPreset('accelerated')">
          (b) Accelerated (a = 2.5 m/s² ⇒ P = 3231 W / 4.33 hp)
        </button>
        <button class="preset-btn" :class="{ active: isHoistAnimating }" @click="isHoistAnimating = !isHoistAnimating">
          {{ isHoistAnimating ? '⏸ Pause Hoist' : '▶ Animate Hoist' }}
        </button>
      </div>

      <!-- Dumbwaiter Controls -->
      <div class="sim-controls-grid">
        <div class="control-box">
          <div class="control-header">
            <label>Dumbwaiter Weight (W_D)</label>
            <span class="val-chip">{{ weightD }} N</span>
          </div>
          <input type="range" min="300" max="1000" step="50" v-model.number="weightD" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Counterweight (W_C)</label>
            <span class="val-chip">{{ weightC }} N (2:1 Support)</span>
          </div>
          <input type="range" min="400" max="1200" step="50" v-model.number="weightC" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Upward Speed (v_D)</label>
            <span class="val-chip">{{ speedVD }} m/s</span>
          </div>
          <input type="range" min="1" max="15" step="0.5" v-model.number="speedVD" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Acceleration (a_D)</label>
            <span class="val-chip highlight">{{ accelAD.toFixed(1) }} m/s²</span>
          </div>
          <input type="range" min="0" max="5.0" step="0.5" v-model.number="accelAD" />
        </div>
      </div>

      <!-- Canvas Viewport -->
      <div class="sim-viewport-wrapper">
        <canvas ref="canvasDumbRef" class="lab-canvas"></canvas>
      </div>

      <!-- Power Dashboard -->
      <div class="sim-dashboard">
        <div class="dash-card result-main">
          <span class="dash-label">Motor Instantaneous Power</span>
          <span class="dash-val highlight">{{ motorPowerW.toFixed(1) }} <small>W</small></span>
          <span class="dash-sub">Equivalent: <strong>{{ motorPowerHp.toFixed(2) }} hp</strong> (1 hp = 746 W)</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Motor Cable Pull Force (F)</span>
          <span class="dash-val">{{ motorForceF.toFixed(1) }} <small>N</small></span>
          <span class="dash-sub">F = W_D - T + m_D · a_D</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Cable Tension (T)</span>
          <span class="dash-val">{{ cableTensionT.toFixed(1) }} <small>N</small></span>
          <span class="dash-sub">From C: 2T = W_C - m_C(a_D/2)</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Counterweight Motion</span>
          <span class="dash-val" style="color: #f59e0b;">{{ (speedVD / 2).toFixed(2) }} <small>m/s ↓</small></span>
          <span class="dash-sub">v_C = -½ v_D, a_C = -½ a_D</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'

const activeTab = ref<'collar' | 'dumbwaiter'>('collar')
const showSlideRef = ref(true)
const isHoistAnimating = ref(true)
const hoistPhase = ref(0)

// ================= COLLAR TAB STATE =================
const collarMass = ref(2.0)
const springK = ref(3.0)
const muK = ref(0.0)
const collarY = ref(0.0)
const isPlayingCollar = ref(false)

const g = 9.81
const l0 = 4.0 // unstretched length

function applyCollarPreset(type: 'lecture' | 'friction' | 'stiff') {
  if (type === 'lecture') {
    collarMass.value = 2.0
    springK.value = 3.0
    muK.value = 0.0
    collarY.value = 0.0
  } else if (type === 'friction') {
    collarMass.value = 2.0
    springK.value = 3.0
    muK.value = 0.15
    collarY.value = 0.0
  } else if (type === 'stiff') {
    collarMass.value = 2.0
    springK.value = 6.0
    muK.value = 0.0
    collarY.value = 0.0
  }
  isPlayingCollar.value = false
}

// Collar Math:
// Initial at y = 0: l_1 = 8m, stretch = 4m, Ve1 = 0.5 * k * 16 = 24 J (for k=3)
// At y: l(y) = sqrt(8^2 + y^2), stretch = l(y) - 4
// Ve(y) = 0.5 * k * stretch^2
// Gravitational datum at y = 0 => Vg(y) = -m * g * y
// Conservative: T(y) = Ve(0) - Ve(y) + m*g*y
const initVe = computed(() => 0.5 * springK.value * (8.0 - l0) ** 2)

const curSpringLen = computed(() => Math.sqrt(64.0 + collarY.value * collarY.value))
const curStretch = computed(() => curSpringLen.value - l0)
const curVe = computed(() => 0.5 * springK.value * curStretch.value * curStretch.value)
const curVgLoss = computed(() => collarMass.value * g * collarY.value)

// Thermal energy loss due to friction:
// Normal force on rod from horizontal component of spring force:
// N(y) = F_spring * cos(alpha) = k*(l - l0) * (8 / l) = 8k(1 - 4/l)
// Eth = int_0^y mu_k * N(y) dy
const curEth = computed(() => {
  if (muK.value <= 0) return 0
  const steps = 30
  const dy = collarY.value / steps
  let sum = 0
  for (let i = 0; i < steps; i++) {
    const yMid = (i + 0.5) * dy
    const lMid = Math.sqrt(64 + yMid * yMid)
    const nMid = Math.max(0, 8 * springK.value * (1 - 4 / lMid))
    sum += muK.value * nMid * dy
  }
  return sum
})

const curT = computed(() => {
  const mechanicalWork = initVe.value - curVe.value + curVgLoss.value
  const available = mechanicalWork - curEth.value
  return Math.max(0, available)
})

const curSpeedCollar = computed(() => {
  return Math.sqrt((2 * curT.value) / collarMass.value)
})

function togglePlayCollar() {
  if (!isPlayingCollar.value && collarY.value >= 5.99) collarY.value = 0
  isPlayingCollar.value = !isPlayingCollar.value
}

function resetCollar() {
  isPlayingCollar.value = false
  collarY.value = 0
}

// ================= DUMBWAITER TAB STATE =================
const weightD = ref(600)
const weightC = ref(800)
const speedVD = ref(8.0)
const accelAD = ref(0.0)

function applyDumbwaiterPreset(type: 'uniform' | 'accelerated') {
  if (type === 'uniform') {
    weightD.value = 600
    weightC.value = 800
    speedVD.value = 8.0
    accelAD.value = 0.0
  } else {
    weightD.value = 600
    weightC.value = 800
    speedVD.value = 8.0
    accelAD.value = 2.5
  }
}

// Dumbwaiter Math:
// Counterweight FBD: 2T = W_C - m_C * a_C = W_C - (W_C / g) * (a_D / 2)
const cableTensionT = computed(() => {
  const mC = weightC.value / g
  const aC = accelAD.value / 2
  return 0.5 * (weightC.value - mC * aC)
})

// Dumbwaiter FBD: F_motor + T - W_D = m_D * a_D => F_motor = W_D - T + (W_D / g) * a_D
const motorForceF = computed(() => {
  const mD = weightD.value / g
  return weightD.value - cableTensionT.value + mD * accelAD.value
})

const motorPowerW = computed(() => motorForceF.value * speedVD.value)
const motorPowerHp = computed(() => motorPowerW.value / 746)

// ================= CANVAS DRAWING =================
const canvasCollarRef = ref<HTMLCanvasElement | null>(null)
let ctxCollar: CanvasRenderingContext2D | null = null
let logicalW1 = 700
const logicalH1 = 380

const canvasDumbRef = ref<HTMLCanvasElement | null>(null)
let ctxDumb: CanvasRenderingContext2D | null = null
let logicalW2 = 700
const logicalH2 = 380

function drawCollar() {
  if (!ctxCollar || !canvasCollarRef.value) return
  const w = logicalW1
  const h = logicalH1

  ctxCollar.clearRect(0, 0, w, h)

  // Simulation Layout:
  // Left side: Physical system (rod, spring, collar)
  // Right side: Real-time dynamic Energy Bar Chart
  const simW = w * 0.58
  const chartLeft = simW + 20
  const chartW = w - chartLeft - 20

  // 1. Physical System matching Module 4 Slide 14:
  // Fixed clevis Pin on LEFT (pinX), smooth vertical rod 8 m to RIGHT (rodX = pinX + 8*s)
  const pinX = 42
  const topY = 66
  const s = Math.min(34, Math.max(19, (simW - pinX - 58) / 8))
  const rodX = pinX + 8 * s
  const bottomY = topY + 6 * s
  const pinY = topY

  // Top 8 m horizontal dimension bar (|<--- 8 m --->|)
  ctxCollar.strokeStyle = 'rgba(148, 163, 184, 0.75)'
  ctxCollar.lineWidth = 1.2
  ctxCollar.beginPath()
  ctxCollar.moveTo(pinX, topY - 30)
  ctxCollar.lineTo(rodX, topY - 30)
  ctxCollar.moveTo(pinX, topY - 36)
  ctxCollar.lineTo(pinX, topY - 18)
  ctxCollar.moveTo(rodX, topY - 36)
  ctxCollar.lineTo(rodX, topY - 24)
  ctxCollar.stroke()
  ctxCollar.fillStyle = '#e2e8f0'
  ctxCollar.font = 'bold 11px monospace'
  ctxCollar.textAlign = 'center'
  ctxCollar.fillText('8 m', (pinX + rodX) / 2, topY - 35)

  // Right 6 m vertical dimension bar (Position 1 to Position 2)
  const dimX = rodX + 34
  ctxCollar.strokeStyle = 'rgba(148, 163, 184, 0.75)'
  ctxCollar.beginPath()
  ctxCollar.moveTo(rodX + 16, topY)
  ctxCollar.lineTo(dimX + 6, topY)
  ctxCollar.moveTo(rodX + 16, bottomY)
  ctxCollar.lineTo(dimX + 6, bottomY)
  ctxCollar.moveTo(dimX, topY)
  ctxCollar.lineTo(dimX, bottomY)
  ctxCollar.stroke()
  ctxCollar.fillStyle = '#e2e8f0'
  ctxCollar.textAlign = 'left'
  ctxCollar.fillText('6 m', dimX + 6, (topY + bottomY) / 2 + 4)

  // Vertical Steel Guide Rod on RIGHT (matching Slide 14 light-blue/steel shaft)
  ctxCollar.fillStyle = '#64748b'
  ctxCollar.fillRect(rodX - 5, topY - 22, 10, bottomY - topY + 44)
  ctxCollar.strokeStyle = '#bae6fd'
  ctxCollar.lineWidth = 1.5
  ctxCollar.strokeRect(rodX - 5, topY - 22, 10, bottomY - topY + 44)

  // Ghost collar outlines at Position 1 and Position 2
  ctxCollar.save()
  ctxCollar.setLineDash([3, 3])
  ctxCollar.strokeStyle = 'rgba(148, 163, 184, 0.55)'
  ctxCollar.strokeRect(rodX - 13, topY - 14, 26, 28)
  ctxCollar.strokeRect(rodX - 13, bottomY - 14, 26, 28)
  ctxCollar.restore()
  ctxCollar.fillStyle = '#cbd5e1'
  ctxCollar.font = 'bold 12px serif'
  ctxCollar.fillText('1', rodX + 18, topY - 6)
  ctxCollar.fillText('2', rodX + 18, bottomY + 14)

  // Fixed Clevis Bracket & Pin on LEFT (matching Slide 14 pedestal pin)
  ctxCollar.fillStyle = '#475569'
  ctxCollar.fillRect(pinX - 18, pinY + 8, 36, 10)
  ctxCollar.beginPath()
  ctxCollar.moveTo(pinX - 10, pinY + 8)
  ctxCollar.lineTo(pinX - 6, pinY - 6)
  ctxCollar.arc(pinX, pinY - 2, 7, Math.PI, 0, false)
  ctxCollar.lineTo(pinX + 10, pinY + 8)
  ctxCollar.closePath()
  ctxCollar.fillStyle = '#94a3b8'
  ctxCollar.fill()
  ctxCollar.fillStyle = '#0f172a'
  ctxCollar.beginPath()
  ctxCollar.arc(pinX, pinY, 3.5, 0, Math.PI * 2)
  ctxCollar.fill()

  // Collar position along the rod
  const collarCenterY = topY + collarY.value * s

  // Ghost initial horizontal spring if collar has moved
  if (collarY.value > 0.15) {
    ctxCollar.save()
    ctxCollar.strokeStyle = 'rgba(148, 163, 184, 0.25)'
    ctxCollar.setLineDash([4, 3])
    ctxCollar.beginPath()
    ctxCollar.moveTo(pinX, pinY)
    ctxCollar.lineTo(rodX - 13, topY)
    ctxCollar.stroke()
    ctxCollar.restore()
  }

  // Realistic Spring Coils from Left Pin to Right Collar
  const dx = (rodX - 12) - pinX
  const dy = collarCenterY - pinY
  const springLenPx = Math.sqrt(dx * dx + dy * dy)
  const springAngle = Math.atan2(dy, dx)

  ctxCollar.save()
  ctxCollar.translate(pinX, pinY)
  ctxCollar.rotate(springAngle)

  ctxCollar.strokeStyle = '#93c5fd'
  ctxCollar.lineWidth = 2.2
  ctxCollar.beginPath()
  const numCoils = 16
  const leadLen = 16
  const coilSpan = Math.max(20, springLenPx - 2 * leadLen)

  ctxCollar.moveTo(0, 0)
  ctxCollar.lineTo(leadLen, 0)

  for (let c = 0; c <= numCoils; c++) {
    const cx = leadLen + (c / numCoils) * coilSpan
    const amp = (c % 2 === 0 ? 1 : -1) * 7.5
    ctxCollar.lineTo(cx, amp)
  }
  ctxCollar.lineTo(springLenPx, 0)
  ctxCollar.stroke()
  ctxCollar.restore()

  // Collar Body (Green sleeve on rod matching Slide 14)
  ctxCollar.fillStyle = '#22c55e'
  ctxCollar.fillRect(rodX - 13, collarCenterY - 14, 26, 28)
  ctxCollar.strokeStyle = '#f8fafc'
  ctxCollar.lineWidth = 2
  ctxCollar.strokeRect(rodX - 13, collarCenterY - 14, 26, 28)
  ctxCollar.fillStyle = '#052e16'
  ctxCollar.beginPath()
  ctxCollar.arc(rodX - 7, collarCenterY, 3, 0, Math.PI * 2)
  ctxCollar.fill()

  // Velocity Vector Arrow on Collar
  const vel = curSpeedCollar.value
  if (vel > 0.1) {
    const vArrowLen = Math.min(48, vel * 4.2)
    ctxCollar.strokeStyle = '#38bdf8'
    ctxCollar.fillStyle = '#38bdf8'
    ctxCollar.lineWidth = 2.8
    ctxCollar.beginPath()
    ctxCollar.moveTo(rodX - 24, collarCenterY)
    ctxCollar.lineTo(rodX - 24, collarCenterY + vArrowLen)
    ctxCollar.stroke()
    ctxCollar.beginPath()
    ctxCollar.moveTo(rodX - 24, collarCenterY + vArrowLen)
    ctxCollar.lineTo(rodX - 28, collarCenterY + vArrowLen - 6)
    ctxCollar.lineTo(rodX - 20, collarCenterY + vArrowLen - 6)
    ctxCollar.closePath()
    ctxCollar.fill()
    ctxCollar.textAlign = 'right'
    ctxCollar.font = 'bold 10px monospace'
    ctxCollar.fillText(`${vel.toFixed(1)}m/s`, rodX - 30, collarCenterY + vArrowLen)
  }

  // ================= 2. DYNAMIC ENERGY BAR CHART =================
  ctxCollar.fillStyle = 'rgba(15, 23, 42, 0.95)'
  ctxCollar.fillRect(chartLeft, 30, chartW, h - 60)
  ctxCollar.strokeStyle = 'rgba(148, 163, 184, 0.3)'
  ctxCollar.strokeRect(chartLeft, 30, chartW, h - 60)

  ctxCollar.fillStyle = '#f8fafc'
  ctxCollar.font = 'bold 12px sans-serif'
  ctxCollar.textAlign = 'left'
  ctxCollar.fillText('ENERGY DISTRIBUTION (JOULES)', chartLeft + 12, 52)

  // Bars: T, V_e, V_g (loss/input), E_th, Total
  const bars = [
    { label: 'Kinetic (T)', val: curT.value, color: '#38bdf8' },
    { label: 'Spring (Ve)', val: curVe.value, color: '#c084fc' },
    { label: 'Grav (ΔVg)', val: curVgLoss.value, color: '#22c55e' },
    { label: 'Friction Loss', val: curEth.value, color: '#ef4444' }
  ]

  const maxEnergyScale = Math.max(145, initVe.value + collarMass.value * g * 6 + 15)
  const barStartY = 85
  const barHeight = 24
  const barGap = 42

  bars.forEach((b, idx) => {
    const by = barStartY + idx * barGap
    ctxCollar.fillStyle = '#94a3b8'
    ctxCollar.font = '11px sans-serif'
    ctxCollar.textAlign = 'left'
    ctxCollar.fillText(b.label, chartLeft + 12, by - 6)

    // Bar background
    ctxCollar.fillStyle = '#1e293b'
    ctxCollar.fillRect(chartLeft + 12, by, chartW - 24, barHeight)

    // Filled bar
    const fillWidth = Math.min(chartW - 24, (b.val / maxEnergyScale) * (chartW - 24))
    ctxCollar.fillStyle = b.color
    ctxCollar.fillRect(chartLeft + 12, by, Math.max(0, fillWidth), barHeight)

    // Value text
    ctxCollar.fillStyle = '#ffffff'
    ctxCollar.font = 'bold 11px monospace'
    ctxCollar.textAlign = 'right'
    ctxCollar.fillText(`${b.val.toFixed(1)} J`, chartLeft + chartW - 16, by + 16)
  })

  // Conservation Equation Check
  ctxCollar.fillStyle = '#38bdf8'
  ctxCollar.font = '10px monospace'
  ctxCollar.textAlign = 'left'
  ctxCollar.fillText('T₁ + V₁ = T₂ + V₂ + E_th', chartLeft + 12, h - 50)
  ctxCollar.fillStyle = '#22c55e'
  ctxCollar.fillText(`✓ Total Energy Conserved: ${(curT.value + curVe.value - curVgLoss.value + curEth.value).toFixed(1)} J ≡ ${initVe.value.toFixed(1)} J`, chartLeft + 12, h - 35)
}

function drawDumbwaiter() {
  if (!ctxDumb || !canvasDumbRef.value) return
  const w = logicalW2
  const h = logicalH2

  ctxDumb.clearRect(0, 0, w, h)

  // Layout modeled directly on Module 4 Slide 17:
  // Left half: Counterweight C on LEFT (2:1 movable pulley), Dumbwaiter D to its RIGHT, Motor M on floor at bottom-right
  // Right half: Live Free-Body & Kinetic Diagrams (Fig. 1, Fig. 2, Fig. 3)
  const hoistRight = Math.min(360, w * 0.52)
  const beamY = 44
  const floorY = h - 38

  // Overhead beam & floor
  ctxDumb.fillStyle = '#475569'
  ctxDumb.fillRect(34, beamY - 12, hoistRight - 20, 12)
  ctxDumb.fillRect(34, floorY, hoistRight + 10, 8)

  const cwX = Math.max(82, hoistRight * 0.28)
  const dumbX = Math.max(175, hoistRight * 0.62)
  const motorX = Math.max(245, hoistRight * 0.86)

  const drawSheave = (x: number, y: number, r: number) => {
    ctxDumb!.fillStyle = '#cbd5e1'
    ctxDumb!.beginPath()
    ctxDumb!.arc(x, y, r, 0, Math.PI * 2)
    ctxDumb!.fill()
    ctxDumb!.strokeStyle = '#334155'
    ctxDumb!.lineWidth = 2
    ctxDumb!.stroke()
    ctxDumb!.fillStyle = '#334155'
    ctxDumb!.beginPath()
    ctxDumb!.arc(x, y, 3, 0, Math.PI * 2)
    ctxDumb!.fill()
  }

  // Animated vertical travel offset: D moves UP by dyD, C moves DOWN by 0.5 * dyD!
  const dyD = (hoistPhase.value % 1) * 76 - 38 // -38 (higher) to +38 (lower), wait: rising means y decreases!
  const offsetD = 38 - (hoistPhase.value % 1) * 76
  const offsetC = -0.5 * offsetD

  const cwPulleyY = 178 + offsetC
  const dumbY = 172 + offsetD

  // Overhead sheaves matching Slide 17
  const topSheave1X = cwX + 13
  const topSheave2X = dumbX - 12
  const topSheave3X = dumbX + 14
  drawSheave(topSheave1X, beamY + 14, 12)
  drawSheave(topSheave2X, beamY + 14, 12)
  drawSheave(topSheave3X, beamY + 28, 12)

  // Counterweight Cable (Blue): Fixed ceiling anchor -> down around C's movable pulley -> up over Sheave 1 & 2 -> down to D
  ctxDumb.strokeStyle = '#38bdf8'
  ctxDumb.lineWidth = 2.4
  ctxDumb.beginPath()
  ctxDumb.moveTo(cwX - 13, beamY)
  ctxDumb.lineTo(cwX - 13, cwPulleyY)
  ctxDumb.arc(cwX, cwPulleyY, 13, Math.PI, 0, true)
  ctxDumb.lineTo(topSheave1X, beamY + 14)
  ctxDumb.lineTo(topSheave2X, beamY + 2)
  ctxDumb.moveTo(topSheave2X + 8, beamY + 14)
  ctxDumb.lineTo(dumbX - 10, dumbY)
  ctxDumb.stroke()

  drawSheave(cwX, cwPulleyY, 13)

  // Counterweight C (slim vertical block on LEFT matching Slide 17)
  ctxDumb.fillStyle = '#94a3b8'
  ctxDumb.fillRect(cwX - 12, cwPulleyY + 16, 24, 68)
  ctxDumb.strokeStyle = '#f8fafc'
  ctxDumb.strokeRect(cwX - 12, cwPulleyY + 16, 24, 68)
  ctxDumb.fillStyle = '#0f172a'
  ctxDumb.font = 'bold 11px sans-serif'
  ctxDumb.textAlign = 'center'
  ctxDumb.fillText('C', cwX, cwPulleyY + 52)
  ctxDumb.fillStyle = '#f59e0b'
  ctxDumb.font = '10px monospace'
  ctxDumb.fillText(`${(speedVD.value / 2).toFixed(1)}m/s ↓`, cwX, cwPulleyY + 98)

  // Motor Cable F (Rose/Red): From D -> up over Sheave 3 -> down to floor-mounted Motor M
  ctxDumb.strokeStyle = '#f43f5e'
  ctxDumb.lineWidth = 2.6
  ctxDumb.beginPath()
  ctxDumb.moveTo(dumbX + 10, dumbY)
  ctxDumb.lineTo(topSheave3X - 6, beamY + 28)
  ctxDumb.lineTo(motorX - 14, floorY - 18)
  ctxDumb.stroke()

  // Floor-mounted Electric Motor M (bottom right of hoist, matching Slide 17)
  ctxDumb.fillStyle = '#0284c7'
  ctxDumb.beginPath()
  ctxDumb.arc(motorX, floorY - 16, 15, 0, Math.PI * 2)
  ctxDumb.fill()
  ctxDumb.strokeStyle = '#f8fafc'
  ctxDumb.stroke()
  ctxDumb.fillStyle = '#ffffff'
  ctxDumb.font = 'bold 11px sans-serif'
  ctxDumb.fillText('M', motorX, floorY - 12)

  // Dumbwaiter Car D (box with shelf on RIGHT matching Slide 17)
  ctxDumb.fillStyle = '#cbd5e1'
  ctxDumb.fillRect(dumbX - 24, dumbY, 48, 66)
  ctxDumb.strokeStyle = '#0284c7'
  ctxDumb.lineWidth = 2.2
  ctxDumb.strokeRect(dumbX - 24, dumbY, 48, 66)
  ctxDumb.fillStyle = '#64748b'
  ctxDumb.fillRect(dumbX - 18, dumbY + 34, 36, 5)
  ctxDumb.fillStyle = '#0f172a'
  ctxDumb.font = 'bold 12px sans-serif'
  ctxDumb.fillText('D', dumbX, dumbY + 24)
  ctxDumb.fillStyle = '#22c55e'
  ctxDumb.font = '10px monospace'
  ctxDumb.fillText(`${speedVD.value}m/s ↑`, dumbX, dumbY + 82)

  // RIGHT PANEL: Live Free-Body Diagrams (matching Fig. 1, Fig. 2, Fig. 3 of Slide 17)
  const fbdLeft = hoistRight + 26
  const fbdW = w - fbdLeft - 18
  if (fbdW > 180) {
    ctxDumb.fillStyle = 'rgba(15, 23, 42, 0.92)'
    ctxDumb.fillRect(fbdLeft, 30, fbdW, h - 60)
    ctxDumb.strokeStyle = 'rgba(148, 163, 184, 0.3)'
    ctxDumb.strokeRect(fbdLeft, 30, fbdW, h - 60)

    ctxDumb.fillStyle = '#f8fafc'
    ctxDumb.font = 'bold 12px sans-serif'
    ctxDumb.textAlign = 'left'
    ctxDumb.fillText('FREE-BODY & KINETIC BALANCE (SLIDE 17)', fbdLeft + 14, 52)

    const cFbdX = fbdLeft + fbdW * 0.28
    const dFbdX = fbdLeft + fbdW * 0.72
    const boxMidY = 175

    // Body C FBD
    ctxDumb.fillStyle = '#94a3b8'
    ctxDumb.fillRect(cFbdX - 14, boxMidY - 26, 28, 52)
    ctxDumb.fillStyle = '#0f172a'
    ctxDumb.textAlign = 'center'
    ctxDumb.font = 'bold 11px sans-serif'
    ctxDumb.fillText('C', cFbdX, boxMidY + 4)

    // 2T Upward on C
    ctxDumb.strokeStyle = '#38bdf8'
    ctxDumb.lineWidth = 2.5
    ctxDumb.beginPath()
    ctxDumb.moveTo(cFbdX, boxMidY - 26)
    ctxDumb.lineTo(cFbdX, boxMidY - 68)
    ctxDumb.stroke()
    ctxDumb.fillStyle = '#38bdf8'
    ctxDumb.font = 'bold 10px monospace'
    ctxDumb.fillText(`2T = ${(2 * cableTensionT.value).toFixed(0)} N ↑`, cFbdX, boxMidY - 74)

    // W_C Downward on C
    ctxDumb.strokeStyle = '#f59e0b'
    ctxDumb.beginPath()
    ctxDumb.moveTo(cFbdX, boxMidY + 26)
    ctxDumb.lineTo(cFbdX, boxMidY + 66)
    ctxDumb.stroke()
    ctxDumb.fillStyle = '#f59e0b'
    ctxDumb.fillText(`W_C = ${weightC.value} N ↓`, cFbdX, boxMidY + 80)
    ctxDumb.fillStyle = '#cbd5e1'
    ctxDumb.fillText(`a_C = ${(accelAD.value / 2).toFixed(2)} m/s² ↓`, cFbdX, boxMidY + 96)

    // Body D FBD
    ctxDumb.fillStyle = '#cbd5e1'
    ctxDumb.fillRect(dFbdX - 20, boxMidY - 26, 40, 52)
    ctxDumb.fillStyle = '#0f172a'
    ctxDumb.font = 'bold 11px sans-serif'
    ctxDumb.fillText('D', dFbdX, boxMidY + 4)

    // T and F Upward on D
    ctxDumb.strokeStyle = '#38bdf8'
    ctxDumb.beginPath()
    ctxDumb.moveTo(dFbdX - 10, boxMidY - 26)
    ctxDumb.lineTo(dFbdX - 10, boxMidY - 64)
    ctxDumb.stroke()
    ctxDumb.strokeStyle = '#f43f5e'
    ctxDumb.beginPath()
    ctxDumb.moveTo(dFbdX + 10, boxMidY - 26)
    ctxDumb.lineTo(dFbdX + 10, boxMidY - 68)
    ctxDumb.stroke()

    ctxDumb.font = 'bold 10px monospace'
    ctxDumb.fillStyle = '#38bdf8'
    ctxDumb.fillText(`T=${cableTensionT.value.toFixed(0)}N`, dFbdX - 24, boxMidY - 72)
    ctxDumb.fillStyle = '#f43f5e'
    ctxDumb.fillText(`F=${motorForceF.value.toFixed(0)}N`, dFbdX + 26, boxMidY - 72)

    // W_D Downward on D
    ctxDumb.strokeStyle = '#f59e0b'
    ctxDumb.beginPath()
    ctxDumb.moveTo(dFbdX, boxMidY + 26)
    ctxDumb.lineTo(dFbdX, boxMidY + 66)
    ctxDumb.stroke()
    ctxDumb.fillStyle = '#f59e0b'
    ctxDumb.fillText(`W_D = ${weightD.value} N ↓`, dFbdX, boxMidY + 80)
    ctxDumb.fillStyle = '#22c55e'
    ctxDumb.fillText(`a_D = ${accelAD.value.toFixed(2)} m/s² ↑`, dFbdX, boxMidY + 96)

    // Power output banner
    ctxDumb.fillStyle = '#38bdf8'
    ctxDumb.font = 'bold 11px monospace'
    ctxDumb.textAlign = 'left'
    ctxDumb.fillText(`P = F · v_D = ${motorPowerW.toFixed(1)} W (${motorPowerHp.toFixed(2)} hp)`, fbdLeft + 14, h - 42)
  }

  // Kinematic Constraint note
  ctxDumb.fillStyle = '#94a3b8'
  ctxDumb.font = '10px monospace'
  ctxDumb.textAlign = 'left'
  ctxDumb.fillText('2:1 Pulley: v_C = ½ v_D ↓ | 2T = W_C - m_C a_C', 34, h - 14)
}

// ================= ANIMATION TICK (SSR SAFE) =================
let animId: number | null = null
let lastTime = 0
let resObsCollar: ResizeObserver | null = null
let resObsDumb: ResizeObserver | null = null

function tick(now: number) {
  if (!lastTime) lastTime = now
  const dt = (now - lastTime) / 1000
  lastTime = now

  if (activeTab.value === 'collar') {
    if (isPlayingCollar.value) {
      const netStartForce = collarMass.value * g - muK.value * springK.value * 4
      if (collarY.value < 0.02 && netStartForce <= 0) {
        isPlayingCollar.value = false
      } else if (collarY.value >= 0.05 && curT.value <= 0.001) {
        isPlayingCollar.value = false
      } else {
        const vEff = collarY.value < 0.05 ? Math.max(0.45, curSpeedCollar.value) : curSpeedCollar.value
        collarY.value += vEff * dt * 0.45
        if (collarY.value >= 6.0) {
          collarY.value = 6.0
          isPlayingCollar.value = false
        }
      }
    }
    drawCollar()
  } else {
    if (isHoistAnimating.value) {
      hoistPhase.value = (hoistPhase.value + dt * (speedVD.value / 24)) % 1
    }
    drawDumbwaiter()
  }

  animId = requestAnimationFrame(tick)
}

let updateSize1 = () => {}
let updateSize2 = () => {}

watch(activeTab, () => {
  nextTick(() => {
    updateSize1()
    updateSize2()
  })
})

onMounted(() => {
  if (canvasCollarRef.value) {
    ctxCollar = canvasCollarRef.value.getContext('2d')
    updateSize1 = () => {
      if (!canvasCollarRef.value) return
      const rect = canvasCollarRef.value.getBoundingClientRect()
      if (rect.width > 0) logicalW1 = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasCollarRef.value.width = Math.round(logicalW1 * dpr)
      canvasCollarRef.value.height = Math.round(logicalH1 * dpr)
      ctxCollar?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawCollar()
    }
    updateSize1()
    if (typeof ResizeObserver !== 'undefined') {
      resObsCollar = new ResizeObserver(updateSize1)
      resObsCollar.observe(canvasCollarRef.value)
    }
  }

  if (canvasDumbRef.value) {
    ctxDumb = canvasDumbRef.value.getContext('2d')
    updateSize2 = () => {
      if (!canvasDumbRef.value) return
      const rect = canvasDumbRef.value.getBoundingClientRect()
      if (rect.width > 0) logicalW2 = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasDumbRef.value.width = Math.round(logicalW2 * dpr)
      canvasDumbRef.value.height = Math.round(logicalH2 * dpr)
      ctxDumb?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawDumbwaiter()
    }
    updateSize2()
    if (typeof ResizeObserver !== 'undefined') {
      resObsDumb = new ResizeObserver(updateSize2)
      resObsDumb.observe(canvasDumbRef.value)
    }
  }

  animId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (animId) cancelAnimationFrame(animId)
  if (resObsCollar) resObsCollar.disconnect()
  if (resObsDumb) resObsDumb.disconnect()
})
</script>

<style scoped>
.sim-card {
  background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid var(--vp-c-divider, rgba(226, 232, 240, 0.8));
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
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
  margin-bottom: 0.4rem;
}

.ref-toggle-btn {
  padding: 0.3rem 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1, #0284c7);
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.1));
  color: var(--vp-c-brand-1, #0284c7);
  font-size: 0.76rem;
  font-weight: 700;
  cursor: pointer;
}

.slide-ref-panel {
  display: grid;
  grid-template-columns: minmax(180px, 240px) 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.85rem 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, rgba(226, 232, 240, 0.8));
}

.slide-ref-img-wrap {
  background: #ffffff;
  padding: 0.45rem;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  display: flex;
  justify-content: center;
}

.slide-ref-img-wrap img {
  max-height: 165px;
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

@media (max-width: 680px) {
  .slide-ref-panel {
    grid-template-columns: 1fr;
  }
}

.sim-badge-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.sim-badge {
  background: var(--vp-c-brand-1, #0284c7);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
  letter-spacing: 0.05em;
}

.sim-badge-secondary {
  background: var(--vp-c-bg-elv, #e2e8f0);
  color: var(--vp-c-text-2, #64748b);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
  letter-spacing: 0.05em;
}

.sim-title {
  margin: 0.25rem 0 0.5rem 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--vp-c-text-1, #0f172a);
}

.sim-desc {
  margin: 0;
  font-size: 0.92rem;
  color: var(--vp-c-text-2, #475569);
  line-height: 1.45;
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
  gap: 0.5rem;
  padding: 0.65rem 1rem;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  color: var(--vp-c-text-2, #475569);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
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
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.6rem 0.8rem;
  background: var(--vp-c-bg-elv, #f1f5f9);
  border-radius: 8px;
}

.preset-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-2, #64748b);
}

.preset-btn {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  color: var(--vp-c-text-1, #334155);
  padding: 0.3rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
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

/* Playback Control Bar */
.playback-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  padding: 0.75rem 1rem;
  border-radius: 8px;
}

.play-btn {
  background: var(--vp-c-brand-1, #0284c7);
  color: #ffffff;
  border: none;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.45rem 1rem;
  border-radius: 6px;
  cursor: pointer;
}

.action-btn {
  background: var(--vp-c-bg-elv, #f1f5f9);
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  color: var(--vp-c-text-1, #334155);
  font-size: 0.85rem;
  padding: 0.45rem 0.8rem;
  border-radius: 6px;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.control-box {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 0.8rem;
}

.control-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #0f172a);
}

.val-chip {
  background: var(--vp-c-bg-elv, #f1f5f9);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
}

.val-chip.highlight {
  color: var(--vp-c-brand-1, #0284c7);
  font-weight: 700;
}

input[type="range"] {
  width: 100%;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1, #0284c7);
}

/* Viewport */
.sim-viewport-wrapper {
  background: #0f172a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 1.25rem;
}

.lab-canvas {
  width: 100%;
  height: 380px;
  display: block;
}

/* Dashboard */
.sim-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.75rem;
}

.dash-card {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
}

.dash-card.result-main {
  border-color: #0284c7;
  background: rgba(2, 132, 199, 0.04);
}

.dash-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-2, #64748b);
  margin-bottom: 0.2rem;
}

.dash-val {
  font-size: 1.2rem;
  font-weight: 700;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1, #0f172a);
}

.dash-val.highlight {
  color: #0284c7;
}

.dash-sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-2, #94a3b8);
  margin-top: 0.25rem;
}
</style>
