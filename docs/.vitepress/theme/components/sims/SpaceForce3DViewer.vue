<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-header-top">
        <div class="sim-badge-group">
          <span class="sim-badge">MODULE 1</span>
          <span class="sim-badge-secondary">FORCES IN SPACE</span>
        </div>
        <button class="ref-toggle-btn" @click="showSlideRef = !showSlideRef">
          📐 {{ showSlideRef ? 'Hide' : 'Show' }} PDF Slide Figure
        </button>
      </div>
      <h3 class="sim-title">3D Space Force & Direction Cosine Visualizer</h3>
      <p class="sim-desc">
        Modeled directly on Dr. Sebin Devasia's 3D Statics figures: explore the rectangular cuboid coordinate system (Slide 26) and the 200-kg cylinder 3D wall-cable equilibrium problem (Slide 28).
      </p>
    </div>

    <!-- Original PDF Slide Figure Reference -->
    <div v-if="showSlideRef" class="slide-ref-panel">
      <div class="slide-ref-img-wrap">
        <img
          :src="withBase(viewerMode === 'cuboid' ? '/images/physics/mod1/mod1_3d_direction_angles.png' : '/images/physics/mod1/mod1_q5_cylinder_3d.png')"
          :alt="viewerMode === 'cuboid' ? 'Slide 26 3D Direction Angles Figure' : 'Slide 28 200-kg Cylinder 3D Equilibrium Figure'"
        />
      </div>
      <div class="slide-ref-info">
        <span class="slide-ref-tag">
          {{ viewerMode === 'cuboid' ? 'Original PDF · Mod 1 Part 2, Slide 26' : 'Original PDF · Mod 1 Part 2, Slide 28' }}
        </span>
        <p v-if="viewerMode === 'cuboid'">
          Coordinate direction angles (θ<sub>x</sub>, θ<sub>y</sub>, θ<sub>z</sub>) define the unit vector <strong>λ</strong> = cos θ<sub>x</sub><strong>i</strong> + cos θ<sub>y</sub><strong>j</strong> + cos θ<sub>z</sub><strong>k</strong> along the diagonal of the 3D force box.
        </p>
        <p v-else>
          A 200-kg yellow cylinder hangs at <strong>A</strong> (1.2 m in front of a 12 m high wall) supported by cables <strong>AB</strong> (8 m side) and <strong>AC</strong> (10 m side) with horizontal pull <strong>P = 235 N</strong>, <strong>T<sub>AB</sub> = 1402 N</strong>, and <strong>T<sub>AC</sub> = 1238 N</strong>.
        </p>
      </div>
    </div>

    <!-- Mode Selector & Camera Tools -->
    <div class="mode-toggles">
      <button 
        class="mode-btn" 
        :class="{ active: viewerMode === 'cuboid' }"
        @click="viewerMode = 'cuboid'"
      >
        <span class="mode-icon">🧊</span> Mode 1: 3D Force Cuboid & Direction Cosines
      </button>
      <button 
        class="mode-btn" 
        :class="{ active: viewerMode === 'cylinder' }"
        @click="viewerMode = 'cylinder'"
      >
        <span class="mode-icon">⚙️</span> Mode 2: Lecture 200-kg Cylinder Equilibrium
      </button>
    </div>

    <!-- 3D Canvas Viewport -->
    <div class="sim-viewport-wrapper">
      <div 
        ref="canvasContainer" 
        class="sim-viewport-3d"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @wheel.prevent="onWheel"
      >
        <!-- Overlay HUD: Camera Helper & Legend -->
        <div class="viewport-hud">
          <div class="hud-item"><span class="axis-pill x-pill">X (Red)</span></div>
          <div class="hud-item"><span class="axis-pill y-pill">Y (Green)</span></div>
          <div class="hud-item"><span class="axis-pill z-pill">Z (Blue)</span></div>
          <button class="hud-btn" @click="resetCamera" title="Reset View">↺ Reset View</button>
        </div>

        <div v-if="webglError" class="webgl-fallback">
          <p>WebGL Hardware Acceleration is unavailable. Displaying 2D Orthographic Projection Fallback.</p>
        </div>
      </div>
    </div>

    <!-- Mode 1 Controls: 3D Force Cuboid -->
    <div v-if="viewerMode === 'cuboid'" class="sim-controls-grid">
      <div class="control-box">
        <div class="control-header">
          <span class="control-indicator x-ind"></span>
          <label>X-Component (F_x)</label>
          <span class="val-chip">{{ fx }} N</span>
        </div>
        <input type="range" min="-500" max="500" step="10" v-model.number="fx" />
        <div class="range-labels"><span>-500 N</span><span>0</span><span>+500 N</span></div>
      </div>

      <div class="control-box">
        <div class="control-header">
          <span class="control-indicator y-ind"></span>
          <label>Y-Component (F_y)</label>
          <span class="val-chip">{{ fy }} N</span>
        </div>
        <input type="range" min="-500" max="500" step="10" v-model.number="fy" />
        <div class="range-labels"><span>-500 N</span><span>0</span><span>+500 N</span></div>
      </div>

      <div class="control-box">
        <div class="control-header">
          <span class="control-indicator z-ind"></span>
          <label>Z-Component (F_z)</label>
          <span class="val-chip">{{ fz }} N</span>
        </div>
        <input type="range" min="-500" max="500" step="10" v-model.number="fz" />
        <div class="range-labels"><span>-500 N</span><span>0</span><span>+500 N</span></div>
      </div>
    </div>

    <!-- Mode 2 Controls: 200-kg Cylinder Preset -->
    <div v-if="viewerMode === 'cylinder'" class="sim-controls-grid">
      <div class="control-box full-width">
        <div class="control-header">
          <span class="control-indicator f-ind"></span>
          <label>Cylinder Mass (m)</label>
          <span class="val-chip highlight">{{ cylinderMass }} kg (W = {{ (cylinderMass * 9.81).toFixed(1) }} N)</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Adjust Mass:</span>
          <input type="range" min="50" max="500" step="10" v-model.number="cylinderMass" />
          <span class="range-unit">{{ cylinderMass }} kg</span>
        </div>
        <div class="preset-links">
          <button class="mini-preset-btn" @click="cylinderMass = 200">Lecture Default (200 kg)</button>
          <button class="mini-preset-btn" @click="cylinderMass = 100">Light (100 kg)</button>
          <button class="mini-preset-btn" @click="cylinderMass = 350">Heavy (350 kg)</button>
        </div>
      </div>
    </div>

    <!-- Mathematical Readout Dashboard -->
    <!-- MODE 1 READOUT -->
    <div v-if="viewerMode === 'cuboid'" class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Resultant Magnitude |F|</span>
        <span class="dash-val highlight">{{ magF.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">F = √(F_x² + F_y² + F_z²)</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">θ_x (from +X)</span>
        <span class="dash-val">{{ thetaX.toFixed(1) }}°</span>
        <span class="dash-sub">cos θ_x = {{ cosThetaX.toFixed(3) }}</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">θ_y (from +Y)</span>
        <span class="dash-val">{{ thetaY.toFixed(1) }}°</span>
        <span class="dash-sub">cos θ_y = {{ cosThetaY.toFixed(3) }}</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">θ_z (from +Z)</span>
        <span class="dash-val">{{ thetaZ.toFixed(1) }}°</span>
        <span class="dash-sub">cos θ_z = {{ cosThetaZ.toFixed(3) }}</span>
      </div>
      <div class="dash-card full-span">
        <span class="dash-label">Unit Vector λ & Direction Cosine Identity Check</span>
        <span class="dash-val mono-small">
          λ = {{ cosThetaX.toFixed(3) }}i + {{ cosThetaY.toFixed(3) }}j + {{ cosThetaZ.toFixed(3) }}k
        </span>
        <span class="dash-sub status-verified">
          ✓ Verification: cos²θ_x + cos²θ_y + cos²θ_z = {{ sumCosSq.toFixed(4) }} ≡ 1.0000
        </span>
      </div>
    </div>

    <!-- MODE 2 READOUT -->
    <div v-if="viewerMode === 'cylinder'" class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Weight Vector (W)</span>
        <span class="dash-val highlight">-{{ weightW.toFixed(1) }} <small>j N</small></span>
        <span class="dash-sub">W = m · g = {{ cylinderMass }} · 9.81</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Cable Tension T_AB</span>
        <span class="dash-val">{{ tabVal.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">AB = 12.86 m (-1.2i + 10j + 8k)</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Cable Tension T_AC</span>
        <span class="dash-val">{{ tacVal.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">AC = 14.19 m (-1.2i + 10j - 10k)</span>
      </div>
      <div class="dash-card">
        <span class="dash-label">Horizontal Pull (P)</span>
        <span class="dash-val">{{ pPullVal.toFixed(1) }} <small>N</small></span>
        <span class="dash-sub">P = (T_AB/12.86 + T_AC/14.19) · 1.2</span>
      </div>
      <div class="dash-card full-span">
        <span class="dash-label">Equilibrium Check (ΣF = 0)</span>
        <span class="dash-sub status-verified">
          ✓ ΣF_z: T_AB(8/12.86) - T_AC(10/14.19) = {{ (tabVal * (8/12.86) - tacVal * (10/14.19)).toFixed(2) }} N ≈ 0<br/>
          ✓ ΣF_y: T_AB(10/12.86) + T_AC(10/14.19) - W = {{ (tabVal * (10/12.86) + tacVal * (10/14.19) - weightW).toFixed(2) }} N ≈ 0<br/>
          ✓ ΣF_x: P - T_AB(1.2/12.86) - T_AC(1.2/14.19) = 0.00 N
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'
import * as THREE from 'three'

const showSlideRef = ref(true)

// Mode & Inputs
const viewerMode = ref<'cuboid' | 'cylinder'>('cylinder')
const fx = ref(300)
const fy = ref(400)
const fz = ref(250)
const cylinderMass = ref(200)

// Math for Mode 1
const magF = computed(() => {
  const m = Math.sqrt(fx.value * fx.value + fy.value * fy.value + fz.value * fz.value)
  return m === 0 ? 0.0001 : m
})

const cosThetaX = computed(() => fx.value / magF.value)
const cosThetaY = computed(() => fy.value / magF.value)
const cosThetaZ = computed(() => fz.value / magF.value)

const thetaX = computed(() => (Math.acos(Math.max(-1, Math.min(1, cosThetaX.value))) * 180) / Math.PI)
const thetaY = computed(() => (Math.acos(Math.max(-1, Math.min(1, cosThetaY.value))) * 180) / Math.PI)
const thetaZ = computed(() => (Math.acos(Math.max(-1, Math.min(1, cosThetaZ.value))) * 180) / Math.PI)

const sumCosSq = computed(() => {
  return cosThetaX.value ** 2 + cosThetaY.value ** 2 + cosThetaZ.value ** 2
})

// Math for Mode 2 (Cylinder Equilibrium)
// From Lecture slide:
// AB = -1.2i + 10j + 8k (len = 12.86 m)
// AC = -1.2i + 10j - 10k (len = 14.19 m)
// sum Fz = 0 => T_AB * (8/12.86) - T_AC * (10/14.19) = 0 => T_AC = T_AB * (8/12.86) / (10/14.19)
// sum Fy = 0 => T_AB * (10/12.86) + T_AC * (10/14.19) = W
// W = m * 9.81
const weightW = computed(() => cylinderMass.value * 9.81)

const tabVal = computed(() => {
  const cZ_B = 8 / 12.8608
  const cZ_C = 10 / 14.1915
  const cY_B = 10 / 12.8608
  const cY_C = 10 / 14.1915
  const factor = cY_B + (cZ_B / cZ_C) * cY_C
  return weightW.value / factor
})

const tacVal = computed(() => {
  const cZ_B = 8 / 12.8608
  const cZ_C = 10 / 14.1915
  return tabVal.value * (cZ_B / cZ_C)
})

const pPullVal = computed(() => {
  const cX_B = 1.2 / 12.8608
  const cX_C = 1.2 / 14.1915
  return tabVal.value * cX_B + tacVal.value * cX_C
})

// Three.js State (SSR Safe: only populated on mounted)
const canvasContainer = ref<HTMLDivElement | null>(null)
const webglError = ref(false)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let animFrameId: number | null = null
let resizeObserver: ResizeObserver | null = null

// Dynamic scene groups
let cuboidGroup: THREE.Group | null = null
let cylinderGroup: THREE.Group | null = null

// Camera Spherical Orbit Parameters
let isDragging = false
let prevPointerX = 0
let prevPointerY = 0
let sphericalTheta = 0.8
let sphericalPhi = 1.1
let sphericalRadius = 700

function updateCameraPos() {
  if (!camera) return
  camera.position.x = sphericalRadius * Math.sin(sphericalPhi) * Math.sin(sphericalTheta)
  camera.position.y = sphericalRadius * Math.cos(sphericalPhi)
  camera.position.z = sphericalRadius * Math.sin(sphericalPhi) * Math.cos(sphericalTheta)
  camera.lookAt(0, 50, 0)
}

function resetCamera() {
  sphericalTheta = 0.8
  sphericalPhi = 1.1
  sphericalRadius = 700
  updateCameraPos()
}

// Pointer event handlers for smooth orbit controls
function onPointerDown(e: PointerEvent) {
  isDragging = true
  prevPointerX = e.clientX
  prevPointerY = e.clientY
  const target = e.currentTarget as HTMLElement
  if (target.setPointerCapture) {
    target.setPointerCapture(e.pointerId)
  }
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging) return
  const dx = e.clientX - prevPointerX
  const dy = e.clientY - prevPointerY
  prevPointerX = e.clientX
  prevPointerY = e.clientY

  sphericalTheta -= dx * 0.008
  sphericalPhi -= dy * 0.008
  // Clamp phi to avoid pole singularity
  sphericalPhi = Math.max(0.1, Math.min(Math.PI - 0.1, sphericalPhi))
  updateCameraPos()
}

function onPointerUp(e: PointerEvent) {
  isDragging = false
  const target = e.currentTarget as HTMLElement
  if (target.releasePointerCapture) {
    try {
      target.releasePointerCapture(e.pointerId)
    } catch {}
  }
}

function onWheel(e: WheelEvent) {
  sphericalRadius += e.deltaY * 0.5
  sphericalRadius = Math.max(200, Math.min(1800, sphericalRadius))
  updateCameraPos()
}

// Building Scene Objects
function createArrow(dir: THREE.Vector3, origin: THREE.Vector3, length: number, color: number, headLength = 18, headWidth = 10): THREE.ArrowHelper {
  return new THREE.ArrowHelper(dir.clone().normalize(), origin, length, color, headLength, headWidth)
}

function buildAxes(): THREE.Group {
  const g = new THREE.Group()
  const axisLen = 350
  
  // X axis (Red)
  g.add(createArrow(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), axisLen, 0xef4444, 20, 10))
  // Y axis (Green)
  g.add(createArrow(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), axisLen, 0x22c55e, 20, 10))
  // Z axis (Blue)
  g.add(createArrow(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), axisLen, 0x3b82f6, 20, 10))

  // Thin negative axes
  const matNeg = new THREE.LineDashedMaterial({ color: 0x64748b, dashSize: 6, gapSize: 4 })
  const addNegAxis = (to: THREE.Vector3) => {
    const geom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), to])
    const line = new THREE.Line(geom, matNeg)
    line.computeLineDistances()
    g.add(line)
  }
  addNegAxis(new THREE.Vector3(-axisLen, 0, 0))
  addNegAxis(new THREE.Vector3(0, -axisLen, 0))
  addNegAxis(new THREE.Vector3(0, 0, -axisLen))

  return g
}

function rebuildCuboid() {
  if (!cuboidGroup || !scene) return
  // Clear existing
  while (cuboidGroup.children.length > 0) {
    const obj = cuboidGroup.children[0]
    cuboidGroup.remove(obj)
    if ((obj as any).geometry) (obj as any).geometry.dispose()
  }

  const X = fx.value * 0.45
  const Y = fy.value * 0.45
  const Z = fz.value * 0.45

  // Wireframe Cuboid
  const corners = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(X, 0, 0),
    new THREE.Vector3(X, Y, 0),
    new THREE.Vector3(0, Y, 0),
    new THREE.Vector3(0, 0, Z),
    new THREE.Vector3(X, 0, Z),
    new THREE.Vector3(X, Y, Z),
    new THREE.Vector3(0, Y, Z)
  ]

  const lineMat = new THREE.LineDashedMaterial({ color: 0x94a3b8, dashSize: 5, gapSize: 3 })
  const edges = [
    [0,1], [1,2], [2,3], [3,0], // front/base
    [4,5], [5,6], [6,7], [7,4], // back/top
    [0,4], [1,5], [2,6], [3,7]  // pillars
  ]

  edges.forEach(([i, j]) => {
    const geom = new THREE.BufferGeometry().setFromPoints([corners[i], corners[j]])
    const line = new THREE.Line(geom, lineMat)
    line.computeLineDistances()
    cuboidGroup!.add(line)
  })

  // Component Arrows
  if (Math.abs(X) > 2) {
    cuboidGroup.add(createArrow(new THREE.Vector3(Math.sign(X), 0, 0), new THREE.Vector3(0, 0, 0), Math.abs(X), 0xef4444, 15, 8))
  }
  if (Math.abs(Y) > 2) {
    cuboidGroup.add(createArrow(new THREE.Vector3(0, Math.sign(Y), 0), new THREE.Vector3(0, 0, 0), Math.abs(Y), 0x22c55e, 15, 8))
  }
  if (Math.abs(Z) > 2) {
    cuboidGroup.add(createArrow(new THREE.Vector3(0, 0, Math.sign(Z)), new THREE.Vector3(0, 0, 0), Math.abs(Z), 0x3b82f6, 15, 8))
  }

  // Resultant Vector F
  const fVec = new THREE.Vector3(X, Y, Z)
  const lenF = fVec.length()
  if (lenF > 2) {
    cuboidGroup.add(createArrow(fVec, new THREE.Vector3(0, 0, 0), lenF, 0xf43f5e, 22, 12))
    
    // Glowing sphere at vector tip
    const tipGeom = new THREE.SphereGeometry(6, 16, 16)
    const tipMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e })
    const tipMesh = new THREE.Mesh(tipGeom, tipMat)
    tipMesh.position.copy(fVec)
    cuboidGroup.add(tipMesh)
  }
}

function rebuildCylinderScene() {
  if (!cylinderGroup || !scene) return
  while (cylinderGroup.children.length > 0) {
    const obj = cylinderGroup.children[0]
    cylinderGroup.remove(obj)
    if ((obj as any).geometry) (obj as any).geometry.dispose()
  }

  // Geometry scale factor for 3D viewport (scale: 1m = 18 units)
  const s = 18
  // Point A (suspension point of cylinder)
  const posA = new THREE.Vector3(0, 0, 0)
  // Wall support points: B(-1.2m, 10m, 8m), C(-1.2m, 10m, -10m)
  const posB = new THREE.Vector3(-1.2 * s, 10 * s, 8 * s)
  const posC = new THREE.Vector3(-1.2 * s, 10 * s, -10 * s)

  // Wall Representation (warm masonry wall matching Slide 28 at X = -1.2 * s)
  const wallGeom = new THREE.BoxGeometry(6, 12 * s, 22 * s)
  const wallMat = new THREE.MeshStandardMaterial({ 
    color: 0xb45309, 
    roughness: 0.78,
    transparent: true,
    opacity: 0.82
  })
  const wallMesh = new THREE.Mesh(wallGeom, wallMat)
  wallMesh.position.set(-1.2 * s - 3, 4 * s, -1 * s)
  cylinderGroup.add(wallMesh)

  // Ground plane at Y = -2 * s (2 m below A, matching Slide 28)
  const floorGeom = new THREE.PlaneGeometry(10 * s, 22 * s)
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.55
  })
  const floorMesh = new THREE.Mesh(floorGeom, floorMat)
  floorMesh.rotation.x = Math.PI / 2
  floorMesh.position.set(2.5 * s, -2 * s, -1 * s)
  cylinderGroup.add(floorMesh)

  // Wall Support Anchors B & C
  const anchorGeom = new THREE.SphereGeometry(6.5, 16, 16)
  const anchorMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, metalness: 0.4, roughness: 0.25 })
  
  const meshB = new THREE.Mesh(anchorGeom, anchorMat)
  meshB.position.copy(posB)
  cylinderGroup.add(meshB)

  const meshC = new THREE.Mesh(anchorGeom, anchorMat)
  meshC.position.copy(posC)
  cylinderGroup.add(meshC)

  // Cable AB & Cable AC
  const cableMatAB = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 3 })
  const geomAB = new THREE.BufferGeometry().setFromPoints([posA, posB])
  cylinderGroup.add(new THREE.Line(geomAB, cableMatAB))

  const cableMatAC = new THREE.LineBasicMaterial({ color: 0xa855f7, linewidth: 3 })
  const geomAC = new THREE.BufferGeometry().setFromPoints([posA, posC])
  cylinderGroup.add(new THREE.Line(geomAC, cableMatAC))

  // Short vertical hanger wire from ring A down to golden-yellow 200-kg cylinder (matching Slide 28)
  const hangerGeom = new THREE.BufferGeometry().setFromPoints([posA, new THREE.Vector3(0, -10, 0)])
  cylinderGroup.add(new THREE.Line(hangerGeom, new THREE.LineBasicMaterial({ color: 0xe2e8f0 })))

  const cylGeom = new THREE.CylinderGeometry(13, 13, 28, 28)
  const cylMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.35, roughness: 0.35 })
  const cylMesh = new THREE.Mesh(cylGeom, cylMat)
  cylMesh.position.set(0, -22, 0)
  cylinderGroup.add(cylMesh)

  // Weight Arrow W (pointing downwards from cylinder)
  const lenW = Math.min(220, Math.max(60, (weightW.value / 1962) * 120))
  cylinderGroup.add(createArrow(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, -32, 0), lenW, 0xef4444, 20, 10))

  // Horizontal Pull Force Arrow P (pointing in +X direction)
  const lenP = Math.min(180, Math.max(40, (pPullVal.value / 235) * 80))
  cylinderGroup.add(createArrow(new THREE.Vector3(1, 0, 0), posA, lenP, 0x10b981, 20, 10))
}

// Watchers to update 3D scene reactively
watch([fx, fy, fz], () => {
  if (viewerMode.value === 'cuboid') rebuildCuboid()
})

watch(cylinderMass, () => {
  if (viewerMode.value === 'cylinder') rebuildCylinderScene()
})

watch(viewerMode, (newMode) => {
  if (!cuboidGroup || !cylinderGroup) return
  if (newMode === 'cuboid') {
    cuboidGroup.visible = true
    cylinderGroup.visible = false
    rebuildCuboid()
  } else {
    cuboidGroup.visible = false
    cylinderGroup.visible = true
    rebuildCylinderScene()
  }
})

// SSR Safe Lifecycle
onMounted(() => {
  if (!canvasContainer.value) return

  try {
    const width = canvasContainer.value.clientWidth || 600
    const height = canvasContainer.value.clientHeight || 420

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0f172a)

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000)
    updateCameraPos()

    // Lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 0.75)
    scene.add(ambLight)

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.9)
    dirLight1.position.set(200, 400, 300)
    scene.add(dirLight1)

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.4)
    dirLight2.position.set(-200, -200, -200)
    scene.add(dirLight2)

    // Axes
    scene.add(buildAxes())

    // Groups
    cuboidGroup = new THREE.Group()
    cylinderGroup = new THREE.Group()
    scene.add(cuboidGroup)
    scene.add(cylinderGroup)

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    canvasContainer.value.appendChild(renderer.domElement)

    // Initial build
    rebuildCuboid()
    rebuildCylinderScene()
    if (viewerMode.value === 'cuboid') {
      cylinderGroup.visible = false
    } else {
      cuboidGroup.visible = false
    }

    // Animation Loop
    const animate = () => {
      animFrameId = requestAnimationFrame(animate)
      if (renderer && scene && camera) {
        renderer.render(scene, camera)
      }
    }
    animate()

    // Responsive Resizing
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver((entries) => {
        if (!entries[0] || !renderer || !camera) return
        const { width: newW, height: newH } = entries[0].contentRect
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH
          camera.updateProjectionMatrix()
          renderer.setSize(newW, newH)
        }
      })
      resizeObserver.observe(canvasContainer.value)
    }
  } catch (err) {
    console.error('Three.js WebGL init failed:', err)
    webglError.value = true
  }
})

onBeforeUnmount(() => {
  if (animFrameId) cancelAnimationFrame(animFrameId)
  if (resizeObserver) resizeObserver.disconnect()
  if (renderer) {
    renderer.dispose()
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
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
  grid-template-columns: minmax(200px, 310px) 1fr;
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

/* 3D Viewport */
.sim-viewport-wrapper {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1.25rem;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.5);
}

.sim-viewport-3d {
  width: 100%;
  height: 420px;
  background: #0f172a;
  cursor: grab;
  touch-action: none;
  position: relative;
}

.sim-viewport-3d:active {
  cursor: grabbing;
}

.viewport-hud {
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: none;
  z-index: 10;
}

.hud-item {
  pointer-events: auto;
}

.axis-pill {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 9999px;
  color: #fff;
}

.x-pill { background: #ef4444; }
.y-pill { background: #22c55e; }
.z-pill { background: #3b82f6; }

.hud-btn {
  margin-left: auto;
  pointer-events: auto;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.4);
  color: #f8fafc;
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  backdrop-filter: blur(4px);
}

.hud-btn:hover {
  background: rgba(30, 41, 59, 0.9);
  border-color: #38bdf8;
}

.webgl-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8fafc;
  padding: 1.5rem;
  text-align: center;
}

/* Controls Grid */
.sim-controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.control-box {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 1rem;
}

.control-box.full-width {
  grid-column: 1 / -1;
}

.control-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #0f172a);
  font-size: 0.9rem;
}

.control-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.4rem;
  display: inline-block;
}

.x-ind { background: #ef4444; }
.y-ind { background: #22c55e; }
.z-ind { background: #3b82f6; }
.f-ind { background: #f43f5e; }

.val-chip {
  background: var(--vp-c-bg-elv, #f1f5f9);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-family: monospace;
  color: var(--vp-c-text-2, #475569);
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

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: var(--vp-c-text-2, #94a3b8);
  margin-top: 0.3rem;
}

.slider-row {
  display: grid;
  grid-template-columns: 100px 1fr 70px;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 0;
}

.slider-sub {
  font-size: 0.82rem;
  color: var(--vp-c-text-2, #64748b);
}

.range-unit {
  font-size: 0.82rem;
  font-family: monospace;
  text-align: right;
  color: var(--vp-c-text-1, #1e293b);
  font-weight: 600;
}

.preset-links {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.mini-preset-btn {
  background: var(--vp-c-bg-elv, #f1f5f9);
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  color: var(--vp-c-text-2, #475569);
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mini-preset-btn:hover {
  border-color: var(--vp-c-brand-1, #0284c7);
  color: var(--vp-c-brand-1, #0284c7);
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

.dash-val.mono-small {
  font-size: 0.95rem;
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
