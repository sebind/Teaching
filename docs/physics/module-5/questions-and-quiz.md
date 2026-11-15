---
title: 5.3 Module 5 — Important Questions & Self-Check Quiz
description: Comprehensive university-grade question bank with detailed model solutions covering linear impulse, momentum conservation, direct/oblique/constrained impacts, and multi-principle pendulum analysis, plus a 12-question interactive self-check quiz.
---

# 5.3 Module 5 — Important Questions & Self-Check Quiz

::: tip Overview & Examination Blueprint
This chapter concludes **Module 5: Kinetics of Particles — Momentum Methods**.
- **Part A** presents **12 exam-grade theoretical derivations and numerical problems** covering linear impulse, conservation of linear momentum, derivation of the coefficient of restitution, plastic energy dissipation, direct and oblique central collisions, **constrained oblique impact**, and **multi-principle pendulum impact synthesis** with detailed step-by-step solutions inside collapsible `::: details` blocks.
- **Part B** features the **12-question interactive Module 5 Mastery Quiz** with automated instant scoring and analytical feedback.
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
**Distinguish clearly between impulsive forces and non-impulsive forces during collision events. Provide real-world engineering examples and explain why gravity is routinely neglected during millisecond impact analysis (while unknown support reactions must be retained).**

::: details Click to view Step-by-Step Solution
#### 1. Physical Distinction
- **Impulsive Forces:** Forces of very large magnitude that act over an extremely brief time interval $\Delta t \to 0$, such that the impulse integral has a finite, significant value:
  $$\lim_{\Delta t \to 0} \int_{t_1}^{t_2} \mathbf{F}_{\text{imp}}\,dt = \mathbf{F}_{\text{avg}}\Delta t \ne \mathbf{0}$$
  *Examples:* Impact between colliding vehicles, a baseball struck by a bat, pile drivers hitting foundations, explosive expansion pressures, and constrained bearing/floor reactions during impact.
- **Non-Impulsive Forces:** Forces of ordinary or moderate magnitude that remain bounded as the time interval approaches zero, rendering their impulse negligible:
  $$\lim_{\Delta t \to 0} \int_{t_1}^{t_2} \mathbf{F}_{\text{non}}\,dt \approx \mathbf{0}$$
  *Examples:* The weight of a body ($W = mg$), moderate spring forces, and aerodynamic air resistance.

#### 2. Why Weight is Neglected (and Why Unknown Support Reactions Are Retained)
During an automobile collision lasting $\Delta t = 0.05\text{ s}$, a vehicle of mass $m = 1500\text{ kg}$ experiences:
- Weight force: $W = mg = 1500 \times 9.81 = 14,715\text{ N} \implies \text{Imp}_g = W\,\Delta t = 735.8\text{ N}\cdot\text{s}$.
- Crash impact force: Decelerating from $20\text{ m/s}$ to $0$ in $0.05\text{ s}$ requires $\text{Imp}_{\text{crash}} = m\Delta v = 30,000\text{ N}\cdot\text{s}$, corresponding to $F_{\text{crash}} = 600\text{ kN}$ (**$41\times$ greater** than weight!).

Hence, bounded forces like weight are safely treated as non-impulsive during brief impacts. By contrast, **unknown support reactions** (e.g., a batter's hands on an off-sweet-spot bat hit, pin joints, or floor rollers preventing vertical motion) may develop huge impulsive magnitudes and **must be retained** as $\mathbf{R}_{\text{avg}}\Delta t$ unless proved negligible.
:::

---

### Question 3: Conservation of Linear Momentum
**State the conditions under which the linear momentum of a system of particles is conserved. Explain why internal action–reaction impulses always cancel, and describe the behavior of the mass center velocity $\bar{\mathbf{v}}$ under these conditions.**

::: details Click to view Step-by-Step Solution
#### 1. Conditions for Conservation
The total linear momentum $\mathbf{L} = \sum m_i \mathbf{v}_i$ of a system of $n$ particles is strictly conserved over time interval $t_1 \to t_2$ if:
1. **Zero Net External Force:** The vector sum of all external forces acting on the system is zero at all times ($\sum \mathbf{F}_{\text{ext}} = \mathbf{0}$).
2. **Zero External Impulse:** Over a finite time interval, the external impulse vanishes ($\int_{t_1}^{t_2} \sum \mathbf{F}_{\text{ext}}\,dt = \mathbf{0}$).
3. **Directional Conservation:** If external forces act along one axis (e.g., vertical gravity or floor normal impulse), but no external forces act along an orthogonal axis (e.g., horizontal $x$-axis), then linear momentum is conserved **along that specific axis**:
   $$\sum (m_i v_{ix})_1 = \sum (m_i v_{ix})_2$$

Internal action–reaction impulses **always** cancel in pairs ($\int_{t_1}^{t_2}\mathbf{f}_{ij}\,dt + \int_{t_1}^{t_2}\mathbf{f}_{ji}\,dt = \mathbf{0}$) because $\mathbf{f}_{ij} = -\mathbf{f}_{ji}$ by Newton's Third Law and the time interval $dt$ is identical for both particles (unlike internal *work*, which cancels only when displacements match).

#### 2. Mass Center Velocity Behavior
The total linear momentum of a multi-particle system is directly related to the velocity of its center of mass $\bar{\mathbf{v}}$:
$$\mathbf{L}_{\text{total}} = \sum_{i=1}^n m_i \mathbf{v}_i = m_{\text{total}} \bar{\mathbf{v}}$$
If the total external impulse is zero:
$$\mathbf{L}_{\text{total}} = \text{constant} \implies m_{\text{total}}\bar{\mathbf{v}} = \text{constant} \implies \bar{\mathbf{v}} = \text{constant}$$
The velocity of the center of mass remains completely unchanged in both magnitude and direction, unaffected by internal collisions, rope pulls, explosions, or deformations.
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
$$T = \frac{1}{2}(m_A + m_B)\bar{v}^2 + \frac{1}{2}\mu_{\text{red}} v_{\text{rel}}^2$$
Where $\mu_{\text{red}} = \frac{m_A m_B}{m_A + m_B}$ is the reduced mass and $v_{\text{rel}} = v_A - v_B$.

Because the system is isolated from external impulses, the center-of-mass velocity is invariant ($\bar{v}_1 = \bar{v}_2$). Therefore, the center-of-mass kinetic energy $\frac{1}{2}(m_A + m_B)\bar{v}^2$ is identical before and after collision!

#### 3. Energy Difference
The change in kinetic energy depends strictly on the relative motion:
$$\Delta T = T_1 - T_2 = \frac{1}{2}\mu_{\text{red}}(v_{\text{rel}, 1}^2 - v_{\text{rel}, 2}^2)$$
From the definition of restitution (Eq. 2):
$$v_{\text{rel}, 2} = v'_A - v'_B = -e(v_A - v_B) = -e\,v_{\text{rel}, 1} \implies (v_{\text{rel}, 2})^2 = e^2 (v_{\text{rel}, 1})^2$$

Substitute into the energy difference:
$$\Delta T = \frac{1}{2}\mu_{\text{red}} \left[v_{\text{rel}, 1}^2 - e^2 v_{\text{rel}, 1}^2\right] = \frac{1}{2}\mu_{\text{red}}(1 - e^2)v_{\text{rel}, 1}^2 = \frac{1}{2}\frac{m_A m_B}{m_A + m_B}(1 - e^2)(v_A - v_B)^2$$
This completes the formal proof.
:::

---

### Question 6: Elastic vs. Plastic Impact Comparison
**Contrast perfectly elastic ($e = 1$) and perfectly plastic ($e = 0$) impacts in terms of impulse mechanics, shape recovery, and kinetic energy dissipation.**

::: details Click to view Step-by-Step Solution
| Comparison Criterion | Perfectly Elastic Impact ($e = 1$) | Perfectly Plastic Impact ($e = 0$) |
| :--- | :--- | :--- |
| **1. Restitution Impulse** | Equals deformation impulse: $\int R\,dt = \int P\,dt$. | Zero restitution impulse: $\int R\,dt = 0$. |
| **2. Post-Impact Motion** | Maximum relative separation speed: $v'_B - v'_A = v_A - v_B$. | Bodies stick together at common velocity: $v'_A = v'_B = u$. |
| **3. Shape Recovery** | $100\%$ elastic shape recovery; zero permanent strain. | Permanent plastic crushing, buckling, or coupling. |
| **4. Kinetic Energy** | Strictly conserved ($\Delta T = 0$), since $m_A(v_A - v'_A) = m_B(v'_B - v_B)$ and $v_A + v'_A = v_B + v'_B$. | Maximum energy loss: $\Delta T = \frac{1}{2}\mu_{\text{red}}(v_A - v_B)^2$. |
| **5. Examples** | Subatomic collisions, idealized steel/glass spheres. | Automatic railcar couplers, vehicle crumple zones, clay drops. |
:::

---

### Question 7: Oblique Central Impact Solution Procedure
**Outline the step-by-step engineering procedure for solving an unconstrained Oblique Central Impact between two smooth colliding spheres.**

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
Because the spheres are smooth and unconstrained, contact impulses act strictly along the normal $n$. Zero tangential impulse acts on either sphere:
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
- Let the floor lie in the tangential plane ($t$-axis), and let the normal to the floor be the $n$-axis.
- Incoming velocity $\mathbf{v}$ makes angle $\theta$ with the normal:
  $$v_n = -v\cos\theta, \quad v_t = v\sin\theta \implies \tan\theta = \frac{v_t}{|v_n|}$$

#### 2. Impact Conditions
- Smooth floor $\implies$ tangential velocity is conserved: $v'_t = v_t = v\sin\theta$.
- Normal restitution with a massive rigid floor ($m_{\text{floor}} \to \infty, v_{\text{floor}} = 0$):
  $$v'_n = -e v_n = +e v\cos\theta$$

#### 3. Rebound Angle $\theta'$ from the Normal
$$\tan\theta' = \frac{v'_t}{v'_n} = \frac{v\sin\theta}{e v\cos\theta} = \frac{\tan\theta}{e}$$

Since $0 < e \le 1$, $\frac{1}{e} \ge 1$, which implies $\tan\theta' \ge \tan\theta \iff \theta' \ge \theta$. The rebound trajectory is always deflected **farther away from the normal** (closer to the floor surface) compared to the approach path.
:::

---

### Question 9: Numerical — Rear-End Vehicle Collision
**A $2000\text{ kg}$ SUV traveling at $v_A = 20\text{ m/s}$ rear-ends a stationary $1000\text{ kg}$ compact car ($v_B = 0$) at a red light. The coefficient of restitution between the bumpers is $e = 0.40$. Determine:**
1. **The velocities of both vehicles immediately after the impact.**
2. **The loss of mechanical kinetic energy and the percentage dissipated.**

::: details Click to view Step-by-Step Solution
#### Step 1: Data & Momentum Conservation
- $m_A = 2000\text{ kg}$, $v_A = 20\text{ m/s}$; $m_B = 1000\text{ kg}$, $v_B = 0\text{ m/s}$; $e = 0.40$.

Conservation of total linear momentum:
$$(2000)(20) + (1000)(0) = 2000 v'_A + 1000 v'_B \implies 2 v'_A + v'_B = 40 \quad \text{--- (Eq. 1)}$$

#### Step 2: Restitution Equation
$$v'_B - v'_A = e(v_A - v_B) = 0.40(20 - 0) = 8.0\text{ m/s} \implies v'_B = v'_A + 8.0 \quad \text{--- (Eq. 2)}$$

#### Step 3: Solve Velocities
$$2 v'_A + (v'_A + 8.0) = 40 \implies 3 v'_A = 32.0 \implies v'_A = 10.67\text{ m/s}\to$$
$$v'_B = 10.67 + 8.0 = 18.67\text{ m/s}\to$$

#### Step 4: Kinetic Energy Dissipation
- Initial Kinetic Energy: $T_1 = \frac{1}{2}(2000)(20)^2 = 400\text{ kJ}$.
- Final Kinetic Energy: $T_2 = \frac{1}{2}(2000)(10.667)^2 + \frac{1}{2}(1000)(18.667)^2 = 113.78 + 174.22 = 288\text{ kJ}$.
- Kinetic Energy Lost: $\Delta T = 400 - 288 = 112\text{ kJ}$ (**$28.0\%$ dissipated**).
:::

---

### Question 10: Numerical — Rebound of Ball from a Smooth Wall
**A $0.5\text{ kg}$ rubber ball strikes a smooth vertical wall at an angle of $45^\circ$ with an approach speed of $v = 12\text{ m/s}$. The coefficient of restitution is $e = 0.60$. Determine:**
1. **The rebound velocity vector and rebound angle.**
2. **The linear impulse delivered by the wall to the ball.**

::: details Click to view Step-by-Step Solution
#### Step 1: Decomposition Along Normal and Tangent
Let $+n$ be perpendicular to the wall pointing outward and $+t$ be parallel to the wall ($\theta = 45^\circ$):
$$v_n = -12 \cos 45^\circ = -8.485\text{ m/s}, \qquad v_t = +12 \sin 45^\circ = +8.485\text{ m/s}$$

#### Step 2: Post-Impact Velocities
- Smooth wall $\implies v'_t = v_t = +8.485\text{ m/s}$.
- Normal restitution ($e = 0.60$): $v'_n = -e v_n = +5.091\text{ m/s}$.
- Rebound speed: $v' = \sqrt{(5.091)^2 + (8.485)^2} = \sqrt{97.92} = 9.90\text{ m/s}$.
- Rebound angle from normal: $\theta' = \tan^{-1}(8.485 / 5.091) = \tan^{-1}(1.6667) = 59.04^\circ$.

#### Step 3: Linear Impulse Delivered to the Ball
$$\text{Imp}_n = m(v'_n - v_n) = 0.5 [5.091 - (-8.485)] = +6.79\text{ N}\cdot\text{s} \quad (\text{outward along } +\mathbf{n})$$
:::

---

### Question 11: Constrained Oblique Impact (Block on Horizontal Rollers & Sphere)
**A smooth wedge-block $A$ of mass $m_A$ is constrained to move horizontally on frictionless floor rollers when an unconstrained smooth sphere $B$ of mass $m_B$ strikes its inclined upper face obliquely with coefficient of restitution $e$.**
1. **Explain why total linear momentum of $(A + B)$ is NOT conserved along the normal line of impact $n$, and identify the exact axis along which system momentum IS conserved.**
2. **Formulate the three independent scalar equations governing the three post-impact unknowns.**
3. **Prove concisely why the normal restitution relation $(v'_B)_n - (v'_A)_n = e[(v_A)_n - (v_B)_n]$ remains valid despite the external floor impulse.**

::: details Click to view Step-by-Step Solution

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_26_constrained_impulse_diagram.png"
  alt="System impulse-momentum diagram for constrained impact between block A and ball B showing vertical external floor impulse"
  caption="Fig. 13.26: System impulse–momentum diagram for constrained wedge-block A + ball B, showing the vertical external floor impulse F_ext Δt."
  slide="Sec. 13.4B · Fig. 13.26 (p. 887)"
  badge="📖 Textbook Figure"
  maxWidth="680px"
/>

#### 1. Role of the External Floor Impulse $\mathbf{F}_{\text{ext}}\Delta t$
During the impact, sphere $B$ pushes downward and normally against the inclined face of block $A$. Because block $A$ is kinematically constrained by rollers to remain on the horizontal plane, the floor exerts a **large vertical impulsive reaction $\mathbf{F}_{\text{ext}}\Delta t$** on block $A$ (**Fig. 13.26**).
- Since $\mathbf{F}_{\text{ext}}\Delta t$ is vertical, it has a **nonzero component along the inclined normal $n$** (and along $t$). Therefore, total system momentum along $n$ is **not** conserved, nor is $(v_A)_t$ conserved!
- Because the rollers are frictionless, $\mathbf{F}_{\text{ext}}\Delta t$ has **zero horizontal component** ($\sum \text{Imp}_x^{\text{(ext)}} = 0$). Hence, total linear momentum of the combined system $(A + B)$ **is strictly conserved along the horizontal $x$-axis**!

#### 2. The Three Governing Scalar Equations (for $v'_A$, $(v'_B)_n$, $(v'_B)_t$)
Since block $A$'s velocity direction is known (horizontal), there are **3 scalar unknowns** governed by:
1. **Tangential momentum of unconstrained sphere $B$ along $t$ (Eq. 13.50):**
   $$(v_B)_t = (v'_B)_t$$
2. **Total horizontal momentum of system $(A + B)$ along $x$ (Eq. 13.51):**
   $$m_A v_A + m_B (v_B)_x = m_A v'_A + m_B (v'_B)_x$$
3. **Normal restitution along the line of impact $n$ (Eq. 13.49):**
   $$(v'_B)_n - (v'_A)_n = e\left[(v_A)_n - (v_B)_n\right]$$

#### 3. Proof that Normal Restitution Still Holds
Let $\theta$ be the angle between the horizontal $x$-axis and the line of impact $n$, and let $u$ be block $A$'s horizontal speed at maximum deformation (so $u_n = u\cos\theta$). Writing horizontal ($x$-axis) impulse–momentum for block $A$ *alone* eliminates the vertical floor impulse completely during both deformation and restitution (Eqs. 13.52–13.53):
$$m_A v_A - \left(\int P\,dt\right)\cos\theta = m_A u, \qquad m_A u - \left(\int R\,dt\right)\cos\theta = m_A v'_A$$
Taking their ratio gives:
$$e = \frac{\int R\,dt}{\int P\,dt} = \frac{u - v'_A}{v_A - u} = \frac{u\cos\theta - v'_A\cos\theta}{v_A\cos\theta - u\cos\theta} = \frac{u_n - (v'_A)_n}{(v_A)_n - u_n}$$
Combining this with unconstrained sphere $B$'s ratio $e = \frac{(v'_B)_n - u_n}{u_n - (v_B)_n}$ yields $e = \frac{(v'_B)_n - (v'_A)_n}{(v_A)_n - (v_B)_n}$, proving Eq. (13.49) remains exact!
:::

---

### Question 12: Multi-Principle Synthesis — Two-Pendulum Impact & Cord Tension
**A pendulum bob $A$ of mass $m_A = 1.5\text{ kg}$ suspended from a cord of length $l = 1.20\text{ m}$ is released from rest from a horizontal position ($\theta_0 = 90^\circ$) and strikes a stationary bob $B$ of mass $m_B = 2.5\text{ kg}$ suspended from an identical cord of length $l = 1.20\text{ m}$. The coefficient of restitution is $e = 0.60$ ($g = 9.81\text{ m/s}^2$).**
1. **Explain why Conservation of Mechanical Energy cannot be applied directly from initial release of $A$ to the maximum swing height of $B$.**
2. **Determine the post-impact velocities $v'_A$ and $v'_B$, and the maximum angle $\theta_{\max}$ through which bob $B$ swings.**
3. **Determine the peak tension $T_{\text{cord}, B}$ in bob $B$'s cord immediately after the impact.**

::: details Click to view Step-by-Step Solution

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_28_pendulum_impact_energy.png"
  alt="Four-stage analysis (a)-(d) of an impact between two pendulum bobs combining Energy and Momentum"
  caption="Fig. 13.28: Partitioning a two-pendulum collision into smooth energy-conserving swings (a, d), an impulsive collision interval (b–c), and an instantaneous normal force balance for cord tension."
  slide="Sec. 13.4C · Fig. 13.28 (p. 889)"
  badge="📖 Textbook Figure"
  maxWidth="700px"
/>

#### 1. Why Energy Conservation Fails Across the Impact ($t_2 \to t_3$)
During the smooth swings *before* impact ($A_1 \to A_2$) and *after* impact ($B_3 \to B_4$), cord tension is perpendicular to velocity ($dU_T = 0$) and gravity is conservative, so mechanical energy is conserved on each swing separately. However, **across the collision interval ($t_2 \to t_3$)** where $e = 0.60 < 1$, internal inelastic deformation dissipates $\Delta T = \frac{1}{2}\mu_{\text{red}}(1 - e^2)v_A^2 > 0$ into heat and vibration. Applying $m_A g h_A = m_B g h_B$ across the collision would violate the First/Second Laws of Thermodynamics!

---

#### 2. Three-Stage Velocity & Swing Angle Calculation
- **Stage 1 ($A_1 \to A_2$, Conservation of Energy):** Released from $\theta_0 = 90^\circ \implies h_A = l = 1.20\text{ m}$:
  $$0 + m_A g l = \frac{1}{2}m_A v_A^2 \implies v_A = \sqrt{2 g l} = \sqrt{2(9.81)(1.20)} = \sqrt{23.544} = 4.852\text{ m/s}\to$$

- **Stage 2 ($A_2, B_2 \to A_3, B_3$, Horizontal Momentum + Restitution):**
  - Momentum along $x$: $1.5(4.8522) + 0 = 1.5\,v'_A + 2.5\,v'_B \implies 3 v'_A + 5 v'_B = 14.5566$
  - Restitution ($e = 0.60$): $v'_B - v'_A = 0.60(4.8522 - 0) = 2.9113 \implies v'_A = v'_B - 2.9113$
  - Substitute:
    $$3(v'_B - 2.9113) + 5 v'_B = 14.5566 \implies 8 v'_B = 23.2906 \implies v'_B = +2.911\text{ m/s}\to$$
    $$v'_A = 2.9113 - 2.9113 = 0.000\text{ m/s} \quad (\text{Bob } A \text{ comes dead to rest since } m_A = e m_B!)$$

- **Stage 3 ($B_3 \to B_4$, Conservation of Energy for Bob $B$):**
  $$\frac{1}{2}m_B (v'_B)^2 = m_B g h_B \implies h_B = \frac{(2.9113)^2}{2(9.81)} = \frac{8.4758}{19.62} = 0.4320\text{ m}$$
  Since $h_B = l(1 - \cos\theta_{\max})$:
  $$1 - \cos\theta_{\max} = \frac{0.4320}{1.20} = 0.3600 \implies \cos\theta_{\max} = 0.6400 \implies \theta_{\max} = \cos^{-1}(0.6400) = 50.2^\circ$$

---

#### 3. Peak Cord Tension in Bob $B$ Immediately After Impact ($\sum F_n = m a_n$)
Applying **Newton's Second Law** along the upward normal ($n$-axis) to bob $B$ at the bottom of the arc ($B_3$) where $a_n = (v'_B)^2 / l$:
$$\sum F_n = m_B a_n \implies T_{\text{cord}, B} - m_B g = m_B \frac{(v'_B)^2}{l}$$
$$T_{\text{cord}, B} = 2.5\left(9.81 + \frac{(2.9113)^2}{1.20}\right) = 2.5(9.81 + 7.063) = 2.5(16.873) = 42.18\text{ N}$$
The cord supporting bob $B$ must withstand a peak tension of **$42.2\text{ N}$** immediately after impact.
:::

---

## Part B: Interactive Module 5 Quiz (12 Questions)

<script setup>
const questions = [
  {
    question: "What are the standard SI units of Linear Impulse, and why are they dimensionally identical to Linear Momentum?",
    options: [
      "Joules (J), because impulse equals kinetic energy",
      "Newton-seconds (N·s) = (kg·m/s²)·s = kg·m/s",
      "Watts (W), because impulse is time rate of work",
      "Newtons per meter (N/m)"
    ],
    answer: 1,
    explanation: "Linear impulse is ∫ F dt, having SI units of N·s = (kg·m/s²)·s = kg·m/s, matching linear momentum mv identically."
  },
  {
    question: "Why can the weight of a colliding body be safely neglected during a millisecond impact analysis, whereas an unknown bearing or floor support reaction CANNOT be automatically neglected?",
    options: [
      "Because gravity turns off during collisions while bearings become magnetic",
      "Because bounded weight produces negligible impulse (W·Δt ≈ 0), whereas constrained support reactions can spike to huge impulsive magnitudes (R_avg·Δt ≠ 0)",
      "Because support reactions always perform positive mechanical work",
      "Because potential energy is conserved across every plastic impact"
    ],
    answer: 1,
    explanation: "Known bounded forces like weight W and moderate springs satisfy F·Δt -> 0 as Δt -> 0, whereas kinematically constrained supports generate large impulsive reactions to enforce geometric constraints."
  },
  {
    question: "Why does the sum of internal action–reaction IMPULSES always vanish for any system of particles, even when the sum of internal WORK does NOT vanish?",
    options: [
      "Because internal forces are always zero",
      "Because f_ij = -f_ji acts over the exact same time interval dt for both particles, whereas their spatial displacements dr_i and dr_j can differ during deformation or sliding",
      "Because momentum is a scalar while work is a vector",
      "Because internal work only vanishes when e = 0"
    ],
    answer: 1,
    explanation: "Time flows identically for both interacting particles, so ∫ f_ij dt + ∫ f_ji dt = 0 unconditionally. Displacements during deformation differ, allowing internal work to dissipate kinetic energy."
  },
  {
    question: "Two boats A (mass m_A) and B (mass m_B) are initially at rest on calm water when a person in boat B pulls on a rope attached to boat A. Neglecting water drag, their speeds v'_A and v'_B satisfy:",
    options: [
      "v'_A / v'_B = m_A / m_B",
      "v'_A / v'_B = m_B / m_A (inversely proportional to their masses)",
      "v'_A = v'_B regardless of mass",
      "Boat B remains stationary because the person pulling is in boat B"
    ],
    answer: 1,
    explanation: "The rope tension is internal to the two-boat system and initial total momentum is zero: 0 = m_A v'_A - m_B v'_B, giving v'_A / v'_B = m_B / m_A."
  },
  {
    question: "The total linear momentum of a multi-particle system is conserved if and only if:",
    options: [
      "Mechanical kinetic energy is conserved",
      "The vector sum of all external impulses acting on the system over the interval is zero",
      "All internal forces are zero",
      "The coefficient of restitution equals 1"
    ],
    answer: 1,
    explanation: "Internal impulses always cancel in pairs; therefore ∑ mv_1 = ∑ mv_2 holds whenever the resultant external impulse ∑ Imp_ext = 0."
  },
  {
    question: "How is Poisson's Coefficient of Restitution e defined, and what kinematic relation does it yield along the line of impact?",
    options: [
      "e = (∫ P dt)/(∫ R dt) = (vA - vB)/(v'B - v'A)",
      "e = (∫ R dt)/(∫ P dt) = (v'B - v'A)/(vA - vB) = Relative separation speed / Relative approach speed",
      "e = T2 / T1",
      "e = mB / mA"
    ],
    answer: 1,
    explanation: "Poisson defined e as the ratio of restitution impulse ∫ R dt to deformation impulse ∫ P dt, which reduces algebraically to (v'B - v'A)/(vA - vB)."
  },
  {
    question: "A tennis ball is dropped from rest at height h_0 onto a rigid horizontal floor and rebounds to a first peak height h_1. What is the coefficient of restitution e?",
    options: [
      "e = h_1 / h_0",
      "e = √(h_1 / h_0)",
      "e = (h_1 / h_0)²",
      "e = 1 - (h_1 / h_0)"
    ],
    answer: 1,
    explanation: "Since v_impact = √(2gh_0) and v_rebound = √(2gh_1), e = v_rebound / v_impact = √(h_1 / h_0), so the n-th bounce height is h_n = e^(2n) h_0."
  },
  {
    question: "In a perfectly plastic collision (e = 0) between two moving objects:",
    options: [
      "Total kinetic energy is conserved",
      "The bodies rebound with equal and opposite velocities",
      "There is no period of restitution (∫ R dt = 0); the bodies stay together with a common final velocity",
      "Linear momentum is destroyed"
    ],
    answer: 2,
    explanation: "For e = 0, restitution impulse vanishes; the bodies remain coupled at common velocity u and dissipate the maximum possible relative kinetic energy."
  },
  {
    question: "In an unconstrained oblique central impact between two smooth spheres, what happens to their velocity components tangent to the contact plane (t-axis)?",
    options: [
      "They reverse direction",
      "They drop to zero",
      "They remain unchanged for each sphere individually: (v'A)t = (vA)t and (v'B)t = (vB)t",
      "They scale by factor e"
    ],
    answer: 2,
    explanation: "Smooth spheres exert zero friction along the tangent plane (F_t = 0), so zero tangential impulse acts on either sphere."
  },
  {
    question: "A ball bounces off a smooth fixed floor with coefficient of restitution e < 1. If the incoming angle measured from the surface normal is θ, the rebound angle θ' from the normal satisfies:",
    options: [
      "tan θ' = e · tan θ",
      "tan θ' = (tan θ) / e, so θ' > θ",
      "θ' = θ",
      "sin θ' = e · sin θ"
    ],
    answer: 1,
    explanation: "Since v't = vt and v'n = e·vn, tan θ' = v't / v'n = (tan θ)/e. Because e < 1, θ' > θ (the ball rebounds flatter along the surface)."
  },
  {
    question: "An unconstrained smooth sphere B strikes the inclined face of a wedge-block A that is constrained to roll on a smooth horizontal floor. Along which axis is the total linear momentum of the combined system (A + B) conserved?",
    options: [
      "Along the inclined normal line of impact (n-axis)",
      "Along the inclined tangent plane (t-axis)",
      "Strictly along the horizontal x-axis, because the floor exerts an impulsive vertical external reaction F_ext·Δt on block A",
      "Total momentum is conserved in every direction"
    ],
    answer: 2,
    explanation: "The horizontal rollers exert a vertical external impulse F_ext·Δt on block A, which has components along both n and t, leaving only the horizontal x-direction free of external impulse."
  },
  {
    question: "In a two-pendulum impact problem (bob A swings down, strikes stationary bob B with e < 1, and bob B swings upward), which combination of principles must be used to find bob B's peak cord tension immediately after impact and its maximum swing angle?",
    options: [
      "Conservation of Energy across the entire motion from A's release to B's peak",
      "Conservation of Energy on each swing separately, Momentum + Restitution across the impact, and Newton's Second Law (ΣF_n = m v²/l) for peak cord tension",
      "Impulse–Momentum alone for all stages including cord tension",
      "Work–Energy across the collision and ΣF_t = 0 for cord tension"
    ],
    answer: 1,
    explanation: "Inelastic impact (e < 1) dissipates energy across the collision, requiring Momentum + Restitution there; Energy Conservation governs the smooth pre/post-impact swings, and ΣF_n = m v²/l exposes the zero-work normal cord tension."
  }
];
</script>

<QuizModule title="Module 5: Momentum & Impact Methods — Mastery Quiz" :questions="questions" />
