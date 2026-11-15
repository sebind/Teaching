---
title: 3.1 Newton's Second Law, Angular Momentum & D'Alembert's Principle
description: Transition from kinematics to kinetics, Newton's second law, linear and angular momentum, equations of motion in rectangular, polar, and path coordinates, and D'Alembert's dynamic equilibrium.
---

# 3.1 Newton's Second Law, Angular Momentum & D'Alembert's Principle

::: tip Pedagogical Objective
In Module 2 (Kinematics), we studied the **geometry of motion**—evaluating displacement $\mathbf{r}(t)$, velocity $\mathbf{v}(t)$, and acceleration $\mathbf{a}(t)$ purely as functions of time and space, with no regard to the forces causing them. 

In Module 3 (Kinetics), we build the bridge between **cause and effect**: how unbalanced external forces acting upon a finite mass drive mechanical accelerations. We establish the 5-step **Free-Body Diagram $\equiv$ Kinetic Diagram** protocol, decompose the equations of motion across three coordinate frames, examine angular momentum conservation in central force fields, and apply **D'Alembert's Principle** to convert dynamic problems into static equilibrium.
:::

---

## 1. Transition from Kinematics to Kinetics

Mechanics is structured into two fundamental pillars:
1. **Kinematics:** *How does a body move?* Quantities involved are geometric: time $t$, position $\mathbf{r}$, path distance $s$, velocity $\mathbf{v} = \dot{\mathbf{r}}$, and acceleration $\mathbf{a} = \ddot{\mathbf{r}}$.
2. **Kinetics:** *Why does a body move?* Quantities involved couple geometry with physical nature: force $\mathbf{F}$, mass $m$, linear momentum $\mathbf{L}$, angular momentum $\mathbf{H}_O$, work $U$, kinetic energy $T$, and power $P$.

```
+-------------------------------------------------------------------------------+
|                                  DYNAMICS                                     |
+---------------------------------------+---------------------------------------+
|              KINEMATICS               |                KINETICS               |
|      (Geometry & Time Relations)      |        (Forces, Mass & Motion)        |
+---------------------------------------+---------------------------------------+
|  • Position: r(t), s(t)               |  • Newton's 2nd Law: ΣF = m a         |
|  • Velocity: v = dr/dt                |  • Linear Momentum: L = m v           |
|  • Acceleration: a = dv/dt            |  • Angular Momentum: H_O = r × (m v)  |
|  • Coordinate frames:                 |  • D'Alembert's Principle: ΣF - m a = 0|
|    - Rectangular (x, y, z)            |  • Work-Energy & Power                |
|    - Normal-Tangential (t, n, b)      |  • Impulse-Momentum & Impact          |
|    - Polar/Cylindrical (r, θ, z)      |                                       |
+---------------------------------------+---------------------------------------+
```

### 1.1 Newton's Second Law of Motion

Sir Isaac Newton stated in his *Philosophiae Naturalis Principia Mathematica* (1687) that the rate of change of linear momentum of a body is directly proportional to the net external force impressed upon it and takes place in the direction of the straight line in which that force acts:

$$\sum \mathbf{F} = \frac{d\mathbf{p}}{dt} = \frac{d}{dt}(m\mathbf{v})$$

For systems of constant mass ($m = \text{const.}$), the time derivative operates solely on velocity:

$$\sum \mathbf{F} = m \frac{d\mathbf{v}}{dt} = m \mathbf{a}$$

Where:
- $\sum \mathbf{F}$ is the vector resultant of **all external forces** acting on the particle ($\text{N} = \text{kg}\cdot\text{m/s}^2$). Internal mutual forces cancel in equal and opposite collinear pairs by Newton's Third Law.
- $m$ is the invariant inertial mass of the particle ($\text{kg}$).
- $\mathbf{a}$ is the absolute linear acceleration vector ($\text{m/s}^2$).

<LectureFigure
  src="/images/physics/mod3/mod3_statics_vs_kinetics.png"
  caption="Statics (ΣF = 0 equilibrium at rest or constant velocity) vs. Kinetics (ΣF = ma unbalanced forces driving accelerated motion)."
  slide="Mod 3 · Slide 3"
  max-width="740px"
/>

::: warning Crucial Axiom: Inertial (Newtonian) Reference Frames
Newton's Second Law $\sum \mathbf{F} = m\mathbf{a}$ is valid **only** when acceleration $\mathbf{a}$ is measured with respect to an **inertial reference frame** (also termed a Newtonian or Galilean frame).
- An inertial frame is one that is either fixed in space or translating with a strictly constant velocity ($\mathbf{a}_{frame} = \mathbf{0}$).
- For engineering problems on the surface of the Earth, a coordinate system fixed to the ground is assumed to be inertial. The Earth's rotation ($7.29 \times 10^{-5}\text{ rad/s}$) causes Coriolis and centripetal accelerations that are negligible for everyday machinery, vehicles, and structures, though essential in long-range ballistics, oceanography, and satellite trajectories.
- In an accelerating or rotating vehicle (non-inertial frame), fictitious inertial forces (such as centrifugal or Coriolis forces) must be artificially added if observers evaluate motion relative to that frame.
:::

---

## 2. Linear and Angular Momentum Formulations

### 2.1 Linear Momentum ($\mathbf{L}$)

The **linear momentum** of a particle of mass $m$ moving with velocity $\mathbf{v}$ is defined as:

$$\mathbf{L} = m\mathbf{v}$$

Linear momentum is a vector quantity pointing in the exact direction of velocity $\mathbf{v}$, with SI units of $\text{kg}\cdot\text{m/s} = \text{N}\cdot\text{s}$. Differentiating with respect to time yields:

$$\dot{\mathbf{L}} = \frac{d}{dt}(m\mathbf{v}) = m\mathbf{a}$$

Thus, Newton's Second Law can be stated concisely as:

$$\sum \mathbf{F} = \dot{\mathbf{L}}$$

::: info Conservation of Linear Momentum
If the resultant external force acting on a particle is zero ($\sum \mathbf{F} = \mathbf{0}$):

$$\dot{\mathbf{L}} = \mathbf{0} \implies \mathbf{L} = m\mathbf{v} = \text{constant}$$

The particle continues in straight-line motion at constant velocity, recovering Newton's First Law.
:::

---

### 2.2 Angular Momentum ($\mathbf{H}_O$)

The **moment of momentum**, or **angular momentum**, of a particle about a fixed origin $O$ is defined as the cross product of its position vector $\mathbf{r}$ and its linear momentum $\mathbf{L} = m\mathbf{v}$:

$$\mathbf{H}_O = \mathbf{r} \times m\mathbf{v}$$

<LectureFigure
  src="/images/physics/mod3/mod3_angular_momentum.png"
  src2="/images/physics/mod3/mod3_central_force.png"
  caption="(Left) Angular momentum H_O = r × mv in 3D space and plane polar coordinates (H_O = m r² θ̇); (Right) Motion of a particle under a central force directed toward fixed center O with conserved angular momentum."
  slide="Mod 3 · Slides 8–9"
/>

The magnitude of $\mathbf{H}_O$ is:

$$H_O = r\,m v \sin\phi = m v d$$

Where:
- $\phi$ is the angle between $\mathbf{r}$ and $\mathbf{v}$.
- $d = r\sin\phi$ is the perpendicular distance (moment arm) from origin $O$ to the tangent line of velocity.

In plane polar coordinates $(r, \theta)$ where $\mathbf{r} = r\mathbf{e}_r$ and $\mathbf{v} = \dot{r}\mathbf{e}_r + r\dot{\theta}\mathbf{e}_\theta$:

$$\mathbf{H}_O = (r\mathbf{e}_r) \times m(\dot{r}\mathbf{e}_r + r\dot{\theta}\mathbf{e}_\theta) = m r^2 \dot{\theta}\,(\mathbf{e}_r \times \mathbf{e}_\theta) = m r^2 \dot{\theta}\,\mathbf{k}$$

$$H_O = m r^2 \dot{\theta}$$

#### Rate of Change of Angular Momentum
Differentiating $\mathbf{H}_O$ with respect to time:

$$\dot{\mathbf{H}}_O = \frac{d}{dt}(\mathbf{r} \times m\mathbf{v}) = (\dot{\mathbf{r}} \times m\mathbf{v}) + (\mathbf{r} \times m\dot{\mathbf{v}})$$

Recall that $\dot{\mathbf{r}} = \mathbf{v}$. Because the cross product of any vector with itself is zero ($\mathbf{v} \times m\mathbf{v} = m(\mathbf{v} \times \mathbf{v}) = \mathbf{0}$):

$$\dot{\mathbf{H}}_O = \mathbf{0} + \mathbf{r} \times m\mathbf{a} = \mathbf{r} \times \sum \mathbf{F}$$

Since the moment of the resultant force about $O$ is $\sum \mathbf{M}_O = \mathbf{r} \times \sum \mathbf{F}$, we obtain:

$$\sum \mathbf{M}_O = \dot{\mathbf{H}}_O$$

The sum of moments about a fixed point $O$ of all external forces acting on a particle equals the time rate of change of its angular momentum about $O$.

---

### 2.3 Central Force Motion & Kepler's Second Law

A **central force** is a force whose line of action passes through a single fixed point $O$ (the center of force) at all times:

$$\mathbf{F} = F(r)\,\mathbf{e}_r$$

Examples include gravitational attraction ($\mathbf{F} = -G\frac{M m}{r^2}\mathbf{e}_r$) and electrostatic Coulomb forces.

Because $\mathbf{F}$ is collinear with position vector $\mathbf{r}$:

$$\sum \mathbf{M}_O = \mathbf{r} \times \mathbf{F} = \mathbf{r} \times [F(r)\,\mathbf{e}_r] = \mathbf{0}$$

Therefore:

$$\dot{\mathbf{H}}_O = \mathbf{0} \implies \mathbf{H}_O = \mathbf{r} \times m\mathbf{v} = \text{constant}$$

#### Consequences of Angular Momentum Conservation:
1. **Planar Trajectory:** Since $\mathbf{r} \times m\mathbf{v} = \mathbf{H}_O = \text{const.}$, both $\mathbf{r}$ and $\mathbf{v}$ always lie in a plane perpendicular to the constant vector $\mathbf{H}_O$. The motion is strictly two-dimensional.
2. **Constant Transverse Area Sweep:** In polar coordinates, $H_O = m r^2 \dot{\theta} = \text{const.} \implies r^2 \dot{\theta} = h = \text{const.}$ (specific angular momentum).
3. **Kepler's Second Law:** The differential area swept out by radius vector $\mathbf{r}$ in time $dt$ is:

$$dA = \frac{1}{2} r (r\,d\theta) = \frac{1}{2} r^2 \dot{\theta}\,dt \implies \frac{dA}{dt} = \frac{1}{2} r^2 \dot{\theta} = \frac{h}{2} = \text{constant}$$

The radius vector sweeps out **equal areas in equal intervals of time**. When an orbiting satellite approaches periapsis (smallest $r$), its angular speed $\dot{\theta}$ and linear speed $v$ must increase so that $r v_{\perp} = \text{constant}$.

---

## 3. The 5-Step FBD $\equiv$ KD Protocol

The most common error in student dynamics is treating acceleration as an external force and haphazardly drawing it on the Free-Body Diagram. To prevent this, professional engineers enforce the **Free-Body Diagram $\equiv$ Kinetic Diagram** method.

<LectureFigure
  src="/images/physics/mod3/mod3_fbd_kinetic_diagram.png"
  caption="Dynamic equivalence between the Free-Body Diagram (all external forces ΣF) and the Kinetic Diagram (resultant inertial/effective vector ma)."
  slide="Mod 3 · Slide 10"
  max-width="640px"
/>

### The S-M-A-R&T Protocol:
1. **Strategy:** Identify the physical system, degrees of freedom, and constraints. Select the most natural coordinate system (Cartesian for linear motion, Path coordinates for curved trajectories of known radius, Polar for radial arms or central fields).
2. **Modeling (FBD):** Isolate the particle with an imaginary boundary. Draw all active applied forces and passive constraint forces (normal support, tension, friction opposing relative slip).
3. **Kinetic Modeling (KD):** Draw a separate diagram showing the particle with its inertial vector $m\mathbf{a}$ resolved into matching coordinate components.
4. **Analysis ($\sum \mathbf{F} = m\mathbf{a}$):** Formulate the scalar scalar equations of motion along each coordinate axis. Combine with kinematic relations ($a_t = v\,dv/ds$, $a_n = v^2/\rho$, etc.).
5. **Reflect & Think:** Check units, examine limiting cases (e.g., if $\mu \to 0$ or $a \to 0$, does the static equilibrium equation emerge?), and confirm vector signs.

---

## 4. Equations of Motion in Three Coordinate Systems

Depending on the geometry of the physical constraint, we decompose $\sum \mathbf{F} = m\mathbf{a}$ into three standard coordinate frames:

```
+---------------------+------------------------------------+------------------------------------+
|  Coordinate Frame   |         Acceleration Vector        |        Equations of Motion         |
+---------------------+------------------------------------+------------------------------------+
| Rectangular         | a_x = d²x/dt²                      | Σ F_x = m a_x                      |
| (x, y, z)           | a_y = d²y/dt²                      | Σ F_y = m a_y                      |
|                     | a_z = d²z/dt²                      | Σ F_z = m a_z                      |
+---------------------+------------------------------------+------------------------------------+
| Path Coordinates    | a_t = dv/dt = v (dv/ds)            | Σ F_t = m a_t = m (dv/dt)          |
| (t, n, b)           | a_n = v² / ρ                       | Σ F_n = m a_n = m (v² / ρ)         |
|                     | a_b = 0                            | Σ F_b = 0                          |
+---------------------+------------------------------------+------------------------------------+
| Polar Coordinates   | a_r = d²r/dt² - r (dθ/dt)²         | Σ F_r = m (d²r/dt² - r θ̇²)         |
| (r, θ)              | a_θ = r d²θ/dt² + 2 (dr/dt)(dθ/dt) | Σ F_θ = m (r θ̈ + 2 ṙ θ̇)           |
+---------------------+------------------------------------+------------------------------------+
```

---

### 4.1 Rectangular (Cartesian) Coordinates

Used when motion is rectilinear or when external forces are defined along orthogonal fixed directions:

$$\sum F_x = m a_x = m \ddot{x}$$

$$\sum F_y = m a_y = m \ddot{y}$$

$$\sum F_z = m a_z = m \ddot{z}$$

---

### 4.2 Normal & Tangential (Path) Coordinates

When a particle moves along a curved path in a plane, the natural axes move with the particle:
- Tangential unit vector $\mathbf{e}_t$: Tangent to the path, pointing in the direction of increasing arc length $s$.
- Normal unit vector $\mathbf{e}_n$: Perpendicular to $\mathbf{e}_t$, pointing toward the **center of curvature** $C$.
- Binormal unit vector $\mathbf{e}_b = \mathbf{e}_t \times \mathbf{e}_n$: Perpendicular to the osculating plane.

The equations of motion are:

$$\sum F_t = m a_t = m \frac{dv}{dt} = m v \frac{dv}{ds}$$

$$\sum F_n = m a_n = m \frac{v^2}{\rho}$$

$$\sum F_b = 0$$

Where $\rho$ is the radius of curvature:

$$\rho = \frac{\left[1 + (dy/dx)^2\right]^{3/2}}{\left|\frac{d^2y}{dx^2}\right|}$$

<LectureFigure
  src="/images/physics/mod3/mod3_path_coordinates_car.png"
  caption="Navigating curved trajectories using Normal-Tangential path coordinates: tangential acceleration (a_t = dv/dt) changes speed, while normal acceleration (a_n = v²/ρ) points toward the center of curvature."
  slide="Mod 3 · Slide 12"
  max-width="740px"
/>

#### Physical Application: Roller-Coaster Loop-the-Loop
Consider a cart of mass $m$ traversing a circular loop of radius $R$ in a vertical plane:
1. **At the Top of the Loop:**
   Both gravity $W = mg$ and normal track reaction $N$ act vertically downward (inward along $\mathbf{e}_n$):
   $$\sum F_n = N + mg = m \frac{v^2}{R} \implies N = m\left(\frac{v^2}{R} - g\right)$$
   For the cart to maintain contact without dropping off, the normal force must be non-negative ($N \ge 0$). The **critical minimum speed** at the apex is:
   $$v_{crit} = \sqrt{g R}$$
   If $v < \sqrt{g R}$, $N$ would have to be negative (inward tension), which a free track cannot supply; the cart leaves the track and enters free-fall projectile motion.

2. **At the Bottom of the Loop:**
   Normal reaction points upward along $\mathbf{e}_n$, while gravity acts downward:
   $$\sum F_n = N - mg = m \frac{v^2}{R} \implies N = m\left(g + \frac{v^2}{R}\right)$$
   The rider experiences maximum apparent weight (heavy "g-force").

```
             Loop-the-Loop Normal Force Distribution
                         Apex: N + mg = m v²/R
                               [ o ]
                              /     \
                             /   |   \
                            |    |    |
                            |    v g  |
                             \       /
                              \ [o] /
                          Bottom: N - mg = m v²/R
```

---

#### Physical Application: Banked Highway Curves
When an automobile of mass $m$ travels around a horizontal circular curve of radius $\rho$ banked at an angle $\theta$:

```
                        Banked Curve Cross-Section
                                   y ^
                                     |    N
                                     |   ^ 
                                     |  / θ
                                     | /   
                              +------|/------+
                              |    [car]     |
                              +-----/--------+ 
                             θ    /  |
                       ----------*---|---------> x (toward center C)
                                     | mg
```

1. **Ideal Banking (No Friction Needed, $\mu_s = 0$):**
   - Vertical equilibrium: $\sum F_y = N\cos\theta - mg = 0 \implies N\cos\theta = mg$.
   - Horizontal centripetal acceleration: $\sum F_n = N\sin\theta = m \frac{v_0^2}{\rho}$.
   Dividing the two equations eliminates normal force $N$:

   $$\tan\theta = \frac{v_0^2}{g \rho} \iff v_0 = \sqrt{g \rho \tan\theta}$$

   At speed $v_0$ (rated design speed), the vehicle requires zero lateral friction from tires.

2. **With Friction ($\mu_s > 0$): Safe Speed Window:**
   - **Maximum Speed $v_{max}$ (Impending slip up the bank):** Friction $F_f = \mu_s N$ acts down the incline:
     $$v_{max} = \sqrt{g \rho \frac{\sin\theta + \mu_s \cos\theta}{\cos\theta - \mu_s \sin\theta}} = \sqrt{g \rho \tan(\theta + \phi_s)}$$
   - **Minimum Speed $v_{min}$ (Impending slip down the bank):** Friction $F_f = \mu_s N$ acts up the incline:
     $$v_{min} = \sqrt{g \rho \frac{\sin\theta - \mu_s \cos\theta}{\cos\theta + \mu_s \sin\theta}} = \sqrt{g \rho \tan(\theta - \phi_s)}$$
   Where $\phi_s = \tan^{-1}\mu_s$ is the angle of static friction.

---

### 4.3 Radial & Transverse (Polar) Coordinates

When motion is governed by a radial arm, telescoping boom, or central gravitational field:

$$\sum F_r = m a_r = m (\ddot{r} - r\dot{\theta}^2)$$

$$\sum F_\theta = m a_\theta = m (r\ddot{\theta} + 2\dot{r}\dot{\theta})$$

- $-r\dot{\theta}^2$ represents **centripetal acceleration** (directed inward toward the origin).
- $2\dot{r}\dot{\theta}$ represents **Coriolis acceleration** (arising from radial movement across rotating transverse streamlines).

---

## 5. D'Alembert's Principle & Dynamic Equilibrium

In 1743, French mathematician Jean le Rond d'Alembert formulated a revolutionary concept in analytical mechanics. Rewriting Newton's Second Law:

$$\sum \mathbf{F} - m\mathbf{a} = \mathbf{0}$$

We define the vector $-m\mathbf{a}$ as the **inertia vector** (or *D'Alembert force*). 

::: info D'Alembert's Principle
An accelerating body can be brought into formal **dynamic equilibrium** by adding an imaginary inertia vector $-m\mathbf{a}$ (directed strictly opposite to acceleration) to the system of external forces acting on the body.
:::

$$\sum \mathbf{F}_{ext} + \mathbf{F}_{inertia} = \mathbf{0}$$

```
    [ Real External Forces ]           [ Inertia Vector ]           [ Dynamic Equilibrium ]
          \   |   /                          |                              \   |   /
           \  |  /                           |                               \  |  /
      -----[ m ]-----> a        +        <---[ -m a ]         ====      <-----[ m ]----->
            / | \                                                            / | \
           /  |  \                                                          /  |  \
           Σ F = m a                     Inertia Force                  Σ F + (-m a) = 0
```

### Engineering Power of D'Alembert's Principle:
1. **Statics Toolset Becomes Available:** Once in dynamic equilibrium, all familiar static equations apply:
   $$\sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0$$
2. **Arbitrary Moment Centers:** You may take moments about **any arbitrary point $P$** (even a point that is moving or not the center of mass), provided the moment of the inertia vector $-m\mathbf{a}$ about $P$ is included:
   $$\sum \mathbf{M}_P = \sum \mathbf{M}_{P, ext} + \mathbf{r}_{G/P} \times (-m\mathbf{a}) = \mathbf{0}$$
   This simplifies rigid body problems where taking moments about a tipping corner or instant center eliminates unknown support reactions!

---

## 6. Dependent Motion Kinetics of Coupled Multi-Particle Systems

When two or more bodies are interconnected by inextensible cables wrapped around pulleys, their accelerations are kinematically coupled.

```
                  Coupled Pulley-Block System
                     +-------------------+
                     |      [ M_A ]      |----> T
                     +-------------------+
                               |
                              ( O ) Fixed Pulley
                               |
                               | Cable
                               |
                             [ M_B ]
                               v a_B
```

### Protocol for Coupled Systems:
1. **Establish Coordinate Datums:** Measure position coordinates $x_A, y_B$ from fixed support datums along the line of motion of each block.
2. **Write Cable Constraint Equations:**
   $$x_A + n\,y_B = L \implies v_A + n\,v_B = 0 \implies a_A + n\,a_B = 0$$
3. **Draw Individual FBDs and KDs:** Separate each block and moving pulley. Express cable tensions $T$.
4. **Formulate Equations of Motion:** Apply $\sum \mathbf{F} = m\mathbf{a}$ to each body.
5. **Simultaneous Solution:** Combine $N$ equations of motion with the kinematic constraint equation to solve for the system acceleration and cable tensions.

---

## 7. Comprehensive Step-by-Step Worked Problems

### Worked Problem 3.1: Pushed Block on Horizontal Surface with Friction
*(From PSG IAS Lecture Slide 13 & Beer & Johnston)*

A block of mass $m = 200\text{ kg}$ rests on a rough horizontal surface. A pushing force $\mathbf{P}$ is applied at an angle of $30^\circ$ below the horizontal. The coefficient of kinetic friction between the block and the ground is $\mu_k = 0.25$. Determine the magnitude of force $\mathbf{P}$ required to impart an acceleration of $a = 3.0\text{ m/s}^2$ to the right. Take $g = 9.81\text{ m/s}^2$.

*(Also evaluate the classic US Customary textbook variant: $W = 200\text{ lb}, a = 10\text{ ft/s}^2, \mu_k = 0.25$ to verify consistency).*

<LectureFigure
  src="/images/physics/mod3/mod3_block_200kg_pull.png"
  caption="Block on a rough horizontal surface acted upon by force P at 30° showing Free-Body Diagram = Kinetic Diagram (Slide 13's textbook figure illustrates the 200 lb / 200 kg 30° inclined force FBD = Kinetic Diagram geometry)."
  slide="Mod 3 · Slide 13"
  max-width="660px"
/>

::: details Click to view Step-by-Step Solution

#### Step 1: Geometry and Coordinate System
- $+x$ horizontally to the right (direction of acceleration $\mathbf{a}$).
- $+y$ vertically upward.
- Force components:
  $$P_x = P \cos 30^\circ = 0.8660 P$$
  $$P_y = -P \sin 30^\circ = -0.5000 P \quad (\text{pushing downward into the surface})$$

#### Step 2: Vertical Equilibrium ($\sum F_y = m a_y = 0$)
Because the block cannot penetrate the rigid surface, $a_y = 0$:
$$\sum F_y = N - W - P\sin 30^\circ = 0$$
$$N = W + P\sin 30^\circ = mg + 0.5 P$$
$$N = (200)(9.81) + 0.5 P = 1962 + 0.5 P$$

Notice that pushing downward at $30^\circ$ significantly **increases** the normal contact force $N$, which proportionally elevates friction!

#### Step 3: Kinetic Friction Force
Since the block is accelerating to the right, kinetic friction acts to the left:
$$F_k = \mu_k N = 0.25 (1962 + 0.5 P) = 490.5 + 0.125 P$$

#### Step 4: Horizontal Equation of Motion ($\sum F_x = m a_x$)
$$\sum F_x = P\cos 30^\circ - F_k = m a$$
$$0.8660 P - (490.5 + 0.125 P) = (200)(3.0)$$
$$(0.8660 - 0.125) P - 490.5 = 600$$
$$0.7410 P = 600 + 490.5 = 1090.5$$
$$P = \frac{1090.5}{0.7410} = 1471.66\text{ N} \approx 1472\text{ N}$$

---

#### Textbook Imperial Variant Verification:
For $W = 200\text{ lb}$, $m = \frac{W}{g} = \frac{200}{32.2} = 6.211\text{ slugs}$, $a = 10\text{ ft/s}^2$:
- $N = 200 + 0.5 P$
- $F_k = 0.25(200 + 0.5P) = 50 + 0.125 P$
- $\sum F_x = P\cos 30^\circ - F_k = m a$
  $$0.8660 P - (50 + 0.125 P) = (6.211)(10) = 62.11$$
  $$0.7410 P = 112.11 \implies P = \frac{112.11}{0.7410} = 151.3\text{ lb} \approx 151\text{ lb}$$
The SI solution ($1472\text{ N}$) and imperial benchmark ($151\text{ lb}$) match engineering mechanics theory with complete fidelity.
:::

---

### Worked Problem 3.2: Banked Curve Design and Speed Limits
A passenger car of mass $m = 1200\text{ kg}$ negotiates a circular highway curve of radius $\rho = 150\text{ m}$. The roadway is banked at an angle of $\theta = 15^\circ$. The coefficient of static friction between tires and pavement is $\mu_s = 0.30$.
1. Determine the rated design speed $v_0$ (at which no lateral friction is needed).
2. Determine the maximum safe speed $v_{max}$ before the car slips up the bank.
3. Determine the minimum speed $v_{min}$ below which the car slides down the bank.

::: details Click to view Step-by-Step Solution

#### Part 1: Rated Design Speed $v_0$ ($\mu_s = 0$)
$$\tan\theta = \frac{v_0^2}{g \rho} \implies v_0 = \sqrt{g \rho \tan\theta}$$
$$v_0 = \sqrt{(9.81)(150)\tan(15^\circ)} = \sqrt{1471.5 \times 0.2679} = \sqrt{394.29} = 19.86\text{ m/s}$$
In $\text{km/h}$:
$$v_0 = 19.86 \times 3.6 = 71.48\text{ km/h}$$

#### Part 2: Maximum Speed $v_{max}$ (Impending Slip Upward)
At maximum speed, the car tends to skid outwards up the incline, so friction $F_f = \mu_s N$ acts down the incline:
$$\phi_s = \tan^{-1}(\mu_s) = \tan^{-1}(0.30) = 16.70^\circ$$
$$v_{max} = \sqrt{g \rho \tan(\theta + \phi_s)}$$
$$\theta + \phi_s = 15^\circ + 16.70^\circ = 31.70^\circ$$
$$v_{max} = \sqrt{(9.81)(150)\tan(31.70^\circ)} = \sqrt{1471.5 \times 0.6176} = \sqrt{908.79} = 30.15\text{ m/s}$$
In $\text{km/h}$:
$$v_{max} = 30.15 \times 3.6 = 108.53\text{ km/h}$$

#### Part 3: Minimum Speed $v_{min}$ (Impending Slip Downward)
At very low speeds, gravity pulls the car down the incline, so friction $F_f = \mu_s N$ acts up the incline:
$$v_{min} = \sqrt{g \rho \tan(\theta - \phi_s)}$$
Since $\phi_s = 16.70^\circ > \theta = 15^\circ$:
$$\theta - \phi_s = 15^\circ - 16.70^\circ = -1.70^\circ < 0$$
Because the friction angle exceeds the bank angle ($\phi_s > \theta$), the car **will not slip down even if it comes to a complete dead stop ($v = 0$)**!
$$v_{min} = 0\text{ km/h}$$
The vehicle is safely supported at rest on the $15^\circ$ bank because the slope is smaller than the angle of repose ($\theta < \phi_s$).
:::

---

### Worked Problem 3.3: Coupled Pulley System Solved via D'Alembert's Principle
Block $A$ of mass $m_A = 30\text{ kg}$ rests on a rough horizontal tabletop with $\mu_k = 0.20$. It is connected by a light inextensible cord passing over a frictionless, massless pulley to hanging block $B$ of mass $m_B = 20\text{ kg}$. The system is released from rest.
Determine:
1. The common acceleration $a$ of the blocks.
2. The tension $T$ in the cord.

Solve using **D'Alembert's Dynamic Equilibrium**.

```
                           D'Alembert Dynamic Equilibrium
               N_A ^
                   |    m_A = 30 kg   T
          F_k <----+----[ A ]--------->----( O )
          <---     |                         |
         m_A a     v W_A = m_A g             | T
                                             v
                                           +---+
                                           | B |  <-- W_B = m_B g (down)
                                           +---+  <-- m_B a (inertia, up)
```

::: details Click to view Step-by-Step Solution

#### Step 1: Kinematic Constraint
Since the cable is inextensible:
$$x_A + y_B = L \implies a_A = a_B = a$$

#### Step 2: Dynamic Equilibrium of Block $A$
Real external forces:
- Weight $W_A = m_A g = 30 \times 9.81 = 294.3\text{ N}\downarrow$
- Normal reaction $N_A = 294.3\text{ N}\uparrow$
- Kinetic friction $F_k = \mu_k N_A = 0.20 \times 294.3 = 58.86\text{ N}\leftarrow$
- Cable tension $T\to$
- D'Alembert inertia vector: $-m_A a = 30 a \leftarrow$

Applying dynamic horizontal equilibrium:
$$\sum F_x^{dyn} = T - F_k - m_A a = 0$$
$$T - 58.86 - 30 a = 0 \implies T = 58.86 + 30 a \quad \text{--- (Eq. 1)}$$

#### Step 3: Dynamic Equilibrium of Block $B$
Real external forces:
- Weight $W_B = m_B g = 20 \times 9.81 = 196.2\text{ N}\downarrow$
- Cable tension $T\uparrow$
- Acceleration is downward, so D'Alembert inertia vector acts **upward**: $-m_B a = 20 a \uparrow$

Applying dynamic vertical equilibrium:
$$\sum F_y^{dyn} = T + m_B a - W_B = 0$$
$$T + 20 a - 196.2 = 0 \implies T = 196.2 - 20 a \quad \text{--- (Eq. 2)}$$

#### Step 4: Simultaneous Solution
Equating Eq. 1 and Eq. 2:
$$58.86 + 30 a = 196.2 - 20 a$$
$$50 a = 196.2 - 58.86 = 137.34$$
$$a = \frac{137.34}{50} = 2.747\text{ m/s}^2 \approx 2.75\text{ m/s}^2$$

#### Step 5: Cord Tension
Substitute $a = 2.747\text{ m/s}^2$ into Eq. 1:
$$T = 58.86 + 30(2.747) = 58.86 + 82.41 = 141.27\text{ N} \approx 141.3\text{ N}$$
*(Check with Eq. 2: $T = 196.2 - 20(2.747) = 196.2 - 54.94 = 141.26\text{ N}$. Consistent!)*
:::

---

## 8. Summary & Mastery Checklist

Before proceeding to Section 3.2 on Friction & Machines, ensure you can:
- [x] State Newton's Second Law in both acceleration form ($\sum \mathbf{F} = m\mathbf{a}$) and momentum form ($\sum \mathbf{F} = \dot{\mathbf{L}}$).
- [x] Prove that for central forces, angular momentum $\mathbf{H}_O = \mathbf{r} \times m\mathbf{v}$ is strictly conserved and areal velocity $\frac{dA}{dt}$ is constant.
- [x] Decompose acceleration into Normal and Tangential components ($a_t = \dot{v}$, $a_n = v^2/\rho$) and determine critical speeds on vertical loops and banked curves.
- [x] State D'Alembert's Principle and apply inertia forces ($-m\mathbf{a}$) to solve dynamic problems through static equilibrium equations.
- [x] Solve coupled multi-body systems using simultaneous FBD/KD and kinematic cable constraints.
