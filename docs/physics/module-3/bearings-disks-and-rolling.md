---
title: 3.3 Axle Friction, Thrust Bearings, Disks & Rolling Resistance
description: Theoretical mechanics of journal bearings, circle of friction, thrust collar and disk friction, clutch torque capacity, and rolling resistance mechanisms.
---

# 3.3 Axle Friction, Thrust Bearings, Disks & Rolling Resistance

::: tip Pedagogical Objective
Rotating shafts, axles, clutches, and wheels represent the lifeblood of mechanical power transmission. In this chapter, we investigate the rotational counterparts of Coulomb friction:
1. **Journal Bearings & Axle Friction:** How a rotating shaft "climbs" the bearing wall, establishing the **Circle of Friction** whose radius is invariant to external loading.
2. **Thrust Bearings & Disk Clutches:** Formulating the torque capacity of annular collars and flat friction disks via continuous surface integration.
3. **Rolling Resistance:** Resolving the "Free-Wheel Paradox" through ground contact patch deformation, material hysteresis, and the dimensional coefficient of rolling resistance $b$.
:::

---

## 1. Journal Bearings vs. Thrust Bearings

Bearings support rotating machine shafts while constraining their motion:

```
+---------------------------------------+---------------------------------------+
|            JOURNAL BEARINGS           |            THRUST BEARINGS            |
+---------------------------------------+---------------------------------------+
| • Support RADIAL (transverse) loads   | • Support AXIAL (longitudinal) loads  |
|   acting perpendicular to the shaft   |   acting parallel to the shaft        |
|   axis of rotation.                   |   centerline.                         |
| • Contact takes place along a         | • Contact takes place along flat      |
|   cylindrical surface of radius r.    |   annular disks, collars, or pivots.  |
| • Frictional resistance creates a     | • Resisting torque is found by        |
|   couple governed by the Circle of    |   integrating shear across concentric |
|   Friction: M = R r sin φ_k           |   differential rings.                 |
+---------------------------------------+---------------------------------------+
```

```
               Radial Load W                            Axial Load P
                    |                                       |
                    v                                       v
             +--------------+                       +---------------+
             | Shaft/Journal|                       |    Shaft      |
       ======|==============|======                 +-------+-------+
             |   Bearing    |                               |
             +--------------+                               v
            [ JOURNAL BEARING ]                     ================= Collar/Disk
                                                    [ THRUST BEARING ]
```

---

## 2. Axle Friction & The Circle of Friction

Consider an axle (or shaft) of radius $r$ carrying a transverse load $\mathbf{W}$ and fitted loosely inside a fixed cylindrical journal bearing.

```
                           Axle "Climb" & Circle of Friction
                                      Bearing
                                    /         \
                                   /     O     \
                                  |     /|      |
                                  | r_f/ | r    |
                                  |   /  |      |
                                   \ *---*     /
                                    \   B     /
                                     \   ^   /
                                      \  |  /
                                       \ | /
                                         R (tangent to Circle of Friction)
```

### 2.1 The Phenomenon of Axle "Climb"
1. **At Rest:** When no driving torque is applied, the axle sits symmetrically at the lowest point of the bearing ($B_0$). The normal reaction from the bearing acts vertically upward along the line of centers.
2. **Impending CCW Rotation:** When a counter-clockwise driving torque is applied, the axle attempts to roll counter-clockwise. The contact point **climbs up the right-hand wall** of the bearing to a new equilibrium point $B$.
3. **Equilibrium at Contact Point $B$:**
   At point $B$, the bearing exerts two forces on the axle:
   - A normal reaction force $\mathbf{N}$ pointing inward toward the center $O$.
   - A tangential friction force $\mathbf{F} = \mu_s \mathbf{N}$ (or $\mu_k \mathbf{N}$) directed downwards along the tangent, opposing the upward slipping of the axle surface.
4. **The Contact Resultant $\mathbf{R}$:**
   The vector sum $\mathbf{R} = \mathbf{N} + \mathbf{F}$ makes an angle $\phi_s$ (the angle of static friction) with the normal radius vector $OB$:
   $$\tan\phi_s = \frac{F_m}{N} = \mu_s$$

---

### 2.2 Derivation of the Circle of Friction

Drop a perpendicular from the center of the shaft $O$ to the line of action of resultant force $\mathbf{R}$. Let this perpendicular distance be $r_f$:

From the right-angled triangle formed by the center $O$, contact point $B$, and the line of action of $\mathbf{R}$:

$$r_f = r \sin\phi_s$$

For kinetic sliding (steady rotation):

$$r_f = r \sin\phi_k$$

For ordinary engineering metals where friction coefficients are small ($\mu \le 0.20$), $\sin\phi \approx \tan\phi = \mu$. Thus:

$$r_f \approx r \mu_s \quad (\text{or } r_f \approx r \mu_k)$$

::: info Critical Theorem: Invariance of the Circle of Friction
The circle of radius $r_f = r\sin\phi$ drawn concentric with the shaft center $O$ is known as the **Circle of Friction**.
- **The line of action of the bearing reaction $\mathbf{R}$ must always be tangent to the Circle of Friction.**
- **Independence of Load:** The radius $r_f$ depends **strictly** on the shaft radius $r$ and the coefficient of friction $\mu$. It is **completely independent** of the external load $W$ or driving torque $M$!
:::

#### Resisting Frictional Couple
Taking moments about the center $O$ of the shaft:

$$M_f = R \cdot r_f = R\,r\sin\phi_k \approx R\,r\,\mu_k$$

Where $R = W$ under pure transverse load.

---

### Step-by-Step Solution: Official Problem — Pulley on Shaft with Axle Friction
*(From PSG IAS Lecture Slide 37)*

A pulley of nominal diameter $4\text{ in.}$ (radius $R_p = 2\text{ in.}$) is mounted on a fixed shaft of diameter $2\text{ in.}$ (shaft radius $r = 1\text{ in.}$). The coefficient of static friction between the pulley bore and the shaft is $\mu_s = 0.20$. A load of $W = 500\text{ lb}$ hangs vertically from a rope on one side of the pulley.
Determine:
1. The vertical force $P_{raise}$ applied to the rope on the other side required to **raise** the load.
2. The vertical force $P_{hold}$ required to **hold** the load (preventing it from dropping).

```
                      4-in Pulley on 2-in Shaft
                                  P
                                  |
                                  |  R_p = 2 in
                            +-----+-----+
                            |    ( O )  |
                            |   r=1 in  |
                            +-----+-----+
                                  |
                                  | W = 500 lb
```

::: details Click to view Step-by-Step Solution

#### Step 1: Calculate the Radius of the Circle of Friction
- Shaft radius: $r = 1.0\text{ in.}$
- Static friction coefficient: $\mu_s = 0.20$
- Radius of friction circle:
  $$r_f \approx r \mu_s = (1.0\text{ in.})(0.20) = 0.20\text{ in.}$$
  *(Exact check: $\phi_s = \tan^{-1}(0.20) = 11.31^\circ \implies r_f = 1.0 \times \sin(11.31^\circ) = 0.1961\text{ in.} \approx 0.20\text{ in.}$)*

#### Step 2: Part (a) — Force $P_{raise}$ Required to Raise the Load
- To raise the load $W = 500\text{ lb}$ (hanging on the left), force $P$ pulls downward on the right.
- The pulley rotates counter-clockwise.
- The contact point on the shaft shifts so that the upward shaft reaction $\mathbf{R}$ must oppose the rotation. The line of action of $\mathbf{R}$ must pass **to the right** of the center $O$, tangent to the circle of friction.
- Relative to the line of action of resultant reaction $\mathbf{R}$:
  - The moment arm of load $W$ increases to:
    $$d_W = R_p + r_f = 2.0 + 0.20 = 2.20\text{ in.}$$
  - The moment arm of pulling force $P$ decreases to:
    $$d_P = R_p - r_f = 2.0 - 0.20 = 1.80\text{ in.}$$

Taking moments about the line of action of resultant reaction $\mathbf{R}$ (eliminating unknown $R$):
$$\sum M_R = 0 \implies P_{raise} \cdot d_P = W \cdot d_W$$
$$P_{raise} \cdot (1.80) = (500) \cdot (2.20)$$
$$P_{raise} \cdot (1.80) = 1100$$
$$P_{raise} = \frac{1100}{1.80} = 611.11\text{ lb} \approx 611\text{ lb}$$

---

#### Step 3: Part (b) — Force $P_{hold}$ Required to Hold the Load
- When the load is on the verge of dropping, rotation is clockwise.
- Friction now acts in the opposite direction, aiding the holding effort $P$!
- The line of action of reaction $\mathbf{R}$ shifts to the **left** of center $O$, tangent to the left side of the circle of friction.
- Moment arms relative to resultant $\mathbf{R}$:
  - The moment arm of load $W$ decreases to:
    $$d_W = R_p - r_f = 2.0 - 0.20 = 1.80\text{ in.}$$
  - The moment arm of holding force $P$ increases to:
    $$d_P = R_p + r_f = 2.0 + 0.20 = 2.20\text{ in.}$$

Taking moments about the line of action of $\mathbf{R}$:
$$\sum M_R = 0 \implies P_{hold} \cdot d_P = W \cdot d_W$$
$$P_{hold} \cdot (2.20) = (500) \cdot (1.80)$$
$$P_{hold} \cdot (2.20) = 900$$
$$P_{hold} = \frac{900}{2.20} = 409.09\text{ lb} \approx 409\text{ lb}$$

#### Comparison:
- Ideal frictionless pulley: $P = W = 500\text{ lb}$.
- Raising with axle friction: $P_{raise} = 611\text{ lb}$ ($+22\%$ penalty).
- Holding with axle friction: $P_{hold} = 409\text{ lb}$ (friction supports $91\text{ lb}$ of the load).
:::

---

## 3. Thrust Bearings & Disk Friction

Thrust bearings support an axial compressive load $P$ acting along the centerline of a rotating shaft.

```
                           Hollow Collar Thrust Bearing
                                        P
                                        |
                               +--------+--------+
                               |      Shaft      |
                               +--------+--------+
                                     /  |  \
                                   /    |    \
                                 +------+------+ Collar
                                 |             |
                                 +------+------+
                                     ||   ||
                             R_1 <---+|   |+---> R_2
```

### 3.1 Derivation for Hollow Collar Bearing (Uniform Pressure Theory)
Consider a hollow annular bearing of inner radius $R_1$ and outer radius $R_2$ supporting total axial force $P$.
Assuming new, carefully fitted surfaces, the normal contact pressure $p$ is uniform across the entire contact area:

$$A = \pi(R_2^2 - R_1^2)$$

$$p = \frac{P}{A} = \frac{P}{\pi(R_2^2 - R_1^2)}$$

Now consider a differential ring element of radius $r$ and radial width $dr$:
- Differential area: $dA = 2\pi r\,dr$
- Differential normal compressive force:
  $$dN = p\,dA = \left[\frac{P}{\pi(R_2^2 - R_1^2)}\right](2\pi r\,dr) = \frac{2P}{R_2^2 - R_1^2}\,r\,dr$$
- Differential friction force tangent to ring:
  $$dF_k = \mu_k\,dN$$
- Differential resisting torque about shaft axis:
  $$dM = r\,dF_k = r(\mu_k\,dN) = \frac{2\mu_k P}{R_2^2 - R_1^2}\,r^2\,dr$$

Integrating from inner radius $R_1$ to outer radius $R_2$:

$$M = \int_{R_1}^{R_2} \frac{2\mu_k P}{R_2^2 - R_1^2}\,r^2\,dr = \frac{2\mu_k P}{R_2^2 - R_1^2} \left[\frac{r^3}{3}\right]_{R_1}^{R_2}$$

$$M = \frac{2}{3} \mu_k P \frac{R_2^3 - R_1^3}{R_2^2 - R_1^2}$$

---

### 3.2 Special Case: Solid Circular Pivot Bearing ($R_1 = 0$)
For a solid round shaft end of radius $R$ rotating against a flat step:
Substitute $R_1 = 0$ and $R_2 = R$:

$$M = \frac{2}{3} \mu_k P \frac{R^3}{R^2} = \frac{2}{3} \mu_k P R$$

The effective friction radius of a solid disk under uniform pressure is located at $\frac{2}{3}R$ from the center.

---

### 3.3 Multi-Plate Disk Clutches
In an automotive multi-plate clutch, torque is transmitted across $n$ pairs of contacting friction surfaces pressed together by an axial spring force $P$:

$$T_{clutch} = n \cdot M = \frac{2}{3} n\,\mu_k P \frac{R_2^3 - R_1^3}{R_2^2 - R_1^2}$$

Where $n$ is the total number of friction contact interfaces ($n = n_1 + n_2 - 1$ where $n_1, n_2$ are the numbers of driving and driven plates).

---

## 4. Wheel Friction & Rolling Resistance

### 4.1 The "Free-Wheel Paradox"
In elementary physics, a rigid circular cylinder or wheel of radius $r$ rolling without slipping on a perfectly rigid flat plane at constant velocity requires **zero towing force**:

$$\sum F_x = 0 \implies P = 0$$

Why, then, does every real vehicle coast to a halt unless engine power or pedaling is continuously supplied?

```
       Ideal Rigid Wheel (Zero Resistance)          Real Deformable Wheel (Rolling Resistance)
                  W                                               W
                  |                                               |
                  v                                               v
              +-------+                                       +-------+
              |   O   |                                       |   O   |
              +-------+                                       +-------+
                  |                                               |     |
                  |                                               |  b  |
                  ^ N                                             *<--->*
             (No offset)                                         B      N (Shifted forward by b)
```

### 4.2 The Physical Mechanism: Ground Deformation & Hysteresis
Real materials are never perfectly rigid:
1. **Contact Patch Deformation:** Under vertical weight $W$, both the tire and the road surface deform, creating a flat contact patch.
2. **Asymmetric Pressure Profile:** As the wheel rolls forward, material at the front of the contact patch is being continuously compressed, while material at the rear is relaxing (expanding).
3. **Viscoelastic Hysteresis:** Due to internal damping and hysteresis, the expansion energy released at the rear is always less than the compression work absorbed at the front.
4. **Forward Shift of Normal Reaction:** Consequently, the center of pressure shifts forward in the direction of motion by a small distance $b$, called the **coefficient of rolling resistance**.

---

### 4.3 Mathematical Derivation of Rolling Resistance

Consider a wheel of radius $r$ carrying weight $W$, towed forward at constant speed by a horizontal tractive force $P$:
- The resultant ground reaction $\mathbf{R}$ acts at point $B$, located a horizontal distance $b$ ahead of the wheel centerline.
- Taking moments about point $B$ (the instantaneous point of ground support):

$$\sum M_B = 0 \implies P \cdot (r \cos\alpha) - W \cdot b = 0$$

For small deformations ($\cos\alpha \approx 1$):

$$P \cdot r = W \cdot b \iff P = W \frac{b}{r}$$

::: warning Critical Distinction: Units of Coefficient $b$
Unlike the dimensionless Coulomb friction coefficients $\mu_s$ and $\mu_k$, the **coefficient of rolling resistance $b$ is a length** (measured in millimeters or meters)!
- Typical values for $b$:
  - Steel railroad car wheel on steel rail: $b \approx 0.5\text{ mm} = 0.0005\text{ m}$
  - Car tire on smooth asphalt / concrete: $b \approx 1.2\text{ to }1.5\text{ mm}$
  - Car tire on gravel or soft soil: $b \approx 20\text{ to }50\text{ mm}$
  - Bicycle tire on smooth track: $b \approx 0.8\text{ mm}$
:::

---

## 5. Comparative Master Table

```
+---------------------+-----------------------+-------------------------+-------------------------+
|      Mechanism      |  Physical Origin      |    Governing Formula    |     Key Parameters      |
+---------------------+-----------------------+-------------------------+-------------------------+
| Journal Bearing     | Axle climbing bearing | M = W r sin φ_k         | Circle of Friction      |
| (Axle Friction)     | wall; shear at rim.   |     ≈ W r μ_k           | radius r_f = r μ_k      |
+---------------------+-----------------------+-------------------------+-------------------------+
| Thrust Bearing      | Continuous annular    | M = ⅔ μ_k P (R₂³ - R₁³) | Inner/outer radii,      |
| & Disk Clutch       | surface shear.        |     / (R₂² - R₁²)       | contact pressure p      |
+---------------------+-----------------------+-------------------------+-------------------------+
| Rolling Resistance  | Contact deformation   | P = W (b / r)           | Rolling coeff b (length)|
| (Wheel Friction)    | & material hysteresis | M_resist = W b          | Wheel radius r          |
+---------------------+-----------------------+-------------------------+-------------------------+
```

---

## 6. Worked Numerical Problem

### Worked Problem 3.4: Rolling Resistance of an Automobile
An electric car of total mass $m = 1600\text{ kg}$ has wheels of diameter $D = 640\text{ mm}$ (radius $r = 0.32\text{ m}$). The tires roll on a smooth concrete highway with a coefficient of rolling resistance $b = 1.2\text{ mm} = 0.0012\text{ m}$.
1. Calculate the steady horizontal tractive force $P$ required to overcome rolling resistance.
2. Determine the mechanical power required to maintain a cruising speed of $v = 100\text{ km/h}$ against rolling resistance alone.

::: details Click to view Step-by-Step Solution

#### Part 1: Horizontal Tractive Force $P$
- Weight of the automobile:
  $$W = m g = 1600 \times 9.81 = 15,696\text{ N}$$
- Wheel radius:
  $$r = \frac{D}{2} = \frac{0.640}{2} = 0.320\text{ m}$$
- Coefficient of rolling resistance:
  $$b = 1.2\text{ mm} = 0.0012\text{ m}$$
- Applying the rolling resistance moment equation:
  $$P = W \frac{b}{r} = 15,696 \times \left(\frac{0.0012}{0.320}\right) = 15,696 \times 0.00375 = 58.86\text{ N}$$

Only $58.86\text{ N}$ of force is needed to roll a $1.6$-ton vehicle on smooth concrete!

#### Part 2: Mechanical Power at $100\text{ km/h}$
- Convert velocity to SI units:
  $$v = 100\text{ km/h} = \frac{100}{3.6} = 27.78\text{ m/s}$$
- Power required:
  $$P_{power} = P \cdot v = (58.86\text{ N})(27.78\text{ m/s}) = 1635.1\text{ W} \approx 1.64\text{ kW}$$
- In horsepower:
  $$P_{power} = \frac{1635.1}{746} = 2.19\text{ hp}$$

At high highway speeds, aerodynamic air drag dominates total power consumption, but at low city speeds, rolling resistance constitutes the primary tractive load.
:::

---

## 7. Summary & Mastery Checklist

Confirm your mastery of Section 3.3 concepts:
- [x] Explain axle climb and prove that the circle of friction radius $r_f = r\sin\phi_k$ is independent of load $W$.
- [x] Calculate the raise and hold pulling forces for a pulley on a shaft with friction.
- [x] Derive the torque capacity of a hollow collar thrust bearing: $M = \frac{2}{3}\mu_k P \frac{R_2^3 - R_1^3}{R_2^2 - R_1^2}$.
- [x] State why rolling resistance occurs and explain why coefficient $b$ has dimensions of length.
- [x] Calculate tractive towing force and power dissipated in rolling systems.
