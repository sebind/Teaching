---
title: 4.1 Work of a Force & Principle of Work and Energy
description: Definition of mechanical work, scalar line integrals, work of gravity and springs, derivation of kinetic energy, and the Principle of Work and Energy.
---

# 4.1 Work of a Force & Principle of Work and Energy

::: tip Pedagogical Objective
In Newtonian kinetics ($\sum \mathbf{F} = m\mathbf{a}$), predicting velocities and displacements requires integrating vector differential equations with respect to time. When forces depend directly on position (such as gravity or springs), or when internal forces couple multiple bodies, vector kinetics becomes mathematically cumbersome.

**Energy Methods** bypass the time domain entirely! By integrating Newton's Second Law with respect to spatial displacement, we formulate the **Principle of Work and Energy** ($T_1 + U_{1\to 2} = T_2$). In this chapter, we master scalar work integrals, prove why kinetic energy is an invariant positive scalar, and observe how internal constraint forces seamlessly cancel out in coupled multi-particle systems.
:::

---

## 1. Work of a Force

### 1.1 Vector Definition of Differential Work

Consider a particle of mass $m$ moving along an arbitrary curved space trajectory under the influence of an applied force $\mathbf{F}$. Let $d\mathbf{r}$ denote the differential displacement vector of the particle along the curve.

```
                           Work of a Force Vector
                                  F
                                 ^
                                / 
                               / α
                              *----------> dr (Tangent to Path)
                           Particle P
                               \
                                \
                                 \
                                  O (Origin)
```

The **differential work** $dU$ performed by the force $\mathbf{F}$ during displacement $d\mathbf{r}$ is defined as the scalar dot product:

$$dU = \mathbf{F} \cdot d\mathbf{r}$$

Using the geometric definition of the dot product:

$$dU = F\,ds\cos\alpha = F_t\,ds$$

Where:
- $F = |\mathbf{F}|$ is the magnitude of the force.
- $ds = |d\mathbf{r}|$ is the differential arc length along the path.
- $\alpha$ is the angle between force vector $\mathbf{F}$ and displacement vector $d\mathbf{r}$.
- $F_t = F\cos\alpha$ is the scalar tangential component of $\mathbf{F}$ along the instantaneous direction of motion.

In three-dimensional Cartesian rectangular coordinates:

$$\mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k}, \quad d\mathbf{r} = dx\mathbf{i} + dy\mathbf{j} + dz\mathbf{k}$$

$$dU = F_x\,dx + F_y\,dy + F_z\,dz$$

::: info Key Physical Axiom: Sign & Normal Forces
- **Positive Work ($0^\circ \le \alpha < 90^\circ$):** Force has a forward component along motion ($dU > 0$), adding energy to the particle.
- **Negative Work ($90^\circ < \alpha \le 180^\circ$):** Force opposes motion ($dU < 0$, e.g., friction or braking), removing energy from the particle.
- **Zero Work ($\alpha = 90^\circ$):** Forces that are strictly perpendicular to displacement (such as normal contact forces $N$, frictionless guide reactions, or centripetal forces) perform **identically zero work** ($dU = 0$)!
- **SI Unit:** The Joule ($\text{J} = \text{N}\cdot\text{m} = \text{kg}\cdot\text{m}^2/\text{s}^2$).
:::

---

### 1.2 Finite Work & Line Integrals

The total work done by force $\mathbf{F}$ as the particle moves from an initial position $A_1$ (at arc coordinate $s_1$) to a final position $A_2$ (at arc coordinate $s_2$) is the line integral along the path:

$$U_{1\to 2} = \int_{A_1}^{A_2} \mathbf{F} \cdot d\mathbf{r} = \int_{s_1}^{s_2} F_t\,ds = \int_{s_1}^{s_2} (F\cos\alpha)\,ds$$

```
                   Work as Area Under the F_t - s Curve
          Tangential Force F_t
                   ^
                   |                   +------------------+
                   |                  /                    \
                   |                 /      WORK DONE       \
                   |                /      U_{1 -> 2}        \
                   |               /                          \
                   +--------------+----------------------------+------->
                                 s_1                          s_2   Path s
```

The total work done represents the **area under the tangential force-displacement curve** ($F_t$ vs. $s$).

---

### 1.3 Work of Common Engineering Forces

#### 1. Constant Force in Rectilinear Motion
If a force $\mathbf{F}$ is constant in both magnitude and direction, and the particle moves through a straight displacement $\Delta x = x_2 - x_1$ at an angle $\alpha$ to $\mathbf{F}$:

$$U_{1\to 2} = (F\cos\alpha)\Delta x$$

```
                          Work of Gravity
                                 y ^
                                   |  * A_1 (Elevation y_1)
                                   |   \
                                   |    \  Arbitrary Trajectory
                                   |     \
                                   |      * A_2 (Elevation y_2)
                               ----+----------------------------> x
                                   |  | W = mg (downward)
                                   |  v
```

#### 2. Work of Gravity (Weight)
Let a body of weight $W = mg$ move from elevation $y_1$ to elevation $y_2$ along any arbitrary 3D curve:
$$\mathbf{F}_g = -mg\,\mathbf{j}, \quad d\mathbf{r} = dx\,\mathbf{i} + dy\,\mathbf{j} + dz\,\mathbf{k}$$
$$dU = \mathbf{F}_g \cdot d\mathbf{r} = -mg\,dy$$

Integrating from state 1 to state 2:

$$U_{1\to 2} = \int_{y_1}^{y_2} (-mg)\,dy = -mg(y_2 - y_1) = -W(y_2 - y_1) = -W\,\Delta y$$

::: tip Path Independence of Gravitational Work
- If the body moves **downward** ($y_1 > y_2$): $U_{1\to 2} = +W h$ (Gravity does **positive** work).
- If the body moves **upward** ($y_1 < y_2$): $U_{1\to 2} = -W h$ (Gravity does **negative** work).
- If the body returns to its original elevation ($y_1 = y_2$): $U_{1\to 2} = 0$, regardless of the horizontal distance traveled!
:::

---

#### 3. Work of a Linear Elastic Spring

Consider a linear helical spring conforming to Hooke's Law: $F = k x$, where $k$ is the spring stiffness ($\text{N/m}$) and $x$ is the elongation or compression measured from the undeformed (free) length $l_0$.

```
                        Work of a Linear Spring
                                        x = 0 (Undeformed)
                                           |
                    //////////////////[ k ]* (Free length l_0)
                                           |
                    //////////////////[ k ]=======* x_1 (Initial stretch)
                                           |      |
                    //////////////////[ k ]==============* x_2 (Final stretch)
                                           |<---->|
                                             F_spring = k x (pulls backward)
```

As the spring is stretched by an external agent by amount $x$, the restoring force exerted by the spring on the particle opposes displacement: $\mathbf{F}_s = -kx\,\mathbf{i}$.
$$dU = \mathbf{F}_s \cdot d\mathbf{r} = (-kx\,\mathbf{i})\cdot(dx\,\mathbf{i}) = -kx\,dx$$

Integrating from initial deformation $x_1$ to final deformation $x_2$:

$$U_{1\to 2} = \int_{x_1}^{x_2} (-kx)\,dx = -\left[\frac{1}{2}kx^2\right]_{x_1}^{x_2} = \frac{1}{2}kx_1^2 - \frac{1}{2}kx_2^2$$

- If the spring is being further deformed ($|x_2| > |x_1|$), the spring force does **negative** work.
- If the spring is relaxing toward its undeformed state ($|x_2| < |x_1|$), the spring force does **positive** work.

---

## 2. Derivation of Kinetic Energy

Consider a particle of mass $m$ accelerating along an arbitrary path under net tangential force $F_t$.
From Newton's Second Law along the path tangent:

$$F_t = m a_t = m \frac{dv}{dt}$$

Using the chain rule of calculus to eliminate time $dt$:

$$a_t = \frac{dv}{dt} = \frac{dv}{ds}\frac{ds}{dt} = v\frac{dv}{ds}$$

Substitute this into the equation of motion:

$$F_t = m v \frac{dv}{ds} \implies F_t\,ds = m v\,dv$$

Integrating both sides along the trajectory from position $s_1$ (where speed is $v_1$) to position $s_2$ (where speed is $v_2$):

$$\int_{s_1}^{s_2} F_t\,ds = \int_{v_1}^{v_2} m v\,dv$$

The left-hand side is the total work done by all forces $U_{1\to 2}$:

$$U_{1\to 2} = \left[\frac{1}{2}m v^2\right]_{v_1}^{v_2} = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2$$

We define the scalar quantity **Kinetic Energy** ($T$) of a particle of mass $m$ moving with speed $v$ as:

$$T = \frac{1}{2}m v^2$$

::: info Why Kinetic Energy is Inherently a Positive Scalar
Kinetic Energy is a pure scalar quantity ($T \ge 0$):
1. Mass $m$ is intrinsically positive ($m > 0$).
2. Speed squared $v^2 = \mathbf{v}\cdot\mathbf{v} = v_x^2 + v_y^2 + v_z^2 \ge 0$ is non-negative regardless of the direction or sign of the velocity vector components.
3. Unlike vector momentum $\mathbf{L} = m\mathbf{v}$, kinetic energy has **no directional components**. A $1000\text{ kg}$ car moving north at $20\text{ m/s}$ has the exact same kinetic energy ($200\text{ kJ}$) as one moving south or west at $20\text{ m/s}$.
:::

---

## 3. The Principle of Work and Energy

Rearranging the integrated equation:

$$T_1 + U_{1\to 2} = T_2$$

Or equivalently:

$$U_{1\to 2} = T_2 - T_1 = \Delta T$$

::: info Statement of the Principle of Work and Energy
The total work done by all external forces acting on a particle as it moves between two arbitrary points equals the net change in the kinetic energy of the particle.
:::

```
    [ Initial Kinetic Energy ]     [ Net Work of All Forces ]     [ Final Kinetic Energy ]
          T_1 = ½ m v₁²       +           U_{1 -> 2}         =         T_2 = ½ m v₂²
```

### Strategic Engineering Advantages Over $\sum \mathbf{F} = m\mathbf{a}$:
1. **Direct Velocity-Displacement Link:** Connects forces, distances, and speeds directly in a single scalar equation, completely eliminating the need to solve for acceleration $a(t)$ or integrate over time $t$.
2. **Scalar Simplicity:** Works with scalar sums rather than vector component equations.
3. **Internal Forces Drop Out:** For interconnected rigid bodies or inextensible cables, internal forces occur in equal, opposite, collinear pairs with identical displacements, meaning their net work sums to **identically zero**:
   $$\sum U_{internal} = 0$$

---

## 4. Full Step-by-Step Worked Problems

### Worked Problem 4.1: Automobile Braking on an Incline
*(From PSG IAS Lecture Slide 16 & Official Important Questions Q9)*

An automobile of weight $W = 4000\text{ N}$ is driven down a $5^\circ$ inclined road at an initial speed of $v_1 = 90\text{ km/h}$. The driver applies the brakes, generating a constant total braking friction force of $F_{brake} = 1500\text{ N}$ opposing motion.
Using the Principle of Work and Energy, determine the stopping distance $x$ required for the automobile to come to a complete halt ($v_2 = 0$).

```
                      Automobile Braking on Incline
                                      ^ N
                                      |
                     F_brake <--------+  (1500 N uphill)
                                     /|
                                    / | W = 4000 N
                                   /  v
                                  / 5°
                       ----------+--------------------
                              <---- x (Stopping Distance) ---->
```

::: details Click to view Step-by-Step Solution

#### Step 1: System Parameters & Kinematic Data
- Weight of car: $W = 4000\text{ N}$
- Mass of car:
  $$m = \frac{W}{g} = \frac{4000}{9.81} = 407.75\text{ kg}$$
  *(Using $g = 9.8\text{ m/s}^2$: $m = \frac{4000}{9.8} = 408.16\text{ kg}$)*
- Incline angle: $\theta = 5^\circ$
- Initial velocity:
  $$v_1 = 90\text{ km/h} = \frac{90}{3.6} = 25\text{ m/s}$$
- Final velocity:
  $$v_2 = 0\text{ m/s}$$

#### Step 2: Kinetic Energies
- Initial Kinetic Energy:
  $$T_1 = \frac{1}{2} m v_1^2 = \frac{1}{2}(407.75)(25)^2 = 127,422\text{ J}$$
  *(Using $g = 9.8\text{ m/s}^2$ as in the slide: $T_1 = \frac{1}{2}(408.16)(25)^2 = 127,550\text{ J}$)*
- Final Kinetic Energy:
  $$T_2 = \frac{1}{2} m v_2^2 = 0\text{ J}$$

#### Step 3: Work Done by All External Forces ($U_{1\to 2}$)
As the car moves a distance $x$ down the $5^\circ$ incline, three forces act:
1. **Normal Reaction $N$:** Acts perpendicular to the incline ($\alpha = 90^\circ$):
   $$U_N = 0\text{ J}$$
2. **Braking Force $F_{brake} = 1500\text{ N}$:** Acts up the incline, strictly opposing motion ($\alpha = 180^\circ$):
   $$U_{brake} = -F_{brake} \cdot x = -1500 x$$
3. **Gravity (Weight $W$):** The car descends through a vertical height $h = x\sin 5^\circ$:
   $$U_g = +W h = +W(x\sin 5^\circ) = 4000 \sin(5^\circ) \cdot x$$
   $$\sin(5^\circ) = 0.087156 \implies U_g = 4000(0.087156)x = +348.62 x$$

Total work performed on the automobile:
$$U_{1\to 2} = U_{brake} + U_g = -1500 x + 348.62 x = -1151.38 x$$

#### Step 4: Apply the Principle of Work and Energy
$$T_1 + U_{1\to 2} = T_2$$
$$127,422 - 1151.38 x = 0$$
$$1151.38 x = 127,422$$
$$x = \frac{127,422}{1151.38} = 110.67\text{ m} \approx 110.8\text{ m}$$

*(Using the textbook slide values with $g = 9.8\text{ m/s}^2$:*
$$127,550 - 1151.37 x = 0 \implies x = \frac{127,550}{1151.37} = 110.78\text{ m} \approx 110.82\text{ m}$$*)*

#### Conclusion:
The vehicle requires a stopping distance of **$110.8\text{ m}$**. Notice that the downhill component of weight ($+348.62\text{ N}$) actively fights the brakes, significantly extending the stopping distance compared to level ground ($x_{level} = \frac{127,422}{1500} = 85.0\text{ m}$).
:::

---

### Worked Problem 4.2: Coupled Multi-Particle System with Friction
*(From PSG IAS Lecture Slide 19 & Official Important Questions Q10)*

Two blocks $A$ ($m_A = 200\text{ kg}$) and $B$ ($m_B = 300\text{ kg}$) are connected by an inextensible cord passing over a frictionless, massless pulley. Block $A$ rests on a rough horizontal surface with coefficient of kinetic friction $\mu_k = 0.25$, while block $B$ hangs suspended vertically.
The system is released from rest ($v_1 = 0$).
Using the Principle of Work and Energy, calculate the velocity $v$ of the blocks after block $B$ has descended a distance of $d = 2\text{ m}$. Take $g = 9.81\text{ m/s}^2$.

```
                       Coupled Blocks Work-Energy
                 N_A ^
                     |    m_A = 200 kg   T
            F_k <----+----[ A ]--------->----( O )
                     |                         |
                     v W_A = m_A g             | T
                                               |
                                             +---+
                                             | B | m_B = 300 kg
                                             +---+
                                               |
                                               v W_B = m_B g (drops 2 m)
```

::: details Click to view Step-by-Step Solution

#### Step 1: Kinematics & Internal Force Cancellation
Because the cable is inextensible:
- When block $B$ descends by distance $d = 2\text{ m}$, block $A$ slides horizontally to the right by the exact same distance $d = 2\text{ m}$.
- At all times, the speeds are identical: $v_A = v_B = v$.
- The internal cable tension $T$ does work $+T \cdot d$ on block $A$ and $-T \cdot d$ on block $B$. When treating the two blocks and cable as a **single system**, the net work done by cable tension is:
  $$U_T = +T d - T d = 0\text{ J}$$
  Internal constraint forces drop out completely!

#### Step 2: Initial and Final Kinetic Energies of the System
- Released from rest:
  $$T_1 = 0\text{ J}$$
- Final Kinetic Energy of both masses combined:
  $$T_2 = \frac{1}{2} m_A v^2 + \frac{1}{2} m_B v^2 = \frac{1}{2}(m_A + m_B)v^2$$
  $$T_2 = \frac{1}{2}(200 + 300)v^2 = \frac{1}{2}(500)v^2 = 250 v^2$$

#### Step 3: Work Done by External Forces ($U_{1\to 2}$)
Only external forces acting through a displacement perform work:
1. **Normal Reaction and Weight of Block $A$:**
   $$\sum F_y = N_A - m_A g = 0 \implies N_A = m_A g = 200 \times 9.81 = 1962\text{ N}$$
   Since displacement is horizontal, $W_A$ and $N_A$ do **zero work**.
2. **Kinetic Friction on Block $A$:**
   $$F_k = \mu_k N_A = 0.25 \times 1962 = 490.5\text{ N}$$
   Friction opposes displacement ($d = 2\text{ m}$):
   $$U_{friction} = -F_k \cdot d = -490.5 \times 2 = -981\text{ J}$$
3. **Weight of Suspended Block $B$:**
   $$W_B = m_B g = 300 \times 9.81 = 2943\text{ N}$$
   Block $B$ moves vertically downward in the direction of gravity:
   $$U_{gravity} = +W_B \cdot d = +2943 \times 2 = +5886\text{ J}$$

Total external work on the coupled system:
$$U_{1\to 2} = U_{gravity} + U_{friction} = 5886 - 981 = 4905\text{ J}$$
*(Or written per unit displacement: $U_{1\to 2} = (2943 - 490.5) \times 2 = 2452.5 \times 2 = 4905\text{ J}$)*

#### Step 4: Apply the Principle of Work and Energy
$$T_1 + U_{1\to 2} = T_2$$
$$0 + 4905 = 250 v^2$$
$$v^2 = \frac{4905}{250} = 19.62$$
$$v = \sqrt{19.62} = 4.4294\text{ m/s} \approx 4.43\text{ m/s}$$

#### Pedagogical Verification via Newton's 2nd Law:
Let us cross-verify via acceleration:
$$a = \frac{W_B - F_k}{m_A + m_B} = \frac{2943 - 490.5}{500} = \frac{2452.5}{500} = 4.905\text{ m/s}^2$$
Using kinematics $v^2 = v_0^2 + 2ad$:
$$v^2 = 0 + 2(4.905)(2) = 19.62 \implies v = 4.43\text{ m/s}$$
Both methods produce identical results, but the Work-Energy method solved the problem in a single scalar line without needing acceleration!
:::

---

## 5. Summary & Review Checklist

Before proceeding to Section 4.2 on Potential Energy, Conservation of Energy, and Power:
- [x] Write the scalar line integral expression for work: $U_{1\to 2} = \int_{s_1}^{s_2} F_t\,ds$.
- [x] Prove that forces normal to the path ($N$) do zero mechanical work.
- [x] State the formulas for gravitational work ($-W\Delta y$) and spring work ($\frac{1}{2}kx_1^2 - \frac{1}{2}kx_2^2$).
- [x] Derive Kinetic Energy $T = \frac{1}{2}mv^2$ from $F_t = mv\frac{dv}{ds}$.
- [x] State the Principle of Work and Energy ($T_1 + U_{1\to 2} = T_2$) and explain why internal cable forces cancel.
