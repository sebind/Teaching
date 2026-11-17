# 1.3 Forces & Equilibrium in 3D Space

The physical world does not exist on a blackboard. Cables in suspension bridges, guy wires bracing offshore wind turbines, and robotic arms manipulating surgery tools all operate in **three-dimensional Euclidean space ($\mathbb{R}^3$)**.

In this chapter, we extend vector statics from the 2D plane to three dimensions, establish the **Direction Cosine** framework, master the **3D Cuboid Method**, and solve spatial equilibrium systems.

---

## 1. 3D Rectangular Components & The Cuboid Method

To analyze a force $\mathbf{F}$ in space, consider a rectangular prism (cuboid) whose diagonal represents the force vector $\mathbf{F}$ originating from the origin $O(0, 0, 0)$:

<LectureFigure
  src="/images/physics/mod1/mod1_3d_projections.png"
  caption="Two-stage projection of a 3D force F onto the vertical axis (Fy = F cos θy) and horizontal xz-plane (Fh = F sin θy), followed by planar components Fx and Fz."
  slide="Mod 1 Part 2 · Slide 25"
  max-width="700px"
/>

A force $\mathbf{F}$ in $\mathbb{R}^3$ decomposes into three mutually perpendicular Cartesian components:
$$
\mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k}
$$
where $\mathbf{i}$, $\mathbf{j}$, and $\mathbf{k}$ are unit vectors aligned with the $+x$, $+y$, and $+z$ axes.

By applying the Pythagorean Theorem twice in three dimensions:
$$
F = |\mathbf{F}| = \sqrt{F_x^2 + F_y^2 + F_z^2}
$$

### The Two-Angle Spherical / Cuboid Decomposition
In engineering practice (such as radar tracking or crane boom rigging), a force $\mathbf{F}$ is frequently defined by its overall magnitude $F$, an angle $\theta_y$ with the vertical $y$-axis, and a horizontal azimuth angle $\phi$ between its horizontal projection and the $x$-axis:

| Decomposition Stage | Component / Projection | Mathematical Expression | Geometric Reference |
| :--- | :--- | :--- | :--- |
| **Stage 1: Vertical–Horizontal Split** | Vertical Component ($F_y$) | $F_y = F \cos\theta_y$ | Polar inclination $\theta_y$ from $+y$ axis |
| **Stage 1: Vertical–Horizontal Split** | Horizontal Projection ($F_h$) | $F_h = F \sin\theta_y$ | Projected diagonal in the horizontal $xz$-plane |
| **Stage 2: Planar $xz$ Resolution** | $x$-Component ($F_x$) | $F_x = F_h \cos\phi = F \sin\theta_y \cos\phi$ | Azimuth angle $\phi$ from $+x$ axis in $xz$-plane |
| **Stage 2: Planar $xz$ Resolution** | $z$-Component ($F_z$) | $F_z = F_h \sin\phi = F \sin\theta_y \sin\phi$ | Orthogonal projection onto $+z$ axis |

1. **Vertical Component ($F_y$):**
   $$
   F_y = F \cos\theta_y
   $$
2. **Horizontal Projection ($F_h$):**
   The projection of $\mathbf{F}$ onto the horizontal $xz$-plane is:
   $$
   F_h = F \sin\theta_y
   $$
3. **Planar Components ($F_x$ and $F_z$):**
   Resolving $F_h$ along the horizontal $x$ and $z$ axes using azimuth angle $\phi$:
   $$
   F_x = F_h \cos\phi = F \sin\theta_y \cos\phi
   $$
   $$
   F_z = F_h \sin\phi = F \sin\theta_y \sin\phi
   $$

---

## 2. Direction Cosines & The Line-of-Action Unit Vector

Instead of spherical angles, theoretical mechanics specifies the 3D orientation of $\mathbf{F}$ using its **Direction Angles** $(\theta_x, \theta_y, \theta_z)$.

Each direction angle is measured from the positive coordinate axis to the line of action of $\mathbf{F}$ ($0^\circ \le \theta_x, \theta_y, \theta_z \le 180^\circ$):
$$
F_x = F \cos\theta_x
$$
$$
F_y = F \cos\theta_y
$$
$$
F_z = F \cos\theta_z
$$

<LectureFigure
  src="/images/physics/mod1/mod1_3d_direction_angles.png"
  caption="Coordinate direction angles θx, θy, and θz defining the spatial orientation of force F within its 3D rectangular bounding box."
  slide="Mod 1 Part 2 · Slide 26"
  max-width="720px"
/>

The quantities $\cos\theta_x$, $\cos\theta_y$, and $\cos\theta_z$ are the **Direction Cosines** of the force vector.

### The Dimensionless Unit Vector $\boldsymbol{\lambda}$
Dividing the Cartesian force vector by its scalar magnitude yields the dimensionless **unit vector** $\boldsymbol{\lambda}$ along the force's line of action:
$$
\boldsymbol{\lambda} = \frac{\mathbf{F}}{F} = \frac{F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k}}{F} = \left(\frac{F_x}{F}\right)\mathbf{i} + \left(\frac{F_y}{F}\right)\mathbf{j} + \left(\frac{F_z}{F}\right)\mathbf{k}
$$
$$
\boldsymbol{\lambda} = \cos\theta_x\mathbf{i} + \cos\theta_y\mathbf{j} + \cos\theta_z\mathbf{k}
$$

### The Fundamental Direction Cosine Identity
Because the magnitude of any unit vector is identically unity ($|\boldsymbol{\lambda}| = 1$):
$$
|\boldsymbol{\lambda}|^2 = \lambda_x^2 + \lambda_y^2 + \lambda_z^2 = 1
$$
$$
\cos^2\theta_x + \cos^2\theta_y + \cos^2\theta_z = 1
$$

::: tip Critical Engineering Consequence
The three direction angles are **not independent**. If you know any two direction angles (e.g., $\theta_x = 60^\circ$ and $\theta_y = 45^\circ$), the third direction angle $\theta_z$ is uniquely constrained by:
$$
\cos\theta_z = \pm \sqrt{1 - \cos^2\theta_x - \cos^2\theta_y}
$$
The choice between positive and negative root depends on whether the force projects along the positive or negative $z$-axis.
:::

### Force Vector Defined by Two Spatial Points $M(x_1, y_1, z_1)$ and $N(x_2, y_2, z_2)$
In civil and mechanical design, cables run between known physical anchor bolts. If a cable of tensile magnitude $T$ pulls from node $M$ toward anchor $N$:

1. **Relative Position Vector:**
   $$
   \vec{MN} = (x_2 - x_1)\mathbf{i} + (y_2 - y_1)\mathbf{j} + (z_2 - z_1)\mathbf{k} = d_x\mathbf{i} + d_y\mathbf{j} + d_z\mathbf{k}
   $$
2. **Total Cable Length:**
   $$
   d = |\vec{MN}| = \sqrt{d_x^2 + d_y^2 + d_z^2}
   $$
3. **Unit Vector along Cable:**
   $$
   \boldsymbol{\lambda}_{MN} = \frac{\vec{MN}}{d} = \frac{d_x}{d}\mathbf{i} + \frac{d_y}{d}\mathbf{j} + \frac{d_z}{d}\mathbf{k}
   $$
4. **Tension Force Vector:**
   $$
   \mathbf{T} = T \boldsymbol{\lambda}_{MN} = T \left(\frac{d_x}{d}\mathbf{i} + \frac{d_y}{d}\mathbf{j} + \frac{d_z}{d}\mathbf{k}\right)
   $$

---

## 3. Equilibrium of a Particle in 3D Space

A particle in three-dimensional space is in static equilibrium if and only if the vector resultant of all concurrent forces acting upon it is zero:
$$
\mathbf{R} = \sum \mathbf{F} = \mathbf{0}
$$

Expressed in scalar Cartesian components, this yields **three independent simultaneous equations**:
$$
\sum F_x = 0
$$
$$
\sum F_y = 0
$$
$$
\sum F_z = 0
$$

::: info Engineering Freedom in 3D Statics
A single concurrent particle in 3D provides **three independent equilibrium equations**. Therefore, you can solve for at most **three unknown scalar quantities** (e.g., the tensions in three non-coplanar cables). 

If a 3D joint connects four or more cables, the system is **statically indeterminate**—the cable tensions cannot be found by statics alone and require analyzing structural elasticity (Hooke's Law and deformation compatibility).
:::

---

## 4. Worked Numerical Problem: 200-kg Cylinder Suspended in Space

This problem represents the benchmark spatial equilibrium calculation from Beer & Johnston and Dr. Sebin Devasia's PSG IAS mechanics syllabus.

### Problem Statement
A heavy industrial cylinder of mass $m = 200\text{ kg}$ is suspended at joint $A$ by two steel cables $AB$ and $AC$, which anchor to the top of a vertical building wall. Joint $A$ is held in spatial equilibrium by a horizontal force $\mathbf{P} = P\mathbf{i}$ directed parallel to the positive $x$-axis.

The spatial coordinates of the key joints (measured in meters with origin $O$ on the wall base directly below joint $A$'s wall projection) are:
- Suspended Ring: $A(1.2\text{ m}, 2.0\text{ m}, 0)$
- Wall Anchor B: $B(0, 12.0\text{ m}, 8.0\text{ m})$
- Wall Anchor C: $C(0, 12.0\text{ m}, -10.0\text{ m})$

Determine:
1. The tension $T_{AB}$ in cable $AB$.
2. The tension $T_{AC}$ in cable $AC$.
3. The required horizontal stabilizing force $P$.

<LectureFigure
  src="/images/physics/mod1/mod1_q5_cylinder_3d.png"
  caption="Worked Problem Q5: (Left) 200-kg cylinder suspended at ring A by wall cables AB and AC and stabilized by horizontal force P; (Right) 3D Free-Body Diagram showing unit vectors λAB, λAC, weight W, and force P."
  slide="Mod 1 Part 2 · Slide 28"
  max-width="760px"
/>

::: details Click to view Step-by-Step Solution
#### Step 1: Weight of the Cylinder
$$
W = mg = (200\text{ kg})(9.81\text{ m/s}^2) = 1962\text{ N}
$$
In Cartesian vector form:
$$
\mathbf{W} = -(1962\text{ N})\mathbf{j}
$$

#### Step 2: Displacement Vectors & Cable Lengths
Cables pull **from ring $A$ toward anchors $B$ and $C$**:

- **Cable AB:**
  $$
  \vec{AB} = (x_B - x_A)\mathbf{i} + (y_B - y_A)\mathbf{j} + (z_B - z_A)\mathbf{k}
  $$
  $$
  \vec{AB} = (0 - 1.2)\mathbf{i} + (12.0 - 2.0)\mathbf{j} + (8.0 - 0)\mathbf{k} = -1.2\mathbf{i} + 10.0\mathbf{j} + 8.0\mathbf{k}\text{ (m)}
  $$
  Length $AB$:
  $$
  AB = \sqrt{(-1.2)^2 + (10.0)^2 + (8.0)^2} = \sqrt{1.44 + 100.00 + 64.00} = \sqrt{165.44} \approx 12.8623\text{ m}
  $$

- **Cable AC:**
  $$
  \vec{AC} = (x_C - x_A)\mathbf{i} + (y_C - y_A)\mathbf{j} + (z_C - z_A)\mathbf{k}
  $$
  $$
  \vec{AC} = (0 - 1.2)\mathbf{i} + (12.0 - 2.0)\mathbf{j} + (-10.0 - 0)\mathbf{k} = -1.2\mathbf{i} + 10.0\mathbf{j} - 10.0\mathbf{k}\text{ (m)}
  $$
  Length $AC$:
  $$
  AC = \sqrt{(-1.2)^2 + (10.0)^2 + (-10.0)^2} = \sqrt{1.44 + 100.00 + 100.00} = \sqrt{201.44} \approx 14.1930\text{ m}
  $$

#### Step 3: Unit Vectors & Force Vector Formulations
- **Unit Vector $\boldsymbol{\lambda}_{AB}$:**
  $$
  \boldsymbol{\lambda}_{AB} = \frac{-1.2}{12.8623}\mathbf{i} + \frac{10.0}{12.8623}\mathbf{j} + \frac{8.0}{12.8623}\mathbf{k}
  $$
  $$
  \boldsymbol{\lambda}_{AB} = -0.09330\mathbf{i} + 0.77746\mathbf{j} + 0.62197\mathbf{k}
  $$
  $$
  \mathbf{T}_{AB} = T_{AB}\boldsymbol{\lambda}_{AB} = T_{AB}(-0.09330\mathbf{i} + 0.77746\mathbf{j} + 0.62197\mathbf{k})
  $$

- **Unit Vector $\boldsymbol{\lambda}_{AC}$:**
  $$
  \boldsymbol{\lambda}_{AC} = \frac{-1.2}{14.1930}\mathbf{i} + \frac{10.0}{14.1930}\mathbf{j} - \frac{10.0}{14.1930}\mathbf{k}
  $$
  $$
  \boldsymbol{\lambda}_{AC} = -0.08455\mathbf{i} + 0.70457\mathbf{j} - 0.70457\mathbf{k}
  $$
  $$
  \mathbf{T}_{AC} = T_{AC}\boldsymbol{\lambda}_{AC} = T_{AC}(-0.08455\mathbf{i} + 0.70457\mathbf{j} - 0.70457\mathbf{k})
  $$

- **Applied Forces:**
  $$
  \mathbf{P} = P\mathbf{i}
  $$
  $$
  \mathbf{W} = -1962\mathbf{j}
  $$

#### Step 4: Formulation of Equilibrium Equations at Joint A
The net force vector must vanish: $\mathbf{T}_{AB} + \mathbf{T}_{AC} + \mathbf{P} + \mathbf{W} = \mathbf{0}$.

1. **Along $z$-axis ($\sum F_z = 0$):**
   $$
   0.62197\, T_{AB} - 0.70457\, T_{AC} = 0
   $$
   $$
   T_{AC} = \frac{0.62197}{0.70457} T_{AB} = 0.88276\, T_{AB} \tag{Eq. 1}
   $$

2. **Along $y$-axis ($\sum F_y = 0$):**
   $$
   0.77746\, T_{AB} + 0.70457\, T_{AC} - 1962 = 0 \tag{Eq. 2}
   $$

3. **Along $x$-axis ($\sum F_x = 0$):**
   $$
   P - 0.09330\, T_{AB} - 0.08455\, T_{AC} = 0 \tag{Eq. 3}
   $$

#### Step 5: Simultaneous Algebraic Solution
Substitute Eq. 1 into Eq. 2:
$$
0.77746\, T_{AB} + 0.70457(0.88276\, T_{AB}) = 1962
$$
$$
0.77746\, T_{AB} + 0.62197\, T_{AB} = 1962
$$
$$
1.39943\, T_{AB} = 1962
$$
$$
T_{AB} = \frac{1962}{1.39943} \approx 1402.0\text{ N} \implies \mathbf{T_{AB} = 1402\text{ N}}
$$

Now calculate $T_{AC}$ using Eq. 1:
$$
T_{AC} = 0.88276(1402.0) \approx 1237.6\text{ N} \implies \mathbf{T_{AC} = 1238\text{ N}}
$$

Finally, substitute both tensions into Eq. 3 to solve for horizontal force $P$:
$$
P = 0.09330(1402.0) + 0.08455(1237.6)
$$
$$
P = 130.81 + 104.64 = 235.45\text{ N} \implies \mathbf{P = 235\text{ N}}
$$

#### Step 6: Engineering Verification
- Both cable tensions are positive ($T_{AB} > 0, T_{AC} > 0$), confirming the physical cables remain in pure tension.
- The vertical components sum to:
  $$
  1402.0(0.77746) + 1237.6(0.70457) = 1090.0 + 872.0 = 1962.0\text{ N} \equiv W \quad \checkmark
  $$
- The system is in perfect 3D static equilibrium.
:::

---

## 5. Modern Frontier: Physics-Informed Neural Networks (PINNs)

In 21st-century engineering, static equilibrium is no longer solved solely by hand or traditional Finite Element Analysis (FEA). **Physics-Informed Neural Networks (PINNs)** represent the cutting edge of AI-driven mechanical design.

| PINN Pipeline Stage | Role in 3D Structural Statics | Mathematical Formulation |
| :--- | :--- | :--- |
| **1. Spatial Inputs** | Joint & field coordinates fed into the network | $\mathbf{x} = (x, y, z) \in \mathbb{R}^3$ |
| **2. Deep Neural Network** | Parameterized layers predicting internal stresses & cable tensions | $(\mathbf{x}; \boldsymbol{\theta}) \longrightarrow \hat{\boldsymbol{\sigma}}, \hat{T}_i$ |
| **3. Composite Loss** | Combines sensor data residual with Newtonian equilibrium laws | $\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{data}} + w_{\text{physics}}\left[\left(\sum F_x\right)^2 + \left(\sum F_y\right)^2 + \left(\sum F_z\right)^2\right]$ |
| **4. Backpropagation** | Updates weights via automatic differentiation to satisfy $\sum \mathbf{F} = \mathbf{0}$ | $\boldsymbol{\theta} \leftarrow \boldsymbol{\theta} - \eta \nabla_{\boldsymbol{\theta}} \mathcal{L}_{\text{total}}$ |

### How PINNs Enforce Statics
Traditional deep neural networks are black boxes: they fit input data without understanding Newton's laws. If trained on noisy structural sensor readings, an ordinary neural net might predict cable tensions that violate basic equilibrium ($\sum \mathbf{F} \ne \mathbf{0}$).

PINNs solve this by embedding the vector equilibrium equations directly into the neural network's **loss function**:
$$
\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{data}} + w_{\text{physics}}\,\mathcal{L}_{\text{physics}}
$$
where:
$$
\mathcal{L}_{\text{physics}} = \left\|\sum F_x\right\|^2 + \left\|\sum F_y\right\|^2 + \left\|\sum F_z\right\|^2
$$

By computing spatial derivatives via automatic differentiation, the AI optimizer penalizes any weight configuration that violates $\sum \mathbf{F} = \mathbf{0}$. As a result:
1. The AI accurately predicts structural failure in 3D cable-stayed bridges and wind turbines even when $90\%$ of sensor nodes fail.
2. The model guarantees that all predictions strictly respect Newtonian mechanics, bridging machine learning with classical engineering physics.

---

## 6. Interactive 3D Visualization: Space Force 3D Viewer

Explore 3D force resolution and spatial equilibrium interactively below. You can rotate the 3D orbit camera, adjust force magnitude $F$, modify direction angles $(\theta_x, \theta_y, \theta_z)$, view the bounding cuboid, or load the preset for the **200-kg Cylinder Suspended System**.

<SpaceForce3DViewer />

---

## 7. Key Equations Reference

| Concept | Mathematical Formula |
| :--- | :--- |
| **3D Cartesian Vector** | $\mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k}$ |
| **Magnitude in $\mathbb{R}^3$** | $F = \sqrt{F_x^2 + F_y^2 + F_z^2}$ |
| **Direction Cosines** | $\cos\theta_x = \frac{F_x}{F}, \quad \cos\theta_y = \frac{F_y}{F}, \quad \cos\theta_z = \frac{F_z}{F}$ |
| **Fundamental Identity** | $\cos^2\theta_x + \cos^2\theta_y + \cos^2\theta_z = 1$ |
| **Line-of-Action Unit Vector** | $\boldsymbol{\lambda} = \frac{\vec{MN}}{|\vec{MN}|} = \frac{d_x}{d}\mathbf{i} + \frac{d_y}{d}\mathbf{j} + \frac{d_z}{d}\mathbf{k}$ |
| **3D Static Equilibrium** | $\sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0$ |
