<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-badge-group">
        <span class="sim-badge">MODULE 2</span>
        <span class="sim-badge-secondary">CURVILINEAR & ROLLING MOTION</span>
      </div>
      <h3 class="sim-title">Curvilinear Projectile, Hodograph & Rolling Wheel Lab</h3>
      <p class="sim-desc">
        Explore 2D trajectory dynamics with the velocity Hodograph, and discover the geometry of pure rolling motion, cycloid trajectories, and the Instantaneous Center of Zero Velocity (v<sub>C</sub> = 0).
      </p>
    </div>

    <!-- Tab Selector -->
    <div class="mode-toggles">
      <button 
        class="mode-btn" 
        :class="{ active: activeTab === 'projectile' }"
        @click="switchTab('projectile')"
      >
        <span class="mode-icon">🚀</span> Tab 1: Cliff Projectile & Hodograph Inset
      </button>
      <button 
        class="mode-btn" 
        :class="{ active: activeTab === 'rolling' }"
        @click="switchTab('rolling')"
      >
        <span class="mode-icon">⚙️</span> Tab 2: Pure Rolling Wheel & Cycloid Lab
      </button>
    </div>

    <!-- ================= TAB 1: PROJECTILE & HODOGRAPH ================= -->
    <div v-show="activeTab === 'projectile'">
      <!-- Presets -->
      <div class="sim-presets">
        <span class="preset-label">Lecture Presets:</span>
        <button 
          class="preset-btn" 
          :class="{ active: isCliffPresetActive }"
          @click="applyCliffPreset"
        >
          Lecture 150m Cliff Cannon (180 m/s @ 30°, R = 3100 m)
        </button>
        <button class="preset-btn" @click="applyGroundPreset">
          Flat Ground 45° Max Range (100 m/s)
        </button>
        <button class="preset-btn" @click="applyHighAnglePreset">
          High Arc Mortar (120 m/s @ 70°)
        </button>
      </div>

      <!-- Playback & Scrub Bar -->
      <div class="playback-bar">
        <button class="play-btn" @click="togglePlayProj">
          {{ isPlayingProj ? '⏸ Pause' : '▶ Launch' }}
        </button>
        <button class="action-btn" @click="resetProj">↺ Reset</button>

        <div class="time-slider-wrapper">
          <span class="time-label">t: <strong>{{ timeProj.toFixed(2) }} s</strong> / {{ flightTimeProj.toFixed(2) }} s</span>
          <input 
            type="range" 
            min="0" 
            :max="flightTimeProj" 
            step="0.05" 
            v-model.number="timeProj" 
          />
        </div>
      </div>

      <!-- Sliders Grid -->
      <div class="sim-controls-grid">
        <div class="control-box">
          <div class="control-header">
            <label>Launch Speed (v₀)</label>
            <span class="val-chip">{{ v0 }} m/s</span>
          </div>
          <input type="range" min="20" max="250" step="5" v-model.number="v0" @input="onProjParamChange" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Launch Angle (θ)</label>
            <span class="val-chip">{{ launchAngle }}°</span>
          </div>
          <input type="range" min="0" max="85" step="1" v-model.number="launchAngle" @input="onProjParamChange" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Cliff Height (h₀)</label>
            <span class="val-chip">{{ cliffHeight }} m</span>
          </div>
          <input type="range" min="0" max="250" step="10" v-model.number="cliffHeight" @input="onProjParamChange" />
        </div>
      </div>

      <!-- Canvas Viewport with Hodograph Inset -->
      <div class="sim-viewport-wrapper">
        <canvas ref="canvasProjRef" class="lab-canvas"></canvas>
      </div>

      <!-- Mathematical Dashboard -->
      <div class="sim-dashboard">
        <div class="dash-card result-main">
          <span class="dash-label">Horizontal Range (R)</span>
          <span class="dash-val highlight">{{ totalRangeProj.toFixed(0) }} <small>m</small></span>
          <span class="dash-sub">R = v<sub>x0</sub> · T<sub>flight</sub></span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Max Elevation (H_max)</span>
          <span class="dash-val">{{ maxElevationProj.toFixed(1) }} <small>m</small></span>
          <span class="dash-sub">h<sub>0</sub> + v<sub>y0</sub><sup>2</sup> / (2g)</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Total Flight Time (T)</span>
          <span class="dash-val">{{ flightTimeProj.toFixed(2) }} <small>s</small></span>
          <span class="dash-sub">Peak at t = {{ peakTimeProj.toFixed(2) }} s</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Current Velocity |v(t)|</span>
          <span class="dash-val">{{ curSpeedProj.toFixed(1) }} <small>m/s</small></span>
          <span class="dash-sub">v_x = {{ curVxProj.toFixed(1) }}, v_y = {{ curVyProj.toFixed(1) }}</span>
        </div>
      </div>
    </div>

    <!-- ================= TAB 2: PURE ROLLING & CYCLOID ================= -->
    <div v-show="activeTab === 'rolling'">
      <div class="playback-bar">
        <button class="play-btn" @click="togglePlayRoll">
          {{ isPlayingRoll ? '⏸ Pause' : '▶ Roll Wheel' }}
        </button>
        <button class="action-btn" @click="resetRoll">↺ Reset</button>

        <div class="time-slider-wrapper">
          <span class="time-label">Wheel Angle θ: <strong>{{ (rollTheta * (180 / Math.PI)).toFixed(1) }}°</strong></span>
          <input 
            type="range" 
            min="0" 
            :max="Math.PI * 4" 
            step="0.05" 
            v-model.number="rollTheta" 
          />
        </div>
      </div>

      <!-- Rolling Controls -->
      <div class="sim-controls-grid">
        <div class="control-box">
          <div class="control-header">
            <label>Wheel Radius (R)</label>
            <span class="val-chip">{{ wheelRadius }} m</span>
          </div>
          <input type="range" min="0.4" max="1.5" step="0.1" v-model.number="wheelRadius" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Angular Velocity (ω)</label>
            <span class="val-chip">{{ wheelOmega }} rad/s</span>
          </div>
          <input type="range" min="0.5" max="5.0" step="0.5" v-model.number="wheelOmega" />
        </div>
        <div class="control-box">
          <div class="control-header">
            <label>Tracer Path</label>
            <span class="val-chip highlight">Cycloid (1 Rim Point)</span>
          </div>
          <div class="slider-row" style="margin-top: 0.5rem;">
            <span class="slider-sub">Contact Point C:</span>
            <span class="val-chip" style="background:#ef4444; color:#fff;">v_C = 0 (Instant Center)</span>
          </div>
        </div>
      </div>

      <!-- Rolling Canvas Viewport -->
      <div class="sim-viewport-wrapper">
        <canvas ref="canvasRollRef" class="lab-canvas"></canvas>
      </div>

      <!-- Rolling Dashboard -->
      <div class="sim-dashboard">
        <div class="dash-card result-main">
          <span class="dash-label">Center Velocity (v_O)</span>
          <span class="dash-val highlight">{{ (wheelRadius * wheelOmega).toFixed(2) }} <small>m/s</small></span>
          <span class="dash-sub">v_O = R · ω</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Contact Point Velocity (v_C)</span>
          <span class="dash-val" style="color: #ef4444;">0.00 <small>m/s</small></span>
          <span class="dash-sub">Instantaneous Center of Zero Velocity</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Top Point Velocity (v_top)</span>
          <span class="dash-val" style="color: #22c55e;">{{ (2 * wheelRadius * wheelOmega).toFixed(2) }} <small>m/s</small></span>
          <span class="dash-sub">v<sub>top</sub> = 2 · v<sub>O</sub> = 2Rω</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">One Full Turn Cycloid Arc (s)</span>
          <span class="dash-val">{{ (8 * wheelRadius).toFixed(2) }} <small>m</small></span>
          <span class="dash-sub">s = 8R (Distance on ground = 2πR = {{ (2 * Math.PI * wheelRadius).toFixed(2) }} m)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'

const activeTab = ref<'projectile' | 'rolling'>('projectile')

function switchTab(tab: 'projectile' | 'rolling') {
  activeTab.value = tab
}

// ================= PROJECTILE STATE =================
const v0 = ref(180)
const launchAngle = ref(30)
const cliffHeight = ref(150)
const g = 9.81

const isPlayingProj = ref(false)
const timeProj = ref(0)
const canvasProjRef = ref<HTMLCanvasElement | null>(null)
let ctxProj: CanvasRenderingContext2D | null = null
let logicalW1 = 700
const logicalH1 = 380

const isCliffPresetActive = computed(() => {
  return v0.value === 180 && launchAngle.value === 30 && cliffHeight.value === 150
})

function applyCliffPreset() {
  v0.value = 180
  launchAngle.value = 30
  cliffHeight.value = 150
  resetProj()
}

function applyGroundPreset() {
  v0.value = 100
  launchAngle.value = 45
  cliffHeight.value = 0
  resetProj()
}

function applyHighAnglePreset() {
  v0.value = 120
  launchAngle.value = 70
  cliffHeight.value = 50
  resetProj()
}

function onProjParamChange() {
  if (timeProj.value > flightTimeProj.value) {
    timeProj.value = flightTimeProj.value
  }
}

const radAngle = computed(() => (launchAngle.value * Math.PI) / 180)
const v0x = computed(() => v0.value * Math.cos(radAngle.value))
const v0y = computed(() => v0.value * Math.sin(radAngle.value))

const peakTimeProj = computed(() => v0y.value / g)
const maxElevationProj = computed(() => cliffHeight.value + (v0y.value * v0y.value) / (2 * g))

// Flight time: h0 + v0y*t - 0.5*g*t^2 = 0 => 0.5*g*t^2 - v0y*t - h0 = 0
const flightTimeProj = computed(() => {
  const a = 0.5 * g
  const b = -v0y.value
  const c = -cliffHeight.value
  const disc = b * b - 4 * a * c
  return (-b + Math.sqrt(Math.max(0, disc))) / (2 * a)
})

const totalRangeProj = computed(() => v0x.value * flightTimeProj.value)

const curXProj = computed(() => v0x.value * timeProj.value)
const curYProj = computed(() => Math.max(0, cliffHeight.value + v0y.value * timeProj.value - 0.5 * g * timeProj.value * timeProj.value))
const curVxProj = computed(() => v0x.value)
const curVyProj = computed(() => v0y.value - g * timeProj.value)
const curSpeedProj = computed(() => Math.sqrt(curVxProj.value ** 2 + curVyProj.value ** 2))

function togglePlayProj() {
  if (timeProj.value >= flightTimeProj.value) timeProj.value = 0
  isPlayingProj.value = !isPlayingProj.value
}

function resetProj() {
  isPlayingProj.value = false
  timeProj.value = 0
}

// ================= ROLLING STATE =================
const wheelRadius = ref(1.0) // meters
const wheelOmega = ref(2.0)  // rad/s
const rollTheta = ref(0)
const isPlayingRoll = ref(false)
const canvasRollRef = ref<HTMLCanvasElement | null>(null)
let ctxRoll: CanvasRenderingContext2D | null = null
let logicalW2 = 700
const logicalH2 = 380

function togglePlayRoll() {
  isPlayingRoll.value = !isPlayingRoll.value
}

function resetRoll() {
  isPlayingRoll.value = false
  rollTheta.value = 0
}

// ================= DRAWING: PROJECTILE + HODOGRAPH =================
function drawProjectile() {
  if (!ctxProj || !canvasProjRef.value) return
  const w = logicalW1
  const h = logicalH1

  ctxProj.clearRect(0, 0, w, h)

  // World bounds
  const marginL = 50
  const marginR = 190 // space on right for Hodograph inset
  const marginB = 40
  const marginT = 30

  const plotW = w - marginL - marginR
  const plotH = h - marginB - marginT

  const worldMaxX = Math.max(totalRangeProj.value * 1.05, 500)
  const worldMaxY = Math.max(maxElevationProj.value * 1.15, 200)

  const toScrX = (wx: number) => marginL + (wx / worldMaxX) * plotW
  const toScrY = (wy: number) => marginT + plotH - (wy / worldMaxY) * plotH

  // Background grid
  ctxProj.strokeStyle = 'rgba(148, 163, 184, 0.12)'
  ctxProj.lineWidth = 1
  for (let i = 0; i <= 5; i++) {
    const gx = marginL + (i / 5) * plotW
    ctxProj.beginPath()
    ctxProj.moveTo(gx, marginT)
    ctxProj.lineTo(gx, marginT + plotH)
    ctxProj.stroke()

    const gy = marginT + (i / 5) * plotH
    ctxProj.beginPath()
    ctxProj.moveTo(marginL, gy)
    ctxProj.lineTo(marginL + plotW, gy)
    ctxProj.stroke()
  }

  // Ground line
  const groundY = toScrY(0)
  ctxProj.strokeStyle = '#475569'
  ctxProj.lineWidth = 2
  ctxProj.beginPath()
  ctxProj.moveTo(marginL - 10, groundY)
  ctxProj.lineTo(marginL + plotW + 10, groundY)
  ctxProj.stroke()

  // Cliff block
  const cliffTopY = toScrY(cliffHeight.value)
  const cliffWidth = Math.max(25, plotW * 0.06)
  if (cliffHeight.value > 0) {
    ctxProj.fillStyle = '#334155'
    ctxProj.fillRect(marginL, cliffTopY, cliffWidth, groundY - cliffTopY)
    ctxProj.strokeStyle = '#64748b'
    ctxProj.strokeRect(marginL, cliffTopY, cliffWidth, groundY - cliffTopY)
    
    // Cliff label
    ctxProj.fillStyle = '#94a3b8'
    ctxProj.font = '10px monospace'
    ctxProj.textAlign = 'right'
    ctxProj.fillText(`h₀ = ${cliffHeight.value}m`, marginL + cliffWidth - 4, cliffTopY + 14)
  }

  // Parabolic Trajectory
  ctxProj.strokeStyle = 'rgba(56, 189, 248, 0.4)'
  ctxProj.lineWidth = 2
  ctxProj.setLineDash([4, 3])
  ctxProj.beginPath()
  const steps = 120
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * flightTimeProj.value
    const px = v0x.value * t
    const py = Math.max(0, cliffHeight.value + v0y.value * t - 0.5 * g * t * t)
    const sx = toScrX(px)
    const sy = toScrY(py)
    if (i === 0) ctxProj.moveTo(sx, sy)
    else ctxProj.lineTo(sx, sy)
  }
  ctxProj.stroke()
  ctxProj.setLineDash([])

  // Traveled trail (solid vibrant blue)
  ctxProj.strokeStyle = '#38bdf8'
  ctxProj.lineWidth = 3
  ctxProj.beginPath()
  const trailSteps = 60
  for (let i = 0; i <= trailSteps; i++) {
    const t = (i / trailSteps) * timeProj.value
    const px = v0x.value * t
    const py = Math.max(0, cliffHeight.value + v0y.value * t - 0.5 * g * t * t)
    const sx = toScrX(px)
    const sy = toScrY(py)
    if (i === 0) ctxProj.moveTo(sx, sy)
    else ctxProj.lineTo(sx, sy)
  }
  ctxProj.stroke()

  // Current Projectile Body
  const curSx = toScrX(curXProj.value)
  const curSy = toScrY(curYProj.value)

  ctxProj.fillStyle = '#f43f5e'
  ctxProj.beginPath()
  ctxProj.arc(curSx, curSy, 7, 0, Math.PI * 2)
  ctxProj.fill()
  ctxProj.strokeStyle = '#ffffff'
  ctxProj.lineWidth = 2
  ctxProj.stroke()

  // Velocity Vector Arrow from Projectile
  const vecScale = 0.35
  const vxLen = curVxProj.value * vecScale
  const vyLen = -curVyProj.value * vecScale // Screen inverted Y
  const totalVLen = Math.sqrt(vxLen * vxLen + vyLen * vyLen)

  if (totalVLen > 2) {
    // Total Velocity Vector (Gold)
    ctxProj.strokeStyle = '#fbbf24'
    ctxProj.fillStyle = '#fbbf24'
    ctxProj.lineWidth = 2.5
    ctxProj.beginPath()
    ctxProj.moveTo(curSx, curSy)
    ctxProj.lineTo(curSx + vxLen, curSy + vyLen)
    ctxProj.stroke()

    // Velocity Arrowhead
    const angle = Math.atan2(vyLen, vxLen)
    ctxProj.beginPath()
    ctxProj.moveTo(curSx + vxLen, curSy + vyLen)
    ctxProj.lineTo(curSx + vxLen - 8 * Math.cos(angle - 0.4), curSy + vyLen - 8 * Math.sin(angle - 0.4))
    ctxProj.lineTo(curSx + vxLen - 8 * Math.cos(angle + 0.4), curSy + vyLen - 8 * Math.sin(angle + 0.4))
    ctxProj.closePath()
    ctxProj.fill()

    // Downward Acceleration Vector (Red)
    ctxProj.strokeStyle = '#f43f5e'
    ctxProj.fillStyle = '#f43f5e'
    ctxProj.lineWidth = 2
    ctxProj.beginPath()
    ctxProj.moveTo(curSx, curSy)
    ctxProj.lineTo(curSx, curSy + 32)
    ctxProj.stroke()
    ctxProj.beginPath()
    ctxProj.moveTo(curSx, curSy + 32)
    ctxProj.lineTo(curSx - 4, curSy + 24)
    ctxProj.lineTo(curSx + 4, curSy + 24)
    ctxProj.closePath()
    ctxProj.fill()
    ctxProj.fillText('a = -gj', curSx + 6, curSy + 30)
  }

  // ================= HODOGRAPH INSET =================
  // Visualizes Velocity Space: v_x horizontal, v_y vertical.
  const hodoLeft = w - 170
  const hodoTop = 20
  const hodoW = 150
  const hodoH = 160

  ctxProj.fillStyle = 'rgba(15, 23, 42, 0.92)'
  ctxProj.fillRect(hodoLeft, hodoTop, hodoW, hodoH)
  ctxProj.strokeStyle = 'rgba(56, 189, 248, 0.4)'
  ctxProj.strokeRect(hodoLeft, hodoTop, hodoW, hodoH)

  // Hodograph Header
  ctxProj.fillStyle = '#38bdf8'
  ctxProj.font = 'bold 10px sans-serif'
  ctxProj.textAlign = 'left'
  ctxProj.fillText('VELOCITY HODOGRAPH', hodoLeft + 8, hodoTop + 14)

  // Hodograph Origin: center left
  const hodoOx = hodoLeft + 35
  const hodoOy = hodoTop + hodoH * 0.45

  // Axes in Hodograph
  ctxProj.strokeStyle = 'rgba(148, 163, 184, 0.3)'
  ctxProj.lineWidth = 1
  ctxProj.beginPath()
  ctxProj.moveTo(hodoLeft + 8, hodoOy)
  ctxProj.lineTo(hodoLeft + hodoW - 8, hodoOy)
  ctxProj.moveTo(hodoOx, hodoTop + 20)
  ctxProj.lineTo(hodoOx, hodoTop + hodoH - 10)
  ctxProj.stroke()

  ctxProj.fillStyle = 'rgba(148, 163, 184, 0.7)'
  ctxProj.font = '9px monospace'
  ctxProj.fillText('vx', hodoLeft + hodoW - 16, hodoOy - 4)
  ctxProj.fillText('vy', hodoOx + 4, hodoTop + 28)

  // Hodograph scaling
  const maxV = Math.max(v0.value, curSpeedProj.value, 150)
  const hScale = 50 / maxV

  // The Hodograph curve is a vertical straight line at v_x = v0x!
  const hodoLineX = hodoOx + v0x.value * hScale
  const hodoLineY1 = hodoOy - v0y.value * hScale
  const hodoLineY2 = hodoOy - (v0y.value - g * flightTimeProj.value) * hScale

  ctxProj.strokeStyle = 'rgba(244, 63, 94, 0.5)'
  ctxProj.lineWidth = 2
  ctxProj.setLineDash([3, 2])
  ctxProj.beginPath()
  ctxProj.moveTo(hodoLineX, hodoLineY1)
  ctxProj.lineTo(hodoLineX, hodoLineY2)
  ctxProj.stroke()
  ctxProj.setLineDash([])

  // Current Velocity Vector in Hodograph
  const hodoTipX = hodoOx + curVxProj.value * hScale
  const hodoTipY = hodoOy - curVyProj.value * hScale

  ctxProj.strokeStyle = '#fbbf24'
  ctxProj.fillStyle = '#fbbf24'
  ctxProj.lineWidth = 2
  ctxProj.beginPath()
  ctxProj.moveTo(hodoOx, hodoOy)
  ctxProj.lineTo(hodoTipX, hodoTipY)
  ctxProj.stroke()

  // Hodograph Vector Tip
  ctxProj.fillStyle = '#f43f5e'
  ctxProj.beginPath()
  ctxProj.arc(hodoTipX, hodoTipY, 4, 0, Math.PI * 2)
  ctxProj.fill()

  // Tangent to hodograph is downward acceleration vector a = dv/dt = -g j
  ctxProj.strokeStyle = '#22c55e'
  ctxProj.fillStyle = '#22c55e'
  ctxProj.lineWidth = 2
  ctxProj.beginPath()
  ctxProj.moveTo(hodoTipX, hodoTipY)
  ctxProj.lineTo(hodoTipX, hodoTipY + 22)
  ctxProj.stroke()
  ctxProj.beginPath()
  ctxProj.moveTo(hodoTipX, hodoTipY + 22)
  ctxProj.lineTo(hodoTipX - 3, hodoTipY + 16)
  ctxProj.lineTo(hodoTipX + 3, hodoTipY + 16)
  ctxProj.closePath()
  ctxProj.fill()

  ctxProj.fillStyle = '#94a3b8'
  ctxProj.font = '8px monospace'
  ctxProj.fillText('a = dv/dt', hodoTipX + 5, hodoTipY + 20)
}

// ================= DRAWING: ROLLING WHEEL & CYCLOID =================
function drawRolling() {
  if (!ctxRoll || !canvasRollRef.value) return
  const w = logicalW2
  const h = logicalH2

  ctxRoll.clearRect(0, 0, w, h)

  // Ground line
  const groundY = h - 60
  ctxRoll.strokeStyle = 'rgba(148, 163, 184, 0.4)'
  ctxRoll.lineWidth = 2
  ctxRoll.beginPath()
  ctxRoll.moveTo(20, groundY)
  ctxRoll.lineTo(w - 20, groundY)
  ctxRoll.stroke()

  // Ground hash pattern
  ctxRoll.strokeStyle = 'rgba(148, 163, 184, 0.2)'
  ctxRoll.lineWidth = 1
  for (let gx = 20; gx < w - 20; gx += 15) {
    ctxRoll.beginPath()
    ctxRoll.moveTo(gx, groundY)
    ctxRoll.lineTo(gx - 8, groundY + 10)
    ctxRoll.stroke()
  }

  // Wheel Scale: R in pixels
  const rPx = wheelRadius.value * 55
  const startX = 70

  // Total turns available in view width:
  // distance traveled = R * rollTheta
  const travelDistPx = rPx * rollTheta.value
  const centerO = {
    x: startX + travelDistPx,
    y: groundY - rPx
  }

  // 1. Draw Full Cycloid Path from 0 to current rollTheta
  ctxRoll.strokeStyle = '#ec4899'
  ctxRoll.lineWidth = 2.5
  ctxRoll.beginPath()
  const cycloidSteps = Math.max(10, Math.floor(rollTheta.value * 30))
  for (let i = 0; i <= cycloidSteps; i++) {
    const th = (i / cycloidSteps) * rollTheta.value
    const px = startX + rPx * (th - Math.sin(th))
    const py = groundY - rPx * (1 - Math.cos(th))
    if (i === 0) ctxRoll.moveTo(px, py)
    else ctxRoll.lineTo(px, py)
  }
  ctxRoll.stroke()

  // Ghost future cycloid path (up to 4pi)
  ctxRoll.strokeStyle = 'rgba(236, 72, 153, 0.25)'
  ctxRoll.lineWidth = 1.5
  ctxRoll.setLineDash([4, 4])
  ctxRoll.beginPath()
  const ghostSteps = 120
  for (let i = 0; i <= ghostSteps; i++) {
    const th = (i / ghostSteps) * (Math.PI * 4)
    const px = startX + rPx * (th - Math.sin(th))
    const py = groundY - rPx * (1 - Math.cos(th))
    if (i === 0) ctxRoll.moveTo(px, py)
    else ctxRoll.lineTo(px, py)
  }
  ctxRoll.stroke()
  ctxRoll.setLineDash([])

  // 2. Draw Wheel Body
  ctxRoll.save()
  ctxRoll.translate(centerO.x, centerO.y)

  // Wheel Outer Rim
  ctxRoll.fillStyle = 'rgba(30, 41, 59, 0.85)'
  ctxRoll.beginPath()
  ctxRoll.arc(0, 0, rPx, 0, Math.PI * 2)
  ctxRoll.fill()
  ctxRoll.strokeStyle = '#38bdf8'
  ctxRoll.lineWidth = 3
  ctxRoll.stroke()

  // Rotating Spokes (rotated by rollTheta)
  ctxRoll.strokeStyle = 'rgba(148, 163, 184, 0.5)'
  ctxRoll.lineWidth = 1.5
  const numSpokes = 8
  for (let s = 0; s < numSpokes; s++) {
    const spAngle = rollTheta.value + (s * 2 * Math.PI) / numSpokes
    ctxRoll.beginPath()
    ctxRoll.moveTo(0, 0)
    ctxRoll.lineTo(rPx * Math.sin(spAngle), -rPx * Math.cos(spAngle))
    ctxRoll.stroke()
  }

  // Wheel Center Hub
  ctxRoll.fillStyle = '#0284c7'
  ctxRoll.beginPath()
  ctxRoll.arc(0, 0, 6, 0, Math.PI * 2)
  ctxRoll.fill()
  ctxRoll.restore()

  // 3. Key Points & Velocity Vectors on Wheel
  // Contact point C (on ground)
  const contactC = { x: centerO.x, y: groundY }
  // Top point
  const topPoint = { x: centerO.x, y: groundY - 2 * rPx }
  // Rim point P (tracing cycloid)
  const pointP = {
    x: startX + rPx * (rollTheta.value - Math.sin(rollTheta.value)),
    y: groundY - rPx * (1 - Math.cos(rollTheta.value))
  }

  // Draw line from Instantaneous Center C to Point P
  ctxRoll.strokeStyle = 'rgba(239, 68, 68, 0.45)'
  ctxRoll.lineWidth = 1.5
  ctxRoll.setLineDash([3, 2])
  ctxRoll.beginPath()
  ctxRoll.moveTo(contactC.x, contactC.y)
  ctxRoll.lineTo(pointP.x, pointP.y)
  ctxRoll.stroke()
  ctxRoll.setLineDash([])

  // Instant Center C badge
  ctxRoll.fillStyle = '#ef4444'
  ctxRoll.beginPath()
  ctxRoll.arc(contactC.x, contactC.y, 6, 0, Math.PI * 2)
  ctxRoll.fill()
  ctxRoll.fillStyle = '#ffffff'
  ctxRoll.font = 'bold 10px monospace'
  ctxRoll.fillText('C (v=0)', contactC.x - 20, contactC.y + 16)

  // Velocity at Center O (v_O = R*omega)
  const vScale = 18
  const vCenterLen = wheelRadius.value * wheelOmega.value * vScale
  ctxRoll.strokeStyle = '#38bdf8'
  ctxRoll.fillStyle = '#38bdf8'
  ctxRoll.lineWidth = 2.5
  ctxRoll.beginPath()
  ctxRoll.moveTo(centerO.x, centerO.y)
  ctxRoll.lineTo(centerO.x + vCenterLen, centerO.y)
  ctxRoll.stroke()
  // Arrowhead
  ctxRoll.beginPath()
  ctxRoll.moveTo(centerO.x + vCenterLen, centerO.y)
  ctxRoll.lineTo(centerO.x + vCenterLen - 6, centerO.y - 4)
  ctxRoll.lineTo(centerO.x + vCenterLen - 6, centerO.y + 4)
  ctxRoll.closePath()
  ctxRoll.fill()
  ctxRoll.fillText('v_O = Rω', centerO.x + vCenterLen + 4, centerO.y - 4)

  // Velocity at Top (v_top = 2*R*omega)
  const vTopLen = 2 * vCenterLen
  ctxRoll.strokeStyle = '#22c55e'
  ctxRoll.fillStyle = '#22c55e'
  ctxRoll.lineWidth = 3
  ctxRoll.beginPath()
  ctxRoll.moveTo(topPoint.x, topPoint.y)
  ctxRoll.lineTo(topPoint.x + vTopLen, topPoint.y)
  ctxRoll.stroke()
  ctxRoll.beginPath()
  ctxRoll.moveTo(topPoint.x + vTopLen, topPoint.y)
  ctxRoll.lineTo(topPoint.x + vTopLen - 8, topPoint.y - 5)
  ctxRoll.lineTo(topPoint.x + vTopLen - 8, topPoint.y + 5)
  ctxRoll.closePath()
  ctxRoll.fill()
  ctxRoll.fillText('v_top = 2Rω', topPoint.x + vTopLen + 6, topPoint.y - 4)

  // Point P on Rim
  ctxRoll.fillStyle = '#ec4899'
  ctxRoll.beginPath()
  ctxRoll.arc(pointP.x, pointP.y, 7, 0, Math.PI * 2)
  ctxRoll.fill()
  ctxRoll.strokeStyle = '#ffffff'
  ctxRoll.lineWidth = 2
  ctxRoll.stroke()

  // Tangent Velocity Vector at Point P
  // In pure rolling, velocity of P is perpendicular to CP with magnitude omega * CP
  const dxCP = pointP.x - contactC.x
  const dyCP = pointP.y - contactC.y
  const lenCP = Math.sqrt(dxCP * dxCP + dyCP * dyCP)
  if (lenCP > 1) {
    const vMagP = (lenCP / rPx) * wheelRadius.value * wheelOmega.value * vScale
    // Perpendicular vector to (dxCP, dyCP): (-dyCP, dxCP) normalized
    const perpX = -dyCP / lenCP
    const perpY = dxCP / lenCP

    ctxRoll.strokeStyle = '#ec4899'
    ctxRoll.fillStyle = '#ec4899'
    ctxRoll.lineWidth = 2.5
    ctxRoll.beginPath()
    ctxRoll.moveTo(pointP.x, pointP.y)
    ctxRoll.lineTo(pointP.x + perpX * vMagP, pointP.y + perpY * vMagP)
    ctxRoll.stroke()

    // Arrowhead
    const endX = pointP.x + perpX * vMagP
    const endY = pointP.y + perpY * vMagP
    const ang = Math.atan2(perpY, perpX)
    ctxRoll.beginPath()
    ctxRoll.moveTo(endX, endY)
    ctxRoll.lineTo(endX - 7 * Math.cos(ang - 0.4), endY - 7 * Math.sin(ang - 0.4))
    ctxRoll.lineTo(endX - 7 * Math.cos(ang + 0.4), endY - 7 * Math.sin(ang + 0.4))
    ctxRoll.closePath()
    ctxRoll.fill()
    ctxRoll.fillText('v_P ⊥ CP', endX + 6, endY)
  }
}

// ================= ANIMATION TICK (SSR SAFE) =================
let animId: number | null = null
let lastTime = 0
let resObs1: ResizeObserver | null = null
let resObs2: ResizeObserver | null = null

function tick(now: number) {
  if (!lastTime) lastTime = now
  const dt = (now - lastTime) / 1000
  lastTime = now

  if (activeTab.value === 'projectile') {
    if (isPlayingProj.value) {
      timeProj.value += dt * 1.0
      if (timeProj.value >= flightTimeProj.value) {
        timeProj.value = flightTimeProj.value
        isPlayingProj.value = false
      }
    }
    drawProjectile()
  } else {
    if (isPlayingRoll.value) {
      rollTheta.value += wheelOmega.value * dt * 0.8
      if (rollTheta.value >= Math.PI * 4) {
        rollTheta.value = 0
      }
    }
    drawRolling()
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
  if (canvasProjRef.value) {
    ctxProj = canvasProjRef.value.getContext('2d')
    updateSize1 = () => {
      if (!canvasProjRef.value) return
      const rect = canvasProjRef.value.getBoundingClientRect()
      if (rect.width > 0) logicalW1 = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasProjRef.value.width = Math.round(logicalW1 * dpr)
      canvasProjRef.value.height = Math.round(logicalH1 * dpr)
      ctxProj?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawProjectile()
    }
    updateSize1()
    if (typeof ResizeObserver !== 'undefined') {
      resObs1 = new ResizeObserver(updateSize1)
      resObs1.observe(canvasProjRef.value)
    }
  }

  if (canvasRollRef.value) {
    ctxRoll = canvasRollRef.value.getContext('2d')
    updateSize2 = () => {
      if (!canvasRollRef.value) return
      const rect = canvasRollRef.value.getBoundingClientRect()
      if (rect.width > 0) logicalW2 = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasRollRef.value.width = Math.round(logicalW2 * dpr)
      canvasRollRef.value.height = Math.round(logicalH2 * dpr)
      ctxRoll?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawRolling()
    }
    updateSize2()
    if (typeof ResizeObserver !== 'undefined') {
      resObs2 = new ResizeObserver(updateSize2)
      resObs2.observe(canvasRollRef.value)
    }
  }

  animId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (animId) cancelAnimationFrame(animId)
  if (resObs1) resObs1.disconnect()
  if (resObs2) resObs2.disconnect()
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

.slider-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider-sub {
  font-size: 0.78rem;
  color: var(--vp-c-text-2, #64748b);
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
  border-color: #38bdf8;
  background: rgba(56, 189, 248, 0.05);
}

.dash-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-2, #64748b);
  margin-bottom: 0.2rem;
}

.dash-val {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: monospace;
  color: var(--vp-c-text-1, #0f172a);
}

.dash-val.highlight {
  color: var(--vp-c-brand-1, #0284c7);
}

.dash-sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-2, #94a3b8);
  margin-top: 0.25rem;
}
</style>
