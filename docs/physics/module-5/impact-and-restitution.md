---
title: "5.2 Impact Mechanics: Direct, Oblique & Constrained Impact"
description: Comprehensive theory of collision mechanics, deformation and restitution phases, coefficient of restitution, stroboscopic bounce, oblique and constrained central impacts, multi-principle pendulum analysis, and S-M-A-R-T kinetics synthesis.
---

# 5.2 Impact Mechanics: Direct, Oblique & Constrained Impact

::: tip Pedagogical Objective
A collision between two solid bodies—whether billiard balls on green baize, a bouncing tennis ball, a falling sphere striking a rolling wedge, or coupled pendulums—involves forces of colossal magnitude acting over intervals of milliseconds. During this brief contact window, kinetic energy is stored in elastic structural strain, lost to internal hysteresis, or permanently dissipated in plastic deformation.

In this chapter (Beer & Johnston, *Dynamics*, Chapter 13, Section 13.4), we master the complete analytical physics of impacts:
1. Distinguishing between the **Line of Impact** ($n$) and **Plane of Contact** ($t$), and between **Direct** and **Oblique Central Impacts**.
2. Deconstructing the **Deformation and Restitution Phases** to derive Poisson's **Coefficient of Restitution** ($e$), stroboscopic bounce relations, and elastic energy conservation.
3. Solving **4-unknown Unconstrained Oblique Impacts** and **3-unknown Constrained Oblique Impacts** (where external support reactions act!).
4. Combining **Newton's Second Law**, **Work–Energy**, and **Impulse–Momentum** in multi-stage problems via the **S-M-A-R-T Kinetics Methodology**.
:::

---

## 1. Physics of Collisions & Terminology

A collision between two bodies $A$ and $B$ occurring in a very small time interval $\Delta t$, during which the two bodies exert relatively large impulsive forces on each other, is called an **impact** (Section 13.4).

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_20_direct_vs_oblique.png"
  alt="Central impacts: (a) direct head-on central impact and (b) oblique central impact along the Line of impact"
  caption="Fig. 13.20: Types of central impact: (a) Direct ('head-on') central impact where v_A and v_B are collinear with the Line of impact; (b) Oblique central impact where one or both velocities are inclined to the Line of impact."
  slide="Sec. 13.4 · Fig. 13.20 (p. 883)"
  badge="📖 Textbook Figure"
  maxWidth="620px"
/>

### Key Geometric Definitions
1. **Line of Impact (Normal Axis, $n$):** The common normal to the surfaces in contact during the impact.
2. **Plane of Contact (Tangential Axis, $t$):** The common tangent plane at the point of contact, perpendicular to the line of impact.
3. **Central Impact:** An impact for which the mass centers $G_A$ and $G_B$ of the two colliding bodies lie directly on the line of impact. *(Otherwise, the impact is termed an **eccentric impact**, studied in rigid-body dynamics).*
4. **Direct Central Impact (*Fig. 13.20a*):** A central impact in which the velocities $\mathbf{v}_A$ and $\mathbf{v}_B$ of the two particles are directed **along the line of impact** ("head-on" collision).
5. **Oblique Central Impact (*Fig. 13.20b*):** A central impact in which the motion of one or both particles is along a line making an angle with the line of impact.

| Feature | Direct Central Impact (*Fig. 13.20a*) | Oblique Central Impact (*Fig. 13.20b*) |
| :--- | :--- | :--- |
| **Mass Centers** | Lie on the line of impact ($n$). | Lie on the line of impact ($n$). |
| **Initial Velocities** | Collinear with the line of impact. | Inclined at angles to the line of impact. |
| **Dimensionality** | Strictly 1D along the line of impact. | 2D in the $(n, t)$ plane. |
| **Scalar Unknowns** | **2 unknowns:** $v'_A$ and $v'_B$. | **4 unknowns** (unconstrained) or **3 unknowns** (constrained). |

---

## 2. Direct Central Impact: Deformation & Restitution Phases

Consider two particles $A$ and $B$ of masses $m_A$ and $m_B$ moving in the same straight line to the right with known velocities $v_A$ and $v_B$ (*Fig. 13.21a*). Assuming $v_A > v_B$, particle $A$ eventually strikes particle $B$, and the collision unfolds across two consecutive microscopic intervals:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_21_three_stages_impact.png"
  alt="Three stages of direct central impact: before impact, at maximum deformation, and after impact"
  caption="Fig. 13.21: Three stages of a direct central impact: (a) Before impact (v_A > v_B); (b) At maximum deformation, both bodies move momentarily with common velocity u; (c) After impact, the bodies separate with final velocities v'_A and v'_B."
  slide="Sec. 13.4A · Fig. 13.21 (p. 883)"
  badge="📖 Textbook Figure"
  maxWidth="420px"
/>

### 2.1 Period of Deformation ($t_0 \to t^*$)
Under the impact, the two bodies deform, and at the end of the **period of deformation**, they reach maximum compression (*Fig. 13.21b*). At that instant $t^*$, their relative velocity vanishes and both bodies move with the **same instantaneous velocity $\mathbf{u}$**. Denoting by $\mathbf{P}$ the compressive force exerted by $B$ on $A$ during deformation (*Fig. 13.22a*), and neglecting non-impulsive forces, we apply impulse–momentum to particle $A$ alone:

$$m_A v_A - \int P\,dt = m_A u \quad \Longrightarrow \quad \int P\,dt = m_A(v_A - u)$$

*(Similarly, for particle $B$: $m_B v_B + \int P\,dt = m_B u \implies \int P\,dt = m_B(u - v_B)$).*

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_22_deformation_restitution.png"
  alt="Impulse-momentum diagrams for particle A during the period of deformation and period of restitution"
  caption="Fig. 13.22: Free-particle impulse–momentum diagrams for body A during (a) the period of deformation (opposing impulse ∫ P dt reduces m_A v_A to m_A u) and (b) the period of restitution (restoring impulse ∫ R dt further changes m_A u to m_A v'_A)."
  slide="Sec. 13.4A · Fig. 13.22 (p. 884)"
  badge="📖 Textbook Figure"
  maxWidth="620px"
/>

### 2.2 Period of Restitution ($t^* \to t_f$)
Following maximum compression, a **period of restitution** takes place during which the bodies either regain their original shape completely or retain some permanent deformation, depending on the impact intensity and material properties. Denoting by $\mathbf{R}$ the restoring force exerted by $B$ on $A$ during restitution (*Fig. 13.22b*), particle $A$ satisfies:

$$m_A u - \int R\,dt = m_A v'_A \quad \Longrightarrow \quad \int R\,dt = m_A(u - v'_A)$$

*(And for particle $B$: $m_B u + \int R\,dt = m_B v'_B \implies \int R\,dt = m_B(v'_B - u)$).*

---

## 3. Coefficient of Restitution ($e$), Bounce Heights & Energy Proof

### 3.1 Derivation of the Relative-Velocity Restitution Law
In general, the restoring force $\mathbf{R}$ is smaller than the deforming force $\mathbf{P}$, and the restitution impulse $\int R\,dt$ is smaller than the deformation impulse $\int P\,dt$. The quotient of these two impulses defines the **Coefficient of Restitution** $e$ (Eq. 13.38):

$$e = \frac{\int R\,dt}{\int P\,dt}$$

Note that $0 \le e \le 1$, and $e$ depends significantly not only on the two materials involved, but also on impact velocity, shape, and size of the colliding bodies. Substituting our impulse expressions for particle $A$ (Eq. 13.41) and repeating the identical analysis for particle $B$ (Eq. 13.42):

$$e = \frac{u - v'_A}{v_A - u} \qquad \text{and} \qquad e = \frac{v'_B - u}{u - v_B}$$

Since these two quotients are equal, they also equal the quotient obtained by adding their numerators and denominators respectively:

$$e = \frac{(u - v'_A) + (v'_B - u)}{(v_A - u) + (u - v_B)} = \frac{v'_B - v'_A}{v_A - v_B}$$

This yields the fundamental kinematic restitution equation (Eq. 13.43 / 13.44):

$$v'_B - v'_A = e(v_A - v_B)$$

::: info Physical Regimes of Impact ($0 \le e \le 1$)
The relative velocity of separation $(v'_B - v'_A)$ after impact equals $e$ times the relative velocity of approach $(v_A - v_B)$ before impact:
1. **Perfectly Plastic Impact ($e = 0$):** There is **no period of restitution** ($\int R\,dt = 0$). Both particles stay together after impact and move with a common velocity $v'_A = v'_B = u$, determined solely by $m_A v_A + m_B v_B = (m_A + m_B)v'$.
2. **Inelastic / Partially Elastic Impact ($0 < e < 1$):** Restitution impulse is weaker than deformation impulse ($\int R\,dt < \int P\,dt$). Real engineering collisions fall in this regime, losing mechanical energy to heat, vibration, and permanent strain.
3. **Perfectly Elastic Impact ($e = 1$):** Deformation and restitution impulses are equal ($\int R\,dt = \int P\,dt$). Relative velocities before and after impact are equal in magnitude: $v'_B - v'_A = v_A - v_B$ (Eq. 13.45).
:::

---

### 3.2 Experimental Determination of $e$ via Stroboscopic Bounce Heights

When a ball is dropped from rest at height $h_0$ onto a massive horizontal floor ($m_B \to \infty, v_B = v'_B = 0$), its downward impact speed just before striking the floor is $v_{\text{impact}} = \sqrt{2gh_0}$, and if it rebounds to peak height $h_1$, its upward departure speed just after impact is $v_{\text{rebound}} = \sqrt{2gh_1}$. Applying $v_{\text{rebound}} = e\,v_{\text{impact}}$ directly determines $e$ from measured heights:

$$e = \frac{v_{\text{rebound}}}{v_{\text{impact}}} = \frac{\sqrt{2gh_1}}{\sqrt{2gh_0}} = \sqrt{\frac{h_1}{h_0}} \quad \Longrightarrow \quad h_1 = e^2 h_0$$

After $n$ successive bounces, the peak rebound height decays geometrically according to:

$$h_n = e^{2n} h_0$$

<LectureFigure
  src="/images/physics/mod5/mod5_photo13_5_tennis_ball_bounce.png"
  alt="Stroboscopic photograph of a bouncing tennis ball showing decreasing rebound height"
  caption="Photo 13.5: Stroboscopic photograph of a bouncing tennis ball. Because e < 1, mechanical energy is dissipated into internal heat and acoustic waves during each floor contact, causing successive peak heights h_n = e^(2n) h_0 to decrease geometrically."
  slide="Sec. 13.4A · Photo 13.5 (p. 885)"
  badge="📖 Textbook Figure"
  maxWidth="440px"
/>

---

### 3.3 Textbook Proof of Kinetic Energy Conservation for $e = 1$ & General Energy Loss

It is a **universal truth** that total linear momentum of the isolated two-particle system is conserved for *any* value of $e$ (Eq. 13.37):

$$m_A v_A + m_B v_B = m_A v'_A + m_B v'_B$$

Is total mechanical kinetic energy also conserved? Let us prove directly from Beer & Johnston (p. 885) that **kinetic energy is conserved if and only if $e = 1$**:

1. Rearrange the momentum balance Eq. (13.37) to group each mass on its own side (Eq. 13.37'):

$$m_A(v_A - v'_A) = m_B(v'_B - v_B)$$

2. In the special case of a **perfectly elastic impact ($e = 1$)**, rearrange the restitution relation $v'_B - v'_A = v_A - v_B$ (Eq. 13.45) to match the same particle grouping (Eq. 13.45'):

$$v_A + v'_A = v_B + v'_B$$

3. Multiplying Eqs. (13.37') and (13.45') **member-by-member**:

$$m_A(v_A - v'_A)(v_A + v'_A) = m_B(v'_B - v_B)(v_B + v'_B)$$

$$m_A\left[v_A^2 - (v'_A)^2\right] = m_B\left[(v'_B)^2 - v_B^2\right]$$

4. Rearranging terms and multiplying by $\frac{1}{2}$ yields **Conservation of Kinetic Energy** (Eq. 13.46):

$$\frac{1}{2}m_A v_A^2 + \frac{1}{2}m_B v_B^2 = \frac{1}{2}m_A(v'_A)^2 + \frac{1}{2}m_B(v'_B)^2$$

Conversely, whenever $e < 1$, mechanical energy is **lost** during impact! Solving the general momentum + restitution system yields the exact **Kinetic Energy Dissipation Formula**:

$$\Delta T = T_1 - T_2 = \frac{1}{2}\frac{m_A m_B}{m_A + m_B}(1 - e^2)(v_A - v_B)^2 = \frac{1}{2}\mu_{\text{red}}(1 - e^2)(v_A - v_B)^2$$

where $\mu_{\text{red}} = \frac{m_A m_B}{m_A + m_B}$ is the reduced mass. This lost kinetic energy is transformed into heat and elastic/acoustic waves propagating within the two colliding bodies.

---

## 4. Direct Central Impact Solution Blueprint

Since no external impulsive force acts along the line of impact, solving for the two scalar unknowns $v'_A$ and $v'_B$ always reduces to solving a $2 \times 2$ linear algebraic system (**take meticulous care with algebraic signs `+` and `-`!**):

1. **Conservation of Total Linear Momentum (Eq. 13.37):**
   $$m_A v_A + m_B v_B = m_A v'_A + m_B v'_B$$
2. **Coefficient of Restitution Kinematic Relation (Eq. 13.44):**
   $$v'_B - v'_A = e(v_A - v_B)$$

*(Closed-form solution for quick verification: $v'_A = \frac{(m_A - e m_B)v_A + m_B(1+e)v_B}{m_A + m_B}$ and $v'_B = \frac{m_A(1+e)v_A + (m_B - e m_A)v_B}{m_A + m_B}$).*

---

## 5. Oblique Central Impact: Unconstrained & Constrained Systems

### 5.1 Unconstrained Oblique Central Impact (4 Unknowns)

Now consider an **oblique central impact** (*Section 13.4B, p. 886*) in which the velocities of the two colliding spheres are *not* directed along the line of impact. Because neither the direction nor the magnitude of $\mathbf{v}'_A$ and $\mathbf{v}'_B$ is known in advance, their determination requires **four independent equations** for the four scalar components $(v'_A)_n, (v'_A)_t, (v'_B)_n, (v'_B)_t$.

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_23_oblique_velocities.png"
  src2="/images/physics/mod5/mod5_photo13_6_pool_balls.png"
  alt="Oblique central impact geometry showing n and t axes with velocity vectors before and after impact"
  alt2="Stroboscopic photograph of an oblique collision between pool balls"
  caption="(Left) Fig. 13.23: Coordinate axes for oblique central impact — the n-axis lies along the Line of impact and the t-axis lies along the common tangent. (Right) Photo 13.6: Stroboscopic photograph of colliding pool balls demonstrating 2D oblique momentum transfer."
  slide="Sec. 13.4B · Fig. 13.23 & Photo 13.6 (p. 886)"
  badge="📖 Textbook Figure"
/>

Choosing coordinate axes **along the line of impact ($n$-axis)** and **along the common tangent ($t$-axis)**, and assuming the particles are perfectly **smooth and frictionless**, the only impulses exerted during the impact are due to internal forces $\pm \mathbf{F}\Delta t$ directed **strictly along the line of impact $n$**:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_24_oblique_impulse_diagram.png"
  alt="Impulse-momentum diagram for an oblique central impact showing equal-and-opposite internal impulses along the n-axis"
  caption="Fig. 13.24: Two-body impulse–momentum diagram for an unconstrained oblique central impact. Because the smooth surfaces exert impulses ±F Δt strictly along the n-axis, tangential momentum is conserved for each sphere individually, while total normal momentum is conserved for the combined system."
  slide="Sec. 13.4B · Fig. 13.24 (p. 886)"
  badge="📖 Textbook Figure"
  maxWidth="720px"
/>

Inspecting **Fig. 13.24** immediately yields the **4-Step Solution Protocol**:

1. **Component along $t$-axis for particle $A$ is unchanged** (zero tangential impulse on $A$, Eq. 13.47):
   $$(v_A)_t = (v'_A)_t$$
2. **Component along $t$-axis for particle $B$ is unchanged** (zero tangential impulse on $B$, Eq. 13.47):
   $$(v_B)_t = (v'_B)_t$$
3. **Total system momentum along the $n$-axis is conserved** ($\pm F\Delta t$ cancel for $A + B$, Eq. 13.48):
   $$m_A(v_A)_n + m_B(v_B)_n = m_A(v'_A)_n + m_B(v'_B)_n$$
4. **Normal components satisfy the restitution law along $n$** (Eq. 13.49):
   $$(v'_B)_n - (v'_A)_n = e\left[(v_A)_n - (v_B)_n\right]$$

#### Special Case: Oblique Rebound from a Fixed Smooth Wall ($m_B \to \infty, \mathbf{v}_B = \mathbf{0}$)
When a smooth ball strikes a stationary rigid wall or inclined plate at incidence angle $\theta$ measured from the surface normal $n$:
- Along $t$: $v'_t = v_t = v\sin\theta$
- Along $n$: $v'_n = -e\,v_n = +e\,v\cos\theta$
- Rebound angle $\theta'$ measured from the normal:

$$\tan\theta' = \frac{v'_t}{v'_n} = \frac{v\sin\theta}{e\,v\cos\theta} = \frac{\tan\theta}{e} \quad \Longrightarrow \quad \theta' \ge \theta$$

---

### 5.2 Problems Involving Constrained Motion (Constrained Oblique Impact)

Our previous analysis assumed *both* colliding particles move freely without external impulsive constraints. What happens when **one or both colliding bodies are kinematically constrained** to move along a prescribed path?

Consider the classic textbook problem (**Figs. 13.25 & 13.26**, pp. 887–888): a collision between **block $A$**, which is constrained to move horizontally on frictionless rollers, and **ball $B$**, which is free to move anywhere in the vertical plane. Assuming no friction between the block and the ball, or between the block and the horizontal floor, notice how constraints alter the physics:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_25_constrained_block_ball.png"
  alt="Constrained oblique impact between block A moving on horizontal rollers and ball B moving in the vertical plane"
  caption="Fig. 13.25: Constrained oblique impact between wedge-block A (constrained to horizontal motion on smooth rollers) and unconstrained ball B moving freely in the vertical plane."
  slide="Sec. 13.4B · Fig. 13.25 (p. 887)"
  badge="📖 Textbook Figure"
  maxWidth="420px"
/>

- **Counting the Unknowns (3 Unknowns):** Because block $A$ is constrained to move horizontally, the direction of $\mathbf{v}'_A$ is already known! Thus, there are only **three scalar unknowns**: the magnitude $v'_A$ of the block's final horizontal velocity, and the two scalar components (magnitude and direction) of the ball's final velocity $\mathbf{v}'_B$.
- **Crucial Warning — External Impulsive Support Reaction $\mathbf{F}_{\text{ext}}\Delta t$:** When ball $B$ strikes the inclined face of block $A$, the floor rollers must prevent block $A$ from plunging downward. Consequently, the horizontal plane exerts a **large vertical impulsive reaction $\mathbf{F}_{\text{ext}}\Delta t$** on block $A$!

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_26_constrained_impulse_diagram.png"
  alt="System impulse-momentum diagram for constrained impact between block A and ball B showing vertical external floor impulse"
  caption="Fig. 13.26: System impulse–momentum diagram for constrained block A + ball B. The horizontal floor exerts a vertical external impulse F_ext Δt on block A! Consequently, total momentum is conserved ONLY along the horizontal x-axis (perpendicular to F_ext Δt) — NOT along the inclined normal n."
  slide="Sec. 13.4B · Fig. 13.26 (p. 887)"
  badge="📖 Textbook Figure"
  maxWidth="720px"
/>

::: warning Why Normal System Momentum Fails Here!
Because $\mathbf{F}_{\text{ext}}\Delta t$ acts vertically upward, it has nonzero projections along **both** the inclined normal $n$ and the inclined tangent $t$! Therefore:
- Total momentum of $(A + B)$ along the normal $n$ is **NOT** conserved!
- Tangential velocity of block $A$ along $t$ is **NOT** conserved!
- Instead, total momentum of $(A + B)$ is conserved **along the horizontal $x$-axis**, where $\mathbf{F}_{\text{ext}}\Delta t$ has **zero component**!
:::

#### The 3 Governing Equations for Constrained Block $A$ & Ball $B$:

1. **Tangential Momentum of Unconstrained Ball $B$ Along $t$ (Eq. 13.50):**
   Considering ball $B$ *alone*, the smooth inclined contact exerts an impulse strictly along $n$, so zero impulse acts on $B$ along $t$:
   $$(v_B)_t = (v'_B)_t$$

2. **Total Horizontal Momentum of System $(A + B)$ Along $x$ (Eq. 13.51):**
   Considering block $A$ and ball $B$ *together* (*Fig. 13.26*), internal contact impulses cancel and $\mathbf{F}_{\text{ext}}\Delta t$ is strictly vertical ($\sum \text{Imp}_x^{\text{(ext)}} = 0$):
   $$m_A v_A + m_B (v_B)_x = m_A v'_A + m_B (v'_B)_x$$

3. **Normal Restitution Along the Line of Impact $n$ (Eq. 13.49):**
   The relative normal velocities before and after impact still obey Newton's restitution law along $n$:
   $$(v'_B)_n - (v'_A)_n = e\left[(v_A)_n - (v_B)_n\right]$$

::: details Rigorous Proof: Why Restitution Eq. (13.49) Remains Valid Despite External Floor Impulse (Fig. 13.27)
At first glance, one might wonder whether the external floor impulse $\mathbf{F}_{\text{ext}}\Delta t$ invalidates our earlier derivation of $e = \frac{(v'_B)_n - (v'_A)_n}{(v_A)_n - (v'_B)_n}$! Let us prove (following Beer & Johnston, p. 888, **Fig. 13.27**) that Eq. (13.49) remains **100% exact**:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_27_block_deformation_diagram.png"
  alt="Impulse-momentum diagram for constrained block A during the period of deformation"
  caption="Fig. 13.27: Impulse–momentum diagram for constrained block A alone during the period of deformation. Projecting onto the horizontal x-axis eliminates the vertical floor impulse F'_ext Δt entirely!"
  slide="Sec. 13.4B · Fig. 13.27 (p. 888)"
  badge="📖 Textbook Figure"
  maxWidth="680px"
/>

1. Draw the impulse–momentum diagram for **block $A$ alone** during the **period of deformation** (*Fig. 13.27*), where $\int \mathbf{P}\,dt$ acts inward along the normal $n$ (making angle $\theta$ with the horizontal $x$-axis) and $\mathbf{F}'_{\text{ext}}\Delta t$ acts vertically upward. At maximum deformation, block $A$ has horizontal velocity $\mathbf{u}$ whose normal component matches ball $B$'s normal component: $u_n = u\cos\theta = (u_B)_n$.
2. Projecting **Fig. 13.27** onto the **horizontal $x$-axis** eliminates the vertical floor impulse $\mathbf{F}'_{\text{ext}}\Delta t$ completely (Eq. 13.52):
   $$m_A v_A - \left(\int P\,dt\right)\cos\theta = m_A u$$
3. Proceeding identically for the **period of restitution** along the horizontal $x$-axis (Eq. 13.53):
   $$m_A u - \left(\int R\,dt\right)\cos\theta = m_A v'_A$$
4. Substituting $\int R\,dt$ and $\int P\,dt$ from Eqs. (13.52)–(13.53) into Poisson's definition $e = \dfrac{\int R\,dt}{\int P\,dt}$ cancels $m_A/\cos\theta$, and multiplying numerator and denominator by $\cos\theta$ yields (Eq. 13.54):
   $$e = \frac{\int R\,dt}{\int P\,dt} = \frac{u - v'_A}{v_A - u} = \frac{u\cos\theta - v'_A\cos\theta}{v_A\cos\theta - u\cos\theta} = \frac{u_n - (v'_A)_n}{(v_A)_n - u_n}$$
5. Because unconstrained ball $B$ independently satisfies $e = \dfrac{(v'_B)_n - u_n}{u_n - (v_B)_n}$ along $n$, adding numerators and denominators immediately recovers Eq. (13.49):
   $$e = \frac{\left[u_n - (v'_A)_n\right] + \left[(v'_B)_n - u_n\right]}{\left[(v_A)_n - u_n\right] + \left[u_n - (v_B)_n\right]} = \frac{(v'_B)_n - (v'_A)_n}{(v_A)_n - (v_B)_n} \quad \blacksquare$$
:::

---

## 6. Comprehensive Step-by-Step Worked Numericals

### Worked Problem 5.4: Direct Central Collision with Energy Loss
Two smooth spheres $A$ ($m_A = 0.4\text{ kg}$) and $B$ ($m_B = 0.6\text{ kg}$) move toward each other on a horizontal frictionless track with velocities $v_A = +6.0\text{ m/s}$ (to the right) and $v_B = -2.0\text{ m/s}$ (to the left). The coefficient of restitution between the spheres is $e = 0.75$.
Determine:
1. The velocities $v'_A$ and $v'_B$ of both spheres immediately after the collision.
2. The total mechanical kinetic energy lost ($\Delta T$) during the collision, and verify using the general energy loss equation.

::: details Click to view Step-by-Step Solution

#### Step 1: Conservation of Total Linear Momentum
Choose $+x$ horizontally to the right:
$$m_A v_A + m_B v_B = m_A v'_A + m_B v'_B$$
$$(0.4)(6.0) + (0.6)(-2.0) = 0.4 v'_A + 0.6 v'_B$$
$$2.4 - 1.2 = 0.4 v'_A + 0.6 v'_B \implies 0.4 v'_A + 0.6 v'_B = 1.2$$
Divide through by $0.2$:
$$2 v'_A + 3 v'_B = 6.0 \quad \text{--- (Eq. 1)}$$

---

#### Step 2: Restitution Equation
$$v'_B - v'_A = e(v_A - v_B)$$
$$v'_B - v'_A = 0.75 [6.0 - (-2.0)] = 0.75(8.0) = 6.0\text{ m/s}$$
$$v'_B = v'_A + 6.0 \quad \text{--- (Eq. 2)}$$

---

#### Step 3: Simultaneous Solution
Substitute Eq. 2 into Eq. 1:
$$2 v'_A + 3(v'_A + 6.0) = 6.0 \implies 5 v'_A = -12.0 \implies v'_A = -2.40\text{ m/s}$$

Substitute $v'_A = -2.40\text{ m/s}$ into Eq. 2:
$$v'_B = -2.40 + 6.0 = +3.60\text{ m/s}$$

**Final Velocities:**
- Sphere $A$: $v'_A = 2.40\text{ m/s}\leftarrow$ (rebounds to the left).
- Sphere $B$: $v'_B = 3.60\text{ m/s}\to$ (rebounds to the right).

---

#### Step 4: Kinetic Energy Calculation & Verification
- **Initial Kinetic Energy ($T_1$):**
  $$T_1 = \frac{1}{2}(0.4)(6.0)^2 + \frac{1}{2}(0.6)(-2.0)^2 = 7.20 + 1.20 = 8.40\text{ J}$$
- **Final Kinetic Energy ($T_2$):**
  $$T_2 = \frac{1}{2}(0.4)(-2.4)^2 + \frac{1}{2}(0.6)(3.6)^2 = 1.152 + 3.888 = 5.04\text{ J}$$
- **Energy Lost ($\Delta T$):**
  $$\Delta T = T_1 - T_2 = 8.40\text{ J} - 5.04\text{ J} = 3.36\text{ J} \quad (40.0\%\text{ loss})$$

#### Verification via the General Equation:
$$\Delta T = \frac{1}{2} \frac{m_A m_B}{m_A + m_B} (1 - e^2)(v_A - v_B)^2 = \frac{1}{2}(0.24)(1 - 0.75^2)(8.0)^2 = 0.12 \times 0.4375 \times 64.0 = 3.36\text{ J}$$
The derived formula matches the direct calculation with $100\%$ precision!
:::

---

### Worked Problem 5.5: Oblique Central Collision of Two Smooth Spheres
A smooth sphere $A$ of mass $m_A = 1.0\text{ kg}$ is moving with speed $v_A = 5.0\text{ m/s}$ along a line inclined at $\theta_A = 30^\circ$ to the common normal ($n$-axis). It strikes a smooth sphere $B$ of mass $m_B = 2.0\text{ kg}$ which is initially at rest ($v_B = 0$). The coefficient of restitution is $e = 0.80$.
Determine the magnitude and direction of the velocity of each sphere immediately after the collision.

::: details Click to view Step-by-Step Solution

#### Step 1: Initial Velocity Components
Choose $+n$ along the line of centers (positive toward $B$) and $+t$ along the tangent plane:
- Sphere $A$:
  $$(v_A)_n = 5.0 \cos 30^\circ = +4.330\text{ m/s}, \quad (v_A)_t = 5.0 \sin 30^\circ = +2.500\text{ m/s}$$
- Sphere $B$ (at rest):
  $$(v_B)_n = 0\text{ m/s}, \quad (v_B)_t = 0\text{ m/s}$$

---

#### Step 2: Tangential Components (Eq. 13.47)
Because both spheres are smooth, zero impulse acts along the tangent $t$:
$$(v'_A)_t = (v_A)_t = +2.500\text{ m/s}, \qquad (v'_B)_t = (v_B)_t = 0\text{ m/s}$$

---

#### Step 3: Normal Components Along $n$ (Eqs. 13.48 & 13.49)
1. **Total Linear Momentum Along $n$:**
   $$(1.0)(4.330) + (2.0)(0) = 1.0(v'_A)_n + 2.0(v'_B)_n \implies (v'_A)_n + 2(v'_B)_n = 4.330 \quad \text{--- (Eq. 1)}$$

2. **Restitution Along $n$:**
   $$(v'_B)_n - (v'_A)_n = 0.80(4.330 - 0) = 3.464\text{ m/s} \implies (v'_B)_n = (v'_A)_n + 3.464 \quad \text{--- (Eq. 2)}$$

3. **Solve the System:**
   $$(v'_A)_n + 2\left[(v'_A)_n + 3.464\right] = 4.330 \implies 3(v'_A)_n = -2.598 \implies (v'_A)_n = -0.866\text{ m/s}$$
   $$(v'_B)_n = -0.866 + 3.464 = +2.598\text{ m/s}$$

---

#### Step 4: Final Velocities and Directions
- **For Sphere $A$:**
  $$v'_A = \sqrt{(-0.866)^2 + (2.500)^2} = \sqrt{7.000} = 2.65\text{ m/s}, \quad \theta'_A = \tan^{-1}\left(\frac{2.500}{0.866}\right) = 70.9^\circ \text{ from }-n\text{ axis}$$
- **For Sphere $B$:**
  $$v'_B = 2.60\text{ m/s} \text{ strictly along }+n \text{ (}\theta'_B = 0^\circ\text{)}$$
:::

---

### Worked Problem 5.6: Ball Bouncing Obliquely off a Fixed Inclined Plate
A small steel ball is dropped from rest from a height of $h = 3.0\text{ m}$ onto a smooth rigid steel plate inclined at $\alpha = 20^\circ$ to the horizontal. The coefficient of restitution between the ball and the plate is $e = 0.70$.
Determine the magnitude of the rebound velocity $v'$ and the rebound angle $\theta'$ relative to the plate surface normal.

::: details Click to view Step-by-Step Solution

#### Step 1: Impact Velocity Prior to Contact
$$v = \sqrt{2 g h} = \sqrt{2 \times 9.81 \times 3.0} = \sqrt{58.86} = 7.672\text{ m/s} \downarrow$$

---

#### Step 2: Establish Normal ($n$) and Tangential ($t$) Coordinates
Choose $+t$ down the incline and $+n$ perpendicular to the plate pointing upward-outward. Since the plate is inclined at $20^\circ$ to the horizontal, its normal $n$ makes $20^\circ$ with the vertical:
$$v_n = -7.672 \cos 20^\circ = -7.209\text{ m/s}, \qquad v_t = +7.672 \sin 20^\circ = +2.624\text{ m/s}$$

---

#### Step 3: Impact Kinematics with Rigid Fixed Surface ($m_{\text{plate}} \to \infty$)
$$v'_t = v_t = +2.624\text{ m/s}, \qquad v'_n = -e v_n = -0.70(-7.209) = +5.046\text{ m/s}$$

---

#### Step 4: Rebound Velocity and Angle
- **Rebound Speed:**
  $$v' = \sqrt{(2.624)^2 + (5.046)^2} = \sqrt{32.347} = 5.69\text{ m/s}$$
- **Rebound Angle $\theta'$ (from Surface Normal):**
  $$\tan\theta' = \frac{v'_t}{v'_n} = \frac{2.624}{5.046} = 0.5200 \implies \theta' = 27.47^\circ \quad \left(\text{Check: } \frac{\tan 20^\circ}{0.70} = 0.5200\right)$$
:::

---

### Worked Problem 5.7: Constrained Impact Between Rolling Wedge-Block & Falling Sphere
A wedge-shaped block $A$ of mass $m_A = 6.0\text{ kg}$ rolls horizontally to the right at $v_A = 2.0\text{ m/s}$ on frictionless floor rollers (as in **Figs. 13.25–13.26**). Its smooth upper face is inclined at $\beta = 30^\circ$ to the horizontal (facing upward and to the right). A smooth sphere $B$ of mass $m_B = 2.0\text{ kg}$ falls **vertically downward** with speed $v_B = 6.0\text{ m/s}$ and strikes the inclined face of wedge $A$ with coefficient of restitution $e = 0.75$.
Determine:
1. The final horizontal velocity $v'_A$ of constrained wedge $A$ after impact.
2. The final velocity vector $\mathbf{v}'_B$ (magnitude and angle) of sphere $B$ immediately after impact.
3. The vertical external impulse $F_{\text{ext}}\Delta t$ exerted by the horizontal floor on wedge $A$.

::: details Click to view Step-by-Step Solution

#### Step 1: Coordinate Axes $(x, y)$ and $(n, t)$ & Initial Projections
Choose $+x$ horizontally to the right and $+y$ vertically upward. Since the inclined face slopes downward to the right at $\beta = 30^\circ$:
- Unit tangent $\mathbf{e}_t$ (down and right along the slope): $\mathbf{e}_t = \cos 30^\circ\,\mathbf{i} - \sin 30^\circ\,\mathbf{j} = 0.8660\,\mathbf{i} - 0.5000\,\mathbf{j}$.
- Unit outward normal $\mathbf{e}_n$ (from wedge $A$ toward ball $B$, $30^\circ$ right of $+y$): $\mathbf{e}_n = \sin 30^\circ\,\mathbf{i} + \cos 30^\circ\,\mathbf{j} = 0.5000\,\mathbf{i} + 0.8660\,\mathbf{j}$.

Projecting the initial velocities $\mathbf{v}_A = +2.0\,\mathbf{i}\text{ m/s}$ and $\mathbf{v}_B = -6.0\,\mathbf{j}\text{ m/s}$:
- **Wedge $A$:** $(v_A)_x = +2.000\text{ m/s}$, and normal projection $(v_A)_n = \mathbf{v}_A \cdot \mathbf{e}_n = 2.0\sin 30^\circ = +1.000\text{ m/s}$.
- **Sphere $B$:** $(v_B)_x = 0$, $(v_B)_y = -6.000\text{ m/s}$, and:
  $$(v_B)_n = \mathbf{v}_B \cdot \mathbf{e}_n = -6.0\cos 30^\circ = -5.1962\text{ m/s}$$
  $$(v_B)_t = \mathbf{v}_B \cdot \mathbf{e}_t = (-6.0)(-\sin 30^\circ) = +3.000\text{ m/s}$$

---

#### Step 2: Equation 1 — Tangential Momentum of Unconstrained Sphere $B$ (Eq. 13.50)
Because sphere $B$ is unconstrained and the contact face is smooth, zero tangential impulse acts on $B$:
$$(v'_B)_t = (v_B)_t = +3.000\text{ m/s}$$

Expressing $\mathbf{v}'_B = (v'_B)_n\,\mathbf{e}_n + (v'_B)_t\,\mathbf{e}_t$ in $(x, y)$ components:
$$(v'_B)_x = (v'_B)_n\sin 30^\circ + (v'_B)_t\cos 30^\circ = 0.5000(v'_B)_n + 3.000(0.866025) = 0.5000(v'_B)_n + 2.5981$$
$$(v'_B)_y = (v'_B)_n\cos 30^\circ - (v'_B)_t\sin 30^\circ = 0.866025(v'_B)_n - 1.5000$$

And since wedge $A$ remains constrained to horizontal motion ($\mathbf{v}'_A = v'_A\,\mathbf{i}$):
$$(v'_A)_n = v'_A\sin 30^\circ = 0.5000\,v'_A$$

---

#### Step 3: Equation 2 — Total Horizontal Momentum of System $(A + B)$ Along $x$ (Eq. 13.51)
The floor impulse $\mathbf{F}_{\text{ext}}\Delta t$ is strictly vertical ($\sum \text{Imp}_x^{\text{(ext)}} = 0$), so total horizontal momentum is conserved:
$$m_A v_A + m_B (v_B)_x = m_A v'_A + m_B (v'_B)_x$$
$$(6.0)(2.0) + (2.0)(0) = 6.0\,v'_A + 2.0\left[0.5000(v'_B)_n + 2.5981\right]$$
$$12.000 = 6.0\,v'_A + (v'_B)_n + 5.1962 \implies 6.0\,v'_A + (v'_B)_n = 6.8038 \quad \text{--- (Eq. A)}$$

---

#### Step 4: Equation 3 — Normal Restitution Along $n$ (Eq. 13.49)
$$(v'_B)_n - (v'_A)_n = e\left[(v_A)_n - (v_B)_n\right]$$
$$(v'_B)_n - 0.5000\,v'_A = 0.75\left[1.000 - (-5.1962)\right] = 0.75(6.1962) = 4.6471\text{ m/s}$$
$$(v'_B)_n = 0.5000\,v'_A + 4.6471 \quad \text{--- (Eq. B)}$$

---

#### Step 5: Simultaneous Solution & External Floor Impulse
Substitute Eq. B into Eq. A:
$$6.0\,v'_A + (0.5000\,v'_A + 4.6471) = 6.8038 \implies 6.5\,v'_A = 2.1567 \implies v'_A = +0.3318\text{ m/s} \approx 0.332\text{ m/s}\to$$

Then from Eq. B:
$$(v'_B)_n = 0.5000(0.3318) + 4.6471 = +4.8130\text{ m/s}$$
$$(v'_B)_x = 0.5000(4.8130) + 2.5981 = +5.0046\text{ m/s}, \qquad (v'_B)_y = 0.866025(4.8130) - 1.5000 = +2.6682\text{ m/s}$$
$$v'_B = \sqrt{(5.0046)^2 + (2.6682)^2} = 5.67\text{ m/s} \quad \text{at } \phi'_B = \tan^{-1}\left(\frac{2.6682}{5.0046}\right) = 28.1^\circ \text{ above }+x$$

Finally, apply vertical impulse–momentum along $+y$ to the combined system $(A + B)$ (noting $v_{Ay} = v'_{Ay} = 0$):
$$m_B(v_B)_y + F_{\text{ext}}\Delta t = m_B(v'_B)_y$$
$$2.0(-6.000) + F_{\text{ext}}\Delta t = 2.0(+2.6682) \implies F_{\text{ext}}\Delta t = 12.000 + 5.336 = 17.34\text{ N}\cdot\text{s}\uparrow$$

The horizontal floor rollers deliver a substantial upward external impulse of **$17.34\text{ N}\cdot\text{s}$**—confirming why normal momentum of $(A + B)$ could *not* be assumed conserved!
:::

---

## 7. Interactive Impact Collision Laboratory (4 Modes)

Test all four fundamental collision regimes side-by-side in the interactive laboratory below—switch seamlessly between **(1) Direct Central Impact**, **(2) Unconstrained Oblique Impact (`Figs. 13.23–13.24`)**, **(3) Constrained Rolling Wedge-Block Impact (`Figs. 13.25–13.27`)**, and **(4) Stroboscopic Tennis-Ball Bounce (`Photo 13.5`)**:

<ImpactCollisionLab />

---

## 8. Problems Involving Multiple Principles & S-M-A-R-T Kinetics Synthesis

### 8.1 Combining Energy, Momentum & Newton's Second Law (Section 13.4C)

In practical engineering design, mechanics problems rarely belong to a single isolated textbook section. Instead, distinct phases of a physical event demand **different kinetics principles**:

1. **Before or After Impact (Smooth Finite Displacements):** Apply **Work–Energy / Conservation of Mechanical Energy** ($T_1 + V_1 = T_2 + V_2$) to relate heights, spring deflections, and speeds directly without integrating over time.
2. **Across the Impact Interval ($\Delta t \to 0$):** Apply **Impulse–Momentum + Coefficient of Restitution**.
   ::: warning Critical Rule: Never Conserve Energy Across an Impact!
   Unless an impact is explicitly stated to be perfectly elastic ($e = 1$), **Conservation of Mechanical Energy CANNOT be applied across the collision itself** ($t_2 \to t_3$), because inelastic deformation dissipates $\Delta T = \frac{1}{2}\mu_{\text{red}}(1 - e^2)(v_A - v_B)^2$ into internal heat and vibration! You *must* split the analysis at the instant of collision!
   :::
3. **Instantaneous Support Reactions (Cord Tension / Track Normal Force):** Apply **Newton's Second Law** ($\sum \mathbf{F} = m\mathbf{a}$, specifically $\sum F_n = m v^2 / \rho$) at the exact instant of interest—because neither Work–Energy nor Conservation of Momentum exposes zero-work normal constraint forces!

Consider the textbook's four-stage **Two-Pendulum Impact** benchmark (**Fig. 13.28**, p. 889), where pendulum bob $A$ is released from rest at $A_1$ and strikes stationary pendulum bob $B$, causing $B$ to swing upward through maximum angle $\theta$:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_28_pendulum_impact_energy.png"
  alt="Four-stage analysis (a)-(d) of an impact between two pendulum bobs combining Energy and Momentum"
  caption="Fig. 13.28: Multi-principle analysis of colliding pendulums: (a) Conservation of Energy gives bob A's pre-impact speed at A₂; (b–c) Momentum Conservation along x + Restitution gives post-impact speeds at A₃ and B₃ (while ΣF_n = m v²/l gives peak cord tension); (d) Conservation of Energy gives bob B's maximum swing angle θ at B₄."
  slide="Sec. 13.4C · Fig. 13.28 (p. 889)"
  badge="📖 Textbook Figure"
  maxWidth="740px"
/>

---

### Worked Problem 5.8: Two-Pendulum Impact, Maximum Swing Angle $\theta$ & Peak Cord Tension
Two smooth pendulum bobs $A$ ($m_A = 2.0\text{ kg}$) and $B$ ($m_B = 3.0\text{ kg}$) hang from parallel inextensible cords of equal length $l = 1.50\text{ m}$ (as in **Fig. 13.28**). Bob $A$ is pulled aside to an initial angle $\theta_0 = 60^\circ$ from the vertical and released from rest, striking stationary bob $B$ directly at the bottom of its swing with coefficient of restitution $e = 0.80$. Take $g = 9.81\text{ m/s}^2$.
Determine:
1. The speed $v_A$ of bob $A$ just before impact (*Fig. 13.28a*).
2. The velocities $v'_A$ and $v'_B$ of both bobs immediately after impact (*Figs. 13.28b–c*), and the mechanical energy dissipated during the collision.
3. The **peak tension $T_{\text{cord}, B}$** in the cord supporting bob $B$ immediately after the impact.
4. The **maximum swing angle $\theta_{\max}$** reached by bob $B$ (*Fig. 13.28d*).

::: details Click to view Step-by-Step Solution

#### Stage 1: Swing of Bob $A$ Before Impact ($A_1 \to A_2$) — Conservation of Energy
Cord tension is perpendicular to the circular arc and performs zero work. Choosing the lowest point $A_2$ as gravitational datum ($V_2 = 0$):
$$h_A = l(1 - \cos 60^\circ) = 1.50(1 - 0.500) = 0.750\text{ m}$$
$$T_1 + V_1 = T_2 + V_2 \implies 0 + m_A g h_A = \frac{1}{2}m_A v_A^2 + 0$$
$$v_A = \sqrt{2 g h_A} = \sqrt{2(9.81)(0.750)} = \sqrt{14.715} = 3.836\text{ m/s}\to$$

---

#### Stage 2: Direct Central Impact ($A_2, B_2 \to A_3, B_3$) — Momentum + Restitution
At the bottom of the arc, both cords are vertical, so no external horizontal impulse acts ($\sum \text{Imp}_x^{\text{(ext)}} = 0$):
1. **Horizontal Momentum Conservation:**
   $$m_A v_A + m_B(0) = m_A v'_A + m_B v'_B \implies 2.0(3.8360) = 2.0\,v'_A + 3.0\,v'_B \implies 2 v'_A + 3 v'_B = 7.6720$$
2. **Coefficient of Restitution ($e = 0.80$):**
   $$v'_B - v'_A = 0.80(3.8360 - 0) = 3.0688 \implies v'_A = v'_B - 3.0688$$
3. **Solve Velocities:**
   $$2(v'_B - 3.0688) + 3 v'_B = 7.6720 \implies 5 v'_B = 13.8096 \implies v'_B = +2.762\text{ m/s}\to$$
   $$v'_A = 2.7619 - 3.0688 = -0.307\text{ m/s} \quad (0.307\text{ m/s}\leftarrow \text{ rebound})$$
4. **Energy Lost Across Impact:**
   - Pre-impact energy: $E_{\text{before}} = m_A g h_A = 2.0(9.81)(0.750) = 14.715\text{ J}$.
   - Post-impact energy: $E_{\text{after}} = \frac{1}{2}(2.0)(-0.3069)^2 + \frac{1}{2}(3.0)(2.7619)^2 = 0.094 + 11.442 = 11.536\text{ J}$.
   - Energy dissipated: $\Delta T = 14.715 - 11.536 = 3.18\text{ J}$ ($21.6\%$ of initial energy—proving why we could *not* set $m_A g h_A = m_B g h_B$!).

---

#### Stage 3: Peak Cord Tension in Bob $B$ Immediately After Impact — Newton's Second Law
At position $B_3$ ($\theta = 0^\circ$), bob $B$ moves along a circular path of radius $l = 1.50\text{ m}$ at its maximum speed $v'_B = 2.7619\text{ m/s}$, giving an upward centripetal acceleration $a_n = (v'_B)^2 / l$:
$$\sum F_n = m_B a_n \implies T_{\text{cord}, B} - m_B g = m_B \frac{(v'_B)^2}{l}$$
$$T_{\text{cord}, B} = 3.0\left(9.81 + \frac{(2.7619)^2}{1.50}\right) = 3.0(9.81 + 5.085) = 44.69\text{ N}$$

*(Note that peak dynamic cord tension $44.7\text{ N}$ exceeds the static weight $m_B g = 29.4\text{ N}$ by $52\%$!)*

---

#### Stage 4: Upward Swing of Bob $B$ ($B_3 \to B_4$) — Conservation of Energy
After separation, mechanical energy of bob $B$ is conserved during its smooth upward swing to momentarily stop at $B_4$:
$$\frac{1}{2}m_B (v'_B)^2 + 0 = 0 + m_B g h_B \implies h_B = \frac{(v'_B)^2}{2g} = \frac{(2.7619)^2}{2(9.81)} = 0.3888\text{ m}$$
Since $h_B = l(1 - \cos\theta_{\max})$:
$$1 - \cos\theta_{\max} = \frac{0.3888}{1.50} = 0.2592 \implies \cos\theta_{\max} = 0.7408 \implies \theta_{\max} = 42.2^\circ$$

Bob $B$ swings upward to a maximum angle of **$42.2^\circ$**.
:::

---

### 8.2 Interactive Multi-Principle Two-Pendulum Simulator

Adjust drop angle $\theta_0$, masses $m_A, m_B$, cord length $l$, and restitution $e$ below to observe all four stages of **Fig. 13.28** in real time—tracking how **Energy Conservation** governs the swings, **Momentum + Restitution** governs the collision jump, and **$\sum F_n = m v^2 / l$** governs live cord tensions:

<PendulumImpactEnergySim />

---

### 8.3 Course Capstone: The Three Kinetics Principles via the S-M-A-R-T Methodology

We now have at our disposal **three fundamental methods** for solving particle kinetics problems across Modules 3, 4, and 5! Each originates from Newton's Second Law, yet each excels in a distinct engineering domain:

<LectureFigure
  src="/images/physics/mod5/mod5_fig13_29_smart_kinetics_summary.png"
  alt="Master comparison of the three kinetics principles: Force-Mass-Acceleration, Work-Energy, and Impulse-Momentum"
  caption="Fig. 13.29: Master comparison of the three fundamental methods of kinetic analysis — (a) Newton's Second Law (ΣF = ma), (b) Method of Work and Energy (T₁ + U₁→₂ = T₂), and (c) Method of Impulse and Momentum (mv₁ + Imp₁→₂ = mv₂)."
  slide="Sec. 13.4C · Fig. 13.29 (p. 890)"
  badge="📖 Textbook Figure"
  maxWidth="780px"
/>

Applying the **S-M-A-R-T Problem-Solving Methodology** (Beer & Johnston, p. 890) ensures you always choose the cleanest analytical tool:

| S-M-A-R-T Phase | Engineering Decision Protocol Across All Three Methods |
| :--- | :--- |
| **S — Strategy** | Match the given/unknown quantities to the right principle:<br>• **Forces, Accelerations, or Zero-Work Normal Forces ($N, T_{\text{cord}}$) at an instant:** Use **$\sum\mathbf{F} = m\mathbf{a}$**.<br>• **Forces, Displacements/Heights/Springs, and Speeds:** Use **Work–Energy** ($T_1 + V_1 + U_{1\to 2}^{\text{NC}} = T_2 + V_2$).<br>• **Forces, Time Intervals $\Delta t$, Velocities, Impacts, or Explosions:** Use **Impulse–Momentum** ($m\mathbf{v}_1 + \mathbf{Imp}_{1\to 2} = m\mathbf{v}_2$).<br>• **Multi-Stage Events (*Fig. 13.28*):** Partition at every impact and apply each method to its natural stage! |
| **M — Modeling** | Draw the signature diagram of your chosen method:<br>• **$\sum\mathbf{F} = m\mathbf{a}$:** Free-Body Diagram $\equiv$ Kinetic ($m\mathbf{a}$) Diagram.<br>• **Work–Energy:** Initial/Final position sketches + active force/datum diagram.<br>• **Impulse–Momentum:** 3-state **Impulse–Momentum Diagram** ($m\mathbf{v}_1 + \mathbf{Imp}_{1\to 2} = m\mathbf{v}_2$), always retaining unknown constrained support impulses $\mathbf{F}_{\text{ext}}\Delta t$! |
| **A — Analysis** | Formulate scalar equations carefully:<br>• Scalar energy balance (1 equation per coupled 1-DOF system) vs. vector component momentum equations along $(x, y)$ or $(n, t)$ paired with $v'_B - v'_A = e(v_A - v_B)$ along $n$. Watch signs strictly! |
| **R & T — Reflect & Think** | Perform physical sanity checks:<br>• Verify $0 \le e \le 1$ implies $T_{\text{after}} \le T_{\text{before}}$ across every collision.<br>• Check limiting cases ($e \to 1$ recovers $\Delta T = 0$; $e \to 0$ gives $v'_A = v'_B$; $m_B \to \infty$ gives fixed-wall rebound). |

---

## 9. Summary & Review Checklist

Ensure complete mastery of impact mechanics and multi-principle synthesis before moving to Chapter 5.3:
- [x] Identify the Line of Impact ($n$) and Plane of Contact ($t$) for direct and oblique central impacts (`Fig. 13.20`).
- [x] Derive Poisson's Coefficient of Restitution $e = \frac{\int R\,dt}{\int P\,dt} = \frac{v'_B - v'_A}{v_A - v_B}$ across deformation and restitution phases (`Figs. 13.21–13.22`).
- [x] Compute $e = \sqrt{h_1/h_0}$ from stroboscopic bounce heights (`Photo 13.5`) and prove algebraically why kinetic energy is conserved when $e = 1$ (Eqs. 13.37', 13.45', 13.46).
- [x] Solve unconstrained 4-unknown oblique collisions (`Figs. 13.23–13.24`) and fixed-wall rebounds ($\tan\theta' = \frac{\tan\theta}{e}$).
- [x] Formulate and solve **3-unknown Constrained Oblique Impacts** (`Figs. 13.25–13.27`), conserving system momentum perpendicular to $\mathbf{F}_{\text{ext}}\Delta t$ while proving restitution holds along $n$.
- [x] Combine **Work–Energy**, **Impulse–Momentum**, and **$\sum\mathbf{F} = m\mathbf{a}$** across multi-stage pendulum/impact systems (`Figs. 13.28–13.29`).
