<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-header-top">
        <div class="sim-badge-group">
          <span class="sim-badge">MODULE 3</span>
          <span class="sim-badge-secondary">KINETICS & DRY FRICTION</span>
        </div>
        <button class="ref-toggle-btn" @click="showSlideRef = !showSlideRef">
          📐 {{ showSlideRef ? 'Hide' : 'Show' }} PDF Slide Figure
        </button>
      </div>
      <h3 class="sim-title">Coulomb Incline (Slip vs Tip) & Capstan Belt Friction Lab</h3>
      <p class="sim-desc">
        Modeled directly on Dr. Sebin Devasia's Module 3 friction figures: Inclined Plane Angle of Repose <em>φ<sub>s</sub></em> & Resultant Reaction <strong>R</strong> (Slide 23), and Capstan Bollard Wrap <em>T<sub>2</sub> = T<sub>1</sub> e<sup>μ<sub>s</sub>β</sup></em> (Slides 28 & 30).
      </p>
    </div>

    <!-- Original PDF Slide Figure Reference -->
    <div v-if="showSlideRef" class="slide-ref-panel">
      <div class="slide-ref-img-wrap">
        <img
          :src="withBase(activeTab === 'incline' ? '/images/physics/mod3/mod3_incline_repose.png' : '/images/physics/mod3/mod3_belt_drive_example.png')"
          :alt="activeTab === 'incline' ? 'Slide 23 Inclined Plane Angle of Repose' : 'Slide 28 Capstan Rope Wrap Figure'"
        />
      </div>
      <div class="slide-ref-info">
        <span class="slide-ref-tag">
          {{ activeTab === 'incline' ? 'Original PDF · Module 3, Slide 23' : 'Original PDF · Module 3, Slides 28 & 30' }}
        </span>
        <p v-if="activeTab === 'incline'">
          As incline angle <em>θ</em> rises toward the Angle of Repose <strong>φ<sub>s</sub> = tan<sup>−1</sup>(μ<sub>s</sub>)</strong>, the resultant contact reaction <strong>R = N + F</strong> tilts to oppose gravity <strong>W</strong> until impending slip occurs at <em>θ = φ<sub>s</sub></em>.
        </p>
        <p v-else>
          Distributed radial normal forces around wrap angle <strong>β</strong> create exponential friction multiplication: 2 full turns (<em>β = 4π</em> rad, <em>μ<sub>s</sub> = 0.311</em>) allow <strong>T<sub>1</sub> = 150 N</strong> to hold a <strong>T<sub>2</sub> = 7500 N</strong> ship hawser.
        </p>
      </div>
    </div>

    <!-- Tab Selector -->
    <div class="mode-toggles">
      <button 
        class="mode-btn" 
        :class="{ active: activeTab === 'incline' }"
        @click="activeTab = 'incline'"
      >
        <span class="mode-icon">📐</span> Tab 1: Inclined Plane (Slip vs. Tip & Angle of Repose)
      </button>
      <button 
        class="mode-btn" 
        :class="{ active: activeTab === 'belt' }"
        @click="activeTab = 'belt'"
      >
        <span class="mode-icon">🪢</span> Tab 2: Capstan Belt Friction & Bollard Simulator
      </button>
    </div>

    <!-- ================= TAB 1: INCLINED PLANE (SLIP VS TIP) ================= -->
    <div v-show="activeTab === 'incline'">
      <!-- Presets -->
      <div class="sim-presets">
        <span class="preset-label">Presets:</span>
        <button class="preset-btn" @click="applyInclinePreset('stable')">Stable Rest (θ = 15°, μs = 0.5)</button>
        <button class="preset-btn" @click="applyInclinePreset('impending')">Impending Slip (θ = φs = 26.6°)</button>
        <button class="preset-btn" @click="applyInclinePreset('tipping')">Tall Block Tipping (b/h = 0.45)</button>
        <button class="preset-btn" @click="applyInclinePreset('sliding')">Kinetic Sliding (θ = 40°)</button>
      </div>

      <!-- Controls Grid -->
      <div class="sim-controls-grid">
        <div class="control-box">
          <div class="control-header">
            <label>Incline Angle (θ)</label>
            <span class="val-chip">{{ inclineAngle }}°</span>
          </div>
          <input type="range" min="0" max="50" step="0.5" v-model.number="inclineAngle" />
          <div class="range-labels"><span>0°</span><span>Repose φs: {{ (reposeAngle).toFixed(1) }}°</span><span>50°</span></div>
        </div>

        <div class="control-box">
          <div class="control-header">
            <label>Static Friction (μ_s)</label>
            <span class="val-chip">{{ muS.toFixed(2) }}</span>
          </div>
          <input type="range" min="0.10" max="0.90" step="0.02" v-model.number="muS" @input="onMuSChange" />
          <div class="range-labels"><span>0.10</span><span>Angle φs = tan⁻¹(μs)</span><span>0.90</span></div>
        </div>

        <div class="control-box">
          <div class="control-header">
            <label>Kinetic Friction (μ_k)</label>
            <span class="val-chip">{{ muK.toFixed(2) }}</span>
          </div>
          <input type="range" min="0.05" :max="muS" step="0.02" v-model.number="muK" />
          <div class="range-labels"><span>0.05</span><span>μ_k &lt; μ_s</span><span>{{ muS.toFixed(2) }}</span></div>
        </div>

        <div class="control-box">
          <div class="control-header">
            <label>Aspect Ratio (b / h)</label>
            <span class="val-chip">{{ blockAspect.toFixed(2) }} ({{ blockAspect &lt; muS ? 'Tips First' : 'Slips First' }})</span>
          </div>
          <input type="range" min="0.35" max="2.00" step="0.05" v-model.number="blockAspect" />
          <div class="range-labels"><span>0.35 (Tall)</span><span>b/h = 1.0 (Square)</span><span>2.0 (Wide)</span></div>
        </div>
      </div>

      <!-- Canvas Viewport -->
      <div class="sim-viewport-wrapper">
        <canvas ref="canvasInclineRef" class="lab-canvas"></canvas>
      </div>

      <!-- Dashboard -->
      <div class="sim-dashboard">
        <div class="dash-card result-main">
          <span class="dash-label">Physical State</span>
          <span class="dash-val highlight" :style="{ color: stateColor }">{{ stateLabel }}</span>
          <span class="dash-sub">{{ stateExplanation }}</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Normal Force (N)</span>
          <span class="dash-val">{{ normalN.toFixed(1) }} <small>N</small></span>
          <span class="dash-sub">Line shifts x = {{ shiftX.toFixed(1) }} cm from center</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Friction Force (F)</span>
          <span class="dash-val">{{ frictionF.toFixed(1) }} <small>N</small></span>
          <span class="dash-sub">Max Static F_m = {{ maxStaticF.toFixed(1) }} N</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Downhill Acceleration (a)</span>
          <span class="dash-val">{{ accelDownhill.toFixed(2) }} <small>m/s²</small></span>
          <span class="dash-sub">{{ isSliding ? 'g(sinθ - μ_k cosθ)' : '0 (Static Equilibrium)' }}</span>
        </div>
      </div>
    </div>

    <!-- ================= TAB 2: CAPSTAN BELT FRICTION ================= -->
    <div v-show="activeTab === 'belt'">
      <!-- Presets -->
      <div class="sim-presets">
        <span class="preset-label">Lecture Presets:</span>
        <button class="preset-btn" @click="applyBeltPreset(2, 0.311, 150)">
          Lecture 2 Turns (T1 = 150 N, μs = 0.311 ⇒ T2 = 7.5 kN)
        </button>
        <button class="preset-btn" @click="applyBeltPreset(3, 0.311, 150)">
          Lecture 3 Turns (T1 = 150 N, μs = 0.311 ⇒ T2 = 52.7 kN)
        </button>
        <button class="preset-btn" @click="applyBeltPreset(1, 0.40, 200)">
          1 Turn High Friction (μs = 0.40)
        </button>
      </div>

      <!-- Belt Controls -->
      <div class="sim-controls-grid">
        <div class="control-box">
          <div class="control-header">
            <label>Wrap Turns (n)</label>
            <span class="val-chip">{{ beltTurns.toFixed(2) }} turns (β = {{ (beltTurns * 2 * Math.PI).toFixed(2) }} rad)</span>
          </div>
          <input type="range" min="0.25" max="3.5" step="0.25" v-model.number="beltTurns" />
          <div class="range-labels"><span>0.25 (90°)</span><span>2 turns (4π)</span><span>3.5 turns</span></div>
        </div>

        <div class="control-box">
          <div class="control-header">
            <label>Belt-Bollard Friction (μ_s)</label>
            <span class="val-chip">{{ beltMu.toFixed(3) }}</span>
          </div>
          <input type="range" min="0.10" max="0.55" step="0.005" v-model.number="beltMu" />
          <div class="range-labels"><span>0.10</span><span>Lecture: 0.311</span><span>0.55</span></div>
        </div>

        <div class="control-box">
          <div class="control-header">
            <label>Dockworker Holding Force (T₁)</label>
            <span class="val-chip">{{ tensionT1 }} N</span>
          </div>
          <input type="range" min="50" max="500" step="25" v-model.number="tensionT1" />
          <div class="range-labels"><span>50 N</span><span>Lecture: 150 N</span><span>500 N</span></div>
        </div>
      </div>

      <!-- Belt Canvas Viewport -->
      <div class="sim-viewport-wrapper">
        <canvas ref="canvasBeltRef" class="lab-canvas"></canvas>
      </div>

      <!-- Belt Dashboard -->
      <div class="sim-dashboard">
        <div class="dash-card result-main">
          <span class="dash-label">Holding Tension (T₂) — Ship Side</span>
          <span class="dash-val highlight">{{ tensionT2Str }}</span>
          <span class="dash-sub">T₂ = T₁ · e^(μ_s · β)</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Mechanical Advantage (M)</span>
          <span class="dash-val">{{ mechAdvantage.toFixed(1) }} <small>×</small></span>
          <span class="dash-sub">e^(μ_s · β) = e^({{ (beltMu * beltBeta).toFixed(2) }})</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Total Angle of Contact (β)</span>
          <span class="dash-val">{{ beltBeta.toFixed(2) }} <small>rad</small></span>
          <span class="dash-sub">{{ (beltTurns * 360).toFixed(0) }}° total angular contact</span>
        </div>
        <div class="dash-card">
          <span class="dash-label">Tension Ratio (T₂ / T₁)</span>
          <span class="dash-val">{{ (tensionT2 / tensionT1).toFixed(1) }}</span>
          <span class="dash-sub">Small T₁ can hold massive ship!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'

const activeTab = ref<'incline' | 'belt'>('incline')
const showSlideRef = ref(true)

// ================= INCLINE TAB STATE =================
const inclineAngle = ref(20)
const muS = ref(0.50)
const muK = ref(0.35)
const blockAspect = ref(0.8) // width / height (b/h)
const blockMass = 10 // kg
const g = 9.81
const weightW = blockMass * g // 98.1 N

function onMuSChange() {
  if (muK.value > muS.value) {
    muK.value = muS.value * 0.7
  }
}

function applyInclinePreset(type: 'stable' | 'impending' | 'tipping' | 'sliding') {
  if (type === 'stable') {
    inclineAngle.value = 15
    muS.value = 0.50
    muK.value = 0.35
    blockAspect.value = 1.0
  } else if (type === 'impending') {
    muS.value = 0.50
    muK.value = 0.35
    inclineAngle.value = Math.round((Math.atan(muS.value) * 180) / Math.PI * 10) / 10
    blockAspect.value = 1.2
  } else if (type === 'tipping') {
    muS.value = 0.70
    muK.value = 0.50
    blockAspect.value = 0.45
    inclineAngle.value = 26
  } else if (type === 'sliding') {
    inclineAngle.value = 40
    muS.value = 0.40
    muK.value = 0.30
    blockAspect.value = 1.2
  }
}

// Incline Math
const radIncline = computed(() => (inclineAngle.value * Math.PI) / 180)
const reposeAngle = computed(() => (Math.atan(muS.value) * 180) / Math.PI)
const tipAngle = computed(() => (Math.atan(blockAspect.value) * 180) / Math.PI)

const normalN = computed(() => weightW * Math.cos(radIncline.value))
const maxStaticF = computed(() => muS.value * normalN.value)
const gravPullDown = computed(() => weightW * Math.sin(radIncline.value))

// Normal force shift: x = (h/2) * tan(theta)
// We normalize block height h = 100 cm, width b = blockAspect * 100 cm
const shiftX = computed(() => {
  const h_cm = 50 // half height
  return h_cm * Math.tan(radIncline.value)
})

const isTipping = computed(() => {
  const halfB_cm = (blockAspect.value * 100) / 2
  return shiftX.value > halfB_cm
})

const isSliding = computed(() => {
  return !isTipping.value && gravPullDown.value > maxStaticF.value
})

const isImpending = computed(() => {
  return !isTipping.value && Math.abs(gravPullDown.value - maxStaticF.value) < 1.5
})

const frictionF = computed(() => {
  if (isTipping.value) return 0
  if (isSliding.value) return muK.value * normalN.value
  return gravPullDown.value
})

const accelDownhill = computed(() => {
  if (!isSliding.value) return 0
  return g * (Math.sin(radIncline.value) - muK.value * Math.cos(radIncline.value))
})

const stateLabel = computed(() => {
  if (isTipping.value) return 'BLOCK TIPPING OVER!'
  if (isSliding.value) return 'KINETIC SLIDING'
  if (isImpending.value) return 'IMPENDING SLIP'
  return 'STATIC EQUILIBRIUM'
})

const stateColor = computed(() => {
  if (isTipping.value) return '#ef4444'
  if (isSliding.value) return '#38bdf8'
  if (isImpending.value) return '#f59e0b'
  return '#22c55e'
})

const stateExplanation = computed(() => {
  if (isTipping.value) return `tan θ (${Math.tan(radIncline.value).toFixed(2)}) > b/h (${blockAspect.value.toFixed(2)}) ⇒ Reaction falls outside base!`
  if (isSliding.value) return `θ (${inclineAngle.value.toFixed(1)}°) > Angle of Repose φs (${reposeAngle.value.toFixed(1)}°)`
  if (isImpending.value) return `F = F_max = μ_s N (At verge of motion)`
  return `F (${frictionF.value.toFixed(1)} N) < F_max (${maxStaticF.value.toFixed(1)} N) (Stable)`
})

// ================= BELT FRICTION STATE =================
const beltTurns = ref(2.0)
const beltMu = ref(0.311)
const tensionT1 = ref(150)

function applyBeltPreset(turns: number, mu: number, t1: number) {
  beltTurns.value = turns
  beltMu.value = mu
  tensionT1.value = t1
}

const beltBeta = computed(() => beltTurns.value * 2 * Math.PI)
const mechAdvantage = computed(() => Math.exp(beltMu.value * beltBeta.value))
const tensionT2 = computed(() => tensionT1.value * mechAdvantage.value)

const tensionT2Str = computed(() => {
  const val = tensionT2.value
  if (val >= 1000) return `${(val / 1000).toFixed(1)} kN`
  return `${val.toFixed(1)} N`
})

// ================= CANVAS DRAWING =================
const canvasInclineRef = ref<HTMLCanvasElement | null>(null)
let ctxIncline: CanvasRenderingContext2D | null = null
let logicalW1 = 700
const logicalH1 = 380

const canvasBeltRef = ref<HTMLCanvasElement | null>(null)
let ctxBelt: CanvasRenderingContext2D | null = null
let logicalW2 = 700
const logicalH2 = 380

function drawIncline() {
  if (!ctxIncline || !canvasInclineRef.value) return
  const w = logicalW1
  const h = logicalH1

  ctxIncline.clearRect(0, 0, w, h)

  // Incline base geometry
  const originX = 60
  const originY = h - 60
  const inclineLen = w - 240 // leave right space for Coulomb plot
  const th = radIncline.value

  const topX = originX + inclineLen * Math.cos(th)
  const topY = originY - inclineLen * Math.sin(th)

  // Ramp triangle
  ctxIncline.fillStyle = '#1e293b'
  ctxIncline.beginPath()
  ctxIncline.moveTo(originX, originY)
  ctxIncline.lineTo(topX, originY)
  ctxIncline.lineTo(topX, topY)
  ctxIncline.closePath()
  ctxIncline.fill()
  ctxIncline.strokeStyle = '#475569'
  ctxIncline.lineWidth = 2
  ctxIncline.stroke()

  // Angle arc at bottom left
  ctxIncline.strokeStyle = '#38bdf8'
  ctxIncline.lineWidth = 1.5
  ctxIncline.beginPath()
  ctxIncline.arc(originX, originY, 40, -th, 0)
  ctxIncline.stroke()
  ctxIncline.fillStyle = '#38bdf8'
  ctxIncline.font = 'bold 11px sans-serif'
  ctxIncline.fillText(`θ = ${inclineAngle.value}°`, originX + 48, originY - 12)

  // Block placement on the ramp
  const distAlongRamp = inclineLen * 0.52
  const rampBlockCenterX = originX + distAlongRamp * Math.cos(th)
  const rampBlockCenterY = originY - distAlongRamp * Math.sin(th)

  // Block size in pixels
  const blockH = 80
  const blockB = blockH * blockAspect.value

  ctxIncline.save()
  ctxIncline.translate(rampBlockCenterX, rampBlockCenterY)
  ctxIncline.rotate(-th)

  // If tipping, tilt block forward around corner B (+b/2, 0)
  if (isTipping.value) {
    const tipAngleVis = Math.min(0.25, (shiftX.value / ((blockAspect.value * 100) / 2) - 1) * 0.3)
    ctxIncline.translate(blockB / 2, 0)
    ctxIncline.rotate(-tipAngleVis)
    ctxIncline.translate(-blockB / 2, 0)
  }

  // Draw Block Body
  ctxIncline.fillStyle = isTipping.value ? 'rgba(239, 68, 68, 0.25)' : 'rgba(56, 189, 248, 0.2)'
  ctxIncline.strokeStyle = isTipping.value ? '#ef4444' : '#38bdf8'
  ctxIncline.lineWidth = 2.5
  ctxIncline.beginPath()
  ctxIncline.rect(-blockB / 2, -blockH, blockB, blockH)
  ctxIncline.fill()
  ctxIncline.stroke()

  // Center of Gravity G
  ctxIncline.fillStyle = '#ffffff'
  ctxIncline.beginPath()
  ctxIncline.arc(0, -blockH / 2, 4, 0, Math.PI * 2)
  ctxIncline.fill()
  ctxIncline.fillText('G', 6, -blockH / 2 + 3)

  // Normal Force N (shifted downhill by shiftX px)
  const shiftPx = Math.min(blockB / 2 + 10, (shiftX.value / 100) * blockH)
  ctxIncline.strokeStyle = '#22c55e'
  ctxIncline.fillStyle = '#22c55e'
  ctxIncline.lineWidth = 2.5
  ctxIncline.beginPath()
  ctxIncline.moveTo(shiftPx, 0)
  ctxIncline.lineTo(shiftPx, 45)
  ctxIncline.stroke()
  // Arrowhead pointing upward into block
  ctxIncline.beginPath()
  ctxIncline.moveTo(shiftPx, 0)
  ctxIncline.lineTo(shiftPx - 5, 8)
  ctxIncline.lineTo(shiftPx + 5, 8)
  ctxIncline.closePath()
  ctxIncline.fill()
  ctxIncline.fillText('N', shiftPx + 8, 30)

  // Friction Force F (acting along surface, uphill toward left)
  const fArrowLen = Math.min(60, (frictionF.value / weightW) * 80)
  if (fArrowLen > 2) {
    ctxIncline.strokeStyle = '#f59e0b'
    ctxIncline.fillStyle = '#f59e0b'
    ctxIncline.lineWidth = 2.5
    ctxIncline.beginPath()
    ctxIncline.moveTo(shiftPx, 0)
    ctxIncline.lineTo(shiftPx - fArrowLen, 0)
    ctxIncline.stroke()
    ctxIncline.beginPath()
    ctxIncline.moveTo(shiftPx - fArrowLen, 0)
    ctxIncline.lineTo(shiftPx - fArrowLen + 6, -4)
    ctxIncline.lineTo(shiftPx - fArrowLen + 6, 4)
    ctxIncline.closePath()
    ctxIncline.fill()
    ctxIncline.fillText('F', shiftPx - fArrowLen - 12, -6)

    // Resultant Contact Reaction R = N + F (matching Slide 21-23 angle φ from normal)
    ctxIncline.save()
    ctxIncline.strokeStyle = '#c084fc'
    ctxIncline.fillStyle = '#c084fc'
    ctxIncline.lineWidth = 2
    ctxIncline.setLineDash([4, 2])
    ctxIncline.beginPath()
    ctxIncline.moveTo(shiftPx + fArrowLen * 0.65, 42)
    ctxIncline.lineTo(shiftPx, 0)
    ctxIncline.stroke()
    ctxIncline.setLineDash([])
    const phiDeg = ((Math.atan2(frictionF.value, Math.max(0.1, normalN.value)) * 180) / Math.PI).toFixed(1)
    ctxIncline.font = 'bold 9px monospace'
    ctxIncline.fillText(`R (φ=${phiDeg}°)`, shiftPx + fArrowLen * 0.45 + 6, 48)
    ctxIncline.restore()
  }

  // Weight Vector W (always pointing straight down in world coordinates)
  ctxIncline.restore() // unrotate to draw gravity straight down

  ctxIncline.strokeStyle = '#f43f5e'
  ctxIncline.fillStyle = '#f43f5e'
  ctxIncline.lineWidth = 2.5
  const gCenterX = rampBlockCenterX + (blockH / 2) * Math.sin(th)
  const gCenterY = rampBlockCenterY - (blockH / 2) * Math.cos(th)

  ctxIncline.beginPath()
  ctxIncline.moveTo(gCenterX, gCenterY)
  ctxIncline.lineTo(gCenterX, gCenterY + 60)
  ctxIncline.stroke()
  ctxIncline.beginPath()
  ctxIncline.moveTo(gCenterX, gCenterY + 60)
  ctxIncline.lineTo(gCenterX - 5, gCenterY + 52)
  ctxIncline.lineTo(gCenterX + 5, gCenterY + 52)
  ctxIncline.closePath()
  ctxIncline.fill()
  ctxIncline.fillText('W = mg', gCenterX + 8, gCenterY + 50)

  // ================= INSET: COULOMB F vs THETA PLOT =================
  const plotLeft = w - 190
  const plotTop = 30
  const plotW = 160
  const plotH = 150

  ctxIncline.fillStyle = 'rgba(15, 23, 42, 0.92)'
  ctxIncline.fillRect(plotLeft, plotTop, plotW, plotH)
  ctxIncline.strokeStyle = 'rgba(148, 163, 184, 0.3)'
  ctxIncline.strokeRect(plotLeft, plotTop, plotW, plotH)

  ctxIncline.fillStyle = '#38bdf8'
  ctxIncline.font = 'bold 10px sans-serif'
  ctxIncline.textAlign = 'left'
  ctxIncline.fillText('COULOMB FRICTION F(θ)', plotLeft + 8, plotTop + 14)

  // Plot Axes
  const oX = plotLeft + 25
  const oY = plotTop + plotH - 20
  ctxIncline.strokeStyle = 'rgba(148, 163, 184, 0.5)'
  ctxIncline.beginPath()
  ctxIncline.moveTo(oX, plotTop + 24)
  ctxIncline.lineTo(oX, oY)
  ctxIncline.lineTo(plotLeft + plotW - 10, oY)
  ctxIncline.stroke()

  ctxIncline.fillStyle = 'rgba(148, 163, 184, 0.7)'
  ctxIncline.font = '8px monospace'
  ctxIncline.fillText('θ', plotLeft + plotW - 16, oY - 4)
  ctxIncline.fillText('F', oX + 4, plotTop + 30)

  // Draw F(theta) curve from theta = 0 to 50
  ctxIncline.strokeStyle = '#f59e0b'
  ctxIncline.lineWidth = 2
  ctxIncline.beginPath()
  const plotSteps = 50
  for (let i = 0; i <= plotSteps; i++) {
    const ang = (i / plotSteps) * 50
    const rAng = (ang * Math.PI) / 180
    const n = weightW * Math.cos(rAng)
    const pull = weightW * Math.sin(rAng)
    const maxF = muS.value * n
    let fVal = pull
    if (pull > maxF) fVal = muK.value * n

    const px = oX + (ang / 50) * (plotW - 40)
    const py = oY - (fVal / 60) * (plotH - 50)
    if (i === 0) ctxIncline.moveTo(px, py)
    else ctxIncline.lineTo(px, py)
  }
  ctxIncline.stroke()

  // Current state point on plot
  const curPtX = oX + (inclineAngle.value / 50) * (plotW - 40)
  const curPtY = oY - (frictionF.value / 60) * (plotH - 50)
  ctxIncline.fillStyle = stateColor.value
  ctxIncline.beginPath()
  ctxIncline.arc(curPtX, curPtY, 4, 0, Math.PI * 2)
  ctxIncline.fill()
}

function drawBelt() {
  if (!ctxBelt || !canvasBeltRef.value) return
  const w = logicalW2
  const h = logicalH2

  ctxBelt.clearRect(0, 0, w, h)

  // Bollard center & radius
  const bollardX = w * 0.38
  const bollardY = h * 0.52
  const bollardR = 75

  // Draw Bollard Steel Body
  ctxBelt.fillStyle = '#1e293b'
  ctxBelt.beginPath()
  ctxBelt.arc(bollardX, bollardY, bollardR, 0, Math.PI * 2)
  ctxBelt.fill()
  ctxBelt.strokeStyle = '#64748b'
  ctxBelt.lineWidth = 4
  ctxBelt.stroke()

  // Bollard center mounting pin
  ctxBelt.fillStyle = '#0f172a'
  ctxBelt.beginPath()
  ctxBelt.arc(bollardX, bollardY, 18, 0, Math.PI * 2)
  ctxBelt.fill()
  ctxBelt.fillStyle = '#94a3b8'
  ctxBelt.font = 'bold 11px sans-serif'
  ctxBelt.textAlign = 'center'
  ctxBelt.fillText('BOLLARD', bollardX, bollardY + 4)

  // Animated / Heat-mapped Rope Coils
  const numWraps = beltTurns.value
  const totalAngle = numWraps * 2 * Math.PI

  // Dockworker side (T1) on bottom right, going around counter-clockwise to ship side (T2) at top left
  const startAng = 0
  const steps = 180

  for (let i = 0; i < steps; i++) {
    const frac = i / steps
    const ang = startAng + frac * totalAngle
    const curTension = tensionT1.value * Math.exp(beltMu.value * (frac * totalAngle))

    // Color gradient: T1 (Cyan/Green) to T2 (Crimson/Red)
    const heat = Math.min(1, Math.log(curTension / tensionT1.value) / Math.log(Math.max(2, mechAdvantage.value)))
    const r = Math.floor(56 + heat * 190)
    const g = Math.floor(189 - heat * 140)
    const b = Math.floor(248 - heat * 200)

    // Coil radius slightly expands for overlapping turns
    const coilOffset = Math.floor(frac * numWraps) * 4
    const rCoil = bollardR + 6 + coilOffset

    const px1 = bollardX + rCoil * Math.cos(ang)
    const py1 = bollardY + rCoil * Math.sin(ang)
    const px2 = bollardX + rCoil * Math.cos(ang + (totalAngle / steps))
    const py2 = bollardY + rCoil * Math.sin(ang + (totalAngle / steps))

    ctxBelt.strokeStyle = `rgb(${r}, ${g}, ${b})`
    ctxBelt.lineWidth = 6
    ctxBelt.beginPath()
    ctxBelt.moveTo(px1, py1)
    ctxBelt.lineTo(px2, py2)
    ctxBelt.stroke()
  }

  // T1 Tangent Lead (Dockworker side, cool blue)
  ctxBelt.strokeStyle = '#38bdf8'
  ctxBelt.lineWidth = 6
  ctxBelt.beginPath()
  ctxBelt.moveTo(bollardX + bollardR + 6, bollardY)
  ctxBelt.lineTo(bollardX + bollardR + 6, h - 30)
  ctxBelt.stroke()

  ctxBelt.fillStyle = '#38bdf8'
  ctxBelt.font = 'bold 12px sans-serif'
  ctxBelt.textAlign = 'left'
  ctxBelt.fillText(`T₁ = ${tensionT1.value} N (Dockworker Pull)`, bollardX + bollardR + 16, h - 50)

  // T2 Tangent Lead (Ship side, hot crimson)
  const endAngle = startAng + totalAngle
  const endR = bollardR + 6 + Math.floor(numWraps) * 4
  const endX = bollardX + endR * Math.cos(endAngle)
  const endY = bollardY + endR * Math.sin(endAngle)

  ctxBelt.strokeStyle = '#ef4444'
  ctxBelt.lineWidth = 8
  ctxBelt.beginPath()
  ctxBelt.moveTo(endX, endY)
  ctxBelt.lineTo(30, 40)
  ctxBelt.stroke()

  ctxBelt.fillStyle = '#ef4444'
  ctxBelt.font = 'bold 13px sans-serif'
  ctxBelt.textAlign = 'left'
  ctxBelt.fillText(`T₂ = ${tensionT2Str.value} (Massive Ship Load)`, 30, 26)

  // ================= INSET: EXPONENTIAL TENSION GROWTH CURVE =================
  const plotLeft = w - 210
  const plotTop = 30
  const plotW = 180
  const plotH = 170

  ctxBelt.fillStyle = 'rgba(15, 23, 42, 0.92)'
  ctxBelt.fillRect(plotLeft, plotTop, plotW, plotH)
  ctxBelt.strokeStyle = 'rgba(148, 163, 184, 0.3)'
  ctxBelt.strokeRect(plotLeft, plotTop, plotW, plotH)

  ctxBelt.fillStyle = '#38bdf8'
  ctxBelt.font = 'bold 10px sans-serif'
  ctxBelt.textAlign = 'left'
  ctxBelt.fillText('CAPSTAN EXPONENTIAL T(β)', plotLeft + 8, plotTop + 14)

  const oX = plotLeft + 35
  const oY = plotTop + plotH - 22
  ctxBelt.strokeStyle = 'rgba(148, 163, 184, 0.5)'
  ctxBelt.beginPath()
  ctxBelt.moveTo(oX, plotTop + 24)
  ctxBelt.lineTo(oX, oY)
  ctxBelt.lineTo(plotLeft + plotW - 10, oY)
  ctxBelt.stroke()

  ctxBelt.fillStyle = 'rgba(148, 163, 184, 0.7)'
  ctxBelt.font = '8px monospace'
  ctxBelt.fillText('β', plotLeft + plotW - 14, oY - 4)
  ctxBelt.fillText('T', oX + 4, plotTop + 30)

  // Draw exponential curve
  ctxBelt.strokeStyle = '#f43f5e'
  ctxBelt.lineWidth = 2.5
  ctxBelt.beginPath()
  const expSteps = 60
  for (let i = 0; i <= expSteps; i++) {
    const f = i / expSteps
    const b = f * beltBeta.value
    const tVal = tensionT1.value * Math.exp(beltMu.value * b)

    const px = oX + f * (plotW - 50)
    const py = oY - (Math.log(tVal / tensionT1.value) / Math.max(0.1, Math.log(mechAdvantage.value))) * (plotH - 55)
    if (i === 0) ctxBelt.moveTo(px, py)
    else ctxBelt.lineTo(px, py)
  }
  ctxBelt.stroke()

  // Highlight end point
  ctxBelt.fillStyle = '#ef4444'
  ctxBelt.beginPath()
  ctxBelt.arc(oX + plotW - 50, oY - (plotH - 55), 4, 0, Math.PI * 2)
  ctxBelt.fill()
}

// ================= LIFECYCLE (SSR SAFE) =================
let animId: number | null = null
let resObsIncline: ResizeObserver | null = null
let resObsBelt: ResizeObserver | null = null

function loop() {
  if (activeTab.value === 'incline') {
    drawIncline()
  } else {
    drawBelt()
  }
  animId = requestAnimationFrame(loop)
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
  if (canvasInclineRef.value) {
    ctxIncline = canvasInclineRef.value.getContext('2d')
    updateSize1 = () => {
      if (!canvasInclineRef.value) return
      const rect = canvasInclineRef.value.getBoundingClientRect()
      if (rect.width > 0) logicalW1 = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasInclineRef.value.width = Math.round(logicalW1 * dpr)
      canvasInclineRef.value.height = Math.round(logicalH1 * dpr)
      ctxIncline?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawIncline()
    }
    updateSize1()
    if (typeof ResizeObserver !== 'undefined') {
      resObsIncline = new ResizeObserver(updateSize1)
      resObsIncline.observe(canvasInclineRef.value)
    }
  }

  if (canvasBeltRef.value) {
    ctxBelt = canvasBeltRef.value.getContext('2d')
    updateSize2 = () => {
      if (!canvasBeltRef.value) return
      const rect = canvasBeltRef.value.getBoundingClientRect()
      if (rect.width > 0) logicalW2 = rect.width
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvasBeltRef.value.width = Math.round(logicalW2 * dpr)
      canvasBeltRef.value.height = Math.round(logicalH2 * dpr)
      ctxBelt?.setTransform(dpr, 0, 0, dpr, 0, 0)
      drawBelt()
    }
    updateSize2()
    if (typeof ResizeObserver !== 'undefined') {
      resObsBelt = new ResizeObserver(updateSize2)
      resObsBelt.observe(canvasBeltRef.value)
    }
  }

  animId = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  if (animId) cancelAnimationFrame(animId)
  if (resObsIncline) resObsIncline.disconnect()
  if (resObsBelt) resObsBelt.disconnect()
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
  grid-template-columns: minmax(180px, 260px) 1fr;
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
  max-height: 155px;
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
  font-family: var(--vp-font-family-mono);
  font-size: 0.78rem;
}

input[type="range"] {
  width: 100%;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1, #0284c7);
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: var(--vp-c-text-2, #94a3b8);
  margin-top: 0.3rem;
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
