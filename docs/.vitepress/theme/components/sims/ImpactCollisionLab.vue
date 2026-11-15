<template>
  <div class="sim-card">
    <div class="sim-header">
      <div class="sim-header-top">
        <div class="sim-badge-group">
          <span class="sim-badge">MODULE 5</span>
          <span class="sim-badge-secondary">SECTIONS 13.4A &amp; 13.4B · IMPACT</span>
        </div>
        <button class="ref-toggle-btn" @click="showTextbookRef = !showTextbookRef">
          📖 {{ showTextbookRef ? 'Hide' : 'Show' }} Textbook Figure
        </button>
      </div>
      <h3 class="sim-title">Central &amp; Constrained Impact Laboratory</h3>
      <p class="sim-desc">
        Explore Beer &amp; Johnston's four canonical impact problems (pp. 883–888): 3-stage deformation &amp; restitution in <strong>Direct Central Impact</strong>, tangential preservation in <strong>Oblique Central Impact</strong>, floor-reaction impulses in <strong>Constrained Wedge-Block Impact</strong>, and <strong>Stroboscopic Restitution Arches</strong>.
      </p>
    </div>

    <!-- Collapsible Dynamic Beer & Johnston Textbook Reference Card -->
    <div v-if="showTextbookRef" class="slide-ref-panel">
      <div class="slide-ref-images" :class="{ single: impactMode === 'bounce' }">
        <template v-if="impactMode === 'direct'">
          <figure class="ref-fig-box">
            <img
              :src="withBase('/images/physics/mod5/mod5_fig13_21_three_stages_impact.png')"
              alt="Fig. 13.21 Three stages of direct central impact"
            />
            <figcaption>Fig. 13.21 · Three Stages (<em>v</em><sub>A</sub>, <em>u</em>, <em>v</em>′<sub>A</sub>)</figcaption>
          </figure>
          <figure class="ref-fig-box">
            <img
              :src="withBase('/images/physics/mod5/mod5_fig13_22_deformation_restitution.png')"
              alt="Fig. 13.22 Period of deformation and period of restitution impulses"
            />
            <figcaption>Fig. 13.22 · ∫<em>P dt</em> &amp; ∫<em>R dt</em> Impulses</figcaption>
          </figure>
        </template>

        <template v-else-if="impactMode === 'oblique'">
          <figure class="ref-fig-box">
            <img
              :src="withBase('/images/physics/mod5/mod5_fig13_23_oblique_velocities.png')"
              alt="Fig. 13.23 Oblique central impact velocities along n and t axes"
            />
            <figcaption>Fig. 13.23 · Line of Impact (<em>n</em>) &amp; Plane (<em>t</em>)</figcaption>
          </figure>
          <figure class="ref-fig-box">
            <img
              :src="withBase('/images/physics/mod5/mod5_fig13_24_oblique_impulse_diagram.png')"
              alt="Fig. 13.24 Oblique impact impulse-momentum diagram"
            />
            <figcaption>Fig. 13.24 · Internal Normal Impulse ±<strong>F</strong>Δ<em>t</em></figcaption>
          </figure>
        </template>

        <template v-else-if="impactMode === 'constrained'">
          <figure class="ref-fig-box">
            <img
              :src="withBase('/images/physics/mod5/mod5_fig13_25_constrained_block_ball.png')"
              alt="Fig. 13.25 Constrained wooden wedge block A on rollers struck by sphere B"
            />
            <figcaption>Fig. 13.25 · Constrained Block <em>A</em> &amp; Sphere <em>B</em></figcaption>
          </figure>
          <figure class="ref-fig-box">
            <img
              :src="withBase('/images/physics/mod5/mod5_fig13_26_constrained_impulse_diagram.png')"
              alt="Fig. 13.26 Constrained impact impulse-momentum diagram showing vertical floor impulse"
            />
            <figcaption>Fig. 13.26 · Floor Reaction Impulse <strong>F</strong><sub>ext</sub>Δ<em>t</em></figcaption>
          </figure>
        </template>

        <template v-else>
          <figure class="ref-fig-box">
            <img
              :src="withBase('/images/physics/mod5/mod5_photo13_5_tennis_ball_bounce.png')"
              alt="Photo 13.5 Stroboscopic photograph of a bouncing tennis ball"
            />
            <figcaption>Photo 13.5 · Stroboscopic Bouncing Tennis Ball</figcaption>
          </figure>
        </template>
      </div>

      <div class="slide-ref-info">
        <template v-if="impactMode === 'direct'">
          <span class="slide-ref-tag">Beer &amp; Johnston · Section 13.4A, Figs. 13.21 &amp; 13.22 (pp. 883–884)</span>
          <p>
            During <strong>Direct Central Impact</strong>, contact splits into two sub-intervals: (a) the <em>period of deformation</em> (impulse ∫<strong>P</strong> <em>dt</em>) ending at maximum elastic/plastic flattening where both spheres move at instantaneous <strong>common velocity <em>u</em> = (<em>m</em><sub>A</sub><em>v</em><sub>A</sub> + <em>m</em><sub>B</sub><em>v</em><sub>B</sub>)/(<em>m</em><sub>A</sub> + <em>m</em><sub>B</sub>)</strong>, followed by (b) the <em>period of restitution</em> (impulse ∫<strong>R</strong> <em>dt</em> = <em>e</em> ∫<strong>P</strong> <em>dt</em>), yielding relative separation <strong><em>v</em>′<sub>B</sub> − <em>v</em>′<sub>A</sub> = <em>e</em>(<em>v</em><sub>A</sub> − <em>v</em><sub>B</sub>)</strong>.
          </p>
        </template>

        <template v-else-if="impactMode === 'oblique'">
          <span class="slide-ref-tag">Beer &amp; Johnston · Section 13.4B, Figs. 13.23 &amp; 13.24 (pp. 886–887)</span>
          <p>
            For smooth frictionless spheres in <strong>Oblique Central Impact</strong>, the internal impulsive forces ±<strong>F</strong>Δ<em>t</em> act strictly along the <strong>Line of Impact (<em>n</em>)</strong>. Each sphere's momentum perpendicular to <em>n</em> is unchanged, preserving tangential components <strong>(<em>v</em>′<sub>A</sub>)<sub>t</sub> = (<em>v</em><sub>A</sub>)<sub>t</sub></strong> and <strong>(<em>v</em>′<sub>B</sub>)<sub>t</sub> = (<em>v</em><sub>B</sub>)<sub>t</sub></strong> while normal components obey linear momentum conservation and restitution.
          </p>
        </template>

        <template v-else-if="impactMode === 'constrained'">
          <span class="slide-ref-tag">Beer &amp; Johnston · Section 13.4B, Figs. 13.25 &amp; 13.26 (pp. 887–888)</span>
          <p>
            Wooden wedge-block <strong>A</strong> rolls strictly horizontally on smooth rollers while bronze ball <strong>B</strong> strikes its inclined face (outward normal <em>n</em> at angle θ above +<em>x</em>). Because the floor exerts a vertical impulsive reaction <strong>F</strong><sub>ext</sub>Δ<em>t</em>, vertical momentum is <em>not</em> conserved, leaving 3 exact equations: <strong>(1)</strong> Ball <em>t</em>-momentum (<em>v</em>′<sub>B</sub>)<sub>t</sub> = (<em>v</em><sub>B</sub>)<sub>t</sub> (Eq. 13.50), <strong>(2)</strong> Normal restitution (<em>v</em>′<sub>B</sub>)<sub>n</sub> − <em>v</em>′<sub>A</sub> cos θ = <em>e</em>(<em>v</em><sub>A</sub> cos θ − (<em>v</em><sub>B</sub>)<sub>n</sub>) (Eq. 13.49), and <strong>(3)</strong> System horizontal <em>x</em>-momentum (Eq. 13.51).
          </p>
        </template>

        <template v-else>
          <span class="slide-ref-tag">Beer &amp; Johnston · Section 13.4A, Photo 13.5 (p. 885)</span>
          <p>
            A tennis ball dropped from height <em>h</em><sub>0</sub> with horizontal speed <em>v</em><sub>x0</sub> onto a massive stationary floor (<em>v</em><sub>floor</sub> = 0) rebounds vertically with <em>v</em>′<sub>y</sub> = <em>e</em>|<em>v</em><sub>y</sub>| at each bounce while retaining <em>v</em><sub>x0</sub>. Successive parabolic arches peak at <strong><em>h</em><sub>1</sub> = <em>e</em><sup>2</sup><em>h</em><sub>0</sub></strong>, <strong><em>h</em><sub>2</sub> = <em>e</em><sup>4</sup><em>h</em><sub>0</sub></strong>, <strong><em>h</em><sub>3</sub> = <em>e</em><sup>6</sup><em>h</em><sub>0</sub></strong>, allowing optical measurement of restitution via <strong><em>e</em> = √(<em>h</em><sub>k+1</sub> / <em>h</em><sub>k</sub>)</strong>.
          </p>
        </template>
      </div>
    </div>

    <!-- 4-Mode Selector -->
    <div class="mode-toggles">
      <button
        class="mode-btn"
        :class="{ active: impactMode === 'direct' }"
        @click="switchMode('direct')"
      >
        <span class="mode-icon">💥</span> Direct Central Impact
      </button>
      <button
        class="mode-btn"
        :class="{ active: impactMode === 'oblique' }"
        @click="switchMode('oblique')"
      >
        <span class="mode-icon">🎱</span> Oblique Central Impact
      </button>
      <button
        class="mode-btn"
        :class="{ active: impactMode === 'constrained' }"
        @click="switchMode('constrained')"
      >
        <span class="mode-icon">📐</span> Constrained Block &amp; Ball
      </button>
      <button
        class="mode-btn"
        :class="{ active: impactMode === 'bounce' }"
        @click="switchMode('bounce')"
      >
        <span class="mode-icon">🎾</span> Stroboscopic Tennis Ball
      </button>
    </div>

    <!-- Context-Aware Presets -->
    <div class="sim-presets">
      <span class="preset-label">Presets:</span>
      <template v-if="impactMode === 'direct' || impactMode === 'oblique'">
        <button class="preset-btn" @click="applyPreset('elastic')">
          Elastic Velocity Swap (<em>e</em> = 1.0, <em>m</em><sub>A</sub> = <em>m</em><sub>B</sub>)
        </button>
        <button class="preset-btn" @click="applyPreset('plastic')">
          Perfect Plastic Stick (<em>e</em> = 0.0, Max Δ<em>T</em>)
        </button>
        <button class="preset-btn" @click="applyPreset('billiard')">
          Oblique Billiard Cut (<em>e</em> = 0.90, θ<sub>A</sub> = 30°)
        </button>
        <button class="preset-btn" @click="applyPreset('truck')">
          Heavy Sphere vs Light (<em>m</em><sub>A</sub> = 8 kg, <em>m</em><sub>B</sub> = 1.5 kg)
        </button>
      </template>

      <template v-else-if="impactMode === 'constrained'">
        <button class="preset-btn" @click="applyConstrainedPreset('textbook')">
          Figs. 13.25–13.26 Default (θ = 35°, <em>m</em><sub>A</sub> = 6 kg, <em>e</em> = 0.75)
        </button>
        <button class="preset-btn" @click="applyConstrainedPreset('stationary')">
          Stationary Wedge Rebound (<em>v</em><sub>A</sub> = 0, θ = 40°, <em>e</em> = 0.85)
        </button>
        <button class="preset-btn" @click="applyConstrainedPreset('elastic_wedge')">
          Elastic Workless Floor Check (<em>e</em> = 1.0, Δ<em>T</em> = 0)
        </button>
        <button class="preset-btn" @click="applyConstrainedPreset('plastic_slide')">
          Plastic Wedge Slide (<em>e</em> = 0.0)
        </button>
      </template>

      <template v-else>
        <button class="preset-btn" @click="applyBouncePreset('photo13_5')">
          Photo 13.5 Tennis Ball (<em>h</em><sub>0</sub> = 2.0 m, <em>e</em> = 0.75)
        </button>
        <button class="preset-btn" @click="applyBouncePreset('superball')">
          High-Elasticity Superball (<em>e</em> = 0.90)
        </button>
        <button class="preset-btn" @click="applyBouncePreset('deadball')">
          Cold Damped Tennis Ball (<em>e</em> = 0.52)
        </button>
      </template>
    </div>

    <!-- Playback & Timeline Scrub Bar -->
    <div v-if="impactMode !== 'bounce'" class="playback-bar">
      <button class="play-btn" @click="togglePlay">
        {{ isPlaying ? '⏸ Pause' : '▶ Animate Impact' }}
      </button>
      <button class="action-btn contact-btn" @click="snapToContact">
        🎯 Contact (<em>t</em> = 0)
      </button>
      <button class="action-btn" @click="resetTime">↺ Reset</button>

      <div class="time-slider-wrapper">
        <span class="time-label">
          Timeline: <strong>{{ timeOffset.toFixed(2) }} s</strong> (0.00 = Max Deformation)
        </span>
        <input
          type="range"
          min="-1.0"
          max="1.0"
          step="0.01"
          v-model.number="timeOffset"
          @input="isPlaying = false"
        />
      </div>
    </div>

    <div v-else class="playback-bar">
      <button class="play-btn" @click="toggleBouncePlay">
        {{ isPlaying ? '⏸ Pause' : '▶ Animate Strobe Drop' }}
      </button>
      <button class="action-btn contact-btn" @click="showFullStrobe">
        📸 Full Exposure
      </button>
      <button class="action-btn" @click="resetBounceStart">↺ t = 0</button>

      <div class="time-slider-wrapper">
        <span class="time-label">
          Strobe Time: <strong>{{ bounceTime.toFixed(2) }} s</strong> / {{ bounceTotalTime.toFixed(2) }} s
        </span>
        <input
          type="range"
          min="0"
          :max="bounceTotalTime"
          step="0.01"
          v-model.number="bounceTime"
          @input="isPlaying = false"
        />
      </div>
    </div>

    <!-- ================= CONTROLS: MODES 1 & 2 (DIRECT / OBLIQUE) ================= -->
    <div v-if="impactMode === 'direct' || impactMode === 'oblique'" class="sim-controls-grid">
      <div class="control-box full-width">
        <div class="control-header">
          <label>Coefficient of Restitution (<em>e</em>)</label>
          <span class="val-chip highlight">
            e = {{ coeffE.toFixed(2) }}
            ({{ coeffE === 1 ? 'Perfectly Elastic' : coeffE === 0 ? 'Perfectly Plastic' : 'Inelastic' }})
          </span>
        </div>
        <input type="range" min="0.00" max="1.00" step="0.05" v-model.number="coeffE" />
        <div class="range-labels">
          <span>0.00 (Stick / Max Loss)</span>
          <span>e = ∫R dt / ∫P dt = (v′_Bn − v′_An) / (v_An − v_Bn)</span>
          <span>1.00 (Elastic / ΔT = 0)</span>
        </div>
      </div>

      <!-- Sphere A Controls -->
      <div class="control-box">
        <div class="control-header">
          <span><span class="control-indicator bronze-a-ind"></span>Sphere A: Mass (<em>m</em><sub>A</sub>)</span>
          <span class="val-chip">{{ massA.toFixed(1) }} kg</span>
        </div>
        <input type="range" min="0.5" max="10" step="0.5" v-model.number="massA" />
        <div class="slider-row">
          <span class="slider-sub">Speed <em>v</em><sub>A</sub>:</span>
          <input type="range" min="2" max="20" step="1" v-model.number="speedA" />
          <span class="range-unit">{{ speedA }} m/s</span>
        </div>
        <div v-if="impactMode === 'oblique'" class="slider-row">
          <span class="slider-sub">Angle θ<sub>A</sub>:</span>
          <input type="range" min="-60" max="60" step="5" v-model.number="angleA" />
          <span class="range-unit">{{ angleA }}°</span>
        </div>
      </div>

      <!-- Sphere B Controls -->
      <div class="control-box">
        <div class="control-header">
          <span><span class="control-indicator bronze-b-ind"></span>Sphere B: Mass (<em>m</em><sub>B</sub>)</span>
          <span class="val-chip">{{ massB.toFixed(1) }} kg</span>
        </div>
        <input type="range" min="0.5" max="10" step="0.5" v-model.number="massB" />
        <div class="slider-row">
          <span class="slider-sub">Vel <em>v</em><sub>B</sub>:</span>
          <input type="range" min="-10" max="10" step="1" v-model.number="speedB" />
          <span class="range-unit">{{ speedB }} m/s</span>
        </div>
        <div v-if="impactMode === 'oblique'" class="slider-row">
          <span class="slider-sub">Angle θ<sub>B</sub>:</span>
          <input type="range" min="-60" max="60" step="5" v-model.number="angleB" />
          <span class="range-unit">{{ angleB }}°</span>
        </div>
      </div>
    </div>

    <!-- ================= CONTROLS: MODE 3 (CONSTRAINED BLOCK & BALL) ================= -->
    <div v-else-if="impactMode === 'constrained'" class="sim-controls-grid">
      <div class="control-box">
        <div class="control-header">
          <label>Wedge Normal Angle (θ) &amp; Restitution (<em>e</em>)</label>
          <span class="val-chip highlight">θ = {{ wedgeTheta }}° | e = {{ coeffE.toFixed(2) }}</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Normal θ:</span>
          <input type="range" min="20" max="60" step="1" v-model.number="wedgeTheta" />
          <span class="range-unit">{{ wedgeTheta }}°</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Restit. <em>e</em>:</span>
          <input type="range" min="0.00" max="1.00" step="0.05" v-model.number="coeffE" />
          <span class="range-unit">{{ coeffE.toFixed(2) }}</span>
        </div>
      </div>

      <div class="control-box">
        <div class="control-header">
          <span><span class="control-indicator wood-ind"></span>Wooden Block A (Rollers)</span>
          <span class="val-chip">{{ blockMassA.toFixed(1) }} kg</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Mass <em>m</em><sub>A</sub>:</span>
          <input type="range" min="1.0" max="15.0" step="0.5" v-model.number="blockMassA" />
          <span class="range-unit">{{ blockMassA.toFixed(1) }} kg</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Horiz <em>v</em><sub>A</sub>:</span>
          <input type="range" min="-8.0" max="10.0" step="0.5" v-model.number="blockVelA" />
          <span class="range-unit">{{ blockVelA.toFixed(1) }} m/s</span>
        </div>
      </div>

      <div class="control-box">
        <div class="control-header">
          <span><span class="control-indicator bronze-b-ind"></span>Bronze Sphere B (Incoming)</span>
          <span class="val-chip">{{ ballMassB.toFixed(1) }} kg</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Mass <em>m</em><sub>B</sub>:</span>
          <input type="range" min="0.5" max="6.0" step="0.5" v-model.number="ballMassB" />
          <span class="range-unit">{{ ballMassB.toFixed(1) }} kg</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Speed <em>v</em><sub>B</sub>:</span>
          <input type="range" min="2.0" max="15.0" step="0.5" v-model.number="ballSpeedB" />
          <span class="range-unit">{{ ballSpeedB.toFixed(1) }} m/s</span>
        </div>
        <div class="slider-row">
          <span class="slider-sub">Approach α<sub>B</sub>:</span>
          <input type="range" min="-45" max="45" step="5" v-model.number="ballAlphaB" />
          <span class="range-unit">{{ ballAlphaB }}°</span>
        </div>
      </div>
    </div>

    <!-- ================= CONTROLS: MODE 4 (STROBOSCOPIC TENNIS BALL) ================= -->
    <div v-else class="sim-controls-grid">
      <div class="control-box">
        <div class="control-header">
          <label>Floor Restitution (<em>e</em>)</label>
          <span class="val-chip highlight">e = {{ bounceE.toFixed(2) }} (e² = {{ (bounceE * bounceE).toFixed(3) }})</span>
        </div>
        <input type="range" min="0.30" max="0.95" step="0.01" v-model.number="bounceE" @input="syncBounceAfterEdit" />
        <div class="range-labels">
          <span>0.30 (Heavy Damping)</span>
          <span>h_(k+1) / h_k = e²</span>
          <span>0.95 (Super-Elastic)</span>
        </div>
      </div>

      <div class="control-box">
        <div class="control-header">
          <span><span class="control-indicator tennis-ind"></span>Initial Drop Height (<em>h</em><sub>0</sub>)</span>
          <span class="val-chip">{{ bounceH0.toFixed(2) }} m</span>
        </div>
        <input type="range" min="1.0" max="3.0" step="0.1" v-model.number="bounceH0" @input="syncBounceAfterEdit" />
        <div class="slider-row">
          <span class="slider-sub">Horiz <em>v</em><sub>x0</sub>:</span>
          <input type="range" min="0.8" max="2.5" step="0.1" v-model.number="bounceVx0" />
          <span class="range-unit">{{ bounceVx0.toFixed(1) }} m/s</span>
        </div>
      </div>

      <div class="control-box">
        <div class="control-header">
          <label>Strobe Flash Interval (Δ<em>t</em><sub>strobe</sub>)</label>
          <span class="val-chip">{{ strobeDt.toFixed(2) }} s ({{ Math.round(1 / strobeDt) }} Hz)</span>
        </div>
        <input type="range" min="0.04" max="0.10" step="0.01" v-model.number="strobeDt" />
        <div class="range-labels">
          <span>0.04 s (Dense Multi-Exposure)</span>
          <span>0.10 s (Sparse)</span>
        </div>
      </div>
    </div>

    <!-- Canvas Viewport -->
    <div class="sim-viewport-wrapper" :class="{ 'studio-dark': impactMode === 'bounce' }">
      <canvas ref="canvasRef" class="lab-canvas"></canvas>
    </div>

    <!-- ================= MATHEMATICAL DASHBOARDS ================= -->
    <!-- Dashboard: Modes 1 & 2 (Direct & Oblique) -->
    <div v-if="impactMode === 'direct' || impactMode === 'oblique'" class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Kinetic Energy Loss %</span>
        <span class="dash-val highlight">{{ energyLossPercent.toFixed(1) }}%</span>
        <span class="dash-sub">Δ<em>T</em> = {{ deltaT.toFixed(1) }} J dissipated ({{ keInitial.toFixed(1) }} → {{ keFinal.toFixed(1) }} J)</span>
      </div>

      <div v-if="impactMode === 'direct'" class="dash-card">
        <span class="dash-label">Max Deformation (Stage b)</span>
        <span class="dash-val">u = {{ commonU.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">∫<em>P dt</em> = {{ impulseDeformP.toFixed(2) }} N·s | ∫<em>R dt</em> = {{ impulseRestitR.toFixed(2) }} N·s</span>
      </div>

      <div v-else class="dash-card">
        <span class="dash-label">Pre-Impact Normal Vel.</span>
        <span class="dash-val">v<sub>An</sub> = {{ vAn.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">v<sub>Bn</sub> = {{ vBn.toFixed(2) }} m/s</span>
      </div>

      <div class="dash-card">
        <span class="dash-label">Post-Impact Normal Vel.</span>
        <span class="dash-val">v′<sub>An</sub> = {{ vAnPrime.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">v′<sub>Bn</sub> = {{ vBnPrime.toFixed(2) }} m/s</span>
      </div>

      <div class="dash-card">
        <span class="dash-label">Post-Impact Speeds</span>
        <span class="dash-val">{{ speedAPrime.toFixed(2) }} | {{ speedBPrime.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">
          <template v-if="impactMode === 'oblique'">
            <em>t</em>-conserved: (<em>v</em>′<sub>A</sub>)<sub>t</sub> = {{ vAt.toFixed(2) }}, (<em>v</em>′<sub>B</sub>)<sub>t</sub> = {{ vBt.toFixed(2) }} m/s
          </template>
          <template v-else>
            Total Impulse <em>F</em>Δ<em>t</em> = {{ (impulseDeformP + impulseRestitR).toFixed(2) }} N·s
          </template>
        </span>
      </div>

      <div class="dash-card full-span">
        <span class="dash-label">Linear Momentum &amp; Restitution Verification (Eqs. 13.39–13.43)</span>
        <span class="dash-sub status-verified">
          ✓ Normal Momentum: <em>m</em><sub>A</sub><em>v</em><sub>An</sub> + <em>m</em><sub>B</sub><em>v</em><sub>Bn</sub> = {{ (massA * vAn + massB * vBn).toFixed(2) }} kg·m/s ≡
          <em>m</em><sub>A</sub><em>v</em>′<sub>An</sub> + <em>m</em><sub>B</sub><em>v</em>′<sub>Bn</sub> = {{ (massA * vAnPrime + massB * vBnPrime).toFixed(2) }} kg·m/s<br />
          <template v-if="willCollide">
            ✓ Restitution Identity: <em>v</em>′<sub>Bn</sub> − <em>v</em>′<sub>An</sub> = {{ (vBnPrime - vAnPrime).toFixed(2) }} m/s = <em>e</em>(<em>v</em><sub>An</sub> − <em>v</em><sub>Bn</sub>) = {{ (coeffE * (vAn - vBn)).toFixed(2) }} m/s
            <template v-if="impactMode === 'direct'">
              &nbsp;|&nbsp; ∫<em>R dt</em> / ∫<em>P dt</em> = {{ impulseDeformP > 0 ? (impulseRestitR / impulseDeformP).toFixed(2) : coeffE.toFixed(2) }}
            </template>
          </template>
          <template v-else>
            ⚠ No Collision Occurs: <em>v</em><sub>An</sub> ({{ vAn.toFixed(2) }}) ≤ <em>v</em><sub>Bn</sub> ({{ vBn.toFixed(2) }}) — Sphere A does not overtake Sphere B
          </template>
        </span>
      </div>
    </div>

    <!-- Dashboard: Mode 3 (Constrained Block & Ball) -->
    <div v-else-if="impactMode === 'constrained'" class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Block A Final Velocity (<em>v</em>′<sub>A</sub>)</span>
        <span class="dash-val highlight">{{ cBlockVelAPrime.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">Initial <em>v</em><sub>A</sub> = {{ blockVelA.toFixed(2) }} m/s (Horizontal Rollers)</span>
      </div>

      <div class="dash-card">
        <span class="dash-label">Ball B Final Velocity (<strong>v</strong>′<sub>B</sub>)</span>
        <span class="dash-val">{{ cSpeedBPrime.toFixed(2) }} <small>m/s</small></span>
        <span class="dash-sub">
          (<em>v</em>′<sub>B</sub>)<sub>n</sub> = {{ cVBnPrime.toFixed(2) }} | (<em>v</em>′<sub>B</sub>)<sub>t</sub> = {{ cVBtPrime.toFixed(2) }} m/s
        </span>
      </div>

      <div class="dash-card">
        <span class="dash-label">Floor Reaction Impulse</span>
        <span class="dash-val" style="color: #ec4899;">{{ cFloorImpulseExt.toFixed(2) }} <small>N·s ↑</small></span>
        <span class="dash-sub"><strong>F</strong><sub>ext</sub>Δ<em>t</em> = <em>m</em><sub>B</sub>[(<em>v</em>′<sub>B</sub>)<sub>n</sub> − (<em>v</em><sub>B</sub>)<sub>n</sub>] sin θ</span>
      </div>

      <div class="dash-card">
        <span class="dash-label">Kinetic Energy Loss</span>
        <span class="dash-val">{{ cEnergyLossPct.toFixed(1) }}%</span>
        <span class="dash-sub">Δ<em>T</em> = {{ cDeltaT.toFixed(1) }} J (Floor roller is workless!)</span>
      </div>

      <div class="dash-card full-span">
        <span class="dash-label">Constrained Impact 3-Equation Check (Eqs. 13.49, 13.50 &amp; 13.51)</span>
        <span class="dash-sub status-verified">
          <template v-if="willCollideConstrained">
            ✓ Eq. (13.51) System <em>x</em>-Momentum: <em>m</em><sub>A</sub><em>v</em><sub>A</sub> + <em>m</em><sub>B</sub>(<em>v</em><sub>B</sub>)<sub>x</sub> = {{ cPxBefore.toFixed(2) }} kg·m/s ≡
            <em>m</em><sub>A</sub><em>v</em>′<sub>A</sub> + <em>m</em><sub>B</sub>(<em>v</em>′<sub>B</sub>)<sub>x</sub> = {{ cPxAfter.toFixed(2) }} kg·m/s<br />
            ✓ Eq. (13.50) Ball <em>t</em>-Conservation: (<em>v</em>′<sub>B</sub>)<sub>t</sub> = {{ cVBtPrime.toFixed(2) }} m/s ≡ (<em>v</em><sub>B</sub>)<sub>t</sub> = {{ cVBt.toFixed(2) }} m/s
            &nbsp;|&nbsp;
            ✓ Eq. (13.49) Normal Restitution: (<em>v</em>′<sub>B</sub>)<sub>n</sub> − <em>v</em>′<sub>A</sub> cos θ = {{ (cVBnPrime - cBlockVelAPrime * Math.cos(cThetaRad)).toFixed(2) }} m/s = <em>e</em>(<em>v</em><sub>A</sub> cos θ − (<em>v</em><sub>B</sub>)<sub>n</sub>)
          </template>
          <template v-else>
            ⚠ No Impact: Wedge retreats faster along <em>n</em> (<em>v</em><sub>A</sub> cos θ = {{ cVAn.toFixed(2) }} m/s) than Ball B approaches ((<em>v</em><sub>B</sub>)<sub>n</sub> = {{ cVBn.toFixed(2) }} m/s).
          </template>
        </span>
      </div>
    </div>

    <!-- Dashboard: Mode 4 (Stroboscopic Tennis Ball) -->
    <div v-else class="sim-dashboard">
      <div class="dash-card result-main">
        <span class="dash-label">Experimental Restitution</span>
        <span class="dash-val highlight">e = {{ bounceRecoveredE.toFixed(3) }}</span>
        <span class="dash-sub">Recovered via √(<em>h</em><sub>1</sub>/<em>h</em><sub>0</sub>) = √({{ bouncePeaks[1].toFixed(3) }} / {{ bounceH0.toFixed(2) }})</span>
      </div>

      <div class="dash-card">
        <span class="dash-label">1st &amp; 2nd Rebound Peaks</span>
        <span class="dash-val">{{ bouncePeaks[1].toFixed(2) }} | {{ bouncePeaks[2].toFixed(2) }} <small>m</small></span>
        <span class="dash-sub"><em>h</em><sub>1</sub> = <em>e</em><sup>2</sup><em>h</em><sub>0</sub>, <em>h</em><sub>2</sub> = <em>e</em><sup>4</sup><em>h</em><sub>0</sub></span>
      </div>

      <div class="dash-card">
        <span class="dash-label">3rd &amp; 4th Rebound Peaks</span>
        <span class="dash-val">{{ bouncePeaks[3].toFixed(2) }} | {{ bouncePeaks[4].toFixed(2) }} <small>m</small></span>
        <span class="dash-sub"><em>h</em><sub>3</sub> = <em>e</em><sup>6</sup><em>h</em><sub>0</sub>, <em>h</em><sub>4</sub> = <em>e</em><sup>8</sup><em>h</em><sub>0</sub></span>
      </div>

      <div class="dash-card">
        <span class="dash-label">Vertical KE Lost / Bounce</span>
        <span class="dash-val">{{ ((1 - bounceE * bounceE) * 100).toFixed(1) }}%</span>
        <span class="dash-sub">Retained per bounce: <em>e</em><sup>2</sup> = {{ (bounceE * bounceE * 100).toFixed(1) }}%</span>
      </div>

      <div class="dash-card full-span">
        <span class="dash-label">Stroboscopic Multi-Bounce Telemetry (Photo 13.5)</span>
        <span class="dash-sub status-verified">
          ✓ Constant Horizontal Drift: <em>v</em><sub>x</sub> = {{ bounceVx0.toFixed(2) }} m/s (Total Range = {{ (bounceVx0 * bounceTotalTime).toFixed(2) }} m over 4 arches)
          &nbsp;|&nbsp;
          Current Ball Position: <em>x</em> = {{ curBounceState.x.toFixed(2) }} m, <em>y</em> = {{ curBounceState.y.toFixed(2) }} m, <em>v</em><sub>y</sub> = {{ curBounceState.vy.toFixed(2) }} m/s
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from 'vitepress'

type ImpactMode = 'direct' | 'oblique' | 'constrained' | 'bounce'

const props = withDefaults(
  defineProps<{
    initialMode?: ImpactMode
  }>(),
  {
    initialMode: 'direct'
  }
)

const g = 9.81
const showTextbookRef = ref(true)
const impactMode = ref<ImpactMode>(props.initialMode)

// ================= MODES 1 & 2 STATE (DIRECT & OBLIQUE) =================
const coeffE = ref(0.75)
const massA = ref(2.0)
const speedA = ref(10.0)
const angleA = ref(0.0)
const massB = ref(3.0)
const speedB = ref(-4.0)
const angleB = ref(0.0)

// ================= MODE 3 STATE (CONSTRAINED BLOCK & BALL) =================
const wedgeTheta = ref(35) // Normal angle above +x horizontal (20..60 deg)
const blockMassA = ref(6.0) // 1.0..15.0 kg
const blockVelA = ref(3.0) // -8.0..+10.0 m/s
const ballMassB = ref(2.0) // 0.5..6.0 kg
const ballSpeedB = ref(9.0) // 2.0..15.0 m/s
const ballAlphaB = ref(-20) // Approach angle relative to -n (-45..+45 deg)

// ================= MODE 4 STATE (STROBOSCOPIC BOUNCING TENNIS BALL) =================
const bounceH0 = ref(2.0) // 1.0..3.0 m
const bounceVx0 = ref(1.4) // 0.8..2.5 m/s
const bounceE = ref(0.75) // 0.30..0.95
const strobeDt = ref(0.06) // 0.04..0.10 s

// ================= PLAYBACK STATE =================
const isPlaying = ref(false)
const timeOffset = ref(-0.8) // [-1.0, +1.0] for collision modes
const bounceTime = ref(0.0) // [0, bounceTotalTime] for bounce mode

function switchMode(mode: ImpactMode) {
  isPlaying.value = false
  impactMode.value = mode
  if (mode === 'direct') {
    angleA.value = 0
    angleB.value = 0
    timeOffset.value = -0.8
  } else if (mode === 'oblique') {
    if (angleA.value === 0 && angleB.value === 0) {
      angleA.value = 30
      angleB.value = -15
    }
    timeOffset.value = -0.8
  } else if (mode === 'constrained') {
    timeOffset.value = -0.8
  } else if (mode === 'bounce') {
    bounceTime.value = bounceTotalTime.value
  }
}

function applyPreset(p: 'elastic' | 'plastic' | 'billiard' | 'truck') {
  isPlaying.value = false
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
  timeOffset.value = -0.8
}

function applyConstrainedPreset(p: 'textbook' | 'stationary' | 'elastic_wedge' | 'plastic_slide') {
  isPlaying.value = false
  impactMode.value = 'constrained'
  if (p === 'textbook') {
    wedgeTheta.value = 35
    blockMassA.value = 6.0
    blockVelA.value = 3.0
    ballMassB.value = 2.0
    ballSpeedB.value = 9.0
    ballAlphaB.value = -20
    coeffE.value = 0.75
  } else if (p === 'stationary') {
    wedgeTheta.value = 40
    blockMassA.value = 10.0
    blockVelA.value = 0.0
    ballMassB.value = 2.0
    ballSpeedB.value = 11.0
    ballAlphaB.value = -15
    coeffE.value = 0.85
  } else if (p === 'elastic_wedge') {
    wedgeTheta.value = 35
    blockMassA.value = 5.0
    blockVelA.value = 2.0
    ballMassB.value = 2.5
    ballSpeedB.value = 10.0
    ballAlphaB.value = -20
    coeffE.value = 1.0
  } else if (p === 'plastic_slide') {
    wedgeTheta.value = 35
    blockMassA.value = 6.0
    blockVelA.value = 2.0
    ballMassB.value = 3.0
    ballSpeedB.value = 10.0
    ballAlphaB.value = -25
    coeffE.value = 0.0
  }
  timeOffset.value = -0.8
}

function applyBouncePreset(p: 'photo13_5' | 'superball' | 'deadball') {
  isPlaying.value = false
  impactMode.value = 'bounce'
  if (p === 'photo13_5') {
    bounceH0.value = 2.0
    bounceVx0.value = 1.4
    bounceE.value = 0.75
    strobeDt.value = 0.06
  } else if (p === 'superball') {
    bounceH0.value = 2.2
    bounceVx0.value = 1.2
    bounceE.value = 0.90
    strobeDt.value = 0.07
  } else if (p === 'deadball') {
    bounceH0.value = 2.0
    bounceVx0.value = 1.6
    bounceE.value = 0.52
    strobeDt.value = 0.05
  }
  bounceTime.value = bounceTotalTime.value
}

function togglePlay() {
  if (timeOffset.value >= 0.99) timeOffset.value = -1.0
  isPlaying.value = !isPlaying.value
}

function snapToContact() {
  isPlaying.value = false
  timeOffset.value = 0.0
}

function resetTime() {
  isPlaying.value = false
  timeOffset.value = -0.8
}

function toggleBouncePlay() {
  if (bounceTime.value >= bounceTotalTime.value - 0.02) {
    bounceTime.value = 0.0
  }
  isPlaying.value = !isPlaying.value
}

function showFullStrobe() {
  isPlaying.value = false
  bounceTime.value = bounceTotalTime.value
}

function resetBounceStart() {
  isPlaying.value = false
  bounceTime.value = 0.0
}

function syncBounceAfterEdit() {
  if (!isPlaying.value) {
    bounceTime.value = bounceTotalTime.value
  } else if (bounceTime.value > bounceTotalTime.value) {
    bounceTime.value = bounceTotalTime.value
  }
}

// ================= MATH: MODES 1 & 2 (DIRECT & OBLIQUE) =================
const radA = computed(() => (impactMode.value === 'direct' ? 0 : (angleA.value * Math.PI) / 180))
const radB = computed(() => (impactMode.value === 'direct' ? 0 : (angleB.value * Math.PI) / 180))

const vAn = computed(() => speedA.value * Math.cos(radA.value))
const vBn = computed(() => speedB.value * Math.cos(radB.value))
const vAt = computed(() => speedA.value * Math.sin(radA.value))
const vBt = computed(() => speedB.value * Math.sin(radB.value))

const willCollide = computed(() => vAn.value > vBn.value)

// Stage (b) Maximum deformation common normal velocity u & impulses
const commonU = computed(() => (massA.value * vAn.value + massB.value * vBn.value) / (massA.value + massB.value))
const impulseDeformP = computed(() => (willCollide.value ? massA.value * (vAn.value - commonU.value) : 0))
const impulseRestitR = computed(() => coeffE.value * impulseDeformP.value)

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

const speedAPrime = computed(() => Math.hypot(vAnPrime.value, vAt.value))
const speedBPrime = computed(() => Math.hypot(vBnPrime.value, vBt.value))

const keInitial = computed(() => 0.5 * massA.value * speedA.value ** 2 + 0.5 * massB.value * speedB.value ** 2)
const keFinal = computed(() => 0.5 * massA.value * speedAPrime.value ** 2 + 0.5 * massB.value * speedBPrime.value ** 2)
const deltaT = computed(() => (willCollide.value ? Math.max(0, keInitial.value - keFinal.value) : 0))
const energyLossPercent = computed(() => (keInitial.value > 0 ? (deltaT.value / keInitial.value) * 100 : 0))

const radiusA = computed(() => Math.min(34, Math.max(19, 15 + Math.sqrt(massA.value) * 5.8)))
const radiusB = computed(() => Math.min(34, Math.max(19, 15 + Math.sqrt(massB.value) * 5.8)))

// ================= MATH: MODE 3 (CONSTRAINED BLOCK & BALL, EQS. 13.49–13.51) =================
// Unit vectors: n_hat = (cos θ, sin θ), t_hat = (-sin θ, cos θ) in (+x right, +y up)
const cThetaRad = computed(() => (wedgeTheta.value * Math.PI) / 180)
const cAlphaRad = computed(() => (ballAlphaB.value * Math.PI) / 180)

const cVBn = computed(() => -ballSpeedB.value * Math.cos(cAlphaRad.value))
const cVBt = computed(() => ballSpeedB.value * Math.sin(cAlphaRad.value))

const cVBx = computed(() => cVBn.value * Math.cos(cThetaRad.value) - cVBt.value * Math.sin(cThetaRad.value))
const cVBy = computed(() => cVBn.value * Math.sin(cThetaRad.value) + cVBt.value * Math.cos(cThetaRad.value))

const cVAn = computed(() => blockVelA.value * Math.cos(cThetaRad.value))
const willCollideConstrained = computed(() => cVAn.value > cVBn.value)

// Eq. (13.50): (v'_B)_t = (v_B)_t
const cVBtPrime = computed(() => cVBt.value)

// Simultaneous solution of Eq. (13.51) x-momentum + Eq. (13.49) normal restitution:
// v'_A * (m_A + m_B cos^2 θ) = m_A v_A + m_B (v_B)_n cos θ - m_B cos θ * e * (v_A cos θ - (v_B)_n)
const cBlockVelAPrime = computed(() => {
  if (!willCollideConstrained.value) return blockVelA.value
  const cosT = Math.cos(cThetaRad.value)
  const mA = blockMassA.value
  const mB = ballMassB.value
  const vA = blockVelA.value
  const vBn0 = cVBn.value
  const e = coeffE.value
  const denom = mA + mB * cosT * cosT
  return (mA * vA + mB * vBn0 * cosT - mB * cosT * e * (vA * cosT - vBn0)) / denom
})

const cVBnPrime = computed(() => {
  if (!willCollideConstrained.value) return cVBn.value
  const cosT = Math.cos(cThetaRad.value)
  return cBlockVelAPrime.value * cosT + coeffE.value * (blockVelA.value * cosT - cVBn.value)
})

const cVBxPrime = computed(() => cVBnPrime.value * Math.cos(cThetaRad.value) - cVBtPrime.value * Math.sin(cThetaRad.value))
const cVByPrime = computed(() => cVBnPrime.value * Math.sin(cThetaRad.value) + cVBtPrime.value * Math.cos(cThetaRad.value))
const cSpeedBPrime = computed(() => Math.hypot(cVBxPrime.value, cVByPrime.value))

// Internal normal impulse F Δt and vertical floor external impulse F_ext Δt (Fig. 13.26)
const cInternalImpulse = computed(() =>
  willCollideConstrained.value ? ballMassB.value * (cVBnPrime.value - cVBn.value) : 0
)
const cFloorImpulseExt = computed(() =>
  willCollideConstrained.value ? ballMassB.value * (cVBnPrime.value - cVBn.value) * Math.sin(cThetaRad.value) : 0
)

const cPxBefore = computed(() => blockMassA.value * blockVelA.value + ballMassB.value * cVBx.value)
const cPxAfter = computed(() => blockMassA.value * cBlockVelAPrime.value + ballMassB.value * cVBxPrime.value)

const cKeInit = computed(() => 0.5 * blockMassA.value * blockVelA.value ** 2 + 0.5 * ballMassB.value * ballSpeedB.value ** 2)
const cKeFinal = computed(
  () => 0.5 * blockMassA.value * cBlockVelAPrime.value ** 2 + 0.5 * ballMassB.value * cSpeedBPrime.value ** 2
)
const cDeltaT = computed(() => (willCollideConstrained.value ? Math.max(0, cKeInit.value - cKeFinal.value) : 0))
const cEnergyLossPct = computed(() => (cKeInit.value > 0 ? (cDeltaT.value / cKeInit.value) * 100 : 0))

const cBallRadius = computed(() => Math.min(30, Math.max(18, 14 + Math.sqrt(ballMassB.value) * 6)))

// ================= MATH: MODE 4 (STROBOSCOPIC BOUNCING TENNIS BALL) =================
const bounceTDrop0 = computed(() => Math.sqrt((2 * bounceH0.value) / g))

const bouncePeaks = computed(() => {
  const h0 = bounceH0.value
  const e2 = bounceE.value * bounceE.value
  return [h0, h0 * e2, h0 * e2 ** 2, h0 * e2 ** 3, h0 * e2 ** 4]
})

const bounceImpactTimes = computed(() => {
  const t0 = bounceTDrop0.value
  const e = bounceE.value
  const times = [t0]
  for (let k = 1; k <= 4; k++) {
    times.push(times[k - 1] + 2 * Math.pow(e, k) * t0)
  }
  return times // [T1, T2, T3, T4, T5]
})

const bounceTotalTime = computed(() => bounceImpactTimes.value[4])
const bounceRecoveredE = computed(() => Math.sqrt(bouncePeaks.value[1] / bounceH0.value))

function evalBounceAt(tRaw: number): { x: number; y: number; vy: number; nearFloor: boolean } {
  const t = Math.max(0, Math.min(tRaw, bounceTotalTime.value))
  const x = bounceVx0.value * t
  const times = bounceImpactTimes.value
  const t0 = bounceTDrop0.value
  const e = bounceE.value

  if (t <= times[0]) {
    const y = Math.max(0, bounceH0.value - 0.5 * g * t * t)
    const vy = -g * t
    return { x, y, vy, nearFloor: Math.abs(t - times[0]) < 0.022 }
  }

  for (let k = 1; k <= 4; k++) {
    if (t <= times[k] + 1e-7) {
      const tau = t - times[k - 1]
      const vy0 = Math.pow(e, k) * g * t0
      const y = Math.max(0, vy0 * tau - 0.5 * g * tau * tau)
      const vy = vy0 - g * tau
      const nearFloor = Math.abs(t - times[k - 1]) < 0.022 || Math.abs(t - times[k]) < 0.022
      return { x, y, vy, nearFloor }
    }
  }

  return { x, y: 0, vy: 0, nearFloor: true }
}

const curBounceState = computed(() => evalBounceAt(bounceTime.value))

// ================= CANVAS RENDERING ENGINE =================
const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animId: number | null = null
let lastNow = 0
let resObs: ResizeObserver | null = null
let logicalW = 740
const logicalH = 410

function drawBronzeSphere(
  c: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  label: string,
  subLabel?: string,
  flattenSide?: 'left' | 'right' | null,
  flattenAmt = 0
) {
  c.save()
  if (flattenSide && flattenAmt > 0.01) {
    // Clip at contact plane and apply slight elastic Poisson bulge
    const planeX = flattenSide === 'right' ? cx + r * (1 - 0.14 * flattenAmt) : cx - r * (1 - 0.14 * flattenAmt)
    c.beginPath()
    if (flattenSide === 'right') {
      c.rect(cx - r * 1.5, cy - r * 1.5, planeX - (cx - r * 1.5), r * 3)
    } else {
      c.rect(planeX, cy - r * 1.5, cx + r * 1.5 - planeX, r * 3)
    }
    c.clip()

    c.translate(cx, cy)
    c.scale(1, 1 + 0.065 * flattenAmt)
    c.translate(-cx, -cy)
  }

  const grad = c.createRadialGradient(cx - r * 0.32, cy - r * 0.34, r * 0.08, cx, cy, r)
  grad.addColorStop(0.0, '#fffbeb')
  grad.addColorStop(0.26, '#ecd1ab')
  grad.addColorStop(0.68, '#b68d5e')
  grad.addColorStop(1.0, '#6b4c2b')

  c.fillStyle = grad
  c.beginPath()
  c.arc(cx, cy, r, 0, Math.PI * 2)
  c.fill()

  c.strokeStyle = '#eab308'
  c.lineWidth = 1.6
  c.stroke()
  c.restore()

  // Crisp flat elastic interface highlight if flattened
  if (flattenSide && flattenAmt > 0.03) {
    const planeX = flattenSide === 'right' ? cx + r * (1 - 0.14 * flattenAmt) : cx - r * (1 - 0.14 * flattenAmt)
    const halfChord = r * Math.sqrt(Math.max(0.04, 1 - (1 - 0.14 * flattenAmt) ** 2)) * (1 + 0.065 * flattenAmt)
    c.strokeStyle = `rgba(253, 224, 71, ${0.45 + 0.5 * flattenAmt})`
    c.lineWidth = 2.2
    c.beginPath()
    c.moveTo(planeX, cy - halfChord)
    c.lineTo(planeX, cy + halfChord)
    c.stroke()
  }

  if (label) {
    c.fillStyle = '#1e1b18'
    c.font = `italic bold ${Math.max(11, Math.round(r * 0.52))}px Georgia, serif`
    c.textAlign = 'center'
    c.textBaseline = 'middle'
    c.fillText(label, cx, cy + 1)
    c.textBaseline = 'alphabetic'
  }

  if (subLabel) {
    c.fillStyle = '#cbd5e1'
    c.font = '10px monospace'
    c.textAlign = 'center'
    c.fillText(subLabel, cx, cy + r + 14)
  }
}

function drawArrow(
  c: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  label?: string,
  opts?: { dashed?: boolean; width?: number; head?: number; alpha?: number; labelOffsetY?: number }
) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 3) return

  c.save()
  if (opts?.alpha !== undefined) c.globalAlpha = opts.alpha
  c.strokeStyle = color
  c.fillStyle = color
  c.lineWidth = opts?.width ?? 2.6
  if (opts?.dashed) c.setLineDash([4, 3])

  c.beginPath()
  c.moveTo(x1, y1)
  c.lineTo(x2, y2)
  c.stroke()
  c.setLineDash([])

  const head = opts?.head ?? 7.5
  const ang = Math.atan2(dy, dx)
  c.beginPath()
  c.moveTo(x2, y2)
  c.lineTo(x2 - head * Math.cos(ang - 0.42), y2 - head * Math.sin(ang - 0.42))
  c.lineTo(x2 - head * Math.cos(ang + 0.42), y2 - head * Math.sin(ang + 0.42))
  c.closePath()
  c.fill()

  if (label) {
    c.font = 'bold 10.5px monospace'
    const lx = x2 + 10 * Math.cos(ang)
    const ly = y2 + 10 * Math.sin(ang) + (opts?.labelOffsetY ?? 0)
    c.textAlign = Math.abs(Math.cos(ang)) < 0.25 ? 'center' : Math.cos(ang) > 0 ? 'left' : 'right'
    c.fillText(label, Math.max(8, Math.min(logicalW - 8, lx)), Math.max(14, Math.min(logicalH - 8, ly)))
  }
  c.restore()
}

// ---------------- MODE 1: DIRECT CENTRAL IMPACT + 3-STAGE STRIP ----------------
function drawDirectMode(c: CanvasRenderingContext2D, w: number, h: number) {
  const arenaH = h - 144
  const contactX = w * 0.50
  const contactY = arenaH * 0.56
  const t = timeOffset.value

  // Subtle background grid
  c.fillStyle = '#0f172a'
  c.fillRect(0, 0, w, h)

  // Dashed cyan Line of Impact (x-axis, matching Fig. 13.21)
  c.save()
  c.strokeStyle = 'rgba(56, 189, 248, 0.55)'
  c.lineWidth = 1.6
  c.setLineDash([7, 5])
  c.beginPath()
  c.moveTo(26, contactY)
  c.lineTo(w - 26, contactY)
  c.stroke()
  c.restore()

  c.fillStyle = '#7dd3fc'
  c.font = 'italic bold 12px Georgia, serif'
  c.textAlign = 'right'
  c.fillText('Line of Impact (x)', w - 30, contactY - 8)

  const dispScale = 13.5
  const rA = radiusA.value
  const rB = radiusB.value

  const inContactWindow = willCollide.value && Math.abs(t) <= 0.08
  const compAmt = inContactWindow ? 1 - Math.abs(t) / 0.08 : 0

  let posAx = contactX - rA
  let posBx = contactX + rB

  if (!willCollide.value) {
    posAx = contactX - rA - 28 + vAn.value * t * dispScale
    posBx = contactX + rB + 28 + vBn.value * t * dispScale
  } else if (inContactWindow) {
    // Elastic compression: centers shift slightly inward while interface flattens at contactX
    const uShift = commonU.value * t * dispScale * 0.4
    posAx = contactX - rA * (1 - 0.14 * compAmt) + uShift
    posBx = contactX + rB * (1 - 0.14 * compAmt) + uShift
  } else if (t < 0) {
    posAx = contactX - rA + vAn.value * (t + 0.08) * dispScale
    posBx = contactX + rB + vBn.value * (t + 0.08) * dispScale
  } else {
    posAx = contactX - rA + vAnPrime.value * (t - 0.08) * dispScale
    posBx = contactX + rB + vBnPrime.value * (t - 0.08) * dispScale
  }

  if (!willCollide.value) {
    const bw = Math.min(w - 36, 400)
    c.fillStyle = 'rgba(245, 158, 11, 0.16)'
    c.strokeStyle = '#f59e0b'
    c.lineWidth = 1.4
    c.fillRect((w - bw) / 2, 14, bw, 24)
    c.strokeRect((w - bw) / 2, 14, bw, 24)
    c.fillStyle = '#fbbf24'
    c.font = 'bold 11px monospace'
    c.textAlign = 'center'
    c.fillText('No Impact: v_A ≤ v_B (Sphere A does not overtake B)', w / 2, 30)
  }

  // Contact glow ring at maximum deformation
  if (inContactWindow) {
    c.save()
    c.strokeStyle = `rgba(251, 191, 36, ${0.65 * compAmt})`
    c.lineWidth = 3
    c.beginPath()
    c.arc(contactX + commonU.value * t * dispScale * 0.4, contactY, Math.max(rA, rB) + 12, 0, Math.PI * 2)
    c.stroke()
    c.restore()
  }

  // Draw warm metallic bronze spheres A & B (Figs. 13.21–13.22)
  drawBronzeSphere(c, posAx, contactY, rA, 'A', `${massA.value.toFixed(1)} kg`, inContactWindow ? 'right' : null, compAmt)
  drawBronzeSphere(c, posBx, contactY, rB, 'B', `${massB.value.toFixed(1)} kg`, inContactWindow ? 'left' : null, compAmt)

  const vScale = 4.6
  if (inContactWindow) {
    // Show instantaneous common velocity u above the pair (Fig. 13.21b)
    const midX = (posAx + posBx) / 2
    const uPx = commonU.value * vScale
    if (Math.abs(uPx) >= 3) {
      drawArrow(c, midX - uPx * 0.4, contactY - Math.max(rA, rB) - 20, midX + uPx * 0.8, contactY - Math.max(rA, rB) - 20, '#34d399', `u = ${commonU.value.toFixed(2)} m/s`, { width: 3 })
    } else {
      c.fillStyle = '#34d399'
      c.font = 'bold 11px monospace'
      c.textAlign = 'center'
      c.fillText(`u = ${commonU.value.toFixed(2)} m/s (Instantaneous Rest!)`, midX, contactY - Math.max(rA, rB) - 18)
    }

    // Show Deformation / Restitution impulse arrows at interface (Fig. 13.22)
    const impLabel = t <= 0 ? `∫P dt = ${impulseDeformP.value.toFixed(1)} N·s` : `∫R dt = ${impulseRestitR.value.toFixed(1)} N·s`
    drawArrow(c, contactX - 4, contactY - 12, contactX - 38, contactY - 12, '#fb7185', '', { width: 2.4 })
    drawArrow(c, contactX + 4, contactY - 12, contactX + 38, contactY - 12, '#fb7185', '', { width: 2.4 })
    c.fillStyle = '#fda4af'
    c.font = 'bold 10.5px monospace'
    c.textAlign = 'center'
    c.fillText(impLabel, contactX, 24)
  } else if (!willCollide.value || t < 0) {
    // Beer & Johnston green velocity arrows above spheres (Fig. 13.21a)
    const ay = contactY - rA - 16
    const by = contactY - rB - 16
    drawArrow(c, posAx - 14, ay, posAx - 14 + vAn.value * vScale, ay, '#10b981', `v_A = ${vAn.value.toFixed(1)} m/s`)
    if (Math.abs(vBn.value) > 0.05) {
      drawArrow(c, posBx, by, posBx + vBn.value * vScale, by, '#10b981', `v_B = ${vBn.value.toFixed(1)} m/s`)
    } else {
      c.fillStyle = '#94a3b8'
      c.font = 'bold 10px monospace'
      c.textAlign = 'center'
      c.fillText('v_B = 0', posBx, by)
    }
  } else {
    // Post-impact green velocity arrows (Fig. 13.21c)
    const ay = contactY - rA - 16
    const by = contactY - rB - 16
    if (Math.abs(vAnPrime.value) > 0.08) {
      drawArrow(c, posAx, ay, posAx + vAnPrime.value * vScale, ay, '#34d399', `v'_A = ${vAnPrime.value.toFixed(2)} m/s`)
    } else {
      c.fillStyle = '#34d399'
      c.font = 'bold 10px monospace'
      c.textAlign = 'center'
      c.fillText("v'_A = 0", posAx, ay)
    }
    if (Math.abs(vBnPrime.value) > 0.08) {
      drawArrow(c, posBx, by, posBx + vBnPrime.value * vScale, by, '#34d399', `v'_B = ${vBnPrime.value.toFixed(2)} m/s`)
    }
  }

  // ---------------- 3-STAGE TEXTBOOK STRIP ALONG BOTTOM (FIGS. 13.21 & 13.22) ----------------
  const stripTop = arenaH + 6
  const stripH = h - stripTop - 10
  const padX = 12
  const gap = 8
  const colW = (w - padX * 2 - gap * 2) / 3

  const activeStage = !willCollide.value ? 0 : t < -0.08 ? 0 : t <= 0.08 ? 1 : 2

  const stages = [
    {
      title: '(a) Before Impact',
      line1: `v_A = ${vAn.value.toFixed(1)} m/s, v_B = ${vBn.value.toFixed(1)} m/s`,
      line2: willCollide.value ? `Approach: ${(vAn.value - vBn.value).toFixed(1)} m/s` : 'No overtake (v_A ≤ v_B)'
    },
    {
      title: '(b) Max Deformation',
      line1: `u = ${commonU.value.toFixed(2)} m/s`,
      line2: `∫P dt = m_A(v_A−u) = ${impulseDeformP.value.toFixed(1)} N·s`
    },
    {
      title: '(c) After Restitution',
      line1: `∫R dt = e·∫P dt = ${impulseRestitR.value.toFixed(1)} N·s`,
      line2: `v'_A = ${vAnPrime.value.toFixed(2)}, v'_B = ${vBnPrime.value.toFixed(2)} m/s`
    }
  ]

  stages.forEach((st, idx) => {
    const sx = padX + idx * (colW + gap)
    const isAct = activeStage === idx

    c.fillStyle = isAct ? 'rgba(30, 41, 59, 0.96)' : 'rgba(15, 23, 42, 0.85)'
    c.strokeStyle = isAct ? '#38bdf8' : 'rgba(148, 163, 184, 0.28)'
    c.lineWidth = isAct ? 2 : 1

    c.beginPath()
    c.roundRect(sx, stripTop, colW, stripH, 8)
    c.fill()
    c.stroke()

    // Stage header
    c.fillStyle = isAct ? '#7dd3fc' : '#cbd5e1'
    c.font = 'bold 10.5px sans-serif'
    c.textAlign = 'left'
    c.fillText(st.title, sx + 8, stripTop + 16)

    // Mini schematic diagram in middle of strip box
    const midX = sx + colW / 2
    const midY = stripTop + 56
    const mr = 13

    // Mini dashed x-axis
    c.save()
    c.strokeStyle = 'rgba(56, 189, 248, 0.35)'
    c.setLineDash([3, 3])
    c.beginPath()
    c.moveTo(sx + 10, midY)
    c.lineTo(sx + colW - 10, midY)
    c.stroke()
    c.restore()

    if (idx === 0) {
      drawBronzeSphere(c, midX - 24, midY, mr, 'A')
      drawBronzeSphere(c, midX + 22, midY, mr, 'B')
      drawArrow(c, midX - 34, midY - mr - 7, midX - 8, midY - mr - 7, '#10b981', '', { width: 2, head: 5.5 })
      if (Math.abs(vBn.value) > 0.2) {
        const dir = vBn.value > 0 ? 1 : -1
        drawArrow(c, midX + 22 - 8 * dir, midY - mr - 7, midX + 22 + 10 * dir, midY - mr - 7, '#10b981', '', { width: 2, head: 5.5 })
      }
    } else if (idx === 1) {
      drawBronzeSphere(c, midX - mr * 0.88, midY, mr, 'A', undefined, 'right', 0.85)
      drawBronzeSphere(c, midX + mr * 0.88, midY, mr, 'B', undefined, 'left', 0.85)
      if (Math.abs(commonU.value) > 0.15) {
        const dir = commonU.value >= 0 ? 1 : -1
        drawArrow(c, midX - 12 * dir, midY - mr - 7, midX + 14 * dir, midY - mr - 7, '#34d399', '', { width: 2.2, head: 5.5 })
      }
      // Mini coral deformation impulse arrows
      drawArrow(c, midX - 2, midY + mr + 7, midX - 20, midY + mr + 7, '#fb7185', '', { width: 1.8, head: 4.5 })
      drawArrow(c, midX + 2, midY + mr + 7, midX + 20, midY + mr + 7, '#fb7185', '', { width: 1.8, head: 4.5 })
    } else {
      drawBronzeSphere(c, midX - 24, midY, mr, 'A')
      drawBronzeSphere(c, midX + 24, midY, mr, 'B')
      if (Math.abs(vAnPrime.value) > 0.2) {
        const dA = vAnPrime.value >= 0 ? 1 : -1
        drawArrow(c, midX - 24 - 7 * dA, midY - mr - 7, midX - 24 + 11 * dA, midY - mr - 7, '#34d399', '', { width: 2, head: 5.5 })
      }
      if (Math.abs(vBnPrime.value) > 0.2) {
        const dB = vBnPrime.value >= 0 ? 1 : -1
        drawArrow(c, midX + 24 - 7 * dB, midY - mr - 7, midX + 24 + 13 * dB, midY - mr - 7, '#34d399', '', { width: 2, head: 5.5 })
      }
    }

    // Bottom readout lines
    c.fillStyle = '#f8fafc'
    c.font = 'bold 9.8px monospace'
    c.textAlign = 'left'
    c.fillText(st.line1, sx + 8, stripTop + stripH - 22)
    c.fillStyle = isAct ? '#fda4af' : '#94a3b8'
    c.font = '9.5px monospace'
    c.fillText(st.line2, sx + 8, stripTop + stripH - 8)
  })
}

// ---------------- MODE 2: OBLIQUE CENTRAL IMPACT (FIGS. 13.23 & 13.24) ----------------
function drawObliqueMode(c: CanvasRenderingContext2D, w: number, h: number) {
  c.fillStyle = '#0f172a'
  c.fillRect(0, 0, w, h)

  const contactX = w * 0.49
  const contactY = h * 0.52
  const t = timeOffset.value

  // Line of Impact (n) and Plane of Contact (t)
  c.save()
  c.strokeStyle = 'rgba(148, 163, 184, 0.42)'
  c.lineWidth = 1.6
  c.setLineDash([6, 4])
  c.beginPath()
  c.moveTo(28, contactY)
  c.lineTo(w - 28, contactY)
  c.moveTo(contactX, 24)
  c.lineTo(contactX, h - 24)
  c.stroke()
  c.restore()

  c.fillStyle = '#7dd3fc'
  c.font = 'bold 11px monospace'
  c.textAlign = 'right'
  c.fillText('Line of Impact (n)', w - 32, contactY - 8)
  c.fillStyle = '#fcd34d'
  c.textAlign = 'center'
  c.fillText('Plane of Contact (t)', contactX, 18)

  const rA = radiusA.value
  const rB = radiusB.value
  const dispScale = 13.0

  let posAx = contactX - rA
  let posAy = contactY
  let posBx = contactX + rB
  let posBy = contactY

  if (!willCollide.value) {
    posAx = contactX - rA - 26 + vAn.value * t * dispScale
    posAy = contactY - vAt.value * t * dispScale
    posBx = contactX + rB + 26 + vBn.value * t * dispScale
    posBy = contactY - vBt.value * t * dispScale
  } else if (t <= 0) {
    posAx += vAn.value * t * dispScale
    posAy -= vAt.value * t * dispScale
    posBx += vBn.value * t * dispScale
    posBy -= vBt.value * t * dispScale
  } else {
    posAx += vAnPrime.value * t * dispScale
    posAy -= vAt.value * t * dispScale
    posBx += vBnPrime.value * t * dispScale
    posBy -= vBt.value * t * dispScale
  }

  // Faint trajectory guide paths (pre & post) when colliding
  if (willCollide.value) {
    c.save()
    c.setLineDash([3, 4])
    c.lineWidth = 1.3
    c.strokeStyle = 'rgba(16, 185, 129, 0.28)'
    c.beginPath()
    c.moveTo(contactX - rA - vAn.value * dispScale, contactY + vAt.value * dispScale)
    c.lineTo(contactX - rA, contactY)
    c.lineTo(contactX - rA + vAnPrime.value * dispScale, contactY - vAt.value * dispScale)
    c.stroke()

    c.strokeStyle = 'rgba(56, 189, 248, 0.28)'
    c.beginPath()
    c.moveTo(contactX + rB - vBn.value * dispScale, contactY + vBt.value * dispScale)
    c.lineTo(contactX + rB, contactY)
    c.lineTo(contactX + rB + vBnPrime.value * dispScale, contactY - vBt.value * dispScale)
    c.stroke()
    c.restore()
  }

  // Contact flash & ±F Δt impulses (Fig. 13.24)
  if (willCollide.value && Math.abs(t) < 0.08) {
    const alpha = 1 - Math.abs(t) / 0.08
    c.save()
    c.strokeStyle = `rgba(244, 63, 94, ${alpha * 0.85})`
    c.lineWidth = 3.2
    c.beginPath()
    c.arc(contactX, contactY, Math.max(rA, rB) + 10, 0, Math.PI * 2)
    c.stroke()
    c.restore()

    drawArrow(c, contactX - 4, contactY, contactX - 48, contactY, '#fb7185', 'F Δt', { width: 2.8, labelOffsetY: 14 })
    drawArrow(c, contactX + 4, contactY, contactX + 48, contactY, '#fb7185', '−F Δt', { width: 2.8, labelOffsetY: 14 })
  }

  // Bronze spheres A & B
  drawBronzeSphere(c, posAx, posAy, rA, 'A', `${massA.value.toFixed(1)} kg`)
  drawBronzeSphere(c, posBx, posBy, rB, 'B', `${massB.value.toFixed(1)} kg`)

  // Dashed (v)_n and (v)_t component projections + resultant velocity arrows
  const vScale = 4.6
  const drawWithComponents = (
    ox: number,
    oy: number,
    vn: number,
    vt: number,
    resColor: string,
    resLabel: string,
    tagPrefix: string
  ) => {
    const dx = vn * vScale
    const dy = -vt * vScale

    // Projection box (dashed rectangle) when both components exist
    if (Math.abs(dx) > 4 && Math.abs(dy) > 4) {
      c.save()
      c.strokeStyle = 'rgba(226, 232, 240, 0.24)'
      c.lineWidth = 1.1
      c.setLineDash([3, 3])
      c.beginPath()
      c.moveTo(ox + dx, oy)
      c.lineTo(ox + dx, oy + dy)
      c.lineTo(ox, oy + dy)
      c.stroke()
      c.restore()
    }

    // Normal dashed component along n
    if (Math.abs(dx) > 4) {
      drawArrow(c, ox, oy, ox + dx, oy, '#38bdf8', `(${tagPrefix})_n`, { dashed: true, width: 1.9, head: 6, labelOffsetY: dy >= 0 ? -8 : 12 })
    }
    // Tangential dashed component along t (preserved!)
    if (Math.abs(dy) > 4) {
      drawArrow(c, ox, oy, ox, oy + dy, '#fbbf24', `(${tagPrefix})_t`, { dashed: true, width: 1.9, head: 6 })
    }

    // Resultant vector
    drawArrow(c, ox, oy, ox + dx, oy + dy, resColor, resLabel, { width: 2.8 })
  }

  if (!willCollide.value || t <= 0) {
    drawWithComponents(posAx, posAy, vAn.value, vAt.value, '#10b981', `v_A (${speedA.value.toFixed(1)})`, 'v_A')
    drawWithComponents(posBx, posBy, vBn.value, vBt.value, '#10b981', `v_B (${Math.abs(speedB.value).toFixed(1)})`, 'v_B')
  } else {
    drawWithComponents(posAx, posAy, vAnPrime.value, vAt.value, '#34d399', `v'_A (${speedAPrime.value.toFixed(1)})`, "v'_A")
    drawWithComponents(posBx, posBy, vBnPrime.value, vBt.value, '#34d399', `v'_B (${speedBPrime.value.toFixed(1)})`, "v'_B")
  }

  // Tangential conservation callout badge at bottom-left
  c.fillStyle = 'rgba(15, 23, 42, 0.88)'
  c.strokeStyle = 'rgba(251, 191, 36, 0.45)'
  c.lineWidth = 1.2
  const boxW = Math.min(w - 28, 365)
  c.beginPath()
  c.roundRect(14, h - 48, boxW, 34, 7)
  c.fill()
  c.stroke()
  c.fillStyle = '#fde68a'
  c.font = 'bold 10.5px monospace'
  c.textAlign = 'left'
  c.fillText(
    `Plane (t) Preserved: (v'_A)_t = (v_A)_t = ${vAt.value.toFixed(2)} m/s | (v'_B)_t = ${vBt.value.toFixed(2)} m/s`,
    22,
    h - 27
  )
}

// ---------------- MODE 3: CONSTRAINED BLOCK & BALL (FIGS. 13.25 & 13.26) ----------------
function drawConstrainedMode(c: CanvasRenderingContext2D, w: number, h: number) {
  c.fillStyle = '#0f172a'
  c.fillRect(0, 0, w, h)

  const floorY = h - 54
  const rollerR = 5.5
  const blockBottomY = floorY - rollerR * 2
  const blockH = 98
  const blockTopY = blockBottomY - blockH

  const theta = cThetaRad.value
  const cosT = Math.cos(theta)
  const sinT = Math.sin(theta)
  const tanT = Math.tan(theta)

  // Contact point at t = 0 on the inclined face
  const cx0 = w * 0.50
  const cy0 = blockBottomY - blockH * 0.54
  const t = timeOffset.value
  const dispScale = 10.5

  // Horizontal shift of Block A
  let dxBlock = 0
  if (!willCollideConstrained.value) {
    dxBlock = -24 + blockVelA.value * t * dispScale
  } else if (t <= 0) {
    dxBlock = blockVelA.value * t * dispScale
  } else {
    dxBlock = cBlockVelAPrime.value * t * dispScale
  }

  // Smooth horizontal track / floor (matching Fig. 13.25 tan-slate slab)
  const floorGrad = c.createLinearGradient(0, floorY, 0, h)
  floorGrad.addColorStop(0, '#64748b')
  floorGrad.addColorStop(0.18, '#334155')
  floorGrad.addColorStop(1, '#1e293b')
  c.fillStyle = floorGrad
  c.fillRect(18, floorY, w - 36, h - floorY - 12)
  c.strokeStyle = '#94a3b8'
  c.lineWidth = 2
  c.beginPath()
  c.moveTo(18, floorY)
  c.lineTo(w - 18, floorY)
  c.stroke()

  // Inclined face geometry of Block A at current dxBlock:
  // Through (cx0 + dxBlock, cy0), x_face(py) = cx0 + dxBlock + (py - cy0) * tan(θ)
  const curCx = cx0 + dxBlock
  const xTopR = curCx + (blockTopY - cy0) * tanT
  const xBotR = curCx + (blockBottomY - cy0) * tanT
  const topWidth = 96
  const xLeft = xTopR - topWidth

  // 1. Draw n-axis and t-axis anchored at current contact locus on wedge face (or impact locus cx0, cy0)
  const axisOriginX = Math.abs(t) < 0.12 ? curCx : cx0
  const axisOriginY = cy0

  c.save()
  c.strokeStyle = 'rgba(203, 213, 225, 0.55)'
  c.lineWidth = 1.5
  c.setLineDash([5, 4])
  // n-axis: (cos θ, -sin θ) in canvas coords
  c.beginPath()
  c.moveTo(axisOriginX - 85 * cosT, axisOriginY + 85 * sinT)
  c.lineTo(axisOriginX + 145 * cosT, axisOriginY - 145 * sinT)
  c.stroke()

  // t-axis: (-sin θ, -cos θ) in canvas coords
  c.beginPath()
  c.moveTo(axisOriginX + 65 * sinT, axisOriginY + 65 * cosT)
  c.lineTo(axisOriginX - 115 * sinT, axisOriginY - 115 * cosT)
  c.stroke()
  c.restore()

  c.fillStyle = '#7dd3fc'
  c.font = 'italic bold 13px Georgia, serif'
  c.textAlign = 'left'
  c.fillText('n', axisOriginX + 148 * cosT, axisOriginY - 148 * sinT + 4)
  c.fillStyle = '#fcd34d'
  c.fillText('t', axisOriginX - 122 * sinT - 6, axisOriginY - 122 * cosT)

  // Horizontal angle θ arc on n-axis (matching Fig. 13.26 left)
  c.save()
  c.strokeStyle = '#94a3b8'
  c.lineWidth = 1.3
  c.beginPath()
  c.moveTo(axisOriginX, axisOriginY)
  c.lineTo(axisOriginX + 46, axisOriginY)
  c.stroke()
  c.beginPath()
  c.arc(axisOriginX, axisOriginY, 34, -theta, 0)
  c.stroke()
  c.fillStyle = '#e2e8f0'
  c.font = 'bold 10.5px monospace'
  c.fillText(`θ=${wedgeTheta.value}°`, axisOriginX + 38, axisOriginY - 6)
  c.restore()

  // 2. Draw Wooden Trapezoidal Block A with wood-grain arcs (matching Fig. 13.25)
  c.save()
  c.beginPath()
  c.moveTo(xLeft, blockTopY)
  c.lineTo(xTopR, blockTopY)
  c.lineTo(xBotR, blockBottomY)
  c.lineTo(xLeft, blockBottomY)
  c.closePath()

  const woodGrad = c.createLinearGradient(xLeft, blockTopY, xBotR, blockBottomY)
  woodGrad.addColorStop(0, '#f6dcb3')
  woodGrad.addColorStop(0.55, '#eab975')
  woodGrad.addColorStop(1, '#d3954c')
  c.fillStyle = woodGrad
  c.fill()

  // Clip wood-grain cathedral rings inside trapezoid
  c.save()
  c.clip()
  c.strokeStyle = 'rgba(146, 64, 14, 0.24)'
  c.lineWidth = 1.6
  for (let gIdx = 1; gIdx <= 6; gIdx++) {
    c.beginPath()
    c.ellipse(xLeft + 26 + gIdx * 8, blockBottomY + 12, gIdx * 24, gIdx * 16, -0.22, 0, Math.PI * 2)
    c.stroke()
  }
  c.restore()

  c.strokeStyle = '#92400e'
  c.lineWidth = 2.0
  c.stroke()
  c.restore()

  // Label A on wooden block
  c.fillStyle = '#291707'
  c.font = 'italic bold 16px Georgia, serif'
  c.textAlign = 'center'
  c.fillText('A', (xLeft + xTopR) * 0.54, (blockTopY + blockBottomY) * 0.52)
  c.fillStyle = '#451a03'
  c.font = 'bold 10px monospace'
  c.fillText(`${blockMassA.value.toFixed(1)} kg`, (xLeft + xTopR) * 0.54, (blockTopY + blockBottomY) * 0.52 + 15)

  // Draw small cyan/steel rollers under Block A (matching Fig. 13.25)
  const numRollers = 6
  const spanW = xBotR - xLeft - 22
  for (let i = 0; i < numRollers; i++) {
    const rx = xLeft + 11 + (i / (numRollers - 1)) * spanW
    const ry = floorY - rollerR
    c.fillStyle = '#7dd3fc'
    c.beginPath()
    c.arc(rx, ry, rollerR, 0, Math.PI * 2)
    c.fill()
    c.strokeStyle = '#0369a1'
    c.lineWidth = 1.4
    c.stroke()
    c.fillStyle = '#0c4a6e'
    c.beginPath()
    c.arc(rx, ry, 1.8, 0, Math.PI * 2)
    c.fill()
  }

  // 3. Position of Bronze Ball B
  const rB = cBallRadius.value
  const b0x = cx0 + rB * cosT
  const b0y = cy0 - rB * sinT

  let posBx = b0x
  let posBy = b0y
  if (!willCollideConstrained.value) {
    posBx = b0x + 28 + cVBx.value * t * dispScale
    posBy = b0y - cVBy.value * t * dispScale
  } else if (t <= 0) {
    posBx = b0x + cVBx.value * t * dispScale
    posBy = b0y - cVBy.value * t * dispScale
  } else {
    posBx = b0x + cVBxPrime.value * t * dispScale
    posBy = b0y - cVByPrime.value * t * dispScale
  }
  posBy = Math.min(floorY - rB - 1, posBy)

  drawBronzeSphere(c, posBx, posBy, rB, 'B', `${ballMassB.value.toFixed(1)} kg`)

  // 4. Velocity vectors (matching Fig. 13.25 dual comparison style)
  const vScale = 5.2
  const arrowY1 = blockBottomY - 26
  const arrowY2 = blockTopY + 28

  if (!willCollideConstrained.value || t <= 0) {
    // Active pre-impact v_A & v_B in bold emerald, ghost post-impact in translucent mint
    if (Math.abs(blockVelA.value) > 0.08) {
      drawArrow(c, xLeft - 52, arrowY1, xLeft - 52 + blockVelA.value * vScale, arrowY1, '#10b981', `v_A = ${blockVelA.value.toFixed(1)}`, { width: 3 })
    }
    if (willCollideConstrained.value && Math.abs(cBlockVelAPrime.value) > 0.08) {
      drawArrow(c, xLeft - 52, arrowY2, xLeft - 52 + cBlockVelAPrime.value * vScale, arrowY2, '#5eead4', `v'_A = ${cBlockVelAPrime.value.toFixed(2)}`, { width: 2.2, alpha: 0.48 })
    }

    // Incoming v_B pointing toward Ball B (or from Ball B)
    drawArrow(c, posBx - cVBx.value * vScale, posBy + cVBy.value * vScale, posBx, posBy, '#10b981', `v_B (${ballSpeedB.value.toFixed(1)})`, { width: 3, labelOffsetY: -8 })
    if (willCollideConstrained.value) {
      drawArrow(c, b0x, b0y, b0x + cVBxPrime.value * vScale, b0y - cVByPrime.value * vScale, '#5eead4', `v'_B (${cSpeedBPrime.value.toFixed(1)})`, { width: 2.2, alpha: 0.45 })
    }
  } else {
    // Active post-impact v'_A & v'_B
    if (Math.abs(blockVelA.value) > 0.08) {
      drawArrow(c, xLeft - 52, arrowY1, xLeft - 52 + blockVelA.value * vScale, arrowY1, '#10b981', `v_A`, { width: 2.0, alpha: 0.38 })
    }
    if (Math.abs(cBlockVelAPrime.value) > 0.08) {
      drawArrow(c, xLeft - 52, arrowY2, xLeft - 52 + cBlockVelAPrime.value * vScale, arrowY2, '#34d399', `v'_A = ${cBlockVelAPrime.value.toFixed(2)} m/s`, { width: 3 })
    }
    drawArrow(c, posBx, posBy, posBx + cVBxPrime.value * vScale, posBy - cVByPrime.value * vScale, '#34d399', `v'_B = ${cSpeedBPrime.value.toFixed(2)} m/s`, { width: 3 })
  }

  // 5. Contact Flash: Internal ±F Δt AND Upward Floor External Impulse F_ext Δt (Fig. 13.26!)
  if (willCollideConstrained.value && Math.abs(t) <= 0.09) {
    const flash = 1 - Math.abs(t) / 0.09
    c.save()
    c.fillStyle = `rgba(251, 191, 36, ${0.75 * flash})`
    c.beginPath()
    c.arc(curCx, cy0, 6, 0, Math.PI * 2)
    c.fill()
    c.restore()

    // F Δt down-left along -n into Block A, -F Δt up-right along +n into Ball B
    drawArrow(c, curCx, cy0, curCx - 48 * cosT, cy0 + 48 * sinT, '#fb7185', `F Δt (${cInternalImpulse.value.toFixed(1)})`, { width: 3 })
    drawArrow(c, curCx, cy0, curCx + 48 * cosT, cy0 - 48 * sinT, '#fb7185', '−F Δt', { width: 3 })

    // Upward vertical floor reaction impulse F_ext Δt beneath Block A's rollers (Fig. 13.26 middle)
    const floorMidX = (xLeft + xBotR) * 0.52
    drawArrow(
      c,
      floorMidX,
      floorY + 38,
      floorMidX,
      floorY - 2,
      '#ec4899',
      `F_ext Δt = ${cFloorImpulseExt.value.toFixed(1)} N·s ↑`,
      { width: 3.4, labelOffsetY: 14 }
    )
  }

  // Top-left compact physics summary badge
  c.fillStyle = 'rgba(15, 23, 42, 0.88)'
  c.strokeStyle = 'rgba(56, 189, 248, 0.35)'
  c.lineWidth = 1.2
  c.beginPath()
  c.roundRect(14, 14, Math.min(w - 28, 305), 48, 7)
  c.fill()
  c.stroke()
  c.fillStyle = '#e2e8f0'
  c.font = 'bold 10.5px monospace'
  c.textAlign = 'left'
  c.fillText('Constrained Impact (Figs. 13.25–13.26)', 22, 31)
  c.fillStyle = '#94a3b8'
  c.font = '9.8px monospace'
  c.fillText(`x-Mom Conserved | F_ext Δt = ${cFloorImpulseExt.value.toFixed(1)} N·s ↑`, 22, 48)
}

// ---------------- MODE 4: STROBOSCOPIC BOUNCING TENNIS BALL (PHOTO 13.5) ----------------
function drawTennisBall(c: CanvasRenderingContext2D, cx: number, cy: number, r: number, alpha = 1.0, squash = false) {
  c.save()
  c.globalAlpha = alpha
  if (squash) {
    c.translate(cx, cy + r * 0.16)
    c.scale(1.22, 0.78)
    c.translate(-cx, -cy)
  }

  // Optic-yellow fuzzy tennis ball radial shading
  const grad = c.createRadialGradient(cx - r * 0.3, cy - r * 0.32, r * 0.1, cx, cy, r)
  grad.addColorStop(0.0, '#fef9c3')
  grad.addColorStop(0.38, '#d9f99d')
  grad.addColorStop(0.78, '#a3e635')
  grad.addColorStop(1.0, '#4d7c0f')

  c.fillStyle = grad
  c.beginPath()
  c.arc(cx, cy, r, 0, Math.PI * 2)
  c.fill()

  // Characteristic white tennis-ball seam arc clipped inside ball
  c.save()
  c.clip()
  c.strokeStyle = 'rgba(255, 255, 255, 0.82)'
  c.lineWidth = Math.max(1.3, r * 0.12)
  c.beginPath()
  c.arc(cx + r * 0.62, cy - r * 0.12, r * 0.72, 0.55 * Math.PI, 1.45 * Math.PI)
  c.stroke()
  c.restore()

  c.restore()
}

function drawBounceMode(c: CanvasRenderingContext2D, w: number, h: number) {
  // Pitch-dark studio backdrop matching Beer & Johnston Photo 13.5
  const bgGrad = c.createLinearGradient(0, 0, 0, h)
  bgGrad.addColorStop(0, '#05070b')
  bgGrad.addColorStop(0.85, '#0b0f17')
  bgGrad.addColorStop(1, '#111827')
  c.fillStyle = bgGrad
  c.fillRect(0, 0, w, h)

  const floorY = h - 42
  const topPad = 32
  const leftPad = 48
  const rightPad = 128

  const maxH = Math.max(2.4, bounceH0.value * 1.08)
  const totalX = Math.max(2.5, bounceVx0.value * bounceTotalTime.value * 1.03)

  const ballR = 11.5
  const yToPx = (ym: number) => floorY - ballR - (ym / maxH) * (floorY - ballR - topPad)
  const xToPx = (xm: number) => leftPad + (xm / totalX) * Math.max(180, w - leftPad - rightPad)

  // Rigid studio tabletop / floor slab (matching Photo 13.5 grey-slate horizontal bar)
  const slabGrad = c.createLinearGradient(0, floorY, 0, h)
  slabGrad.addColorStop(0, '#64748b')
  slabGrad.addColorStop(0.25, '#334155')
  slabGrad.addColorStop(1, '#0f172a')
  c.fillStyle = slabGrad
  c.fillRect(0, floorY, w, h - floorY)
  c.strokeStyle = '#94a3b8'
  c.lineWidth = 1.6
  c.beginPath()
  c.moveTo(0, floorY)
  c.lineTo(w, floorY)
  c.stroke()

  // Distance scale ticks along studio floor
  c.fillStyle = '#94a3b8'
  c.font = '10px monospace'
  c.textAlign = 'center'
  const xStep = totalX > 6 ? 2 : 1
  for (let xm = 0; xm <= totalX; xm += xStep) {
    const px = xToPx(xm)
    c.beginPath()
    c.moveTo(px, floorY)
    c.lineTo(px, floorY + 5)
    c.stroke()
    c.fillText(`${xm.toFixed(0)} m`, px, floorY + 18)
  }

  // Horizontal dashed peak-height callout bars (h0, h1 = e²h0, h2 = e⁴h0, h3 = e⁶h0)
  const peakSpecs = [
    { k: 0, h: bouncePeaks.value[0], color: '#7dd3fc', label: `h₀ = ${bouncePeaks.value[0].toFixed(2)} m` },
    { k: 1, h: bouncePeaks.value[1], color: '#bef264', label: `h₁ = e²h₀ = ${bouncePeaks.value[1].toFixed(2)} m` },
    { k: 2, h: bouncePeaks.value[2], color: '#34d399', label: `h₂ = e⁴h₀ = ${bouncePeaks.value[2].toFixed(2)} m` },
    { k: 3, h: bouncePeaks.value[3], color: '#fbbf24', label: `h₃ = e⁶h₀ = ${bouncePeaks.value[3].toFixed(2)} m` }
  ]

  let lastLabelY = -999
  peakSpecs.forEach((pk) => {
    const py = yToPx(pk.h) - ballR
    if (py > floorY - 6) return
    c.save()
    c.strokeStyle = pk.color
    c.globalAlpha = 0.42
    c.lineWidth = 1.2
    c.setLineDash([5, 4])
    c.beginPath()
    c.moveTo(leftPad - 12, py)
    c.lineTo(w - 14, py)
    c.stroke()
    c.restore()

    if (Math.abs(py - lastLabelY) >= 13) {
      c.fillStyle = pk.color
      c.font = 'bold 10px monospace'
      c.textAlign = 'right'
      c.fillText(pk.label, w - 12, py - 3)
      lastLabelY = py
    }
  })

  // Faint continuous envelope trajectory up to bounceTime
  c.save()
  c.strokeStyle = 'rgba(190, 242, 100, 0.18)'
  c.lineWidth = 1.4
  c.beginPath()
  const samples = 180
  for (let i = 0; i <= samples; i++) {
    const ts = (i / samples) * bounceTime.value
    const st = evalBounceAt(ts)
    const px = xToPx(st.x)
    const py = yToPx(st.y)
    if (i === 0) c.moveTo(px, py)
    else c.lineTo(px, py)
  }
  c.stroke()
  c.restore()

  // Stroboscopic multi-exposure ghost spheres at fixed Δt_strobe intervals!
  const dtS = Math.max(0.03, strobeDt.value)
  for (let ts = 0; ts <= bounceTime.value + 1e-6; ts += dtS) {
    const st = evalBounceAt(ts)
    drawTennisBall(c, xToPx(st.x), yToPx(st.y), ballR, 0.78, st.nearFloor && st.y < 0.04)
  }

  // Foreground active tennis ball at current bounceTime
  const cur = curBounceState.value
  const curPx = xToPx(cur.x)
  const curPy = yToPx(cur.y)
  drawTennisBall(c, curPx, curPy, ballR + 0.8, 1.0, cur.nearFloor && cur.y < 0.04)

  // Live velocity vector on current foreground ball when scrubbing/animating prior to end
  if (bounceTime.value < bounceTotalTime.value - 0.02) {
    drawArrow(c, curPx, curPy, curPx + bounceVx0.value * 14, curPy - cur.vy * 4.2, '#38bdf8', '', { width: 2.2, head: 6 })
  }

  // Studio caption badge at top-left
  c.fillStyle = 'rgba(15, 23, 42, 0.82)'
  c.strokeStyle = 'rgba(163, 230, 53, 0.45)'
  c.lineWidth = 1.1
  c.beginPath()
  c.roundRect(12, 10, Math.min(w - 150, 315), 24, 6)
  c.fill()
  c.stroke()
  c.fillStyle = '#d9f99d'
  c.font = 'bold 10px monospace'
  c.textAlign = 'left'
  c.fillText(`Photo 13.5 Strobe · Δt = ${strobeDt.value.toFixed(2)}s · e = √(h₁/h₀) = ${bounceRecoveredE.value.toFixed(2)}`, 20, 26)
}

function draw() {
  if (!ctx || !canvasRef.value) return
  ctx.clearRect(0, 0, logicalW, logicalH)

  if (impactMode.value === 'direct') {
    drawDirectMode(ctx, logicalW, logicalH)
  } else if (impactMode.value === 'oblique') {
    drawObliqueMode(ctx, logicalW, logicalH)
  } else if (impactMode.value === 'constrained') {
    drawConstrainedMode(ctx, logicalW, logicalH)
  } else {
    drawBounceMode(ctx, logicalW, logicalH)
  }
}

function loop(now: number) {
  if (!lastNow) lastNow = now
  const dt = Math.min(0.05, (now - lastNow) / 1000)
  lastNow = now

  if (isPlaying.value) {
    if (impactMode.value === 'bounce') {
      bounceTime.value += dt * 1.0
      if (bounceTime.value >= bounceTotalTime.value) {
        bounceTime.value = bounceTotalTime.value
        isPlaying.value = false
      }
    } else {
      timeOffset.value += dt * 0.68
      if (timeOffset.value >= 1.0) {
        timeOffset.value = 1.0
        isPlaying.value = false
      }
    }
  }

  draw()
  animId = requestAnimationFrame(loop)
}

watch(
  [
    impactMode,
    coeffE,
    massA,
    speedA,
    angleA,
    massB,
    speedB,
    angleB,
    wedgeTheta,
    blockMassA,
    blockVelA,
    ballMassB,
    ballSpeedB,
    ballAlphaB,
    bounceH0,
    bounceVx0,
    bounceE,
    strobeDt,
    timeOffset,
    bounceTime
  ],
  () => {
    draw()
  }
)

onMounted(() => {
  if (impactMode.value === 'bounce') {
    bounceTime.value = bounceTotalTime.value
  }

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
  if (animId !== null) cancelAnimationFrame(animId)
  if (resObs) resObs.disconnect()
})
</script>

<style scoped>
.sim-card {
  background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid var(--vp-c-divider, rgba(226, 232, 240, 0.8));
  border-radius: 14px;
  padding: 1.4rem;
  margin: 1.5rem 0;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
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
  margin-bottom: 0.5rem;
}

.sim-badge-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.sim-badge {
  background: var(--vp-c-brand-1, #0284c7);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  letter-spacing: 0.05em;
}

.sim-badge-secondary {
  background: var(--vp-c-bg-elv, #e2e8f0);
  color: var(--vp-c-text-2, #64748b);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  letter-spacing: 0.04em;
}

.ref-toggle-btn {
  padding: 0.32rem 0.78rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-brand-1, #0284c7);
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.1));
  color: var(--vp-c-brand-1, #0284c7);
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s ease;
}

.ref-toggle-btn:hover {
  background: var(--vp-c-brand-1, #0284c7);
  color: #ffffff;
}

.sim-title {
  margin: 0.2rem 0 0.45rem 0 !important;
  font-size: 1.3rem !important;
  font-weight: 700 !important;
  color: var(--vp-c-text-1, #0f172a);
}

.sim-desc {
  margin: 0 !important;
  font-size: 0.89rem;
  color: var(--vp-c-text-2, #475569);
  line-height: 1.48;
}

/* Collapsible Textbook Reference Panel */
.slide-ref-panel {
  display: grid;
  grid-template-columns: minmax(260px, 1.15fr) 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0.9rem 1rem;
  margin-bottom: 1rem;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 10px;
}

.slide-ref-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
}

.slide-ref-images.single {
  grid-template-columns: 1fr;
}

.ref-fig-box {
  margin: 0 !important;
  background: #ffffff;
  padding: 0.45rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ref-fig-box img {
  max-height: 148px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.ref-fig-box figcaption {
  margin-top: 0.35rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #475569;
  text-align: center;
}

.slide-ref-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--vp-c-brand-1, #0284c7);
  margin-bottom: 0.35rem;
}

.slide-ref-info p {
  margin: 0 !important;
  font-size: 0.83rem;
  line-height: 1.5;
  color: var(--vp-c-text-2, #475569);
}

@media (max-width: 820px) {
  .slide-ref-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .slide-ref-images {
    grid-template-columns: 1fr;
  }
}

/* 4-Mode Toggles */
.mode-toggles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 0.55rem;
  margin-bottom: 0.9rem;
}

.mode-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.42rem;
  padding: 0.6rem 0.75rem;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  color: var(--vp-c-text-2, #475569);
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}

.mode-btn:hover {
  border-color: var(--vp-c-brand-1, #0284c7);
}

.mode-btn.active {
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.12));
  border-color: var(--vp-c-brand-1, #0284c7);
  color: var(--vp-c-brand-1, #0284c7);
  box-shadow: 0 2px 8px rgba(2, 132, 199, 0.12);
}

/* Presets Bar */
.sim-presets {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.9rem;
  padding: 0.58rem 0.8rem;
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
  font-size: 0.77rem;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.18s ease;
}

.preset-btn:hover {
  border-color: var(--vp-c-brand-1, #0284c7);
  background: var(--vp-c-brand-soft, rgba(2, 132, 199, 0.1));
  color: var(--vp-c-brand-1, #0284c7);
}

/* Playback Control Bar */
.playback-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.95rem;
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  padding: 0.68rem 0.95rem;
  border-radius: 8px;
}

.play-btn {
  background: var(--vp-c-brand-1, #0284c7);
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 0.82rem;
  padding: 0.42rem 0.95rem;
  border-radius: 6px;
  cursor: pointer;
}

.action-btn {
  background: var(--vp-c-bg-elv, #f1f5f9);
  border: 1px solid var(--vp-c-divider, #cbd5e1);
  color: var(--vp-c-text-1, #334155);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
}

.action-btn.contact-btn:hover {
  border-color: #f43f5e;
  color: #f43f5e;
}

.time-slider-wrapper {
  flex: 1;
  min-width: 210px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.time-label {
  font-size: 0.78rem;
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
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.control-box {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 0.75rem 0.85rem;
}

.control-box.full-width {
  grid-column: 1 / -1;
}

.control-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.45rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #0f172a);
}

.control-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.4rem;
  display: inline-block;
  vertical-align: middle;
}

.bronze-a-ind {
  background: linear-gradient(135deg, #fde68a, #b45309);
}

.bronze-b-ind {
  background: linear-gradient(135deg, #ecd1ab, #78350f);
}

.wood-ind {
  background: linear-gradient(135deg, #f6dcb3, #b45309);
  border-radius: 2px;
}

.tennis-ind {
  background: #a3e635;
}

.val-chip {
  background: var(--vp-c-bg-elv, #f1f5f9);
  padding: 0.14rem 0.45rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.76rem;
  white-space: nowrap;
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
  font-size: 0.7rem;
  color: var(--vp-c-text-2, #94a3b8);
  margin-top: 0.28rem;
  gap: 0.4rem;
}

.slider-row {
  display: grid;
  grid-template-columns: 78px 1fr 64px;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.42rem;
}

.slider-sub {
  font-size: 0.76rem;
  color: var(--vp-c-text-2, #64748b);
}

.range-unit {
  font-size: 0.76rem;
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
  border: 1px solid #1e293b;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 1.1rem;
}

.sim-viewport-wrapper.studio-dark {
  background: #05070b;
}

.lab-canvas {
  width: 100%;
  height: 410px;
  display: block;
}

/* Dashboard */
.sim-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  gap: 0.75rem;
}

.dash-card {
  background: var(--vp-c-bg, #ffffff);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 8px;
  padding: 0.75rem 0.85rem;
  display: flex;
  flex-direction: column;
}

.dash-card.result-main {
  border-left: 4px solid #f43f5e;
  background: rgba(244, 63, 94, 0.03);
}

.dash-card.full-span {
  grid-column: 1 / -1;
  background: var(--vp-c-bg-elv, #f8fafc);
}

.dash-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-text-2, #64748b);
  margin-bottom: 0.18rem;
}

.dash-val {
  font-size: 1.16rem;
  font-weight: 800;
  font-family: monospace;
  color: var(--vp-c-text-1, #0f172a);
}

.dash-val.highlight {
  color: #f43f5e;
}

.dash-sub {
  font-size: 0.72rem;
  color: var(--vp-c-text-2, #64748b);
  margin-top: 0.22rem;
  line-height: 1.45;
}

.status-verified {
  color: #10b981;
  font-weight: 600;
}
</style>
