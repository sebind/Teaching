# Module 4: Operational Amplifiers (Op-Amps)
### 23IR202 — Basics of Electronics

::: warning Stage 2 — Upcoming Module Build
This chapter blueprint outlines the theoretical scope, mathematical models, and circuit architectures for **Module 4: Operational Amplifiers**. Interactive Op-Amp virtual breadboards, Bode plot filter simulators, and instrumentation amplifier gain calculators will be integrated in Stage 2.
:::

---

## Module Overview & Objectives

This module focuses on the operational amplifier as the foundational building block of linear analog signal processing. Students explore ideal versus practical op-amp metrics (specifically the ubiquitous $\mu\text{A}741$ IC), closed-loop feedback configurations, differential and instrumentation amplifiers, current booster output buffers, and four major active filter topologies.

### Key Learning Outcomes
- Contrast ideal op-amp parameters ($A_{OL} = \infty, R_{in} = \infty, R_{out} = 0, \text{BW} = \infty$) with practical $\mu\text{A}741$ specifications ($A_{OL} \approx 200,000, R_{in} \approx 2\text{ M}\Omega, R_{out} \approx 75\,\Omega, f_T \approx 1\text{ MHz}, \text{SR} \approx 0.5\text{ V}/\mu\text{s}$).
- Apply the **Virtual Short Concept** ($V_+ \approx V_-$ and $I_+ = I_- \approx 0$) under negative feedback to derive closed-loop gain for inverting and non-inverting configurations.
- Design precision 3-op-amp **Instrumentation Amplifiers** with high Common-Mode Rejection Ratio (CMRR) for biomedical sensor acquisition.
- Synthesize active low-pass, high-pass, band-stop (notch), and all-pass phase-shifting filters.

---

## Detailed Syllabus & Topic Breakdown

### 1. The 741 Op-Amp Architecture & Ideal Metrics

| Parameter | Ideal Op-Amp | Practical $\mu\text{A}741$ Value |
| :--- | :---: | :---: |
| Open-Loop Voltage Gain ($A_{OL}$) | $\infty$ | $106\text{ dB} \approx 200,000$ |
| Differential Input Impedance ($R_{in}$) | $\infty$ | $2\text{ M}\Omega$ |
| Output Impedance ($R_{out}$) | $0\,\Omega$ | $75\,\Omega$ |
| Unity-Gain Bandwidth ($f_T$) | $\infty$ | $1.0\text{ MHz}$ |
| Slew Rate ($\text{SR}$) | $\infty$ | $0.5\text{ V}/\mu\text{s}$ |
| Input Offset Voltage ($V_{os}$) | $0\text{ V}$ | $1 - 5\text{ mV}$ |
| Common Mode Rejection Ratio ($\text{CMRR}$) | $\infty$ | $90\text{ dB}$ |

### 2. Fundamental Negative Feedback Topologies
- **Inverting Amplifier:**
  - Virtual ground at inverting node ($V_- = 0$).
  - Gain formula:
    $$A_v = -\frac{R_f}{R_{in}}$$
- **Non-Inverting Amplifier & Voltage Follower:**
  - Input applied to non-inverting terminal with negative voltage feedback.
  - Closed-loop gain:
    $$A_v = 1 + \frac{R_f}{R_1}$$
  - Voltage follower buffer: $R_f = 0, R_1 = \infty \implies A_v = 1$, isolating high-impedance sensors.

### 3. Differential & Instrumentation Amplifiers
- **Basic 1-Op-Amp Differential Amplifier:**
  $$V_{out} = \frac{R_2}{R_1}(V_2 - V_1) \quad (\text{when } R_1/R_2 = R_3/R_4)$$
- **Three Op-Amp Instrumentation Amplifier:**
  - High input impedance on both inputs without loading sensor bridges.
  - Overall differential gain set by a single variable gain resistor $R_G$:
    $$A_v = \left( 1 + \frac{2 R_1}{R_G} \right) \left( \frac{R_3}{R_2} \right)$$

### 4. Output Current Boosters
- Interfacing low-power op-amp outputs with low-impedance dynamic loads (speakers, motors).
- Enclosing complementary emitter followers within the op-amp negative feedback loop to absorb base-emitter crossover non-linearities.

### 5. Active Filter Topologies (Sallen-Key & Multiple Feedback)
- **Active Low-Pass Filter (LPF):** First-order cutoff frequency $f_c = \frac{1}{2\pi R C}$, with $-20\text{ dB/decade}$ rolloff.
- **Active High-Pass Filter (HPF):** Passes frequencies above $f_c$, attenuating DC drift and subsonic noise.
- **Active Band-Stop (Notch) Filter:** Twin-T notch network eliminating $50\text{ Hz}/60\text{ Hz}$ AC power line hum.
- **All-Pass Filter:** Flat unity amplitude response across all frequencies while providing continuously adjustable phase shift $\phi(\omega) = -2\tan^{-1}(\omega R C)$ from $0^\circ$ to $-180^\circ$.
