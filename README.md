# PSG IAS Engineering Courseware Portal

Interactive GitBook-style static courseware portal built with **VitePress**, **Vue 3**, **HTML5 Canvas**, **SVG**, **Three.js**, and **MathJax 3** by **Dr. Sebin Devasia** (Assistant Professor, Department of Physics, PSG Institute of Advanced Studies).

**Live Site:** https://sebind.github.io/teaching/

---

## Courses Included

### 1. 23IM102 – Physics (Engineering Mechanics) · *Full Course*
Five complete interactive lecture modules aligned with the PSG IAS syllabus, Dr. Sebin Devasia's lecture slides, and reference textbooks (Beer & Johnston, Nelson, Hibbeler, Meriam & Kraige), featuring derivations, **87 integrated lecture & textbook figures**, the **S-M-A-R&T** problem-solving protocol, worked numericals, important question banks, interactive mastery quizzes, and **10 bespoke computational labs**:

- **Module 1 — Statics of Particles**
  - `<ParallelogramForceLab />`: Parallelogram Law, Triangle Rule, and rectangular components decomposition
  - `<SpaceForce3DViewer />`: Three.js 3D space force cuboid, direction cosines, and 200-kg cylinder 3D equilibrium
- **Module 2 — Kinematics of Particles**
  - `<MotionCurvesSimulator />`: Real-time $x(t)$–$v(t)$–$a(t)$ motion curves & subway track simulator
  - `<ElevatorBallChaseSim />`: Two-particle vertical chase ($y_B(t)$ vs $y_E(t)$) inside an elevator shaft
  - `<ProjectileAndRollingLab />`: 150-m cliff projectile trajectory + velocity hodograph inset & pure rolling cycloid lab
- **Module 3 — Kinetics: Newton's 2nd Law & Friction**
  - `<InclinedFrictionAndBeltLab />`: Coulomb inclined plane (slipping vs. tipping & angle of repose) & Capstan belt friction simulator
- **Module 4 — Kinetics: Energy Methods**
  - `<EnergyCollarAndDumbwaiterSim />`: Vertical rod spring-collar energy conservation & 2:1 counterweighted dumbwaiter motor power calculator
- **Module 5 — Kinetics: Momentum Methods**
  - `<ImpulseAndBoatsLab />`: Two-boat rope tug momentum conservation (mass center $G$) & impulsive baseball strike ($F\text{–}t$ area)
  - `<ImpactCollisionLab />`: Direct, oblique, constrained rolling wedge-block & ball impact, and stroboscopic tennis ball bounce
  - `<PendulumImpactEnergySim />`: Multi-principle two-pendulum collision combining energy conservation, restitution $e$, and cord tension

### 2. 23IR202 – Basics of Electronics · *Stage 2 Syllabus Blueprint*
Five-module curriculum blueprint covering Semiconductor Physics & Diodes, Bipolar Junction Transistors (BJTs), Amplifiers & Oscillators, Operational Amplifiers (741 IC & Active Filters), and Voltage Regulators & 555 Timing Circuits.

---

## Local Development

```bash
# Install dependencies
npm ci

# Start local VitePress development server
npm run docs:dev

# Build production static bundle (outputs to docs/.vitepress/dist)
npm run docs:build

# Preview production build locally
npm run docs:preview
```

---

## Deployment

Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the VitePress static bundle under `/teaching/` and deploys automatically to GitHub Pages.
