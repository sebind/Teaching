# Module 5: Voltage Regulators & Timing Circuits
### 23IR202 — Basics of Electronics

::: warning Stage 2 — Upcoming Module Build
This chapter blueprint outlines the theoretical scope, mathematical models, and circuit architectures for **Module 5: Voltage Regulators and Timing Circuits**. Interactive 555 waveform generators, regulator thermal drop calculators, and PLL lock-range visualizers will be integrated in Stage 2.
:::

---

## Module Overview & Objectives

This module explores DC power supply regulation and mixed-signal timing architectures. Students examine fixed and adjustable three-terminal linear IC regulators, external pass-transistor current boosting, the internal architecture and timing modes of the industry-standard 555 Timer IC, Phase-Locked Loops (PLL), and monolithic function generator integrated circuits.

### Key Learning Outcomes
- Analyze series and shunt linear regulator topologies, quantifying Line Regulation, Load Regulation, and Ripple Rejection ratio ($\text{PSRR}$).
- Configure fixed positive ($78\text{xx}$), fixed negative ($79\text{xx}$), and adjustable ($LM317$) three-terminal voltage regulators.
- Expand regulator current capabilities beyond datasheet limits ($1.5\text{ A}$) using PNP bypass power transistors.
- Derive timing interval equations for the **555 Timer** in both Monostable (one-shot pulse) and Astable (free-running square wave) configurations.
- Understand the operating principles of Phase-Locked Loops (PLL: Phase detector, Loop filter, VCO) and monolithic function generators (e.g. XR-2206 / ICL8038).

---

## Detailed Syllabus & Topic Breakdown

### 1. Power Supply Characteristics & Regulation Metrics
- **Line Regulation:** Percentage change in output voltage per volt change in unregulated input voltage:
  $$\text{Line Reg} = \frac{\Delta V_o}{\Delta V_{in}} \times 100\%$$
- **Load Regulation:** Deviation between no-load and full-load output levels:
  $$\text{Load Reg} = \frac{V_{NL} - V_{FL}}{V_{FL}} \times 100\%$$
- Thermal dissipation and heatsink requirements: $P_D = (V_{in} - V_{out}) I_L + V_{in} I_{adj}$.

### 2. Three-Terminal Linear Regulators
- **Fixed Regulators ($78\text{xx} / 79\text{xx}$):** Positive ($7805, 7812$) and complementary negative ($7905, 7912$) output regulation with internal current limiting and thermal shutdown.
- **Adjustable Regulator (LM317):** Maintains a precise $1.25\text{ V}$ reference between output and adjustment pin:
  $$V_{out} = V_{ref} \left( 1 + \frac{R_2}{R_1} \right) + I_{adj} R_2$$
  where $V_{ref} = 1.25\text{ V}$ and $I_{adj} \approx 50\,\mu\text{A}$.

### 3. Current Boosting Networks
- External PNP pass transistor (e.g. TIP2955) connected across input and output.
- Sense resistor $R_s$ drops voltage proportional to input current: when $I_L R_s \ge V_{EB} \approx 0.7\text{ V}$, the power transistor turns on to conduct excess load current up to tens of amperes.

### 4. The 555 Timer IC
- Internal block diagram: 3-resistor divider network ($\frac{1}{3}V_{CC}$ and $\frac{2}{3}V_{CC}$ reference points), two precision voltage comparators, RS flip-flop, discharge transistor, and output driver stage.
- **Monostable Multivibrator (One-Shot Mode):**
  - Triggered by falling edge below $\frac{1}{3}V_{CC}$.
  - Pulse duration:
    $$T = 1.1 \, R_A C$$
- **Astable Multivibrator (Free-Running Oscillator):**
  - External charging path ($R_A + R_B$) and discharge path ($R_B$).
  - Timing expressions:
    $$t_{high} = 0.693 \, (R_A + R_B) C, \quad t_{low} = 0.693 \, R_B C$$
    $$T = t_{high} + t_{low} = 0.693 \, (R_A + 2 R_B) C$$
    $$f = \frac{1.44}{(R_A + 2 R_B) C}, \quad \text{Duty Cycle } D = \frac{R_A + R_B}{R_A + 2 R_B} \times 100\%$$

### 5. Phase-Locked Loops (PLL) & Function Generator ICs
- **PLL Core Stages:** Phase Frequency Detector (PFD), Low-Pass Loop Filter (LPF), and Voltage-Controlled Oscillator (VCO).
- Operating modes: Free-running, Capture range, and Lock (Tracking) range.
- Signal generation ICs: Synthesis of sine, triangle, and square waveforms via constant-current capacitor charging and non-linear transistor sine-shaping ladders.
