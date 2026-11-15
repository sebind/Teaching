---
title: 5.3 Module 5 — Important Questions & Self-Check Quiz
description: Comprehensive university-grade question bank with detailed model solutions, plus an interactive self-check quiz for Module 5 Momentum and Impact.
---

# 5.3 Module 5 — Important Questions & Self-Check Quiz

::: tip Overview & Examination Blueprint
This chapter concludes **Module 5: Kinetics of Particles — Momentum Methods**.
- **Part A** presents **10 exam-grade theoretical derivations and numerical problems** covering linear impulse, conservation of linear momentum, derivation of the coefficient of restitution, plastic energy dissipation, and direct/oblique central collisions with detailed step-by-step solutions inside collapsible `::: details` blocks.
- **Part B** features the interactive **Module 5 Mastery Quiz** with automated instant scoring and analytical feedback.
:::

---

## Part A: Important Questions Bank (Module 5)

### Question 1: Principle of Linear Impulse and Momentum
**State the Principle of Linear Impulse and Momentum for a single particle. Write its complete vector formulation and its three scalar rectangular component equations.**

::: details Click to view Step-by-Step Solution
#### 1. Statement
The Principle of Linear Impulse and Momentum states that the final linear momentum vector $m\mathbf{v}_2$ of a particle at time $t_2$ is equal to the vector sum of its initial linear momentum vector $m\mathbf{v}_1$ at time $t_1$ and the total linear impulse $\mathbf{Imp}_{1\to 2}$ of all external forces acting on the particle during the time interval $\Delta t = t_2 - t_1$.

#### 2. Vector Formulation
$$m\mathbf{v}_1 + \sum \int_{t_1}^{t_2} \mathbf{F}\,dt = m\mathbf{v}_2$$
$$\mathbf{L}_1 + \mathbf{Imp}_{1\to 2} = \mathbf{L}_2$$

Where:
- $\mathbf{L}_1 = m\mathbf{v}_1$ is the initial linear momentum ($\text{kg}\cdot\text{m/s}$ or $\text{N}\cdot\text{s}$).
- $\mathbf{Imp}_{1\to 2} = \int_{t_1}^{t_2} \sum \mathbf{F}\,dt$ is the linear impulse vector ($\text{N}\cdot\text{s}$).
- $\mathbf{L}_2 = m\mathbf{v}_2$ is the final linear momentum.

#### 3. Scalar Component Equations in Cartesian Coordinates
Resolving vectors into orthogonal components:
$$m(v_x)_1 + \sum \int_{t_1}^{t_2} F_x\,dt = m(v_x)_2$$
$$m(v_y)_1 + \sum \int_{t_1}^{t_2} F_y\,dt = m(v_y)_2$$
$$m(v_z)_1 + \sum \int_{t_1}^{t_2} F_z\,dt = m(v_z)_2$$
:::

---

### Question 2: Impulsive vs. Non-Impulsive Forces
**Distinguish clearly between impulsive forces and non-impulsive forces during collision events. Provide real-world engineering examples and explain why gravity is routinely neglected during millisecond impact analysis.**

::: details Click to view Step-by-Step Solution
#### 1. Physical Distinction
- **Impulsive Forces:** Forces of very large magnitude that act over an extremely brief time interval $\Delta t \to 0$, such that the impulse integral has a finite, significant value:
  $$\lim_{\Delta t \to 0} \int_{t_1}^{t_2} \mathbf{F}_{imp}\,dt \ne \mathbf{0}$$
  *Examples:* Impact between colliding vehicles, a baseball struck by a bat, pile drivers hitting foundations, and explosive expansion pressures.
- **Non-Impulsive Forces:** Forces of ordinary or moderate magnitude that remain bounded as the time interval approaches zero, rendering their impulse negligible:
  $$\lim_{\Delta t \to 0} \int_{t_1}^{t_2} \mathbf{F}_{non}\,dt \approx \mathbf{0}$$
  *Examples:* The weight of a body ($W = mg$), moderate spring forces, and aerodynamic air resistance.

#### 2. Why Weight is Neglected
During an automobile collision lasting $\Delta t = 0.05\text{ s}$, a vehicle of mass $m = 1500\text{ kg}$ experiences:
- Weight force: $W = mg = 1500 \times 9.81 = 14,715\text{ N}$.
- Impulse of weight: $\text{Imp}_g = W\,\Delta t = (14,715)(0.05) = 735.8\text{ N}\cdot\text{s}$.
- Crash impact force: The vehicle decelerates from $20\text{ m/s}$ to $0$ in $0.05\text{ s}$, requiring an impact impulse of $\text{Imp}_{crash} = m\Delta v = 1500 \times 20 = 30,000\text{ N}\cdot\text{s}$.
- The average crash force is $F_{crash} = \frac{30,000}{0.05} = 600,000\text{ N} = 600\text{ kN}$.

The impact force ($600\text{ kN}$) is **$41$ times greater** than the vehicle's weight ($14.7\text{ kN}$), and the impulse of weight constitutes only $2.4\%$ of the total crash impulse. Hence, weight is safely treated as non-impulsive during impact.
:::

---

### Question 3: Conservation of Linear Momentum
**State the conditions under which the linear momentum of a system of particles is conserved. Explain the behavior of the mass center velocity $\bar{\mathbf{v}}$ under these conditions.**

::: details Click to view Step-by-Step Solution
#### 1. Conditions for Conservation
The total linear momentum $\mathbf{L} = \sum m_i \mathbf{v}_i$ of a system of $n$ particles is strictly conserved over time interval $t_1 \to t_2$ if:
1. **Zero Net External Force:** The vector sum of all external forces acting on the system is zero at all times ($\sum \mathbf{F}_{ext} = \mathbf{0}$).
2. **Zero External Impulse:** Over a finite time interval, the external impulse vanishes ($\int_{t_1}^{t_2} \sum \mathbf{F}_{ext}\,dt = \mathbf{0}$).
3. **Directional Conservation:** If external forces act along one axis (e.g., vertical gravity), but no external forces act along an orthogonal axis (e.g., horizontal $x$-axis), then linear momentum is conserved **along that specific axis**:
   $$\sum (m_i v_{ix})_1 = \sum (m_i v_{ix})_2$$
Internal action-reaction forces cancel in pairs by Newton's Third Law and have zero net impulse.

#### 2. Mass Center Velocity Behavior
The total linear momentum of a multi-particle system is directly related to the velocity of its center of mass $\bar{\mathbf{v}}$:
$$\mathbf{L}_{total} = \sum_{i=1}^n m_i \mathbf{v}_i = m_{total} \bar{\mathbf{v}}$$
Where $m_{total} = \sum m_i$.
If the total external impulse is zero:
$$\mathbf{L}_{total} = \text{constant} \implies m_{total}\bar{\mathbf{v}} = \text{constant} \implies \bar{\mathbf{v}} = \text{constant}$$
The velocity of the center of mass remains completely unchanged in both magnitude and direction, unaffected by internal collisions, explosions, or deformations.
:::

---

### Question 4: Derivation of the Coefficient of Restitution
**Define the Coefficient of Restitution ($e$) from Poisson's ratio of impulses during deformation and restitution. Derive Newton's kinematic relative velocity formula from this definition.**

::: details Click to view Step-by-Step Solution
#### 1. Poisson's Definition
During central impact between two bodies $A$ and $B$, the contact period consists of:
1. A **deformation phase** ($t_0 \to t^*$), during which bodies compress under force $P(t)$ until reaching a common velocity $u$.
2. A **restitution phase** ($t^* \to t_f$), during which bodies partially restore shape under restitution force $R(t)$.

Poisson defined the Coefficient of Restitution $e$ as the ratio of the restitution impulse to the deformation impulse:
$$e = \frac{\int_{t^*}^{t_f} R\,dt}{\int_{t_0}^{t^*} P\,dt}$$

#### 2. Mathematical Derivation
Applying the linear impulse-momentum equation to each body separately:
- **Body $A$ (initial speed $v_A$, common speed $u$, final speed $v'_A$):**
  - Deformation: $m_A v_A - \int P\,dt = m_A u \implies \int P\,dt = m_A(v_A - u)$
  - Restitution: $m_A u - \int R\,dt = m_A v'_A \implies \int R\,dt = m_A(u - v'_A)$
  - Ratio for $A$:
    $$e = \frac{m_A(u - v'_A)}{m_A(v_A - u)} = \frac{u - v'_A}{v_A - u} \quad \text{--- (1)}$$

- **Body $B$ (initial speed $v_B$, common speed $u$, final speed $v'_B$):**
  - Deformation: $m_B v_B + \int P\,dt = m_B u \implies \int P\,dt = m_B(u - v_B)$
  - Restitution: $m_B u + \int R\,dt = m_B v'_B \implies \int R\,dt = m_B(v'_B - u)$
  - Ratio for $B$:
    $$e = \frac{m_B(v'_B - u)}{m_B(u - v_B)} = \frac{v'_B - u}{u - v_B} \quad \text{--- (2)}$$

#### 3. Algebraic Synthesis
Using the ratio theorem ($\frac{a}{b} = \frac{c}{d} = e \implies \frac{a+c}{b+d} = e$):
$$e = \frac{(u - v'_A) + (v'_B - u)}{(v_A - u) + (u - v_B)} = \frac{v'_B - v'_A}{v_A - v_B}$$
This proves that the coefficient of restitution equals the relative speed of separation divided by the relative speed of approach:
$$e = \frac{v'_B - v'_A}{v_A - v_B}$$
:::

---

### Question 5: Derivation of Kinetic Energy Loss Formula
**Prove that during a direct central collision between two masses $m_A$ and $m_B$ with coefficient of restitution $e$, the loss of mechanical kinetic energy is given by:**
$$\Delta T = \frac{1}{2}\frac{m_A m_B}{m_A + m_B}(1 - e^2)(v_A - v_B)^2$$

::: details Click to view Step-by-Step Solution
#### 1. Governing Collision Equations
Let $v_A, v_B$ be initial velocities and $v'_A, v'_B$ be final velocities:
- Conservation of linear momentum:
  $$m_A v_A + m_B v_B = m_A v'_A + m_B v'_B \quad \text{--- (1)}$$
- Restitution equation:
  $$v'_B - v'_A = e(v_A - v_B) \quad \text{--- (2)}$$

#### 2. Expressing Kinetic Energy in Relative Coordinates
The total kinetic energy of a two-body system can be decoupled into center-of-mass motion and relative motion:
$$T = \frac{1}{2}(m_A + m_B)\bar{v}^2 + \frac{1}{2}\mu_{red} v_{rel}^2$$
Where $\mu_{red} = \frac{m_A m_B}{m_A + m_B}$ is the reduced mass and $v_{rel} = v_A - v_B$.

Because the system is isolated from external impulses, the center-of-mass velocity is invariant:
$$\bar{v}_1 = \bar{v}_2$$
Therefore, the center-of-mass kinetic energy $\frac{1}{2}(m_A + m_B)\bar{v}^2$ is identical before and after collision!

#### 3. Energy Difference
The change in kinetic energy depends strictly on the relative motion:
$$\Delta T = T_1 - T_2 = \frac{1}{2}\mu_{red}(v_{rel, 1}^2 - v_{rel, 2}^2)$$
From the definition of restitution (Eq. 2):
$$v_{rel, 2} = v'_A - v'_B = -e(v_A - v_B) = -e\,v_{rel, 1}$$
$$(v_{rel, 2})^2 = e^2 (v_{rel, 1})^2$$

Substitute into the energy difference:
$$\Delta T = \frac{1}{2}\mu_{red} \left[v_{rel, 1}^2 - e^2 v_{rel, 1}^2\right] = \frac{1}{2}\mu_{red}(1 - e^2)v_{rel, 1}^2$$
Substitute $\mu_{red} = \frac{m_A m_B}{m_A + m_B}$ and $v_{rel, 1} = (v_A - v_B)$:
$$\Delta T = \frac{1}{2}\frac{m_A m_B}{m_A + m_B}(1 - e^2)(v_A - v_B)^2$$
This completes the formal proof.
:::

---

### Question 6: Elastic vs. Plastic Impact Comparison
**Contrast perfectly elastic ($e = 1$) and perfectly plastic ($e = 0$) impacts in terms of impulse mechanics, shape recovery, and kinetic energy dissipation.**

::: details Click to view Step-by-Step Solution
```
+---------------------------------------+---------------------------------------+
|      PERFECTLY ELASTIC (e = 1)        |       PERFECTLY PLASTIC (e = 0)       |
+---------------------------------------+---------------------------------------+
| 1. Restitution Impulse:               | 1. Zero Restitution:                  |
|    Restitution impulse equals         |    Restitution impulse is zero:       |
|    deformation impulse: ∫ R dt = ∫ P dt|   ∫ R dt = 0. No rebound force.      |
| 2. Post-Collision Motion:             | 2. Post-Collision Motion:             |
|    Bodies rebound with maximum        |    Bodies stick together and move     |
|    relative separation speed:         |    with a single common velocity:     |
|    v'_B - v'_A = v_A - v_B.           |    v'_A = v'_B = u.                   |
| 3. Shape Recovery:                    | 3. Permanent Deformation:             |
|    100% elastic shape recovery;       |    Zero recovery; permanent plastic   |
|    zero permanent deformation.        |    crushing, buckling, or latching.   |
| 4. Kinetic Energy Conservation:       | 4. Maximum Energy Dissipation:        |
|    Mechanical kinetic energy is       |    Kinetic energy loss is maximized:  |
|    strictly conserved: ΔT = 0.        |    ΔT = ½ μ_red (v_A - v_B)².         |
| 5. Engineering Examples:              | 5. Engineering Examples:              |
|    Atomic/molecular elastic bounces,  |    Automobile crumple zones, railway  |
|    hardened billiard ball collisions. |    automatic car couplers, clay drops.|
+---------------------------------------+---------------------------------------+
```
:::

---

### Question 7: Oblique Central Impact Solution Procedure
**Outline the step-by-step engineering procedure for solving an Oblique Central Impact between two smooth colliding spheres.**

::: details Click to view Step-by-Step Solution
#### Step 1: Establish Orthogonal Reference Axes
1. Identify the point of contact.
2. Draw the **Line of Impact ($n$-axis)**: The common normal connecting the mass centers of both spheres.
3. Draw the **Plane of Contact ($t$-axis)**: The common tangent perpendicular to the $n$-axis.

#### Step 2: Resolve Initial Velocities
Resolve the initial velocity vectors into normal and tangential components:
$$(v_A)_n = v_A \cos\theta_A, \quad (v_A)_t = v_A \sin\theta_A$$
$$(v_B)_n = v_B \cos\theta_B, \quad (v_B)_t = v_B \sin\theta_B$$

#### Step 3: Apply Tangential Decoupling (Frictionless Contact)
Because the spheres are smooth, contact impulses act strictly along the normal $n$. Zero tangential impulse acts on either sphere:
$$(v'_A)_t = (v_A)_t, \quad (v'_B)_t = (v_B)_t$$

#### Step 4: Solve Normal Line of Impact Equations
Apply 1D collision physics along the $n$-axis:
1. Conservation of total normal momentum:
   $$m_A (v_A)_n + m_B (v_B)_n = m_A (v'_A)_n + m_B (v'_B)_n$$
2. Restitution along the normal:
   $$(v'_B)_n - (v'_A)_n = e\left[(v_A)_n - (v_B)_n\right]$$
Solve this $2 \times 2$ linear system for $(v'_A)_n$ and $(v'_B)_n$.

#### Step 5: Reconstruct Final Velocity Vectors
For each sphere:
$$v' = \sqrt{(v'_n)^2 + (v'_t)^2}, \quad \theta' = \tan^{-1}\left(\frac{v'_t}{|v'_n|}\right)$$
:::

---

### Question 8: Rebound Angle Off a Fixed Surface
**A particle strikes a smooth rigid floor at an angle $\theta$ measured from the surface normal. Derive the relationship between the incoming angle $\theta$ and the rebound angle $\theta'$ in terms of the coefficient of restitution $e$.**

::: details Click to view Step-by-Step Solution
#### 1. Coordinate Setup
- Let the floor lie in the tangential plane ($t$-axis).
- Let the normal to the floor be the $n$-axis.
- Incoming velocity $\mathbf{v}$ makes angle $\theta$ with the normal:
  $$v_n = -v\cos\theta, \quad v_t = v\sin\theta$$
  $$\tan\theta = \frac{v_t}{|v_n|}$$

#### 2. Impact Conditions
- Smooth floor $\implies$ tangential velocity is conserved:
  $$v'_t = v_t = v\sin\theta$$
- Normal restitution with a massive rigid floor ($m_{floor} \to \infty, v_{floor} = 0$):
  $$v'_n = -e v_n = -e(-v\cos\theta) = +e v\cos\theta$$

#### 3. Rebound Angle $\theta'$ from the Normal
$$\tan\theta' = \frac{v'_t}{v'_n} = \frac{v\sin\theta}{e v\cos\theta} = \frac{1}{e}\left(\frac{\sin\theta}{\cos\theta}\right) = \frac{\tan\theta}{e}$$

$$\tan\theta' = \frac{\tan\theta}{e}$$

Since $0 < e \le 1$, $\frac{1}{e} \ge 1$, which implies:
$$\tan\theta' \ge \tan\theta \iff \theta' \ge \theta$$
The rebound trajectory is always deflected **farther away from the normal** (closer to the floor surface) compared to the approach path.
*(In the special case of an elastic collision $e = 1$, $\theta' = \theta$, recovering specular reflection).*
:::

---

### Question 9: Numerical — Rear-End Vehicle Collision
**A $2000\text{ kg}$ SUV traveling at $v_A = 20\text{ m/s}$ rear-ends a stationary $1000\text{ kg}$ compact car ($v_B = 0$) at a red light. The coefficient of restitution between the bumpers is $e = 0.40$. Determine:**
1. **The velocities of both vehicles immediately after the impact.**
2. **The loss of mechanical kinetic energy and the percentage dissipated.**

::: details Click to view Step-by-Step Solution
#### Step 1: Data & Momentum Conservation
- $m_A = 2000\text{ kg}$, $v_A = 20\text{ m/s}$
- $m_B = 1000\text{ kg}$, $v_B = 0\text{ m/s}$
- $e = 0.40$

Conservation of total linear momentum:
$$m_A v_A + m_B v_B = m_A v'_A + m_B v'_B$$
$$(2000)(20) + (1000)(0) = 2000 v'_A + 1000 v'_B$$
$$40,000 = 2000 v'_A + 1000 v'_B$$
Divide by $1000$:
$$2 v'_A + v'_B = 40 \quad \text{--- (Eq. 1)}$$

#### Step 2: Restitution Equation
$$v'_B - v'_A = e(v_A - v_B) = 0.40(20 - 0) = 8.0\text{ m/s}$$
$$v'_B = v'_A + 8.0 \quad \text{--- (Eq. 2)}$$

#### Step 3: Solve Velocities
Substitute Eq. 2 into Eq. 1:
$$2 v'_A + (v'_A + 8.0) = 40$$
$$3 v'_A = 40 - 8.0 = 32.0$$
$$v'_A = \frac{32.0}{3} = 10.67\text{ m/s}$$

Substitute into Eq. 2:
$$v'_B = 10.67 + 8.0 = 18.67\text{ m/s}$$

**Velocities After Collision:**
- SUV: $v'_A = 10.67\text{ m/s}\to$
- Compact Car: $v'_B = 18.67\text{ m/s}\to$

#### Step 4: Kinetic Energy Dissipation
- Initial Kinetic Energy:
  $$T_1 = \frac{1}{2} m_A v_A^2 = \frac{1}{2}(2000)(20)^2 = 400,000\text{ J} = 400\text{ kJ}$$
- Final Kinetic Energy:
  $$T_2 = \frac{1}{2}(2000)(10.667)^2 + \frac{1}{2}(1000)(18.667)^2 = 1000(113.78) + 500(348.44) = 113,780 + 174,220 = 288,000\text{ J} = 288\text{ kJ}$$
- Kinetic Energy Lost:
  $$\Delta T = T_1 - T_2 = 400\text{ kJ} - 288\text{ kJ} = 112\text{ kJ}$$
- Percentage Dissipated:
  $$\% \text{ Dissipated} = \frac{112}{400} \times 100\% = 28.0\%$$
:::

---

### Question 10: Numerical — Rebound of Ball from a Smooth Wall
**A $0.5\text{ kg}$ rubber ball strikes a smooth vertical wall at an angle of $45^\circ$ with an approach speed of $v = 12\text{ m/s}$. The coefficient of restitution is $e = 0.60$. Determine:**
1. **The rebound velocity vector and rebound angle.**
2. **The linear impulse delivered by the wall to the ball.**

::: details Click to view Step-by-Step Solution
#### Step 1: Decomposition Along Normal and Tangent
- Let $+n$ be perpendicular to the wall pointing outward.
- Let $+t$ be parallel to the wall.
- Approach angle $\theta = 45^\circ$ to normal:
  $$v_n = -12 \cos 45^\circ = -12(0.7071) = -8.485\text{ m/s}$$
  $$v_t = +12 \sin 45^\circ = +12(0.7071) = +8.485\text{ m/s}$$

#### Step 2: Post-Impact Velocities
- Smooth wall $\implies v'_t = v_t = +8.485\text{ m/s}$.
- Normal restitution ($e = 0.60$):
  $$v'_n = -e v_n = -0.60(-8.485) = +5.091\text{ m/s}$$

- Rebound speed:
  $$v' = \sqrt{(v'_n)^2 + (v'_t)^2} = \sqrt{(5.091)^2 + (8.485)^2} = \sqrt{25.92 + 72.00} = \sqrt{97.92} = 9.895\text{ m/s} \approx 9.90\text{ m/s}$$
- Rebound angle measured from wall normal:
  $$\tan\theta' = \frac{v'_t}{v'_n} = \frac{8.485}{5.091} = 1.6667 \implies \theta' = \tan^{-1}(1.6667) = 59.04^\circ$$

#### Step 3: Linear Impulse Delivered to the Ball
$$\mathbf{Imp}_{wall\to ball} = m(\mathbf{v}' - \mathbf{v})$$
Tangential velocities are equal, so tangential impulse is zero:
$$\text{Imp}_n = m(v'_n - v_n) = 0.5 [5.091 - (-8.485)] = 0.5 [13.576] = +6.788\text{ N}\cdot\text{s}$$
$$\mathbf{Imp} = (6.79\text{ N}\cdot\text{s})\,\mathbf{n}$$
The wall delivers an impulse of **$6.79\text{ N}\cdot\text{s}$** directed perpendicularly outward from its surface.
:::

---

## Part B: Interactive Module 5 Quiz

<script setup>
const questions = [
  {
    question: "What are the standard SI units of Linear Impulse?",
    options: [
      "Joules (J)",
      "Newton-seconds (N·s) or kg·m/s",
      "Watts (W)",
      "Meters per second squared (m/s²)"
    ],
    answer: 1,
    explanation: "Linear impulse is the time integral of force: Imp = ∫ F dt, having units of N·s = (kg·m/s²)·s = kg·m/s."
  },
  {
    question: "Why can the weight of a colliding body be safely neglected during an impact analysis?",
    options: [
      "Because gravity turns off during collisions",
      "Because the impact contact duration Δt is so tiny that the impulse of weight (W·Δt) is negligible compared to impulsive contact forces",
      "Because normal forces always cancel weight",
      "Because potential energy is conserved"
    ],
    answer: 1,
    explanation: "As Δt -> 0, the integral of bounded forces like gravity approaches zero, making them non-impulsive."
  },
  {
    question: "The total linear momentum of a multi-particle system is conserved if and only if:",
    options: [
      "Kinetic energy is conserved",
      "The sum of all external impulses acting on the system is zero",
      "All internal forces are zero",
      "The particles are frictionless"
    ],
    answer: 1,
    explanation: "Internal forces cancel in pairs by Newton's Third Law. If net external impulse is zero, total momentum is strictly invariant."
  },
  {
    question: "How is the Coefficient of Restitution e defined in terms of approach and separation speeds?",
    options: [
      "e = (vA - vB) / (v'B - v'A)",
      "e = (v'B - v'A) / (vA - vB) = Relative separation speed / Relative approach speed",
      "e = T2 / T1",
      "e = mB / mA"
    ],
    answer: 1,
    explanation: "Newton's restitution law defines e = (v'B - v'A)/(vA - vB), which is the ratio of relative separation speed to approach speed."
  },
  {
    question: "In a perfectly plastic collision (e = 0) between two moving objects:",
    options: [
      "Total kinetic energy is conserved",
      "The bodies rebound with initial speeds",
      "The bodies stick together and move with a single common final velocity",
      "Linear momentum is not conserved"
    ],
    answer: 2,
    explanation: "For e = 0, restitution impulse is zero; the bodies coalesce and move with common velocity u, dissipating maximum kinetic energy."
  },
  {
    question: "In an oblique central impact between two smooth spheres, what happens to their velocity components tangent to the contact plane?",
    options: [
      "They reverse direction",
      "They become zero",
      "They remain completely unchanged: (v'A)t = (vA)t and (v'B)t = (vB)t",
      "They increase by factor (1 + e)"
    ],
    answer: 2,
    explanation: "Because smooth surfaces exert zero friction during contact, zero tangential impulse acts, conserving tangential momentum for each sphere individually."
  },
  {
    question: "A ball bounces off a smooth fixed floor with coefficient of restitution e. If incoming angle to the normal is θ, the rebound angle θ' satisfies:",
    options: [
      "tan θ' = e · tan θ",
      "tan θ' = (tan θ) / e",
      "θ' = e · θ",
      "sin θ' = e · sin θ"
    ],
    answer: 1,
    explanation: "Since v't = vt and v'n = e·vn, tan θ' = v't/v'n = vt/(e·vn) = (tan θ)/e. Since e < 1, θ' > θ."
  },
  {
    question: "What happens to the velocity of the center of mass of an isolated multi-body system during an internal collision?",
    options: [
      "It drops to zero",
      "It doubles",
      "It remains strictly constant",
      "It oscillates sinusoidally"
    ],
    answer: 2,
    explanation: "Because total momentum L = m_total·v_cm is conserved when external impulses are absent, the mass center velocity remains strictly invariant."
  }
];
</script>

<QuizModule title="Module 5: Momentum & Impact Methods — Mastery Quiz" :questions="questions" />
