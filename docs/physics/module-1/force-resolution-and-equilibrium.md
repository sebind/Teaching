# 1.2 Force Resolution, Concurrent Resultants & 2D Equilibrium

In Chapter 1.1, we discovered that while the geometric Parallelogram Law provides visual intuition, calculating resultants of three, four, or dozens of forces using sequential triangles quickly becomes mathematically cumbersome. 

In this chapter, we master **Rectangular Resolution**—the analytical bedrock of modern structural computation—and formulate the principles governing **Static Equilibrium of Particles**.

---

## 1. 2D Rectangular Components & "The Invisible Teammates"

Any force vector $\mathbf{F}$ lying in the $xy$-plane can be resolved into two mutually perpendicular components along the Cartesian axes:
$$
\mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j}
$$
where $\mathbf{i}$ and $\mathbf{j}$ are dimensionless unit vectors directed along the positive $x$ and $y$ axes.

```
          y ^
            |          /| F
            |         / |
        F_y +--------*  |
            |       /|  | F_y = F sin θ
            |      / |  |
            |   θ /  |  |
            +----+---+--+-----> x
               O    F_x
                 <-- F_x = F cos θ -->
```

### The "Invisible Teammates" Analogy
To understand why orthogonal decomposition is so powerful, Dr. Sebin Devasia introduces the **Invisible Teammates** concept:

> **The Teammates Intuition:** Imagine pulling a heavy canal boat along a narrow channel using a single diagonal rope inclined at angle $\theta$. Physically, you are just one person pulling with force $F$. 
> 
> Mathematically, however, classical mechanics permits us to completely erase you and replace you with **two invisible teammates** who work entirely independently:
> 1. **Teammate $X$ ($F_x = F\cos\theta$):** Walks along the channel bank, pulling the boat purely forward.
> 2. **Teammate $Y$ ($F_y = F\sin\theta$):** Wades across the canal, pulling the boat purely sideways into the embankment.
> 
> Because the axes are orthogonal ($90^\circ$), Teammate $X$ does not affect lateral drift, and Teammate $Y$ contributes nothing to forward propulsion. They never interfere with each other!

#### Multidisciplinary Engineering Connections:
- **Aerospace Engineering (Quadcopter Drone Flight Dynamics):** When a quadcopter tilts at a pitch angle $\theta$, the total thrust $\mathbf{T}$ produced by its four rotors resolves into an upward lift component $T_y = T\cos\theta$ balancing gravity ($mg$), and a forward propulsion component $T_x = T\sin\theta$ driving translational acceleration.
- **Electronics & Robotics (Multi-Axis Manipulator Arms):** A robotic gripper holding a delicate silicon wafer resolves external contact forces into normal clamping components and tangential shear friction components, controlled via independent PID feedback loops on orthogonal motor axes.

### The Standard Counter-Clockwise (CCW) Angle Pro-Tip
While introductory physics courses often teach students to memorize separate sine and cosine rules based on visual right triangles, Dr. Sebin Devasia teaches the **Standard CCW Angle Rule**:

::: tip Dr. Sebin Devasia's CCW Angle Pro-Tip
Always measure the angle $\theta$ **counter-clockwise (CCW) from the positive $x$-axis** ($0^\circ \le \theta < 360^\circ$).
When $\theta$ is measured CCW from $+x$:
$$
F_x = F \cos\theta
$$
$$
F_y = F \sin\theta
$$
The trigonometric functions will automatically yield the exact, correct algebraic signs ($+$ or $-$) for every quadrant without manual guesswork!
- **Quadrant I ($0^\circ < \theta < 90^\circ$):** $\cos\theta > 0, \sin\theta > 0 \implies (+F_x, +F_y)$
- **Quadrant II ($90^\circ < \theta < 180^\circ$):** $\cos\theta < 0, \sin\theta > 0 \implies (-F_x, +F_y)$
- **Quadrant III ($180^\circ < \theta < 270^\circ$):** $\cos\theta < 0, \sin\theta < 0 \implies (-F_x, -F_y)$
- **Quadrant IV ($270^\circ < \theta < 360^\circ$):** $\cos\theta > 0, \sin\theta < 0 \implies (+F_x, -F_y)$
:::

#### Quick Check:
A tensile force of $F = 8\text{ N}$ acts at $\theta = 45^\circ$ above the horizontal in the first quadrant:
$$
F_x = 8 \cos 45^\circ = 8 \left(\frac{\sqrt{2}}{2}\right) \approx 5.657\text{ N} \approx 5.66\text{ N}
$$
$$
F_y = 8 \sin 45^\circ = 8 \left(\frac{\sqrt{2}}{2}\right) \approx 5.657\text{ N} \approx 5.66\text{ N}
$$
$$
\mathbf{F} = (5.66\text{ N})\mathbf{i} + (5.66\text{ N})\mathbf{j}
$$

---

## 2. Resultant of Several Concurrent Forces: The Tabular Method

When three or more forces $\mathbf{F}_1, \mathbf{F}_2, \mathbf{F}_3, \dots, \mathbf{F}_n$ act simultaneously on a single particle, computing the resultant via repeated triangle rules requires tedious geometric chaining. 

Instead, the **Component Method** converts vector addition into simple scalar arithmetic:
$$
\mathbf{R} = \sum \mathbf{F} = \left(\sum F_x\right)\mathbf{i} + \left(\sum F_y\right)\mathbf{j}
$$
$$
R_x = \sum_{i=1}^n F_{ix}, \qquad R_y = \sum_{i=1}^n F_{iy}
$$

The magnitude and spatial direction of the resultant are given by:
$$
R = \sqrt{R_x^2 + R_y^2}
$$
$$
\theta = \tan^{-1}\left(\frac{|R_y|}{|R_x|}\right)
$$

### Engineering Case Study: The Tugboat Resultant
A disabled container vessel in a harbor is steered by three tugboats applying cables to the bow eyelet $A$:
- **Tugboat A:** Pulls with $T_A = 10\text{ kN}$ at $\theta_A = 30^\circ$ (Quadrant I)
- **Tugboat B:** Pulls with $T_B = 15\text{ kN}$ at $\theta_B = 135^\circ$ (Quadrant II)
- **Tugboat C:** Pulls with $T_C = 8\text{ kN}$ at $\theta_C = 240^\circ$ (Quadrant III)

```
                       y ^
                         |   T_A = 10 kN (30°)
           T_B = 15 kN   |   /
              (135°) \   |  /
                      \  | /
       ------------------A------------------> x
                        /|
                       / |
       T_C = 8 kN (240°) |
```

We organize the force components systematically into an **Engineering Computation Table**:

| Force Vector | Magnitude $F$ | CCW Angle $\theta$ | $F_x = F\cos\theta$ | $F_y = F\sin\theta$ |
| :--- | :--- | :--- | :--- | :--- |
| **Tugboat A** | $10\text{ kN}$ | $30^\circ$ | $10\cos 30^\circ = +8.660\text{ kN}$ | $10\sin 30^\circ = +5.000\text{ kN}$ |
| **Tugboat B** | $15\text{ kN}$ | $135^\circ$ | $15\cos 135^\circ = -10.607\text{ kN}$ | $15\sin 135^\circ = +10.607\text{ kN}$ |
| **Tugboat C** | $8\text{ kN}$ | $240^\circ$ | $8\cos 240^\circ = -4.000\text{ kN}$ | $8\sin 240^\circ = -6.928\text{ kN}$ |
| **Resultant $\mathbf{R}$** | — | — | **$R_x = -5.947\text{ kN}$** | **$R_y = +8.679\text{ kN}$** |

#### Computing Resultant Vector:
$$
\mathbf{R} = -(5.95\text{ kN})\mathbf{i} + (8.68\text{ kN})\mathbf{j}
$$
$$
R = \sqrt{(-5.947)^2 + (8.679)^2} = \sqrt{35.366 + 75.325} = \sqrt{110.691} \approx 10.52\text{ kN}
$$

Because $R_x < 0$ and $R_y > 0$, the resultant points into **Quadrant II**:
$$
\alpha_{ref} = \tan^{-1}\left(\frac{8.679}{5.947}\right) = \tan^{-1}(1.4594) \approx 55.58^\circ \text{ above the negative } x\text{-axis}
$$
$$
\theta_{standard} = 180^\circ - 55.58^\circ = 124.42^\circ
$$

The harbor pilot knows that the net towing action delivers $10.52\text{ kN}$ directed northwest at $124.42^\circ$.

---

## 3. Equilibrium of a Particle: "The Art of Nothing Happening"

In structural engineering, success is measured by immobility. A suspension bridge, a skyscraper floor, or a crane boom must not accelerate under load. Dr. Sebin Devasia defines Statics as:

> **"Statics is the rigorous engineering art of ensuring that absolutely nothing happens."**

A particle is in **mechanical equilibrium** if the resultant of all external forces acting upon it is identically zero:
$$
\mathbf{R} = \sum \mathbf{F} = \mathbf{0}
$$

By Newton's Second Law ($\sum \mathbf{F} = m\mathbf{a}$), zero net force guarantees:
$$
\mathbf{a} = \mathbf{0} \implies \mathbf{v} = \text{constant}
$$

In a 2D coplanar system, the vector equation $\sum \mathbf{F} = \mathbf{0}$ decomposes into **two independent scalar algebraic equations**:
$$
\sum F_x = 0
$$
$$
\sum F_y = 0
$$

These two independent scalar equations allow an engineer to solve for at most **two unknown quantities** (such as two unknown cable tensions, or one unknown magnitude and one unknown angle).

```
                   [ Particle Equilibrium: ∑ F = 0 ]
                                   │
             ┌─────────────────────┴─────────────────────┐
             ▼                                           ▼
    Analytical Method                           Geometric Method
   (∑ Fx = 0, ∑ Fy = 0)                 Closed Force Polygon (Tip-to-Tail)
                                                         │
                                                         ▼
                                            Three-Force Systems (Triangle)
                                               Solved via Law of Sines
```

### The Closed Force Polygon & Three-Force Triangle
Geometrically, if $\sum \mathbf{F} = \mathbf{0}$, drawing all force vectors tip-to-tail must form a **closed polygon** returning exactly to the starting origin.

For a particle acted upon by exactly **three concurrent forces** ($\mathbf{F}_1 + \mathbf{F}_2 + \mathbf{F}_3 = \mathbf{0}$):
- The vectors form a closed **Force Triangle**.
- If one force magnitude is known (such as gravity weight $W$), the unknown forces can be found rapidly without resolving components using the **Law of Sines**:
$$
\frac{F_1}{\sin\theta_1} = \frac{F_2}{\sin\theta_2} = \frac{F_3}{\sin\theta_3}
$$
where each angle $\theta_i$ is the interior angle opposite force side $F_i$ in the force triangle.

---

## 4. Free-Body Diagrams (FBD): "The Engineer's X-Ray"

A **Free-Body Diagram (FBD)** is a sketch of an isolated mechanical body or particle, freed from its physical surroundings, showing all external forces and moments exerted upon it. It is the single most critical engineering tool in mechanics.

### Dr. Sebin Devasia's Boundary Tracing Protocol
To construct an unassailable FBD every single time without missing or inventing forces, execute the **Boundary Tracing Protocol**:

```
+---------------------------------------------------------------------------------+
|                   BOUNDARY TRACING PROTOCOL (FBD CONSTRUCTION)                  |
+---------------------------------------------------------------------------------+
| Step 1: Isolate System   ──► Draw imaginary closed loop isolating the particle  |
| Step 2: Set Axes         ──► Draw orthogonal (x, y) axes with + sign conventions|
| Step 3: Field Forces     ──► Apply non-contact Weight (W = mg) straight down    |
| Step 4: Trace Boundary   ──► Cut every contact and replace with reaction force: |
|           • Flexible Cable  ──► Tensile force T pulling AWAY from particle      |
|           • Smooth Surface  ──► Normal N pushing PERPENDICULAR to contact plane |
|           • Rough Surface   ──► Normal N + Friction f opposing motion           |
|           • Pin Support     ──► Two orthogonal reactions (Ax, Ay)               |
+---------------------------------------------------------------------------------+
```

### The 4-Step FBD Checklist
1. **Isolate:** Draw the particle as a single bold dot, completely detached from all cables, pulleys, and walls.
2. **Apply Active Field Forces:** Place the gravitational force vector $W = mg$ acting strictly vertically downward from the particle.
3. **Replace Supports with Reactive Forces:**
   - **Tension Member (Flexible Cable, Chain, Cord):** Always pulls **away** from the connection point along the cable axis. Flexible cables cannot support compression!
   - **Smooth Surface Contact:** Always pushes **into** the body perpendicular (normal) to the tangent contact plane.
   - **Rough Contact:** Adds a tangential friction force $F_f = \mu N$ opposing relative motion.
4. **Label Dimensions & Orientations:** Clearly indicate reference angles or slope triangles ($3:4:5$) for every vector.

---

## 5. The S-M-A-R&T Problem-Solving Framework

To develop professional engineering discipline, approach every problem using Dr. Sebin Devasia's **S-M-A-R&T Framework**:

```
+-------------+     +--------------+     +---------------+     +-------------+     +-------------+
| S: Strategy | ──► | M: Modeling  | ──► | A: Analysis   | ──► | R: Reflect  | ──► | T: Think    |
| Knowns &    |     | Isolated FBD |     | ∑Fx=0, ∑Fy=0  |     | Units &     |     | Physical    |
| Unknowns    |     | via Boundary |     | or Sine Rule  |     | Sig Figs    |     | Sense Check |
+-------------+     +--------------+     +---------------+     +-------------+     +-------------+
```

- **S (Strategy):** Identify which particle connects the unknown forces and count degrees of freedom ($2$ equations $\to$ $2$ unknowns).
- **M (Modeling):** Isolate the particle and draw an uncompromising Free-Body Diagram.
- **A (Analysis):** Formulate the equilibrium equations ($\sum F_x = 0, \sum F_y = 0$) or the Force Triangle Law of Sines. Solve simultaneously.
- **R (Reflect):** Verify numerical values, units ($\text{N}$ vs $\text{lb}$, $\text{m}$ vs $\text{ft}$), and significant figures (typically 3 to 4 sig figs).
- **T (Think):** Sanity check: Are all flexible cable tensions positive ($T > 0$)? Does the physical answer make real-world common sense?

---

## 6. Rookie Mistakes, Common Traps & 3 Golden Rules

::: warning Three Traps That Destroy Exam Scores
1. **The Velocity Trap:** Confusing *Zero Acceleration* with *Zero Velocity*. 
   - Equilibrium means $\mathbf{a} = \mathbf{0}$, NOT necessarily $\mathbf{v} = \mathbf{0}$. An airplane cruising at steady speed $900\text{ km/h}$ in level flight is in perfect static equilibrium ($\sum \mathbf{F} = \mathbf{0}$)!
2. **The FBD Shortcut Trap:** Attempting to write $\sum F_x = 0$ directly from the problem diagram without drawing an isolated FBD. 
   - Over $80\%$ of sign errors occur because an engineer failed to draw an independent FBD.
3. **The Mass vs. Weight Confusion:** Using mass in kilograms ($m = 75\text{ kg}$) directly in force balance equations.
   - Mass is an amount of matter ($\text{kg}$). Force is Newtons ($\text{N}$). You **must** multiply by gravitational acceleration: $W = mg = (75)(9.81) = 735.75\text{ N}$!
:::

### The Three Golden Rules of Particle Statics
1. **Golden Rule 1:** A flexible cable can only pull; it can **never** push. If your algebra yields a negative cable tension ($T < 0$), your assumed geometry is physically impossible!
2. **Golden Rule 2:** In 2D particle equilibrium, you have only **two** independent equilibrium equations. You cannot solve for three unknowns at a single concurrent node.
3. **Golden Rule 3:** Action and reaction forces belong to different bodies. When isolating a single joint, never draw both sides of an internal interaction.

---

## 7. Worked Numerical Problems

The following five problems represent classic engineering benchmark cases from Ferdinand Beer and Dr. Sebin Devasia's PSG IAS lecture modules.

### Problem Q1: Rectangular Resolution of Bolt Force
**Statement:** A mechanical anchor bolt is embedded into a foundation wall. A cable pulls on the bolt head with a force of magnitude $F = 800\text{ N}$ oriented at an angle of $35^\circ$ above the negative $x$-axis (measured clockwise from $-x$). Determine the rectangular components $F_x$ and $F_y$, and express $\mathbf{F}$ in Cartesian vector form.

::: details Click to view Step-by-Step Solution
#### 1. Strategy & Angle Determination:
The force vector lies in **Quadrant II** (pointing left and up).
- Rotating clockwise by $35^\circ$ from the negative $x$-axis ($180^\circ$) places the force above the $-x$ axis.
- Using Dr. Sebin Devasia's CCW angle pro-tip:
  $$
  \theta_{CCW} = 180^\circ - 35^\circ = 145^\circ
  $$
  *(Alternatively, using the reference triangle in Quadrant II with $\alpha = 35^\circ$: $F_x$ is negative, $F_y$ is positive).*

#### 2. Component Calculation:
- **Horizontal Component ($F_x$):**
  $$
  F_x = F \cos 145^\circ = 800 \cos(145^\circ) = 800(-0.81915) = -655.32\text{ N}
  $$
- **Vertical Component ($F_y$):**
  $$
  F_y = F \sin 145^\circ = 800 \sin(145^\circ) = 800(+0.57358) = +458.86\text{ N}
  $$

*(Note: If the $35^\circ$ angle were instead measured counter-clockwise / below the negative $x$-axis into Quadrant III, $\theta_{CCW} = 180^\circ + 35^\circ = 215^\circ$, yielding $F_x = -655\text{ N}, F_y = -459\text{ N}$).*

#### 3. Cartesian Vector Representation:
$$
\mathbf{F} = -(655\text{ N})\mathbf{i} + (459\text{ N})\mathbf{j}
$$
- Magnitude check:
  $$
  F = \sqrt{(-655.32)^2 + (+458.86)^2} = \sqrt{429444 + 210552} = \sqrt{639996} \approx 800\text{ N} \quad \checkmark
  $$
:::

---

### Problem Q2: 3500-lb Automobile Hoisted by Ship Crane
**Statement:** A $3500\text{-lb}$ automobile is hoisted from a cargo barge by a ship crane using main cable $AB$. To position the vehicle accurately over the dock, a dockworker pulls rope $AC$ attached to the connection eyelet $A$. At the instant of interest, cable $AB$ forms an angle of $2^\circ$ with the vertical, while positioning rope $AC$ forms an angle of $30^\circ$ below the horizontal. 
Determine the tension in main cable $AB$ ($T_{AB}$) and in positioning rope $AC$ ($T_{AC}$).

::: details Click to view Step-by-Step Solution
#### 1. System Modeling & Free-Body Diagram at Joint A:
Particle $A$ is subject to three concurrent coplanar forces in equilibrium:
1. **Weight $\mathbf{W}$:** Acting vertically downward, magnitude $W = 3500\text{ lb}$.
2. **Main Cable Tension $\mathbf{T}_{AB}$:** Pulling upward and to the left at $2^\circ$ from the vertical.
3. **Positioning Rope Tension $\mathbf{T}_{AC}$:** Pulling downward and to the right at $30^\circ$ below the horizontal.

```
                    | Cable AB (2° from vertical)
                    | /
                    |/
         -----------A-----------> x
                   /| \
                  / |  \ Rope AC (30° below horiz.)
                    |
                    v W = 3500 lb
```

#### 2. Geometric Force Triangle Construction:
Since exactly three forces are in static equilibrium ($\mathbf{T}_{AB} + \mathbf{T}_{AC} + \mathbf{W} = \mathbf{0}$), their tip-to-tail sum forms a closed triangle:
- Vector $\mathbf{W}$ is drawn straight downward (length represents $3500\text{ lb}$).
- From the bottom tip of $\mathbf{W}$, vector $\mathbf{T}_{AC}$ heads up and to the left (opposing its line of action) or from the top of $\mathbf{W}$, vector $\mathbf{T}_{AB}$ extends up and left at $2^\circ$ from vertical.

Let us determine the internal angles of the closed force triangle:
- Angle between vertical line of $\mathbf{W}$ and cable $AB$:
  $$
  \theta_1 = 2^\circ
  $$
- The rope $AC$ is at $30^\circ$ to the horizontal, so its line makes an angle of $90^\circ - 30^\circ = 60^\circ$ with the vertical.
- The angle between cable $AB$ ($2^\circ$ to vertical) and rope $AC$ ($30^\circ$ below horizontal):
  $$
  \theta_{between} = 180^\circ - (90^\circ - 2^\circ) - 30^\circ = 180^\circ - 88^\circ - 30^\circ = 62^\circ \quad \text{or via triangle interior:}
  $$
  In the force triangle:
  - Angle opposite $W$: Cable is at $2^\circ$ from vertical, rope is at $30^\circ$ from horizontal. The angle between $\mathbf{T}_{AB}$ and $\mathbf{T}_{AC}$ inside the triangle is:
    $$
    180^\circ - 120^\circ - 2^\circ = 58^\circ
    $$
  - Angle opposite $T_{AB}$: Rope $AC$ makes $30^\circ$ with horizontal, so with downward vertical it makes $90^\circ + 30^\circ = 120^\circ$.
  - Angle opposite $T_{AC}$: The cable angle with vertical is $2^\circ$.

Sum of interior angles $= 2^\circ + 120^\circ + 58^\circ = 180^\circ$.

#### 3. Analytical Solution via Law of Sines:
$$
\frac{T_{AB}}{\sin 120^\circ} = \frac{T_{AC}}{\sin 2^\circ} = \frac{3500\text{ lb}}{\sin 58^\circ}
$$

Evaluating the denominator:
$$
\sin 58^\circ \approx 0.84805
$$

- **Solving for Main Cable Tension $T_{AB}$:**
  $$
  T_{AB} = \frac{3500 \cdot \sin 120^\circ}{\sin 58^\circ} = \frac{3500 \cdot 0.86603}{0.84805} \approx \frac{3031.1}{0.84805} \approx 3574\text{ lb} \approx 3570\text{ lb}
  $$
- **Solving for Rope Tension $T_{AC}$:**
  $$
  T_{AC} = \frac{3500 \cdot \sin 2^\circ}{\sin 58^\circ} = \frac{3500 \cdot 0.034899}{0.84805} \approx \frac{122.15}{0.84805} \approx 144.0\text{ lb} \approx 144\text{ lb}
  $$

#### 4. Engineering Reflection:
Because the crane cable is nearly vertical ($2^\circ$), it supports almost the entirety of the car's weight ($3570\text{ lb} \approx 3500\text{ lb}$). The human worker only needs to exert $144\text{ lb}$ to pull the automobile laterally off the centerline!
:::

---

### Problem Q3: Vector Components of Guy Wire Pulling from Building
**Statement:** A guy wire attached to the top corner of a transmission building at point $A$ exerts a tension force $F = 300\text{ N}$. The wire anchors to ground point $B$, spanning a horizontal distance of $8\text{ m}$ to the right and descending a vertical height of $6\text{ m}$. Determine the Cartesian vector representation of the tensile force acting at building point $A$.

::: details Click to view Step-by-Step Solution
#### 1. Geometry & Unit Vector:
The displacement vector from top attachment $A$ to ground anchor $B$ is:
$$
\mathbf{r}_{AB} = (8\text{ m})\mathbf{i} - (6\text{ m})\mathbf{j}
$$

The straight-line length of the guy wire is:
$$
AB = |\mathbf{r}_{AB}| = \sqrt{(8)^2 + (-6)^2} = \sqrt{64 + 36} = \sqrt{100} = 10\text{ m}
$$

#### 2. Direction Cosines:
The wire forms a classic $3:4:5$ proportion triangle:
$$
\cos\alpha_x = \frac{8}{10} = 0.8
$$
$$
\cos\alpha_y = \frac{-6}{10} = -0.6
$$

#### 3. Force Vector:
The tension force pulls along the wire from $A$ toward $B$:
$$
\mathbf{F} = F \boldsymbol{\lambda}_{AB} = F \left(\frac{\mathbf{r}_{AB}}{AB}\right) = 300\text{ N} \left(0.8\mathbf{i} - 0.6\mathbf{j}\right)
$$
$$
F_x = 300(0.8) = +240\text{ N}
$$
$$
F_y = 300(-0.6) = -180\text{ N}
$$
$$
\mathbf{F} = (240\text{ N})\mathbf{i} - (180\text{ N})\mathbf{j}
$$
:::

---

### Problem Q4: Resolving Bolt Force Components to Magnitude & Direction
**Statement:** Structural sensors reveal that an anchor bracket on an offshore drilling rig experiences orthogonal shear and normal forces:
$$
\mathbf{F} = (700\text{ lb})\mathbf{i} + (1500\text{ lb})\mathbf{j}
$$
Calculate the magnitude $F$ of the total resultant load and its angle of inclination $\theta$ with respect to the horizontal.

::: details Click to view Step-by-Step Solution
#### 1. Magnitude Calculation:
By the Pythagorean theorem:
$$
F = \sqrt{F_x^2 + F_y^2} = \sqrt{(700\text{ lb})^2 + (1500\text{ lb})^2}
$$
$$
F = \sqrt{490,000 + 2,250,000} = \sqrt{2,740,000} \approx 1655.29\text{ lb} \approx 1655\text{ lb}
$$

#### 2. Direction Angle:
Since both $F_x > 0$ and $F_y > 0$, the resultant vector lies entirely in **Quadrant I**:
$$
\theta = \tan^{-1}\left(\frac{F_y}{F_x}\right) = \tan^{-1}\left(\frac{1500}{700}\right) = \tan^{-1}(2.14286)
$$
$$
\theta \approx 64.98^\circ \approx 65.0^\circ
$$

The anchor bracket experiences a total tensile pull of **$1655\text{ lb}$** directed at **$65.0^\circ$** above the positive $x$-axis.
:::

---

### Problem Q5: Heavy Crate Suspended Between Buildings
**Statement:** A heavy equipment crate having a mass of $m = 75\text{ kg}$ is suspended in mid-air between two municipal buildings by two steel cables tied to a central rigging ring $A$. Cable $AB$ rises toward the left at an angle of $50^\circ$ above the horizontal. Cable $AC$ rises toward the right at an angle of $30^\circ$ above the horizontal.
Determine the tension in cable $AB$ ($T_{AB}$) and cable $AC$ ($T_{AC}$).

```
                \ 50°               30° /
                 \                     /
                  \ Cable AB Cable AC /
                   \       A         /
                    \     / \       /
                     \   /   \     /
                         |
                         | Ring A
                         v
                    [ Crate ] (m = 75 kg)
```

::: details Click to view Step-by-Step Solution
#### 1. Weight of Crate:
$$
W = mg = (75\text{ kg})(9.81\text{ m/s}^2) = 735.75\text{ N} \approx 736\text{ N}
$$

#### 2. Free-Body Diagram at Ring A:
- $\mathbf{W}$: Downward along $-y$, $W = 735.75\text{ N}$
- $\mathbf{T}_{AB}$: Directed into Quadrant II at $50^\circ$ above the $-x$ axis ($\theta_{AB} = 180^\circ - 50^\circ = 130^\circ$)
- $\mathbf{T}_{AC}$: Directed into Quadrant I at $30^\circ$ above the $+x$ axis ($\theta_{AC} = 30^\circ$)

#### 3. Method 1: Scalar Component Equations ($\sum F_x = 0, \sum F_y = 0$)
- **Horizontal Equilibrium ($\sum F_x = 0$):**
  $$
  -T_{AB}\cos 50^\circ + T_{AC}\cos 30^\circ = 0
  $$
  $$
  T_{AC}\cos 30^\circ = T_{AB}\cos 50^\circ \implies T_{AC} = T_{AB} \left(\frac{\cos 50^\circ}{\cos 30^\circ}\right) = T_{AB} \left(\frac{0.64279}{0.86603}\right) = 0.74223\, T_{AB}
  $$

- **Vertical Equilibrium ($\sum F_y = 0$):**
  $$
  T_{AB}\sin 50^\circ + T_{AC}\sin 30^\circ - W = 0
  $$
  Substitute the expression for $T_{AC}$:
  $$
  T_{AB}\sin 50^\circ + (0.74223\, T_{AB})\sin 30^\circ = 735.75
  $$
  $$
  T_{AB}\left(0.76604 + 0.74223 \cdot 0.5\right) = 735.75
  $$
  $$
  T_{AB}\left(0.76604 + 0.37112\right) = 735.75
  $$
  $$
  T_{AB}(1.13716) = 735.75 \implies T_{AB} = \frac{735.75}{1.13716} \approx 647.01\text{ N} \approx 647\text{ N}
  $$

- **Calculate $T_{AC}$:**
  $$
  T_{AC} = 0.74223(647.01) \approx 480.23\text{ N} \approx 480\text{ N}
  $$

#### 4. Method 2: Verification via Force Triangle & Law of Sines
Draw $\mathbf{W}, \mathbf{T}_{AB}, \mathbf{T}_{AC}$ as a closed triangle:
- Angle opposite $W$: $180^\circ - (90^\circ - 50^\circ) - (90^\circ - 30^\circ) = 180^\circ - 40^\circ - 60^\circ = 80^\circ$.
- Angle opposite $T_{AB}$: Cable $AC$ is at $30^\circ$ to horizontal, so its angle with vertical is $90^\circ - 30^\circ = 60^\circ$.
- Angle opposite $T_{AC}$: Cable $AB$ is at $50^\circ$ to horizontal, so its angle with vertical is $90^\circ - 50^\circ = 40^\circ$.

Applying Law of Sines:
$$
\frac{T_{AB}}{\sin 60^\circ} = \frac{T_{AC}}{\sin 40^\circ} = \frac{735.75}{\sin 80^\circ}
$$
$$
T_{AB} = \frac{735.75 \sin 60^\circ}{\sin 80^\circ} = \frac{735.75(0.86603)}{0.98481} \approx 647\text{ N}
$$
$$
T_{AC} = \frac{735.75 \sin 40^\circ}{\sin 80^\circ} = \frac{735.75(0.64279)}{0.98481} \approx 480\text{ N}
$$
Both analytical methods agree with perfection!
:::
