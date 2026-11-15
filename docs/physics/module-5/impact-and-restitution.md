---
title: "5.2 Impact Mechanics: Direct & Oblique Central Impact"
description: Comprehensive theory of collision mechanics, line of impact, deformation and restitution phases, coefficient of restitution derivation, plastic versus elastic impact, direct central impact, and oblique central collisions.
---

# 5.2 Impact Mechanics: Direct & Oblique Central Impact

::: tip Pedagogical Objective
A collision between two solid bodies—whether pool balls on a green baize, automobile crashes, or meteorite impacts—involves forces of colossal magnitude acting over intervals of milliseconds. During this microscopic window of contact, kinetic energy is stored in elastic structural strain, lost to internal molecular damping, or permanently dissipated in plastic deformation.

In this chapter, we master the analytical physics of collisions:
1. Distinguishing between the **Line of Impact** and the **Plane of Contact**.
2. Deconstructing the **Deformation and Restitution Phases** to derive Poisson's **Coefficient of Restitution** ($e$).
3. Formulating the **Direct Central Impact** protocol and proving the general energy loss equation.
4. Solving 4-unknown **Oblique Central Impacts** through orthogonal velocity decoupling.
:::

---

## 1. Physics of Collisions & Terminology

A collision (or impact) refers to the mutual interaction of two bodies occurring over a very brief time interval $\Delta t$, during which very large internal impulsive forces are exerted.

```
                         Impact Classification Axes
                                Plane of Contact
                                       |
                                       |
                                   ( Sphere A )
                                       |
            Line of Impact  -----------*----------- (Common Normal n)
            (Common Normal)            |
                                   ( Sphere B )
                                       |
                                       |
                                Plane of Contact (Tangent t)
```

### Key Geometric Definitions:
1. **Line of Impact (Normal Axis, $n$):** The common normal to the contacting surfaces at the point of contact during the collision.
2. **Plane of Contact (Tangential Plane, $t$):** The plane tangent to the contacting surfaces at the point of contact, perpendicular to the line of impact.
3. **Central Impact:** An impact is classified as **central** if the mass centers ($G_A$ and $G_B$) of both colliding bodies lie on the line of impact. (If either mass center is offset, the collision is termed an *eccentric impact*, which induces angular rotation).
4. **Direct Impact:** An impact is **direct** if the initial velocity vectors ($\mathbf{v}_A$ and $\mathbf{v}_B$) are collinear with the line of impact.
5. **Oblique Impact:** An impact is **oblique** if one or both initial velocity vectors make an angle with the line of impact.

```
+---------------------------------------+---------------------------------------+
|         DIRECT CENTRAL IMPACT         |        OBLIQUE CENTRAL IMPACT         |
+---------------------------------------+---------------------------------------+
| • Mass centers lie on line of impact. | • Mass centers lie on line of impact. |
| • Initial velocities are directed     | • Initial velocities make angles with |
|   strictly along the line of impact.  |   the line of impact.                 |
| • Motion is strictly 1-dimensional.   | • Motion is 2-dimensional: resolved   |
| • Solved with 2 equations for 2 final |   into normal (n) and tangential (t)  |
|   velocities (v'_A, v'_B).            |   components (4 scalar unknowns).     |
+---------------------------------------+---------------------------------------+
```

---

## 2. Deformation & Restitution Phases

When two bodies collide centrally, the collision is physically partitioned into two consecutive phases:

```
                          The Two Phases of Impact
      [ Initial Approach ]           v_A > v_B
               ( A ) ------>             ------> ( B )
                 v_A                       v_B
      -------------------------------------------------------------------------
      [ 1. Period of Deformation ]   t_0 to t*
               ( A * B )             Both bodies compress under force P(t)
               Common Velocity u     At t*, compression is maximum: v_A = v_B = u
      -------------------------------------------------------------------------
      [ 2. Period of Restitution ]   t* to t_f
               ( A * B )             Bodies partially push apart under force R(t)
      -------------------------------------------------------------------------
      [ Final Separation ]           v'_B > v'_A
               <------ ( A )             ------> ( B )
                 v'_A                      v'_B
```

### 2.1 The Period of Deformation ($t_0 \to t^*$)
- Upon initial contact at $t_0$, the bodies begin compressing each other.
- The compressive internal force $P(t)$ increases to a peak value.
- Body $A$ is decelerated while Body $B$ is accelerated.
- At the end of deformation ($t^*$), the relative velocity of approach reaches zero. Both bodies move at an instantaneous **common velocity** $u$.
- Applying linear impulse and momentum over the deformation interval:
  - For Body $A$: $m_A v_A - \int_{t_0}^{t^*} P\,dt = m_A u$
    $$\int_{t_0}^{t^*} P\,dt = m_A(v_A - u)$$
  - For Body $B$: $m_B v_B + \int_{t_0}^{t^*} P\,dt = m_B u$
    $$\int_{t_0}^{t^*} P\,dt = m_B(u - v_B)$$

---

### 2.2 The Period of Restitution ($t^* \to t_f$)
- From $t^*$ to final separation at $t_f$, the bodies partially or fully recover from their elastic deformation, pushing against each other with a restitution force $R(t)$.
- Applying linear impulse and momentum over the restitution interval:
  - For Body $A$: $m_A u - \int_{t^*}^{t_f} R\,dt = m_A v'_A$
    $$\int_{t^*}^{t_f} R\,dt = m_A(u - v'_A)$$
  - For Body $B$: $m_B u + \int_{t^*}^{t_f} R\,dt = m_B v'_B$
    $$\int_{t^*}^{t_f} R\,dt = m_B(v'_B - u)$$

---

## 3. Derivation of the Coefficient of Restitution ($e$)

French mathematician Siméon Denis Poisson defined the **Coefficient of Restitution** ($e$) as the ratio of the impulse during the restitution period to the impulse during the deformation period:

$$e = \frac{\int_{t^*}^{t_f} R\,dt}{\int_{t_0}^{t^*} P\,dt}$$

Substituting the momentum expressions for Body $A$:

$$e = \frac{m_A(u - v'_A)}{m_A(v_A - u)} = \frac{u - v'_A}{v_A - u}$$

Substituting the momentum expressions for Body $B$:

$$e = \frac{m_B(v'_B - u)}{m_B(u - v_B)} = \frac{v'_B - u}{u - v_B}$$

Using the algebraic property that if $\frac{a}{b} = \frac{c}{d} = e$, then $\frac{a + c}{b + d} = e$:

$$e = \frac{(u - v'_A) + (v'_B - u)}{(v_A - u) + (u - v_B)} = \frac{v'_B - v'_A}{v_A - v_B}$$

This recovers **Newton's Law of Restitution**:

$$e = \frac{v'_B - v'_A}{v_A - v_B} = \frac{\text{Relative velocity of separation}}{\text{Relative velocity of approach}}$$

```
    Separation Speed: (v'_B - v'_A)  =  e · Approach Speed: (v_A - v_B)
```

::: info Physical Regimes of the Coefficient of Restitution
The coefficient of restitution is an empirical material parameter bounded strictly between $0$ and $1$ ($0 \le e \le 1$):
1. **Perfectly Elastic Impact ($e = 1$):**
   - $\int R\,dt = \int P\,dt$. The restitution impulse perfectly matches the deformation impulse.
   - Shapes fully recover. Total mechanical kinetic energy is conserved ($\Delta T = 0$).
2. **Inelastic / Plastic Impact ($0 < e < 1$):**
   - $\int R\,dt < \int P\,dt$. Partial shape recovery.
   - Most real engineering collisions ($e \approx 0.70\text{ to }0.90$ for hardened steel spheres; $e \approx 0.60\text{ to }0.80$ for sports balls).
3. **Perfectly Plastic Impact ($e = 0$):**
   - $\int R\,dt = 0$. Zero restitution force.
   - The bodies do not rebound; they stick together and continue moving with a single common velocity ($v'_A = v'_B = u$). Maximum possible kinetic energy is dissipated.
:::

---

### 3.1 General Formula for Kinetic Energy Loss ($\Delta T$)

During any direct central collision between two masses $m_A$ and $m_B$ with coefficient of restitution $e$, the loss of mechanical kinetic energy is given by:

$$\Delta T = T_1 - T_2 = \frac{1}{2} \frac{m_A m_B}{m_A + m_B} (1 - e^2)(v_A - v_B)^2$$

Where:
- $\mu_{red} = \frac{m_A m_B}{m_A + m_B}$ is the **reduced mass** of the two-body system.
- $(v_A - v_B)$ is the relative approach velocity.
- $(1 - e^2)$ represents the fraction of relative kinetic energy dissipated.
- If $e = 1$: $(1 - 1^2) = 0 \implies \Delta T = 0$ (Zero energy lost).
- If $e = 0$: $(1 - 0) = 1 \implies \Delta T = \frac{1}{2}\mu_{red}(v_A - v_B)^2$ (Maximum dissipation).

---

## 4. Direct Central Impact Solution Blueprint

To solve any direct central impact problem with two unknown final velocities ($v'_A$ and $v'_B$):

```
       [ EQUATION 1: CONSERVATION OF TOTAL LINEAR MOMENTUM ]
                m_A v_A + m_B v_B = m_A v'_A + m_B v'_B
                                   +
             [ EQUATION 2: RESTITUTION KINEMATIC RELATION ]
                         v'_B - v'_A = e (v_A - v_B)
                                  ||
                                  vv
               Simultaneous 2x2 Linear System Solution:
      v'_A = [ (m_A - e m_B) v_A + m_B (1 + e) v_B ] / (m_A + m_B)
      v'_B = [ m_A (1 + e) v_A + (m_B - e m_A) v_B ] / (m_A + m_B)
```

---

## 5. Oblique Central Impact: The 4-Unknown Method

When two smooth colliding spheres approach at angles, the problem involves four unknown velocity components: $(v'_A)_n, (v'_A)_t, (v'_B)_n, (v'_B)_t$.

```
                        Oblique Central Impact Geometry
                                   Plane of Contact (t)
                                         ^
                                         |
                                         |    v_A
                                         |   /
                                         |  / θ_A
       Line of Impact (n) <--------------*--------------
                                        /|
                                    v_B/ | θ_B
                                      /  |
                                         |
```

### The 4-Step Solution Protocol (Assuming Smooth Spheres):
Because the contacting surfaces are smooth (frictionless during the millisecond contact):
1. **Tangential Momentum of Body $A$ is Conserved:**
   No force acts on Sphere $A$ along the contact plane ($F_t = 0$):
   $$(v'_A)_t = (v_A)_t$$
2. **Tangential Momentum of Body $B$ is Conserved:**
   $$(v'_B)_t = (v_B)_t$$
3. **Total Linear Momentum Along the Line of Impact ($n$) is Conserved:**
   $$m_A (v_A)_n + m_B (v_B)_n = m_A (v'_A)_n + m_B (v'_B)_n$$
4. **Restitution Equation Applies Strictly Along the Line of Impact ($n$):**
   $$(v'_B)_n - (v'_A)_n = e\left[(v_A)_n - (v_B)_n\right]$$

Equations 3 and 4 form a 2-variable linear system identical to direct central impact! Once $(v'_A)_n$ and $(v'_B)_n$ are calculated, the final speed and rebound angle for each sphere are:

$$v'_A = \sqrt{(v'_A)_n^2 + (v'_A)_t^2}, \quad \theta'_A = \tan^{-1}\left(\frac{(v'_A)_t}{(v'_A)_n}\right)$$

---

### 5.1 Oblique Rebound from a Fixed Smooth Surface
When a sphere bounces off a massive, fixed, rigid wall ($m_B \to \infty, v_B = 0$):
- Along the tangent: $v'_t = v_t$
- Along the normal: $v'_n = -e v_n$

Let $\theta$ be the angle of incidence measured from the surface normal, and $\theta'$ be the rebound angle measured from the normal:
$$\tan\theta = \frac{v_t}{v_n}, \quad \tan\theta' = \frac{v'_t}{|v'_n|} = \frac{v_t}{e v_n} = \frac{\tan\theta}{e}$$

$$\tan\theta' = \frac{\tan\theta}{e} \iff \theta' > \theta$$

*(If angles $\alpha, \alpha'$ are measured from the wall surface itself: $\tan\alpha' = e \tan\alpha$).*

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
$$2.4 - 1.2 = 0.4 v'_A + 0.6 v'_B$$
$$0.4 v'_A + 0.6 v'_B = 1.2$$
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
$$2 v'_A + 3(v'_A + 6.0) = 6.0$$
$$2 v'_A + 3 v'_A + 18.0 = 6.0$$
$$5 v'_A = 6.0 - 18.0 = -12.0$$
$$v'_A = \frac{-12.0}{5} = -2.40\text{ m/s}$$

Substitute $v'_A = -2.40\text{ m/s}$ into Eq. 2:
$$v'_B = -2.40 + 6.0 = +3.60\text{ m/s}$$

**Final Velocities:**
- Sphere $A$: $v'_A = 2.40\text{ m/s}\leftarrow$ (rebounds to the left).
- Sphere $B$: $v'_B = 3.60\text{ m/s}\to$ (rebounds to the right).

---

#### Step 4: Kinetic Energy Calculation & Verification
- **Initial Kinetic Energy ($T_1$):**
  $$T_1 = \frac{1}{2} m_A v_A^2 + \frac{1}{2} m_B v_B^2 = \frac{1}{2}(0.4)(6.0)^2 + \frac{1}{2}(0.6)(-2.0)^2 = 0.2(36) + 0.3(4) = 7.20 + 1.20 = 8.40\text{ J}$$
- **Final Kinetic Energy ($T_2$):**
  $$T_2 = \frac{1}{2} m_A (v'_A)^2 + \frac{1}{2} m_B (v'_B)^2 = \frac{1}{2}(0.4)(-2.4)^2 + \frac{1}{2}(0.6)(3.6)^2 = 0.2(5.76) + 0.3(12.96) = 1.152 + 3.888 = 5.04\text{ J}$$
- **Energy Lost ($\Delta T$):**
  $$\Delta T = T_1 - T_2 = 8.40\text{ J} - 5.04\text{ J} = 3.36\text{ J}$$
- **Percentage Loss:**
  $$\% \text{ Loss} = \frac{3.36}{8.40} \times 100\% = 40.0\%$$

#### Verification via the General Equation:
$$\Delta T = \frac{1}{2} \frac{m_A m_B}{m_A + m_B} (1 - e^2)(v_A - v_B)^2$$
$$\mu_{red} = \frac{0.4 \times 0.6}{0.4 + 0.6} = \frac{0.24}{1.0} = 0.24\text{ kg}$$
$$(1 - e^2) = 1 - (0.75)^2 = 1 - 0.5625 = 0.4375$$
$$(v_A - v_B)^2 = [6.0 - (-2.0)]^2 = (8.0)^2 = 64.0\text{ m}^2/\text{s}^2$$
$$\Delta T = \frac{1}{2}(0.24)(0.4375)(64.0) = 0.12 \times 28.0 = 3.36\text{ J}$$
The derived formula matches the direct calculation with $100\%$ precision!
:::

---

### Worked Problem 5.5: Oblique Central Collision of Two Spheres
A smooth sphere $A$ of mass $m_A = 1.0\text{ kg}$ is moving with speed $v_A = 5.0\text{ m/s}$ along a line inclined at $\theta_A = 30^\circ$ to the common normal ($n$-axis). It strikes an identical smooth sphere $B$ of mass $m_B = 2.0\text{ kg}$ which is initially at rest ($v_B = 0$). The coefficient of restitution is $e = 0.80$.
Determine the magnitude and direction of the velocity of each sphere immediately after the collision.

```
                           Oblique Collision Setup
                                   Plane of Contact (t)
                                         ^
                                         |
                                         |   v_A = 5 m/s
                                         |  / 30°
                                         | /
       Line of Impact (n) <--------------* (A) -------- (B, at rest)
                                         |
```

::: details Click to view Step-by-Step Solution

#### Step 1: Initial Velocity Components
Choose $n$ along the line of centers (positive toward the right, along initial approach) and $t$ along the tangent plane:
- Sphere $A$:
  $$(v_A)_n = v_A \cos 30^\circ = 5.0 \cos 30^\circ = 5.0(0.8660) = +4.330\text{ m/s}$$
  $$(v_A)_t = v_A \sin 30^\circ = 5.0 \sin 30^\circ = 5.0(0.5000) = +2.500\text{ m/s}$$
- Sphere $B$ (at rest):
  $$(v_B)_n = 0\text{ m/s}, \quad (v_B)_t = 0\text{ m/s}$$

---

#### Step 2: Tangential Components
Because both spheres are frictionless and smooth, contact forces act strictly along the normal $n$. Zero impulse acts along the tangent $t$:
$$(v'_A)_t = (v_A)_t = +2.500\text{ m/s}$$
$$(v'_B)_t = (v_B)_t = 0\text{ m/s}$$

---

#### Step 3: Normal Components ($n$)
1. **Total Linear Momentum Along $n$:**
   $$m_A (v_A)_n + m_B (v_B)_n = m_A (v'_A)_n + m_B (v'_B)_n$$
   $$(1.0)(4.330) + (2.0)(0) = 1.0(v'_A)_n + 2.0(v'_B)_n$$
   $$(v'_A)_n + 2(v'_B)_n = 4.330 \quad \text{--- (Eq. 1)}$$

2. **Restitution Along $n$:**
   $$(v'_B)_n - (v'_A)_n = e\left[(v_A)_n - (v_B)_n\right]$$
   $$(v'_B)_n - (v'_A)_n = 0.80(4.330 - 0) = 3.464\text{ m/s}$$
   $$(v'_B)_n = (v'_A)_n + 3.464 \quad \text{--- (Eq. 2)}$$

3. **Solve the System:**
   Substitute Eq. 2 into Eq. 1:
   $$(v'_A)_n + 2\left[(v'_A)_n + 3.464\right] = 4.330$$
   $$3(v'_A)_n + 6.928 = 4.330$$
   $$3(v'_A)_n = 4.330 - 6.928 = -2.598$$
   $$(v'_A)_n = \frac{-2.598}{3} = -0.866\text{ m/s}$$

   Substitute into Eq. 2:
   $$(v'_B)_n = -0.866 + 3.464 = +2.598\text{ m/s}$$

---

#### Step 4: Final Velocities and Directions
- **For Sphere $A$:**
  $$(v'_A)_n = -0.866\text{ m/s}, \quad (v'_A)_t = +2.500\text{ m/s}$$
  $$v'_A = \sqrt{(-0.866)^2 + (2.500)^2} = \sqrt{0.750 + 6.250} = \sqrt{7.000} = 2.646\text{ m/s} \approx 2.65\text{ m/s}$$
  Direction with the normal axis:
  $$\theta'_A = \tan^{-1}\left(\frac{(v'_A)_t}{|(v'_A)_n|}\right) = \tan^{-1}\left(\frac{2.500}{0.866}\right) = \tan^{-1}(2.8869) = 70.90^\circ$$
  Sphere $A$ rebounds with speed **$2.65\text{ m/s}$** at **$70.9^\circ$** relative to the line of centers.

- **For Sphere $B$:**
  $$(v'_B)_n = +2.598\text{ m/s}, \quad (v'_B)_t = 0\text{ m/s}$$
  $$v'_B = 2.598\text{ m/s} \approx 2.60\text{ m/s}$$
  Since $(v'_B)_t = 0$, Sphere $B$ moves **strictly along the line of impact** ($\theta'_B = 0^\circ$).
:::

---

### Worked Problem 5.6: Ball Bouncing Obliquely off an Inclined Surface
A small steel ball is dropped from rest from a height of $h = 3.0\text{ m}$ onto a smooth rigid steel plate inclined at $\alpha = 20^\circ$ to the horizontal. The coefficient of restitution between the ball and the plate is $e = 0.70$.
Determine the magnitude of the rebound velocity $v'$ and the rebound angle $\theta'$ relative to the plate surface normal.

```
                      Ball Dropped on Inclined Plate
                                   * Ball (h = 3 m drop)
                                   |
                                   | v = √(2gh) (Vertical)
                                   v
                                   * Point of Impact
                                 /   \ Normal n
                               /  20° \
                             /         \
                    ========+ 20°       +======== Plate
```

::: details Click to view Step-by-Step Solution

#### Step 1: Impact Velocity Prior to Contact
The ball falls vertically under gravity through $h = 3.0\text{ m}$:
$$v = \sqrt{2 g h} = \sqrt{2 \times 9.81 \times 3.0} = \sqrt{58.86} = 7.672\text{ m/s} \downarrow$$

---

#### Step 2: Establish Normal ($n$) and Tangential ($t$) Coordinates
- Choose $t$-axis along the inclined surface pointing downwards.
- Choose $n$-axis perpendicular to the inclined surface pointing upwards away from the plate.
- The plate is inclined at $\alpha = 20^\circ$ to the horizontal, so its normal $n$ makes an angle of $20^\circ$ with the vertical.
- The incoming velocity $\mathbf{v}$ is vertically downward. Thus, the angle between the incoming velocity vector and the normal axis is $\theta = 20^\circ$:
  $$v_n = -v \cos 20^\circ = -7.672 \cos 20^\circ = -7.672(0.9397) = -7.209\text{ m/s}$$
  $$v_t = +v \sin 20^\circ = +7.672 \sin 20^\circ = +7.672(0.3420) = +2.624\text{ m/s}$$

---

#### Step 3: Impact Kinematics with Rigid Fixed Surface ($m_{plate} \to \infty$)
1. **Tangential Direction (Frictionless Plate):**
   $$v'_t = v_t = +2.624\text{ m/s}$$
2. **Normal Direction (Restitution with Fixed Wall):**
   $$v'_n = -e v_n = -0.70(-7.209) = +5.046\text{ m/s}$$

---

#### Step 4: Rebound Velocity and Angle
- **Rebound Speed:**
  $$v' = \sqrt{(v'_t)^2 + (v'_n)^2} = \sqrt{(2.624)^2 + (5.046)^2} = \sqrt{6.885 + 25.462} = \sqrt{32.347} = 5.687\text{ m/s} \approx 5.69\text{ m/s}$$
- **Rebound Angle $\theta'$ (Measured from the Surface Normal):**
  $$\tan\theta' = \frac{v'_t}{v'_n} = \frac{2.624}{5.046} = 0.5200 \implies \theta' = \tan^{-1}(0.5200) = 27.47^\circ$$

*(Check analytical formula: $\tan\theta' = \frac{\tan\theta}{e} = \frac{\tan 20^\circ}{0.70} = \frac{0.3640}{0.70} = 0.5200 \implies \theta' = 27.47^\circ$. Perfect!)*

The ball rebounds with a speed of **$5.69\text{ m/s}$** at an angle of **$27.5^\circ$** from the surface normal.
:::

---

## 7. Interactive Laboratory Simulation

Explore the physics of momentum conservation, deformation-restitution impulses, and energy dissipation in the collision laboratory below:

<ImpactCollisionLab />

---

## 8. Summary & Review Checklist

Ensure complete mastery of impact mechanics before moving to Chapter 5.3:
- [x] Identify the Line of Impact ($n$) and Plane of Contact ($t$) for any collision geometry.
- [x] Derive Poisson's Coefficient of Restitution $e = \frac{v'_B - v'_A}{v_A - v_B}$ from the ratio of restitution and deformation impulses.
- [x] State the kinetic energy loss formula $\Delta T = \frac{1}{2}\mu_{red}(1 - e^2)(v_A - v_B)^2$.
- [x] Solve direct central collisions using simultaneous momentum and restitution equations.
- [x] Apply the 4-unknown decoupling method for oblique collisions of smooth spheres ($v'_t = v_t$).
- [x] Calculate rebound velocity and angle off a smooth fixed inclined plane ($\tan\theta' = \frac{\tan\theta}{e}$).
