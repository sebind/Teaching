# 2.3 Projectile, Rotary & Rolling Kinematics

In this chapter, we master the three classic forms of planar particle motion in engineering physics:
1. **Projectile Motion:** Ballistics under constant uniform gravitational acceleration.
2. **Rotary Motion & Polar Coordinates:** Orbital, radial, and centrifugal kinematics including Coriolis effects.
3. **Rolling Motion Kinematics:** Pure rolling without slipping, the Instantaneous Center of Zero Velocity, and the cycloid trajectory.

---

## 1. Projectile Motion: Parabolic Ballistics

When an object is launched into the air near the Earth's surface and experiences only the downward pull of gravity (neglecting aerodynamic drag), its acceleration vector is strictly constant:
$$
\mathbf{a} = -g\mathbf{j}
$$
In Cartesian components:
$$
a_x = 0, \qquad a_y = -g = -9.81\text{ m/s}^2
$$

```
              y ^                      Peak (v_y = 0)
                |                           *
                |                     .     |     .
                |                 .   |     |h_max    .
                |             .       |     |             .
                | v_0     .           |     |                 .
                |  /  .               |     |                     .
                | /θ                  |     |                         .
                O+--------------------+-----+--------------------------*----> x
                 |                     x_peak                            Range R
```

### The Kinematic Decoupling Table
Because $a_x = 0$ and $a_y = -g$ are constant, we integrate both coordinate axes completely independently:

| Kinematic Variable | Horizontal Motion ($a_x = 0$) | Vertical Motion ($a_y = -g$) |
| :--- | :--- | :--- |
| **Acceleration** | $a_x = 0$ | $a_y = -g$ |
| **Velocity** | $v_x = v_0 \cos\theta = \text{constant}$ | $v_y = v_0 \sin\theta - gt$ |
| **Position** | $x(t) = (v_0 \cos\theta)t$ | $y(t) = y_0 + (v_0 \sin\theta)t - \frac{1}{2}gt^2$ |

### The Parabolic Trajectory Derivation
To obtain the geometric equation of the path, we eliminate time $t$ from the parametric equations. From the horizontal position:
$$
t = \frac{x}{v_0 \cos\theta}
$$

Substitute this expression into the vertical position equation (with launch origin $y_0 = 0$):
$$
y = (v_0 \sin\theta)\left(\frac{x}{v_0 \cos\theta}\right) - \frac{1}{2}g\left(\frac{x}{v_0 \cos\theta}\right)^2
$$
$$
y = x \tan\theta - \frac{g}{2v_0^2 \cos^2\theta} x^2
$$

This equation is of the standard algebraic form $y = c_1 x - c_2 x^2$, which is the rigorous mathematical proof that **an unguided ballistic projectile traces a pure inverted parabola**.

### Key Ballistic Performance Formulas (Level Ground Launch)
1. **Time to Reach Peak Elevation ($t_{peak}$):**
   At the highest point, vertical velocity vanishes ($v_y = 0$):
   $$
   0 = v_0 \sin\theta - g t_{peak} \implies t_{peak} = \frac{v_0 \sin\theta}{g}
   $$
2. **Total Time of Flight ($T$):**
   By parabolic symmetry, time to return to ground ($y = 0$) is double $t_{peak}$:
   $$
   T = 2 t_{peak} = \frac{2v_0 \sin\theta}{g}
   $$
3. **Maximum Elevation ($h_{max}$):**
   Substitute $t_{peak}$ into $y(t)$:
   $$
   h_{max} = (v_0 \sin\theta)\left(\frac{v_0 \sin\theta}{g}\right) - \frac{1}{2}g\left(\frac{v_0 \sin\theta}{g}\right)^2 = \frac{v_0^2 \sin^2\theta}{2g}
   $$
4. **Horizontal Range ($R$):**
   Substitute flight time $T$ into horizontal position:
   $$
   R = (v_0 \cos\theta) T = (v_0 \cos\theta)\left(\frac{2v_0 \sin\theta}{g}\right) = \frac{v_0^2 (2\sin\theta\cos\theta)}{g}
   $$
   Applying the trigonometric double-angle identity $2\sin\theta\cos\theta = \sin 2\theta$:
   $$
   R = \frac{v_0^2 \sin 2\theta}{g}
   $$

::: tip Calculus Proof: Maximum Range at $\theta = 45^\circ$
To find the launch angle that maximizes horizontal range $R(\theta)$ on flat ground, differentiate $R$ with respect to $\theta$ and set to zero:
$$
\frac{dR}{d\theta} = \frac{d}{d\theta}\left(\frac{v_0^2 \sin 2\theta}{g}\right) = \frac{v_0^2}{g}(2\cos 2\theta) = 0
$$
Since $v_0 \ne 0$:
$$
\cos 2\theta = 0 \implies 2\theta = 90^\circ \implies \theta = 45^\circ
$$
Second derivative check: $\frac{d^2R}{d\theta^2} = -\frac{4v_0^2}{g}\sin 2\theta < 0$, confirming a true mathematical maximum.
:::

---

### Worked Problem: Artillery Cannon on a 150-m Ocean Cliff
**Statement:** A coastal artillery gun positioned on a cliff $h_0 = 150\text{ m}$ above sea level fires a projectile with a muzzle velocity of $v_0 = 180\text{ m/s}$ at an elevation angle of $\theta = 30^\circ$ above the horizontal. Neglecting air drag and taking $g = 9.81\text{ m/s}^2$:
1. Determine the maximum height $H_{max}$ reached by the shell above sea level.
2. Determine the total time of flight $t_{impact}$ before the shell impacts the ocean surface.
3. Determine the horizontal distance $x_{impact}$ from the base of the cliff to the splash point.

::: details Click to view Step-by-Step Solution
#### 1. Initial Velocity Components:
$$
v_{x0} = v_0 \cos 30^\circ = 180 \left(\frac{\sqrt{3}}{2}\right) \approx 155.88\text{ m/s}
$$
$$
v_{y0} = v_0 \sin 30^\circ = 180 (0.5000) = 90.00\text{ m/s}
$$

#### 2. Maximum Elevation Above Sea Level:
The vertical climb above the cliff edge is:
$$
h = \frac{v_{y0}^2}{2g} = \frac{(90.00\text{ m/s})^2}{2(9.81\text{ m/s}^2)} = \frac{8100}{19.62} \approx 412.84\text{ m}
$$
Total elevation above sea level:
$$
H_{max} = h_0 + h = 150\text{ m} + 412.84\text{ m} \approx \mathbf{562.8\text{ m}} \approx \mathbf{563\text{ m}}
$$

#### 3. Total Time of Flight:
Set origin at cliff launch point ($y_0 = 0$). The ocean surface is at $y = -150\text{ m}$:
$$
y(t) = v_{y0} t - \frac{1}{2}gt^2
$$
$$
-150 = 90.00 t - 4.905 t^2 \implies 4.905 t^2 - 90.00 t - 150 = 0
$$

Applying the quadratic formula:
$$
t = \frac{90.00 \pm \sqrt{(-90.00)^2 - 4(4.905)(-150)}}{2(4.905)} = \frac{90.00 \pm \sqrt{8100 + 2943}}{9.81}
$$
$$
t = \frac{90.00 \pm \sqrt{11043}}{9.81} = \frac{90.00 \pm 105.086}{9.81}
$$
Taking the positive physical root:
$$
t_{impact} = \frac{90.00 + 105.086}{9.81} = \frac{195.086}{9.81} \approx \mathbf{19.886\text{ s}} \approx \mathbf{19.91\text{ s}}
$$

#### 4. Horizontal Impact Distance (Range):
$$
x_{impact} = v_{x0} \cdot t_{impact} = (155.88\text{ m/s})(19.886\text{ s}) \approx \mathbf{3099.8\text{ m}} \approx \mathbf{3100\text{ m}}
$$
The artillery shell strikes the ocean **$3.10\text{ km}$** offshore after nearly $20\text{ seconds}$ of flight!
:::

---

## 2. Rotary Motion & Polar Coordinates $(r, \theta)$

When tracking particles that swing about a pivot, travel down rotating spiral chutes, or orbit celestial bodies, Cartesian coordinates $(x, y)$ become cumbersome. We adopt **Polar Coordinates** defined by radial distance $r$ and polar angle $\theta$.

```
              y ^
                |                    * P (r, θ)
                |                   /|
                |                  / | e_θ (transverse unit vector)
                |                 /  ^ 
                |            r   /  / 
                |               /  /   e_r (radial unit vector)
                |              /  v 
                |         θ   /
                O------------+--------------> x
```

### Rotating Unit Vectors
In polar coordinates, the unit vectors $\mathbf{e}_r$ and $\mathbf{e}_\theta$ rotate with the particle:
$$
\mathbf{e}_r = \cos\theta\mathbf{i} + \sin\theta\mathbf{j}
$$
$$
\mathbf{e}_\theta = -\sin\theta\mathbf{i} + \cos\theta\mathbf{j}
$$

Differentiating with respect to time using the chain rule:
$$
\frac{d\mathbf{e}_r}{dt} = (-\sin\theta\,\dot{\theta})\mathbf{i} + (\cos\theta\,\dot{\theta})\mathbf{j} = \dot{\theta}(-\sin\theta\mathbf{i} + \cos\theta\mathbf{j}) = \dot{\theta}\mathbf{e}_\theta
$$
$$
\frac{d\mathbf{e}_\theta}{dt} = (-\cos\theta\,\dot{\theta})\mathbf{i} - (\sin\theta\,\dot{\theta})\mathbf{j} = -\dot{\theta}(\cos\theta\mathbf{i} + \sin\theta\mathbf{j}) = -\dot{\theta}\mathbf{e}_r
$$

### Kinematic Derivation: Velocity & Acceleration

1. **Position Vector:**
   $$
   \mathbf{r} = r\mathbf{e}_r
   $$
2. **Velocity Vector (differentiating position):**
   $$
   \mathbf{v} = \frac{d\mathbf{r}}{dt} = \frac{d}{dt}(r\mathbf{e}_r) = \dot{r}\mathbf{e}_r + r\frac{d\mathbf{e}_r}{dt} = \dot{r}\mathbf{e}_r + r\dot{\theta}\mathbf{e}_\theta
   $$
   - Radial velocity: $v_r = \dot{r}$ (rate of stretching)
   - Transverse velocity: $v_\theta = r\dot{\theta}$ (speed of angular sweeping)
3. **Acceleration Vector (differentiating velocity):**
   $$
   \mathbf{a} = \frac{d\mathbf{v}}{dt} = \frac{d}{dt}\left(\dot{r}\mathbf{e}_r + r\dot{\theta}\mathbf{e}_\theta\right) = \ddot{r}\mathbf{e}_r + \dot{r}\frac{d\mathbf{e}_r}{dt} + (\dot{r}\dot{\theta} + r\ddot{\theta})\mathbf{e}_\theta + r\dot{\theta}\frac{d\mathbf{e}_\theta}{dt}
   $$
   Substitute $\frac{d\mathbf{e}_r}{dt} = \dot{\theta}\mathbf{e}_\theta$ and $\frac{d\mathbf{e}_\theta}{dt} = -\dot{\theta}\mathbf{e}_r$:
   $$
   \mathbf{a} = \ddot{r}\mathbf{e}_r + \dot{r}(\dot{\theta}\mathbf{e}_\theta) + \dot{r}\dot{\theta}\mathbf{e}_\theta + r\ddot{\theta}\mathbf{e}_\theta + r\dot{\theta}(-\dot{\theta}\mathbf{e}_r)
   $$
   Grouping like unit vectors:
   $$
   \mathbf{a} = (\ddot{r} - r\dot{\theta}^2)\mathbf{e}_r + (r\ddot{\theta} + 2\dot{r}\dot{\theta})\mathbf{e}_\theta
   $$

### Physical Anatomy of Acceleration Terms

| Component | Mathematical Term | Physical Name & Interpretation |
| :--- | :--- | :--- |
| **Radial ($a_r$)** | $\ddot{r}$ | Linear acceleration of radial extension |
| | **$-r\dot{\theta}^2$** | **Centripetal Acceleration:** Inward directed acceleration caused by rotation |
| **Transverse ($a_\theta$)** | $r\ddot{\theta}$ | Circular tangential acceleration due to angular acceleration $\alpha$ |
| | **$+2\dot{r}\dot{\theta}$** | **Coriolis Acceleration:** Geometric coupling between radial expansion rate ($\dot{r}$) and coordinate rotation rate ($\dot{\theta}$) |

### Reduction to a Fixed Circular Path ($r = \text{constant}$)
When a particle moves in a circular path of fixed radius $r$ ($dr/dt = 0, d^2r/dt^2 = 0$):
$$
v = r\dot{\theta} = r\omega
$$
$$
a_r = -r\dot{\theta}^2 = -r\omega^2 = -\frac{v^2}{r} \quad (\text{Centripetal normal acceleration } a_n)
$$
$$
a_\theta = r\ddot{\theta} = r\alpha = a_t \quad (\text{Tangential acceleration } a_t)
$$

### The Book-Rotation Experiment: Why Finite Rotation Is Not a Vector
In physics, a vector must satisfy the **commutative law of addition** ($\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$).

::: info The Classic Textbook Experiment
Take a hardcover book resting on a table:
- **Experiment 1:** First rotate it $90^\circ$ about the $x$-axis ($\mathbf{R}_x$), then rotate it $90^\circ$ about the $y$-axis ($\mathbf{R}_y$). Observe its final 3D orientation.
- **Experiment 2:** Reset the book. Now rotate it first $90^\circ$ about the $y$-axis ($\mathbf{R}_y$), then $90^\circ$ about the $x$-axis ($\mathbf{R}_x$).
- **The Result:** The book finishes in two completely different physical orientations!
$$
\mathbf{R}_x + \mathbf{R}_y \ne \mathbf{R}_y + \mathbf{R}_x
$$
**Conclusion:** Finite angular displacements $\Delta\theta$ are **not vectors**. However, infinitesimal rotations $d\boldsymbol{\theta}$ commute perfectly ($d\boldsymbol{\theta}_1 + d\boldsymbol{\theta}_2 = d\boldsymbol{\theta}_2 + d\boldsymbol{\theta}_1$). Thus, the instantaneous angular velocity $\boldsymbol{\omega} = \frac{d\boldsymbol{\theta}}{dt}$ is a true physical vector!
:::

### Angular Kinematics & Conversions
- **Revolutions per minute (rpm) to radians per second:**
  $$
  \omega = \frac{2\pi N}{60} \quad (N\text{ in rpm})
  $$
- **Linear–Angular Bridge:**
  $$
  s = r\theta, \qquad v = r\omega, \qquad a_t = r\alpha, \qquad a_n = \frac{v^2}{r} = r\omega^2
  $$

---

### Worked Problem: Boy Flying a Kite at Constant Elevation
**Statement:** A boy flies a kite that is maintained at a constant vertical elevation of $h = 60\text{ m}$. The kite moves horizontally away from the boy at a steady speed of $v = 6\text{ km/h}$. At the instant when the released cord has a length of $r = 75\text{ m}$:
1. Determine the rate $\dot{r}$ at which the cord is spooling out.
2. Determine the angular velocity $\dot{\theta}$ of the cord.
3. Determine the radial acceleration $\ddot{r}$ of the cord.

```
       y ^
         |                                 * Kite (h = 60 m const, v_x = 6 km/h)
         |                                /|
         |                         r=75m / |
         |                              /  | h = 60 m
         |                             /   |
         |                            /    |
         O---------------------------+-----+------> x
                                     x
```

::: details Click to view Step-by-Step Solution
#### 1. Conversion to SI Units & Geometric Setup:
$$
v_x = 6\text{ km/h} = \frac{6 \times 1000\text{ m}}{3600\text{ s}} = \frac{5}{3}\text{ m/s} \approx 1.6667\text{ m/s}
$$
From the right triangle formed by the boy, ground projection, and kite:
- Height: $y = h = 60\text{ m} = \text{constant}$
- Cord length: $r = 75\text{ m}$
- Horizontal ground distance:
  $$
  x = \sqrt{r^2 - h^2} = \sqrt{(75)^2 - (60)^2} = \sqrt{5625 - 3600} = \sqrt{2025} = 45\text{ m}
  $$
- Elevation angle $\theta$:
  $$
  \sin\theta = \frac{h}{r} = \frac{60}{75} = 0.8, \qquad \cos\theta = \frac{x}{r} = \frac{45}{75} = 0.6
  $$
  $$
  \theta = \sin^{-1}(0.8) \approx 53.13^\circ
  $$

#### 2. Rate of Cord Spooling ($\dot{r}$):
By Pythagorean theorem along the cord:
$$
r^2 = x^2 + h^2
$$
Differentiating with respect to time (noting that $dh/dt = 0$ since elevation is constant):
$$
2r \dot{r} = 2x \dot{x} + 0 \implies r\dot{r} = x v_x
$$
$$
\dot{r} = \left(\frac{x}{r}\right)v_x = (\cos\theta)v_x = (0.6)\left(\frac{5}{3}\text{ m/s}\right) = \mathbf{1.000\text{ m/s}}
$$
The string pays out at a rate of exactly **$1.00\text{ m/s}$**.

#### 3. Angular Velocity ($\dot{\theta}$):
The horizontal and vertical components of the kite's velocity are:
$$
v_x = \frac{5}{3}\text{ m/s}, \qquad v_y = 0
$$
Projecting velocity into the transverse direction ($\mathbf{e}_\theta$):
$$
v_\theta = -v_x \sin\theta + v_y \cos\theta = -\left(\frac{5}{3}\right)(0.8) + 0 = -\frac{4}{3}\text{ m/s}
$$
Since $v_\theta = r\dot{\theta}$:
$$
\dot{\theta} = \frac{v_\theta}{r} = \frac{-4/3\text{ m/s}}{75\text{ m}} = -\frac{4}{225}\text{ rad/s} \approx \mathbf{-0.01778\text{ rad/s}}
$$
The negative sign indicates the cord angle is flattening as the kite moves outward.

#### 4. Acceleration of Spooling ($\ddot{r}$):
Differentiating the relation $r\dot{r} = x v_x$ with respect to time:
$$
\frac{d}{dt}(r\dot{r}) = \frac{d}{dt}(x v_x)
$$
$$
\dot{r}^2 + r\ddot{r} = \dot{x} v_x + x\left(\frac{dv_x}{dt}\right)
$$
Since the kite moves at constant speed ($dv_x/dt = 0$ and $\dot{x} = v_x$):
$$
\dot{r}^2 + r\ddot{r} = v_x^2
$$
$$
r\ddot{r} = v_x^2 - \dot{r}^2 \implies \ddot{r} = \frac{v_x^2 - \dot{r}^2}{r}
$$
Substitute the values:
$$
\ddot{r} = \frac{\left(\frac{5}{3}\right)^2 - (1.0)^2}{75} = \frac{\frac{25}{9} - 1}{75} = \frac{\frac{16}{9}}{75} = \frac{16}{675} \approx \mathbf{0.0237\text{ m/s}^2}
$$

*(Check via polar acceleration: Since the kite travels at constant velocity, its net physical acceleration is zero ($\mathbf{a} = \mathbf{0}$). Thus the radial component must vanish: $a_r = \ddot{r} - r\dot{\theta}^2 = 0 \implies \ddot{r} = r\dot{\theta}^2 = (75)(-0.017778)^2 = 75(0.000316) = 0.0237\text{ m/s}^2 \quad \checkmark$).*
:::

---

## 3. Rolling Motion Kinematics

Rolling motion without slipping is one of the most fundamental kinematic phenomena in mechanical engineering, governing automotive wheels, roller bearings, and locomotive traction.

```
                  v_top = 2 R ω = 2 v_O
                       +--------->
                      /|         \
                     / |          \
                    |  * Center O  | ----> v_O = R ω, a_O = R α
                     \ |          /
                      \|         /
        ---------------+---------+-------------- Ground
                       C (v_C = 0: Instantaneous Center of Zero Velocity)
```

### The Pure Rolling No-Slip Condition
When a cylindrical wheel of radius $R$ rolls without slipping along a flat surface:
1. **Linear Center Translation:**
   $$
   s_O = R\theta
   $$
   $$
   v_O = R\omega
   $$
   $$
   a_O = R\alpha
   $$
2. **The Instantaneous Center of Zero Velocity (IC):**
   At any instant, the contact point $C$ touching the ground does not slide. Its velocity is identically zero:
   $$
   \mathbf{v}_C = \mathbf{0}
   $$
   The wheel can be treated as if it were momentarily rotating purely about point $C$ with angular velocity $\omega$!

### Velocity Distribution Across the Wheel
By relative velocity about the Instantaneous Center $C$:
$$
\mathbf{v}_P = \boldsymbol{\omega} \times \mathbf{r}_{P/C}
$$
- **Bottom Point (Contact $C$):** $v_C = 0$
- **Center Point ($O$):** $v_O = R\omega$
- **Top Point ($T$):** Distance from $C$ is $2R$, so:
  $$
  v_T = (2R)\omega = 2 v_O
  $$
  The highest point on a rolling wheel travels forward at **twice the vehicle's speed**!

### The Cycloid Trajectory
As the wheel rolls forward, any fixed point on the outer circumference traces a geometric curve called a **Cycloid**:
$$
x(t) = R(\omega t - \sin\omega t)
$$
$$
y(t) = R(1 - \cos\omega t)
$$
At the exact moment the rim point touches the ground ($y = 0$), its velocity is zero ($v = 0$), and its acceleration is directed purely upward toward the wheel center: $a = R\omega^2$.

---

## 4. Interactive Laboratory: Projectile & Rolling Lab

Explore both projectile flight dynamics and pure rolling kinematics using the dual-tab interactive canvas simulator below:
- **Tab 1: Cliff Ballistics Launcher:** Adjust launch velocity $v_0$, angle $\theta$, and cliff height $h_0$. Observe the parabolic trajectory, live velocity vector decomposition, and the velocity-space Hodograph inset!
- **Tab 2: Pure Rolling Wheel & Cycloid:** Animate a rolling wheel to see the zero velocity at contact point $C$, the $2v_O$ velocity vector at the top rim, and watch the cycloid locus trace out in real time.

<ProjectileAndRollingLab />
