---
title: 1.4 Module 1 — Important Questions & Self-Check Quiz
---

<script setup>
const questions = [
  {
    question: "Under Newtonian mechanics, which condition strictly defines mechanical static equilibrium for a particle?",
    options: [
      "The particle must have zero velocity (v = 0) and zero acceleration (a = 0).",
      "The particle must experience zero net external force (∑F = 0), ensuring zero acceleration (a = 0).",
      "The particle's kinetic energy must be constantly increasing.",
      "The sum of moments about any point must equal the particle's mass times velocity."
    ],
    answer: 1,
    explanation: "Mechanical equilibrium requires ∑F = 0, which guarantees a = 0 by Newton's Second Law. The particle may be at rest (static equilibrium) or moving at constant rectilinear velocity (dynamic equilibrium)."
  },
  {
    question: "Two forces of equal magnitude P = Q = 100 N act on a particle with an included angle of θ = 120°. What is the magnitude of their resultant R?",
    options: [
      "200 N",
      "141.4 N",
      "100 N",
      "50 N"
    ],
    answer: 2,
    explanation: "Using R = √(P² + Q² + 2PQ cos θ): R = √(100² + 100² + 2(100)(100) cos 120°) = √(10000 + 10000 - 10000) = √10000 = 100 N. When two equal forces have an included angle of 120°, their resultant equals the magnitude of either force."
  },
  {
    question: "A tensile force of F = 200 N is oriented at an angle θ = 150° measured counter-clockwise from the positive x-axis. What are its rectangular components (Fx, Fy)?",
    options: [
      "Fx = -173.2 N, Fy = +100.0 N",
      "Fx = +173.2 N, Fy = -100.0 N",
      "Fx = -100.0 N, Fy = +173.2 N",
      "Fx = +100.0 N, Fy = +173.2 N"
    ],
    answer: 0,
    explanation: "With θ measured CCW from +x: Fx = F cos 150° = 200(-0.8660) = -173.2 N. Fy = F sin 150° = 200(+0.5000) = +100.0 N."
  },
  {
    question: "When applying the Boundary Tracing Protocol to construct a Free-Body Diagram, how must a reaction from an ideal smooth surface be represented?",
    options: [
      "Parallel to the contact surface opposing potential motion.",
      "At a 45° angle to the contact surface.",
      "Strictly perpendicular (normal) to the contact surface, pushing into the isolated body.",
      "As an equal and opposite couple moment."
    ],
    answer: 2,
    explanation: "An ideal smooth surface cannot develop shear friction forces. Therefore, it can only exert a compressive contact force perpendicular (normal) to the tangent plane of contact."
  },
  {
    question: "Three concurrent coplanar forces form a closed equilibrium force triangle. Force F1 is opposite an internal angle of 30°, and Force F2 is opposite 60°. What is the ratio F2 / F1?",
    options: [
      "0.500",
      "1.000",
      "1.732 (√3)",
      "2.000"
    ],
    answer: 2,
    explanation: "By the Law of Sines: F1 / sin 30° = F2 / sin 60°. Thus F2 / F1 = sin 60° / sin 30° = (√3 / 2) / (1 / 2) = √3 ≈ 1.732."
  },
  {
    question: "A 3D force vector has direction angles θx = 60° and θy = 60°. If its z-component is known to be positive, what is the direction angle θz?",
    options: [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    answer: 1,
    explanation: "By the fundamental identity: cos² θx + cos² θy + cos² θz = 1. cos² 60° + cos² 60° + cos² θz = 0.25 + 0.25 + cos² θz = 1. Thus cos² θz = 0.50, giving cos θz = +√(0.50) ≈ 0.7071 (since Fz > 0), which corresponds to θz = 45°."
  },
  {
    question: "A guy wire extends from pole joint A(0, 0, 0) to anchor B(3 m, -4 m, 0). What is the unit vector λ_AB along the line of action?",
    options: [
      "λ = 0.60 i - 0.80 j",
      "λ = 0.80 i - 0.60 j",
      "λ = 3 i - 4 j",
      "λ = -0.60 i + 0.80 j"
    ],
    answer: 0,
    explanation: "Length AB = √(3² + (-4)²) = √25 = 5 m. The unit vector is λ_AB = r_AB / AB = (3 i - 4 j) / 5 = 0.60 i - 0.80 j."
  },
  {
    question: "The Principle of Transmissibility allows shifting a force's point of application along its line of action without altering:",
    options: [
      "The internal stress and strain distribution inside the body.",
      "The external state of motion or equilibrium of a rigid body.",
      "The temperature distribution of the material.",
      "The shear force and bending moment diagrams along a beam."
    ],
    answer: 1,
    explanation: "The Principle of Transmissibility is valid exclusively for external rigid-body effects (motion and static equilibrium). It cannot be used to determine internal stresses, strains, or deformations."
  }
];
</script>

# 1.4 Module 1 — Important Questions & Self-Check Quiz

This comprehensive assessment module consists of two parts:
- **Part A:** Ten high-yield conceptual and numerical questions representative of university and professional engineering examinations, complete with rigorous model solutions.
- **Part B:** An interactive eight-question self-check quiz for immediate concept mastery and score tracking.

---

## Part A: Important Questions Bank (Conceptual & Numerical)

### Question 1: Aristotle's Flaw vs. Galileo's Law of Inertia
**Question:** Contrast Aristotle's view of motion with Galileo's Law of Inertia. Explain why a celestial spacecraft coasting through deep interstellar space continues to travel at constant velocity without firing its thruster engines.

::: details Click to view Model Answer
#### Historical Contrast:
- **Aristotle (384–322 B.C.):** Posited that the "natural state" of matter is rest, and that a body requires a continuous external force (mover) to sustain motion. Aristotle confused environmental frictional resistance with an innate requirement for motion.
- **Galileo Galilei (1564–1642):** Proved through frictionless inclined plane experiments that rest and uniform rectilinear motion are dynamically equivalent states. Both correspond to zero net force ($\sum \mathbf{F} = \mathbf{0}$). Force is needed only to *change* velocity (to accelerate or decelerate), not to maintain it.

#### Deep Space Application:
In interstellar space, atmospheric drag and gravitational field gradients are negligible ($\sum \mathbf{F}_{ext} \approx \mathbf{0}$). By Newton's First Law (formalizing Galileo's principle):
$$
\sum \mathbf{F} = m\frac{d\mathbf{v}}{dt} = \mathbf{0} \implies \frac{d\mathbf{v}}{dt} = \mathbf{0} \implies \mathbf{v} = \text{constant}
$$
The spacecraft preserves its linear momentum indefinitely without expending propellant. Thruster burns are required only when changing course, accelerating, or braking into planetary orbit.
:::

---

### Question 2: Newton's Third Law and the Single-Body Misconception
**Question:** A student argues: *"If Newton's third law guarantees that for every action there is an equal and opposite reaction ($\mathbf{F}_{AB} = -\mathbf{F}_{BA}$), their vector sum is always zero ($\mathbf{F}_{AB} + \mathbf{F}_{BA} = \mathbf{0}$). Therefore, nothing in the universe should ever be able to accelerate."* Identify and dismantle the student's conceptual error.

::: details Click to view Model Answer
#### The Conceptual Error:
The student erroneously attempts to superimpose forces acting on **two distinctly different physical bodies** onto a single Free-Body Diagram.

#### Rigorous Mechanical Explanation:
1. **Distinct Bodies:** 
   - Force $\mathbf{F}_{AB}$ represents the force exerted **by body $A$ on body $B$**. It acts exclusively on body $B$.
   - Force $\mathbf{F}_{BA}$ represents the force exerted **by body $B$ on body $A$**. It acts exclusively on body $A$.
2. **Free-Body Diagram Isolation:** 
   When analyzing the motion or equilibrium of body $B$, Newton's Second Law considers strictly the forces acting **on** $B$:
   $$
   \sum \mathbf{F}_{\text{on } B} = \mathbf{F}_{AB} + \sum \mathbf{F}_{\text{other on } B} = m_B \mathbf{a}_B
   $$
   Reaction force $\mathbf{F}_{BA}$ does **not** appear on body $B$'s FBD because it acts on body $A$.
3. **Internal vs. External:**
   The forces $\mathbf{F}_{AB}$ and $\mathbf{F}_{BA}$ cancel each other out **only** if both bodies $A$ and $B$ are combined into a single, merged composite system. In that case, they become internal forces, which cannot accelerate the center of mass of the combined system.
:::

---

### Question 3: Complete Geometric Derivation of the Parallelogram Law
**Question:** Two concurrent coplanar forces $\mathbf{P}$ and $\mathbf{Q}$ act at point $O$ with an included angle $\theta$. Using a right-triangle geometric construction, derive the formula for the magnitude of the resultant $R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta}$ and its angle of inclination $\alpha$ relative to vector $\mathbf{P}$.

::: details Click to view Model Answer
#### Geometric Construction:
1. Lay vector $\mathbf{P}$ horizontally along line segment $OA$, with length $OA = P$.
2. Draw vector $\mathbf{Q}$ along line segment $OB$ inclined at angle $\theta$ to $OA$, with length $OB = Q$.
3. Complete parallelogram $OACB$, where diagonal $OC$ represents the resultant $\mathbf{R}$.
4. Extend line $OA$ horizontally and drop a perpendicular from vertex $C$ meeting the extended baseline at point $D$, forming right triangle $\triangle ADC$.

```
                 C
                /|
            Q  / | 
              /  | Q sin θ
             /   |
     θ      /    |
    O------A-----D
       P     Q cos θ
    <------ P + Q cos θ ------>
```

#### Trigonometric Leg Lengths:
In right triangle $\triangle BDC$ (or $\triangle ADC$ projection):
- $AD = Q \cos\theta$
- $CD = Q \sin\theta$
- Total base: $OD = OA + AD = P + Q \cos\theta$
- Total height: $CD = Q \sin\theta$

#### Pythagorean Formulation on $\triangle ODC$:
$$
(OC)^2 = (OD)^2 + (CD)^2
$$
$$
R^2 = (P + Q \cos\theta)^2 + (Q \sin\theta)^2
$$
$$
R^2 = P^2 + 2PQ\cos\theta + Q^2\cos^2\theta + Q^2\sin^2\theta
$$
$$
R^2 = P^2 + 2PQ\cos\theta + Q^2(\cos^2\theta + \sin^2\theta)
$$

Since $\cos^2\theta + \sin^2\theta = 1$:
$$
R^2 = P^2 + Q^2 + 2PQ\cos\theta \implies R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta}
$$

#### Angle of Inclination $\alpha$:
In right triangle $\triangle ODC$:
$$
\tan\alpha = \frac{\text{Opposite}}{\text{Adjacent}} = \frac{CD}{OD} = \frac{Q\sin\theta}{P + Q\cos\theta}
$$
$$
\alpha = \tan^{-1}\left(\frac{Q\sin\theta}{P + Q\cos\theta}\right)
$$
:::

---

### Question 4: Free-Body Diagrams & The Boundary Tracing Protocol
**Question:** Explain the four-step **Boundary Tracing Protocol** for constructing a Free-Body Diagram. Specify the exact mathematical and physical direction rules for: (a) a cut flexible steel cable, (b) a smooth surface contact, and (c) a rough surface contact.

::: details Click to view Model Answer
#### The 4-Step Protocol:
1. **Isolate the System:** Sketch an imaginary closed boundary loop completely surrounding the particle or body of interest, severing it from all mechanical supports and neighboring elements.
2. **Establish Coordinate Axes:** Draw an explicit Cartesian coordinate system ($x, y, z$) with positive directional senses indicated.
3. **Apply Non-Contact Field Forces:** Place the gravitational body force vector ($W = mg$) acting strictly vertically downward from the center of mass.
4. **Trace the Boundary Loop Clockwise:** Identify every location where the boundary cut through physical connections and replace each severed element with its equivalent reaction force vector:

#### Reaction Direction Rules:
- **(a) Cut Flexible Steel Cable:** Must always be represented as a **tensile force pulling directly away** from the isolated body along the cable centerline. Flexible cables buckle under compression; therefore, $T \ge 0$ is a strict physical constraint.
- **(b) Smooth Surface Contact:** Exerts a compressive normal force $\mathbf{N}$ directed **strictly perpendicular (normal) to the tangent plane** of contact, pushing into the isolated body. Because the surface is smooth (frictionless), the tangential force component is zero.
- **(c) Rough Surface Contact:** Exerts two orthogonal components:
  1. A normal compressive force $\mathbf{N}$ perpendicular to the contact plane pushing into the body.
  2. A tangential friction force $\mathbf{F}_f$ lying in the contact plane acting in the direction that directly **opposes the relative motion (or impending slip)** of the body.
:::

---

### Question 5: Derivation of the Fundamental Direction Cosine Identity
**Question:** Define the direction cosines of a force vector $\mathbf{F}$ in 3D space. Prove that the sum of the squares of the direction cosines is identically equal to one ($\cos^2\theta_x + \cos^2\theta_y + \cos^2\theta_z = 1$), and explain the geometric meaning of the unit vector $\boldsymbol{\lambda}$.

::: details Click to view Model Answer
#### Definitions:
Let $\mathbf{F} = F_x\mathbf{i} + F_y\mathbf{j} + F_z\mathbf{k}$ be a force vector in $\mathbb{R}^3$ with magnitude:
$$
F = |\mathbf{F}| = \sqrt{F_x^2 + F_y^2 + F_z^2}
$$
The direction angles $\theta_x, \theta_y, \theta_z \in [0^\circ, 180^\circ]$ are the spatial angles between $\mathbf{F}$ and the positive coordinate axes $+x, +y, +z$. The direction cosines are:
$$
\cos\theta_x = \frac{F_x}{F}, \qquad \cos\theta_y = \frac{F_y}{F}, \qquad \cos\theta_z = \frac{F_z}{F}
$$

#### Mathematical Proof:
Summing the squares of the three direction cosines:
$$
\cos^2\theta_x + \cos^2\theta_y + \cos^2\theta_z = \left(\frac{F_x}{F}\right)^2 + \left(\frac{F_y}{F}\right)^2 + \left(\frac{F_z}{F}\right)^2
$$
$$
\cos^2\theta_x + \cos^2\theta_y + \cos^2\theta_z = \frac{F_x^2 + F_y^2 + F_z^2}{F^2}
$$
Since $F^2 = F_x^2 + F_y^2 + F_z^2$ by the 3D Pythagorean theorem:
$$
\cos^2\theta_x + \cos^2\theta_y + \cos^2\theta_z = \frac{F^2}{F^2} \equiv 1 \quad \blacksquare
$$

#### Geometric Meaning of Unit Vector $\boldsymbol{\lambda}$:
Dividing $\mathbf{F}$ by its scalar magnitude yields:
$$
\boldsymbol{\lambda} = \frac{\mathbf{F}}{F} = \cos\theta_x\mathbf{i} + \cos\theta_y\mathbf{j} + \cos\theta_z\mathbf{k}
$$
The vector $\boldsymbol{\lambda}$ is a pure, dimensionless vector of length $|\boldsymbol{\lambda}| = 1$ pointing along the line of action of the force. It completely isolates the spatial orientation of the force from its physical magnitude.
:::

---

### Question 6 (Numerical): Traffic Light Suspended by Two Cables
**Question:** A municipal traffic signal of weight $W = 500\text{ N}$ is suspended in equilibrium by two cables tied to a central ring $A$. Cable $AB$ makes an angle of $30^\circ$ with the horizontal ceiling, and cable $AC$ makes an angle of $45^\circ$ with the horizontal ceiling. Determine the tension in cable $AB$ ($T_{AB}$) and cable $AC$ ($T_{AC}$).

::: details Click to view Step-by-Step Solution
#### 1. Free-Body Diagram at Ring A:
- $\mathbf{W} = -(500\text{ N})\mathbf{j}$ acting vertically downward.
- $\mathbf{T}_{AB}$ inclined at $30^\circ$ above the negative $x$-axis ($\theta_{AB} = 150^\circ$).
- $\mathbf{T}_{AC}$ inclined at $45^\circ$ above the positive $x$-axis ($\theta_{AC} = 45^\circ$).

#### 2. Equilibrium Equations:
- **$\sum F_x = 0$:**
  $$
  -T_{AB}\cos 30^\circ + T_{AC}\cos 45^\circ = 0 \implies T_{AC}\cos 45^\circ = T_{AB}\cos 30^\circ
  $$
  $$
  T_{AC} = T_{AB}\frac{\cos 30^\circ}{\cos 45^\circ} = T_{AB}\frac{0.86603}{0.70711} \approx 1.22474\, T_{AB}
  $$

- **$\sum F_y = 0$:**
  $$
  T_{AB}\sin 30^\circ + T_{AC}\sin 45^\circ - 500 = 0
  $$
  Substitute the expression for $T_{AC}$:
  $$
  T_{AB}(0.5000) + (1.22474\, T_{AB})(0.70711) = 500
  $$
  $$
  T_{AB}(0.5000 + 0.86603) = 500
  $$
  $$
  1.36603\, T_{AB} = 500 \implies T_{AB} = \frac{500}{1.36603} \approx 366.02\text{ N} \approx 366\text{ N}
  $$

- **Compute $T_{AC}$:**
  $$
  T_{AC} = 1.22474(366.02) \approx 448.28\text{ N} \approx 448\text{ N}
  $$

#### 3. Verification via Law of Sines:
In the closed force triangle:
- Angle opposite $W$: $180^\circ - (90^\circ - 30^\circ) - (90^\circ - 45^\circ) = 180^\circ - 60^\circ - 45^\circ = 75^\circ$.
- Angle opposite $T_{AB}$: Cable $AC$ is at $45^\circ$ to horizontal $\implies 90^\circ - 45^\circ = 45^\circ$ from vertical.
- Angle opposite $T_{AC}$: Cable $AB$ is at $30^\circ$ to horizontal $\implies 90^\circ - 30^\circ = 60^\circ$ from vertical.

$$
\frac{T_{AB}}{\sin 45^\circ} = \frac{T_{AC}}{\sin 60^\circ} = \frac{500}{\sin 75^\circ}
$$
$$
T_{AB} = \frac{500 \sin 45^\circ}{\sin 75^\circ} = \frac{500(0.70711)}{0.96593} \approx 366.0\text{ N} \quad \checkmark
$$
$$
T_{AC} = \frac{500 \sin 60^\circ}{\sin 75^\circ} = \frac{500(0.86603)}{0.96593} \approx 448.3\text{ N} \quad \checkmark
$$
:::

---

### Question 7 (Numerical): Resultant of Three Concurrent Planar Forces
**Question:** Three coplanar forces act concurrently on an industrial eye-bolt:
- $\mathbf{F}_1 = 300\text{ N}$ at $\theta_1 = 0^\circ$ (along $+x$)
- $\mathbf{F}_2 = 400\text{ N}$ at $\theta_2 = 90^\circ$ (along $+y$)
- $\mathbf{F}_3 = 200\text{ N}$ at $\theta_3 = 210^\circ$
Calculate the magnitude $R$ of the resultant force and its counter-clockwise inclination angle $\theta$ relative to the positive $x$-axis.

::: details Click to view Step-by-Step Solution
#### 1. Component Tabulation:
| Force | Magnitude | Angle $\theta$ | $F_x = F\cos\theta$ | $F_y = F\sin\theta$ |
| :--- | :--- | :--- | :--- | :--- |
| $\mathbf{F}_1$ | $300\text{ N}$ | $0^\circ$ | $300\cos 0^\circ = +300.00\text{ N}$ | $300\sin 0^\circ = 0\text{ N}$ |
| $\mathbf{F}_2$ | $400\text{ N}$ | $90^\circ$ | $400\cos 90^\circ = 0\text{ N}$ | $400\sin 90^\circ = +400.00\text{ N}$ |
| $\mathbf{F}_3$ | $200\text{ N}$ | $210^\circ$ | $200\cos 210^\circ = -173.21\text{ N}$ | $200\sin 210^\circ = -100.00\text{ N}$ |
| **Sum** | — | — | **$R_x = +126.79\text{ N}$** | **$R_y = +300.00\text{ N}$** |

#### 2. Resultant Magnitude:
$$
R = \sqrt{R_x^2 + R_y^2} = \sqrt{(126.79)^2 + (300.00)^2} = \sqrt{16075.7 + 90000} = \sqrt{106075.7} \approx 325.69\text{ N} \approx 326\text{ N}
$$

#### 3. Direction Angle:
Since both $R_x > 0$ and $R_y > 0$, the resultant vector lies in **Quadrant I**:
$$
\theta = \tan^{-1}\left(\frac{R_y}{R_x}\right) = \tan^{-1}\left(\frac{300.00}{126.79}\right) = \tan^{-1}(2.3661) \approx 67.09^\circ \approx 67.1^\circ
$$

The net load on the eye-bolt is **$326\text{ N}$** acting at **$67.1^\circ$** above the positive $x$-axis.
:::

---

### Question 8 (Numerical): 120-kg Machine Component on a Smooth Incline
**Question:** A machine casting of mass $m = 120\text{ kg}$ rests on a frictionless ramp inclined at an angle of $\alpha = 25^\circ$ to the horizontal. A light cable attached to the casting pulls parallel to the ramp surface to prevent it from sliding down. Determine the required cable tension $T$ and the normal force $N$ exerted by the ramp on the casting.

::: details Click to view Step-by-Step Solution
#### 1. Weight Calculation:
$$
W = mg = (120\text{ kg})(9.81\text{ m/s}^2) = 1177.2\text{ N}
$$

#### 2. Choice of Rotated Coordinate System:
Choose coordinate axes aligned with the ramp:
- $+x'$ directed up along the ramp surface.
- $+y'$ directed perpendicular (normal) away from the ramp surface.

In this rotated frame, weight $\mathbf{W}$ makes an angle of $\alpha = 25^\circ$ with the negative $y'$ axis:
- $W_{x'} = -W\sin 25^\circ = -1177.2\sin 25^\circ$
- $W_{y'} = -W\cos 25^\circ = -1177.2\cos 25^\circ$

#### 3. Equilibrium Equations:
- **Parallel to ramp ($\sum F_{x'} = 0$):**
  $$
  T - W\sin 25^\circ = 0 \implies T = 1177.2 \sin 25^\circ = 1177.2(0.42262) \approx 497.51\text{ N} \approx 498\text{ N}
  $$
- **Perpendicular to ramp ($\sum F_{y'} = 0$):**
  $$
  N - W\cos 25^\circ = 0 \implies N = 1177.2 \cos 25^\circ = 1177.2(0.90631) \approx 1066.91\text{ N} \approx 1067\text{ N}
  $$

The cable tension is **$498\text{ N}$**, and the normal ramp reaction is **$1067\text{ N}$**.
:::

---

### Question 9 (Numerical): 3D Force Orientation & Component Resolution
**Question:** A spatial force $\mathbf{F}$ has a magnitude of $F = 1200\text{ N}$. Its direction angles with the positive $x$ and $y$ axes are measured as $\theta_x = 60^\circ$ and $\theta_y = 45^\circ$, respectively. Knowing that the $z$-component of the force is directed along the negative $z$-axis ($F_z < 0$), determine:
1. The direction angle $\theta_z$.
2. The Cartesian components $F_x, F_y, F_z$.
3. The Cartesian vector expression of $\mathbf{F}$.

::: details Click to view Step-by-Step Solution
#### 1. Finding $\theta_z$:
Applying the fundamental identity:
$$
\cos^2\theta_x + \cos^2\theta_y + \cos^2\theta_z = 1
$$
$$
\cos^2(60^\circ) + \cos^2(45^\circ) + \cos^2\theta_z = 1
$$
$$
(0.5000)^2 + (0.70711)^2 + \cos^2\theta_z = 1
$$
$$
0.2500 + 0.5000 + \cos^2\theta_z = 1 \implies 0.7500 + \cos^2\theta_z = 1
$$
$$
\cos^2\theta_z = 0.2500 \implies \cos\theta_z = \pm \sqrt{0.2500} = \pm 0.5000
$$

Since $F_z < 0$, we choose the negative root:
$$
\cos\theta_z = -0.5000 \implies \theta_z = \cos^{-1}(-0.5000) = 120^\circ
$$

#### 2. Cartesian Components:
- $F_x = F \cos\theta_x = 1200 \cos 60^\circ = 1200(0.5000) = +600\text{ N}$
- $F_y = F \cos\theta_y = 1200 \cos 45^\circ = 1200(0.70711) = +848.53\text{ N} \approx +849\text{ N}$
- $F_z = F \cos\theta_z = 1200 \cos 120^\circ = 1200(-0.5000) = -600\text{ N}$

#### 3. Cartesian Vector Form:
$$
\mathbf{F} = (600\text{ N})\mathbf{i} + (849\text{ N})\mathbf{j} - (600\text{ N})\mathbf{k}
$$
Magnitude check:
$$
F = \sqrt{600^2 + 848.53^2 + (-600)^2} = \sqrt{360000 + 720000 + 360000} = \sqrt{1440000} = 1200\text{ N} \quad \checkmark
$$
:::

---

### Question 10 (Numerical): 3D Guy Wire Vector Acting on Anchor & Pole
**Question:** A guy wire stabilizing an antenna tower runs from the pole collar $A(0, 5\text{ m}, 0)$ to ground anchor $B(3\text{ m}, 0, 4\text{ m})$. If the tensile force in the wire is $T = 2500\text{ N}$, determine:
1. The force vector $\mathbf{F}_B$ exerted by the wire on ground anchor $B$.
2. The force vector $\mathbf{F}_A$ exerted by the wire on tower collar $A$.

::: details Click to view Step-by-Step Solution
#### 1. Position Vector from A to B:
$$
\vec{AB} = (x_B - x_A)\mathbf{i} + (y_B - y_A)\mathbf{j} + (z_B - z_A)\mathbf{k}
$$
$$
\vec{AB} = (3 - 0)\mathbf{i} + (0 - 5)\mathbf{j} + (4 - 0)\mathbf{k} = 3\mathbf{i} - 5\mathbf{j} + 4\mathbf{k}\text{ (m)}
$$

Length of the wire:
$$
AB = \sqrt{(3)^2 + (-5)^2 + (4)^2} = \sqrt{9 + 25 + 16} = \sqrt{50} \approx 7.0711\text{ m}
$$

#### 2. Unit Vector from A toward B:
$$
\boldsymbol{\lambda}_{AB} = \frac{3}{\sqrt{50}}\mathbf{i} - \frac{5}{\sqrt{50}}\mathbf{j} + \frac{4}{\sqrt{50}}\mathbf{k} \approx 0.42426\mathbf{i} - 0.70711\mathbf{j} + 0.56569\mathbf{k}
$$

#### 3. Force Exerted on Ground Anchor B:
The wire pulls on anchor $B$ **toward collar $A$** (opposite to $\boldsymbol{\lambda}_{AB}$):
$$
\mathbf{F}_B = T \boldsymbol{\lambda}_{BA} = -T \boldsymbol{\lambda}_{AB}
$$
$$
\mathbf{F}_B = 2500(-0.42426\mathbf{i} + 0.70711\mathbf{j} - 0.56569\mathbf{k})
$$
$$
\mathbf{F}_B = -(1061\text{ N})\mathbf{i} + (1768\text{ N})\mathbf{j} - (1414\text{ N})\mathbf{k}
$$

#### 4. Force Exerted on Tower Collar A:
The wire pulls on collar $A$ **toward anchor $B$** (along $\boldsymbol{\lambda}_{AB}$):
$$
\mathbf{F}_A = T \boldsymbol{\lambda}_{AB} = +(1061\text{ N})\mathbf{i} - (1768\text{ N})\mathbf{j} + (1414\text{ N})\mathbf{k}
$$

Notice that $\mathbf{F}_A = -\mathbf{F}_B$, satisfying Newton's Third Law across the cable member!
:::

---

## Part B: Interactive Module 1 Quiz

Test your mastery of Module 1 concepts using the interactive quiz module below. Your progress and answer explanations are rendered automatically.

<QuizModule title="Module 1: Statics of Particles — Mastery Quiz" :questions="questions" />
