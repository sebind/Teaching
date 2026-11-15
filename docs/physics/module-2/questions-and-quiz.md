---
title: 2.4 Module 2 — Important Questions & Self-Check Quiz
---

<script setup>
const questions = [
  {
    question: "When a particle's acceleration is defined as an explicit function of position a = f(x), which differential relation must be integrated?",
    options: [
      "dv = f(x) dt",
      "v dv = f(x) dx",
      "dx = f(x) dv",
      "x dx = f(x) dt"
    ],
    answer: 1,
    explanation: "By the chain rule shortcut, a = v(dv/dx), which rearranges directly to the integrable form v dv = a(x) dx."
  },
  {
    question: "The definite area under an acceleration-time curve (a–t) between timestamps t1 and t2 physically represents:",
    options: [
      "The total displacement (x2 - x1).",
      "The change in velocity (v2 - v1).",
      "The average speed over the interval.",
      "The total distance traveled including reversals."
    ],
    answer: 1,
    explanation: "Because a = dv/dt, integrating a dt yields Δv = v2 - v1 (the change in velocity)."
  },
  {
    question: "A block-and-pulley cable constraint is governed by x_A + 2 x_B = C. If block A moves upward with velocity v_A = -6 m/s, what is the velocity of block B?",
    options: [
      "v_B = -12 m/s (upward)",
      "v_B = +12 m/s (downward)",
      "v_B = +3 m/s (downward)",
      "v_B = -3 m/s (upward)"
    ],
    answer: 2,
    explanation: "Differentiating the cable constraint gives v_A + 2 v_B = 0. Substituting v_A = -6 yields -6 + 2 v_B = 0, so v_B = +3 m/s (moving downward)."
  },
  {
    question: "For a particle tracing a curved 2D trajectory, where does the acceleration vector 'a' point?",
    options: [
      "Always tangent to the physical path in the direction of motion.",
      "Always tangent to the Hodograph curve, and toward the concave (inner) side of the physical path.",
      "Always perpendicular to the position vector radiating outward.",
      "Strictly along the line of the principal normal with zero tangential component."
    ],
    answer: 1,
    explanation: "By definition, a = dv/dt is strictly tangent to the Hodograph in velocity space, and points toward the inner (concave) side of the curved trajectory in physical space."
  },
  {
    question: "On flat horizontal ground, neglecting aerodynamic resistance, which launch angle θ maximizes the horizontal range R of an artillery projectile?",
    options: [
      "θ = 30°",
      "θ = 45°",
      "θ = 60°",
      "θ = 90°"
    ],
    answer: 1,
    explanation: "Range on flat ground is R = (v₀² sin 2θ) / g. Setting dR/dθ = 0 requires cos 2θ = 0, which occurs at 2θ = 90°, or θ = 45°."
  },
  {
    question: "In polar coordinates (r, θ), what is the physical meaning of the term 2·(dr/dt)·(dθ/dt) in the transverse acceleration a_θ?",
    options: [
      "Centripetal acceleration.",
      "Coriolis acceleration.",
      "Centrifugal inertial reaction.",
      "Tangential angular surge."
    ],
    answer: 1,
    explanation: "The term 2·r_dot·θ_dot is the Coriolis acceleration term, arising from the interaction between radial expansion rate and frame rotation rate."
  },
  {
    question: "Why is a finite angular displacement Δθ classified as a scalar rather than a vector in classical mechanics?",
    options: [
      "Finite rotations cannot be measured in radians.",
      "Finite rotations about different axes do not commute (A + B ≠ B + A).",
      "Finite rotations have no point of application.",
      "Finite rotations always alter the mass of the rigid body."
    ],
    answer: 1,
    explanation: "True vectors must satisfy the commutative law of addition (A + B = B + A). As demonstrated by the Book-Rotation Experiment, finite rotations about perpendicular axes depend on the sequence of operations."
  },
  {
    question: "A wheel of radius R rolls without slipping along flat ground at center speed v_O = R·ω. What is the instantaneous velocity of the highest point on the rim?",
    options: [
      "v = 0",
      "v = v_O",
      "v = 1.414 v_O",
      "v = 2 v_O"
    ],
    answer: 3,
    explanation: "Relative to the instantaneous center of zero velocity at ground contact C (v_C = 0), the top point is at distance 2R. Thus v_top = (2R)·ω = 2·v_O."
  }
];
</script>

# 2.4 Module 2 — Important Questions & Self-Check Quiz

This evaluation module consists of two comprehensive parts:
- **Part A:** Ten exam-caliber analytical questions spanning rectilinear motion calculus, motion curve diagnostics, block-and-pulley constraints, the hodograph, projectile ballistics, polar kinematics, and pure rolling.
- **Part B:** An interactive eight-question mastery quiz with real-time feedback and score logging.

---

## Part A: Important Questions Bank (Conceptual & Numerical)

### Question 1: Kinematics vs. Kinetics & The Chain Rule Shortcut
**Question:** Contrast Kinematics with Kinetics. When analyzing rectilinear motion where acceleration is known as an algebraic function of position $a(x)$, time $t$ is neither given nor required. Derive the **Chain Rule Kinematic Identity** and explain how it solves this problem.

::: details Click to view Model Answer
#### Kinematics vs. Kinetics:
- **Kinematics:** The study of the geometry of motion without reference to the forces causing it. It relates position ($x$), displacement ($\Delta x$), velocity ($v$), acceleration ($a$), and time ($t$).
- **Kinetics:** The study of the relationship between forces acting on a body, the body's mass and inertia, and the resulting accelerated motion via Newton's Second Law ($\mathbf{F} = m\mathbf{a}$).

#### Derivation of the Chain Rule Shortcut:
Instantaneous acceleration is defined as the time derivative of velocity:
$$
a = \frac{dv}{dt}
$$
Applying the chain rule of differential calculus by expanding through spatial position $x$:
$$
a = \frac{dv}{dx} \cdot \frac{dx}{dt}
$$
Since $\frac{dx}{dt} = v$ (instantaneous velocity):
$$
a = v \frac{dv}{dx} \iff a\,dx = v\,dv
$$

#### Engineering Application:
When $a = f(x)$, separate variables directly:
$$
\int_{v_0}^v v\,dv = \int_{x_0}^x f(x)\,dx
$$
$$
\frac{1}{2}v^2 - \frac{1}{2}v_0^2 = \int_{x_0}^x f(x)\,dx
$$
This bypasses time integration completely, directly yielding velocity as a function of position $v(x)$.
:::

---

### Question 2: The Integration Matrix & Constant Acceleration Caveat
**Question:** Detail the three canonical integration pathways of the **Integration Matrix** ($a = f(t)$, $a = f(x)$, and $a = f(v)$). State the three constant acceleration equations and provide an explicit warning explaining when they are mathematically invalid.

::: details Click to view Model Answer
#### The Integration Matrix:
1. **Case 1: $a = f(t)$**
   $$
   dv = f(t)\,dt \implies v(t) = v_0 + \int_0^t f(t)\,dt
   $$
   $$
   dx = v(t)\,dt \implies x(t) = x_0 + \int_0^t v(t)\,dt
   $$
2. **Case 2: $a = f(x)$**
   $$
   v\,dv = f(x)\,dx \implies \frac{1}{2}v^2 - \frac{1}{2}v_0^2 = \int_{x_0}^x f(x)\,dx
   $$
3. **Case 3: $a = f(v)$ (e.g. Aerodynamic Drag)**
   - To find time $t(v)$: $\displaystyle dt = \frac{dv}{f(v)} \implies t = \int_{v_0}^v \frac{dv}{f(v)}$
   - To find position $x(v)$: $\displaystyle v\,dv = f(v)\,dx \implies dx = \frac{v\,dv}{f(v)} \implies x - x_0 = \int_{v_0}^v \frac{v\,dv}{f(v)}$

#### The Constant Acceleration Blueprint:
When and only when $a(t) = a_c = \text{constant}$:
$$
v = v_0 + a_c t
$$
$$
x = x_0 + v_0 t + \frac{1}{2}a_c t^2
$$
$$
v^2 = v_0^2 + 2a_c(x - x_0)
$$

::: warning Crucial Exam Warning
These three formulas are valid **strictly when acceleration is constant**. If acceleration varies with time (e.g. $a = 4t$), with position (e.g. $a = -kx$), or with velocity (e.g. $a = -cv^2$), using these formulas is completely invalid! You must integrate the differential relations from the Integration Matrix.
:::
:::

---

### Question 3: Motion Curves Diagnostics & Distance vs. Displacement
**Question:** Explain how graphical slope and definite area bridge the $x\text{–}t$, $v\text{–}t$, and $a\text{–}t$ motion curves. Explain the difference between net displacement and total distance traveled on a $v\text{–}t$ curve where velocity changes sign.

::: details Click to view Model Answer
#### Slope & Area Bridge:
1. **From Position to Velocity:** The instantaneous slope of the position-time curve ($x\text{–}t$) equals velocity:
   $$
   \text{Slope of } x\text{–}t = \frac{dx}{dt} = v(t)
   $$
2. **From Velocity to Acceleration:** The instantaneous slope of the velocity-time curve ($v\text{–}t$) equals acceleration:
   $$
   \text{Slope of } v\text{–}t = \frac{dv}{dt} = a(t)
   $$
3. **From Acceleration to Velocity:** The definite area under the $a\text{–}t$ curve between $t_1$ and $t_2$ equals the change in velocity:
   $$
   \int_{t_1}^{t_2} a\,dt = v(t_2) - v(t_1) = \Delta v
   $$
4. **From Velocity to Displacement:** The definite area under the $v\text{–}t$ curve between $t_1$ and $t_2$ equals the net displacement:
   $$
   \int_{t_1}^{t_2} v\,dt = x(t_2) - x(t_1) = \Delta x
   $$

#### Net Displacement vs. Total Distance Traveled:
If a particle reverses direction, its $v\text{–}t$ curve crosses the time axis, creating areas above the axis ($A_{+}$) and below the axis ($A_{-}$):
- **Net Displacement ($\Delta x$):** The vector change in position (signed algebraic sum of areas):
  $$
  \Delta x = A_{+} - A_{-}
  $$
- **Total Distance Traveled ($s_{total}$):** The actual geometric odometer path length (sum of absolute areas):
  $$
  s_{total} = |A_{+}| + |A_{-}|
  $$
:::

---

### Question 4: Block-and-Pulley Dependent Kinematics (4-Step Protocol)
**Question:** Outline the 4-step cable constraint protocol for multi-particle dependent motion. Derive the velocity and acceleration relationships for a block-and-pulley hoist governed by $x_A + 3x_B = C$, and state the mechanical advantage.

::: details Click to view Model Answer
#### The 4-Step Cable Constraint Protocol:
1. **Step 1 (Datum Selection):** Select an immovable fixed geometric reference datum (such as a fixed ceiling or stationary pulley axle).
2. **Step 2 (Length Formulation):** Define position coordinates ($x_A, x_B, \dots$) measured positively downward from the datum to the center of each moving block or pulley. Express total cable length $L$ in terms of these coordinates and constant pulley wrap arcs:
   $$
   \sum c_i x_i = C \quad (\text{where } C = L - \text{pulley arcs})
   $$
3. **Step 3 (First Differentiation):** Differentiate once with respect to time ($dC/dt = 0$ because cables are inextensible):
   $$
   \sum c_i \frac{dx_i}{dt} = 0 \implies \sum c_i v_i = 0
   $$
4. **Step 4 (Second Differentiation):** Differentiate again to establish the acceleration coupling:
   $$
   \sum c_i a_i = 0
   $$

#### Derivation for $x_A + 3x_B = C$:
- **Velocity Equation:**
  $$
  \frac{dx_A}{dt} + 3\frac{dx_B}{dt} = 0 \implies v_A + 3v_B = 0 \implies v_A = -3v_B
  $$
- **Acceleration Equation:**
  $$
  \frac{dv_A}{dt} + 3\frac{dv_B}{dt} = 0 \implies a_A + 3a_B = 0 \implies a_A = -3a_B
  $$

#### Mechanical Interpretation:
Specifying the motion of one block uniquely determines the motion of the other (1 Degree of Freedom). If block $B$ descends at $1\text{ m/s}$ ($v_B = +1$), block $A$ must ascend at $3\text{ m/s}$ ($v_A = -3$). The system provides a mechanical displacement advantage of $3:1$.
:::

---

### Question 5: Curvilinear Velocity Tangency & The Hodograph
**Question:** Prove that for any arbitrary curvilinear path, the instantaneous velocity vector is always tangent to the trajectory. Define the **Hodograph** of motion and contrast where the acceleration vector $\mathbf{a}$ points on the hodograph versus on the physical path.

::: details Click to view Model Answer
#### Proof of Velocity Tangency:
Let $\mathbf{r}(t)$ and $\mathbf{r}(t + \Delta t)$ be position vectors of a particle moving along a smooth space curve:
1. The displacement vector $\Delta\mathbf{r} = \mathbf{r}(t + \Delta t) - \mathbf{r}(t)$ forms a secant chord across the curve.
2. The instantaneous velocity is:
   $$
   \mathbf{v} = \lim_{\Delta t \to 0} \frac{\Delta\mathbf{r}}{\Delta t}
   $$
3. As $\Delta t \to 0$, the second point slides toward the first, and the secant vector $\Delta\mathbf{r}$ rotates to become coincident with the **tangent line to the curve**.
4. Furthermore, the chord length $|\Delta\mathbf{r}|$ approaches the arc length $\Delta s$:
   $$
   v = |\mathbf{v}| = \lim_{\Delta t \to 0} \frac{|\Delta\mathbf{r}|}{\Delta t} = \lim_{\Delta t \to 0} \left(\frac{|\Delta\mathbf{r}|}{\Delta s} \cdot \frac{\Delta s}{\Delta t}\right) = (1)\left(\frac{ds}{dt}\right) = \frac{ds}{dt}
   $$
Therefore, $\mathbf{v} = v\mathbf{e}_t$ is strictly tangent to the path.

#### The Hodograph:
Plot all velocity vectors $\mathbf{v}(t)$ originating from a common origin $O'$. The locus traced by the tips of these velocity vectors in velocity-space is the **Hodograph**.

```
    Velocity Space (Hodograph)               Physical Trajectory Space
              v_y ^                                     y ^
                  |     Locus of Hodograph                |      Path Curve
                  |           *                           |         *
                  |          / \ a = dv/dt (tangent!)     |        / \ v (tangent)
                  |    v(t) /   \                         |       /   * a (points inward!)
                  O'-------+-----+---> v_x                O------+-----+----> x
```

- **On the Hodograph:** The acceleration vector $\mathbf{a} = \frac{d\mathbf{v}}{dt}$ is **strictly tangent to the Hodograph curve**.
- **On the Physical Trajectory:** The acceleration vector $\mathbf{a}$ is **not** tangent to the path! It always points toward the **concave (inner) side** of the physical trajectory curve.
:::

---

### Question 6 (Numerical): Velocity-Dependent Drag Integration
**Question:** A high-speed autonomous underwater vehicle moves horizontally in a test tank. After its engine cuts off at $t = 0$ ($x_0 = 0$, $v_0 = 20\text{ m/s}$), fluid resistance causes a retarding deceleration of $a = -0.05 v^2\text{ m/s}^2$. 
Determine:
1. The vehicle's velocity as a function of time $v(t)$, and its speed at $t = 2\text{ s}$.
2. The distance $x$ traveled before the vehicle slows to $v = 5\text{ m/s}$.

::: details Click to view Step-by-Step Solution
#### 1. Velocity as a Function of Time:
Acceleration depends on velocity ($a = f(v) = -0.05v^2$):
$$
a = \frac{dv}{dt} = -0.05 v^2 \implies \frac{dv}{v^2} = -0.05\,dt
$$
Integrate both sides from $t = 0$ ($v = v_0 = 20$) to time $t$ ($v$):
$$
\int_{20}^v v^{-2}\,dv = -0.05 \int_0^t dt
$$
$$
\left[ -\frac{1}{v} \right]_{20}^v = -0.05 t \implies -\frac{1}{v} + \frac{1}{20} = -0.05 t
$$
$$
\frac{1}{v} = \frac{1}{20} + 0.05 t = 0.05(1 + t) = \frac{1 + t}{20}
$$
$$
v(t) = \frac{20}{1 + t}\text{ (m/s)}
$$

At $t = 2\text{ s}$:
$$
v(2) = \frac{20}{1 + 2} = \frac{20}{3} \approx \mathbf{6.67\text{ m/s}}
$$

#### 2. Distance Traveled as a Function of Velocity:
Using the chain rule shortcut $a = v\frac{dv}{dx}$:
$$
v\frac{dv}{dx} = -0.05 v^2 \implies \frac{dv}{v} = -0.05\,dx
$$
Integrate from $x = 0$ ($v = 20$) to position $x$ ($v = 5$):
$$
\int_{20}^5 \frac{dv}{v} = -0.05 \int_0^x dx
$$
$$
\left[ \ln v \right]_{20}^5 = -0.05 x \implies \ln(5) - \ln(20) = -0.05 x
$$
$$
\ln\left(\frac{5}{20}\right) = \ln(0.25) \approx -1.38629 = -0.05 x
$$
$$
x = \frac{1.38629}{0.05} = \mathbf{27.73\text{ m}}
$$
The vehicle travels **$27.7\text{ m}$** while decelerating from $20\text{ m/s}$ to $5\text{ m/s}$.
:::

---

### Question 7 (Numerical): 3-Stage Vehicle Acceleration & Graphical Distance
**Question:** An electric performance car accelerates from rest along a straight drag strip according to the following profile:
- Accelerates uniformly from rest at $a_1 = 2.0\text{ m/s}^2$ for $t = 10\text{ s}$.
- Cruises at the acquired maximum velocity for $\Delta t_2 = 20\text{ s}$.
- Brakes uniformly to a complete stop at $a_3 = -4.0\text{ m/s}^2$.
Calculate the peak speed reached, the total elapsed time, and the total distance traveled using the $v\text{–}t$ area method.

::: details Click to view Step-by-Step Solution
#### 1. Peak Speed:
$$
v_{peak} = v_0 + a_1 t_1 = 0 + (2.0\text{ m/s}^2)(10\text{ s}) = \mathbf{20\text{ m/s}}
$$

#### 2. Braking Duration & Total Time:
$$
\Delta t_3 = \frac{0 - v_{peak}}{a_3} = \frac{-20\text{ m/s}}{-4.0\text{ m/s}^2} = 5.0\text{ s}
$$
Total time:
$$
t_{total} = t_1 + \Delta t_2 + \Delta t_3 = 10\text{ s} + 20\text{ s} + 5\text{ s} = \mathbf{35\text{ s}}
$$

#### 3. Distance via $v\text{–}t$ Geometric Areas:
- **Phase 1 (Triangle):**
  $$
  d_1 = \frac{1}{2}(\text{base})(\text{height}) = \frac{1}{2}(10\text{ s})(20\text{ m/s}) = 100\text{ m}
  $$
- **Phase 2 (Rectangle):**
  $$
  d_2 = (\text{base})(\text{height}) = (20\text{ s})(20\text{ m/s}) = 400\text{ m}
  $$
- **Phase 3 (Triangle):**
  $$
  d_3 = \frac{1}{2}(\text{base})(\text{height}) = \frac{1}{2}(5\text{ s})(20\text{ m/s}) = 50\text{ m}
  $$

Total distance traveled:
$$
d_{total} = d_1 + d_2 + d_3 = 100\text{ m} + 400\text{ m} + 50\text{ m} = \mathbf{550\text{ m}}
$$
:::

---

### Question 8 (Numerical): Football Kick Trajectory
**Question:** A soccer ball is kicked from ground level with an initial velocity of $v_0 = 25\text{ m/s}$ at an angle of $\theta = 37^\circ$ ($\cos 37^\circ \approx 0.7986, \sin 37^\circ \approx 0.6018$). Taking $g = 9.81\text{ m/s}^2$, determine:
1. The total time of flight $T$.
2. The maximum peak elevation $h_{max}$.
3. The horizontal distance (range $R$) where the ball lands.

::: details Click to view Step-by-Step Solution
#### 1. Initial Velocity Components:
$$
v_{x0} = 25 \cos 37^\circ = 25(0.7986) \approx 19.966\text{ m/s}
$$
$$
v_{y0} = 25 \sin 37^\circ = 25(0.6018) \approx 15.045\text{ m/s}
$$

#### 2. Time of Flight:
$$
T = \frac{2 v_{y0}}{g} = \frac{2(15.045\text{ m/s})}{9.81\text{ m/s}^2} = \frac{30.090}{9.81} \approx \mathbf{3.067\text{ s}} \approx \mathbf{3.07\text{ s}}
$$

#### 3. Maximum Peak Elevation:
$$
h_{max} = \frac{v_{y0}^2}{2g} = \frac{(15.045)^2}{2(9.81)} = \frac{226.35}{19.62} \approx \mathbf{11.54\text{ m}}
$$

#### 4. Horizontal Range:
$$
R = v_{x0} \cdot T = (19.966\text{ m/s})(3.067\text{ s}) \approx \mathbf{61.24\text{ m}} \approx \mathbf{61.2\text{ m}}
$$
:::

---

### Question 9 (Numerical): Telescoping Robotic Arm in Polar Coordinates
**Question:** A robotic manipulator rotates in a horizontal plane while telescoping radially outward. Its motion is programmed as:
$$
r(t) = 0.5 + 0.1 t^2\text{ (m)}, \qquad \theta(t) = 2.0 t\text{ (rad)}
$$
At timestamp $t = 2.0\text{ s}$, calculate:
1. The radial and transverse components of velocity ($v_r, v_\theta$) and the total speed $v$.
2. The radial and transverse components of acceleration ($a_r, a_\theta$) and the total acceleration magnitude $a$.

::: details Click to view Step-by-Step Solution
#### 1. Kinematic Derivatives at $t = 2.0\text{ s}$:
- $r(2) = 0.5 + 0.1(2)^2 = 0.5 + 0.4 = 0.9\text{ m}$
- $\dot{r}(t) = 0.2 t \implies \dot{r}(2) = 0.2(2) = 0.4\text{ m/s}$
- $\ddot{r}(t) = 0.2\text{ m/s}^2 = \text{constant}$
- $\theta(t) = 2.0 t \implies \dot{\theta} = 2.0\text{ rad/s} = \text{constant}$
- $\ddot{\theta} = 0\text{ rad/s}^2$

#### 2. Velocity Components:
- **Radial:**
  $$
  v_r = \dot{r} = \mathbf{0.40\text{ m/s}}
  $$
- **Transverse:**
  $$
  v_\theta = r\dot{\theta} = (0.9\text{ m})(2.0\text{ rad/s}) = \mathbf{1.80\text{ m/s}}
  $$
- **Total Speed:**
  $$
  v = \sqrt{v_r^2 + v_\theta^2} = \sqrt{(0.4)^2 + (1.8)^2} = \sqrt{0.16 + 3.24} = \sqrt{3.40} \approx \mathbf{1.844\text{ m/s}}
  $$

#### 3. Acceleration Components:
- **Radial Acceleration:**
  $$
  a_r = \ddot{r} - r\dot{\theta}^2 = 0.2 - (0.9)(2.0)^2 = 0.2 - 0.9(4.0) = 0.2 - 3.6 = \mathbf{-3.40\text{ m/s}^2}
  $$
- **Transverse Acceleration:**
  $$
  a_\theta = r\ddot{\theta} + 2\dot{r}\dot{\theta} = (0.9)(0) + 2(0.4)(2.0) = 0 + 1.6 = \mathbf{+1.60\text{ m/s}^2}
  $$
- **Total Acceleration Magnitude:**
  $$
  a = \sqrt{a_r^2 + a_\theta^2} = \sqrt{(-3.4)^2 + (1.6)^2} = \sqrt{11.56 + 2.56} = \sqrt{14.12} \approx \mathbf{3.758\text{ m/s}^2} \approx \mathbf{3.76\text{ m/s}^2}
  $$
:::

---

### Question 10 (Numerical): Pure Rolling Wheel Kinematics
**Question:** A heavy industrial locomotive wheel of radius $R = 0.6\text{ m}$ rolls without slipping along a horizontal track at a steady forward speed of $v_O = 15\text{ m/s}$. 
Determine:
1. The angular velocity $\omega$ of the wheel.
2. The instantaneous linear velocity and acceleration of the contact point $C$ touching the rail.
3. The instantaneous linear velocity and acceleration of the highest point $T$ on the top rim.

::: details Click to view Step-by-Step Solution
#### 1. Angular Velocity:
Under pure rolling without slipping:
$$
v_O = R\omega \implies \omega = \frac{v_O}{R} = \frac{15\text{ m/s}}{0.6\text{ m}} = \mathbf{25\text{ rad/s}}
$$

#### 2. Motion of Contact Point C (Bottom Rim):
- **Velocity:** By definition of pure rolling, the contact point is the Instantaneous Center of Zero Velocity:
  $$
  v_C = \mathbf{0}
  $$
- **Acceleration:** Even though velocity is instantaneously zero, the point is undergoing circular motion about the axle center $O$. It possesses an upward centripetal acceleration:
  $$
  a_C = R\omega^2 = (0.6\text{ m})(25\text{ rad/s})^2 = 0.6(625) = \mathbf{375\text{ m/s}^2\text{ (directed vertically upward)}}
  $$

#### 3. Motion of Top Point T (Top Rim):
- **Velocity:** Measured relative to instantaneous center $C$ (distance $2R$):
  $$
  v_T = (2R)\omega = 2 v_O = 2(15\text{ m/s}) = \mathbf{30\text{ m/s}\text{ (directed horizontally forward)}}
  $$
- **Acceleration:** Center $O$ moves at constant speed ($\alpha = 0$). Point $T$ accelerates centripetally toward center $O$ (downward):
  $$
  a_T = R\omega^2 = \mathbf{375\text{ m/s}^2\text{ (directed vertically downward)}}
  $$
:::

---

## Part B: Interactive Module 2 Quiz

Complete the eight-question self-check quiz below to test your mastery of Module 2 particle kinematics.

<QuizModule title="Module 2: Kinematics of Particles — Mastery Quiz" :questions="questions" />
