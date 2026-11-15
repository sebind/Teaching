# 23IR202: Basics of Electronics
### Course Overview, Syllabus Roadmap & Stage 2 Blueprint

<div class="instructor-profile-card">
  <div class="instructor-avatar">SD</div>
  <div class="instructor-details">
    <h3>Dr. Sebin Devasia</h3>
    <p>Course Instructor · Department of Physics, PSG Institute of Advanced Studies</p>
    <a href="mailto:seb@psgias.ac.in" class="instructor-email">✉ seb@psgias.ac.in</a>
  </div>
</div>

::: warning Stage 2 — Upcoming Module Build
This courseware section for **23IR202 – Basics of Electronics** is part of **Stage 2** of the PSG IAS Courseware initiative. The comprehensive syllabus, topic blueprints, learning objectives, and circuit component roadmaps are established below. Interactive circuit simulators, SPICE models, and worked numericals will be deployed in the upcoming release.
:::

---

## 5-Module Syllabus Architecture

<script setup>
import { withBase } from 'vitepress'
</script>

<div class="portal-grid">
  <!-- Module 1 -->
  <a :href="withBase('/electronics/module-1/')" class="portal-card">
    <div class="portal-card-header">
      <span class="portal-card-badge stage2">Module 1 · Stage 2</span>
      <span style="font-size: 0.78rem; font-weight: 700; color: #d97706;">Semiconductors</span>
    </div>
    <h3 class="portal-card-title">Semiconductor Physics & Diode Theory</h3>
    <p class="portal-card-desc">
      Intrinsic and extrinsic semiconductors, doping, PN junction barrier potential, forward/reverse bias, breakdown, DC resistance, Zener regulators, and manufacturer datasheet interpretation.
    </p>
    <div class="portal-card-footer">
      <span>11 Topics Blueprint</span>
      <span>View Module Blueprint →</span>
    </div>
  </a>

  <!-- Module 2 -->
  <a :href="withBase('/electronics/module-2/')" class="portal-card">
    <div class="portal-card-header">
      <span class="portal-card-badge stage2">Module 2 · Stage 2</span>
      <span style="font-size: 0.78rem; font-weight: 700; color: #d97706;">Transistors</span>
    </div>
    <h3 class="portal-card-title">Bipolar Junction Transistors (BJT)</h3>
    <p class="portal-card-desc">
      NPN/PNP structures, CB/CE/CC configurations, base & collector characteristic curves, DC load lines, Q-point stabilization, transistor switches, and voltage divider bias networks.
    </p>
    <div class="portal-card-footer">
      <span>10 Topics Blueprint</span>
      <span>View Module Blueprint →</span>
    </div>
  </a>

  <!-- Module 3 -->
  <a :href="withBase('/electronics/module-3/')" class="portal-card">
    <div class="portal-card-header">
      <span class="portal-card-badge stage2">Module 3 · Stage 2</span>
      <span style="font-size: 0.78rem; font-weight: 700; color: #d97706;">Circuits</span>
    </div>
    <h3 class="portal-card-title">Amplifiers & Oscillators</h3>
    <p class="portal-card-desc">
      Class A, B, C, and D power amplification, push-pull emitter followers, Barkhausen criterion for oscillation, Wien-bridge, phase-shift RC, Colpitts, and Hartley LC resonant tanks.
    </p>
    <div class="portal-card-footer">
      <span>9 Topics Blueprint</span>
      <span>View Module Blueprint →</span>
    </div>
  </a>

  <!-- Module 4 -->
  <a :href="withBase('/electronics/module-4/')" class="portal-card">
    <div class="portal-card-header">
      <span class="portal-card-badge stage2">Module 4 · Stage 2</span>
      <span style="font-size: 0.78rem; font-weight: 700; color: #d97706;">Linear ICs</span>
    </div>
    <h3 class="portal-card-title">Operational Amplifiers (Op-Amps)</h3>
    <p class="portal-card-desc">
      741 IC internal architecture, inverting and non-inverting topologies, differential amplifiers, instrumentation amplifiers, active low-pass, high-pass, band-stop, and all-pass filter designs.
    </p>
    <div class="portal-card-footer">
      <span>10 Topics Blueprint</span>
      <span>View Module Blueprint →</span>
    </div>
  </a>

  <!-- Module 5 -->
  <a :href="withBase('/electronics/module-5/')" class="portal-card">
    <div class="portal-card-header">
      <span class="portal-card-badge stage2">Module 5 · Stage 2</span>
      <span style="font-size: 0.78rem; font-weight: 700; color: #d97706;">Regulators & Timing</span>
    </div>
    <h3 class="portal-card-title">Voltage Regulators & Timing Circuits</h3>
    <p class="portal-card-desc">
      Fixed (78xx/79xx) and adjustable (LM317) three-terminal linear regulators, 555 Timer in monostable and astable modes, phase-locked loops (PLL), function generator ICs, and shunt/series current boosters.
    </p>
    <div class="portal-card-footer">
      <span>10 Topics Blueprint</span>
      <span>View Module Blueprint →</span>
    </div>
  </a>
</div>

---

## Official Syllabus Outline (23IR202)

| Module | Core Domain | Prescribed Topics |
| :---: | :--- | :--- |
| **1** | **Semiconductor Physics & Diode Theory** | Intrinsic and Extrinsic semiconductors, Doping, Ideal diode, PN Junction diode, Forward bias, Reverse bias, Breakdown, Barrier potential and temperature, DC resistance of a diode, Applications of PN junction diode, Zener diode as a voltage regulator, Data sheet interpretation of a diode. |
| **2** | **Bipolar Junction Transistor** | Unbiased and biased NPN and PNP transistor, Configurations of BJT, Transistor currents, Base curves, Collector curve, Load line, Operating point, Transistor as switch, Emitter bias, Voltage divider bias: Load line and Q-point, Datasheet interpretation of transistor. |
| **3** | **Amplifiers & Oscillators** | Introduction, Class A, Class B – Class C, Class D operation, Push-pull Emitter Follower, Theory of Sinusoidal oscillation, Barkhausen Criteria, Wien-bridge oscillator, RC oscillator, Colpitts oscillator, LC oscillator. |
| **4** | **Operational Amplifiers** | The 741 Op-Amp, Inverting and Non-inverting Amplifier, Characteristics and Applications of Op-Amp, Differential Amplifier, Instrumentation Amplifier, Current Boosters, Low-pass filter, High-pass filter, Band stop filter, All-pass filter. |
| **5** | **Voltage Regulators** | Fixed and Adjustable three terminal regulators, 555 timer, Monostable and Astable operation of the 555 timer, 555 timer applications, Phase locked loop, Function generator ICs, Supply characteristics, Shunt regulator, Series regulator, Current boosters. |
