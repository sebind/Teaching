# 2.2 Multi-Particle Systems & Curvilinear Motion

In Chapter 2.1, we focused on the motion of a solitary particle along a single rectilinear coordinate axis. In real-world engineering systems, however, machines consist of **multiple interacting components**—such as elevators connected to counterweights, or high-speed robotic manipulators tracing curved paths through 3D space.

In this chapter, we develop the kinematics of **Independent & Relative Motion**, formulate the calculus of **Dependent Motion (Pulley-Cable Constraints)**, and transition to **Curvilinear Kinematics** and the **Hodograph**.

---

## 1. Relative Motion of Two Particles Along a Line

When two particles $A$ and $B$ move along the same straight line, their positions are measured relative to a common fixed origin $O$ by coordinates $x_A$ and $x_B$.

```
         Origin O          Particle A            Particle B
    <-------+------------------*----------------------*--------> x
            |                  x_A                    x_B
            |<---------------> |                      |
            |                  |<-------------------->|
            |                          x_{B/A}
```

The **relative position coordinate** of $B$ with respect to $A$ (denoted $x_{B/A}$) represents the directed vector from $A$ to $B$:
$$
x_{B/A} = x_B - x_A \iff x_B = x_A + x_{B/A}
$$

Differentiating with respect to time yields the relative velocity and acceleration:
$$
v_{B/A} = v_B - v_A \iff v_B = v_A + v_{B/A}
$$
$$
a_{B/A} = a_B - a_A \iff a_B = a_A + a_{B/A}
$$

### Kinematic Sign Convention & Interpretation

| Relative Quantity | Mathematical Sign | Physical Interpretation |
| :--- | :--- | :--- |
| **$x_{B/A}$** | Positive ($> 0$) | Particle $B$ is located to the right ($+x$ direction) of particle $A$. |
| **$x_{B/A}$** | Negative ($< 0$) | Particle $B$ is located to the left ($-x$ direction) of particle $A$. |
| **$v_{B/A}$** | Positive ($> 0$) | As observed by a rider on particle $A$, particle $B$ appears to move to the right. |
| **$v_{B/A}$** | Negative ($< 0$) | As observed by a rider on particle $A$, particle $B$ appears to move to the left. |

---

## 2. Dependent Motion in Block-and-Pulley Systems

In many mechanical hoisting systems, cranes, and elevator mechanisms, the position of one body depends strictly upon the position of another because they are interconnected by inextensible cables wrapped over pulleys. This is called **Dependent Motion**.

### The 4-Step Cable Constraint Protocol
To solve any block-and-pulley dependent motion problem without guessing signs, follow Dr. Sebin Devasia's **4-Step Cable Constraint Protocol**:

```
+--------------------------------------------------------------------------------+
|                     4-STEP CABLE CONSTRAINT PROTOCOL                           |
+--------------------------------------------------------------------------------+
| Step 1: Choose a Fixed Datum Line                                              |
|         Select an immovable reference line (e.g., ceiling or fixed pulley axle)|
| Step 2: Express Total Cable Length L                                           |
|         Define position coordinates xᵢ from datum to each moving block         |
| Step 3: Differentiate Once (dL/dt = 0)                                         |
|         Sum of velocity coefficients equals 0 (inextensible cable)             |
| Step 4: Differentiate Twice (d²L/dt² = 0)                                      |
|         Obtain direct algebraic coupling between block accelerations             |
+--------------------------------------------------------------------------------+
```

### Case A: Single Degree of Freedom (1-DOF) Pulley System
Consider block $A$ connected to block $B$ by a single inextensible cable passing over a fixed pulley and a movable pulley supporting block $B$:

```
    //////////////// Fixed Ceiling Datum ////////////////
           (O) Fixed Pulley
            | \
            |  \
            |   (O) Movable Pulley supporting Block B
            |   | |
    [ A ]   |   [ B ]
      x_A   |     x_B
```

1. **Datum:** Choose the horizontal ceiling as the fixed datum ($x = 0$, positive downward).
2. **Length Equation:** 
   The total length $L$ of the cable consists of segment $x_A$, two segments supporting pulley $B$ ($2x_B$), plus constant arcs wrapping over the pulleys:
   $$
   x_A + 2x_B + \text{constants} = L
   $$
   $$
   x_A + 2x_B = C \quad (\text{where } C = L - \text{constants})
   $$
3. **First Time Derivative (Velocity Constraint):**
   Since cable length is constant ($dC/dt = 0$):
   $$
   \frac{dx_A}{dt} + 2\frac{dx_B}{dt} = 0 \implies v_A + 2v_B = 0 \iff v_A = -2v_B
   $$
4. **Second Time Derivative (Acceleration Constraint):**
   $$
   \frac{dv_A}{dt} + 2\frac{dv_B}{dt} = 0 \implies a_A + 2a_B = 0 \iff a_A = -2a_B
   $$

*Mechanical Advantage:* If block $B$ descends by $1\text{ m}$ ($v_B = +1\text{ m/s}$), block $A$ must rise by $2\text{ m}$ ($v_A = -2\text{ m/s}$). The system has **1 Degree of Freedom (1-DOF)** because specifying the motion of one block uniquely determines the motion of the other.

### Case B: Two Degrees of Freedom (2-DOF) System
Consider three blocks $A$, $B$, and $C$ interconnected by a multi-loop cable:
$$
2x_A + 2x_B + x_C = C
$$
Differentiating successively:
$$
2v_A + 2v_B + v_C = 0
$$
$$
2a_A + 2a_B + a_C = 0
$$
This system has **2 Degrees of Freedom (2-DOF)**: the motions of two blocks must be independently specified before the motion of the third can be calculated.

---

## 3. Comprehensive Worked Problem: Ball & Moving Platform Elevator

This classic problem from Beer & Johnston (p.641) illustrates independent motion with relative kinematics.

### Problem Statement
An open-platform maintenance elevator $E$ is ascending an elevator shaft at a steady, constant speed of $v_E = 2\text{ m/s}$. At the exact instant when the platform is $y_{E0} = 5\text{ m}$ above the shaft pit, a worker throws a small ball $B$ vertically upward from an initial elevation of $y_{B0} = 12\text{ m}$ with an initial upward velocity of $v_{B0} = 18\text{ m/s}$.
Neglecting air drag and taking $g = 9.81\text{ m/s}^2$:
1. Determine the time $t$ at which the ball hits the ascending platform.
2. Determine the elevation $y$ above the shaft pit where impact occurs.
3. Determine the relative velocity $v_{B/E}$ of the ball with respect to the platform at the moment of impact.

```
       y ^
         |    * Ball B (y_B0 = 12 m, v_B0 = +18 m/s)
         |    |
         |    v (accelerating downward under gravity)
         |
         |   [===] Elevator Platform E (y_E0 = 5 m, v_E = +2 m/s const.)
         |    ^
         |    |
       0 +----------------------- Shaft Pit Ground Datum
```

::: details Click to view Step-by-Step Solution
#### Step 1: Kinematic Equation for the Ascending Elevator E
Because the platform moves at a constant upward speed ($a_E = 0$):
$$
y_E(t) = y_{E0} + v_E t = 5 + 2t\text{ (m)}
$$

#### Step 2: Kinematic Equation for Free-Falling Ball B
The ball experiences constant gravitational deceleration ($a_B = -g = -9.81\text{ m/s}^2$):
$$
y_B(t) = y_{B0} + v_{B0} t - \frac{1}{2}gt^2
$$
$$
y_B(t) = 12 + 18t - \frac{1}{2}(9.81)t^2 = 12 + 18t - 4.905t^2\text{ (m)}
$$

#### Step 3: Collision Condition ($y_B = y_E$)
The ball strikes the platform when their vertical elevations are identical:
$$
12 + 18t - 4.905t^2 = 5 + 2t
$$
Rearranging into standard quadratic form $at^2 + bt + c = 0$:
$$
4.905t^2 - 16t - 7 = 0
$$

Applying the quadratic formula $t = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$$
t = \frac{16 \pm \sqrt{(-16)^2 - 4(4.905)(-7)}}{2(4.905)} = \frac{16 \pm \sqrt{256 + 137.34}}{9.81}
$$
$$
t = \frac{16 \pm \sqrt{393.34}}{9.81} = \frac{16 \pm 19.833}{9.81}
$$

Discarding the negative root ($t < 0$):
$$
t = \frac{16 + 19.833}{9.81} = \frac{35.833}{9.81} \approx \mathbf{3.653\text{ s}} \approx \mathbf{3.65\text{ s}}
$$

#### Step 4: Elevation of Impact
Substitute $t = 3.653\text{ s}$ into the elevator equation:
$$
y = y_E(3.653) = 5 + 2(3.653) = 5 + 7.306 = \mathbf{12.31\text{ m}} \approx \mathbf{12.30\text{ m}}
$$
- Verification via ball equation:
  $$
  y_B(3.653) = 12 + 18(3.653) - 4.905(3.653)^2 = 12 + 65.754 - 65.454 = 12.30\text{ m} \quad \checkmark
  $$

#### Step 5: Velocity of Ball & Relative Velocity at Impact
- **Velocity of Elevator:**
  $$
  v_E = +2.00\text{ m/s}
  $$
- **Velocity of Ball:**
  $$
  v_B(t) = v_{B0} - gt = 18 - 9.81(3.653) = 18 - 35.836 = -17.836\text{ m/s}
  $$
- **Relative Velocity $v_{B/E}$:**
  $$
  v_{B/E} = v_B - v_E = -17.836\text{ m/s} - (+2.00\text{ m/s}) = \mathbf{-19.84\text{ m/s}} \approx \mathbf{-19.81\text{ m/s}}
  $$
  To an observer riding on the elevator, the ball smashes into the floor at a relative downward speed of **$19.8\text{ m/s}$**!
:::

---

## 4. Foundations of Curvilinear Kinematics

When a particle moves along a curved path in two or three dimensions, its position vector changes in both **magnitude** and **direction**.

```
              y ^               Trajectory Curve
                |                  * P(t + Δt)
                |                 /|
                |   Δr (secant)  / |
                |       +-------+  |
                |      /         \ |
                |   r(t)          * P(t)
                |    /           /
                |   /         r(t + Δt)
                |  /           /
                O-+-----------+------> x
```

### Position & Displacement
- **Position Vector $\mathbf{r}(t)$:** Extends from fixed origin $O$ to particle $P$:
  $$
  \mathbf{r}(t) = x(t)\mathbf{i} + y(t)\mathbf{j} + z(t)\mathbf{k}
  $$
- **Displacement Vector $\Delta\mathbf{r}$:** The straight-line vector change between positions over interval $\Delta t$:
  $$
  \Delta\mathbf{r} = \mathbf{r}(t + \Delta t) - \mathbf{r}(t)
  $$

### Velocity & The Geometric Proof of Tangency
The instantaneous velocity vector is defined as the time derivative of position:
$$
\mathbf{v} = \lim_{\Delta t \to 0} \frac{\Delta\mathbf{r}}{\Delta t} = \frac{d\mathbf{r}}{dt} = \dot{\mathbf{r}}
$$

::: tip Geometric Proof: Why Velocity is Always Tangent to the Path
Consider the secant vector $\Delta\mathbf{r}$ connecting point $P(t)$ to point $P'(t + \Delta t)$ along the trajectory curve:
1. As the time increment $\Delta t$ approaches zero, point $P'$ slides along the curve toward point $P$.
2. The secant line passing through $P$ and $P'$ rotates, approaching the **tangent line to the curve at point $P$** in the limit.
3. Furthermore, the straight-line chord length $|\Delta\mathbf{r}|$ approaches the actual arc length traversed $\Delta s$:
   $$
   \lim_{\Delta t \to 0} \frac{|\Delta\mathbf{r}|}{\Delta s} = 1
   $$
4. Therefore, the scalar magnitude of velocity (speed $v$) equals the time rate of change of arc length:
   $$
   v = |\mathbf{v}| = \lim_{\Delta t \to 0} \frac{|\Delta\mathbf{r}|}{\Delta t} = \lim_{\Delta t \to 0} \left(\frac{|\Delta\mathbf{r}|}{\Delta s} \cdot \frac{\Delta s}{\Delta t}\right) = \frac{ds}{dt}
   $$

**Conclusion:** The velocity vector $\mathbf{v} = v\mathbf{e}_t$ is **always strictly tangent** to the physical trajectory curve and points in the direction of motion.
:::

---

## 5. Acceleration & The Hodograph

The instantaneous acceleration vector is the time derivative of the velocity vector:
$$
\mathbf{a} = \frac{d\mathbf{v}}{dt} = \dot{\mathbf{v}} = \frac{d^2\mathbf{r}}{dt^2} = \ddot{\mathbf{r}}
$$

Because velocity $\mathbf{v}$ is a vector, $\mathbf{a}$ accounts for:
1. Changes in the **magnitude** of velocity (speeding up or slowing down).
2. Changes in the **direction** of velocity (turning along a curve).

### The Hodograph Construction
To understand the direction of $\mathbf{a}$, Sir William Rowan Hamilton introduced the **Hodograph**:

```
        Physical Trajectory               Hodograph Curve
             y ^                               v_y ^
               |    Path Curve                     |       Hodograph Locus
               |      * P                          |          * Q
               |     / \                           |         / \
               |    /   \ v (tangent to path)      |        /   \ a = dv/dt (tangent to hodograph!)
               |   /     v                         |       /     v
               O--+-------+---> x                 O'------+-------+---> v_x
                                                       v(t)
```

1. Pick a fixed origin $O'$.
2. At every instant $t$, plot the velocity vector $\mathbf{v}(t)$ radiating from $O'$.
3. As the particle traverses its physical path, the tip of vector $\mathbf{v}(t)$ traces a continuous curve in velocity-space called the **Hodograph**.

::: warning Fundamental Kinematic Discovery: Where Does Acceleration Point?
- **Property 1:** The acceleration vector $\mathbf{a} = d\mathbf{v}/dt$ is **strictly tangent to the Hodograph curve** (not tangent to the physical path!).
- **Property 2:** On the physical path, the acceleration vector $\mathbf{a}$ **never points tangent to the path** (unless the path is a straight line). Because any curve bends, $\mathbf{a}$ always points toward the **concave (inner) side of the physical trajectory**!
:::

---

## 6. Rectangular 3D Components of Curvilinear Motion

Expressing curvilinear motion in 3D Cartesian coordinates:
$$
\mathbf{r} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}
$$
$$
\mathbf{v} = \frac{d\mathbf{r}}{dt} = \dot{x}\mathbf{i} + \dot{y}\mathbf{j} + \dot{z}\mathbf{k} = v_x\mathbf{i} + v_y\mathbf{j} + v_z\mathbf{k}
$$
$$
\mathbf{a} = \frac{d\mathbf{v}}{dt} = \ddot{x}\mathbf{i} + \ddot{y}\mathbf{j} + \ddot{z}\mathbf{k} = a_x\mathbf{i} + a_y\mathbf{j} + a_z\mathbf{k}
$$

Magnitudes are given by the 3D Pythagorean theorem:
$$
v = \sqrt{v_x^2 + v_y^2 + v_z^2}
$$
$$
a = \sqrt{a_x^2 + a_y^2 + a_z^2}
$$

### The Independent Integration Principle
In rectangular coordinates, the unit vectors $\mathbf{i}$, $\mathbf{j}$, and $\mathbf{k}$ have fixed lengths and fixed spatial orientations. Their time derivatives are identically zero:
$$
\frac{d\mathbf{i}}{dt} = \frac{d\mathbf{j}}{dt} = \frac{d\mathbf{k}}{dt} = \mathbf{0}
$$

Because of this orthogonality, **the motion along $x$, the motion along $y$, and the motion along $z$ can be integrated completely independently of one another**! 

This profound property forms the mathematical foundation of **Projectile Motion**, which we master in Chapter 2.3.
