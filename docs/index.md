# PSG Institute of Advanced Studies
### Department of Physics — Engineering Courseware Portal

Welcome to the interactive courseware portal developed by **Dr. Sebin Devasia** for students at **PSG Institute of Advanced Studies (PSG IAS)**. This platform combines rigorous theoretical foundations, step-by-step analytical derivations, interactive computational labs (Three.js, Canvas & SVG), and self-assessment modules designed for engineering undergraduates.

<div class="instructor-profile-card">
  <div class="instructor-avatar">SD</div>
  <div class="instructor-details">
    <h3>Dr. Sebin Devasia</h3>
    <p>Assistant Professor · Department of Physics · PSG Institute of Advanced Studies</p>
    <a href="mailto:seb@psgias.ac.in" class="instructor-email">✉ seb@psgias.ac.in</a>
  </div>
</div>

---

## Academic Courses

<script setup>
import { withBase } from 'vitepress'
</script>

<div class="portal-grid">
  <!-- Course 1 -->
  <a :href="withBase('/physics/')" class="portal-card">
    <div class="portal-card-header">
      <span class="portal-card-badge physics">Active · Full Course</span>
      <span style="font-size: 0.8rem; font-weight: 700; color: #2563eb;">23IM102</span>
    </div>
    <h3 class="portal-card-title">Physics (Engineering Mechanics)</h3>
    <p class="portal-card-desc">
      Comprehensive coverage of Newtonian statics, 2D/3D force systems, particle kinematics, Newton's 2nd law, Coulomb friction, work-energy principles, impulse-momentum, and impact mechanics. Includes 87 lecture & textbook figures, 10 interactive simulation labs, and complete numerical solutions.
    </p>
    <div class="portal-card-footer">
      <span>5 Modules · 10 Interactive Labs</span>
      <span>Explore Course →</span>
    </div>
  </a>

  <!-- Course 2 -->
  <a :href="withBase('/electronics/')" class="portal-card">
    <div class="portal-card-header">
      <span class="portal-card-badge stage2">Stage 2 · Syllabus Roadmap</span>
      <span style="font-size: 0.8rem; font-weight: 700; color: #d97706;">23IR202</span>
    </div>
    <h3 class="portal-card-title">Basics of Electronics</h3>
    <p class="portal-card-desc">
      Fundamental circuit theory and solid-state devices: PN junctions and Zener diodes, Bipolar Junction Transistors (BJT), multi-stage amplifiers, Barkhausen oscillators, operational amplifiers (741), and IC voltage regulators.
    </p>
    <div class="portal-card-footer">
      <span>5 Modules Blueprint</span>
      <span>View Syllabus →</span>
    </div>
  </a>
</div>

---

## Pedagogical Architecture

::: tip S-M-A-R&T Problem-Solving Protocol
Every analytical example and textbook numerical in this portal is structured following the five-stage **S-M-A-R&T** protocol:
1. **S — Strategy:** Identify given data, governing physical principles, coordinate systems, and target unknowns.
2. **M — Modeling (FBD):** Isolate the physical body with strict boundary tracing and establish coordinate conventions.
3. **A — Analysis:** Formulate equilibrium ($\sum \mathbf{F} = \mathbf{0}$) or dynamical ($\sum \mathbf{F} = m\mathbf{a}$) equations with exact algebra.
4. **R — Reflect:** Verify dimensional consistency, physical bounds (e.g. cable tensions $T \ge 0$, restitution $0 \le e \le 1$), and limiting cases.
5. **T — Think Further:** Examine multidisciplinary engineering implications (aerospace quadcopters, robotics, structural integrity).
:::

### Interactive Computational Laboratories

This portal incorporates 10 bespoke interactive engineering laboratories built natively with Vue 3, HTML5 Canvas, SVG, and Three.js, modeled directly on the official lecture slide and Beer & Johnston textbook diagrams:

| Module | Lab Component | Key Interactive Concepts |
| :--- | :--- | :--- |
| **Module 1** | `<ParallelogramForceLab />` | Parallelogram Law, Triangle Rule, 2D component decomposition, concurrent force resultant. |
| **Module 1** | `<SpaceForce3DViewer />` | Three.js 3D cuboid force vector, 200-kg wall cylinder cables, direction angles ($\theta_x, \theta_y, \theta_z$). |
| **Module 2** | `<MotionCurvesSimulator />` | Real-time calculus integration of $a(t), v(t), x(t)$ curves with multi-stage subway car preset. |
| **Module 2** | `<ElevatorBallChaseSim />` | Two-particle vertical chase ($y_B(t)$ vs $y_E(t)$) inside an elevator shaft with relative velocity tracking. |
| **Module 2** | `<ProjectileAndRollingLab />` | Parabolic 150-m cliff projectile trajectory with hodograph inset; pure rolling wheel cycloid trace. |
| **Module 3** | `<InclinedFrictionAndBeltLab />` | Coulomb dry friction, impending slip vs tipping, Capstan exponential belt tension bollard. |
| **Module 4** | `<EnergyCollarAndDumbwaiterSim />` | Spring-collar mechanical energy exchange ($T, V_g, V_e$) and dumbwaiter hoist motor power. |
| **Module 5** | `<ImpulseAndBoatsLab />` | Two-boat rope tug momentum conservation (mass center $G$) and impulsive baseball bat strike ($F\text{–}t$ area). |
| **Module 5** | `<ImpactCollisionLab />` | Direct, oblique, constrained rolling wedge-block & ball impact, and stroboscopic tennis ball bounce. |
| **Module 5** | `<PendulumImpactEnergySim />` | Multi-principle two-pendulum collision combining energy conservation, restitution $e$, and cord tension. |

---

## Course Navigation

Select a course from the cards above or use the **Academic Program switcher** at the top of the left sidebar to access full lecture modules, interactive simulations, and question banks.
