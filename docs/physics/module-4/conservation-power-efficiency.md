---
title: 4.2 Potential Energy, Conservation of Energy, Power & Efficiency
description: Conservative and non-conservative forces, gravitational and elastic potential energy, principle of conservation of mechanical energy, instantaneous power, and mechanical efficiency.
---

# 4.2 Potential Energy, Conservation of Energy, Power & Efficiency

::: tip Pedagogical Objective
When forces acting on a body depend solely on spatial position—such as the gravitational attraction of planets or the restoring pull of elastic springs—the work performed depends **only on initial and final endpoints**, being completely independent of the path traversed. Such forces are termed **conservative forces**.

In this chapter, we formalize **Potential Energy** ($V$), derive the **Principle of Conservation of Mechanical Energy** ($T_1 + V_1 = T_2 + V_2$), examine how non-conservative friction irreversibly dissipates mechanical energy into thermal energy, and analyze **Instantaneous Power** ($P = \mathbf{F}\cdot\mathbf{v}$) and **Mechanical Efficiency** ($\eta$) in heavy hoisting machinery.
:::

---

## 1. Conservative Forces & Potential Energy

### 1.1 Definition of a Conservative Force

A force $\mathbf{F}$ acting on a particle is defined as **conservative** if it satisfies any of the following mathematically equivalent criteria:
1. **Path Independence:** The work done $U_{1\to 2} = \int_{A_1}^{A_2} \mathbf{F} \cdot d\mathbf{r}$ depends **solely** on the initial and final positions ($A_1$ and $A_2$), and is identical for every possible path connecting them.
2. **Zero Work Along Any Closed Loop:** The circulation of $\mathbf{F}$ along any arbitrary closed contour is identically zero:
   $$\oint \mathbf{F} \cdot d\mathbf{r} = 0$$
3. **Gradient of a Scalar Potential:** The force field can be expressed as the negative gradient of a single-valued scalar potential function $V(x, y, z)$:
   $$\mathbf{F} = -\nabla V = -\left(\frac{\partial V}{\partial x}\mathbf{i} + \frac{\partial V}{\partial y}\mathbf{j} + \frac{\partial V}{\partial z}\mathbf{k}\right)$$
4. **Irrotational Field:** The curl of the force vector field vanishes everywhere:
   $$\nabla \times \mathbf{F} = \mathbf{0}$$

<LectureFigure
  src="/images/physics/mod4/mod4_conservative_paths.png"
  caption="Path independence of a conservative force between endpoints A_1 and A_2 across distinct trajectories, and zero total work around any closed loop (∮ F · dr = 0)."
  slide="Mod 4 · Slide 11"
  max-width="620px"
/>

---

### 1.2 Potential Energy ($V$)

The **Potential Energy** $V$ of a body represents the capacity to do work by virtue of its position or elastic configuration. The work done by a conservative force during displacement from state 1 to state 2 is defined as the **negative change in potential energy**:

$$U_{1\to 2} = V_1 - V_2 = -\Delta V$$

---

### 1.3 Gravitational Potential Energy ($V_g$)

For a particle of mass $m$ and weight $W = mg$ located near the Earth's surface at a vertical elevation $y$ above an arbitrary horizontal reference datum plane ($y = 0$):

$$V_g = W y = m g y$$

<LectureFigure
  src="/images/physics/mod4/mod4_potential_energy_gravity.png"
  caption="Gravitational potential energy V_g = Wy measured from a horizontal datum and path-independent work of weight U_{1→2} = W y_1 - W y_2."
  slide="Mod 4 · Slide 9"
  max-width="400px"
/>

- If the particle is **above** the datum: $V_g > 0$.
- If the particle is **on** the datum: $V_g = 0$.
- If the particle is **below** the datum: $V_g < 0$.
- The work done by gravity as the particle moves from $y_1$ to $y_2$ is:
  $$U_{1\to 2} = (V_g)_1 - (V_g)_2 = W y_1 - W y_2 = -W(y_2 - y_1)$$

---

### 1.4 Elastic Potential Energy ($V_e$)

For a linear elastic spring of stiffness $k$ whose deformation from its unstretched free length is $x$ ($x = l - l_0$):

$$V_e = \frac{1}{2} k x^2$$

::: info Key Property of Elastic Energy
Because deformation $x$ is squared ($x^2$), the elastic potential energy $V_e$ is **always positive** ($V_e \ge 0$), regardless of whether the spring is elongated ($x > 0$) or compressed ($x < 0$). The reference datum ($V_e = 0$) is fixed at the unstretched position ($x = 0$).
:::

The work done by the spring on the particle during a displacement from deformation $x_1$ to $x_2$ is:

$$U_{1\to 2} = (V_e)_1 - (V_e)_2 = \frac{1}{2}kx_1^2 - \frac{1}{2}kx_2^2$$

---

## 2. Conservative vs. Non-Conservative Forces

```
+---------------------------------------+---------------------------------------+
|          CONSERVATIVE FORCES          |        NON-CONSERVATIVE FORCES        |
+---------------------------------------+---------------------------------------+
| • Work is strictly independent of the | • Work is highly path-dependent.      |
|   geometric path taken.               | • Cannot be derived from a scalar     |
| • Total work around any closed loop   |   potential energy function V.        |
|   is zero: ∮ F · dr = 0.              | • Work along a closed path is NOT     |
| • Energy is temporarily stored in the |   zero: ∮ F_nc · dr ≠ 0.              |
|   system and fully recoverable.       | • Friction and drag always oppose     |
| • Examples: Gravity, linear spring,   |   motion, performing negative work:   |
|   Coulomb electrostatic forces.       |   U_friction = -∫ F_k ds < 0.         |
| • Governed by mechanical potential:   | • Irreversibly transforms mechanical  |
|   T₁ + V₁ = T₂ + V₂                   |   energy into internal thermal energy.|
+---------------------------------------+---------------------------------------+
```

### The First Law of Thermodynamics in Mechanics
When non-conservative forces (like dry friction $F_k$ or viscous drag) act on a system, the Principle of Work and Energy states:

$$T_1 + V_1 + U_{1\to 2}^{nc} = T_2 + V_2$$

Since friction work is always negative ($U_{1\to 2}^{nc} = -E_{thermal}$):

$$E_{mech, 1} = E_{mech, 2} + E_{thermal}$$

Mechanical energy is not destroyed; it is converted at the molecular level into disordered thermal internal energy (heat).

---

## 3. Principle of Conservation of Mechanical Energy

If **all forces doing work on the system are conservative** ($U_{1\to 2}^{nc} = 0$), then:

$$U_{1\to 2} = V_1 - V_2 = T_2 - T_1$$

Rearranging terms:

$$T_1 + V_1 = T_2 + V_2$$

Defining total mechanical energy as $E = T + V$:

$$E = T + V = \text{constant}$$

::: info Conservation of Mechanical Energy
When a particle moves under the action of conservative forces alone, the total mechanical energy $E$ (the sum of kinetic energy $T$ and potential energy $V$) remains strictly constant throughout the motion.
:::

<LectureFigure
  src="/images/physics/mod4/mod4_pendulum_energy.png"
  caption="Conservation of mechanical energy (T_1 + V_1 = T_2 + V_2) illustrated by the continuous exchange between potential and kinetic energy in a swinging pendulum."
  slide="Mod 4 · Slide 13"
  max-width="420px"
/>

---

## 4. Power & Mechanical Efficiency

### 4.1 Instantaneous Power

**Power** is defined as the time rate at which work is performed:

$$P = \frac{dU}{dt}$$

Since $dU = \mathbf{F} \cdot d\mathbf{r}$:

$$P = \mathbf{F} \cdot \frac{d\mathbf{r}}{dt} = \mathbf{F} \cdot \mathbf{v}$$

Where:
- $\mathbf{F}$ is the applied force vector ($\text{N}$).
- $\mathbf{v}$ is the instantaneous velocity vector of the point of application ($\text{m/s}$).

```
+-------------------------------------------------------------------------------+
|                             STANDARD UNITS OF POWER                           |
+-------------------------------------------------------------------------------+
| • SI Unit: Watt (W)                                                           |
|   1 W = 1 J/s = 1 N·m/s = 1 kg·m²/s³                                          |
| • Common Multiples:                                                           |
|   1 Kilowatt (kW) = 1,000 W                                                   |
|   1 Megawatt (MW) = 1,000,000 W                                               |
| • Imperial Unit: Horsepower (hp)                                              |
|   1 hp = 550 ft·lb/s = 745.7 W ≈ 746 W = 0.746 kW                             |
+-------------------------------------------------------------------------------+
```

---

### 4.2 Mechanical Efficiency ($\eta$)

Real mechanical systems contain bearings, gears, and sliding joints that dissipate energy via friction. The **mechanical efficiency** $\eta$ is defined as the dimensionless ratio:

$$\eta = \frac{\text{Power Output}}{\text{Power Input}} = \frac{P_{out}}{P_{in}} = \frac{\text{Useful Work Output}}{\text{Total Work Input}} = \frac{U_{out}}{U_{in}}$$

Because energy dissipation cannot be eliminated in physical machines:

$$P_{out} < P_{in} \iff \eta < 1 \quad (\text{or } \eta < 100\%)$$

$$P_{loss} = P_{in} - P_{out} = P_{in}(1 - \eta)$$

---

## 5. Full Worked Problems from Lecture Slides

### Worked Problem 4.3: Collar Sliding Down Vertical Rod with Attached Spring
*(From PSG IAS Lecture Slide 14 & Official Important Questions Q11)*

A collar of mass $m = 2\text{ kg}$ is constrained to slide along a smooth, frictionless vertical guide rod. A linear spring of stiffness $k = 3\text{ N/m}$ and undeformed free length $l_0 = 4\text{ m}$ is attached to the collar and anchored to a fixed pin $O$ located at a horizontal distance of $8\text{ m}$ from the rod.
The collar is released from rest at **Position 1**, where it is horizontally aligned with the pin $O$.
Using the Principle of Conservation of Mechanical Energy, calculate the velocity $v_2$ of the collar as it reaches **Position 2** after sliding vertically downward a distance of $h = 6\text{ m}$. Take $g = 9.81\text{ m/s}^2$ *(also verify with $g = 9.8\text{ m/s}^2$)*.

<LectureFigure
  src="/images/physics/mod4/mod4_collar_spring_rod.png"
  caption="2 kg collar sliding down a smooth vertical guide rod from Position 1 to Position 2 (6 m vertical drop) while attached to a linear spring (l_0 = 4 m, k = 3 N/m, 8 m horizontal span), reaching v_2 = 9.36 m/s."
  slide="Mod 4 · Slide 14"
  max-width="420px"
/>

::: details Click to view Step-by-Step Solution

#### Step 1: Establish Datum & Geometry
1. **Coordinate Datum:** Set the gravitational datum ($y = 0$) at **Position 1**.
   - Position 1: $y_1 = 0\text{ m}$
   - Position 2: $y_2 = -6\text{ m}$
2. **Spring Deformation in Position 1:**
   - Spring length: $l_1 = 8\text{ m}$
   - Free length: $l_0 = 4\text{ m}$
   - Stretch:
     $$x_1 = l_1 - l_0 = 8 - 4 = 4\text{ m}$$
3. **Spring Deformation in Position 2:**
   - The spring forms a right triangle with horizontal leg $8\text{ m}$ and vertical leg $6\text{ m}$:
     $$l_2 = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = \sqrt{100} = 10\text{ m}$$
   - Stretch:
     $$x_2 = l_2 - l_0 = 10 - 4 = 6\text{ m}$$

---

#### Step 2: Mechanical Energy at Position 1
- **Kinetic Energy:** Released from rest:
  $$T_1 = \frac{1}{2} m v_1^2 = 0\text{ J}$$
- **Gravitational Potential Energy:** At datum ($y_1 = 0$):
  $$V_{g1} = m g y_1 = 0\text{ J}$$
- **Elastic Potential Energy:**
  $$V_{e1} = \frac{1}{2} k x_1^2 = \frac{1}{2}(3)(4)^2 = \frac{1}{2}(3)(16) = 24\text{ J}$$
- **Total Initial Energy:**
  $$E_1 = T_1 + V_{g1} + V_{e1} = 0 + 0 + 24 = 24\text{ J}$$

---

#### Step 3: Mechanical Energy at Position 2
- **Kinetic Energy:**
  $$T_2 = \frac{1}{2} m v_2^2 = \frac{1}{2}(2) v_2^2 = v_2^2$$
- **Gravitational Potential Energy:** Below datum ($y_2 = -6\text{ m}$):
  $$V_{g2} = m g y_2 = 2 \times 9.81 \times (-6) = -117.72\text{ J}$$
  *(With $g = 9.8\text{ m/s}^2$: $V_{g2} = 2 \times 9.8 \times (-6) = -117.6\text{ J}$)*
- **Elastic Potential Energy:**
  $$V_{e2} = \frac{1}{2} k x_2^2 = \frac{1}{2}(3)(6)^2 = \frac{1}{2}(3)(36) = 54\text{ J}$$
- **Total Final Energy:**
  $$E_2 = T_2 + V_{g2} + V_{e2} = v_2^2 - 117.72 + 54 = v_2^2 - 63.72\text{ J}$$

---

#### Step 4: Apply Conservation of Mechanical Energy
Since the guide rod is frictionless and the spring is elastic, only conservative forces perform work:
$$E_1 = E_2$$
$$24 = v_2^2 - 63.72$$
$$v_2^2 = 24 + 63.72 = 87.72$$
$$v_2 = \sqrt{87.72} = 9.366\text{ m/s} \approx 9.36\text{ m/s}$$

*(Verification with $g = 9.8\text{ m/s}^2$:*
$$24 = v_2^2 - 117.6 + 54 \implies v_2^2 = 24 + 63.6 = 87.6 \implies v_2 = \sqrt{87.6} = 9.359\text{ m/s} \approx 9.36\text{ m/s}$$*)*

#### Conclusion:
The collar reaches Position 2 with a downward speed of **$9.36\text{ m/s}$**.
:::

---

### Worked Problem 4.4: Dumbwaiter and Counterweight Hoisting System
*(From PSG IAS Lecture Slide 17 & Official Important Questions Q12)*

A dumbwaiter $D$ of weight $W_D = 600\text{ N}$ is hoisted by a motor $M$. A counterweight $C$ of weight $W_C = 800\text{ N}$ is suspended by a cable wrapped around a movable pulley. 
The dumbwaiter travels vertically upward at a constant instantaneous velocity of $v_D = 8\text{ m/s}$.
Determine the power delivered by motor $M$ (in Watts and Horsepower):
1. When the system moves with **uniform velocity** ($a_D = 0$).
2. When the dumbwaiter has an **upward acceleration** of $a_D = 2.5\text{ m/s}^2$.

<LectureFigure
  src="/images/physics/mod4/mod4_dumbwaiter_motor.png"
  caption="Dumbwaiter D (600 N) and Counterweight C (800 N) hoisted by electric motor M, complete with Fig. 1 Free-Body Diagrams for uniform motion and Figs. 2–3 Free-Body and Kinetic Diagrams for accelerated motion."
  slide="Mod 4 · Slide 17"
  max-width="460px"
/>

::: details Click to view Step-by-Step Solution

#### Step 1: Kinematic Cable Constraint
Let $y_D$ be the upward displacement coordinate of dumbwaiter $D$, and $y_C$ be the downward displacement coordinate of counterweight $C$.
From the pulley arrangement, the counterweight is suspended by two cable segments:
$$y_D + 2 y_C = L_{total}$$
Differentiating once and twice with respect to time:
$$v_D = 2 v_C \iff v_C = \frac{v_D}{2}$$
$$a_D = 2 a_C \iff a_C = \frac{a_D}{2}$$
When the dumbwaiter ascends at $v_D = 8\text{ m/s}$, the counterweight descends at:
$$v_C = \frac{8}{2} = 4\text{ m/s}$$

---

#### Step 2: Part (a) — Uniform Motion ($a = 0$)
1. **Equilibrium of Counterweight $C$ ($a_C = 0$):**
   The movable pulley is supported by two upward cable tensions $T$:
   $$\sum F_y = 2T - W_C = 0 \implies 2T = 800\text{ N} \implies T = 400\text{ N}$$
2. **Equilibrium of Dumbwaiter $D$ ($a_D = 0$):**
   The dumbwaiter is pulled upward by cable tension $T$ (from the counterweight) and by motor force $F$:
   $$\sum F_y = F + T - W_D = 0$$
   $$F + 400 - 600 = 0 \implies F = 200\text{ N}$$
3. **Power Delivered by Motor:**
   The motor cable runs directly to dumbwaiter $D$, so the pulling speed is $v_D = 8\text{ m/s}$:
   $$P = F \cdot v_D = (200\text{ N})(8\text{ m/s}) = 1600\text{ W} = 1.60\text{ kW}$$
   In horsepower ($1\text{ hp} = 746\text{ W}$):
   $$P = \frac{1600}{746} = 2.145\text{ hp} \approx 2.14\text{ hp}$$

---

#### Step 3: Part (b) — Accelerated Motion ($a_D = 2.5\text{ m/s}^2 \uparrow$)
1. **Kinematics:**
   $$a_D = 2.5\text{ m/s}^2 \uparrow \implies a_C = \frac{2.5}{2} = 1.25\text{ m/s}^2 \downarrow$$
2. **Masses:**
   $$m_C = \frac{W_C}{g} = \frac{800}{9.81} = 81.55\text{ kg}$$
   $$m_D = \frac{W_D}{g} = \frac{600}{9.81} = 61.16\text{ kg}$$
3. **Kinetics of Counterweight $C$ (Taking downward positive):**
   $$\sum F_y = W_C - 2T = m_C a_C$$
   $$800 - 2T = (81.55)(1.25) = 101.94\text{ N}$$
   $$2T = 800 - 101.94 = 698.06\text{ N} \implies T = 349.03\text{ N}$$
4. **Kinetics of Dumbwaiter $D$ (Taking upward positive):**
   $$\sum F_y = F + T - W_D = m_D a_D$$
   $$F + 349.03 - 600 = (61.16)(2.5) = 152.90\text{ N}$$
   $$F = 600 - 349.03 + 152.90 = 403.87\text{ N}$$
5. **Instantaneous Power at $v_D = 8\text{ m/s}$:**
   $$P = F \cdot v_D = (403.87\text{ N})(8\text{ m/s}) = 3231.0\text{ W} = 3.23\text{ kW}$$
   In horsepower ($1\text{ hp} = 746\text{ W}$):
   $$P = \frac{3231.0}{746} = 4.331\text{ hp} \approx 4.33\text{ hp}$$
   *(Verification using lecture slide $g = 9.8\text{ m/s}^2$: $T = 348.98\text{ N}$, $F = 404.08\text{ N}$, $P = 3232.64\text{ W} = 4.333\text{ hp} \approx 4.33\text{ hp}$).*

#### Performance Comparison:
Accelerating the load at $2.5\text{ m/s}^2$ more than **doubles** the required motor power from $2.14\text{ hp}$ to $4.33\text{ hp}$, demonstrating the critical influence of inertial loads in hoist motor sizing.
:::

---

## 6. Interactive Laboratory Simulation

Visualize the real-time exchange between Kinetic Energy ($T$), Gravitational Potential Energy ($V_g$), Elastic Potential Energy ($V_e$), and non-conservative Thermal Dissipation ($E_{th}$) in the simulator below:

<EnergyCollarAndDumbwaiterSim />

---

## 7. Summary & Mastery Checklist

Confirm your comprehension of Section 4.2 before testing your skills on the Module 4 exam bank:
- [x] State the four mathematical conditions defining a conservative force field ($\oint \mathbf{F}\cdot d\mathbf{r} = 0$, $\mathbf{F} = -\nabla V$).
- [x] Define Gravitational Potential Energy ($V_g = mgy$) and Elastic Potential Energy ($V_e = \frac{1}{2}kx^2$).
- [x] Formulate the Principle of Conservation of Mechanical Energy ($T_1 + V_1 = T_2 + V_2$).
- [x] Compute instantaneous mechanical power using the vector dot product $P = \mathbf{F}\cdot\mathbf{v}$.
- [x] Evaluate mechanical efficiency $\eta = P_{out}/P_{in}$ and determine power losses.
- [x] Solve coupled hoist problems with accelerating counterweights.
