---
title: 4.3 Module 4 — Official Important Questions & Self-Check Quiz
description: Complete verbatim coverage of all 12 Official Important Questions for Module 4 with exam-ready model answers, plus an interactive self-check quiz.
---

# 4.3 Module 4 — Official Important Questions & Self-Check Quiz

::: tip Overview & Course Verification
This chapter provides the official PSG IAS examination question bank for **Module 4: Kinetics of Particles — Energy Methods**.
- **Part A** provides the **12 Official Important Questions (Module 4)** verbatim from the course source pack, complete with model mathematical solutions, free-body explanations, and step-by-step derivations in collapsible `::: details` containers.
- **Part B** features the interactive **Module 4 Mastery Quiz** testing your conceptual agility on work integrals, conservation laws, power ratings, and hoist motor dynamics.
:::

---

## Part A: Official Important Questions Bank (Module 4)

### Question 1
**What is work done by a force and how is it expressed in scalar product vector notation?**

::: details Click to view Complete Model Answer
#### 1. Definition of Work Done by a Force
The work done by a force $\mathbf{F}$ acting on a particle during an infinitesimal displacement $d\mathbf{r}$ along its path is defined as the scalar product (dot product) of the force vector and the displacement vector:

$$dU = \mathbf{F} \cdot d\mathbf{r}$$

Using the geometric definition of the dot product:

$$dU = F\,ds\cos\alpha = F_t\,ds$$

Where:
- $F = |\mathbf{F}|$ is the magnitude of the force ($\text{N}$).
- $ds = |d\mathbf{r}|$ is the differential arc length along the path ($\text{m}$).
- $\alpha$ is the angle between the line of action of the force and the instantaneous direction of displacement.
- $F_t = F\cos\alpha$ is the tangential component of the force along the path.

In 3D Cartesian rectangular coordinates:

$$\mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k}$$
$$d\mathbf{r} = dx\mathbf{i} + dy\mathbf{j} + dz\mathbf{k}$$
$$dU = F_x\,dx + F_y\,dy + F_z\,dz$$

#### 2. Finite Work
For a finite displacement along a path from point $A_1$ (arc length $s_1$) to point $A_2$ (arc length $s_2$):

$$U_{1\to 2} = \int_{A_1}^{A_2} \mathbf{F}\cdot d\mathbf{r} = \int_{s_1}^{s_2} F_t\,ds = \int_{s_1}^{s_2} (F\cos\alpha)\,ds$$

Work is a scalar quantity with the SI unit of **Joule** ($\text{1 J} = \text{1 N}\cdot\text{m} = \text{1 kg}\cdot\text{m}^2/\text{s}^2$). Forces perpendicular to the path ($\alpha = 90^\circ$, such as normal reaction $N$) perform zero work.
:::

---

### Question 2
**What is Kinetic Energy, and why is it inherently a positive scalar quantity?**

::: details Click to view Complete Model Answer
#### 1. Definition of Kinetic Energy
The Kinetic Energy ($T$) of a particle of mass $m$ moving with velocity $\mathbf{v}$ is the capacity of the body to do work by virtue of its motion, defined as:

$$T = \frac{1}{2} m v^2$$

Where $v = |\mathbf{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}$ is the speed of the particle.

#### 2. Why Kinetic Energy is Inherently a Positive Scalar
Kinetic Energy is strictly non-negative ($T \ge 0$) for any physical body because:
1. **Mass is Positive:** The inertial mass $m$ of any classical physical object is intrinsically positive ($m > 0$).
2. **Speed Squared is Non-Negative:** The velocity enters the expression via the scalar dot product with itself:
   $$v^2 = \mathbf{v} \cdot \mathbf{v} = v_x^2 + v_y^2 + v_z^2 \ge 0$$
   The square of any real scalar component ($v_x^2, v_y^2, v_z^2$) is always $\ge 0$, irrespective of whether the particle moves in the positive or negative coordinate direction.
3. **Scalar Nature:** Unlike linear momentum $\mathbf{p} = m\mathbf{v}$, kinetic energy possesses magnitude only and has no directional orientation. A particle possesses kinetic energy $T = \frac{1}{2}mv^2$ purely by having non-zero speed, and this value is zero if and only if the body is at rest ($v = 0$).
:::

---

### Question 3
**State the Principle of Work and Energy for a single particle.**

::: details Click to view Complete Model Answer
#### 1. Formal Statement
The **Principle of Work and Energy** states that the total work done by all external forces acting on a particle as it moves from an initial position 1 to a final position 2 is equal to the net change in the kinetic energy of the particle between those two positions.

#### 2. Mathematical Formulation
$$U_{1\to 2} = T_2 - T_1$$

Or, expressed in its standard energy balance form:

$$T_1 + U_{1\to 2} = T_2$$

Where:
- $T_1 = \frac{1}{2} m v_1^2$ is the initial kinetic energy at position 1.
- $U_{1\to 2} = \int_{s_1}^{s_2} \mathbf{F} \cdot d\mathbf{r}$ is the total work done by all forces (applied, gravitational, spring, and frictional) during the displacement.
- $T_2 = \frac{1}{2} m v_2^2$ is the final kinetic energy at position 2.

If $U_{1\to 2} > 0$, the particle speeds up ($T_2 > T_1$). If $U_{1\to 2} < 0$, the particle slows down ($T_2 < T_1$).
:::

---

### Question 4
**What is the difference between Conservative Force and Non-Conservative Force?**

::: details Click to view Complete Model Answer
#### Comparative Distinction

```
+---------------------------------------+---------------------------------------+
|          CONSERVATIVE FORCE           |        NON-CONSERVATIVE FORCE         |
+---------------------------------------+---------------------------------------+
| 1. Path Independence:                 | 1. Path Dependence:                   |
|    The work done depends solely on    |    The work done depends directly on  |
|    the initial and final positions,   |    the exact geometric path traversed |
|    independent of the path taken.     |    between two points.                |
| 2. Closed Loop Circulation:           | 2. Non-Zero Loop Work:                |
|    The work done around any closed    |    The work done around a closed      |
|    path is identically zero:          |    path is non-zero:                  |
|    ∮ F · dr = 0.                      |    ∮ F_nc · dr ≠ 0.                   |
| 3. Potential Function:                | 3. No Potential Function:             |
|    Can be derived from the gradient   |    Cannot be represented as the       |
|    of a scalar potential energy       |    gradient of a scalar potential     |
|    function: F = -∇V.                 |    function V.                        |
| 4. Energy Conservation:               | 4. Energy Dissipation:                |
|    Total mechanical energy is strictly|    Mechanical energy is dissipated    |
|    conserved: T₁ + V₁ = T₂ + V₂.      |    into thermal energy (heat).        |
| 5. Engineering Examples:              | 5. Engineering Examples:              |
|    Gravitational force (W = mg),      |    Dry friction (Coulomb: F_k = μ_k N)|
|    linear spring force (F = -kx),     |    fluid viscous drag, air drag,      |
|    electrostatic Coulomb forces.      |    damping forces.                    |
+---------------------------------------+---------------------------------------+
```
:::

---

### Question 5
**What is Gravitational Potential Energy (for a body near earth's surface) and Elastic Potential Energy (defined for a linear spring)?**

::: details Click to view Complete Model Answer
#### 1. Gravitational Potential Energy ($V_g$)
Gravitational potential energy is the energy possessed by a body by virtue of its vertical position in a uniform gravitational field. For a particle of weight $W = mg$ located at a vertical elevation $y$ relative to an arbitrarily chosen horizontal reference datum plane ($y = 0$):

$$V_g = W y = m g y$$

- If the body is above the datum ($y > 0$): $V_g > 0$.
- If the body is at the datum ($y = 0$): $V_g = 0$.
- If the body is below the datum ($y < 0$): $V_g < 0$.
The work done by gravity as the body moves from elevation $y_1$ to $y_2$ is:
$$U_{1\to 2} = (V_g)_1 - (V_g)_2 = W y_1 - W y_2 = -W(y_2 - y_1)$$

#### 2. Elastic Potential Energy ($V_e$)
Elastic potential energy is the internal energy stored within an elastic member (such as a linear helical spring) as a result of its physical deformation. For a linear spring of stiffness $k$ whose deformation from its undeformed (free) length is $x$ ($x = l - l_0$):

$$V_e = \frac{1}{2} k x^2$$

Because deformation $x$ is squared, $V_e$ is **always positive** ($V_e \ge 0$), whether the spring is elongated ($x > 0$) or compressed ($x < 0$). The reference datum ($V_e = 0$) is fixed at the unstretched position ($x = 0$).
The work done by the spring on the body from deformation $x_1$ to $x_2$ is:
$$U_{1\to 2} = (V_e)_1 - (V_e)_2 = \frac{1}{2}kx_1^2 - \frac{1}{2}kx_2^2$$
:::

---

### Question 6
**State the Principle of Conservation of Mechanical Energy.**

::: details Click to view Complete Model Answer
#### 1. Formal Statement
The **Principle of Conservation of Mechanical Energy** states that when a particle or system of particles moves under the exclusive action of **conservative forces**, the total mechanical energy $E$—defined as the sum of the total kinetic energy $T$ and the total potential energy $V$—remains constant throughout the motion.

#### 2. Mathematical Formulation
$$T_1 + V_1 = T_2 + V_2 = \text{constant}$$

Where:
- $T_1 = \frac{1}{2} m v_1^2$ is the initial kinetic energy.
- $V_1 = (V_g)_1 + (V_e)_1$ is the initial potential energy (sum of gravitational and elastic potential energies).
- $T_2 = \frac{1}{2} m v_2^2$ is the final kinetic energy.
- $V_2 = (V_g)_2 + (V_e)_2$ is the final potential energy.

Any loss in potential energy reappears identically as a gain in kinetic energy:
$$\Delta T = -\Delta V \iff \Delta(T + V) = 0$$
:::

---

### Question 7
**Define Instantaneous Power, state its vector formula, and specify its standard units.**

::: details Click to view Complete Model Answer
#### 1. Definition
**Instantaneous Power** ($P$) is defined as the time rate at which work is performed by a force on a particle or dynamic system:

$$P = \frac{dU}{dt}$$

#### 2. Vector Formula
Since the differential work is $dU = \mathbf{F} \cdot d\mathbf{r}$:

$$P = \frac{\mathbf{F} \cdot d\mathbf{r}}{dt} = \mathbf{F} \cdot \left(\frac{d\mathbf{r}}{dt}\right) = \mathbf{F} \cdot \mathbf{v}$$

Where:
- $\mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k}$ is the applied force vector.
- $\mathbf{v} = v_x\mathbf{i} + v_y\mathbf{j} + v_z\mathbf{k}$ is the instantaneous velocity vector of the point of application.
- In scalar component form:
  $$P = F_x v_x + F_y v_y + F_z v_z = F v \cos\alpha$$

#### 3. Standard Engineering Units
- **SI Unit:** The **Watt** ($\text{W}$), where:
  $$\text{1 W} = \text{1 J/s} = \text{1 N}\cdot\text{m/s} = \text{1 kg}\cdot\text{m}^2/\text{s}^3$$
- **Multiples:**
  - $1\text{ Kilowatt (kW)} = 10^3\text{ W}$
  - $1\text{ Megawatt (MW)} = 10^6\text{ W}$
- **Imperial / US Customary Unit:** The **Horsepower** ($\text{hp}$), defined as:
  $$\text{1 hp} = 550\text{ ft}\cdot\text{lb/s} \approx 745.7\text{ W} \approx 746\text{ W} = 0.746\text{ kW}$$
:::

---

### Question 8
**How is Mechanical Efficiency ($\eta$) defined for dynamic systems?**

::: details Click to view Complete Model Answer
#### 1. Definition
The **Mechanical Efficiency** ($\eta$) of a machine or dynamic system is defined as the dimensionless ratio of the useful power (or work) delivered by the machine to the total power (or work) supplied to the machine:

$$\eta = \frac{\text{Power Output}}{\text{Power Input}} = \frac{P_{out}}{P_{in}} = \frac{\text{Useful Work Output}}{\text{Total Work Input}} = \frac{U_{out}}{U_{in}}$$

#### 2. Thermodynamic Bounds & Friction Loss
In every physical mechanical system, non-conservative internal resistances (such as dry friction in sliding pairs, viscous shear in lubricants, and aerodynamic drag) consume energy. This power loss is converted irreversibly into thermal heat:

$$P_{in} = P_{out} + P_{loss}$$

Because $P_{loss} > 0$ in all real machines:

$$P_{out} < P_{in} \implies \eta < 1 \quad (\text{or } \eta < 100\%)$$

Mechanical efficiency is expressed either as a decimal fraction ($0 \le \eta < 1$) or as a percentage ($\eta\% = \eta \times 100$).
:::

---

### Question 9: Automobile Braking on an Incline
**An automobile weighing $W = 4000\text{ N}$ is driven down a $5^\circ$ incline at a speed of $90\text{ km/h}$ ($25\text{ m/s}$). The brakes are applied, exerting a constant braking force of $1500\text{ N}$. Determine the distance $x$ traveled by the automobile before coming to a stop.**

::: details Click to view Step-by-Step Solution
#### 1. Given Data
- Weight: $W = 4000\text{ N}$
- Mass: $m = \frac{W}{g} = \frac{4000}{9.8} = 408.16\text{ kg}$ *(or $\frac{4000}{9.81} = 407.75\text{ kg}$)*
- Incline angle: $\theta = 5^\circ$
- Initial velocity: $v_1 = 90\text{ km/h} = \frac{90}{3.6} = 25\text{ m/s}$
- Final velocity: $v_2 = 0\text{ m/s}$
- Braking force: $F_{brake} = 1500\text{ N}$ directed up the incline.

#### 2. Initial and Final Kinetic Energies
$$T_1 = \frac{1}{2} m v_1^2 = \frac{1}{2}(408.16)(25)^2 = 127,550\text{ J}$$
*(Using $g = 9.81\text{ m/s}^2$: $T_1 = \frac{1}{2}(407.75)(25)^2 = 127,422\text{ J}$)*
$$T_2 = 0\text{ J}$$

#### 3. Total Work Done During Stopping Distance $x$ ($U_{1\to 2}$)
As the car moves downhill through distance $x$:
- Work of braking force (opposes motion):
  $$U_{brake} = -F_{brake} \cdot x = -1500 x$$
- Work of gravity (downhill component of weight aids motion):
  $$U_g = +(W \sin 5^\circ) \cdot x = 4000 \sin(5^\circ) \cdot x$$
  $$\sin 5^\circ = 0.087156 \implies U_g = 4000(0.087156)x = +348.62 x$$
- Normal force does zero work ($N \perp$ displacement).

Total work:
$$U_{1\to 2} = (-1500 + 4000\sin 5^\circ)x = (-1500 + 348.62)x = -1151.38 x\text{ J}$$
*(Using slide precision: $-1151.37 x\text{ J}$)*

#### 4. Principle of Work and Energy
$$T_1 + U_{1\to 2} = T_2$$
$$127,550 - 1151.37 x = 0$$
$$1151.37 x = 127,550$$
$$x = \frac{127,550}{1151.37} = 110.78\text{ m} \approx 110.8\text{ m}$$

*(With $g = 9.81\text{ m/s}^2$: $x = \frac{127,422}{1151.38} = 110.67\text{ m} \approx 110.8\text{ m}$)*

**Answer:** The stopping distance is **$110.8\text{ m}$**.
:::

---

### Question 10: Coupled Blocks with Friction
**Two blocks $m_A = 200\text{ kg}$ (resting on a rough horizontal plane with $\mu_k = 0.25$) and $m_B = 300\text{ kg}$ (suspended vertically) are connected by an inextensible cord over a frictionless pulley. If the system is released from rest, determine the velocity of the blocks after block $B$ has moved $2\text{ m}$.**

::: details Click to view Step-by-Step Solution
#### 1. Given Data & Kinematics
- $m_A = 200\text{ kg}$, $m_B = 300\text{ kg}$
- $\mu_k = 0.25$, distance moved $d = 2\text{ m}$
- Initial state: $v_1 = 0 \implies T_1 = 0$.
- Inextensible cable: Block $A$ slides horizontally $2\text{ m}$ while block $B$ descends vertically $2\text{ m}$. Both share identical final speed $v_2 = v$.
- Cable tension $T$ is internal to the system: $+Td - Td = 0$.

#### 2. Work Done by External Forces ($U_{1\to 2}$)
- **Weight of Block $B$ (downward work):**
  $$W_B = m_B g = 300 \times 9.81 = 2943\text{ N}$$
  $$U_{g, B} = W_B \cdot d = 2943 \times 2 = +5886\text{ J}$$
- **Friction on Block $A$ (opposing motion):**
  $$N_A = m_A g = 200 \times 9.81 = 1962\text{ N}$$
  $$F_k = \mu_k N_A = 0.25 \times 1962 = 490.5\text{ N}$$
  $$U_{friction} = -F_k \cdot d = -490.5 \times 2 = -981\text{ J}$$
- Net external work:
  $$U_{1\to 2} = (W_B - F_k)d = (2943 - 490.5)(2) = 2452.5 \times 2 = 4905\text{ J}$$

#### 3. Final Kinetic Energy of System ($T_2$)
$$T_2 = \frac{1}{2}(m_A + m_B)v^2 = \frac{1}{2}(200 + 300)v^2 = \frac{1}{2}(500)v^2 = 250 v^2$$

#### 4. Principle of Work and Energy
$$T_1 + U_{1\to 2} = T_2$$
$$0 + 4905 = 250 v^2$$
$$v^2 = \frac{4905}{250} = 19.62$$
$$v = \sqrt{19.62} = 4.4294\text{ m/s} \approx 4.43\text{ m/s}$$

**Answer:** The velocity after moving $2\text{ m}$ is **$4.43\text{ m/s}$**.
:::

---

### Question 11: Collar on Vertical Rod with Linear Spring
**A $2\text{ kg}$ collar slides frictionlessly down a vertical rod. It is attached to a linear spring of stiffness $k = 3\text{ N/m}$ and undeformed length $l_0 = 4\text{ m}$, anchored to a pin at a horizontal distance of $8\text{ m}$ from the rod. The collar is released from rest at Position 1 (horizontally opposite the pin). Determine its velocity at Position 2 after sliding $6\text{ m}$ downward.**

::: details Click to view Step-by-Step Solution
#### 1. Geometry and Spring Deformations
- **Position 1 (horizontal alignment):**
  - Spring length: $l_1 = 8\text{ m}$
  - Stretch: $x_1 = l_1 - l_0 = 8 - 4 = 4\text{ m}$
  - Elastic Potential Energy:
    $$V_{e1} = \frac{1}{2} k x_1^2 = \frac{1}{2}(3)(4)^2 = 24\text{ J}$$
  - Gravitational datum at Position 1 ($y_1 = 0$):
    $$V_{g1} = 0\text{ J}$$
  - Released from rest: $T_1 = 0\text{ J}$.
  - Total Energy at 1:
    $$E_1 = T_1 + V_{e1} + V_{g1} = 0 + 24 + 0 = 24\text{ J}$$

- **Position 2 (after $6\text{ m}$ vertical drop, $y_2 = -6\text{ m}$):**
  - Spring length from right triangle:
    $$l_2 = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = \sqrt{100} = 10\text{ m}$$
  - Stretch: $x_2 = l_2 - l_0 = 10 - 4 = 6\text{ m}$
  - Elastic Potential Energy:
    $$V_{e2} = \frac{1}{2} k x_2^2 = \frac{1}{2}(3)(6)^2 = 54\text{ J}$$
  - Gravitational Potential Energy:
    $$V_{g2} = m g y_2 = 2 \times 9.8 \times (-6) = -117.6\text{ J}$$
    *(Using $g = 9.81\text{ m/s}^2$: $V_{g2} = 2 \times 9.81 \times (-6) = -117.72\text{ J}$)*
  - Kinetic Energy:
    $$T_2 = \frac{1}{2} m v_2^2 = \frac{1}{2}(2) v_2^2 = v_2^2$$
  - Total Energy at 2:
    $$E_2 = T_2 + V_{e2} + V_{g2} = v_2^2 + 54 - 117.6 = v_2^2 - 63.6\text{ J}$$

#### 2. Apply Conservation of Mechanical Energy
$$E_1 = E_2$$
$$24 = v_2^2 - 63.6$$
$$v_2^2 = 24 + 63.6 = 87.6$$
$$v_2 = \sqrt{87.6} = 9.359\text{ m/s} \approx 9.36\text{ m/s}$$
*(With $g = 9.81$: $v_2^2 = 24 + 63.72 = 87.72 \implies v_2 = 9.366\text{ m/s} \approx 9.36\text{ m/s}$)*

**Answer:** The downward velocity of the collar is **$9.36\text{ m/s}$**.
:::

---

### Question 12: Dumbwaiter and Counterweight Hoist Motor Power
**A dumbwaiter $D$ ($W_D = 600\text{ N}$) and a counterweight $C$ ($W_C = 800\text{ N}$) are connected by a cable system where counterweight $C$ is supported by a movable pulley ($2T$). When dumbwaiter $D$ moves upward at $v_D = 8\text{ m/s}$, determine the motor power required (in Watts and Horsepower) for:**
**(a) Uniform motion ($a_D = 0$).**
**(b) Accelerated motion with $a_D = 2.5\text{ m/s}^2\uparrow$.**

::: details Click to view Step-by-Step Solution
#### 1. Kinematic Cable Constraint
Cable relation: $y_D + 2 y_C = \text{const} \implies v_D = 2 v_C \implies a_D = 2 a_C$.
When $v_D = 8\text{ m/s}\uparrow$, counterweight moves downward at $v_C = 4\text{ m/s}\downarrow$.

#### 2. Part (a) — Uniform Motion ($a_D = 0, a_C = 0$)
- Counterweight vertical equilibrium:
  $$\sum F_y = 2T - W_C = 0 \implies 2T = 800\text{ N} \implies T = 400\text{ N}$$
- Dumbwaiter vertical equilibrium:
  $$\sum F_y = F + T - W_D = 0 \implies F + 400 - 600 = 0 \implies F = 200\text{ N}$$
- Power output of motor ($v_D = 8\text{ m/s}$):
  $$P = F \cdot v_D = 200 \times 8 = 1600\text{ W}$$
  $$P_{hp} = \frac{1600}{746} = 2.145\text{ hp} \approx 2.14\text{ hp}$$

#### 3. Part (b) — Accelerated Motion ($a_D = 2.5\text{ m/s}^2\uparrow \implies a_C = 1.25\text{ m/s}^2\downarrow$)
- Counterweight mass: $m_C = \frac{800}{9.81} = 81.55\text{ kg}$
  Equation of motion (downward positive):
  $$W_C - 2T = m_C a_C$$
  $$800 - 2T = 81.55 \times 1.25 = 101.94\text{ N}$$
  $$2T = 800 - 101.94 = 698.06\text{ N} \implies T = 349.03\text{ N} \approx 348.98\text{ N}$$
- Dumbwaiter mass: $m_D = \frac{600}{9.81} = 61.16\text{ kg}$
  Equation of motion (upward positive):
  $$F + T - W_D = m_D a_D$$
  $$F + 348.98 - 600 = 61.16 \times 2.5 = 152.90\text{ N}$$
  $$F = 600 - 348.98 + 152.90 = 403.92\text{ N} \approx 404.08\text{ N}$$
- Instantaneous power at $v_D = 8\text{ m/s}$:
  $$P = F \cdot v_D = 404.08 \times 8 = 3232.64\text{ W}$$
  $$P_{hp} = \frac{3232.64}{746} = 4.333\text{ hp} \approx 4.33\text{ hp}$$

**Answer:**
- (a) Uniform motion: **$1600\text{ W}$ ($2.14\text{ hp}$)**
- (b) Accelerated motion: **$3232.64\text{ W}$ ($4.33\text{ hp}$)**
:::

---

## Part B: Interactive Module 4 Quiz

<script setup>
const questions = [
  {
    question: "What is the work done by the normal contact force on a block sliding down a fixed curved ramp?",
    options: [
      "W · h",
      "Zero (0 J)",
      "-μk · N · s",
      "½ m v²"
    ],
    answer: 1,
    explanation: "Because the normal reaction is strictly perpendicular to the displacement vector at every point (cos 90° = 0), normal forces perform zero work."
  },
  {
    question: "Why is the kinetic energy T of a moving particle inherently a non-negative scalar quantity?",
    options: [
      "Because momentum is always positive",
      "Because mass m > 0 and speed squared v² = v·v ≥ 0",
      "Because potential energy cannot be negative",
      "Because forces can only perform positive work"
    ],
    answer: 1,
    explanation: "Mass is an invariant positive scalar (m > 0), and speed squared is the sum of squared real components (vx² + vy² + vz² ≥ 0), guaranteeing T ≥ 0."
  },
  {
    question: "Which of the following is a necessary and sufficient mathematical criterion for a force field F to be conservative?",
    options: [
      "The work done depends on the speed of the particle",
      "The line integral around any closed loop is identically zero: ∮ F · dr = 0",
      "The force must be proportional to velocity",
      "The divergence of the field must be infinite"
    ],
    answer: 1,
    explanation: "A conservative force does zero net work along any closed loop (∮ F · dr = 0), which is equivalent to path independence and having a potential function F = -∇V."
  },
  {
    question: "For a linear spring of stiffness k, what is the work done BY THE SPRING on a mass when stretched from deformation x1 to x2?",
    options: [
      "½ k x2² - ½ k x1²",
      "½ k x1² - ½ k x2²",
      "k (x2 - x1)",
      "-k (x2² + x1²)"
    ],
    answer: 1,
    explanation: "The spring work is U_{1->2} = V_{e1} - V_{e2} = ½ k x1² - ½ k x2². If further stretched (|x2| > |x1|), the spring does negative work."
  },
  {
    question: "When non-conservative dry friction acts on a mechanical system, what happens to the total mechanical energy (T + V)?",
    options: [
      "It remains strictly constant",
      "It continuously decreases as mechanical energy is converted into thermal heat",
      "It increases exponentially",
      "It becomes negative infinite"
    ],
    answer: 1,
    explanation: "Friction always opposes motion (U_friction < 0), dissipating mechanical energy irreversibly into thermal internal energy so E_mech,2 < E_mech,1."
  },
  {
    question: "How is instantaneous mechanical power calculated in vector notation?",
    options: [
      "P = F × v (cross product)",
      "P = F · v (dot product)",
      "P = m · a · t",
      "P = ∫ F dt"
    ],
    answer: 1,
    explanation: "Instantaneous power is the time derivative of work: P = dU/dt = F · (dr/dt) = F · v."
  },
  {
    question: "How many Watts are equivalent to one Imperial Horsepower (1 hp)?",
    options: [
      "500 W",
      "1000 W",
      "746 W",
      "1200 W"
    ],
    answer: 2,
    explanation: "1 hp is defined as 550 ft·lb/s, which converts precisely to 745.7 W ≈ 746 W."
  },
  {
    question: "In a coupled two-block system connected by an inextensible cord, why does the internal cable tension do zero net work on the system?",
    options: [
      "Because cable tension is always zero",
      "Because tension acts with equal magnitude in opposite directions over identical displacements, canceling out: +T·d - T·d = 0",
      "Because pulleys are frictionless",
      "Because cables cannot transmit energy"
    ],
    answer: 1,
    explanation: "By Newton's Third Law, internal forces occur in equal and opposite pairs. For an inextensible cable, the displacements of the two ends are equal, so +T·d and -T·d sum identically to zero."
  }
];
</script>

<QuizModule title="Module 4: Energy Methods — Mastery Quiz" :questions="questions" />
