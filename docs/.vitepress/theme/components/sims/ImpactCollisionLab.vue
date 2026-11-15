<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-badge-group">
        <span class="sim-badge">MODULE 5</span>
        <span class="sim-badge-secondary">IMPULSE & MOMENTUM</span>
      </div>
      <h3 class="sim-title">Direct & Oblique Central Impact Simulator</h3>
      <p class="sim-desc">
        Investigate collisions between smooth particles along the <strong>Line of Impact</strong> (<em>n</em>) and <strong>Plane of Contact</strong> (<em>t</em>), discover the Coefficient of Restitution (<em>e</em>), and verify conservation of momentum and mechanical energy loss.
      </p>
    </div>

    <!-- Mode Selector -->
    <div class="mode-toggles">
      <button 
        class="mode-btn" 
        :class="{ active: impactMode === 'direct' }"
        @click="switchMode('direct')"
      >
        <span class="mode-icon">💥</span> Direct Central Impact (θ = 0°)
      </button>
      <button 
        class="mode-btn" 
        :class="{ active: impactMode === 'oblique' }"
        @click="switchMode('oblique')"
      >
        <span class="mode-icon">🎱</span> Oblique Central Impact (Angular Components)
      </button>
    </div>

    <!-- Presets -->
    <div class="sim-presets">
      <span class="preset-label">Presets:</span>
      <button class="preset-btn" @click="applyPreset('elastic')">
        Elastic Velocity Transfer (e = 1.0, mA = mB)
      </button>
      <button class="preset-btn" @click="applyPreset('plastic')">
        Perfect Plastic Stick (e = 0.0, Max KE Loss)
      </button>
      <button class="preset-btn" @click="applyPreset('billiard')">
        Oblique Billiard Impact (e = 0.90, θA = 30°)
      </button>
      <button class="preset-btn" @click="applyPreset('truck')">
        Heavy Truck vs Car (mA = 8kg, mB = 1.5kg)
      </button>
    </div>

    <!-- Playback & Timeline Scrub Bar -->
    <div class="playback-bar">
      <button class="play-btn" @click="togglePlay">
        {{ isPlaying ? '⏸ Pause' : '▶ Animate Impact' }}
      </button>
      <button class="action-btn" @click="resetTime">↺ Reset</button>

      <div class="time-slider-wrapper">
        <span class="time-label">Timeline: <strong>{{ timeOffset.toFixed(2) }} s</strong> (0.00 = Contact)</span>
        <input 
          type="range" 
          min="-1.0" 
          max="1.0" 
          step="0.02" 
          v-model.number="timeOffset" 
        />
      </div>
    </div>

    <!-- Interactive Parameters Grid -->
    <div class="sim-controls-grid">
      <!-- Restitution Slider (Full Width) -->
      <div class="control-box full-width">
        <div class="control-header">
          <label>Coefficient of Restitution (e)</label>
          <span class="val-chip highlight">
            e = {{ coeffE.toFixed(2) }} 
            ({{ coeffE === 1 ? 'Perfectly Elastic' : coeffE === 0 ? 'Perfect Plastic' : 'Inelastic' }})
          </span>
        </div>
        <input type="range" min="0.00" max="1.00" step="0.05" v-model.number="coeffE" />
        <div class="range-labels">
          <span>0.00 (Stick / Max Loss)</span>
          <span>e = (v'_Bn - v'_An) / (v_An - v_Bn)</span>
          <span>1.00 (Elastic / No Loss)</span>
        </div>
      </div>

      <!-- Sphere A Controls -->
      <div class="control-box">
        <div class="control-header">
          <span class="control-indicator a-ind"></span>
          <label>Sphere A: Mass (m_A)</label>
          <span class="val-chip">{{ massA }} kg</span>
        </div>
        <input type="range" min="0.5" max="10" step="0.5" v-model.number="massA" />
        <div class="slider-row">
          <span class="slider-sub">Speed v_A:</span>
          <input type="range" min="2" max="20" step="1" v-model.number="speedA" />
          <span class="range-unit">{{ speedA }} m/s</span>
        </div>
        <div v-if="impactMode === 'oblique'" class="slider-row">
          <span class="slider-sub">Angle θ_A:</span>
          <input type="range" min="0" max="60" step="5" v-model.number="angleA" />
          <span class="range-unit">{{ angleA }}°</span>
        </div>
      </div>

      <!-- Sphere B Controls -->
      <div class="control-box">
        <div class="control-header">
          <span class="control-indicator b-ind"></span>
          <label>Sphere B: Mass (m_B)</label>
          <span class="val-chip">{{ massB }} kg</span>
        </div>
        <input type="range" min="0.5" max="10" step="0.5" v-model.number="massB" />
        <div class="slider-row">
          <span class="slider-sub">Speed v_B:</span>
          <input type="range" min="-10" max="10" step="1" v-model.number="speedB" />
          <span class="range-unit">{{ speedB }} m/s</span>
        </div>
        <div v-if="impactMode === 'oblique'" class="slider-row">
          <span class="slider-sub">Angle θ_B:</span>
          <input type="range" min="0" max="60" step="5" v-model.number="angleB" />
          <span class="range-unit">{{ angleB }}°</span>
        </div>
      </div>
    </div>

    <!-- Canvas Viewport -->
    <div class="sim-viewport-wrapper">
      <canvas ref="canvasRef" class="lab-canvas"></canvas>
    </div>

    <!-- Mathematical Dashboard -->
    <div class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Kinetic Energy Loss %</span>
        <span class="dash-val highlight">{{ energyLossPercent.toFixed(1) }}%</span>
        <span class="dash-sub">ΔT = {{ deltaT.toFixed(1) }} J dissipated as heat/sound</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Pre-Impact Normal Velocities</span>
        <span class="dash-val">v_An = {{ vAn.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">v_Bn = {{ vBn.toFixed(2) }} m/s</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Post-Impact Normal Velocities</span>
        <span class="dash-val">v'_An = {{ vAnPrime.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">v'_Bn = {{ vBnPrime.toFixed(2) }} m/s</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Post-Impact Speeds</span>
        <span class="dash-val">{{ speedAPrime.toFixed(2) }} | {{ speedBPrime.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">Tangential conserved: v_At = {{ vAt.toFixed(1) }}</span>
      </div>
      <div class="dash-card full-span">
        <span class="dash-label">Linear Momentum Conservation Check</span>
        <span class="dash-sub status-verified">
          ✓ Normal Momentum: m_A·v_An + m_B·v_Bn = {{ (massA * vAn + massB * vBn).toFixed(2) }} kg·m/s ≡ 
          m_A·v'_An + m_B·v'_Bn = {{ (massA * vAnPrime + massB * vBnPrime).toFixed(2) }} kg·m/s<br/>
          <template v-if="willCollide">
            ✓ Restitution Equation: v'_Bn - v'_An = {{ (vBnPrime - vAnPrime).toFixed(2) }} m/s = e(v_An - v_Bn) = {{ (coeffE * (vAn - vBn)).toFixed(2) }} m/s
          </template>
          <template v-else>
            ⚠ No Collision Occurs: v_An ({{ vAn.toFixed(2) }}) ≤ v_Bn ({{ vBn.toFixed(2) }}) — Sphere A does not overtake Sphere B
          </template>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const impactMode = ref<'direct' | 'oblique'>('direct')
const coeffE = ref(0.75)
const massA = ref(2.0)
const speedA = ref(10.0)
const angleA = ref(0.0)
const massB = ref(3.0)
const speedB = ref(-4.0)
const angleB = ref(0.0)

const isPlaying = ref(false)
const timeOffset = ref(-0.8) // t in [-1, +1], where 0 is contact moment

function switchMode(mode: 'direct' | 'oblique') {
  impactMode.value = mode
  if (mode === 'direct') {
    angleA.value = 0
    angleB.value = 0
  } else {
    angleA.value = 30
    angleB.value = 0
  }
  resetTime()
}

function applyPreset(p: 'elastic' | 'plastic' | 'billiard' | 'truck') {
  if (p === 'elastic') {
    impactMode.value = 'direct'
    coeffE.value = 1.0
    massA.value = 2.0
    massB.value = 2.0
    speedA.value = 10.0
    speedB.value = 0.0
    angleA.value = 0
    angleB.value = 0
  } else if (p === 'plastic') {
    impactMode.value = 'direct'
    coeffE.value = 0.0
    massA.value = 2.0
    massB.value = 3.0
    speedA.value = 12.0
    speedB.value = -4.0
    angleA.value = 0
    angleB.value = 0
  } else if (p === 'billiard') {
    impactMode.value = 'oblique'
    coeffE.value = 0.90
    massA.value = 2.0
    massB.value = 2.0
    speedA.value = 10.0
    speedB.value = 0.0
    angleA.value = 30
    angleB.value = 0
  } else if (p === 'truck') {
    impactMode.value = 'direct'
    coeffE.value = 0.50
    massA.value = 8.0
    massB.value = 1.5
    speedA.value = 8.0
    speedB.value = -6.0
    angleA.value = 0
    angleB.value = 0
  }
  resetTime()
}

function togglePlay() {
  if (timeOffset.value >= 1.0) timeOffset.value = -1.0
  isPlaying.value = !isPlaying.value
}

function resetTime() {
  isPlaying.value = false
  timeOffset.value = -0.8
}

// Math Calculations
const radA = computed(() => (angleA.value * Math.PI) / 180)
const radB = computed(() => (angleB.value * Math.PI) / 180)

// Normal velocities (along horizontal n-axis)
const vAn = computed(() => speedA.value * Math.cos(radA.value))
const vBn = computed(() => speedB.value * Math.cos(radB.value))

// Tangential velocities (along vertical t-axis, preserved for smooth spheres)
const vAt = computed(() => speedA.value * Math.sin(radA.value))
const vBt = computed(() => speedB.value * Math.sin(radB.value))

// Collision only occurs if Sphere A overtakes Sphere B along normal axis (vAn > vBn)
const willCollide = computed(() => vAn.value > vBn.value)

// Post-impact normal velocities (Simultaneous solution)
// v'_An = [(mA - e*mB)*vAn + mB*(1+e)*vBn] / (mA + mB)
// v'_Bn = [mA*(1+e)*vAn + (mB - e*mA)*vBn] / (mA + mB)
const vAnPrime = computed(() => {
  if (!willCollide.value) return vAn.value
  const mA = massA.value
  const mB = massB.value
  const e = coeffE.value
  return ((mA - e * mB) * vAn.value + mB * (1 + e) * vBn.value) / (mA + mB)
})

const vBnPrime = computed(() => {
  if (!willCollide.value) return vBn.value
  const mA = massA.value
  const mB = massB.value
  const e = coeffE.value
  return (mA * (1 + e) * vAn.value + (mB - e * mA) * vBn.value) / (mA + mB)
})

const speedAPrime = computed(() => Math.sqrt(vAnPrime.value ** 2 + vAt.value ** 2))
const speedBPrime = computed(() => Math.sqrt(vBnPrime.value ** 2 + vBt.value ** 2))

// Kinetic Energies
const keInitial = computed(() => {
  return 0.5 * massA.value * speedA.value ** 2 + 0.5 * massB.value * speedB.value ** 2
})

const keFinal = computed(() => {
  return 0.5 * massA.value * speedAPrime.value ** 2 + 0.5 * massB.value * speedBPrime.value ** 2
})

const deltaT = computed(() => {
  if (!willCollide.value) return 0
  return Math.max(0, keInitial.value - keFinal.value)
})
const energyLossPercent = computed(() => {
  if (keInitial.value === 0) return 0
  return (deltaT.value / keInitial.value) * 100
})

// Radius of spheres based on mass
const radiusA = computed(() => Math.min(36, Math.max(20, 16 + Math.sqrt(massA.value) * 6)))
const radiusB = computed(() => Math.min(36, Math.max(20, 16 + Math.sqrt(massB.value) * 6)))

// Canvas Rendering
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animId: number | null = null
let lastNow = 0
let resObs: ResizeObserver | null = null
let logicalW = 700
const logicalH = 360

function draw() {
  if (!ctx || !canvasRef.value) return
  const w = logicalW
  const h = logicalH

  ctx.clearRect(0, 0, w, h)

  // Center Point of Impact
  const contactX = w * 0.48
  const contactY = h * 0.50

  // 1. Line of Impact (n-axis, horizontal) & Plane of Contact (t-axis, vertical)
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)'
  ctx.lineWidth = 1.5
  ctx.setLineDash([5, 4])

  // n-axis
  ctx.beginPath()
  ctx.moveTo(30, contactY)
  ctx.lineTo(w - 30, contactY)
  ctx.stroke()

  // t-axis
  ctx.beginPath()
  ctx.moveTo(contactX, 30)
  ctx.lineTo(contactX, h - 30)
  ctx.stroke()
  ctx.setLineDash([])

  // Axis Labels
  ctx.fillStyle = 'rgba(148, 163, 184, 0.8)'
  ctx.font = 'bold 11px monospace'
  ctx.textAlign = 'right'
  ctx.fillText('Line of Impact (n)', w - 35, contactY - 8)
  ctx.textAlign = 'center'
  ctx.fillText('Plane of Contact (t)', contactX, 22)

  // 2. Positions of Spheres at current timeOffset
  // At timeOffset = 0: Sphere A is at contactX - radiusA, Sphere B is at contactX + radiusB
  const posScale = 160 // pixels per second of displacement
  const t = timeOffset.value

  let posAx = contactX - radiusA.value
  let posAy = contactY
  let posBx = contactX + radiusB.value
  let posBy = contactY

  if (!willCollide.value) {
    posAx = contactX - radiusA.value - 25 + vAn.value * t * posScale * 0.08
    posAy -= vAt.value * t * posScale * 0.08
    posBx = contactX + radiusB.value + 25 + vBn.value * t * posScale * 0.08
    posBy -= vBt.value * t * posScale * 0.08
  } else if (t < 0) {
    // Pre-impact approach
    posAx += vAn.value * t * posScale * 0.08
    posAy -= vAt.value * t * posScale * 0.08
    posBx += vBn.value * t * posScale * 0.08
    posBy -= vBt.value * t * posScale * 0.08
  } else {
    // Post-impact separation
    posAx += vAnPrime.value * t * posScale * 0.08
    posAy -= vAt.value * t * posScale * 0.08
    posBx += vBnPrime.value * t * posScale * 0.08
    posBy -= vBt.value * t * posScale * 0.08
  }

  // Non-colliding warning banner
  if (!willCollide.value) {
    ctx.fillStyle = 'rgba(245, 158, 11, 0.18)'
    ctx.strokeStyle = '#f59e0b'
    ctx.lineWidth = 1.5
    const badgeW = Math.min(w - 40, 390)
    const badgeX = (w - badgeW) / 2
    ctx.fillRect(badgeX, 34, badgeW, 24)
    ctx.strokeRect(badgeX, 34, badgeW, 24)
    ctx.fillStyle = '#fbbf24'
    ctx.font = 'bold 11px monospace'
    ctx.textAlign = 'center'
    ctx.fillText('No Impact: v_An ≤ v_Bn (Sphere A does not overtake B)', w / 2, 50)
  }

  // 3. Impact Flash Ring if close to t = 0
  if (willCollide.value && Math.abs(t) < 0.08) {
    const flashAlpha = 1 - Math.abs(t) / 0.08
    ctx.strokeStyle = `rgba(244, 63, 94, ${flashAlpha})`
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.arc(contactX, contactY, radiusA.value + 12, 0, Math.PI * 2)
    ctx.stroke()

    ctx.fillStyle = `rgba(251, 191, 36, ${flashAlpha * 0.5})`
    ctx.beginPath()
    ctx.arc(contactX, contactY, radiusA.value * 0.6, 0, Math.PI * 2)
    ctx.fill()
  }

  // 4. Draw Spheres
  // Sphere A (Cyan)
  ctx.fillStyle = '#0284c7'
  ctx.beginPath()
  ctx.arc(posAx, posAy, radiusA.value, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = '#38bdf8'
  ctx.lineWidth = 2.5
  ctx.stroke()

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('A', posAx, posAy + 4)
  ctx.font = '9px monospace'
  ctx.fillText(`${massA.value}kg`, posAx, posAy + radiusA.value + 14)

  // Sphere B (Amber)
  ctx.fillStyle = '#b45309'
  ctx.beginPath()
  ctx.arc(posBx, posBy, radiusB.value, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = '#fbbf24'
  ctx.lineWidth = 2.5
  ctx.stroke()

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 11px sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('B', posBx, posBy + 4)
  ctx.font = '9px monospace'
  ctx.fillText(`${massB.value}kg`, posBx, posBy + radiusB.value + 14)

  // 5. Velocity Vectors
  const drawVector = (ox: number, oy: number, vx: number, vy: number, color: string, label: string) => {
    const vScale = 4.0
    const dx = vx * vScale
    const dy = -vy * vScale
    const len = Math.sqrt(dx * dx + dy * dy)
    if (len < 3) return

    ctx!.strokeStyle = color
    ctx!.fillStyle = color
    ctx!.lineWidth = 2.5
    ctx!.beginPath()
    ctx!.moveTo(ox, oy)
    ctx!.lineTo(ox + dx, oy + dy)
    ctx!.stroke()

    const ang = Math.atan2(dy, dx)
    ctx!.beginPath()
    ctx!.moveTo(ox + dx, oy + dy)
    ctx!.lineTo(ox + dx - 7 * Math.cos(ang - 0.4), oy + dy - 7 * Math.sin(ang - 0.4))
    ctx!.lineTo(ox + dx - 7 * Math.cos(ang + 0.4), oy + dy - 7 * Math.sin(ang + 0.4))
    ctx!.closePath()
    ctx!.fill()

    ctx!.font = 'bold 10px monospace'
    ctx!.fillText(label, ox + dx + 8 * Math.cos(ang), oy + dy + 8 * Math.sin(ang))
  }

  if (!willCollide.value || t <= 0) {
    drawVector(posAx, posAy, vAn.value, vAt.value, '#38bdf8', `v_A (${speedA.value.toFixed(1)})`)
    drawVector(posBx, posBy, vBn.value, vBt.value, '#fbbf24', `v_B (${speedB.value.toFixed(1)})`)
  } else {
    drawVector(posAx, posAy, vAnPrime.value, vAt.value, '#ec4899', `v'_A (${speedAPrime.value.toFixed(1)})`)
    drawVector(posBx, posBy, vBnPrime.value, vBt.value, '#10b981', `v'_B (${speedBPrime.value.toFixed(1)})`)
  }
}

// Tick loop
function loop(now: number) {
  if (!lastNow) lastNow = now
  const dt = (now - lastNow) / 1000
  lastNow = now

  if (isPlaying.value) {
    timeOffset.value += dt * 0.7
    if (timeOffset.value >= 1.0) {
      timeOffset.value = 1.0
      isPlaying.value = false
    }
  }

  draw()
  animId = requestAnimationFrame(loop)
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
      draw()
    }
    updateSize()
    if (typeof ResizeObserver !== 'undefined') {
      resObs = new ResizeObserver(updateSize)
      resObs.observe(canvasRef.value)
    }
  }

  animId = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  if (animId) cancelAnimationFrame(animId)
  if (resObs) resObs.disconnect()
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.control-box {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 0.8rem;
}

.control-box.full-width {
  grid-column: 1 / -1;
}

.control-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #0f172a);
}

.control-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.4rem;
  display: inline-block;
}

.a-ind { background: #38bdf8; }
.b-ind { background: #fbbf24; }

.val-chip {
  background: var(--vp-c-bg-elv, #f1f5f9);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.78rem;
}

.val-chip.highlight {
  color: #f43f5e;
  font-weight: 700;
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

.slider-row {
  display: grid;
  grid-template-columns: 80px 1fr 60px;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.slider-sub {
  font-size: 0.78rem;
  color: var(--vp-c-text-2, #64748b);
}

.range-unit {
  font-size: 0.78rem;
  font-family: monospace;
  text-align: right;
  color: var(--vp-c-text-1, #1e293b);
  font-weight: 600;
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
  height: 360px;
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
  border-color: #f43f5e;
  background: rgba(244, 63, 94, 0.04);
}

.dash-card.full-span {
  grid-column: 1 / -1;
  background: var(--vp-c-bg-elv, #f8fafc);
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
  color: #f43f5e;
}

.dash-sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-2, #94a3b8);
  margin-top: 0.25rem;
  line-height: 1.4;
}

.status-verified {
  color: #10b981;
  font-weight: 600;
}
</style>
