---
title: 5.1 Linear Impulse-Momentum & Conservation of Momentum
description: Principle of linear impulse and momentum, impulsive versus non-impulsive forces, system of particles, and conservation of linear momentum.
---

# 5.1 Linear Impulse-Momentum & Conservation of Momentum

::: tip Pedagogical Objective
In Module 3, we related force and acceleration through instantaneous differential equations ($\sum \mathbf{F} = m\mathbf{a}$). In Module 4, we integrated Newton's Second Law over spatial displacement to relate force, distance, and speed ($T_1 + U_{1\to 2} = T_2$).

What happens when forces act over a **specified interval of time**, or when forces are so large and act over such an infinitesimal duration (microsecond impact shocks, explosions, bat-ball collisions) that measuring displacement is impossible?

We integrate Newton's Second Law with respect to **time** $t$. This establishes the **Principle of Linear Impulse and Momentum** ($m\mathbf{v}_1 + \mathbf{Imp}_{1\to 2} = m\mathbf{v}_2$) and the fundamental law of **Conservation of Linear Momentum**.
:::

---

## 1. Derivation of the Principle of Linear Impulse and Momentum

### 1.1 From Newton's Second Law to Linear Impulse

Consider a particle of constant mass $m$ moving under the action of a resultant force $\sum \mathbf{F}$.
Newton's Second Law states:

$$\sum \mathbf{F} = \frac{d\mathbf{p}}{dt} = \frac{d}{dt}(m\mathbf{v})$$

Multiplying both sides by the differential time element $dt$:

$$\sum \mathbf{F}\,dt = d(m\mathbf{v})$$

Integrating both sides from time $t_1$ (where velocity is $\mathbf{v}_1$) to time $t_2$ (where velocity is $\mathbf{v}_2$):

$$\int_{t_1}^{t_2} \sum \mathbf{F}\,dt = m\mathbf{v}_2 - m\mathbf{v}_1$$

We define the vector integral on the left-hand side as the **Linear Impulse** ($\mathbf{Imp}_{1\to 2}$) of the resultant force:

$$\mathbf{Imp}_{1\to 2} = \int_{t_1}^{t_2} \sum \mathbf{F}\,dt$$

Rearranging into standard vector momentum balance form:

$$m\mathbf{v}_1 + \sum \int_{t_1}^{t_2} \mathbf{F}\,dt = m\mathbf{v}_2$$

Or concisely:

$$m\mathbf{v}_1 + \mathbf{Imp}_{1\to 2} = m\mathbf{v}_2$$

::: info Statement of the Principle of Linear Impulse and Momentum
The final linear momentum vector $m\mathbf{v}_2$ of a particle at time $t_2$ equals the vector sum of its initial linear momentum vector $m\mathbf{v}_1$ at time $t_1$ and the total linear impulse $\mathbf{Imp}_{1\to 2}$ of all external forces acting on the particle during the time interval $\Delta t = t_2 - t_1$.
:::

```
    [ Initial Momentum ]       [ Impulse of Forces ]       [ Final Momentum ]
           m v_1          +      ∫_{t1}^{t2} F dt     =          m v_2
           Vector                     Vector                    Vector
```

---

### 1.2 Graphical Impulse-Momentum Vector Diagrams

Like the Free-Body Diagram $\equiv$ Kinetic Diagram method, impulse-momentum problems are solved by drawing three separate diagrams representing the vector balance:

```
     [ Initial Momentum Diagram ]     [ Impulse Diagram ]     [ Final Momentum Diagram ]
                   y                                y                         y
                   ^                                ^                         ^
                   |    m v_1                       |   F Δt                  |    m v_2
                   |   ^                            |   ^                     |   ^
                   |  /                             |  /                      |  /
                   *------> x           +           *------> x      =         *------> x
                 (at t_1)                    (Interval t_1 to t_2)          (at t_2)
```

### 1.3 Scalar Component Equations
Because linear momentum and impulse are true vectors, the principle resolves into three independent scalar equations in 3D Cartesian space:

$$m(v_x)_1 + \sum \int_{t_1}^{t_2} F_x\,dt = m(v_x)_2$$

$$m(v_y)_1 + \sum \int_{t_1}^{t_2} F_y\,dt = m(v_y)_2$$

$$m(v_z)_1 + \sum \int_{t_1}^{t_2} F_z\,dt = m(v_z)_2$$

---

### 1.4 Linear Impulse as Area Under the Force-Time Graph

When force $F(t)$ varies with time, the linear impulse represents the **area under the $F\text{–}t$ curve**:

```
                       Impulse as Area Under F-t Curve
             Force F(t)
                 ^
                 |                   +------------------+
                 |                  /                    \
                 |                 /       IMPULSE        \
                 |                /    Imp = ∫ F(t) dt     \
                 |               /                          \
                 +--------------+----------------------------+--------->
                               t_1                          t_2   Time t
```

If the force is constant ($F = \text{const.}$):

$$\mathbf{Imp}_{1\to 2} = \mathbf{F}(t_2 - t_1) = \mathbf{F}\,\Delta t$$

If the force varies irregularly (such as an impact shock), we define the **time-averaged force** $\mathbf{F}_{avg}$ such that:

$$\mathbf{Imp}_{1\to 2} = \mathbf{F}_{avg}\,\Delta t = \int_{t_1}^{t_2} \mathbf{F}(t)\,dt \iff \mathbf{F}_{avg} = \frac{1}{\Delta t}\int_{t_1}^{t_2} \mathbf{F}(t)\,dt$$

---

## 2. Impulsive vs. Non-Impulsive Forces

During collisions, explosions, and sudden impacts, the interaction duration $\Delta t = t_2 - t_1$ is extremely brief (typically $10^{-4}\text{ to }10^{-2}\text{ s}$). Engineers classify acting forces into two categories:

```
+---------------------------------------+---------------------------------------+
|           IMPULSIVE FORCES            |          NON-IMPULSIVE FORCES         |
+---------------------------------------+---------------------------------------+
| • Very large forces that act over an  | • Moderate forces whose magnitudes    |
|   extremely small time interval Δt.   |   remain bounded during impact.       |
| • The impulse integral ∫ F dt has a   | • As Δt → 0, their impulse integral   |
|   significant, finite non-zero value: |   vanishes:                           |
|   lim_{Δt→0} ∫_{t1}^{t2} F dt ≠ 0     |   lim_{Δt→0} ∫_{t1}^{t2} F dt ≈ 0     |
| • Examples:                           | • Examples:                           |
|   - Striking bat on a cricket ball    |   - Gravity (Weight W = mg)           |
|   - Collision impact between vehicles |   - Moderate helical spring forces    |
|   - Hammer striking a forging pile    |   - Moderate air resistance           |
|   - Explosive detonation pressure     | • Neglected during brief impact!      |
+---------------------------------------+---------------------------------------+
```

::: tip Why Weight is Neglected During Impact
Consider a $0.15\text{ kg}$ baseball struck by a bat. Its weight is $W = mg = 0.15 \times 9.81 = 1.47\text{ N}$. The bat-ball contact lasts $\Delta t = 1.0\text{ ms} = 0.001\text{ s}$.
- Impulse of gravity: $\text{Imp}_g = W\,\Delta t = (1.47\text{ N})(0.001\text{ s}) = 0.00147\text{ N}\cdot\text{s}$.
- Impulse of bat: $\text{Imp}_{bat} \approx 15\text{ N}\cdot\text{s}$ (over $10,000$ times larger!).
The average impact force of the bat is $F_{avg} = \frac{15}{0.001} = 15,000\text{ N}$. Compared to $15,000\text{ N}$, the $1.47\text{ N}$ weight is negligible and omitted from the impulse diagram during the collision interval.
:::

---

## 3. Motion of Several Particles & Conservation of Linear Momentum

Consider a system of $n$ interacting particles of masses $m_1, m_2, \dots, m_n$.
The forces acting on particle $i$ consist of:
1. External forces $\mathbf{F}_i$ applied from outside the system boundary.
2. Internal action-reaction forces $\mathbf{f}_{ij}$ exerted by particle $j$ on particle $i$.

Applying the linear impulse-momentum equation to every particle $i$ and summing over all $n$ particles:

$$\sum_{i=1}^n m_i \mathbf{v}_{i,1} + \sum_{i=1}^n \int_{t_1}^{t_2} \mathbf{F}_i\,dt + \sum_{i=1}^n \sum_{j \ne i} \int_{t_1}^{t_2} \mathbf{f}_{ij}\,dt = \sum_{i=1}^n m_i \mathbf{v}_{i,2}$$

By Newton's Third Law, internal forces occur in equal, opposite, and collinear pairs:

$$\mathbf{f}_{ij} = -\mathbf{f}_{ji} \implies \int_{t_1}^{t_2} \mathbf{f}_{ij}\,dt + \int_{t_1}^{t_2} \mathbf{f}_{ji}\,dt = \mathbf{0}$$

Therefore, the sum of all internal impulses is **identically zero**:

$$\sum_{i=1}^n m_i \mathbf{v}_{i,1} + \sum \mathbf{Imp}_{ext} = \sum_{i=1}^n m_i \mathbf{v}_{i,2}$$

```
    [ Total Initial Momentum ]     [ External Impulses ]     [ Total Final Momentum ]
        Σ m_i v_{i, 1}        +      ∫ Σ F_{ext} dt     =        Σ m_i v_{i, 2}
```

---

### 3.1 Principle of Conservation of Linear Momentum

If the resultant external impulse acting on a multi-particle system is zero (or negligible) over time interval $t_1 \to t_2$:

$$\sum \mathbf{Imp}_{ext} = \mathbf{0}$$

Then the total linear momentum of the system is strictly conserved:

$$\sum_{i=1}^n m_i \mathbf{v}_{i,1} = \sum_{i=1}^n m_i \mathbf{v}_{i,2} = \text{constant}$$

```
                Conservation of Total Linear Momentum
                               System Boundary
             +-------------------------------------------------+
             |   m_A v_A1 --->        <--- m_B v_B1            |
             |                                                 |
             |   During Impact:   f_AB <---*---> f_BA          |
             |   (Internal forces cancel out: f_AB + f_BA = 0) |
             |                                                 |
             |   m_A v'_A --->             m_B v'_B --->       |
             +-------------------------------------------------+
                 m_A v_A1 + m_B v_B1 = m_A v'_A + m_B v'_B
```

::: info Velocity of the Mass Center Remains Constant
Recall the definition of the center of mass $G$ of a multi-particle system:
$$m_{tot}\bar{\mathbf{r}} = \sum m_i \mathbf{r}_i \implies m_{tot}\bar{\mathbf{v}} = \sum m_i \mathbf{v}_i = \mathbf{L}_{tot}$$
When external impulses vanish:
$$\mathbf{L}_{tot} = \text{constant} \implies \bar{\mathbf{v}} = \text{constant}$$
The velocity of the center of mass of an isolated system remains strictly constant, regardless of violent collisions, internal explosions, or plastic deformations occurring inside the system boundary!
:::

---

## 4. Comprehensive Step-by-Step Worked Problems

### Worked Problem 5.1: 2D Impulsive Bat-Ball Strike
A baseball of mass $m = 0.15\text{ kg}$ is thrown horizontally toward a batter at an initial speed of $v_1 = 40\text{ m/s}$ (in the $-x$ direction). The batter strikes the ball, sending it off with a speed of $v_2 = 50\text{ m/s}$ at an angle of $\theta = 35^\circ$ above the horizontal. The contact between the bat and the ball lasts for $\Delta t = 1.5\text{ ms} = 0.0015\text{ s}$.
1. Determine the linear impulse $\mathbf{Imp}_{bat}$ exerted by the bat on the ball.
2. Determine the magnitude and direction of the average impulsive force $\mathbf{F}_{avg}$.
3. Compare the average force with the ball's weight to verify why weight can be neglected.

```
                           Bat-Ball Impact Geometry
                                   y ^
                                     |       v_2 = 50 m/s
                                     |      ^
                                     |     / 35°
                                     |    /
       v_1 = 40 m/s (incoming)       |   /
      <------------------------------*----------------------------> x
                                (Bat Strike)
```

::: details Click to view Step-by-Step Solution

#### Step 1: Resolve Initial and Final Velocities
Establish a Cartesian coordinate system with $+x$ pointing forward (direction of hit) and $+y$ pointing vertically upward.
- **Initial Velocity Vector $\mathbf{v}_1$:**
  $$v_{1x} = -40\text{ m/s}, \quad v_{1y} = 0\text{ m/s}$$
  $$\mathbf{v}_1 = -(40\text{ m/s})\mathbf{i}$$
- **Final Velocity Vector $\mathbf{v}_2$:**
  $$v_{2x} = v_2 \cos 35^\circ = 50 \cos 35^\circ = 50(0.81915) = +40.96\text{ m/s}$$
  $$v_{2y} = v_2 \sin 35^\circ = 50 \sin 35^\circ = 50(0.57358) = +28.68\text{ m/s}$$
  $$\mathbf{v}_2 = (40.96\text{ m/s})\mathbf{i} + (28.68\text{ m/s})\mathbf{j}$$

---

#### Step 2: Linear Impulse-Momentum in Components
Since the contact time $\Delta t = 0.0015\text{ s}$ is extremely brief, gravity is non-impulsive. The linear impulse is supplied entirely by the bat:
$$\mathbf{Imp} = m\mathbf{v}_2 - m\mathbf{v}_1 = m(\mathbf{v}_2 - \mathbf{v}_1)$$

- **Horizontal Component ($\text{Imp}_x$):**
  $$\text{Imp}_x = m(v_{2x} - v_{1x}) = 0.15 [40.96 - (-40)] = 0.15 [80.96] = +12.144\text{ N}\cdot\text{s}$$
- **Vertical Component ($\text{Imp}_y$):**
  $$\text{Imp}_y = m(v_{2y} - v_{1y}) = 0.15 [28.68 - 0] = +4.302\text{ N}\cdot\text{s}$$

Total Impulse Vector:
$$\mathbf{Imp}_{bat} = (12.14\mathbf{i} + 4.30\mathbf{j})\,\text{N}\cdot\text{s}$$

- **Magnitude of Impulse:**
  $$|\mathbf{Imp}| = \sqrt{(12.144)^2 + (4.302)^2} = \sqrt{147.48 + 18.51} = \sqrt{165.99} = 12.88\text{ N}\cdot\text{s}$$
- **Direction of Impulse:**
  $$\theta_{imp} = \tan^{-1}\left(\frac{4.302}{12.144}\right) = \tan^{-1}(0.3542) = 19.50^\circ \text{ above }+x\text{ axis}$$

---

#### Step 3: Average Impulsive Force $\mathbf{F}_{avg}$
$$\mathbf{F}_{avg} = \frac{\mathbf{Imp}}{\Delta t} = \frac{12.88\text{ N}\cdot\text{s}}{0.0015\text{ s}} = 8589\text{ N} \approx 8.59\text{ kN}$$
Component forces:
$$F_{avg, x} = \frac{12.144}{0.0015} = 8096\text{ N}, \quad F_{avg, y} = \frac{4.302}{0.0015} = 2868\text{ N}$$

---

#### Step 4: Comparison with Weight
- Weight of the baseball:
  $$W = m g = 0.15 \times 9.81 = 1.47\text{ N}$$
- Ratio of average bat impact force to weight:
  $$\frac{F_{avg}}{W} = \frac{8589\text{ N}}{1.47\text{ N}} \approx 5843$$

The bat's impact force is **$5840$ times larger** than the ball's weight! Over the $1.5\text{ ms}$ interval, the impulse of weight is $W\,\Delta t = 1.47 \times 0.0015 = 0.0022\text{ N}\cdot\text{s}$, which is only $0.017\%$ of the bat's impulse. This provides complete mathematical justification for treating gravity as non-impulsive.
:::

---

### Worked Problem 5.2: Railway Car Plastic Coupling & Bumper Spring Compression
A freight car $A$ of mass $m_A = 20,000\text{ kg}$ rolls along a horizontal track at $v_A = 3.0\text{ m/s}$. It collides with and couples automatically to a stationary freight car $B$ of mass $m_B = 30,000\text{ kg}$. Car $B$ is connected to a spring bumper of stiffness $k = 80\text{ kN/m} = 80,000\text{ N/m}$ fixed to a rigid end buffer.
1. Determine the common velocity $V$ of the coupled cars immediately after the impact.
2. Determine the loss of mechanical kinetic energy $\Delta T$ dissipated during the coupling.
3. Using the Principle of Work and Energy, determine the maximum compression $x_{max}$ of the spring bumper as the coupled cars come to a momentary stop.

```
                      Railway Car Coupling System
               m_A = 20,000 kg                 m_B = 30,000 kg
               v_A = 3.0 m/s                   v_B = 0
             +-----------------+             +-----------------+
             |   Freight Car A |====(coupler)|   Freight Car B |-----[ k = 80 kN/m ]====| Buffer
             +-----------------+             +-----------------+
```

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

$60\%$ of the initial mechanical energy is irreversibly dissipated into metal deformation, sound, and thermal heat during the plastic latching of the coupler.

---

#### Step 3: Maximum Bumper Spring Compression
Now we analyze the subsequent post-impact deceleration from state 2 (coupled cars moving at $V = 1.20\text{ m/s}$) to state 3 (cars brought to rest by the spring, $v_3 = 0$).
During this stage, the spring exerts a conservative restoring force:
$$T_2 + V_{e2} = T_3 + V_{e3}$$
- Initial state 2: Spring unstretched ($x_2 = 0 \implies V_{e2} = 0$), $T_2 = 36,000\text{ J}$.
- Final state 3: Momentary stop ($v_3 = 0 \implies T_3 = 0$), spring compressed by $x_{max}$:
  $$V_{e3} = \frac{1}{2} k x_{max}^2$$

Applying conservation of mechanical energy:
$$36,000 + 0 = 0 + \frac{1}{2}(80,000) x_{max}^2$$
$$36,000 = 40,000 x_{max}^2$$
$$x_{max}^2 = \frac{36,000}{40,000} = 0.90$$
$$x_{max} = \sqrt{0.90} = 0.9487\text{ m} \approx 0.949\text{ m} = 94.9\text{ cm}$$

The spring bumper undergoes a maximum compression of **$94.9\text{ cm}$**.
:::

---

### Worked Problem 5.3: Block Subjected to Time-Varying Force
A block of mass $m = 10\text{ kg}$ is initially at rest ($v_0 = 0$) on a rough horizontal surface with coefficient of kinetic friction $\mu_k = 0.20$. At time $t = 0$, a horizontal time-dependent pushing force is applied:
$$F(t) = 60 - 5t\text{ N} \quad (t \text{ in seconds})$$
This force acts for $6\text{ s}$ ($0 \le t \le 6\text{ s}$), after which $F(t) = 0$.
1. Using the Principle of Linear Impulse and Momentum, determine the velocity of the block at $t = 6\text{ s}$.
2. Determine the total time $t_{stop}$ at which the block comes to rest. Take $g = 9.81\text{ m/s}^2$.

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

#### Step 3: Total Time to Come to Rest ($t_{stop}$)
For $t > 6\text{ s}$, the pushing force ceases ($F = 0$). Only friction $F_k = 19.62\text{ N}$ acts to decelerate the block until it stops ($v_f = 0$).
Let $\Delta t_{coast} = t_{stop} - 6$:
$$m v_6 + \int_6^{t_{stop}} (-F_k)\,dt = m v_f$$
$$(10)(15.23) - F_k\,\Delta t_{coast} = 0$$
$$152.3 - 19.62\,\Delta t_{coast} = 0$$
$$\Delta t_{coast} = \frac{152.3}{19.62} = 7.76\text{ s}$$

Total time elapsed from $t = 0$:
$$t_{stop} = 6.00 + 7.76 = 13.76\text{ s}$$

The block coasts for an additional $7.76\text{ s}$, coming to a complete stop at **$t = 13.76\text{ s}$**.
:::

---

## 5. Summary & Review Checklist

Before proceeding to Section 5.2 on Impact Mechanics & Restitution:
- [x] Derive the Principle of Linear Impulse and Momentum: $m\mathbf{v}_1 + \int_{t_1}^{t_2} \mathbf{F}\,dt = m\mathbf{v}_2$.
- [x] Differentiate between impulsive and non-impulsive forces and justify neglecting weight during brief impacts.
- [x] Prove that internal impulses cancel in pairs for multi-particle systems ($\sum \mathbf{f}_{ij} = \mathbf{0}$).
- [x] State the condition for Conservation of Linear Momentum and explain why the mass center velocity $\bar{\mathbf{v}}$ remains constant.
- [x] Solve time-varying force integrals and coupled momentum collisions.
