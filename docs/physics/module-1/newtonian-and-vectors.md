# 1.1 Newtonian Foundations & Vector Mechanics

Welcome to **23IM102 – Physics**, instructed by **Dr. Sebin Devasia** (Department of Physics, PSG Institute of Advanced Studies). This course bridges classical physical principles with rigorous analytical mechanics, providing the engineering foundation necessary to analyze everything from micro-mechanisms to aerospace structures.

We begin our journey where modern engineering science was born: the transition from ancient intuition to Newtonian mechanics, formalized through the mathematical language of vector algebra.

---

## 1. Historical Foundations: Aristotle vs. Galileo

Engineering mechanics rests upon understanding why objects move—and why they remain stationary. To appreciate the Newtonian paradigm, we must examine the intellectual breakthrough that replaced two millennia of flawed intuition.

```
+---------------------------+     Refuted by      +-----------------------------+     Axiomatized     +---------------------------+
| Aristotle (384–322 B.C.)  |     experiment      |  Galileo (1564–1642)        |     via calculus    | Sir Isaac Newton          |
| "Natural State is Rest"   | ──────────────────► |  "Law of Inertia"           | ──────────────────► | (1642–1727)               |
| Continuous force required |                     |  In vacuum, motion persists |                     | 3 Laws & F = dp/dt        |
+---------------------------+                     +-----------------------------+                     +---------------------------+
```

### Aristotle's Flaw (384–322 B.C.)
For nearly two thousand years, Western natural philosophy accepted Aristotle's assertion that the "natural state" of terrestrial matter is rest. Aristotle posited:
- A body requires a continuous external mover (force) to maintain a steady speed.
- If the mover ceases to apply force, the body immediately comes to rest.

To explain why a thrown arrow continues through the air after leaving the bowstring, Aristotelians invented *antiperistasis*—the idea that displaced air rushes behind the projectile to push it forward. Similarly, a child pulling a toy wagon observes that the wagon halts the instant they release the handle. 

Aristotle's fundamental flaw was confusing an **environmental resistance (friction and drag)** with an **inherent requirement of motion**.

### Galileo's Frictionless Thought Experiment (1564–1642)
Galileo Galilei demolished Aristotle's view using idealized thought experiments (*gedankenexperimenten*) verified on smooth inclined planes:

1. **Downhill Ramp:** A ball rolling down an incline accelerates because gravity assists its motion.
2. **Uphill Ramp:** A ball rolling up an incline decelerates because gravity opposes its motion.
3. **Horizontal Surface:** By logical continuity, if the surface is horizontal, gravity neither accelerates nor decelerates the ball.
4. **Frictionless Limit:** If all surface roughness and air resistance could be eliminated, the ball would travel in a straight line at constant velocity **indefinitely** without any engine or pulling agent.

::: tip Galileo's Golden Insight
Rest and uniform rectilinear motion are dynamically identical states. Both represent zero net force ($\sum \mathbf{F} = \mathbf{0}$). An external force is required only to **change** the state of motion (to accelerate or decelerate), not to **maintain** it. The child pulling the toy wagon is merely supplying a force equal and opposite to the ground's frictional drag.
:::

---

## 2. Sir Isaac Newton's Three Laws of Motion

In *Philosophiae Naturalis Principia Mathematica* (1687), Sir Isaac Newton formalized Galileo's insight into three universal axioms governing particle mechanics.

### Newton's First Law (Law of Inertia)
> **Every body continues in its state of rest, or of uniform motion in a straight line, unless it is compelled to change that state by forces impressed upon it.**

Mathematically, in an inertial reference frame:
$$
\sum \mathbf{F} = \mathbf{0} \implies \mathbf{v} = \text{constant} \quad (\mathbf{a} = \mathbf{0})
$$

An **Inertial Reference Frame** is a coordinate system that is neither accelerating nor rotating relative to distant fixed stars. In such a frame, Newton's laws hold without introducing fictitious inertial forces.

### Newton's Second Law (Law of Momentum Change)
> **The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the straight line in which the force acts.**

Linear momentum $\mathbf{p}$ is defined as the product of mass and velocity:
$$
\mathbf{p} = m\mathbf{v}
$$

Newton expressed the second law in fluxional calculus as:
$$
\mathbf{F} = \frac{d\mathbf{p}}{dt} = \frac{d(m\mathbf{v})}{dt}
$$

For a particle of invariant mass $m$ ($dm/dt = 0$):
$$
\mathbf{F} = m \frac{d\mathbf{v}}{dt} = m\mathbf{a}
$$

::: info Conceptual Focus: The Circular Stone on a String
Consider a stone of mass $m$ whirling in a horizontal circle of radius $r$ at constant speed $v$.
- Is the momentum $\mathbf{p}$ constant? **No.** Although the scalar speed $v$ is constant, the direction of the velocity vector $\mathbf{v}$ continuously changes.
- Because $\frac{d\mathbf{v}}{dt} \ne \mathbf{0}$, an acceleration exists: the centripetal acceleration $\mathbf{a}_n = -\frac{v^2}{r}\mathbf{e}_r$, directed radially inward toward the rotation center.
- By Newton's second law, this acceleration demands a continuous net inward force: the cord tension $T = \frac{mv^2}{r}$. If the cord snaps ($T = 0$), the stone immediately flies off along the instantaneous tangent line, preserving its linear inertia per Newton's First Law.
:::

### Newton's Third Law (Action and Reaction)
> **To every action there is always opposed an equal reaction; or, the mutual actions of two bodies upon each other are always equal, and directed to contrary parts.**

If body $A$ exerts a force $\mathbf{F}_{AB}$ on body $B$, then body $B$ simultaneously exerts an equal and opposite force $\mathbf{F}_{BA}$ on body $A$:
$$
\mathbf{F}_{AB} = -\mathbf{F}_{BA} \iff \mathbf{F}_{AB} + \mathbf{F}_{BA} = \mathbf{0}
$$

::: warning The Action-Reaction Fallacy: Why They Never Cancel
A frequent rookie trap in structural engineering is arguing: *"If action equals reaction ($\mathbf{F}_{AB} = -\mathbf{F}_{BA}$), why doesn't every force cancel out and prevent everything from ever moving?"*

**The Answer:** Action and reaction forces act on **two distinctly different physical bodies**.
- $\mathbf{F}_{AB}$ acts exclusively on **Body $B$**.
- $\mathbf{F}_{BA}$ acts exclusively on **Body $A$**.

When drawing a Free-Body Diagram (FBD) of body $B$, only forces acting **on** $B$ are drawn. You **never** place both $\mathbf{F}_{AB}$ and $\mathbf{F}_{BA}$ on the same free-body diagram! Furthermore, there is **zero time delay** between action and reaction—they exist simultaneously as mutual facets of a single interaction.
:::

---

## 3. Introductory Lecture Problems

The following four foundational problems from Dr. Sebin Devasia's lecture illustrate Newton's laws in concrete engineering contexts.

::: details Problem 1: Bicycle Braking Deceleration & Retarding Force
**Statement:** A cyclist and bicycle have a combined mass of $m = 63\text{ kg}$. While traveling along a horizontal straight track at an initial speed of $u = 8.5\text{ m/s}$, the rider applies the brakes, bringing the bicycle to a complete stop ($v = 0$) in a time duration of $\Delta t = 3.0\text{ s}$. Determine the average braking force exerted on the bicycle.

**Step-by-Step Solution:**
1. **Kinematics (Constant deceleration assumption):**
   $$
   a = \frac{v - u}{\Delta t} = \frac{0 - 8.5\text{ m/s}}{3.0\text{ s}} = -2.833\text{ m/s}^2
   $$
2. **Kinetics (Newton's Second Law):**
   $$
   F_{brake} = m a = (63\text{ kg})(-2.833\text{ m/s}^2) = -178.5\text{ N}
   $$
3. **Engineering Conclusion:**
   The retarding braking force has a magnitude of **$178.5\text{ N}$** and acts in the direction opposite to the bicycle's forward velocity.
:::

::: details Problem 2: Rifle Recoil Mechanics (Conservation of Momentum)
**Statement:** A firearm of mass $M = 25\text{ kg}$ rests on a frictionless horizontal mount and fires a projectile of mass $m = 30\text{ g} = 0.03\text{ kg}$ with a muzzle velocity of $v = 200\text{ m/s}$. Find the instantaneous recoil speed $V$ of the firearm.

**Step-by-Step Solution:**
1. **System Identification:** Consider firearm + bullet as a single closed system.
2. **External Forces:** Over the infinitesimal duration of the explosion, the horizontal net external force is zero ($\sum F_{ext,x} = 0$).
3. **Conservation of Linear Momentum:**
   $$
   P_{initial} = P_{final} \implies 0 = M V + m v
   $$
4. **Solving for Recoil Velocity $V$:**
   $$
   V = -\frac{m v}{M} = -\frac{(0.03\text{ kg})(200\text{ m/s})}{25\text{ kg}} = -\frac{6.0}{25} = -0.24\text{ m/s}
   $$
5. **Engineering Conclusion:**
   The negative sign denotes that the firearm moves in the direction opposite to the projectile. The recoil speed is **$0.24\text{ m/s}$** (or $24\text{ cm/s}$).
:::

::: details Problem 3: Three Blocks in Contact on a Frictionless Plane
**Statement:** Three rectangular blocks with masses $m_1 = 10\text{ kg}$, $m_2 = 7\text{ kg}$, and $m_3 = 2\text{ kg}$ are placed in physical contact on a smooth, frictionless horizontal surface. A horizontal pushing force $P = 50\text{ N}$ is applied to the leftmost mass $m_1$. 
Calculate:
1. The common acceleration $a$ of the system.
2. The internal contact force between block 1 and block 2 ($F_{12}$).
3. The internal contact force between block 2 and block 3 ($F_{23}$).

**Step-by-Step Solution:**
1. **Whole-System Free-Body Diagram:**
   Because all three blocks move together with identical acceleration $a$:
   $$
   \sum F_x = (m_1 + m_2 + m_3)a \implies 50\text{ N} = (10 + 7 + 2)a = 19 a
   $$
   $$
   a = \frac{50}{19} \approx 2.632\text{ m/s}^2
   $$
2. **Isolating Block 3 (Rightmost):**
   The only horizontal force acting on block 3 is the normal contact force $F_{23}$ exerted by block 2:
   $$
   F_{23} = m_3 a = (2\text{ kg})(2.6316\text{ m/s}^2) = 5.263\text{ N}
   $$
3. **Isolating Block 2 (Middle):**
   Block 2 experiences $F_{12}$ pushing to the right and reaction $F_{23}$ pushing to the left:
   $$
   F_{12} - F_{23} = m_2 a \implies F_{12} = F_{23} + m_2 a
   $$
   $$
   F_{12} = 5.263\text{ N} + (7\text{ kg})(2.6316\text{ m/s}^2) = 5.263 + 18.421 = 23.684\text{ N}
   $$
4. **Verification via Block 1:**
   $$
   P - F_{12} = m_1 a \implies 50 - 23.684 = 26.316\text{ N} = (10\text{ kg})(2.6316\text{ m/s}^2) \quad \checkmark
   $$
5. **Engineering Conclusion:**
   Acceleration $a = \mathbf{2.63\text{ m/s}^2}$, contact forces $F_{12} = \mathbf{23.68\text{ N}}$, and $F_{23} = \mathbf{5.26\text{ N}}$. Notice how the internal contact force decreases along the line of transmission!
:::

::: details Problem 4: Calculus Kinematic Trajectory & Force Derivation
**Statement:** A particle of mass $m$ moves along a vertical axis such that its position as a function of time is given by:
$$
y(t) = ut + \frac{1}{2}gt^2
$$
where $u$ is the initial velocity and $g$ is a constant. Use differential calculus to determine the velocity, acceleration, and the net force acting on the particle.

**Step-by-Step Solution:**
1. **Instantaneous Velocity:** Differentiating position with respect to time:
   $$
   v(t) = \frac{dy}{dt} = \frac{d}{dt}\left(ut + \frac{1}{2}gt^2\right) = u + gt
   $$
2. **Instantaneous Acceleration:** Differentiating velocity with respect to time:
   $$
   a(t) = \frac{dv}{dt} = \frac{d}{dt}(u + gt) = g
   $$
3. **Net Dynamic Force:** Applying Newton's Second Law:
   $$
   F_{net} = m a = m g
   $$
4. **Engineering Conclusion:**
   The particle experiences a constant downward gravitational force of magnitude **$mg$**, producing a linear velocity growth rate of **$g$**.
:::

---

## 4. Branches of Mechanics & The Particle Idealization

Engineering Mechanics is the physical science that studies the state of rest or motion of bodies subjected to forces. It branches logically into:

```
                              [ Engineering Mechanics ]
                                          │
          ┌───────────────────────────────┼───────────────────────────────┐
          ▼                               ▼                               ▼
[ Rigid-Body Mechanics ]       [ Deformable-Body Mechanics ]      [ Fluid Mechanics ]
          │                        (Mechanics of Materials)
   ┌──────┴──────┐
   ▼             ▼
Statics       Dynamics (a ≠ 0)
(a = 0)          │
          ┌──────┴──────┐
          ▼             ▼
     Kinematics      Kinetics
     (x, v, a)    (F = ma, Energy)
```

### The Particle Idealization
In engineering mechanics, a **particle** is defined as an entity possessing mass $m$, but whose geometric dimensions are negligible compared to the radius of curvature of its trajectory or the dimensions of the system under study.

Treating a body as a particle carries a decisive mathematical consequence:
- Because its dimensions are zero, a particle has no geometric orientation or rotational inertia.
- All forces acting on a particle pass through the exact same spatial point: they are **concurrent forces**.
- Consequently, **moments and rotations do not exist for a particle**. The rotational equilibrium equation $\sum \mathbf{M} = \mathbf{0}$ is trivially satisfied, reducing particle statics entirely to linear translational equilibrium: $\sum \mathbf{F} = \mathbf{0}$.

Large bodies (such as a 100-ton locomotive, an Airbus A350 in flight, or a celestial body) are routinely idealized as particles whenever their overall trajectory matters far more than their internal stress or local pitch/yaw/roll rotations.

---

## 5. Forces & The Principle of Transmissibility

A **force** represents the action of one body upon another. It is fully specified by three distinct physical characteristics:
1. **Magnitude:** A scalar quantity measured in Newtons ($\text{N}$) or pounds ($\text{lb}$).
2. **Direction:** Composed of its spatial **line of action** (the infinite geometric line along which the force acts) and its **sense** (indicated by an arrowhead).
3. **Point of Application:** The specific spatial location where the force is applied to the body.

### Classification of Vectors
In mechanics, vectors are classified according to how their point of application may be shifted:

| Vector Type | Definition & Freedom | Physical Example |
| :--- | :--- | :--- |
| **Fixed (Bound) Vector** | Tied permanently to a specific point of application. Cannot be shifted without altering the physical phenomenon. | Stress and strain vectors at a point inside a deformed structural beam. |
| **Sliding Vector** | Can slide anywhere along its unique **line of action** without altering the external effect on a rigid body. | An external pushing or pulling force on a rigid chassis (**Principle of Transmissibility**). |
| **Free Vector** | Can be moved anywhere in space parallel to itself without change. | The couple moment $\mathbf{M}$, or angular velocity $\boldsymbol{\omega}$ of a translating body. |
| **Concurrent Vectors** | Multiple vectors whose lines of action all intersect at a single mutual point. | All forces acting on a particle. |

### The Principle of Transmissibility
> **The condition of equilibrium or motion of a rigid body remains unchanged if a force $\mathbf{F}$ acting at a given point is replaced by a force of the same magnitude and direction, acting at a different point, provided both forces have the same line of action.**

```
[ Pushing at Point A ]                      [ Pulling at Point B ]
   Force F ───► [ A ══ Rigid Body ══ B ]  ≡  [ A ══ Rigid Body ══ B ] ───► Force F
                    (Identical External Line of Action)
```

Whether you push a stalled car from behind with $500\text{ N}$ at bumper point $A$, or attach a tow cable and pull with $500\text{ N}$ from hook point $B$ along the same horizontal line of action, the net acceleration of the rigid car is identical! 

*Crucial Caveat:* The Principle of Transmissibility applies **strictly to external rigid-body effects**. It does **not** apply to internal stress distribution. Pushing compresses the car's rear bumper, while pulling tensions the tow hook!

---

## 6. The Parallelogram Law & Triangle Rule

Vectors do not combine according to simple scalar arithmetic. If you pull a stake with $3\text{ N}$ north and $4\text{ N}$ east, the total force is not $7\text{ N}$, but $5\text{ N}$ at $53.13^\circ$.

Vector addition is governed by the **Parallelogram Law of Addition**, an experimental axiom first formulated by Simon Stevin (1586) and Sir Isaac Newton.

> **Parallelogram Law:** Two concurrent forces $\mathbf{P}$ and $\mathbf{Q}$ acting on a particle may be replaced by a single resultant force $\mathbf{R}$, which corresponds to the diagonal of a parallelogram having sides equal to $\mathbf{P}$ and $\mathbf{Q}$ drawn from the common point.

The **Triangle Rule** is the direct tip-to-tail equivalent: translate vector $\mathbf{Q}$ parallel to itself until its tail meets the tip of $\mathbf{P}$. The closing vector from the tail of $\mathbf{P}$ to the tip of $\mathbf{Q}$ is the resultant $\mathbf{R}$.

```
                 C
                /|
            Q  / | 
              /  | Q sin θ
             /   |
     θ      /    |
    A------B-----D
       P     Q cos θ
    <------ P + Q cos θ ------>
```

### Full Geometric Derivation via the Pythagorean Theorem
Consider two vectors $\mathbf{P}$ and $\mathbf{Q}$ originating from point $O$ (labeled $A$ in our diagram) with an included angle $\theta$ between their lines of action.
1. Let $\vec{AB} = \mathbf{P}$ along the horizontal reference axis.
2. Let $\vec{BC} = \mathbf{Q}$ inclined at angle $\theta$ to the horizontal.
3. Drop a perpendicular from vertex $C$ to intersect the extended line $AB$ at point $D$.

From the right-angled triangle $\triangle BDC$:
$$
BD = Q \cos\theta
$$
$$
CD = Q \sin\theta
$$

Now examine the large right-angled triangle $\triangle ADC$:
- Base: $AD = AB + BD = P + Q \cos\theta$
- Height: $CD = Q \sin\theta$
- Hypotenuse: $AC = R$

Applying the Pythagorean Theorem to $\triangle ADC$:
$$
(AC)^2 = (AD)^2 + (CD)^2
$$
$$
R^2 = (P + Q \cos\theta)^2 + (Q \sin\theta)^2
$$

Expanding the algebraic terms:
$$
R^2 = P^2 + 2PQ\cos\theta + Q^2\cos^2\theta + Q^2\sin^2\theta
$$

Factoring $Q^2$ from the trigonometric terms:
$$
R^2 = P^2 + 2PQ\cos\theta + Q^2(\cos^2\theta + \sin^2\theta)
$$

Since $\cos^2\theta + \sin^2\theta = 1$, we obtain the general law of vector resultants:
$$
R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta}
$$

### Direction of the Resultant ($\alpha$)
Let $\alpha$ be the angle between the resultant $\mathbf{R}$ and the component vector $\mathbf{P}$. In right triangle $\triangle ADC$:
$$
\tan\alpha = \frac{\text{Opposite}}{\text{Adjacent}} = \frac{CD}{AD} = \frac{Q \sin\theta}{P + Q \cos\theta}
$$
$$
\alpha = \tan^{-1}\left( \frac{Q \sin\theta}{P + Q \cos\theta} \right)
$$

### Law of Sines Formulation
In any closed force triangle formed by $\mathbf{P}$, $\mathbf{Q}$, and $\mathbf{R}$, the internal angles opposite to the sides allow solving unknowns directly via the **Law of Sines**:
$$
\frac{P}{\sin\beta} = \frac{Q}{\sin\alpha} = \frac{R}{\sin(180^\circ - \theta)} = \frac{R}{\sin\theta}
$$

### Three Crucial Special Cases
1. **Collinear and Unidirectional ($\theta = 0^\circ$):**
   $$
   \cos 0^\circ = 1 \implies R = \sqrt{P^2 + Q^2 + 2PQ} = \sqrt{(P+Q)^2} = P + Q
   $$
   The forces add algebraically to maximum resultant.
2. **Collinear and Directly Opposing ($\theta = 180^\circ$):**
   $$
   \cos 180^\circ = -1 \implies R = \sqrt{P^2 + Q^2 - 2PQ} = \sqrt{(P-Q)^2} = |P - Q|
   $$
   The forces subtract algebraically to minimum resultant.
3. **Orthogonal Forces ($\theta = 90^\circ$):**
   $$
   \cos 90^\circ = 0 \implies R = \sqrt{P^2 + Q^2}, \quad \tan\alpha = \frac{Q}{P}
   $$
   Reduces immediately to the standard right-triangle Pythagorean relation.

---

## 7. Interactive Laboratory: Parallelogram Force Lab

Experiment with the vector summation principles derived above. Adjust the slider values for force magnitudes $P$ and $Q$ and the included angle $\theta$. Toggle between the **Parallelogram Law**, the **Triangle Rule**, and **Rectangular Components** to watch the resultant vector $\mathbf{R}$ and angle $\alpha$ compute dynamically in real time.

<ParallelogramForceLab />

---

## 8. Chapter Summary & Formula Blueprint

| Physical Quantity / Law | Mathematical Expression | Key Condition / Note |
| :--- | :--- | :--- |
| **Newton's First Law** | $\sum \mathbf{F} = \mathbf{0} \implies \mathbf{v} = \text{const.}$ | Holds in Inertial Reference Frames |
| **Newton's Second Law** | $\mathbf{F} = \frac{d\mathbf{p}}{dt} = m\mathbf{a}$ | Invariant mass $m$ |
| **Newton's Third Law** | $\mathbf{F}_{AB} = -\mathbf{F}_{BA}$ | Simultaneous, acts on two distinct bodies |
| **Resultant Magnitude** | $R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta}$ | Derived via $\triangle ADC$ Pythagorean proof |
| **Resultant Inclination** | $\tan\alpha = \frac{Q\sin\theta}{P + Q\cos\theta}$ | Measured relative to vector $\mathbf{P}$ |
| **Law of Sines** | $\frac{P}{\sin\beta} = \frac{Q}{\sin\alpha} = \frac{R}{\sin\theta}$ | Applied to closed force triangle |
