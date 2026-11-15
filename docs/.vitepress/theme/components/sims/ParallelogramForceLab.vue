<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-badge-group">
        <span class="sim-badge">MODULE 1</span>
        <span class="sim-badge-secondary">STATICS OF PARTICLES</span>
      </div>
      <h3 class="sim-title">Vector Addition & Resolution Lab</h3>
      <p class="sim-desc">
        Explore the Parallelogram Law, Tip-to-Tail Triangle Rule, and the "Invisible Teammates" (Rectangular Components) with Dr. Sebin Devasia's lecture examples.
      </p>
    </div>

    <!-- Presets Bar -->
    <div class="sim-presets">
      <span class="preset-label">Lecture Presets:</span>
      <button 
        v-for="p in presets" 
        :key="p.name" 
        class="preset-btn"
        :class="{ active: currentPreset === p.name }"
        @click="applyPreset(p)"
      >
        {{ p.name }}
      </button>
    </div>

    <!-- Mode Toggles -->
    <div class="mode-toggles">
      <button 
        class="mode-btn" 
        :class="{ active: viewMode === 'parallelogram' }"
        @click="viewMode = 'parallelogram'"
      >
        <span class="mode-icon">▱</span> Parallelogram Law
      </button>
      <button 
        class="mode-btn" 
        :class="{ active: viewMode === 'triangle' }"
        @click="viewMode = 'triangle'"
      >
        <span class="mode-icon">△</span> Triangle Rule (Tip-to-Tail)
      </button>
      <button 
        class="mode-btn" 
        :class="{ active: viewMode === 'components' }"
        @click="viewMode = 'components'"
      >
        <span class="mode-icon">⊞</span> Rectangular Components (F<sub>x</sub>, F<sub>y</sub>)
      </button>
    </div>

    <!-- SVG Viewport -->
    <div class="sim-viewport">
      <svg 
        class="vector-svg" 
        viewBox="-300 -240 600 480" 
        role="img" 
        aria-label="Interactive Vector Addition Diagram"
      >
        <defs>
          <!-- Grid Pattern -->
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148, 163, 184, 0.12)" stroke-width="1" />
          </pattern>
          
          <!-- Arrow Markers -->
          <marker id="arrow-p" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#38bdf8" />
          </marker>
          <marker id="arrow-q" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#fbbf24" />
          </marker>
          <marker id="arrow-r" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ec4899" />
          </marker>
          <marker id="arrow-px" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#60a5fa" />
          </marker>
          <marker id="arrow-py" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#60a5fa" />
          </marker>
          <marker id="arrow-qx" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#f59e0b" />
          </marker>
          <marker id="arrow-qy" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#f59e0b" />
          </marker>
          <marker id="arrow-rx" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#f43f5e" />
          </marker>
          <marker id="arrow-ry" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M 0 0 L 7 3.5 L 0 7 z" fill="#f43f5e" />
          </marker>
        </defs>

        <!-- Background Grid -->
        <rect x="-300" y="-240" width="600" height="480" fill="url(#grid-pattern)" />

        <!-- Coordinate Axes -->
        <line x1="-280" y1="0" x2="280" y2="0" stroke="rgba(148, 163, 184, 0.35)" stroke-width="1.5" />
        <line x1="0" y1="220" x2="0" y2="-220" stroke="rgba(148, 163, 184, 0.35)" stroke-width="1.5" />
        <text x="270" y="-8" fill="rgba(148, 163, 184, 0.7)" font-size="12" font-family="monospace">+X</text>
        <text x="8" y="-205" fill="rgba(148, 163, 184, 0.7)" font-size="12" font-family="monospace">+Y</text>
        <circle cx="0" cy="0" r="3.5" fill="var(--vp-c-brand-1, #38bdf8)" />
        <text x="-16" y="18" fill="rgba(148, 163, 184, 0.8)" font-size="12" font-weight="bold">O</text>

        <!-- Angle Arcs -->
        <path :d="arcP" fill="none" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1.5" stroke-dasharray="3,3" />
        <path :d="arcQ" fill="none" stroke="rgba(251, 191, 36, 0.4)" stroke-width="1.5" stroke-dasharray="3,3" />
        <path :d="arcR" fill="none" stroke="rgba(236, 72, 153, 0.4)" stroke-width="2" />

        <!-- MODE 1: PARALLELOGRAM LAW -->
        <g v-if="viewMode === 'parallelogram'">
          <!-- Ghost parallelogram lines -->
          <line 
            :x1="svgP.x" :y1="svgP.y" 
            :x2="svgR.x" :y2="svgR.y" 
            stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.65" 
          />
          <line 
            :x1="svgQ.x" :y1="svgQ.y" 
            :x2="svgR.x" :y2="svgR.y" 
            stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.65" 
          />
          <!-- Vector P from origin -->
          <line 
            x1="0" y1="0" 
            :x2="svgP.x" :y2="svgP.y" 
            stroke="#38bdf8" stroke-width="3.5" marker-end="url(#arrow-p)" 
          />
          <!-- Vector Q from origin -->
          <line 
            x1="0" y1="0" 
            :x2="svgQ.x" :y2="svgQ.y" 
            stroke="#fbbf24" stroke-width="3.5" marker-end="url(#arrow-q)" 
          />
          <!-- Resultant R from origin -->
          <line 
            x1="0" y1="0" 
            :x2="svgR.x" :y2="svgR.y" 
            stroke="#ec4899" stroke-width="4.5" marker-end="url(#arrow-r)" 
          />
          
          <!-- Vector Labels -->
          <text :x="svgP.x * 0.5 - 12" :y="svgP.y * 0.5 - 10" fill="#38bdf8" font-size="14" font-weight="bold">P</text>
          <text :x="svgQ.x * 0.5 + 10" :y="svgQ.y * 0.5 - 10" fill="#fbbf24" font-size="14" font-weight="bold">Q</text>
          <text :x="svgR.x + 12" :y="svgR.y - 8" fill="#ec4899" font-size="16" font-weight="bold">R</text>
        </g>

        <!-- MODE 2: TRIANGLE RULE (TIP-TO-TAIL) -->
        <g v-if="viewMode === 'triangle'">
          <!-- Vector P from origin -->
          <line 
            x1="0" y1="0" 
            :x2="svgP.x" :y2="svgP.y" 
            stroke="#38bdf8" stroke-width="3.5" marker-end="url(#arrow-p)" 
          />
          <!-- Vector Q placed at tip of P -->
          <line 
            :x1="svgP.x" :y1="svgP.y" 
            :x2="svgR.x" :y2="svgR.y" 
            stroke="#fbbf24" stroke-width="3.5" marker-end="url(#arrow-q)" 
          />
          <!-- Resultant R from tail of P to tip of Q -->
          <line 
            x1="0" y1="0" 
            :x2="svgR.x" :y2="svgR.y" 
            stroke="#ec4899" stroke-width="4.5" marker-end="url(#arrow-r)" 
          />
          
          <!-- Tip-to-Tail Guide Point -->
          <circle :cx="svgP.x" :cy="svgP.y" r="4" fill="#38bdf8" />
          
          <!-- Vector Labels -->
          <text :x="svgP.x * 0.5 - 12" :y="svgP.y * 0.5 - 10" fill="#38bdf8" font-size="14" font-weight="bold">P</text>
          <text :x="(svgP.x + svgR.x)*0.5 + 10" :y="(svgP.y + svgR.y)*0.5 - 8" fill="#fbbf24" font-size="14" font-weight="bold">Q (shifted)</text>
          <text :x="svgR.x * 0.5 - 15" :y="svgR.y * 0.5 + 15" fill="#ec4899" font-size="16" font-weight="bold">R</text>
        </g>

        <!-- MODE 3: RECTANGULAR COMPONENTS -->
        <g v-if="viewMode === 'components'">
          <!-- P components (projection lines) -->
          <line :x1="svgP.x" :y1="0" :x2="svgP.x" :y2="svgP.y" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
          <line :x1="0" :y1="svgP.y" :x2="svgP.x" :y2="svgP.y" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
          <line x1="0" y1="0" :x2="svgP.x" y2="0" stroke="#60a5fa" stroke-width="3" marker-end="url(#arrow-px)" opacity="0.8" />
          <line x1="0" y1="0" x2="0" :y2="svgP.y" stroke="#60a5fa" stroke-width="3" marker-end="url(#arrow-py)" opacity="0.8" />

          <!-- Q components (projection lines) -->
          <line :x1="svgQ.x" :y1="0" :x2="svgQ.x" :y2="svgQ.y" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
          <line :x1="0" :y1="svgQ.y" :x2="svgQ.x" :y2="svgQ.y" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
          <line x1="0" y1="0" :x2="svgQ.x" y2="0" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-qx)" opacity="0.8" />
          <line x1="0" y1="0" x2="0" :y2="svgQ.y" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow-qy)" opacity="0.8" />

          <!-- Combined R components -->
          <line :x1="svgR.x" :y1="0" :x2="svgR.x" :y2="svgR.y" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.7" />
          <line :x1="0" :y1="svgR.y" :x2="svgR.x" :y2="svgR.y" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.7" />
          <line x1="0" y1="0" :x2="svgR.x" y2="0" stroke="#f43f5e" stroke-width="4" marker-end="url(#arrow-rx)" />
          <line x1="0" y1="0" x2="0" :y2="svgR.y" stroke="#f43f5e" stroke-width="4" marker-end="url(#arrow-ry)" />

          <!-- Resultant vector -->
          <line x1="0" y1="0" :x2="svgR.x" :y2="svgR.y" stroke="#ec4899" stroke-width="4" marker-end="url(#arrow-r)" />

          <!-- Component Labels -->
          <text :x="svgR.x * 0.5" y="20" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">R_x</text>
          <text x="-25" :y="svgR.y * 0.5" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">R_y</text>
        </g>
      </svg>
    </div>

    <!-- Interactive Parameter Controls -->
    <div class="sim-controls-grid">
      <!-- Force P Card -->
      <div class="control-box force-p-box">
        <div class="control-header">
          <span class="control-indicator p-ind"></span>
          <label>Force P</label>
          <span class="val-chip">{{ forceP }} N @ {{ angleP }}°</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Magnitude:</span>
          <input type="range" min="50" max="1000" step="10" v-model.number="forceP" />
          <span class="range-unit">{{ forceP }} N</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Angle θ_P:</span>
          <input type="range" min="0" max="360" step="1" v-model.number="angleP" />
          <span class="range-unit">{{ angleP }}°</span>
        </div>
      </div>

      <!-- Force Q Card -->
      <div class="control-box force-q-box">
        <div class="control-header">
          <span class="control-indicator q-ind"></span>
          <label>Force Q</label>
          <span class="val-chip">{{ forceQ }} N @ {{ angleQ }}°</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Magnitude:</span>
          <input type="range" min="50" max="1000" step="10" v-model.number="forceQ" />
          <span class="range-unit">{{ forceQ }} N</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Angle θ_Q:</span>
          <input type="range" min="0" max="360" step="1" v-model.number="angleQ" />
          <span class="range-unit">{{ angleQ }}°</span>
        </div>
      </div>
    </div>

    <!-- Mathematical Readout Dashboard -->
    <div class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Resultant Magnitude (R)</span>
        <span class="dash-val highlight">{{ resultR.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">R = √(R_x² + R_y²) = {{ resultRGeo.toFixed(1) }} N</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Resultant Direction (α)</span>
        <span class="dash-val">{{ resultAlpha.toFixed(1) }}°</span>
        <span class="dash-sub">measured CCW from +X axis</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Horizontal Sum (R_x)</span>
        <span class="dash-val">{{ rx.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">P_x ({{ px.toFixed(1) }}) + Q_x ({{ qx.toFixed(1) }})</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Vertical Sum (R_y)</span>
        <span class="dash-val">{{ ry.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">P_y ({{ py.toFixed(1) }}) + Q_y ({{ qy.toFixed(1) }})</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// State variables
const forceP = ref(600)
const angleP = ref(0)
const forceQ = ref(800)
const angleQ = ref(90)
const viewMode = ref<'parallelogram' | 'triangle' | 'components'>('parallelogram')
const currentPreset = ref<string>('Perpendicular (90°)')

interface Preset {
  name: string
  p: number
  angP: number
  q: number
  angQ: number
  mode?: 'parallelogram' | 'triangle' | 'components'
}

const presets: Preset[] = [
  { name: 'Perpendicular (90°)', p: 600, angP: 0, q: 800, angQ: 90 },
  { name: 'Collinear Max (0°)', p: 500, angP: 30, q: 500, angQ: 30 },
  { name: 'Opposing Min (180°)', p: 700, angP: 45, q: 400, angQ: 225 },
  { name: 'Lecture Bolt (145°)', p: 800, angP: 145, q: 600, angQ: 45, mode: 'components' }
]

function applyPreset(p: Preset) {
  currentPreset.value = p.name
  forceP.value = p.p
  angleP.value = p.angP
  forceQ.value = p.q
  angleQ.value = p.angQ
  if (p.mode) {
    viewMode.value = p.mode
  }
}

// Math calculations
const radP = computed(() => (angleP.value * Math.PI) / 180)
const radQ = computed(() => (angleQ.value * Math.PI) / 180)

const px = computed(() => forceP.value * Math.cos(radP.value))
const py = computed(() => forceP.value * Math.sin(radP.value))

const qx = computed(() => forceQ.value * Math.cos(radQ.value))
const qy = computed(() => forceQ.value * Math.sin(radQ.value))

const rx = computed(() => px.value + qx.value)
const ry = computed(() => py.value + qy.value)

const resultR = computed(() => Math.sqrt(rx.value * rx.value + ry.value * ry.value))

// Geometric Law of Cosines check: R = sqrt(P^2 + Q^2 + 2PQ cos(theta_Q - theta_P))
const resultRGeo = computed(() => {
  const dTheta = radQ.value - radP.value
  const val = forceP.value * forceP.value + forceQ.value * forceQ.value + 2 * forceP.value * forceQ.value * Math.cos(dTheta)
  return Math.sqrt(Math.max(0, val))
})

const resultAlpha = computed(() => {
  let deg = (Math.atan2(ry.value, rx.value) * 180) / Math.PI
  if (deg < 0) deg += 360
  return deg
})

// Dynamic SVG scaling: fit vectors inside max radius of 190 SVG units
const scale = computed(() => {
  const maxR = Math.max(resultR.value, forceP.value, forceQ.value, 100)
  return 180 / maxR
})

// Screen coords (Note: SVG Y is inverted: y_screen = -y_math)
const svgP = computed(() => ({
  x: px.value * scale.value,
  y: -py.value * scale.value
}))

const svgQ = computed(() => ({
  x: qx.value * scale.value,
  y: -qy.value * scale.value
}))

const svgR = computed(() => ({
  x: rx.value * scale.value,
  y: -ry.value * scale.value
}))

// Angle arcs
function makeArc(radius: number, startDeg: number, endDeg: number): string {
  if (Math.abs(startDeg - endDeg) < 0.1) return ''
  const startRad = (startDeg * Math.PI) / 180
  const endRad = (endDeg * Math.PI) / 180
  const x1 = radius * Math.cos(startRad)
  const y1 = -radius * Math.sin(startRad)
  const x2 = radius * Math.cos(endRad)
  const y2 = -radius * Math.sin(endRad)
  const diff = (endDeg - startDeg + 360) % 360
  const largeArc = diff > 180 ? 1 : 0
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 0 ${x2} ${y2}`
}

const arcP = computed(() => makeArc(40, 0, angleP.value))
const arcQ = computed(() => makeArc(55, 0, angleQ.value))
const arcR = computed(() => makeArc(70, 0, resultAlpha.value))
</script>

<style scoped>
.sim-card {
  background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid var(--vp-c-divider, rgba(226, 232, 240, 0.8));
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  font-family: inherit;
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

/* Mode Toggles */
.mode-toggles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.mode-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.55rem 0.8rem;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  color: var(--vp-c-text-2, #475569);
  font-size: 0.85rem;
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

.mode-icon {
  font-size: 1rem;
}

/* Viewport */
.sim-viewport {
  background: #0f172a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 1.25rem;
}

.vector-svg {
  width: 100%;
  height: auto;
  max-height: 380px;
  display: block;
}

/* Controls Grid */
.sim-controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.control-box {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 1rem;
}

.control-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #0f172a);
  font-size: 0.95rem;
}

.control-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.4rem;
  display: inline-block;
}

.p-ind { background: #38bdf8; }
.q-ind { background: #fbbf24; }

.val-chip {
  background: var(--vp-c-bg-elv, #f1f5f9);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: monospace;
  color: var(--vp-c-text-2, #475569);
}

.slider-row {
  display: grid;
  grid-template-columns: 90px 1fr 60px;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.slider-sub {
  font-size: 0.8rem;
  color: var(--vp-c-text-2, #64748b);
}

.slider-row input[type="range"] {
  width: 100%;
  cursor: pointer;
  accent-color: var(--vp-c-brand-1, #0284c7);
}

.range-unit {
  font-size: 0.8rem;
  font-family: monospace;
  text-align: right;
  color: var(--vp-c-text-1, #1e293b);
  font-weight: 500;
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

.dash-card.result-main {
  border-color: #ec4899;
  background: rgba(236, 72, 153, 0.05);
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
  color: #ec4899;
}

.dash-sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-2, #94a3b8);
  margin-top: 0.25rem;
}
</style>
