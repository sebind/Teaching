---
title: 3.4 Module 3 — Important Questions & Self-Check Quiz
description: Official exam-grade theory and numerical question bank with step-by-step solutions, plus an interactive mastery quiz for Module 3.
---

# 3.4 Module 3 — Important Questions & Self-Check Quiz

::: tip Overview & Exam Focus
This chapter consolidates your mastery of **Module 3: Kinetics of Particles — Newton's Second Law & Friction**.
- **Part A** presents 12 comprehensive, university-examination grade conceptual and numerical problems with fully articulated step-by-step solutions inside collapsible containers.
- **Part B** features an interactive self-assessment quiz providing immediate evaluation, score tracking, and detailed analytical rationales.
:::

---

## Part A: Important Questions Bank (Module 3)

### Question 1: Momentum Formulation & Inertial Reference Frames
**State Newton's Second Law of Motion in its fundamental linear momentum formulation. Define an inertial frame of reference and explain why Earth's surface can be treated as an inertial frame for common engineering dynamics.**

::: details Click to view Step-by-Step Solution
#### 1. Linear Momentum Formulation
Newton's Second Law states that the resultant of all external forces acting on a body is equal to the time rate of change of its linear momentum:
$$\sum \mathbf{F} = \frac{d\mathbf{p}}{dt} = \frac{d}{dt}(m\mathbf{v})$$
If the mass $m$ is constant with respect to time:
$$\sum \mathbf{F} = m \frac{d\mathbf{v}}{dt} = m \mathbf{a}$$

#### 2. Inertial Reference Frame
An **inertial (Newtonian) frame of reference** is a coordinate system that is either fixed in space or moving with constant velocity (zero absolute linear acceleration and zero angular rotation). Newton's laws are valid **only** when accelerations are measured relative to an inertial frame.

#### 3. Earth as an Engineering Approximation
The Earth rotates about its polar axis with angular velocity $\omega = 7.292 \times 10^{-5}\text{ rad/s}$ and orbits the Sun. This gives rise to centripetal and Coriolis accelerations:
- Maximum centripetal acceleration at the equator: $a_c = R_E \omega^2 \approx (6.37 \times 10^6)(7.292 \times 10^{-5})^2 \approx 0.034\text{ m/s}^2$ (less than $0.35\%$ of $g = 9.81\text{ m/s}^2$).
- For terrestrial engineering systems (automobiles, industrial robots, structural vibrations), accelerations are on the order of $1\text{ to }50\text{ m/s}^2$, rendering Earth's rotation effects negligible. Hence, a ground-fixed frame is an excellent approximation of an inertial frame.
:::

---

### Question 2: Normal-Tangential Path Acceleration & Loop Apex
**In normal-tangential path coordinates, explain why normal acceleration $a_n = v^2/\rho$ always points toward the center of curvature. Derive the expression for the critical minimum speed required for a roller-coaster car of mass $m$ to complete a vertical circular loop of radius $R$ without falling off the track.**

::: details Click to view Step-by-Step Solution
#### 1. Direction of Normal Acceleration
In path coordinates, the velocity vector is always tangent to the trajectory: $\mathbf{v} = v\mathbf{e}_t$. Differentiating with respect to time:
$$\mathbf{a} = \frac{d\mathbf{v}}{dt} = \frac{dv}{dt}\mathbf{e}_t + v\frac{d\mathbf{e}_t}{dt}$$
As the particle travels along an infinitesimal arc $ds = \rho\,d\theta$, the unit tangent vector changes direction by angle $d\theta$. The change $d\mathbf{e}_t$ points strictly toward the center of curvature along unit normal $\mathbf{e}_n$, with magnitude $|d\mathbf{e}_t| = 1 \cdot d\theta$.
$$\frac{d\mathbf{e}_t}{dt} = \frac{d\mathbf{e}_t}{d\theta}\frac{d\theta}{dt} = \mathbf{e}_n \dot{\theta} = \mathbf{e}_n \left(\frac{v}{\rho}\right)$$
$$\mathbf{a} = \dot{v}\mathbf{e}_t + \frac{v^2}{\rho}\mathbf{e}_n$$
Thus, $a_n = v^2/\rho$ is strictly directed inward toward the center of curvature.

#### 2. Critical Speed at the Apex of a Vertical Loop
At the highest point (apex) of a circular track of radius $R$:
- Gravity $W = mg$ acts vertically downward (inward along $\mathbf{e}_n$).
- Track normal reaction $N$ pushes vertically downward (inward along $\mathbf{e}_n$).

Applying the normal equation of motion:
$$\sum F_n = N + mg = m a_n = m \frac{v^2}{R}$$
$$N = m\left(\frac{v^2}{R} - g\right)$$
For the car to maintain track contact, the normal reaction must remain non-negative ($N \ge 0$). At the verge of losing contact, $N = 0$:
$$0 = m\left(\frac{v_{crit}^2}{R} - g\right) \implies \frac{v_{crit}^2}{R} = g \implies v_{crit} = \sqrt{g R}$$
If $v < \sqrt{g R}$, the required normal force would be tensile, causing the car to fall away from the track.
:::

---

### Question 3: D'Alembert's Principle & Dynamic Equilibrium
**State D'Alembert's Principle. How does it convert a dynamic problem into an equivalent problem of static equilibrium? Illustrate with a body of mass $m$ accelerating horizontally.**

::: details Click to view Step-by-Step Solution
#### 1. Statement of D'Alembert's Principle
D'Alembert's Principle (1743) states that the resultant of external forces acting on a body and the reversed effective force (inertia vector $-m\mathbf{a}$) form a system in **dynamic equilibrium**:
$$\sum \mathbf{F}_{ext} + (-m\mathbf{a}) = \mathbf{0}$$

#### 2. Conversion to Static Equilibrium
By treating the inertia vector $\mathbf{F}_{in} = -m\mathbf{a}$ as an imaginary applied force acting at the center of mass in the direction opposite to acceleration, the laws of statics become directly applicable:
$$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum M_P = 0$$

#### 3. Illustration: Accelerating Block
Consider a block of mass $m$ pulled by force $P$ along a horizontal floor with friction $F_k$:
- Real external forces: Pull $P\to$, Weight $W\downarrow$, Normal $N\uparrow$, Friction $F_k\leftarrow$.
- Kinetic acceleration: $a\to$.
- D'Alembert inertia force: $m a \leftarrow$ (directed opposite to $a$).
- Dynamic equilibrium equation:
  $$\sum F_x^{dyn} = P - F_k - m a = 0 \iff P - F_k = m a$$
Furthermore, moments can be taken about any arbitrary point $O$, including the tipping corner of the block:
$$\sum M_O = \sum M_{O, ext} + \mathbf{r}_{G/O} \times (-m\mathbf{a}) = 0$$
:::

---

### Question 4: Coulomb Dry Friction & The Three Regimes
**Differentiate between static friction, impending friction, and kinetic friction with the aid of a friction-force versus applied-force curve. Explain the microscopic origin of the drop from static to kinetic friction.**

::: details Click to view Step-by-Step Solution

<LectureFigure
  src="/images/physics/mod3/mod3_friction_graph_fp.png"
  caption="Friction force F vs. applied force P showing the static equilibrium line (F = P), limiting static friction peak (F_m = μ_s N), and drop to kinetic sliding friction (F_k = μ_k N)."
  slide="Mod 3 · Slide 16"
  max-width="580px"
/>

#### 1. The Three Friction Regimes
1. **Static Self-Adjusting Regime ($0 \le P < F_m$):** The body remains at rest. Friction adjusts automatically to exactly balance the applied force ($F = P$). The inequality $F \le \mu_s N$ holds.
2. **Impending Friction (Limiting Friction, $P = F_m$):** The maximum static threshold where sliding is on the verge of occurring:
   $$F_m = \mu_s N$$
3. **Kinetic Sliding Regime ($P > F_m$):** Once sliding initiates, friction drops to a nearly constant resisting force:
   $$F_k = \mu_k N \quad (\text{with } \mu_k < \mu_s)$$

#### 2. Microscopic Mechanism for the Drop
At rest, contact between solid surfaces occurs only at microscopic asperities. Under the local normal contact stress, these asperities undergo plastic deformation and form adhesive "cold welds." The static coefficient $\mu_s$ reflects the high shear stress required to fracture these cold welds and break the interlocking contact junctions. 

Once relative motion begins, the asperities ride rapidly over one another with insufficient time to form deep adhesive cold welds. The resistance drops to kinetic friction $\mu_k$, which primarily represents continuous mechanical plowing and asperity impacts.
:::

---

### Question 5: Angle of Repose & Incline Stability
**Define the "Angle of Repose". Prove mathematically that on an inclined plane under gravity alone, the angle of repose is identically equal to the static angle of friction $\phi_s$.**

<LectureFigure
  src="/images/physics/mod3/mod3_incline_repose.png"
  caption="Block on an inclined plane illustrating static equilibrium (θ < φ_s), impending slip at the Angle of Repose (θ = φ_s), and accelerated sliding (θ > φ_s)."
  slide="Mod 3 · Slide 23"
  max-width="700px"
/>

::: details Click to view Step-by-Step Solution
#### 1. Definition
The **Angle of Repose** ($\theta_r$) is the maximum angle of inclination of a rough surface with respect to the horizontal at which a granular pile or a solid block can remain in static equilibrium without sliding down under its own weight.

#### 2. Mathematical Proof
Consider a block of weight $W$ resting on a plane inclined at angle $\theta$:
- Normal to the plane: $\sum F_n = N - W\cos\theta = 0 \implies N = W\cos\theta$.
- Parallel to the plane: $\sum F_t = W\sin\theta - F = 0 \implies F = W\sin\theta$.

At the verge of sliding down (impending motion), friction reaches its limiting value:
$$F = F_m = \mu_s N$$
Substitute $F$ and $N$:
$$W\sin\theta_r = \mu_s (W\cos\theta_r)$$
Dividing both sides by $W\cos\theta_r$:
$$\tan\theta_r = \mu_s$$
Recall the definition of the static angle of friction: $\tan\phi_s = \mu_s \iff \phi_s = \tan^{-1}\mu_s$.
Therefore:
$$\theta_r = \phi_s$$
The angle of repose equals the static angle of friction.
:::

---

### Question 6: Slipping vs. Tipping Analysis
**Derive the critical height $h_{crit}$ above which a rectangular crate of width $b$ and height $h$ resting on a rough horizontal surface ($\mu_s$) will tip over before it slips when pulled horizontally.**

::: details Click to view Step-by-Step Solution
#### 1. Slip Condition
Let a horizontal force $P$ be applied at height $h_p$ above the floor to a crate of weight $W$ and width $b$.
From vertical equilibrium, normal reaction $N = W$.
Impending slip occurs when:
$$P_{slip} = \mu_s N = \mu_s W$$

#### 2. Tip Condition
Taking moments about the center of the base, the overturning couple is $P \cdot h_p$. This couple is counterbalanced by the forward shift $x$ of the normal reaction $N$:
$$\sum M_{base} = 0 \implies P \cdot h_p - N \cdot x = 0 \implies x = \frac{P \cdot h_p}{W}$$
The normal reaction cannot physically act beyond the forward corner ($x_{max} = b/2$). Impending tip occurs when $x = b/2$:
$$P_{tip} \cdot h_p = W \left(\frac{b}{2}\right) \implies P_{tip} = W \frac{b}{2 h_p}$$

#### 3. Critical Height Derivation
Tipping occurs before slipping if $P_{tip} < P_{slip}$:
$$W \frac{b}{2 h_p} < \mu_s W \implies \frac{b}{2 h_p} < \mu_s \implies h_p > \frac{b}{2\mu_s}$$
Thus, the critical application height is:
$$h_{crit} = \frac{b}{2\mu_s}$$
If the force is applied below $h_{crit}$, the crate slips. If applied above $h_{crit}$, it tips over.
:::

---

### Question 7: Wedge Mechanics & Force Multiplication
**Describe the mechanical working of a wedge. Explain why wedges function as force multipliers and sketch the Free-Body Diagrams of a load and wedge during lifting.**

::: details Click to view Step-by-Step Solution

<LectureFigure
  src="/images/physics/mod3/mod3_wedge_concepts.png"
  caption="Free-Body Diagrams of the load block and driving wedge showing normal reactions and friction forces (F = μ_s N) opposing impending motion."
  slide="Mod 3 · Slide 24"
  max-width="720px"
/>

#### 1. Mechanical Principle
A wedge is an inclined plane machine with a small taper angle $\theta$. When driven horizontally by an effort $P$, it converts horizontal displacement into small vertical displacement of a heavy load $W$. Because the mechanical advantage is approximately $\text{MA} \approx \frac{1}{\tan(\theta + \phi_s)}$, a small force $P$ can lift a disproportionately large weight $W$.

#### 2. Friction at Interfaces
During lifting, the relative motion at each interface dictates the direction of friction:
- **Load-Wall interface:** Load moves up $\implies$ wall friction acts downward on the load.
- **Load-Wedge interface:** Wedge drives inward beneath load $\implies$ friction on load acts downward along the inclined face; friction on wedge acts upward along the inclined face.
- **Wedge-Ground interface:** Wedge advances $\implies$ ground friction acts backward, resisting wedge drive $P$.

#### 3. Equilibrium
Solving the two concurrent 3-force systems (or force polygons) for the load and wedge yields the required driving force:
$$P = R_2 \sin(\theta + \phi_s) + \mu_s N_3$$
:::

---

### Question 8: Square-Thread Power Screws & Self-Locking
**Derive the condition under which a square-threaded power screw is "self-locking". What is the maximum possible mechanical efficiency of a self-locking power screw?**

::: details Click to view Step-by-Step Solution

<LectureFigure
  src="/images/physics/mod3/mod3_screw_unwrapped.png"
  caption="Unwrapped square-thread inclined-plane analysis: (a) impending upward motion, (b) self-locking downward motion (φ_s > θ), and (c) unwinding downward motion (φ_s < θ)."
  slide="Mod 3 · Slide 27"
  max-width="720px"
/>

#### 1. Unwrapped Thread Mechanics
Let a vertical load $W$ act on a screw of mean radius $r_m$ and lead $L$. The thread unwraps into a ramp of lead angle $\tan\theta = \frac{L}{2\pi r_m}$.

When lowering the load:
- The downward weight tends to push the nut down the thread ramp.
- The friction force acts up the ramp opposing downward motion.
- The effective horizontal effort to lower the load is:
  $$P_{lower} = W \tan(\phi_s - \theta)$$
- The lowering torque is:
  $$M_{lower} = W r_m \tan(\phi_s - \theta)$$

#### 2. Self-Locking Condition
- If $\phi_s > \theta$: $M_{lower} > 0$. The screw will not rotate under the load alone; an active positive reverse torque is required to lower the load. The screw is **self-locking**.
- If $\phi_s < \theta$: $M_{lower} < 0$. The load spontaneously spins the screw downward (overhauling).

#### 3. Maximum Efficiency of Self-Locking Screws
The mechanical efficiency of a power screw when raising a load is:
$$\eta = \frac{\tan\theta}{\tan(\theta + \phi_s)}$$
For a self-locking screw, the limiting threshold is $\theta \le \phi_s$:
$$\eta \le \frac{\tan\theta}{\tan(\theta + \theta)} = \frac{\tan\theta}{\tan(2\theta)}$$
Using the double-angle identity $\tan(2\theta) = \frac{2\tan\theta}{1 - \tan^2\theta}$:
$$\eta \le \frac{\tan\theta}{\frac{2\tan\theta}{1 - \tan^2\theta}} = \frac{1 - \tan^2\theta}{2} = \frac{1}{2} - \frac{1}{2}\tan^2\theta < \frac{1}{2} = 50\%$$
Any self-locking power screw has an efficiency strictly less than $50\%$.
:::

---

### Question 9: Calculus Derivation of Flat Belt Friction
**Derive the Capstan formula for flat belt friction: $T_2 = T_1 e^{\mu_s \beta}$. State all underlying engineering assumptions.**

::: details Click to view Step-by-Step Solution

<LectureFigure
  src="/images/physics/mod3/mod3_belt_capstan_element.png"
  caption="Belt wrap over arc β and differential element PP' Free-Body Diagram used to derive T_2 = T_1 e^(μ_s β)."
  slide="Mod 3 · Slide 28"
  max-width="640px"
/>

#### 1. Assumptions
1. The belt is flexible, inextensible, and flat.
2. The belt has negligible mass (centrifugal forces neglected).
3. The drum is rigid and circular with constant contact radius $r$.
4. Coulomb friction applies uniformly across the arc of contact $\beta$.

#### 2. Derivation
Consider a differential belt element subtending angle $d\theta$:
- Normal force equilibrium (radial direction):
  $$\sum F_n = dN - T\sin(d\theta/2) - (T + dT)\sin(d\theta/2) = 0$$
  For small angles, $\sin(d\theta/2) \approx d\theta/2$ and neglecting $dT\,d\theta$:
  $$dN = T\,d\theta$$

- Tangential equilibrium along impending slip:
  $$\sum F_t = (T + dT)\cos(d\theta/2) - T\cos(d\theta/2) - dF = 0$$
  Since $\cos(d\theta/2) \to 1$ and $dF = \mu_s dN$:
  $$dT = dF = \mu_s dN$$

- Substitute $dN = T\,d\theta$:
  $$dT = \mu_s T\,d\theta \implies \frac{dT}{T} = \mu_s\,d\theta$$

- Integrating from $T_1$ to $T_2$ over wrap angle $\beta$ (in radians):
  $$\int_{T_1}^{T_2} \frac{dT}{T} = \mu_s \int_0^\beta d\theta$$
  $$\ln\left(\frac{T_2}{T_1}\right) = \mu_s \beta \iff T_2 = T_1 e^{\mu_s \beta}$$
:::

---

### Question 10: Circle of Friction in Journal Bearings
**Define the "Circle of Friction" in journal bearings and prove that its radius $r_f$ depends only on the shaft radius and the coefficient of friction, being completely independent of the applied load.**

<LectureFigure
  src="/images/physics/mod3/mod3_journal_bearing.png"
  src2="/images/physics/mod3/mod3_pulley_axle_problem.png"
  caption="(Left) Journal bearing reaction R tangent to the Circle of Friction (r_f = r sin φ_k ≈ r μ_k); (Right) Application to a 4-in. pulley on a 2-in. fixed shaft supporting a 500-lb load during raising and holding."
  slide="Mod 3 · Slides 31 & 37"
/>

::: details Click to view Step-by-Step Solution
#### 1. Definition
The **Circle of Friction** is an imaginary circle of radius $r_f$ centered at the axis of a rotating shaft inside a journal bearing, such that the line of action of the total bearing reaction $\mathbf{R}$ is always tangent to this circle during impending slip or steady rotation.

#### 2. Mathematical Proof
Consider a shaft of radius $r$ carrying transverse load $W$. As the shaft rotates, it climbs the bearing surface until the contact point is at angle $\phi$ to the normal:
- Normal force $\mathbf{N}$ points radially toward center $O$.
- Friction force $\mathbf{F} = \mu \mathbf{N}$ is perpendicular to $\mathbf{N}$.
- Resultant force $\mathbf{R} = \mathbf{N} + \mathbf{F}$ is inclined at friction angle $\phi$ to normal radius $OB$, where $\tan\phi = \mu$.

Drop a perpendicular from shaft center $O$ to the line of action of resultant $\mathbf{R}$. Let this perpendicular distance be $r_f$:
In right-angled triangle formed by center $O$, contact point $B$, and the line of action:
$$r_f = r \sin\phi$$
For small friction coefficients ($\mu \le 0.20$), $\sin\phi \approx \tan\phi = \mu$:
$$r_f \approx r \mu$$

Notice that $r$ is a geometric dimension of the shaft and $\mu$ is an interfacial material property. The magnitude of the external load $W$ or driving torque $M$ does not appear in the expression for $r_f$. Hence, the radius of the circle of friction is strictly independent of the load.
:::

---

### Question 11: Disk Clutch Friction Torque
**Derive the expression for the resisting friction torque of a flat circular disk clutch under uniform pressure.**

::: details Click to view Step-by-Step Solution
#### 1. Uniform Pressure Distribution
Let total axial compressive force $P$ be applied over a solid circular disk of radius $R$.
Contact area: $A = \pi R^2$.
Uniform contact pressure:
$$p = \frac{P}{A} = \frac{P}{\pi R^2}$$

#### 2. Ring Element Torque
Consider an annular differential ring of radius $r$ and width $dr$:
- Area: $dA = 2\pi r\,dr$
- Normal force: $dN = p\,dA = \left(\frac{P}{\pi R^2}\right)(2\pi r\,dr) = \frac{2P}{R^2}r\,dr$
- Friction force: $dF_k = \mu_k\,dN = \mu_k \frac{2P}{R^2}r\,dr$
- Differential resisting torque about rotation axis:
  $$dM = r \cdot dF_k = \frac{2\mu_k P}{R^2} r^2\,dr$$

#### 3. Integration
Integrating across the entire disk from $r = 0$ to $r = R$:
$$M = \int_0^R \frac{2\mu_k P}{R^2} r^2\,dr = \frac{2\mu_k P}{R^2} \left[\frac{r^3}{3}\right]_0^R = \frac{2\mu_k P}{R^2}\left(\frac{R^3}{3}\right)$$
$$M = \frac{2}{3} \mu_k P R$$
The effective friction radius is $\bar{r} = \frac{2}{3}R$.
:::

---

### Question 12: Numerical — Wedge Under a Heavy Machine Base
**A $10^\circ$ wedge is driven under a machine block of mass $m = 250\text{ kg}$ resting against a vertical wall. If $\mu_s = 0.25$ between all contact surfaces, determine the horizontal force $P$ required to drive the wedge.**

<LectureFigure
  src="/images/physics/mod3/mod3_wedge_1500n.png"
  caption="Reference lecture configuration for a 10° wedge driven horizontally by force P to raise a vertical block against wall and ground friction (Slide 25 benchmark shows the 1500 N, μ_s = 0.3 case)."
  slide="Mod 3 · Slide 25"
  max-width="540px"
/>

::: details Click to view Step-by-Step Solution
#### Step 1: Weight and Friction Angles
- Weight of machine block:
  $$W = m g = 250 \times 9.81 = 2452.5\text{ N}$$
- Friction angle for $\mu_s = 0.25$:
  $$\phi_s = \tan^{-1}(0.25) = 14.04^\circ$$
- Wedge angle: $\theta = 10^\circ$.

#### Step 2: Equilibrium of Machine Block
The block is in equilibrium under three forces:
1. Weight $W = 2452.5\text{ N}\downarrow$.
2. Reaction $\mathbf{R}_1$ from the vertical wall: Normal is horizontal, friction opposes upward motion (points down).
   Angle of $\mathbf{R}_1$ with horizontal: $\phi_s = 14.04^\circ$.
   $$R_{1x} = R_1 \cos(14.04^\circ), \quad R_{1y} = -R_1 \sin(14.04^\circ) = -0.25 R_{1x}$$
3. Reaction $\mathbf{R}_2$ from the wedge: Wedge inclined at $10^\circ$ to horizontal $\implies$ normal makes $10^\circ$ with vertical.
   Angle of $\mathbf{R}_2$ with vertical:
   $$\theta + \phi_s = 10^\circ + 14.04^\circ = 24.04^\circ$$

Setting up equilibrium for the block:
$$\sum F_x = R_{1x} - R_2 \sin(24.04^\circ) = 0 \implies R_{1x} = R_2 \sin(24.04^\circ)$$
$$\sum F_y = R_2 \cos(24.04^\circ) - W - 0.25 R_{1x} = 0$$
$$R_2 \left[\cos(24.04^\circ) - 0.25 \sin(24.04^\circ)\right] = 2452.5$$
$$\cos(24.04^\circ) = 0.9133, \quad \sin(24.04^\circ) = 0.4074$$
$$0.9133 - 0.25(0.4074) = 0.9133 - 0.1018 = 0.8115$$
$$R_2 = \frac{2452.5}{0.8115} = 3022.2\text{ N}$$

#### Step 3: Equilibrium of the Wedge
On the wedge, reaction $-\mathbf{R}_2$ pushes downward and leftward:
$$R_{2x} = 3022.2 \sin(24.04^\circ) = 1231.3\text{ N}$$
$$R_{2y} = 3022.2 \cos(24.04^\circ) = 2760.2\text{ N}$$

Vertical equilibrium of wedge:
$$N_3 = R_{2y} = 2760.2\text{ N}$$
Ground friction:
$$F_3 = \mu_s N_3 = 0.25 \times 2760.2 = 690.0\text{ N}$$

Horizontal driving force $P$:
$$P = R_{2x} + F_3 = 1231.3 + 690.0 = 1921.3\text{ N} \approx 1921\text{ N}$$
:::

---

## Part B: Interactive Module 3 Quiz

Test your understanding of Newton's second law, path kinetics, dry friction, wedges, power screws, and rolling resistance with the interactive module below.

<script setup>
const questions = [
  {
    question: "According to Newton's Second Law in momentum form (ΣF = dL/dt), what happens to a particle of constant mass if the net external force is doubled?",
    options: [
      "Its linear momentum is halved",
      "Its velocity remains strictly constant",
      "Its linear acceleration is doubled",
      "Its mass decreases by 50%"
    ],
    answer: 2,
    explanation: "Since ΣF = m·a for constant mass, doubling the net force doubles the acceleration vector directly."
  },
  {
    question: "What is the primary operational advantage of D'Alembert's Principle?",
    options: [
      "It converts dynamic kinetics into an equivalent static equilibrium problem by introducing an inertia vector -m·a",
      "It replaces vector calculus with scalar potential energy equations",
      "It eliminates the necessity of measuring normal reactions",
      "It makes friction forces zero in rotating bearings"
    ],
    answer: 0,
    explanation: "D'Alembert's Principle adds the inertia vector -m·a to external forces so that all static equilibrium equations (ΣF = 0, ΣM = 0) can be directly applied."
  },
  {
    question: "A car rounds an unbanked circular curve of radius R on a level road with static friction coefficient μs. What is the maximum speed without slipping?",
    options: [
      "v = √(μs·g·R)",
      "v = μs·g·R",
      "v = √(g·R / μs)",
      "v = 2·μs·g·R"
    ],
    answer: 0,
    explanation: "Centripetal acceleration is supplied entirely by friction: m·v²/R ≤ μs·m·g => v ≤ √(μs·g·R)."
  },
  {
    question: "What is the exact mathematical relationship between the angle of repose θ and the angle of static friction φs on an inclined plane?",
    options: [
      "θ = 2 · φs",
      "θ = φs / 2",
      "θ = φs",
      "θ = 90° - φs"
    ],
    answer: 2,
    explanation: "At the verge of sliding down under gravity alone, tan θ = μs = tan φs, which proves θ_repose = φs identically."
  },
  {
    question: "A square-threaded power screw is self-locking if and only if:",
    options: [
      "The lead angle θ is greater than the friction angle φs",
      "The friction angle φs is greater than the lead angle θ",
      "The thread pitch is greater than the mean circumference",
      "The mechanical efficiency exceeds 50%"
    ],
    answer: 1,
    explanation: "When φs > θ, the lowering torque M = W·rm·tan(φs - θ) is strictly positive, meaning the load cannot spontaneously unwind the screw."
  },
  {
    question: "A rope is wrapped 2 full turns (β = 4π rad) around a bollard with μs = 0.30. What is the ratio of pulling tension T2 to holding tension T1?",
    options: [
      "e^(0.60) ≈ 1.82",
      "e^(1.20π) ≈ 43.4",
      "e^(3.00) ≈ 20.1",
      "e^(8.00) ≈ 2980"
    ],
    answer: 1,
    explanation: "Applying the Capstan equation: T2/T1 = e^(μs·β) = e^(0.30 · 4π) = e^(1.20π) = e^(3.7699) ≈ 43.38."
  },
  {
    question: "In journal bearings, the radius of the circle of friction rf for shaft radius r and friction angle φs is given by:",
    options: [
      "rf = r / sin φs",
      "rf = r · sin φs ≈ r · μs",
      "rf = r · cos φs",
      "rf = r · tan(2φs)"
    ],
    answer: 1,
    explanation: "From the right triangle of the shaft center and contact normal, rf = r·sin φs ≈ r·μs, which is completely independent of the load."
  },
  {
    question: "What are the SI units of the coefficient of rolling resistance b?",
    options: [
      "Dimensionless",
      "Newtons (N)",
      "Meters or millimeters (length)",
      "Joule-seconds (J·s)"
    ],
    answer: 2,
    explanation: "Unlike the dimensionless Coulomb coefficient μ, rolling resistance b represents the forward shift of the normal pressure center and has dimensions of length (m or mm)."
  }
];
</script>

<QuizModule title="Module 3: Kinetics & Friction — Mastery Quiz" :questions="questions" />
