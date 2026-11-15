# 2.1 Rectilinear Motion: Calculus & Motion Curves

In Module 1, we mastered **Statics**—the art of ensuring structural equilibrium where acceleration is identically zero ($\mathbf{a} = \mathbf{0}$). 

We now transition into **Dynamics**, where forces cause bodies to accelerate, decelerate, and oscillate. Dynamics divides into two fundamental sub-disciplines:

```
                          [ Dynamics ]
                               │
           ┌───────────────────┴───────────────────┐
           ▼                                       ▼
   Kinematics                              Kinetics
   "How is it moving?"                     "Why is it moving?"
   (x, v, a, t Geometry)                   (Forces, F = ma, Energy)
```

- **Kinematics:** Studies the geometry of motion without regard to the causes (forces or moments). It defines the relationships between displacement ($x$), velocity ($v$), acceleration ($a$), and time ($t$).
- **Kinetics:** Combines kinematics with mass ($m$) and applied forces ($\mathbf{F}$) to determine the resulting motion via Newton's Second Law ($\mathbf{F} = m\mathbf{a}$).

In this chapter, we analyze **Rectilinear Motion** (one-dimensional straight-line translation) using both analytical calculus and geometric motion curves.

---

## 1. Kinematic Foundations & The Differential Calculus of Motion

Consider a particle moving along a straight coordinate axis $x$ relative to a fixed origin $O$.

```
              Origin O                Particle P
        <--------+-------------------------*---------> x
        Negative x                      x(t)
```

### Position & Displacement
- **Position Coordinate $x(t)$:** The scalar directed distance from the origin $O$ to the particle at instant $t$. It carries units of meters ($\text{m}$) or feet ($\text{ft}$) and can be positive or negative.
- **Displacement $\Delta x$:** The net change in position over time interval $\Delta t = t_2 - t_1$:
  $$
  \Delta x = x(t_2) - x(t_1) = x_2 - x_1
  $$
  Displacement is a signed vector quantity. It depends strictly on the endpoints, completely independent of the actual path length traversed!

### Velocity: Average and Instantaneous
- **Average Velocity ($v_{avg}$):**
  $$
  v_{avg} = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}
  $$
- **Instantaneous Velocity ($v$):** The limit of average velocity as $\Delta t \to 0$, which is the first time derivative of position:
  $$
  v = \lim_{\Delta t \to 0} \frac{\Delta x}{\Delta t} = \frac{dx}{dt} = \dot{x}
  $$
  - The sign of $v$ indicates the direction of motion: $v > 0$ indicates motion toward the positive $x$ direction; $v < 0$ indicates motion toward the negative $x$ direction.
  - The scalar magnitude of velocity is **speed**: $\text{Speed} = |v| = |dx/dt|$.

### Acceleration: Average, Instantaneous & The Chain Rule Shortcut
- **Average Acceleration ($a_{avg}$):**
  $$
  a_{avg} = \frac{\Delta v}{\Delta t} = \frac{v_2 - v_1}{t_2 - t_1}
  $$
- **Instantaneous Acceleration ($a$):** The time derivative of velocity (second time derivative of position):
  $$
  a = \frac{dv}{dt} = \frac{d^2x}{dt^2} = \ddot{x}
  $$

::: tip The Chain Rule Shortcut: When Time Is Unknown
In many engineering systems, acceleration is known as a function of position $a(x)$ or velocity $a(v)$, while time $t$ is neither given nor required. 

Applying the chain rule of differential calculus:
$$
a = \frac{dv}{dt} = \frac{dv}{dx} \cdot \frac{dx}{dt}
$$
Since $\frac{dx}{dt} = v$, we obtain the indispensable **Chain Rule Kinematic Identity**:
$$
a = v \frac{dv}{dx} \iff a\,dx = v\,dv
$$
This identity allows direct integration between velocity and position without solving for time $t$!
:::

---

## 2. The Integration Matrix

In forward analysis, we differentiate position: $x(t) \xrightarrow{d/dt} v(t) \xrightarrow{d/dt} a(t)$. 

In engineering design, however, sensors or motor controllers specify acceleration $a$, and we must **integrate backwards** to find velocity and position. The solution technique depends strictly on which variables acceleration depends upon:

| Known Functional Form | Differential Relation | Analytical Integration Protocol |
| :--- | :--- | :--- |
| **Case 1: $a = f(t)$**<br/>(Acceleration is a function of time) | $dv = f(t)\,dt$ | $\displaystyle \int_{v_0}^v dv = \int_0^t f(t)\,dt \implies v(t) = v_0 + \int_0^t f(t)\,dt$<br/>$\displaystyle \int_{x_0}^x dx = \int_0^t v(t)\,dt \implies x(t) = x_0 + \int_0^t v(t)\,dt$ |
| **Case 2: $a = f(x)$**<br/>(Acceleration is a function of position) | $v\,dv = f(x)\,dx$<br/>*(Chain Rule)* | $\displaystyle \int_{v_0}^v v\,dv = \int_{x_0}^x f(x)\,dx \implies \frac{1}{2}v^2 - \frac{1}{2}v_0^2 = \int_{x_0}^x f(x)\,dx$<br/>Solve for $v(x)$, then $\displaystyle \int_{x_0}^x \frac{dx}{v(x)} = \int_0^t dt$ |
| **Case 3: $a = f(v)$**<br/>(Acceleration is a function of velocity, e.g. drag) | $dt = \frac{dv}{f(v)}$<br/>or $dx = \frac{v\,dv}{f(v)}$ | To find $v(t)$: $\displaystyle \int_0^t dt = \int_{v_0}^v \frac{dv}{f(v)}$<br/>To find $v(x)$: $\displaystyle \int_{x_0}^x dx = \int_{v_0}^v \frac{v\,dv}{f(v)}$ |

---

## 3. The Constant Acceleration Blueprint

When acceleration is constant ($a(t) = a_c = \text{constant}$), integrating the relations above produces the three famous kinematic equations:

1. **Velocity-Time Relation:**
   $$
   \int_{v_0}^v dv = a_c \int_0^t dt \implies v = v_0 + a_c t
   $$
2. **Position-Time Relation:**
   $$
   \int_{x_0}^x dx = \int_0^t (v_0 + a_c t)\,dt \implies x = x_0 + v_0 t + \frac{1}{2}a_c t^2
   $$
3. **Velocity-Position Relation (via Chain Rule):**
   $$
   \int_{v_0}^v v\,dv = a_c \int_{x_0}^x dx \implies \frac{1}{2}v^2 - \frac{1}{2}v_0^2 = a_c(x - x_0)
   $$
   $$
   v^2 = v_0^2 + 2a_c(x - x_0)
   $$

::: warning Crucial Exam Warning: When NOT to Use These Formulas!
The constant acceleration formulas ($v = v_0 + at$, $x = x_0 + v_0 t + \frac{1}{2}at^2$, $v^2 = v_0^2 + 2a\Delta x$) are valid **only and strictly when $a$ is constant**!

If an exam problem states $a = 6t$, $a = 3x^2$, or $a = -0.5v^2$, using these three formulas will yield a complete failure. You **must** integrate using the Integration Matrix!
:::

---

## 4. Graphical Solutions: The Motion Curves

When vehicle telemetry or experimental sensors record motion, acceleration is often defined by piecewise curves or tables rather than smooth analytic functions. Engineers analyze motion visually using **Motion Curves** ($x\text{–}t$, $v\text{–}t$, and $a\text{–}t$ graphs):

```
      Slope = dx/dt                Slope = dv/dt
   ┌──────────────────►         ┌──────────────────►
[ x–t Graph ]              [ v–t Graph ]              [ a–t Graph ]
   ◄──────────────────┘         ◄──────────────────┘
     Area = ∫ v dt = Δx           Area = ∫ a dt = Δv
```

### The Slope & Area Mathematical Bridge

| Motion Curve | Slope at any point | Definite Area under curve from $t_1$ to $t_2$ |
| :--- | :--- | :--- |
| **Position ($x\text{–}t$)** | $\displaystyle \frac{dx}{dt} = \text{Instantaneous Velocity } v$ | (Has no direct physical kinematic meaning) |
| **Velocity ($v\text{–}t$)** | $\displaystyle \frac{dv}{dt} = \text{Instantaneous Acceleration } a$ | $\displaystyle \int_{t_1}^{t_2} v\,dt = \Delta x = x_2 - x_1$ (**Displacement**) |
| **Acceleration ($a\text{–}t$)** | $\displaystyle \frac{da}{dt} = \text{Jerk } j$ | $\displaystyle \int_{t_1}^{t_2} a\,dt = \Delta v = v_2 - v_1$ (**Change in Velocity**) |

#### Geometric Properties of the $v\text{–}t$ Curve:
The velocity-time graph is the most versatile diagnostic tool in kinematics:
- **Slope:** A positive slope means acceleration ($a > 0$); horizontal slope means constant velocity ($a = 0$); negative slope means deceleration ($a < 0$).
- **Zero Crossings:** Whenever the $v\text{–}t$ curve crosses the time axis ($v = 0$), the particle momentarily halts and reverses its direction of travel. This marks a **local extremum (maximum or minimum) in position $x(t)$**.
- **Net Area vs. Gross Area:**
  - **Displacement ($\Delta x$):** The algebraic sum of areas (areas above time axis are positive, areas below are negative):
    $$
    \Delta x = A_{\text{positive}} - A_{\text{negative}}
    $$
  - **Total Distance Traveled ($s_{total}$):** The sum of absolute values of the geometric areas:
    $$
    s_{total} = |A_{\text{positive}}| + |A_{\text{negative}}|
    $$

---

## 5. Comprehensive Worked Problems

### Problem 1: Polynomial Trajectory Differentiation
**Statement:** A robotic actuator moves along a linear track according to the position polynomial:
$$
x(t) = 6t^3 - t^2
$$
where $x$ is in meters and $t$ is in seconds. Determine the velocity and acceleration of the actuator at $t = 5\text{ s}$.

::: details Click to view Step-by-Step Solution
#### 1. Velocity Function:
Differentiating position with respect to time:
$$
v(t) = \frac{dx}{dt} = \frac{d}{dt}(6t^3 - t^2) = 18t^2 - 2t\text{ (m/s)}
$$

#### 2. Acceleration Function:
Differentiating velocity with respect to time:
$$
a(t) = \frac{dv}{dt} = \frac{d}{dt}(18t^2 - 2t) = 36t - 2\text{ (m/s}^2\text{)}
$$

#### 3. Evaluation at $t = 5\text{ s}$:
- **Velocity at $t = 5\text{ s}$:**
  $$
  v(5) = 18(5)^2 - 2(5) = 18(25) - 10 = 450 - 10 = \mathbf{440\text{ m/s}}
  $$
- **Acceleration at $t = 5\text{ s}$:**
  $$
  a(5) = 36(5) - 2 = 180 - 2 = \mathbf{178\text{ m/s}^2}
  $$
:::

---

### Problem 2: Cubic Motion — Displacement vs. Total Distance Traveled
**Statement:** A particle moves along the $x$-axis according to the cubic equation:
$$
x(t) = t^3 - 6t^2 - 15t + 40
$$
where $x$ is in feet and $t$ is in seconds.
Determine:
1. The instant $t$ at which the velocity is zero.
2. The position and total distance traveled by the particle at that instant.
3. The acceleration of the particle at that instant.
4. The total distance traveled by the particle between $t = 4\text{ s}$ and $t = 6\text{ s}$.

::: details Click to view Step-by-Step Solution
#### Part 1: Finding When Velocity is Zero ($v = 0$)
$$
v(t) = \frac{dx}{dt} = 3t^2 - 12t - 15
$$
Set $v(t) = 0$:
$$
3(t^2 - 4t - 5) = 0 \implies (t - 5)(t + 1) = 0
$$
Since time $t \ge 0$, the particle comes to rest at **$t = 5\text{ s}$**.

#### Part 2: Position and Total Distance Traveled at $t = 5\text{ s}$
- Initial position at $t = 0$:
  $$
  x(0) = 0^3 - 6(0)^2 - 15(0) + 40 = +40\text{ ft}
  $$
- Position at reversal instant $t = 5\text{ s}$:
  $$
  x(5) = (5)^3 - 6(5)^2 - 15(5) + 40 = 125 - 150 - 75 + 40 = -60\text{ ft}
  $$
- Because the velocity did not change sign between $t = 0$ and $t = 5\text{ s}$ ($v < 0$ throughout this interval), the motion was entirely in the negative direction:
  $$
  \text{Distance Traveled} = |x(5) - x(0)| = |-60 - 40| = |-100| = \mathbf{100\text{ ft}}
  $$

#### Part 3: Acceleration at $t = 5\text{ s}$
$$
a(t) = \frac{dv}{dt} = 6t - 12
$$
At $t = 5\text{ s}$:
$$
a(5) = 6(5) - 12 = 30 - 12 = \mathbf{+18\text{ ft/s}^2}
$$

#### Part 4: Total Distance Traveled between $t = 4\text{ s}$ and $t = 6\text{ s}$
*Crucial Note:* Because the particle reverses direction at $t = 5\text{ s}$, we cannot simply compute $x(6) - x(4)$! That would give only net displacement.

- Position at $t = 4\text{ s}$:
  $$
  x(4) = (4)^3 - 6(4)^2 - 15(4) + 40 = 64 - 96 - 60 + 40 = -52\text{ ft}
  $$
- Position at $t = 5\text{ s}$ (reversal):
  $$
  x(5) = -60\text{ ft}
  $$
- Position at $t = 6\text{ s}$:
  $$
  x(6) = (6)^3 - 6(6)^2 - 15(6) + 40 = 216 - 216 - 90 + 40 = -50\text{ ft}
  $$

Now compute distance in two legs:
1. Leg 1 ($t = 4\text{ s}$ to $t = 5\text{ s}$ moving negative):
   $$
   d_1 = |x(5) - x(4)| = |-60 - (-52)| = |-8| = 8\text{ ft}
   $$
2. Leg 2 ($t = 5\text{ s}$ to $t = 6\text{ s}$ moving positive):
   $$
   d_2 = |x(6) - x(5)| = |-50 - (-60)| = |+10| = 10\text{ ft}
   $$

$$
\text{Total Distance Traveled} = d_1 + d_2 = 8\text{ ft} + 10\text{ ft} = \mathbf{18\text{ ft}}
$$
*(Notice that the net displacement is only $x(6) - x(4) = -50 - (-52) = +2\text{ ft}$, demonstrating the vast difference between distance and displacement!).*
:::

---

### Problem 3: Curve Analysis of $x = 6t^2 - t^3$
**Statement:** A test sled travels according to $x = 6t^2 - t^3$ (where $x$ is in meters and $t$ in seconds). Find:
1. The maximum positive position reached by the sled.
2. The maximum velocity of the sled and when it occurs.
3. The time at which the sled returns to the origin.

::: details Click to view Step-by-Step Solution
#### 1. Kinematic Derivatives:
$$
x(t) = 6t^2 - t^3
$$
$$
v(t) = \frac{dx}{dt} = 12t - 3t^2 = 3t(4 - t)
$$
$$
a(t) = \frac{dv}{dt} = 12 - 6t = 6(2 - t)
$$

#### 2. Maximum Position:
Position is maximized when velocity is zero:
$$
v(t) = 3t(4 - t) = 0 \implies t = 4\text{ s} \quad (t > 0)
$$
$$
x_{max} = x(4) = 6(4)^2 - (4)^3 = 6(16) - 64 = 96 - 64 = \mathbf{32\text{ m}}
$$

#### 3. Maximum Velocity:
Velocity is maximized when acceleration is zero:
$$
a(t) = 12 - 6t = 0 \implies t = 2\text{ s}
$$
$$
v_{max} = v(2) = 12(2) - 3(2)^2 = 24 - 12 = \mathbf{12\text{ m/s}}
$$

#### 4. Return to Origin ($x = 0$):
$$
6t^2 - t^3 = 0 \implies t^2(6 - t) = 0 \implies t = \mathbf{6\text{ s}}
$$
:::

---

### Problem 4: The Subway Car 4-Stage Motion Profile
**Statement:** A subway train departs station $A$ and travels to station $B$ along a straight track. The motion consists of four distinct operational stages:
- **Stage 1 (Acceleration Phase 1):** The train accelerates from rest at $a_1 = 4\text{ ft/s}^2$ for $t = 6\text{ s}$.
- **Stage 2 (Acceleration Phase 2):** Power is boosted, accelerating the train at $a_2 = 6\text{ ft/s}^2$ until it reaches cruising speed $v_{cruise} = 48\text{ ft/s}$.
- **Stage 3 (Cruising Phase):** The train cruises at constant speed $v = 48\text{ ft/s}$ until $t = 34\text{ s}$.
- **Stage 4 (Braking Phase):** Uniform braking decelerates the train to a complete stop in $\Delta t_4 = 6\text{ s}$.

Construct the motion curves and calculate the total distance $d$ between station $A$ and station $B$.

```
    v (ft/s) ^
             |                    Cruising (48 ft/s)
          48 +                   +-------------------+
             |                  /                     \
          24 +                 +                       \
             |                /                         \
           0 +---------------+---+-------------------+---+---> t (s)
             0               6   10                  34  40
               Stage 1        Stage 2   Stage 3       Stage 4
```

::: details Click to view Step-by-Step Solution
#### Stage-by-Stage Analysis using $v\text{–}t$ Areas:

#### Stage 1 ($t = 0$ to $t = 6\text{ s}$):
- Initial velocity: $v_0 = 0$
- Velocity at $t = 6\text{ s}$:
  $$
  v_1 = v_0 + a_1 t_1 = 0 + (4\text{ ft/s}^2)(6\text{ s}) = 24\text{ ft/s}
  $$
- Distance traveled (Area of triangle 1):
  $$
  d_1 = \frac{1}{2}(\text{base})(\text{height}) = \frac{1}{2}(6\text{ s})(24\text{ ft/s}) = \mathbf{72\text{ ft}}
  $$

#### Stage 2 ($v = 24\text{ ft/s}$ to $v = 48\text{ ft/s}$):
- Time duration $\Delta t_2$:
  $$
  \Delta t_2 = \frac{v_2 - v_1}{a_2} = \frac{48 - 24}{6\text{ ft/s}^2} = \frac{24}{6} = 4\text{ s}
  $$
  Timestamp at end of Stage 2: $t_2 = 6 + 4 = 10\text{ s}$.
- Distance traveled (Area of trapezoid 2):
  $$
  d_2 = \left(\frac{v_1 + v_2}{2}\right)\Delta t_2 = \left(\frac{24 + 48}{2}\right)(4) = (36)(4) = \mathbf{144\text{ ft}}
  $$

#### Stage 3 ($t = 10\text{ s}$ to $t = 34\text{ s}$):
- Constant speed: $v = 48\text{ ft/s}$
- Time duration: $\Delta t_3 = 34 - 10 = 24\text{ s}$
- Distance traveled (Area of rectangle 3):
  $$
  d_3 = (\text{base})(\text{height}) = (24\text{ s})(48\text{ ft/s}) = \mathbf{1152\text{ ft}}
  $$

#### Stage 4 ($t = 34\text{ s}$ to $t = 40\text{ s}$):
- Deceleration to stop: $\Delta t_4 = 6\text{ s}$ (final time $t_4 = 34 + 6 = 40\text{ s}$)
- Deceleration rate:
  $$
  a_4 = \frac{0 - 48}{6} = -8\text{ ft/s}^2
  $$
- Distance traveled (Area of triangle 4):
  $$
  d_4 = \frac{1}{2}(\text{base})(\text{height}) = \frac{1}{2}(6\text{ s})(48\text{ ft/s}) = \mathbf{144\text{ ft}}
  $$

#### Total Distance Traversed:
$$
d_{total} = d_1 + d_2 + d_3 + d_4 = 72\text{ ft} + 144\text{ ft} + 1152\text{ ft} + 144\text{ ft} = \mathbf{1512\text{ ft}}
$$
The distance between Station $A$ and Station $B$ is **$1512\text{ ft}$**.
:::

---

### Problem 5: Ball Thrown Vertically from a 20-m Window
**Statement:** A small ball is thrown vertically upward from a window located $y_0 = 20\text{ m}$ above the street with an initial velocity of $v_0 = +10\text{ m/s}$. Neglecting aerodynamic resistance and taking $g = 9.81\text{ m/s}^2$:
1. Calculate the maximum height $y_{max}$ reached by the ball above ground level.
2. Determine the time $t_{peak}$ required to reach this maximum height.
3. Calculate the total time $t_{impact}$ when the ball strikes the pavement below ($y = 0$).
4. Determine the velocity $v_{impact}$ of the ball just prior to ground impact.

::: details Click to view Step-by-Step Solution
#### 1. Maximum Height Calculation:
At peak elevation, instantaneous vertical velocity vanishes ($v = 0$).
Using the constant acceleration equation:
$$
v^2 = v_0^2 - 2g(y - y_0)
$$
$$
0 = (10)^2 - 2(9.81)(y_{max} - 20)
$$
$$
0 = 100 - 19.62(y_{max} - 20) \implies y_{max} - 20 = \frac{100}{19.62} \approx 5.097\text{ m}
$$
$$
y_{max} = 20 + 5.097 \approx \mathbf{25.10\text{ m}}
$$

#### 2. Time to Peak:
$$
v = v_0 - gt \implies 0 = 10 - 9.81 t_{peak} \implies t_{peak} = \frac{10}{9.81} \approx \mathbf{1.019\text{ s}}
$$

#### 3. Total Time to Ground Impact ($y = 0$):
$$
y(t) = y_0 + v_0 t - \frac{1}{2}gt^2
$$
$$
0 = 20 + 10t - \frac{1}{2}(9.81)t^2 \implies 4.905t^2 - 10t - 20 = 0
$$
Applying the quadratic formula $t = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$$
t = \frac{10 \pm \sqrt{(-10)^2 - 4(4.905)(-20)}}{2(4.905)} = \frac{10 \pm \sqrt{100 + 392.4}}{9.81}
$$
$$
t = \frac{10 \pm \sqrt{492.4}}{9.81} = \frac{10 \pm 22.190}{9.81}
$$
Discarding the unphysical negative root:
$$
t_{impact} = \frac{10 + 22.190}{9.81} = \frac{32.190}{9.81} \approx \mathbf{3.281\text{ s}} \approx \mathbf{3.28\text{ s}}
$$

#### 4. Velocity at Impact:
$$
v_{impact} = v_0 - gt_{impact} = 10 - (9.81)(3.281) = 10 - 32.187 = \mathbf{-22.19\text{ m/s}} \approx \mathbf{-22.2\text{ m/s}}
$$
*(Check via conservation of energy: $v^2 = v_0^2 + 2g y_0 = 100 + 2(9.81)(20) = 100 + 392.4 = 492.4 \implies v = -\sqrt{492.4} = -22.19\text{ m/s} \quad \checkmark$).*
:::

---

## 6. Interactive Laboratory: Motion Curves Simulator

Interact with dynamic rectilinear motion curves below. Select between **Constant Acceleration**, the **Cubic Polynomial Profile**, or the **Subway Car 4-Stage Profile**. Scrub through time $t$ to watch the animated track car move synchronously with the tangent slopes and shaded integral areas of the $x(t)$, $v(t)$, and $a(t)$ graphs!

<MotionCurvesSimulator />
