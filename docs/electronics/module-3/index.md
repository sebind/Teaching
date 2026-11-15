# Module 3: Amplifiers & Oscillators
### 23IR202 — Basics of Electronics

::: warning Stage 2 — Upcoming Module Build
This chapter blueprint outlines the theoretical scope, mathematical models, and circuit architectures for **Module 3: Amplifiers and Oscillators**. Interactive frequency response plots, Barkhausen loop-gain analyzers, and resonant tank visualizers will be integrated in Stage 2.
:::

---

## Module Overview & Objectives

This module addresses power amplification stages and sinusoidal feedback oscillators. Students evaluate amplifier conduction angles, theoretical efficiency bounds, push-pull complementary symmetry output stages, and frequency-selective feedback oscillators governed by the Barkhausen criterion.

### Key Learning Outcomes
- Classify power amplifier operations (Class A, B, AB, C, and D) based on Q-point position, conduction angle $\theta_{cond}$, and theoretical maximum conversion efficiency $\eta$.
- Design complementary symmetry **Push-Pull Class B / AB** power amplifiers with diode bias networks to eliminate crossover distortion.
- Formulate the **Barkhausen Criteria** for sustained sinusoidal oscillations ($|A\beta| = 1$ and $\angle A\beta = 0^\circ$ or $360^\circ$).
- Calculate resonant oscillation frequencies for audio RC oscillators (Wien-bridge, phase-shift RC) and high-frequency LC oscillators (Colpitts, Hartley).

---

## Detailed Syllabus & Topic Breakdown

### 1. Power Amplifier Classifications & Conduction Angles

| Amplifier Class | Conduction Angle | Q-Point Location | Theoretical Max Efficiency ($\eta_{max}$) | Primary Application |
| :---: | :---: | :---: | :---: | :--- |
| **Class A** | $360^\circ$ (Full cycle) | Center of AC Load Line | $25\%$ (Direct), $50\%$ (Transformer) | High-fidelity preamps |
| **Class B** | $180^\circ$ (Half cycle) | At Cutoff ($I_C = 0$) | $78.5\%$ ($\frac{\pi}{4}$) | Audio power output stages |
| **Class AB** | $180^\circ < \theta < 360^\circ$ | Slightly above Cutoff | $50\% - 78.5\%$ | Crossover-free linear audio |
| **Class C** | $\theta < 180^\circ$ | Deep below Cutoff | $> 80\%$ (Up to $90\%$) | Tuned RF transmitters |
| **Class D** | PWM Switching | Fully ON / Fully OFF | $> 90\% - 95\%$ | Modern high-efficiency audio |

### 2. Push-Pull Emitter Follower & Crossover Distortion
- Complementary pair topology utilizing matching $npn$ and $pnp$ power transistors.
- Deadband distortion caused by base-emitter junction turn-on voltage threshold ($V_{BE} \approx 0.7\text{ V}$).
- Class AB diode biasing: two forward-biased series diodes ($D_1, D_2$) establish a $1.4\text{ V}$ quiescent offset between bases.

### 3. Theory of Sinusoidal Oscillation & The Barkhausen Criteria
- Positive feedback closed-loop transfer function:
  $$A_f(s) = \frac{A(s)}{1 - A(s)\beta(s)}$$
- Sustained oscillation conditions:
  1. **Magnitude Condition:** Loop gain $|A\beta| = 1$ (in practice $\ge 1$ for startup, regulated by non-linear amplitude stabilization).
  2. **Phase Condition:** Total loop phase shift $\angle A\beta = 0^\circ$ or an integer multiple of $360^\circ$.

### 4. Audio-Frequency RC Oscillators
- **Wien-Bridge Oscillator:**
  - Lead-lag reactive bridge network providing transfer ratio $\beta = \frac{1}{3}$ at zero phase shift.
  - Resonant oscillation frequency:
    $$f_0 = \frac{1}{2\pi R C}$$
  - Amplifier gain requirement: $A_v \ge 3$ ($1 + \frac{R_f}{R_1} \ge 3 \implies R_f \ge 2 R_1$).
- **RC Phase-Shift Oscillator:**
  - Three cascaded $R\text{–}C$ high-pass stages, each providing $60^\circ$ phase shift for total $180^\circ$, combined with $180^\circ$ inverting amplifier.
  - Oscillation frequency:
    $$f_0 = \frac{1}{2\pi R C \sqrt{6}}$$
  - Minimum amplifier gain: $|A_v| \ge 29$.

### 5. Radio-Frequency LC Oscillators
- **Colpitts Oscillator:**
  - Tapped capacitive voltage divider feedback ($C_1, C_2$) in parallel with inductor $L$.
  - Equivalent tank capacitance: $C_{eq} = \frac{C_1 C_2}{C_1 + C_2}$.
  - Oscillation frequency:
    $$f_0 = \frac{1}{2\pi \sqrt{L C_{eq}}}$$
- **Hartley Oscillator:**
  - Tapped inductive feedback ($L_1, L_2$) with mutual coupling $M$ and tuning capacitor $C$.
  - Equivalent tank inductance: $L_{eq} = L_1 + L_2 + 2M$.
  - Oscillation frequency:
    $$f_0 = \frac{1}{2\pi \sqrt{L_{eq} C}}$$
