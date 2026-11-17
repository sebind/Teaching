---
title: 5.1 Linear Impulse-Momentum & Conservation of Momentum
description: Principle of linear impulse and momentum, dimensional equivalence, impulsive versus non-impulsive forces, two-boat momentum conservation, and system of particles.
---

# 5.1 Linear Impulse-Momentum & Conservation of Momentum

::: tip Pedagogical Objective
In Module 3, we related force and acceleration through instantaneous differential equations ($\sum \mathbf{F} = m\mathbf{a}$). In Module 4, we integrated Newton's Second Law over spatial displacement to relate force, distance, and speed ($T_1 + U_{1\to 2} = T_2$).

What happens when forces act over a **specified interval of time**, or when forces are so colossal and act over such an infinitesimal duration (microsecond impact shocks, aerospace crash tests, explosions, bat-ball collisions) that tracking displacement is impractical?

In this chapter (Beer & Johnston, *Dynamics*, Chapter 13, Section 13.3), we integrate Newton's Second Law with respect to **time** $t$. This establishes the **Principle of Linear Impulse and Momentum** ($m\mathbf{v}_1 + \mathbf{Imp}_{1\to 2} = m\mathbf{v}_2$), characterizes **Impulsive Motion**, and yields the fundamental law of **Conservation of Linear Momentum**.
:::

---

## 1. Derivation of the Principle of Linear Impulse and Momentum

### 1.1 From Newton's Second Law to Linear Impulse

Consider a particle of constant mass $m$ acted upon by a force $\mathbf{F}$ (or resultant $\sum \mathbf{F}$). Expressing Newton's Second Law in terms of the time rate of change of **linear momentum** $\mathbf{L} = m\mathbf{v}$:

$$\sum \mathbf{F} = \frac{d}{dt}(m\mathbf{v})$$

Multiplying both sides by the differential time element $dt$:

$$\sum \mathbf{F}\,dt = d(m\mathbf{v})$$

Integrating both sides from an initial instant $t_1$ (where velocity is $\mathbf{v}_1$) to a later instant $t_2$ (where velocity is $\mathbf{v}_2$):

$$\int_{t_1}^{t_2} \sum \mathbf{F}\,dt = m\mathbf{v}_2 - m\mathbf{v}_1$$

We define the vector time integral on the left-hand side as the **Linear Impulse** ($\mathbf{Imp}_{1\to 2}$) of the force over the interval $t_1 \to t_2$:

$$\mathbf{Imp}_{1\to 2} = \int_{t_1}^{t_2} \mathbf{F}\,dt$$

Rearranging into the standard vector balance form (Eq. 13.31):

$$m\mathbf{v}_1 + \sum \int_{t_1}^{t_2} \mathbf{F}\,dt = m\mathbf{v}_2 \quad \Longleftrightarrow \quad m\mathbf{v}_1 + \mathbf{Imp}_{1\to 2} = m\mathbf{v}_2$$

::: info Statement of the Principle & Dimensional Equivalence
**Principle of Linear Impulse and Momentum:** Adding vectorially to the initial momentum $m\mathbf{v}_1$ of a particle at time $t_1$ the linear impulse $\mathbf{Imp}_{1\to 2}$ of all forces acting on the particle during the interval $t_1 \to t_2$ yields its final momentum $m\mathbf{v}_2$ at time $t_2$.

**Dimensional Homogeneity (SI Units):** Impulse and momentum share identical physical dimensions ($\mathbf{F}t = m\mathbf{v}$):

$$\text{N}\cdot\text{s} = \left(\text{kg}\cdot\text{m/s}^2\right)\cdot\text{s} = \text{kg}\cdot\text{m/s}$$

In full-scale crash engineering—such as Sandia National Laboratories propelling an F-4 Phantom jet sled into a rigid reinforced concrete target—engineers measure the momentum change $\Delta(m\mathbf{v})$ over milliseconds to reconstruct the structural impact force profile $F(t)$.
:::

<LectureFigure
  src="/images/physics/mod5/fig5_1.png"
  alt="Sandia National Laboratories impact test of an F-4 Phantom jet against a rigid reinforced target"
  caption="Fig. 5.1: Full-scale impact test of an F-4 Phantom jet against a rigid reinforced target at Sandia National Laboratories, performed to determine the impulsive structural force F(t) as a function of time from the rate of momentum transfer."
  slide="Sec. 13.3 · Photo 13.4 (p. 858)"
  badge="📖 Textbook Figure"
  maxWidth="360px"
/>

---

### 1.2 Graphical Impulse–Momentum Diagrams

Just as Newton's Second Law problems pair a Free-Body Diagram with a Kinetic Diagram, impulse–momentum problems are systematically formulated by drawing a **three-sketch Impulse–Momentum Diagram** representing the vector addition $m\mathbf{v}_1 + \mathbf{Imp}_{1\to 2} = m\mathbf{v}_2$:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_17_impulse_momentum_diagram.png"
  alt="Graphical impulse-momentum diagram showing mv1 + Imp(1->2) = mv2"
  caption="Fig. 13.17: Graphical three-state impulse–momentum diagram along a particle's trajectory: Initial Momentum (m v₁ at t₁) + External Impulse (Imp₁→₂ from t₁ to t₂) = Final Momentum (m v₂ at t₂)."
  slide="Sec. 13.3A · Fig. 13.17 (p. 859)"
  badge="📖 Textbook Figure"
  maxWidth="620px"
/>

---

### 1.3 Scalar Rectangular Components & Impulse as Area Under $F\text{–}t$ Curves

Resolving the force $\mathbf{F}$ into rectangular components $\mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k}$, the impulse vector decomposes into three scalar definite integrals:

$$\mathbf{Imp}_{1\to 2} = \mathbf{i}\int_{t_1}^{t_2} F_x\,dt + \mathbf{j}\int_{t_1}^{t_2} F_y\,dt + \mathbf{k}\int_{t_1}^{t_2} F_z\,dt$$

Geometrically, each scalar component $(\text{Imp}_{1\to 2})_x$, $(\text{Imp}_{1\to 2})_y$, and $(\text{Imp}_{1\to 2})_z$ equals the **signed area under the corresponding force–time ($F\text{–}t$) curve** from $t_1$ to $t_2$:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_16_impulse_components.png"
  alt="Rectangular components Fx, Fy, Fz of the impulse of a force F as areas under force-time curves"
  caption="Fig. 13.16: The rectangular scalar components of the linear impulse Imp₁→₂ of a force F are measured geometrically by the shaded areas under the Fx–t, Fy–t, and Fz–t curves between t₁ and t₂."
  slide="Sec. 13.3A · Fig. 13.16 (p. 859)"
  badge="📖 Textbook Figure"
  maxWidth="300px"
/>

Equating matching $x, y, z$ components across the vector impulse–momentum relation gives three independent scalar equations (Eq. 13.32):

$$m(v_x)_1 + \sum \int_{t_1}^{t_2} F_x\,dt = m(v_x)_2$$

$$m(v_y)_1 + \sum \int_{t_1}^{t_2} F_y\,dt = m(v_y)_2$$

$$m(v_z)_1 + \sum \int_{t_1}^{t_2} F_z\,dt = m(v_z)_2$$

When a force $\mathbf{F}$ remains **constant** in magnitude and direction over $\Delta t = t_2 - t_1$, the integral reduces to $\mathbf{Imp}_{1\to 2} = \mathbf{F}(t_2 - t_1) = \mathbf{F}\,\Delta t$. When a force varies rapidly in magnitude (such as during an impact), we define its **time-averaged force** $\mathbf{F}_{\text{avg}}$ over $\Delta t$ such that the rectangular pulse $\mathbf{F}_{\text{avg}}\Delta t$ encloses the exact same impulse area:

$$\mathbf{Imp}_{1\to 2} = \int_{t_1}^{t_2} \mathbf{F}(t)\,dt = \mathbf{F}_{\text{avg}}\,\Delta t \quad \Longleftrightarrow \quad \mathbf{F}_{\text{avg}} = \frac{1}{\Delta t}\int_{t_1}^{t_2} \mathbf{F}(t)\,dt$$

---

## 2. Impulsive Motion & Non-Impulsive Forces

A force acting on a particle during a very short time interval $\Delta t$ that is yet large enough to produce a **definite, finite change in momentum** is called an **impulsive force**, and the resulting motion is called **impulsive motion** (Section 13.3B). For example, when a baseball is struck, the contact between bat and ball lasts only $\Delta t \approx 10^{-3}\text{ s}$, yet the average force $\mathbf{F}_{\text{avg}}$ exerted by the bat is many thousands of Newtons—large enough to reverse and redirect the momentum of the ball!

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_19_baseball_impulsive.png"
  alt="Impulsive motion of a struck baseball neglecting non-impulsive weight"
  caption="Fig. 13.19: Impulsive motion of a struck baseball: m v₁ + F_avg Δt = m v₂. Because Δt is extremely brief, the impulse of the ball's weight (W Δt ≈ 0) is negligible compared to the bat's impulse F_avg Δt."
  slide="Sec. 13.3B · Fig. 13.19 (p. 860)"
  badge="📖 Textbook Figure"
  maxWidth="520px"
/>

Whenever impulsive forces act on a particle over a brief interval $\Delta t = t_2 - t_1$, acting forces separate cleanly into two regimes:

| Classification | Physical Characteristics | Engineering Examples |
| :--- | :--- | :--- |
| **Impulsive Forces** | Very large forces acting over $\Delta t \to 0$ such that $\displaystyle\lim_{\Delta t \to 0}\int_{t_1}^{t_2}\mathbf{F}\,dt = \mathbf{F}_{\text{avg}}\Delta t \ne \mathbf{0}$. | Bat striking a ball, hammer blow on a pile, vehicle collision contact, explosive detonation pressure, taut cable jerk. |
| **Non-Impulsive Forces** | Bounded, moderate forces for which $\mathbf{F}\,\Delta t \approx \mathbf{0}$ over millisecond intervals. **Omitted** during the impact interval! | Weight $\mathbf{W} = m\mathbf{g}$ of a body, force exerted by a moderate helical spring ($kx$), moderate aerodynamic drag. |

Neglecting non-impulsive forces, the Principle of Impulse and Momentum for a single particle simplifies to (Eq. 13.35):

$$m\mathbf{v}_1 + \sum \mathbf{F}_{\text{avg}}\,\Delta t = m\mathbf{v}_2$$

And for impulsive motion involving **several particles** simultaneously, internal impulsive action–reaction forces cancel, yielding (Eq. 13.36):

$$\sum m\mathbf{v}_1 + \sum \mathbf{F}_{\text{avg}}\,\Delta t = \sum m\mathbf{v}_2$$

::: tip Quantitative Proof: Why Weight Is Neglected During Impact
Consider a $0.15\text{ kg}$ baseball ($W = mg = 1.47\text{ N}$) struck by a bat over $\Delta t = 1.0\text{ ms} = 0.001\text{ s}$:
- **Gravitational impulse:** $W\,\Delta t = (1.47\text{ N})(0.001\text{ s}) = 0.00147\text{ N}\cdot\text{s}$.
- **Bat impulse:** $\text{Imp}_{\text{bat}} \approx 15\text{ N}\cdot\text{s}$ (over **$10{,}000\times$ larger**!), corresponding to $F_{\text{avg}} = 15{,}000\text{ N}$.

Omitting $W\,\Delta t$ introduces an error of less than $0.01\%$!
:::

::: warning Textbook Caution: Unknown Support & Bearing Reactions!
While known bounded forces like weights and springs are safely neglected during brief impacts, **unknown support reactions** may or may *not* be impulsive!
- For instance, if a baseball is *not* struck near the bat's **center of percussion** ("sweet spot"), a violent impulsive shock reaction $\mathbf{R}_{\text{avg}}\Delta t$ is transmitted through the handle to the batter's hands.
- Likewise, pin supports, hinges, floor rollers, and axle bearings restraining a struck body will develop huge impulsive reactions whenever motion is kinematically constrained against the blow.

**Golden Rule:** Always **include** unknown reactions in the impulse–momentum equation as $\mathbf{R}_{\text{avg}}\Delta t$ as long as they have *not* been proved negligible!
:::

---

## 3. Systems of Particles & Conservation of Linear Momentum

Consider a system of $n$ interacting particles of masses $m_1, m_2, \dots, m_n$. Each particle $i$ experiences **external forces** $\mathbf{F}_i$ (exerted from outside the system) and **internal forces** $\mathbf{f}_{ij}$ (exerted by other particles $j$ within the system). Writing Eq. (13.31) for each particle and summing over the entire system:

$$\sum_{i=1}^n m_i \mathbf{v}_{i,1} + \sum_{i=1}^n \int_{t_1}^{t_2} \mathbf{F}_i\,dt + \sum_{i=1}^n \sum_{j \ne i} \int_{t_1}^{t_2} \mathbf{f}_{ij}\,dt = \sum_{i=1}^n m_i \mathbf{v}_{i,2}$$

Because internal action–reaction pairs satisfy $\mathbf{f}_{ij} = -\mathbf{f}_{ji}$ at every instant $t \in [t_1, t_2]$, all internal impulses cancel in pairs, leaving only **external impulses** (Eq. 13.33):

$$\sum m\mathbf{v}_1 + \sum \mathbf{Imp}_{1\to 2}^{\text{(ext)}} = \sum m\mathbf{v}_2$$

::: warning Action–Reaction Impulses vs. Action–Reaction Work (Crucial Distinction!)
Why do internal **impulses** *always* sum to zero, whereas internal **work** in Module 4 did *not* always sum to zero?
- **Internal Impulses Always Cancel ($\mathbf{f}_{ij}\Delta t + \mathbf{f}_{ji}\Delta t = \mathbf{0}$):** Newton's Third Law guarantees $\mathbf{f}_{ij}(t) = -\mathbf{f}_{ji}(t)$ at every instant, and **time $dt$ flows identically for both particles** over the exact same interval $t_1 \to t_2$. Thus $\int_{t_1}^{t_2} \mathbf{f}_{ij}\,dt + \int_{t_1}^{t_2} \mathbf{f}_{ji}\,dt = \mathbf{0}$ **unconditionally**—even when bodies deform plastically, slide with friction, or explode!
- **Internal Work Cancels Only in Special Cases ($dU_{ij} + dU_{ji} \ne 0$ in general):** Work integrates over *spatial displacements* $d\mathbf{r}_i$ and $d\mathbf{r}_j$, which are generally unequal! The sum of internal work vanishes *only* in special cases such as rigid bodies or particles linked by inextensible, frictionless cords where component displacements along the force line are equal. Deforming bumpers, springs, and sliding friction perform nonzero net internal work, which is precisely why mechanical energy is lost in collisions while linear momentum remains strictly conserved!
:::

---

### 3.1 Conservation of Linear Momentum & Two Boats Pulled Together

When no external forces act on the particles—or, more generally, when the **sum of external impulses is zero** ($\sum \mathbf{Imp}_{1\to 2}^{\text{(ext)}} = \mathbf{0}$) either vectorially or along a specific coordinate axis—Eq. (13.33) reduces to **Conservation of Linear Momentum** (Eq. 13.34):

$$\sum m\mathbf{v}_1 = \sum m\mathbf{v}_2$$

#### Classic Textbook Case: Two Boats Pulled Together (Fig. 13.18)
Consider two boats of masses $m_A$ and $m_B$, initially **at rest** ($\mathbf{v}_A = \mathbf{v}_B = \mathbf{0}$) on calm, resistance-free water, while a fisherman in boat $B$ pulls on a rope attached to boat $A$:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_18_two_boats_momentum.png"
  alt="Conservation of linear momentum for two boats initially at rest being pulled together"
  caption="Fig. 13.18: Two boats A and B initially at rest are pulled toward each other by an internal rope tension. External vertical weights and buoyancy forces balance, so total horizontal linear momentum remains identically zero: 0 = m_A v'_A + m_B v'_B."
  slide="Sec. 13.3A · Fig. 13.18 (p. 860)"
  badge="📖 Textbook Figure"
  maxWidth="660px"
/>

- **System Analysis:** Define the system as **Boat $A$ + Boat $B$ + Rope**. The vertical weights $\mathbf{W}_A, \mathbf{W}_B$ are balanced by upward buoyancy forces; water drag is negligible; and the rope tension $\mathbf{T}$ is purely **internal** to the two-boat system ($\mathbf{T}\Delta t - \mathbf{T}\Delta t = \mathbf{0}$).
- **Vector Momentum Balance:** Since both boats start from rest, total initial momentum is zero:

$$0 = m_A \mathbf{v}'_A + m_B \mathbf{v}'_B$$

- **Scalar Speed Ratio:** Taking $+x$ to the right ($\mathbf{v}'_A = +v'_A\mathbf{i}$ and $\mathbf{v}'_B = -v'_B\mathbf{i}$):

$$0 = m_A v'_A - m_B v'_B \quad \Longrightarrow \quad \frac{v'_A}{v'_B} = \frac{m_B}{m_A}$$

The two boats move in **opposite directions** with speeds **inversely proportional to their masses**! Regardless of how hard or erratically the rope is pulled, the lighter boat moves faster, and both boats eventually meet at the stationary **center of mass** $G$ of the system ($\bar{\mathbf{v}} = \mathbf{L}_{\text{tot}} / (m_A + m_B) = \mathbf{0}$).

---

### 3.2 Interactive Simulator: Impulsive Strike & Two-Boat Momentum Lab

Experiment interactively with both textbook benchmarks—adjust boat masses and tug tension in the **Two-Boat Tug (`Fig. 13.18`)** to watch $\bar{x}_G$ remain stationary while $v'_A / v'_B = m_B / m_A$, or switch to the **Impulsive Baseball Strike (`Figs. 13.16–13.19`)** to inspect force–time pulse integration and compare $\mathbf{F}_{\text{avg}}\Delta t$ against $W\Delta t$:

<ImpulseAndBoatsLab />

---

## 4. Comprehensive Step-by-Step Worked Problems

### Worked Problem 5.1: 2D Impulsive Bat-Ball Strike
A baseball of mass $m = 0.15\text{ kg}$ is thrown horizontally toward a batter at an initial speed of $v_1 = 40\text{ m/s}$ (in the $-x$ direction). The batter strikes the ball, sending it off with a speed of $v_2 = 50\text{ m/s}$ at an angle of $\theta = 35^\circ$ above the horizontal (as in **Fig. 13.19**). The contact between the bat and the ball lasts for $\Delta t = 1.5\text{ ms} = 0.0015\text{ s}$.
1. Determine the linear impulse $\mathbf{Imp}_{\text{bat}}$ exerted by the bat on the ball.
2. Determine the magnitude and direction of the average impulsive force $\mathbf{F}_{\text{avg}}$.
3. Compare the average force with the ball's weight to verify why weight can be neglected.

::: details Click to view Step-by-Step Solution

#### Step 1: Resolve Initial and Final Velocities
Establish a Cartesian coordinate system with $+x$ pointing forward (direction of hit) and $+y$ pointing vertically upward.
- **Initial Velocity Vector $\mathbf{v}_1$:**
  $$v_{1x} = -40\text{ m/s}, \quad v_{1y} = 0\text{ m/s} \implies \mathbf{v}_1 = -(40\text{ m/s})\mathbf{i}$$
- **Final Velocity Vector $\mathbf{v}_2$:**
  $$v_{2x} = v_2 \cos 35^\circ = 50 \cos 35^\circ = 50(0.81915) = +40.96\text{ m/s}$$
  $$v_{2y} = v_2 \sin 35^\circ = 50 \sin 35^\circ = 50(0.57358) = +28.68\text{ m/s}$$
  $$\mathbf{v}_2 = (40.96\text{ m/s})\mathbf{i} + (28.68\text{ m/s})\mathbf{j}$$

---

#### Step 2: Linear Impulse-Momentum in Components
Since the contact time $\Delta t = 0.0015\text{ s}$ is extremely brief, gravity is non-impulsive ($W\Delta t \approx 0$). Applying $m\mathbf{v}_1 + \mathbf{F}_{\text{avg}}\Delta t = m\mathbf{v}_2$:
$$\mathbf{Imp}_{\text{bat}} = \mathbf{F}_{\text{avg}}\Delta t = m(\mathbf{v}_2 - \mathbf{v}_1)$$

- **Horizontal Component ($\text{Imp}_x$):**
  $$\text{Imp}_x = m(v_{2x} - v_{1x}) = 0.15 [40.96 - (-40)] = 0.15 [80.96] = +12.144\text{ N}\cdot\text{s}$$
- **Vertical Component ($\text{Imp}_y$):**
  $$\text{Imp}_y = m(v_{2y} - v_{1y}) = 0.15 [28.68 - 0] = +4.302\text{ N}\cdot\text{s}$$

Total Impulse Vector:
$$\mathbf{Imp}_{\text{bat}} = (12.14\mathbf{i} + 4.30\mathbf{j})\,\text{N}\cdot\text{s}$$

- **Magnitude of Impulse:**
  $$|\mathbf{Imp}_{\text{bat}}| = \sqrt{(12.144)^2 + (4.302)^2} = \sqrt{147.48 + 18.51} = \sqrt{165.99} = 12.88\text{ N}\cdot\text{s}$$
- **Direction of Impulse:**
  $$\theta_{\text{imp}} = \tan^{-1}\left(\frac{4.302}{12.144}\right) = \tan^{-1}(0.3542) = 19.50^\circ \text{ above }+x\text{ axis}$$

---

#### Step 3: Average Impulsive Force $\mathbf{F}_{\text{avg}}$
$$F_{\text{avg}} = \frac{|\mathbf{Imp}_{\text{bat}}|}{\Delta t} = \frac{12.88\text{ N}\cdot\text{s}}{0.0015\text{ s}} = 8589\text{ N} \approx 8.59\text{ kN} \text{ at } 19.5^\circ \text{ above horizontal}$$
Component forces:
$$F_{\text{avg}, x} = \frac{12.144}{0.0015} = 8096\text{ N}, \quad F_{\text{avg}, y} = \frac{4.302}{0.0015} = 2868\text{ N}$$

---

#### Step 4: Comparison with Weight
- Weight of the baseball:
  $$W = m g = 0.15 \times 9.81 = 1.47\text{ N}$$
- Ratio of average bat impact force to weight:
  $$\frac{F_{\text{avg}}}{W} = \frac{8589\text{ N}}{1.47\text{ N}} \approx 5843$$

The bat's impact force is **$5840$ times larger** than the ball's weight! Over the $1.5\text{ ms}$ interval, the impulse of weight is $W\,\Delta t = 1.47 \times 0.0015 = 0.0022\text{ N}\cdot\text{s}$, which is only $0.017\%$ of the bat's impulse. This provides complete mathematical justification for treating gravity as non-impulsive.
:::

---

### Worked Problem 5.2: Railway Car Plastic Coupling & Bumper Spring Compression
A freight car $A$ of mass $m_A = 20,000\text{ kg}$ rolls along a horizontal track at $v_A = 3.0\text{ m/s}$. It collides with and couples automatically to a stationary freight car $B$ of mass $m_B = 30,000\text{ kg}$. Car $B$ is connected to a spring bumper of stiffness $k = 80\text{ kN/m} = 80,000\text{ N/m}$ fixed to a rigid end buffer.
1. Determine the common velocity $V$ of the coupled cars immediately after the impact.
2. Determine the loss of mechanical kinetic energy $\Delta T$ dissipated during the coupling.
3. Using the Principle of Work and Energy, determine the maximum compression $x_{\max}$ of the spring bumper as the coupled cars come to a momentary stop.

::: info System Configuration
- **Freight Car $A$:** $m_A = 20,000\text{ kg}$, initial velocity $v_A = 3.0\text{ m/s}\to$
- **Freight Car $B$:** $m_B = 30,000\text{ kg}$, initially at rest ($v_B = 0$), attached to rigid end buffer via bumper spring $k = 80\text{ kN/m}$
- **Interaction Sequence:** Automatic plastic coupling ($e = 0$, momentum conserved) $\longrightarrow$ elastic spring compression ($T_2 + V_{e2} = T_3 + V_{e3}$)
:::

::: details Click to view Step-by-Step Solution

#### Step 1: Conservation of Linear Momentum During Coupling
The coupling impact occurs over a fraction of a second. External forces along the track (spring force, rolling friction) are non-impulsive during this brief latching. Total linear momentum is conserved:
$$m_A v_A + m_B v_B = (m_A + m_B) V$$
$$(20,000)(3.0) + (30,000)(0) = (20,000 + 30,000) V$$
$$60,000 = 50,000 V$$
$$V = \frac{60,000}{50,000} = 1.20\text{ m/s}$$

Immediately after coupling, the combined $50$-ton unit rolls forward at **$1.20\text{ m/s}$**.

---

#### Step 2: Loss of Kinetic Energy During Plastic Impact
- **Initial Kinetic Energy before collision ($T_1$):**
  $$T_1 = \frac{1}{2} m_A v_A^2 + \frac{1}{2} m_B v_B^2 = \frac{1}{2}(20,000)(3.0)^2 + 0 = 90,000\text{ J} = 90\text{ kJ}$$
- **Final Kinetic Energy after coupling ($T_2$):**
  $$T_2 = \frac{1}{2}(m_A + m_B) V^2 = \frac{1}{2}(50,000)(1.20)^2 = 25,000 \times 1.44 = 36,000\text{ J} = 36\text{ kJ}$$
- **Kinetic Energy Dissipated ($\Delta T$):**
  $$\Delta T = T_1 - T_2 = 90\text{ kJ} - 36\text{ kJ} = 54\text{ kJ}$$
- **Percentage Loss:**
  $$\% \text{ Loss} = \frac{54}{90} \times 100\% = 60\%$$

$60\%$ of the initial mechanical energy is irreversibly dissipated into metal deformation, sound, and thermal heat during the plastic latching of the coupler—demonstrating directly why internal impulses cancel while internal work does not!

---

#### Step 3: Maximum Bumper Spring Compression
Now we analyze the subsequent post-impact deceleration from state 2 (coupled cars moving at $V = 1.20\text{ m/s}$) to state 3 (cars brought to rest by the spring, $v_3 = 0$).
During this finite-displacement stage, the spring exerts a conservative restoring force:
$$T_2 + V_{e2} = T_3 + V_{e3}$$
- Initial state 2: Spring unstretched ($x_2 = 0 \implies V_{e2} = 0$), $T_2 = 36,000\text{ J}$.
- Final state 3: Momentary stop ($v_3 = 0 \implies T_3 = 0$), spring compressed by $x_{\max}$:
  $$V_{e3} = \frac{1}{2} k x_{\max}^2$$

Applying conservation of mechanical energy:
$$36,000 + 0 = 0 + \frac{1}{2}(80,000) x_{\max}^2$$
$$36,000 = 40,000 x_{\max}^2 \implies x_{\max}^2 = 0.90$$
$$x_{\max} = \sqrt{0.90} = 0.9487\text{ m} \approx 0.949\text{ m} = 94.9\text{ cm}$$

The spring bumper undergoes a maximum compression of **$94.9\text{ cm}$**.
:::

---

### Worked Problem 5.3: Block Subjected to Time-Varying Force
A block of mass $m = 10\text{ kg}$ is initially at rest ($v_0 = 0$) on a rough horizontal surface with coefficient of kinetic friction $\mu_k = 0.20$. At time $t = 0$, a horizontal time-dependent pushing force is applied:
$$F(t) = 60 - 5t\text{ N} \quad (t \text{ in seconds})$$
This force acts for $6\text{ s}$ ($0 \le t \le 6\text{ s}$), after which $F(t) = 0$.
1. Using the Principle of Linear Impulse and Momentum, determine the velocity of the block at $t = 6\text{ s}$.
2. Determine the total time $t_{\text{stop}}$ at which the block comes to rest. Take $g = 9.81\text{ m/s}^2$.

::: details Click to view Step-by-Step Solution

#### Step 1: Normal Force and Friction Force
Vertical equilibrium:
$$N = m g = 10 \times 9.81 = 98.1\text{ N}$$
The kinetic friction force opposing motion is constant:
$$F_k = \mu_k N = 0.20 \times 98.1 = 19.62\text{ N}$$

Notice that at $t = 0$, $F(0) = 60\text{ N} > F_k = 19.62\text{ N}$, so motion starts immediately.
At $t = 6\text{ s}$, $F(6) = 60 - 5(6) = 30\text{ N} > 19.62\text{ N}$, meaning the applied force exceeds friction throughout the entire $6$-second interval!

---

#### Step 2: Velocity at $t = 6\text{ s}$ via Impulse-Momentum
The resultant horizontal force acting on the block between $t = 0$ and $t = 6\text{ s}$ is:
$$\sum F_x(t) = F(t) - F_k = (60 - 5t) - 19.62 = 40.38 - 5t\text{ N}$$

Applying the Principle of Linear Impulse and Momentum:
$$m v_0 + \int_0^6 \sum F_x(t)\,dt = m v_6$$
Since the block starts from rest, $m v_0 = 0$:
$$\int_0^6 (40.38 - 5t)\,dt = m v_6$$
$$\left[40.38 t - \frac{5}{2}t^2\right]_0^6 = (10) v_6$$
$$40.38(6) - 2.5(36) = 10 v_6$$
$$242.28 - 90.00 = 10 v_6$$
$$152.28 = 10 v_6 \implies v_6 = \frac{152.28}{10} = 15.23\text{ m/s}$$

At $t = 6\text{ s}$, the block reaches a speed of **$15.23\text{ m/s}$**.

---

#### Step 3: Total Time to Come to Rest ($t_{\text{stop}}$)
For $t > 6\text{ s}$, the pushing force ceases ($F = 0$). Only friction $F_k = 19.62\text{ N}$ acts to decelerate the block until it stops ($v_f = 0$).
Let $\Delta t_{\text{coast}} = t_{\text{stop}} - 6$:
$$m v_6 + \int_6^{t_{\text{stop}}} (-F_k)\,dt = m v_f$$
$$(10)(15.23) - F_k\,\Delta t_{\text{coast}} = 0$$
$$152.3 - 19.62\,\Delta t_{\text{coast}} = 0$$
$$\Delta t_{\text{coast}} = \frac{152.3}{19.62} = 7.76\text{ s}$$

Total time elapsed from $t = 0$:
$$t_{\text{stop}} = 6.00 + 7.76 = 13.76\text{ s}$$

The block coasts for an additional $7.76\text{ s}$, coming to a complete stop at **$t = 13.76\text{ s}$**.
:::

---

## 5. Summary & Review Checklist

Before proceeding to Section 5.2 on Impact Mechanics & Restitution:
- [x] Derive the Principle of Linear Impulse and Momentum ($m\mathbf{v}_1 + \int_{t_1}^{t_2} \mathbf{F}\,dt = m\mathbf{v}_2$) and verify dimensional equivalence ($\text{N}\cdot\text{s} = \text{kg}\cdot\text{m/s}$).
- [x] Construct 3-state graphical Impulse–Momentum diagrams (`Fig. 13.17`) and evaluate impulse components from $F\text{–}t$ areas (`Fig. 13.16`).
- [x] Differentiate impulsive vs. non-impulsive forces (`Fig. 13.19`) and retain unknown support/bearing reactions unless proved negligible.
- [x] Explain why internal action–reaction **impulses** *always* cancel ($\mathbf{f}_{ij}\Delta t + \mathbf{f}_{ji}\Delta t = \mathbf{0}$), whereas internal **work** cancels only in special cases.
- [x] Apply Conservation of Linear Momentum to multi-particle systems such as two boats pulled together ($v'_A / v'_B = m_B / m_A$, `Fig. 13.18`) and explain why $\bar{\mathbf{v}}_G$ remains constant.
