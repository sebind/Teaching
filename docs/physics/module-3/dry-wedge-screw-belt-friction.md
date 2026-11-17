---
title: 3.2 Dry Friction, Wedges, Screws & Belt Friction
description: Comprehensive treatment of Coulomb dry friction, slipping vs. tipping, angle of repose, wedge mechanics, square-thread power screws, and capstan belt friction.
---

# 3.2 Dry Friction, Wedges, Screws & Belt Friction

::: tip Pedagogical Objective
Friction is often introduced in introductory physics merely as a passive resistance force $F = \mu N$. In mechanical engineering, friction is an active design medium: without it, bolts would unwind, belt-driven alternators would fail, and cars could not steer or brake. 

In this chapter, we master the macroscopic and microscopic origins of **Coulomb Dry Friction**, formulate the rigorous distinction between **slipping and tipping**, analyze **wedges** as high-load mechanical jacks, evaluate the **self-locking** condition of power screws, and derive the exponential **Capstan Belt Equation** from first principles of differential calculus.
:::

---

## 1. Dry (Coulomb) vs. Fluid Friction

Engineers classify contact resistance into two primary thermodynamic classes:

| Characteristic | Dry (Coulomb) Friction | Fluid Friction |
| :--- | :--- | :--- |
| **Contact Medium** | Unlubricated solid rigid bodies in direct contact | Adjacent layers of a viscous fluid moving at different velocities |
| **Microscopic Mechanism** | Mechanical adhesion and shearing of interlocking surface asperities | Viscous Newtonian shear stress $\tau = \mu \dfrac{dv}{dy}$ |
| **Velocity Dependence** | Largely independent of sliding speed over ordinary engineering ranges | Strongly dependent on relative velocity, dynamic viscosity $\mu$, and film thickness |
| **Governing Relations** | Coulomb's Laws: $F_s \le \mu_s N$ and $F_k = \mu_k N$ | Navier–Stokes equations and Reynolds number regimes |

### Automotive Friction Map
Consider how modern mechanical systems balance both friction regimes simultaneously:
- **Coulomb Dry Friction:** Brake pads clamping against steel brake rotors; clutch plates engaging flywheel torque; static tire contact patch delivering traction.
- **Fluid Hydrodynamic Friction:** Engine oil film cushioning connecting rod journal bearings; automatic transmission torque converters; hydraulic shock absorber damping.
- **Boundary / Mixed Friction:** Piston rings rubbing cylinder walls at top-dead-center where oil films thin out under peak combustion pressures.

---

## 2. Microscopic Asperities & The Three Regimes of Dry Friction

Even surfaces polished to a mirror finish exhibit microscopic irregularities known as **asperities** (peaks and valleys of height $0.1\text{ to }10\,\mu\text{m}$), so that true solid-to-solid contact occurs only across discrete micro-junctions ($A_{\text{real}} \ll A_{\text{apparent}}$).

When two surfaces rest against each other:
1. They touch **only at the tips of these asperities**. The true area of contact $A_{real}$ is often less than $0.01\%$ of the apparent geometric surface area $A_{apparent}$!
2. Extremely high localized normal stresses deform these peaks plastically, forming microscopic "cold-welds" or adhesive junctions.
3. To initiate motion, an applied lateral shear force must physically shear these cold welds and force asperities to ride up over each other.

<LectureFigure
  src="/images/physics/mod3/mod3_coulomb_three_states.png"
  caption="Rectilinear Dry Friction — The Coulomb Model across three physical states: State 1 Static (Self-Adjusting, F_s ≤ μ_s N), State 2 Impending Slip (Limiting, F_s = μ_s N), and State 3 Kinetic (Sliding, F_k ≈ μ_k N), plus the Slipping vs. Tipping criterion."
  slide="Mod 3 · Slide 18"
  max-width="760px"
/>

---

### 2.1 The Three Friction Regimes

Consider a block of weight $W$ resting on a horizontal floor, subjected to a gradually increasing horizontal pulling force $P$:

<LectureFigure
  src="/images/physics/mod3/mod3_friction_graph_fp.png"
  caption="Friction force F plotted against applied horizontal force P: linear 45° static equilibrium (F = P), peak limiting static friction (F_m = μ_s N) at impending motion, and abrupt drop to kinetic sliding friction (F_k = μ_k N)."
  slide="Mod 3 · Slide 16"
  max-width="640px"
/>

The friction force $F$ exhibits three distinct physical regimes:

#### 1. Static Self-Adjusting Regime ($0 \le P < F_m$)
- The block remains strictly at rest ($a = 0$).
- Friction is a **passive response force** governed entirely by equilibrium:
  $$\sum F_x = 0 \implies F = P$$
- As $P$ increases from $0$, friction increases identically ($F = P$).
- The static friction inequality holds:
  $$F \le \mu_s N$$

#### 2. Impending Slip (Limiting Friction, $P = F_m$)
- The applied force reaches the maximum shear resistance of the cold-welded asperities.
- The block is on the verge of sliding:
  $$F_m = \mu_s N$$
- $\mu_s$ is the **coefficient of static friction**.

#### 3. Kinetic Sliding Regime ($P > F_m$)
- The adhesive junctions shear apart. The asperities ride over and strike each other dynamically.
- The resisting friction drops abruptly to a lower, nearly constant value:
  $$F_k = \mu_k N$$
- $\mu_k$ is the **coefficient of kinetic friction**, with $\mu_k < \mu_s$.
- The net unbalanced force accelerates the body:
  $$a = \frac{P - F_k}{m} = \frac{P - \mu_k N}{m}$$

---

### 2.2 Comparison Table: Coefficients of Friction

| Contact Surfaces | Static Coefficient ($\mu_s$) | Kinetic Coefficient ($\mu_k$) |
| :--- | :---: | :---: |
| Steel on Steel *(Clean / Dry)* | $0.70 \text{ – } 0.80$ | $0.40 \text{ – } 0.60$ |
| Steel on Steel *(Lubricated)* | $0.10 \text{ – } 0.15$ | $0.05 \text{ – } 0.10$ |
| Rubber Tire on Dry Concrete Road | $0.80 \text{ – } 1.00$ | $0.60 \text{ – } 0.80$ |
| Rubber Tire on Wet / Icy Concrete | $0.20 \text{ – } 0.35$ | $0.10 \text{ – } 0.20$ |
| Wood on Wood *(Dry)* | $0.40 \text{ – } 0.60$ | $0.25 \text{ – } 0.35$ |
| Teflon (PTFE) on Steel | $0.04 \text{ – } 0.05$ | $0.04 \text{ – } 0.05$ |
| Synovial Joints in Human Body | $0.01 \text{ – } 0.02$ | $0.003 \text{ – } 0.01$ |

---

### 2.3 The Four Horizontal Surface Cases

<LectureFigure
  src="/images/physics/mod3/mod3_four_friction_regimes.png"
  caption="Four situations for a rigid body on a horizontal surface: (a) No friction (P_x = 0), (b) No motion (F < F_m, static equilibrium), (c) Motion impending (F_m = μ_s N), and (d) Sliding motion (F_k = μ_k N with P_x > F_k)."
  slide="Mod 3 · Slide 20"
  max-width="780px"
/>

| Case | Applied Force ($P$) | Friction Force ($F$) | Dynamic State |
| :--- | :--- | :--- | :--- |
| **1. No Pull** | $P = 0$ | $F = 0$ | Static Equilibrium *(At Rest)* |
| **2. Below Limit** | $0 < P < \mu_s N$ | $F = P$ | Static Equilibrium *(Self-Adjusting)* |
| **3. At Limit** | $P = \mu_s N$ | $F = F_m = \mu_s N$ | Impending Slip *(Verge of Motion)* |
| **4. Exceeding Limit** | $P > \mu_s N$ | $F = F_k = \mu_k N$ | Kinetic Sliding *(Accelerated Motion $a > 0$)* |

---

## 3. Slipping vs. Tipping Analysis

When an external force $P$ is applied to a real rigid body of width $b$ and height $h$, the body may either **slide** along the floor or **tip over** (topple) about its forward edge.

::: info Free-Body Geometry for Overturning vs. Sliding
- **Block Geometry:** Rectangular rigid crate of base width $b$, height $h$, and weight $W$ acting downward through centroid $G$ (at $b/2$ from either vertical face and $h/2$ above the floor).
- **Applied & Support Forces:** Horizontal push/pull $P$ acts rightward at elevation $h_p$ above the base; floor shear friction $F_f$ acts leftward along the base; resultant normal force $N$ shifts forward by eccentricity $x$ from the centerline toward the leading bottom corner $B$ (bounded physically by $0 \le x \le b/2$).
:::

### Mathematical Derivation:
Consider a rectangular crate of weight $W$, width $b$, and height $h$. A horizontal force $P$ is applied at a height $h_p$ above the floor.
1. **Vertical Force Equilibrium:**
   $$\sum F_y = 0 \implies N = W$$
2. **Horizontal Force Equilibrium:**
   $$\sum F_x = 0 \implies F = P$$
3. **Moment Equilibrium about Center of Base:**
   The pulling force creates an overturning couple $P \cdot h_p$ tending to rotate the block clockwise about corner $B$.
   To maintain rotational equilibrium, the distributed normal pressure shifts forward toward corner $B$ such that the resultant normal force $N$ acts at a distance $x$ from the centerline:
   $$\sum M_G = 0 \implies P \cdot (h_p - h/2) - F \cdot (h/2) + N \cdot x = 0$$
   Equivalently, taking moments about the base centerline:
   $$\sum M_{base} = 0 \implies P \cdot h_p - N \cdot x = 0 \implies x = \frac{P \cdot h_p}{W}$$

### The Two Failure Modes:
- **Impending Slip:** Occurs when friction reaches its maximum static limit:
  $$P_{slip} = \mu_s W$$
- **Impending Tip:** The resultant normal force cannot physically move beyond the corner edge ($x_{max} = b/2$). Impending tipping occurs when $N$ reaches corner $B$ ($x = b/2$):
  $$P_{tip} = W \frac{b}{2 h_p}$$

::: warning The Engineering Rule of First Failure
Whichever threshold force is **smaller** occurs first:
- If $P_{slip} < P_{tip} \iff \mu_s < \frac{b}{2 h_p}$, the body **slips** before it can tip.
- If $P_{tip} < P_{slip} \iff \frac{b}{2 h_p} < \mu_s$, the body **tips over** before it can slip.
- The **critical application height** where slipping and tipping occur simultaneously is:
  $$h_{crit} = \frac{b}{2 \mu_s}$$
:::

---

## 4. Angles of Friction & The Angle of Repose

### 4.1 Angle of Static Friction ($\phi_s$) and Angle of Kinetic Friction ($\phi_k$)

The normal force $\mathbf{N}$ and the friction force $\mathbf{F}$ are perpendicular components of the total contact reaction vector $\mathbf{R}$:

$$\mathbf{R} = \mathbf{N} + \mathbf{F}$$

<LectureFigure
  src="/images/physics/mod3/mod3_angles_of_friction.png"
  caption="Angles of static and kinetic friction (φ_s and φ_k) formed between the resultant surface reaction R and normal force N across (a) no friction, (b) no motion, (c) impending motion (tan φ_s = μ_s), and (d) sliding motion (tan φ_k = μ_k)."
  slide="Mod 3 · Slide 21"
  max-width="760px"
/>

At impending slip, the angle $\phi_s$ between resultant $\mathbf{R}$ and the normal $\mathbf{N}$ is the **static angle of friction**:

$$\tan\phi_s = \frac{F_m}{N} = \frac{\mu_s N}{N} = \mu_s \iff \phi_s = \tan^{-1}\mu_s$$

During kinetic sliding:

$$\tan\phi_k = \frac{F_k}{N} = \mu_k \iff \phi_k = \tan^{-1}\mu_k$$

The **Cone of Friction** is generated by rotating the resultant vector $\mathbf{R}$ at angle $\phi_s$ around the surface normal. If the line of action of an applied force falls **inside** this cone, motion is physically impossible regardless of how large the force becomes!

---

### 4.2 Angle of Repose on an Inclined Plane

Consider a block of weight $W$ placed on an incline whose tilt angle $\theta$ is gradually increased from zero:

<LectureFigure
  src="/images/physics/mod3/mod3_incline_repose.png"
  caption="Block of weight W on an inclined plane across increasing tilt angles: (a) flat surface, (b) static rest (θ < φ_s), (c) impending downward slip at the Angle of Repose (θ = φ_s), and (d) accelerated sliding (θ > φ_s)."
  slide="Mod 3 · Slide 23"
  max-width="740px"
/>

Resolving forces parallel and perpendicular to the inclined plane:
1. Normal direction: $\sum F_n = N - W\cos\theta = 0 \implies N = W\cos\theta$.
2. Tangential direction: $\sum F_t = W\sin\theta - F_s = 0 \implies F_s = W\sin\theta$.

At the critical angle $\theta = \theta_{repose}$ where the block is on the verge of sliding down:
$$F_s = F_m = \mu_s N$$
$$W\sin\theta_{repose} = \mu_s (W\cos\theta_{repose})$$
$$\frac{\sin\theta_{repose}}{\cos\theta_{repose}} = \tan\theta_{repose} = \mu_s$$

Since $\mu_s = \tan\phi_s$, we arrive at the fundamental identity:

$$\theta_{repose} = \phi_s$$

::: info Key Theorem: Angle of Repose
The maximum angle of an inclined plane at which a body can remain at rest without sliding under gravity alone is called the **Angle of Repose**, and it is mathematically identical to the static angle of friction $\phi_s = \tan^{-1}\mu_s$.
- If $\theta < \phi_s$: The body remains securely in static equilibrium ($F_s < \mu_s N$).
- If $\theta = \phi_s$: Impending motion down the incline ($F_s = \mu_s N$).
- If $\theta > \phi_s$: The body accelerates down the slope ($a = g(\sin\theta - \mu_k\cos\theta)$).
:::

---

## 5. Wedge Mechanics

A **wedge** is a simple machine consisting of a small triangular prism used to lift heavy loads, adjust machinery levels, or split materials with a comparatively small applied driving force $P$.

<LectureFigure
  src="/images/physics/mod3/mod3_wedge_concepts.png"
  caption="Wedge friction mechanics: isolating the heavy block (load A) and the driving wedge (C) as separate free-body diagrams with normal and limiting friction forces (F = μ_s N) opposing impending relative slip at every interface."
  slide="Mod 3 · Slide 24"
  max-width="760px"
/>

### Engineering Analysis Strategy:
1. Friction forces **always oppose relative motion** at every interface.
2. If the wedge is driven horizontally under the load, the load moves upward.
3. Therefore:
   - Friction at the vertical guide wall points **downward**.
   - Friction on the inclined face of the load points **downward and along the wedge face**.
   - Friction on the bottom of the wedge from the ground points **backward (opposing drive force $P$)**.
4. Draw independent Free-Body Diagrams for (a) the load block and (b) the driving wedge.
5. Apply the static equilibrium equations ($\sum F_x = 0, \sum F_y = 0$) or force polygons.

---

### Step-by-Step Solution: Official Problem 01 — $10^\circ$ Wedge Lifting $1500\text{ N}$ Load
*(From PSG IAS Lecture Slide 25)*

A $10^\circ$ wedge is driven horizontally to raise a vertical load of $W = 1500\text{ N}$. The coefficient of static friction is $\mu_s = 0.30$ at **all contact surfaces** (between vertical guide and load, load and wedge, and wedge and ground). Neglecting the weight of the wedge, determine the minimum horizontal force $P$ required to drive the wedge.

<LectureFigure
  src="/images/physics/mod3/mod3_wedge_1500n.png"
  caption="Official Problem 01: Horizontal force P driving a 10° wedge to raise a 1500 N vertical load with μ_s = 0.3 at all contact surfaces."
  slide="Mod 3 · Slide 25"
  max-width="580px"
/>

::: details Click to view Complete Step-by-Step Solution

#### Step 1: Calculate Angles of Friction
For $\mu_s = 0.30$:
$$\phi_s = \tan^{-1}(0.30) = 16.70^\circ$$
The wedge taper angle is $\theta = 10^\circ$.

#### Step 2: FBD & Equilibrium of Load Block $A$
The load block is acted upon by three forces:
1. Downward vertical load $W = 1500\text{ N}$.
2. Reaction $\mathbf{R}_1$ from the left vertical guide wall:
   - The normal reaction $R_{1x}$ pushes horizontally to the right.
   - As the block is raised upward, wall friction acts vertically downward.
   - Therefore, resultant $\mathbf{R}_1$ is inclined at $\phi_s = 16.70^\circ$ below the horizontal normal:
     $$R_{1x} = R_1 \cos(16.70^\circ), \quad R_{1y} = -R_1 \sin(16.70^\circ)$$
     Equivalently, downward friction magnitude is $F_1 = \mu_s R_{1x} = 0.30 R_{1x}$.
3. Reaction $\mathbf{R}_2$ from the $10^\circ$ wedge face:
   - The wedge face slopes upward to the right at $10^\circ$ to the horizontal, so its upward normal on block $A$ tilts $10^\circ$ to the left of the vertical.
   - As the wedge is driven to the left under block $A$, friction on block $A$ also acts down-and-left along the incline.
   - Thus, resultant $\mathbf{R}_2$ tilts to the left of the vertical by $\theta + \phi_s = 10^\circ + 16.70^\circ = 26.70^\circ$.

Setting up equilibrium for Block $A$:
$$\sum F_x = R_{1x} - R_2 \sin(26.70^\circ) = 0 \implies R_{1x} = R_2 \sin(26.70^\circ)$$
$$\sum F_y = R_2 \cos(26.70^\circ) - W - F_1 = 0$$
Substitute $F_1 = 0.30 R_{1x} = 0.30 R_2 \sin(26.70^\circ)$:
$$R_2 \cos(26.70^\circ) - 1500 - 0.30 R_2 \sin(26.70^\circ) = 0$$
$$R_2 \left[\cos(26.70^\circ) - 0.30 \sin(26.70^\circ)\right] = 1500$$

Evaluating trigonometric functions:
$$\cos(26.70^\circ) = 0.8934, \quad \sin(26.70^\circ) = 0.4493$$
$$\cos(26.70^\circ) - 0.30 \sin(26.70^\circ) = 0.8934 - 0.30(0.4493) = 0.8934 - 0.1348 = 0.7586$$
$$R_2 = \frac{1500}{0.7586} = 1977.3\text{ N}$$

The horizontal and vertical components of reaction $\mathbf{R}_2$ are:
$$R_{2x} = R_2 \sin(26.70^\circ) = 1977.3 \times 0.4493 = 888.4\text{ N}$$
$$R_{2y} = R_2 \cos(26.70^\circ) = 1977.3 \times 0.8934 = 1766.5\text{ N}$$

---

#### Step 3: FBD & Equilibrium of Wedge $B$
The driving wedge is subjected to:
1. Driving force $P$ directed horizontally to the left.
2. Equal and opposite reaction $-\mathbf{R}_2$ from block $A$, pushing downward and to the right at $26.70^\circ$ to the vertical:
   $$R_{2x} = 888.4\text{ N} \rightarrow, \quad R_{2y} = 1766.5\text{ N} \downarrow$$
3. Reaction $\mathbf{R}_3$ from the horizontal ground:
   - Normal force $N_3$ pushes vertically upward.
   - Friction $F_3$ opposes the wedge's leftward motion, acting horizontally to the right:
     $$F_3 = \mu_s N_3 = 0.30 N_3$$
   - Resultant $\mathbf{R}_3$ acts at $\phi_s = 16.70^\circ$ to the vertical.

Setting up vertical equilibrium for Wedge $B$:
$$\sum F_y = N_3 - R_{2y} = 0 \implies N_3 = R_{2y} = 1766.5\text{ N}$$

Calculate ground friction:
$$F_3 = \mu_s N_3 = 0.30 \times 1766.5 = 529.95\text{ N}$$

Setting up horizontal equilibrium for Wedge $B$ (taking leftward positive along $P$):
$$\sum F_x = R_{2x} + F_3 - P = 0$$
$$P = R_{2x} + F_3 = 888.4 + 529.95 = 1418.35\text{ N} \approx 1418\text{ N}$$

#### Conclusion:
A driving force of $P = 1418\text{ N}$ is required to raise the $1500\text{ N}$ load against all interfacial friction resistances.
:::

---

## 6. Square-Thread Power Screws

Power screws (such as car jacks, C-clamps, and machine tool lead screws) convert rotary torque into high linear axial force.

<LectureFigure
  src="/images/physics/mod3/mod3_screw_jack.png"
  src2="/images/physics/mod3/mod3_screw_unwrapped.png"
  caption="(Left) Square-threaded screw jack geometry showing pitch p, lead L, and mean radius r; (Right) Unwrapped thread inclined-plane analysis for (a) impending upward motion (θ + φ_s), (b) self-locking downward motion (φ_s > θ), and (c) unwinding downward motion (φ_s < θ)."
  slide="Mod 3 · Slides 26–27"
/>

### 6.1 Geometry of the Thread
- **Pitch ($p$):** Axial distance between corresponding points on adjacent thread forms.
- **Lead ($L$):** Axial distance the nut advances in one complete revolution ($360^\circ$).
  - For single-threaded screws: $L = p$.
  - For double-threaded screws: $L = 2p$.
- **Mean Radius ($r_m$):** Average of the root radius and crest radius: $r_m = \frac{r_{root} + r_{crest}}{2}$.
- **Lead Angle ($\theta$):** Unwrapping one full turn of the mean circumference $2\pi r_m$ reveals an inclined ramp of base $2\pi r_m$ and height $L$:
  $$\tan\theta = \frac{L}{2\pi r_m}$$

---

### 6.2 Raising vs. Lowering a Load

Let a vertical load $W$ be supported by the screw. We model the nut as a small block resting on the unwrapped thread incline:

#### 1. Raising the Load:
To drive the thread upward, the horizontal effort $P_{eff}$ must overcome both gravity and friction:
$$P_{eff} = W \tan(\theta + \phi_s)$$
The required driving torque $M$ applied to the screw is:

$$M_{raise} = P_{eff} r_m = W r_m \tan(\theta + \phi_s)$$

#### 2. Lowering the Load — The Self-Locking Condition:
- **Case A: Self-Locking ($\phi_s > \theta$):**
  The friction angle exceeds the lead angle. The screw **will not turn under the load alone**. To lower the load, a reverse driving torque must be applied:
  $$M_{lower} = W r_m \tan(\phi_s - \theta)$$
- **Case B: Non-Self-Locking / Overhauling ($\phi_s < \theta$):**
  The thread angle is steeper than the friction angle. The load $W$ spontaneously unwinds the screw! A positive holding torque is required to prevent free-wheeling:
  $$M_{hold} = W r_m \tan(\theta - \phi_s)$$

::: tip Mechanical Efficiency of a Screw Jack
The ideal work to raise load $W$ by lead $L$ without friction is $W L$. The actual work required per turn is $2\pi M = 2\pi W r_m \tan(\theta + \phi_s)$.
$$\eta = \frac{W L}{2\pi M} = \frac{W (2\pi r_m \tan\theta)}{2\pi W r_m \tan(\theta + \phi_s)} = \frac{\tan\theta}{\tan(\theta + \phi_s)}$$
For a self-locking screw ($\phi_s > \theta$), the maximum possible efficiency is strictly less than $50\%$ ($\eta < 0.50$). Safe non-reversing jacks inherently dissipate more than half their input energy as friction heat!
:::

---

## 7. Flat Belt Friction (The Capstan Equation)

When a flexible belt, band, or rope passes around a curved drum, pulley, or marine bollard, the tension grows exponentially around the arc of contact.

<LectureFigure
  src="/images/physics/mod3/mod3_belt_drive_example.png"
  src2="/images/physics/mod3/mod3_belt_capstan_element.png"
  caption="(Left) Belt/rope wrap over contact arc β with slack-side tension T_1 and tight-side tension T_2; (Right) Free-Body Diagram of differential belt element PP' subtending Δθ for deriving T_2 = T_1 e^(μ_s β)."
  slide="Mod 3 · Slide 28"
/>

### 7.1 Rigorous Calculus Derivation
Consider a differential belt element subtending an angle $d\theta$ on a drum of radius $r$:
- Tension on one side: $T$
- Tension on the other side: $T + dT$
- Normal reaction from the drum surface: $dN$
- Friction force opposing relative slip: $dF = \mu_s dN$

#### 1. Normal Equilibrium ($\sum F_n = 0$):
Summing forces along the radial bisector:
$$dN - T \sin\left(\frac{d\theta}{2}\right) - (T + dT)\sin\left(\frac{d\theta}{2}\right) = 0$$
Using the small-angle approximation $\sin\left(\frac{d\theta}{2}\right) \approx \frac{d\theta}{2}$ and neglecting the second-order differential product $dT \frac{d\theta}{2} \approx 0$:
$$dN = T \left(\frac{d\theta}{2}\right) + T \left(\frac{d\theta}{2}\right) = T\,d\theta$$

#### 2. Tangential Equilibrium ($\sum F_t = 0$):
Summing forces along the tangential direction (assuming impending slip of belt toward $T_2$):
$$(T + dT)\cos\left(\frac{d\theta}{2}\right) - T\cos\left(\frac{d\theta}{2}\right) - dF = 0$$
Since $\cos\left(\frac{d\theta}{2}\right) \to 1$:
$$dT = dF = \mu_s dN$$

#### 3. Separation of Variables & Integration:
Substitute $dN = T\,d\theta$:
$$dT = \mu_s T\,d\theta \implies \frac{dT}{T} = \mu_s\,d\theta$$

Integrating across the total contact arc angle $\beta$ (from $\theta = 0$ where $T = T_1$ to $\theta = \beta$ where $T = T_2$):

$$\int_{T_1}^{T_2} \frac{dT}{T} = \mu_s \int_0^\beta d\theta$$

$$\ln\left(\frac{T_2}{T_1}\right) = \mu_s \beta$$

Exponentiating both sides yields the famous **Capstan Equation**:

$$T_2 = T_1 e^{\mu_s \beta}$$

::: warning Mandatory Units: $\beta$ MUST Be in Radians!
In the Capstan equation, the wrap angle $\beta$ **must strictly be in radians**, never degrees!
- $1\text{ turn} = 2\pi\text{ rad} \approx 6.283\text{ rad}$
- $2\text{ turns} = 4\pi\text{ rad} \approx 12.566\text{ rad}$
- $3\text{ turns} = 6\pi\text{ rad} \approx 18.850\text{ rad}$
- $T_2$ is always the **larger tension** (the pulling or driving side), while $T_1$ is the **smaller tension** (the holding side).
:::

---

### Step-by-Step Solution: Official Problem — Ship Hawser Wrapped on a Bollard
*(From PSG IAS Lecture Slide 30)*

A ship hawser is wrapped $2$ full turns around a dock bollard. A sailor exerts a pull of $T_1 = 150\text{ N}$ on the free end to restrain a ship pulling with a force of $T_2 = 7500\text{ N}$.
1. Determine the coefficient of static friction $\mu_s$ between the hawser and the bollard.
2. If the hawser is wrapped $3$ full turns around the bollard, determine the maximum force $T_2$ the ship can exert without causing the rope to slip, assuming the sailor still pulls with $T_1 = 150\text{ N}$.

::: details Click to view Step-by-Step Solution

#### Part 1: Finding Coefficient of Static Friction $\mu_s$
- For $2$ full turns:
  $$\beta_1 = 2 \times (2\pi) = 4\pi\text{ rad} \approx 12.5664\text{ rad}$$
- The tensions are:
  $$T_1 = 150\text{ N}, \quad T_2 = 7500\text{ N}$$
- Ratio of tensions:
  $$\frac{T_2}{T_1} = \frac{7500}{150} = 50$$
- Applying the Capstan Equation:
  $$\ln\left(\frac{T_2}{T_1}\right) = \mu_s \beta_1$$
  $$\ln(50) = \mu_s (4\pi)$$
  $$3.9120 = \mu_s (12.5664)$$
  $$\mu_s = \frac{3.9120}{12.5664} = 0.3113 \approx 0.311$$

#### Part 2: Maximum Load for $3$ Full Turns
- For $3$ full turns:
  $$\beta_2 = 3 \times (2\pi) = 6\pi\text{ rad} \approx 18.8496\text{ rad}$$
- Using the determined friction coefficient $\mu_s = 0.3113$:
  $$\mu_s \beta_2 = 0.3113 \times 18.8496 = 5.8679$$
- Exponent:
  $$e^{\mu_s \beta_2} = e^{5.8679} \approx 353.51$$
  *(If using the rounded $\mu_s = 0.311$: $\mu_s \beta_2 = 0.311 \times 6\pi = 5.8622 \implies e^{5.8622} = 351.5$)*
- Calculating $T_2$:
  $$T_2 = T_1 e^{\mu_s \beta_2} = 150 \times 351.5 = 52,725\text{ N} \approx 52.7\text{ kN}$$
  *(Or with full precision $353.51$: $T_2 = 150 \times 353.51 = 53.0\text{ kN}$)*

#### Physical Takeaway:
By simply adding **one additional turn** (from 2 to 3 turns), the holding capacity jumped from $7.5\text{ kN}$ to an astonishing $52.7\text{ kN}$—a $7$-fold amplification from a modest $50\%$ increase in wrap angle! This illustrates the exponential leverage of Euler's Capstan law.
:::

---

## 8. Interactive Laboratory Simulation

Explore the interplay of angle of repose, slipping vs. tipping, and the exponential bollard tension gradient in the interactive simulator below:

<InclinedFrictionAndBeltLab />

---

## 9. Summary & Review Checklist

Before advancing to Section 3.3 on Bearings and Rolling Resistance, confirm your understanding:
- [x] State the three regimes of Coulomb friction (static self-adjusting, impending slip, kinetic sliding).
- [x] Conduct a complete Slipping vs. Tipping analysis and compute the tipping arm $x = \frac{P h_p}{W}$.
- [x] Prove that the angle of repose $\theta_{repose}$ equals the static angle of friction $\phi_s = \tan^{-1}\mu_s$.
- [x] Construct separate Free-Body Diagrams for load and wedge, and solve multi-interface friction problems.
- [x] State the self-locking condition for square-threaded power screws ($\phi_s > \theta$) and compute mechanical efficiency.
- [x] Derive the Capstan flat belt formula $T_2 = T_1 e^{\mu_s \beta}$ using differential integration.
