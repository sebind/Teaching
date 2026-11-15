# Module 1: Semiconductor Physics & Diode Theory
### 23IR202 — Basics of Electronics

::: warning Stage 2 — Upcoming Module Build
This chapter blueprint outlines the theoretical scope, mathematical models, and circuit architectures for **Module 1: Semiconductor Physics and Diode Theory**. Interactive SPICE circuit simulations and diode VI curve visualizers will be integrated in Stage 2.
:::

---

## Module Overview & Objectives

This module introduces solid-state semiconductor theory and the fundamental operating mechanics of the two-terminal $p\text{–}n$ junction diode. Students analyze carrier transport, barrier potentials, forward and reverse bias states, breakdown dynamics, and circuit rectification.

### Key Learning Outcomes
- Distinguish between intrinsic and extrinsic semiconductors, calculating carrier concentrations ($n_i$, $n$, $p$) based on donor ($N_D$) and acceptor ($N_A$) doping.
- Understand the formation of the depletion region, built-in barrier potential ($V_{bi}$), and its temperature dependency (approximately $-2\text{ mV/}^\circ\text{C}$).
- Evaluate diode approximation models: Ideal diode ($V_F = 0\text{ V}$), Offset model ($V_F \approx 0.7\text{ V}$ for Si, $0.3\text{ V}$ for Ge), and Complete diode model with internal bulk resistance ($r_d$).
- Apply Zener diodes in shunt voltage regulation circuits across variable line voltages and load currents.
- Interpret industry datasheets (e.g., 1N4007, 1N4148, 1N4728) for maximum ratings: $V_{RRM}$, $I_{F(AV)}$, $V_F$, and power dissipation $P_D$.

---

## Detailed Syllabus & Topic Breakdown

### 1. Intrinsic and Extrinsic Semiconductors
- Diamond cubic crystal lattice of Silicon (Si) and Germanium (Ge).
- Thermal generation of electron-hole pairs at room temperature ($T = 300\text{ K}$).
- Intrinsic carrier concentration $n_i$ and the mass-action law:
  $$n \cdot p = n_i^2$$

### 2. Doping (n-type and p-type)
- Pentavalent dopants (Phosphorus, Arsenic) creating donor states and $n$-type majority conduction.
- Trivalent dopants (Boron, Gallium) creating acceptor states and $p$-type hole conduction.
- Energy band diagrams: conduction band $E_c$, valence band $E_v$, and Fermi energy level $E_F$.

### 3. The PN Junction & Barrier Potential
- Unbiased junction: diffusion of majority carriers across metallurgical interface forming the depletion space-charge layer.
- Uncompensated donor ions ($+q$) and acceptor ions ($-q$) generating a built-in electric field $\mathbf{E}$.
- Built-in barrier potential formula:
  $$V_{bi} = \frac{k_B T}{q} \ln\left(\frac{N_A N_D}{n_i^2}\right) = V_T \ln\left(\frac{N_A N_D}{n_i^2}\right)$$
  where thermal voltage $V_T \approx 25.86\text{ mV}$ at $300\text{ K}$.

### 4. Biased Operation: Forward & Reverse Bias
- **Forward Bias ($V_D > 0$):** Reduction of potential barrier, exponential carrier injection, Shockley ideal diode equation:
  $$I_D = I_S \left( e^{\frac{V_D}{n V_T}} - 1 \right)$$
- **Reverse Bias ($V_D < 0$):** Widening of depletion region, reverse saturation current $I_S$ (nanoamperes in Si).

### 5. Breakdown Mechanisms
- **Zener Breakdown:** Quantum mechanical tunneling in heavily doped thin junctions occurring at low reverse potentials ($V_Z < 5\text{ V}$), with negative temperature coefficient.
- **Avalanche Breakdown:** Impact ionization and secondary carrier multiplication in lightly doped junctions ($V_{BR} > 6\text{ V}$), with positive temperature coefficient.

### 6. Diode DC & Dynamic AC Resistance
- Static (DC) resistance: $R_{DC} = \frac{V_D}{I_D}$ at a specific operating Q-point.
- Dynamic (AC) small-signal resistance:
  $$r_d = \frac{dV_D}{dI_D} = \frac{n V_T}{I_D} \approx \frac{26\text{ mV}}{I_D\text{ (mA)}}$$

### 7. Core Circuit Applications
- **Half-Wave & Full-Wave Rectifiers:** Center-tapped and bridge rectifiers; ripple factor $\gamma$, efficiency $\eta$, and Peak Inverse Voltage (PIV).
- **Clippers (Limiters) & Clampers (DC Restorers):** Biased clipping networks for waveform shaping and capacitor-diode baseline level shift.
- **Zener Shunt Voltage Regulator:** Design criteria for minimum and maximum load currents:
  $$R_S = \frac{V_{in,min} - V_Z}{I_{L,max} + I_{Z,min}}$$

### 8. Datasheet Interpretation Laboratory Roadmap
- Maximum Peak Repetitive Reverse Voltage ($V_{RRM}$).
- Forward continuous current ($I_F$) and non-repetitive surge current ($I_{FSM}$).
- Forward voltage drop curve $V_F$ vs. $I_F$ across $-40^\circ\text{C}$ to $+125^\circ\text{C}$.
