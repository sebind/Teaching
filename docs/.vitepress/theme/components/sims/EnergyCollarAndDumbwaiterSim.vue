<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-badge-group">
        <span class="sim-badge">MODULE 4</span>
        <span class="sim-badge-secondary">ENERGY METHODS & POWER</span>
      </div>
      <h3 class="sim-title">Conservation of Energy Collar & Dumbwaiter Power Simulator</h3>
      <p class="sim-desc">
        Explore work-energy conservation on the vertical rod spring-collar system with real-time dynamic energy bar charts, and calculate instantaneous motor power for the 2:1 counterweighted dumbwaiter system.
      </p>
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
          (b) Accelerated (a = 2.5 m/s² ⇒ P = 3232.6 W / 4.33 hp)
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

const activeTab = ref<'collar' | 'dumbwaiter'>('collar')

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

  // 1. Physical System (responsive scale so Pin at 8m stays inside simW)
  const rodX = 62
  const topY = 54
  const s = Math.min(36, Math.max(20, (simW - rodX - 38) / 8))
  const bottomY = topY + 6 * s

  // Pin Support at (8m, 0)
  const pinX = rodX + 8 * s
  const pinY = topY

  // Vertical Steel Rod
  ctxCollar.fillStyle = '#64748b'
  ctxCollar.fillRect(rodX - 5, topY - 20, 10, bottomY - topY + 40)
  ctxCollar.strokeStyle = '#94a3b8'
  ctxCollar.lineWidth = 1.5
  ctxCollar.strokeRect(rodX - 5, topY - 20, 10, bottomY - topY + 40)

  // Meter ticks along vertical rod
  ctxCollar.fillStyle = 'rgba(148, 163, 184, 0.7)'
  ctxCollar.font = '10px monospace'
  ctxCollar.textAlign = 'right'
  for (let m = 0; m <= 6; m++) {
    const yPos = topY + m * s
    ctxCollar.strokeStyle = '#94a3b8'
    ctxCollar.beginPath()
    ctxCollar.moveTo(rodX - 10, yPos)
    ctxCollar.lineTo(rodX + 10, yPos)
    ctxCollar.stroke()
    ctxCollar.fillText(`y = ${m}m`, rodX - 14, yPos + 3)
  }

  // Pin Support Wall & Pivot at (pinX, pinY)
  ctxCollar.fillStyle = '#334155'
  ctxCollar.fillRect(pinX, pinY - 15, 20, 30)
  ctxCollar.fillStyle = '#0284c7'
  ctxCollar.beginPath()
  ctxCollar.arc(pinX, pinY, 6, 0, Math.PI * 2)
  ctxCollar.fill()
  ctxCollar.fillText('PIN (8m, 0)', pinX - 8, pinY - 12)

  // Collar position along the rod
  const collarCenterY = topY + collarY.value * s

  // Realistic Spring Coils from Pin to Collar
  const dx = rodX - pinX
  const dy = collarCenterY - pinY
  const springLenPx = Math.sqrt(dx * dx + dy * dy)
  const springAngle = Math.atan2(dy, dx)

  ctxCollar.save()
  ctxCollar.translate(pinX, pinY)
  ctxCollar.rotate(springAngle)

  ctxCollar.strokeStyle = '#c084fc'
  ctxCollar.lineWidth = 2.5
  ctxCollar.beginPath()
  const numCoils = 14
  const leadLen = 20
  const coilSpan = springLenPx - 2 * leadLen

  ctxCollar.moveTo(0, 0)
  ctxCollar.lineTo(leadLen, 0)

  for (let c = 0; c <= numCoils; c++) {
    const cx = leadLen + (c / numCoils) * coilSpan
    const amp = (c % 2 === 0 ? 1 : -1) * 9
    ctxCollar.lineTo(cx, amp)
  }
  ctxCollar.lineTo(springLenPx, 0)
  ctxCollar.stroke()
  ctxCollar.restore()

  // Collar Body (Bronze cylinder on rod)
  ctxCollar.fillStyle = '#f59e0b'
  ctxCollar.fillRect(rodX - 14, collarCenterY - 15, 28, 30)
  ctxCollar.strokeStyle = '#ffffff'
  ctxCollar.lineWidth = 2
  ctxCollar.strokeRect(rodX - 14, collarCenterY - 15, 28, 30)

  ctxCollar.fillStyle = '#0f172a'
  ctxCollar.font = 'bold 9px sans-serif'
  ctxCollar.textAlign = 'center'
  ctxCollar.fillText('m', rodX, collarCenterY + 3)

  // Velocity Vector Arrow on Collar
  const vel = curSpeedCollar.value
  if (vel > 0.1) {
    const vArrowLen = Math.min(50, vel * 4.5)
    ctxCollar.strokeStyle = '#38bdf8'
    ctxCollar.fillStyle = '#38bdf8'
    ctxCollar.lineWidth = 3
    ctxCollar.beginPath()
    ctxCollar.moveTo(rodX + 22, collarCenterY)
    ctxCollar.lineTo(rodX + 22, collarCenterY + vArrowLen)
    ctxCollar.stroke()
    ctxCollar.beginPath()
    ctxCollar.moveTo(rodX + 22, collarCenterY + vArrowLen)
    ctxCollar.lineTo(rodX + 18, collarCenterY + vArrowLen - 6)
    ctxCollar.lineTo(rodX + 26, collarCenterY + vArrowLen - 6)
    ctxCollar.closePath()
    ctxCollar.fill()
    ctxCollar.fillText(`v`, rodX + 32, collarCenterY + vArrowLen)
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

  // Layout:
  // Overhead beam at top with Motor drum M and Fixed Pulleys
  const beamY = 50
  ctxDumb.fillStyle = '#334155'
  ctxDumb.fillRect(40, beamY - 8, w - 80, 14)

  // Motor M (Spool Drum) on left
  const motorX = 120
  ctxDumb.fillStyle = '#0284c7'
  ctxDumb.beginPath()
  ctxDumb.arc(motorX, beamY, 22, 0, Math.PI * 2)
  ctxDumb.fill()
  ctxDumb.fillStyle = '#ffffff'
  ctxDumb.font = 'bold 11px sans-serif'
  ctxDumb.textAlign = 'center'
  ctxDumb.fillText('MOTOR', motorX, beamY + 4)

  // Overhead Fixed Pulley 1 (above Counterweight)
  const pulley1X = w * 0.58
  const pulley2X = w * 0.76

  const drawPulley = (x: number, y: number, r: number) => {
    ctxDumb!.fillStyle = '#64748b'
    ctxDumb!.beginPath()
    ctxDumb!.arc(x, y, r, 0, Math.PI * 2)
    ctxDumb!.fill()
    ctxDumb!.strokeStyle = '#94a3b8'
    ctxDumb!.lineWidth = 2
    ctxDumb!.stroke()
  }

  drawPulley(pulley1X, beamY, 18)
  drawPulley(pulley2X, beamY, 18)

  // Dumbwaiter D (suspended from motor cable)
  const dumbX = motorX
  const dumbY = 170
  ctxDumb.fillStyle = '#38bdf8'
  ctxDumb.fillRect(dumbX - 35, dumbY, 70, 80)
  ctxDumb.strokeStyle = '#ffffff'
  ctxDumb.lineWidth = 2
  ctxDumb.strokeRect(dumbX - 35, dumbY, 70, 80)

  ctxDumb.fillStyle = '#0f172a'
  ctxDumb.font = 'bold 11px sans-serif'
  ctxDumb.fillText('DUMBWAITER', dumbX, dumbY + 36)
  ctxDumb.fillText(`W_D = ${weightD.value}N`, dumbX, dumbY + 52)

  // Cable from Motor down to Dumbwaiter
  ctxDumb.strokeStyle = '#f43f5e'
  ctxDumb.lineWidth = 3.5
  ctxDumb.beginPath()
  ctxDumb.moveTo(motorX, beamY + 22)
  ctxDumb.lineTo(motorX, dumbY)
  ctxDumb.stroke()

  ctxDumb.fillStyle = '#f43f5e'
  ctxDumb.font = 'bold 10px monospace'
  ctxDumb.textAlign = 'left'
  ctxDumb.fillText(`F = ${motorForceF.value.toFixed(1)} N`, motorX + 8, dumbY - 20)

  // Upward velocity arrow on Dumbwaiter
  ctxDumb.strokeStyle = '#22c55e'
  ctxDumb.fillStyle = '#22c55e'
  ctxDumb.lineWidth = 2.5
  ctxDumb.beginPath()
  ctxDumb.moveTo(dumbX - 45, dumbY + 50)
  ctxDumb.lineTo(dumbX - 45, dumbY + 15)
  ctxDumb.stroke()
  ctxDumb.beginPath()
  ctxDumb.moveTo(dumbX - 45, dumbY + 15)
  ctxDumb.lineTo(dumbX - 49, dumbY + 22)
  ctxDumb.lineTo(dumbX - 41, dumbY + 22)
  ctxDumb.closePath()
  ctxDumb.fill()
  ctxDumb.fillText(`v_D = ${speedVD.value} m/s ↑`, dumbX - 52, dumbY + 8)

  // Counterweight Moving Pulley (2:1 Ratio)
  const cwPulleyX = (pulley1X + pulley2X) / 2
  const cwPulleyY = 220
  drawPulley(cwPulleyX, cwPulleyY, 16)

  // Cable routing for 2:1 counterweight:
  // From top of Dumbwaiter over pulley 1, down around cwPulley, back up to fixed anchor at pulley 2
  ctxDumb.strokeStyle = '#38bdf8'
  ctxDumb.lineWidth = 3
  ctxDumb.beginPath()
  ctxDumb.moveTo(dumbX + 30, dumbY)
  ctxDumb.lineTo(pulley1X, beamY)
  ctxDumb.lineTo(cwPulleyX - 16, cwPulleyY)
  ctxDumb.arc(cwPulleyX, cwPulleyY, 16, Math.PI, 0, true)
  ctxDumb.lineTo(pulley2X, beamY)
  ctxDumb.stroke()

  // Tension T indicator
  ctxDumb.fillStyle = '#38bdf8'
  ctxDumb.font = 'bold 10px monospace'
  ctxDumb.fillText(`T = ${cableTensionT.value.toFixed(1)} N`, cwPulleyX - 55, cwPulleyY - 30)
  ctxDumb.fillText(`T = ${cableTensionT.value.toFixed(1)} N`, cwPulleyX + 25, cwPulleyY - 30)

  // Counterweight block C (suspended from moving pulley)
  ctxDumb.strokeStyle = '#94a3b8'
  ctxDumb.lineWidth = 2
  ctxDumb.beginPath()
  ctxDumb.moveTo(cwPulleyX, cwPulleyY + 16)
  ctxDumb.lineTo(cwPulleyX, cwPulleyY + 35)
  ctxDumb.stroke()

  const cwBlockY = cwPulleyY + 35
  ctxDumb.fillStyle = '#f59e0b'
  ctxDumb.fillRect(cwPulleyX - 30, cwBlockY, 60, 65)
  ctxDumb.strokeStyle = '#ffffff'
  ctxDumb.strokeRect(cwPulleyX - 30, cwBlockY, 60, 65)

  ctxDumb.fillStyle = '#0f172a'
  ctxDumb.font = 'bold 11px sans-serif'
  ctxDumb.textAlign = 'center'
  ctxDumb.fillText('WEIGHT C', cwPulleyX, cwBlockY + 28)
  ctxDumb.fillText(`${weightC.value} N`, cwPulleyX, cwBlockY + 44)

  // Downward speed arrow for Counterweight
  ctxDumb.strokeStyle = '#f59e0b'
  ctxDumb.fillStyle = '#f59e0b'
  ctxDumb.lineWidth = 2.5
  ctxDumb.beginPath()
  ctxDumb.moveTo(cwPulleyX + 42, cwBlockY + 15)
  ctxDumb.lineTo(cwPulleyX + 42, cwBlockY + 45)
  ctxDumb.stroke()
  ctxDumb.beginPath()
  ctxDumb.moveTo(cwPulleyX + 42, cwBlockY + 45)
  ctxDumb.lineTo(cwPulleyX + 38, cwBlockY + 38)
  ctxDumb.lineTo(cwPulleyX + 46, cwBlockY + 38)
  ctxDumb.closePath()
  ctxDumb.fill()
  ctxDumb.fillText(`v_C = ${(speedVD.value / 2).toFixed(1)} m/s ↓`, cwPulleyX + 48, cwBlockY + 58)

  // Kinematic Constraint note
  ctxDumb.fillStyle = '#94a3b8'
  ctxDumb.font = '10px monospace'
  ctxDumb.textAlign = 'left'
  ctxDumb.fillText('2:1 Pulley: 2 y_C + y_D = const ⇒ v_C = ½ v_D, a_C = ½ a_D', 40, h - 20)
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
  margin-bottom: 1.25rem;
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
  font-family: monospace;
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
  font-family: monospace;
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
  font-family: monospace;
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
