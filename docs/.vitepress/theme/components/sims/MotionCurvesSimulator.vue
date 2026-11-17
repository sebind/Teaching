<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-header-top">
        <div class="sim-badge-group">
          <span class="sim-badge">MODULE 2</span>
          <span class="sim-badge-secondary">KINEMATICS OF PARTICLES</span>
        </div>
        <button class="ref-toggle-btn" @click="showSlideRef = !showSlideRef">
          📐 {{ showSlideRef ? 'Hide' : 'Show' }} PDF Slide Figure
        </button>
      </div>
      <h3 class="sim-title">Synchronized Motion Curves & Subway Track Simulator</h3>
      <p class="sim-desc">
        Modeled directly on Dr. Sebin Devasia's Module 2 motion-curve examples: Station A-to-B Subway Car (Part 2, Slide 6), Polynomial <em>x = 6t² − t³</em> (Part 2, Slide 8), and Cubic Reversal (Part 1, Slide 16).
      </p>
    </div>

    <!-- Original PDF Slide Figure Reference -->
    <div v-if="showSlideRef" class="slide-ref-panel">
      <div class="slide-ref-img-wrap">
        <img :src="withBase(activeMotionSlide.src)" :alt="activeMotionSlide.tag" />
      </div>
      <div class="slide-ref-info">
        <span class="slide-ref-tag">{{ activeMotionSlide.tag }}</span>
        <p>{{ activeMotionSlide.desc }}</p>
      </div>
    </div>

    <!-- Presets Bar -->
    <div class="sim-presets">
      <span class="preset-label">Lecture Presets:</span>
      <button 
        v-for="p in presets" 
        :key="p.id" 
        class="preset-btn"
        :class="{ active: currentPresetId === p.id }"
        @click="selectPreset(p.id)"
      >
        {{ p.name }}
      </button>
    </div>

    <!-- Playback Control Bar -->
    <div class="playback-bar">
      <button class="play-btn" @click="togglePlay">
        {{ isPlaying ? '⏸ Pause' : '▶ Play' }}
      </button>
      <button class="action-btn" @click="resetTime">↺ Reset</button>
      
      <div class="time-slider-wrapper">
        <span class="time-label">t: <strong>{{ currentTime.toFixed(2) }} s</strong> / {{ maxTime.toFixed(1) }} s</span>
        <input 
          type="range" 
          min="0" 
          :max="maxTime" 
          step="0.02" 
          v-model.number="currentTime" 
          @input="onSliderScrub"
        />
      </div>

      <div class="speed-toggle">
        <button 
          v-for="s in [0.5, 1, 2]" 
          :key="s" 
          class="speed-btn"
          :class="{ active: speedMultiplier === s }"
          @click="speedMultiplier = s"
        >
          {{ s }}×
        </button>
      </div>
    </div>

    <!-- Custom Mode Sliders (visible only for custom preset) -->
    <div v-if="currentPresetId === 'custom'" class="sim-controls-grid">
      <div class="control-box">
        <div class="control-header">
          <label>Initial Position (x₀)</label>
          <span class="val-chip">{{ customX0 }} m</span>
        </div>
        <input type="range" min="-50" max="50" step="1" v-model.number="customX0" />
      </div>
      <div class="control-box">
        <div class="control-header">
          <label>Initial Velocity (v₀)</label>
          <span class="val-chip">{{ customV0 }} m/s</span>
        </div>
        <input type="range" min="-20" max="20" step="1" v-model.number="customV0" />
      </div>
      <div class="control-box">
        <div class="control-header">
          <label>Constant Acceleration (a_c)</label>
          <span class="val-chip">{{ customA }} m/s²</span>
        </div>
        <input type="range" min="-10" max="10" step="0.5" v-model.number="customA" />
      </div>
    </div>

    <!-- Canvas Viewport -->
    <div class="sim-viewport-wrapper">
      <canvas 
        ref="canvasRef" 
        class="motion-canvas"
        @pointerdown="onCanvasPointerDown"
        @pointermove="onCanvasPointerMove"
        @pointerup="onCanvasPointerUp"
      ></canvas>
    </div>

    <!-- Mathematical Readout Dashboard -->
    <div class="sim-dashboard">
      <div class="dash-card result-x">
        <span class="dash-label">Position x(t)</span>
        <span class="dash-val">{{ curX.toFixed(2) }} <small>{{ unitDist }}</small></span>
        <span class="dash-sub">Slope of tangent = v(t)</span>
      </div>
      <div class="dash-card result-v">
        <span class="dash-label">Velocity v(t)</span>
        <span class="dash-val">{{ curV.toFixed(2) }} <small>{{ unitDist }}/s</small></span>
        <span class="dash-sub">Area under a(t) = Δv</span>
      </div>
      <div class="dash-card result-a">
        <span class="dash-label">Acceleration a(t)</span>
        <span class="dash-val">{{ curA.toFixed(2) }} <small>{{ unitDist }}/s²</small></span>
        <span class="dash-sub">Slope of v(t) = a(t)</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Net Displacement (Δx)</span>
        <span class="dash-val">{{ (curX - xAtZero).toFixed(2) }} <small>{{ unitDist }}</small></span>
        <span class="dash-sub">x(t) - x(0)</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Total Distance Traveled</span>
        <span class="dash-val highlight">{{ curDistance.toFixed(2) }} <small>{{ unitDist }}</small></span>
        <span class="dash-sub">Cumulative ∫ |v| dt</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'

type PresetId = 'subway' | 'poly' | 'cubic' | 'custom'

const showSlideRef = ref(true)
const currentPresetId = ref<PresetId>('subway')
const isPlaying = ref(false)
const currentTime = ref(0)
const speedMultiplier = ref(1)

// Custom parameters
const customX0 = ref(0)
const customV0 = ref(10)
const customA = ref(-2)

const presets = [
  { id: 'subway' as PresetId, name: 'Slide 6: Subway Car A→B (40s, 1512 ft)' },
  { id: 'poly' as PresetId, name: 'Slide 8: Polynomial (x = 6t² − t³)' },
  { id: 'cubic' as PresetId, name: 'Slide 16: Cubic Reversal (t³ − 6t² − 15t + 40)' },
  { id: 'custom' as PresetId, name: 'Custom Constant Acceleration' }
]

const activeMotionSlide = computed(() => {
  if (currentPresetId.value === 'subway') {
    return {
      src: '/images/physics/mod2/mod2_subway_diagram.png',
      tag: 'Original PDF · Mod 2 Part 2, Slide 6',
      desc: 'Subway car leaves Station A (+4 ft/s² for 6s, then +6 ft/s² to 48 ft/s), cruises until t = 34s, and brakes (−8 ft/s²) to stop at Station B at d = 1512 ft.'
    }
  } else if (currentPresetId.value === 'poly') {
    return {
      src: '/images/physics/mod2/mod2_poly_motion_curves.png',
      tag: 'Original PDF · Mod 2 Part 2, Slide 8',
      desc: 'Particle position x = 6t² − t³ (m): velocity v = 12t − 3t² peaks at t = 2s (v = 12 m/s) and reverses at t = 4s (x_max = 32 m).'
    }
  } else if (currentPresetId.value === 'cubic') {
    return {
      src: '/images/physics/mod2/mod2_cubic_track.png',
      tag: 'Original PDF · Mod 2 Part 1, Slide 16',
      desc: 'Cubic motion x = t³ − 6t² − 15t + 40 (ft): particle reverses direction at t = 5s (x = −60 ft) where v(5) = 0 and a(5) = +18 ft/s².'
    }
  }
  return {
    src: '/images/physics/mod2/mod2_graphical_areas.png',
    tag: 'Original PDF · Mod 2 Part 2, Slide 10',
    desc: 'Graphical calculus laws: area under a–t equals Δv, and area under v–t equals net displacement Δx.'
  }
})

function selectPreset(id: PresetId) {
  currentPresetId.value = id
  currentTime.value = 0
  isPlaying.value = false
}

const unitDist = computed(() => {
  return currentPresetId.value === 'subway' || currentPresetId.value === 'cubic' ? 'ft' : 'm'
})

const maxTime = computed(() => {
  if (currentPresetId.value === 'subway') return 40
  if (currentPresetId.value === 'poly') return 6
  if (currentPresetId.value === 'cubic') return 6
  return 10
})

// Motion Functions
function getMotionState(t: number) {
  if (currentPresetId.value === 'subway') {
    // 4 Phases
    if (t <= 6) {
      const a = 4
      const v = 4 * t
      const x = 2 * t * t
      return { x, v, a }
    } else if (t <= 10) {
      const dt = t - 6
      const a = 6
      const v = 24 + 6 * dt
      const x = 72 + 24 * dt + 3 * dt * dt
      return { x, v, a }
    } else if (t <= 34) {
      const dt = t - 10
      const a = 0
      const v = 48
      const x = 216 + 48 * dt
      return { x, v, a }
    } else {
      const dt = t - 34
      const a = -8
      const v = Math.max(0, 48 - 8 * dt)
      const x = 1368 + 48 * dt - 4 * dt * dt
      return { x, v, a }
    }
  } else if (currentPresetId.value === 'poly') {
    const x = 6 * t * t - t * t * t
    const v = 12 * t - 3 * t * t
    const a = 12 - 6 * t
    return { x, v, a }
  } else if (currentPresetId.value === 'cubic') {
    // x = t^3 - 6t^2 - 15t + 40
    const x = t * t * t - 6 * t * t - 15 * t + 40
    const v = 3 * t * t - 12 * t - 15
    const a = 6 * t - 12
    return { x, v, a }
  } else {
    // Custom constant acceleration
    const a = customA.value
    const v = customV0.value + a * t
    const x = customX0.value + customV0.value * t + 0.5 * a * t * t
    return { x, v, a }
  }
}

const curState = computed(() => getMotionState(currentTime.value))
const curX = computed(() => curState.value.x)
const curV = computed(() => curState.value.v)
const curA = computed(() => curState.value.a)

const xAtZero = computed(() => getMotionState(0).x)

// Total distance traveled via numeric integration
const curDistance = computed(() => {
  const steps = 100
  const dt = currentTime.value / steps
  let dist = 0
  for (let i = 0; i < steps; i++) {
    const tMid = (i + 0.5) * dt
    dist += Math.abs(getMotionState(tMid).v) * dt
  }
  return dist
})

// Playback handlers
function togglePlay() {
  isPlaying.value = !isPlaying.value
}

function resetTime() {
  currentTime.value = 0
  isPlaying.value = false
}

function onSliderScrub() {
  // Handled reactively
}

// Canvas & Animation Loop (SSR Safe)
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animFrameId: number | null = null
let lastTimestamp = 0
let isScrubbingCanvas = false
let logicalW = 700
const logicalH = 420

function onCanvasPointerDown(e: PointerEvent) {
  isScrubbingCanvas = true
  handleCanvasScrub(e)
}

function onCanvasPointerMove(e: PointerEvent) {
  if (isScrubbingCanvas) {
    handleCanvasScrub(e)
  }
}

function onCanvasPointerUp() {
  isScrubbingCanvas = false
}

function handleCanvasScrub(e: PointerEvent) {
  if (!canvasRef.value) return
  const rect = canvasRef.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const totalW = rect.width
  
  // Plot horizontal range: margin left 60px to right 20px
  const plotLeft = 60
  const plotRight = totalW - 20
  const plotWidth = plotRight - plotLeft

  if (plotWidth > 0) {
    const fraction = Math.max(0, Math.min(1, (mouseX - plotLeft) / plotWidth))
    currentTime.value = fraction * maxTime.value
  }
}

// Drawing routines
function draw() {
  if (!ctx || !canvasRef.value) return
  const w = logicalW
  const h = logicalH

  ctx.clearRect(0, 0, w, h)

  // 1. TOP STRIP: Horizontal Calibrated Track & Moving Vehicle
  const trackY = 48
  const trackH = 44
  const trackLeft = 50
  const trackRight = w - 30
  const trackWidth = trackRight - trackLeft

  // Min and max X over full time range
  let minX = Infinity
  let maxX = -Infinity
  const sampleSteps = 200
  for (let i = 0; i <= sampleSteps; i++) {
    const tSample = (i / sampleSteps) * maxTime.value
    const xVal = getMotionState(tSample).x
    if (xVal < minX) minX = xVal
    if (xVal > maxX) maxX = xVal
  }
  // Add margin
  const spanX = maxX - minX || 1
  const xMargin = spanX * 0.08
  const trackMinX = minX - xMargin
  const trackMaxX = maxX + xMargin
  const trackRange = trackMaxX - trackMinX

  // Track background (Tunnel roof + rails + Station A & B markers when Subway preset is active)
  ctx.fillStyle = '#1e293b'
  ctx.fillRect(trackLeft, trackY, trackWidth, trackH)
  if (currentPresetId.value === 'subway') {
    ctx.fillStyle = '#92400e'
    ctx.fillRect(trackLeft, trackY, trackWidth, 5)
    ctx.fillRect(trackLeft, trackY + trackH - 4, trackWidth, 4)
    const stAX = trackLeft + ((0 - trackMinX) / trackRange) * trackWidth
    const stBX = trackLeft + ((1512 - trackMinX) / trackRange) * trackWidth
    ctx.fillStyle = '#fbbf24'
    ctx.font = 'bold 11px serif'
    ctx.fillText('Station A', stAX + 18, trackY - 5)
    ctx.fillText('Station B', stBX - 18, trackY - 5)
  }

  // Calibrated tick marks along track
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)'
  ctx.fillStyle = 'rgba(148, 163, 184, 0.7)'
  ctx.font = '10px monospace'
  ctx.textAlign = 'center'

  const numTicks = 6
  for (let i = 0; i <= numTicks; i++) {
    const frac = i / numTicks
    const tickX = trackLeft + frac * trackWidth
    const worldX = trackMinX + frac * trackRange
    ctx.beginPath()
    ctx.moveTo(tickX, trackY + trackH - 6)
    ctx.lineTo(tickX, trackY + trackH)
    ctx.stroke()
    ctx.fillText(`${worldX.toFixed(0)}`, tickX, trackY + trackH + 12)
  }

  // Vehicle position on track
  const vehicleWorldX = curX.value
  const vehicleScreenX = trackLeft + ((vehicleWorldX - trackMinX) / trackRange) * trackWidth

  // Vehicle Body (Subway Car or Particle)
  ctx.save()
  ctx.translate(vehicleScreenX, trackY + 16)
  
  // Shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
  ctx.fillRect(-18, 12, 36, 4)

  // Car Body (Amber multi-window Subway Car matching Slide 6 when subway preset is active)
  ctx.fillStyle = currentPresetId.value === 'subway' ? '#f59e0b' : '#38bdf8'
  const carHalfW = currentPresetId.value === 'subway' ? 28 : 20
  ctx.beginPath()
  ctx.roundRect(-carHalfW, -12, carHalfW * 2, 22, 4)
  ctx.fill()
  ctx.lineWidth = 1.5
  ctx.strokeStyle = '#ffffff'
  ctx.stroke()

  // Windows & Wheels
  ctx.fillStyle = '#0f172a'
  if (currentPresetId.value === 'subway') {
    ctx.fillRect(-22, -8, 10, 8)
    ctx.fillRect(-6, -8, 12, 8)
    ctx.fillRect(12, -8, 10, 8)
  } else {
    ctx.fillRect(-14, -8, 10, 8)
    ctx.fillRect(4, -8, 10, 8)
  }
  ctx.fillStyle = '#cbd5e1'
  ctx.beginPath()
  ctx.arc(-carHalfW + 8, 11, 3, 0, Math.PI * 2)
  ctx.arc(carHalfW - 8, 11, 3, 0, Math.PI * 2)
  ctx.fill()

  // Velocity Vector Arrow (Blue, pointing from car center)
  const vel = curV.value
  const vScale = 0.8
  const vArrowLen = Math.min(60, Math.max(-60, vel * vScale))
  if (Math.abs(vArrowLen) > 3) {
    ctx.strokeStyle = '#0284c7'
    ctx.fillStyle = '#0284c7'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(0, -18)
    ctx.lineTo(vArrowLen, -18)
    ctx.stroke()
    // Arrowhead
    const dir = Math.sign(vArrowLen)
    ctx.beginPath()
    ctx.moveTo(vArrowLen, -18)
    ctx.lineTo(vArrowLen - dir * 6, -22)
    ctx.lineTo(vArrowLen - dir * 6, -14)
    ctx.closePath()
    ctx.fill()
    ctx.fillText(`v`, vArrowLen + dir * 8, -15)
  }

  // Acceleration Vector Arrow (Red, below car)
  const acc = curA.value
  const aScale = 2.0
  const aArrowLen = Math.min(50, Math.max(-50, acc * aScale))
  if (Math.abs(aArrowLen) > 3) {
    ctx.strokeStyle = '#f43f5e'
    ctx.fillStyle = '#f43f5e'
    ctx.lineWidth = 2.5
    ctx.beginPath()
    ctx.moveTo(0, 22)
    ctx.lineTo(aArrowLen, 22)
    ctx.stroke()
    // Arrowhead
    const dir = Math.sign(aArrowLen)
    ctx.beginPath()
    ctx.moveTo(aArrowLen, 22)
    ctx.lineTo(aArrowLen - dir * 5, 19)
    ctx.lineTo(aArrowLen - dir * 5, 25)
    ctx.closePath()
    ctx.fill()
    ctx.fillText(`a`, aArrowLen + dir * 8, 24)
  }

  ctx.restore()

  // Top Strip Track Label
  ctx.fillStyle = '#f8fafc'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText('PARTICLE / SUBWAY TRACK', 10, 24)

  // 2. THREE STACKED PLOTS: x(t), v(t), a(t)
  const plotLeftMargin = 60
  const plotWidthGraph = w - plotLeftMargin - 20
  const plotsStartY = 110
  const plotTotalHeight = h - plotsStartY - 24
  const individualPlotH = plotTotalHeight / 3
  const gap = 8
  const plotActualH = individualPlotH - gap

  // Sample data for full curves
  const numPlotPoints = 250
  const dataX: { t: number; val: number }[] = []
  const dataV: { t: number; val: number }[] = []
  const dataA: { t: number; val: number }[] = []

  let minV = Infinity, maxV = -Infinity
  let minA = Infinity, maxA = -Infinity

  for (let i = 0; i <= numPlotPoints; i++) {
    const t = (i / numPlotPoints) * maxTime.value
    const st = getMotionState(t)
    dataX.push({ t, val: st.x })
    dataV.push({ t, val: st.v })
    dataA.push({ t, val: st.a })

    if (st.v < minV) minV = st.v
    if (st.v > maxV) maxV = st.v
    if (st.a < minA) minA = st.a
    if (st.a > maxA) maxA = st.a
  }

  // Draw each graph
  const drawSinglePlot = (
    title: string, 
    data: { t: number; val: number }[], 
    minVal: number, 
    maxVal: number, 
    topY: number, 
    color: string, 
    fillShade: string, 
    curVal: number, 
    unitStr: string
  ) => {
    // Background box
    ctx!.fillStyle = '#0f172a'
    ctx!.fillRect(plotLeftMargin, topY, plotWidthGraph, plotActualH)
    ctx!.strokeStyle = 'rgba(148, 163, 184, 0.2)'
    ctx!.strokeRect(plotLeftMargin, topY, plotWidthGraph, plotActualH)

    const span = maxVal - minVal || 1
    const pad = span * 0.15
    const yMin = minVal - pad
    const yMax = maxVal + pad

    const toScreenX = (t: number) => plotLeftMargin + (t / maxTime.value) * plotWidthGraph
    const toScreenY = (v: number) => topY + plotActualH - ((v - yMin) / (yMax - yMin)) * plotActualH

    // Zero-line (if inside range)
    if (yMin <= 0 && yMax >= 0) {
      const zeroY = toScreenY(0)
      ctx!.strokeStyle = 'rgba(148, 163, 184, 0.35)'
      ctx!.setLineDash([3, 3])
      ctx!.beginPath()
      ctx!.moveTo(plotLeftMargin, zeroY)
      ctx!.lineTo(plotLeftMargin + plotWidthGraph, zeroY)
      ctx!.stroke()
      ctx!.setLineDash([])
    }

    // Shaded area under curve from t = 0 to currentTime
    ctx!.save()
    ctx!.fillStyle = fillShade
    ctx!.beginPath()
    const baseZeroY = Math.min(topY + plotActualH, Math.max(topY, toScreenY(0)))
    ctx!.moveTo(toScreenX(0), baseZeroY)
    for (let pt of data) {
      if (pt.t <= currentTime.value) {
        ctx!.lineTo(toScreenX(pt.t), toScreenY(pt.val))
      }
    }
    ctx!.lineTo(toScreenX(currentTime.value), baseZeroY)
    ctx!.closePath()
    ctx!.fill()
    ctx!.restore()

    // Full curve line
    ctx!.strokeStyle = color
    ctx!.lineWidth = 2.5
    ctx!.beginPath()
    for (let i = 0; i < data.length; i++) {
      const sx = toScreenX(data[i].t)
      const sy = toScreenY(data[i].val)
      if (i === 0) ctx!.moveTo(sx, sy)
      else ctx!.lineTo(sx, sy)
    }
    ctx!.stroke()

    // Title & live readout
    ctx!.fillStyle = color
    ctx!.font = 'bold 11px sans-serif'
    ctx!.textAlign = 'left'
    ctx!.fillText(`${title}: ${curVal.toFixed(1)} ${unitStr}`, plotLeftMargin + 8, topY + 16)

    // Axis label
    ctx!.fillStyle = 'rgba(148, 163, 184, 0.6)'
    ctx!.font = '9px monospace'
    ctx!.textAlign = 'right'
    ctx!.fillText(`${maxVal.toFixed(0)}`, plotLeftMargin - 6, topY + 12)
    ctx!.fillText(`${minVal.toFixed(0)}`, plotLeftMargin - 6, topY + plotActualH)

    // Current point circle
    const curPtX = toScreenX(currentTime.value)
    const curPtY = toScreenY(curVal)
    ctx!.fillStyle = '#ffffff'
    ctx!.beginPath()
    ctx!.arc(curPtX, curPtY, 4, 0, Math.PI * 2)
    ctx!.fill()
    ctx!.strokeStyle = color
    ctx!.lineWidth = 2
    ctx!.stroke()
  }

  // Draw the 3 plots
  drawSinglePlot('Position x(t)', dataX, minX, maxX, plotsStartY, '#38bdf8', 'rgba(56, 189, 248, 0.15)', curX.value, unitDist.value)
  drawSinglePlot('Velocity v(t)', dataV, minV, maxV, plotsStartY + individualPlotH, '#60a5fa', 'rgba(96, 165, 250, 0.2)', curV.value, `${unitDist.value}/s`)
  drawSinglePlot('Acceleration a(t)', dataA, minA, maxA, plotsStartY + individualPlotH * 2, '#f43f5e', 'rgba(244, 63, 94, 0.2)', curA.value, `${unitDist.value}/s²`)

  // 3. VERTICAL SCRUBBER TIME CURSOR across all 3 plots
  const scrubberX = plotLeftMargin + (currentTime.value / maxTime.value) * plotWidthGraph
  ctx.strokeStyle = '#ffffff'
  ctx.lineWidth = 1.5
  ctx.setLineDash([4, 2])
  ctx.beginPath()
  ctx.moveTo(scrubberX, plotsStartY)
  ctx.lineTo(scrubberX, plotsStartY + plotTotalHeight)
  ctx.stroke()
  ctx.setLineDash([])

  // Cursor time chip at bottom
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.arc(scrubberX, plotsStartY + plotTotalHeight + 6, 4, 0, Math.PI * 2)
  ctx.fill()
}

// Main animation loop
function tick(timestamp: number) {
  if (!lastTimestamp) lastTimestamp = timestamp
  const delta = (timestamp - lastTimestamp) / 1000
  lastTimestamp = timestamp

  if (isPlaying.value) {
    currentTime.value += delta * speedMultiplier.value
    if (currentTime.value >= maxTime.value) {
      currentTime.value = maxTime.value
      isPlaying.value = false
    }
  }

  draw()
  animFrameId = requestAnimationFrame(tick)
}

// SSR Safe Setup
let resizeObs: ResizeObserver | null = null

onMounted(() => {
  if (!canvasRef.value) return
  ctx = canvasRef.value.getContext('2d')

  const updateCanvasDimensions = () => {
    if (!canvasRef.value) return
    const rect = canvasRef.value.getBoundingClientRect()
    if (rect.width > 0) logicalW = rect.width
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvasRef.value.width = Math.round(logicalW * dpr)
    canvasRef.value.height = Math.round(logicalH * dpr)
    ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
    draw()
  }

  updateCanvasDimensions()

  if (typeof ResizeObserver !== 'undefined') {
    resizeObs = new ResizeObserver(() => {
      updateCanvasDimensions()
    })
    resizeObs.observe(canvasRef.value)
  }

  animFrameId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
  if (resizeObs) resizeObs.disconnect()
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
  grid-template-columns: minmax(180px, 270px) 1fr;
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
  max-height: 150px;
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

.speed-toggle {
  display: flex;
  gap: 0.25rem;
}

.speed-btn {
  background: var(--vp-c-bg-elv, #f1f5f9);
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  color: var(--vp-c-text-2, #64748b);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
}

.speed-btn.active {
  background: var(--vp-c-brand-1, #0284c7);
  border-color: var(--vp-c-brand-1, #0284c7);
  color: #ffffff;
}

/* Custom Sliders */
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
}

.val-chip {
  background: var(--vp-c-bg-elv, #f1f5f9);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
}

/* Viewport */
.sim-viewport-wrapper {
  background: #0f172a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 1.25rem;
}

.motion-canvas {
  width: 100%;
  height: 420px;
  display: block;
  cursor: ew-resize;
  touch-action: none;
}

/* Dashboard */
.sim-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
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

.dash-card.result-x { border-left: 4px solid #38bdf8; }
.dash-card.result-v { border-left: 4px solid #60a5fa; }
.dash-card.result-a { border-left: 4px solid #f43f5e; }

.dash-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-2, #64748b);
  margin-bottom: 0.2rem;
}

.dash-val {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: var(--vp-font-family-mono);
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
