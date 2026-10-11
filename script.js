/**
 * ==============================================================================
 * AI QUIZ APPLICATION - POWERED BY GOOGLE GEMINI AI + LOCAL QUESTION BANK
 * ==============================================================================
 * 
 * SECURITY POLICY: Bring Your Own Key (BYOK)
 * - No developer API key is hardcoded or shared.
 * - Every user saves their own personal Gemini API key locally on their browser.
 * - Keys are never sent to any server or shared across users.
 * - Free API keys can be generated at: https://aistudio.google.com/app/apikey
 */

// LocalStorage key for storing the user's private API key strictly in their browser
const STORAGE_KEY_API = "GEMINI_QUIZ_USER_API_KEY";

/**
 * ==============================================================================
 * CHAPTER TOPIC BOXES CONFIGURATION
 * ==============================================================================
 */
const SUBJECT_TOPICS = {
  Physics: [
    {
      id: "thermodynamics",
      title: "Thermodynamics",
      desc: "Heat engines, Carnot cycle, entropy & the laws of thermodynamics.",
      badge: "10 Questions"
    },
    {
      id: "kinematics",
      title: "Kinematics & Dynamics",
      desc: "1D/2D motion, projectile motion, Newton's laws, friction & momentum.",
      badge: "10 Questions"
    },
    {
      id: "optics",
      title: "Optics & Waves",
      desc: "Snell's law, lens equations, wave interference & diffraction patterns.",
      badge: "10 Questions"
    },
    {
      id: "electromagnetism",
      title: "Electromagnetism",
      desc: "Coulomb's law, Gauss theorem, Faraday's induction & Lorentz force.",
      badge: "10 Questions"
    }
  ],
  Chemistry: [
    {
      id: "bonding",
      title: "Chemical Bonding",
      desc: "Ionic/covalent bonds, VSEPR shapes, hybridization & molecular orbitals.",
      badge: "10 Questions"
    },
    {
      id: "organic",
      title: "Organic Chemistry",
      desc: "Hydrocarbons, reaction mechanisms (SN1/SN2), isomerism & functional groups.",
      badge: "10 Questions"
    },
    {
      id: "atomic",
      title: "Atomic Structure",
      desc: "Bohr's model, quantum numbers, electron configuration & orbital shapes.",
      badge: "10 Questions"
    },
    {
      id: "equilibrium",
      title: "Equilibrium & Kinetics",
      desc: "Le Chatelier's principle, equilibrium constants, rate laws & pH calculations.",
      badge: "10 Questions"
    }
  ],
  Mathematics: [
    {
      id: "calculus",
      title: "Differential Calculus",
      desc: "Limits, continuity, derivative chain rules, tangents & extrema.",
      badge: "10 Questions"
    },
    {
      id: "matrices",
      title: "Matrices & Determinants",
      desc: "Matrix multiplication, inverse matrices, Cramer's rule & eigenvalues.",
      badge: "10 Questions"
    },
    {
      id: "probability",
      title: "Probability & Statistics",
      desc: "Conditional probability, Bayes' theorem, permutations & distributions.",
      badge: "10 Questions"
    },
    {
      id: "vectors",
      title: "Coordinate Geometry & Vectors",
      desc: "Lines, circles, conics, dot and cross vector products in 2D & 3D space.",
      badge: "10 Questions"
    }
  ]
};

/**
 * ==============================================================================
 * CURATED LOCAL QUESTION BANK (OFFLINE FALLBACK & INSTANT PRACTICE)
 * ==============================================================================
 */
const LOCAL_QUESTION_BANK = {
  Physics: {
    "Thermodynamics": [
      {
        id: 1,
        question: "Which law of thermodynamics states that the entropy of an isolated system always increases over time?",
        options: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
        correctAnswer: 2,
        explanation: "The Second Law of Thermodynamics dictates that entropy in any spontaneous process of an isolated system increases."
      },
      {
        id: 2,
        question: "In an isothermal expansion of an ideal gas, which of the following properties remains constant?",
        options: ["Pressure", "Volume", "Internal Energy", "Entropy"],
        correctAnswer: 2,
        explanation: "For an ideal gas, internal energy depends only on temperature. Since temperature is constant in an isothermal process, internal energy remains constant."
      },
      {
        id: 3,
        question: "What is the maximum theoretical efficiency formula for a Carnot heat engine operating between temperatures Th and Tc?",
        options: ["1 - (Tc / Th)", "1 - (Th / Tc)", "(Th - Tc) / Tc", "Th / Tc"],
        correctAnswer: 0,
        explanation: "The Carnot efficiency is given by η = 1 - (Tc / Th), where temperatures are expressed in Kelvin."
      },
      {
        id: 4,
        question: "Which thermodynamic process occurs without any heat exchange between the system and its surroundings?",
        options: ["Isochoric", "Isobaric", "Isothermal", "Adiabatic"],
        correctAnswer: 3,
        explanation: "An adiabatic process is characterized by Q = 0 (no heat transfer into or out of the system)."
      },
      {
        id: 5,
        question: "The Zeroth Law of Thermodynamics provides the fundamental basis for the definition of which physical quantity?",
        options: ["Work", "Temperature", "Internal Energy", "Entropy"],
        correctAnswer: 1,
        explanation: "The Zeroth Law states that if two systems are in thermal equilibrium with a third, they are in equilibrium with each other, defining temperature."
      },
      {
        id: 6,
        question: "In an isochoric process, the work done (W) by the gas is equal to:",
        options: ["P · ΔV", "nRT ln(V2/V1)", "Zero", "nCp ΔT"],
        correctAnswer: 2,
        explanation: "In an isochoric process, volume remains constant (ΔV = 0), so work done W = ∫P dV = 0."
      },
      {
        id: 7,
        question: "According to the First Law of Thermodynamics, ΔU = Q - W. In a cyclic process, what is ΔU?",
        options: ["Positive", "Negative", "Zero", "Equal to Q"],
        correctAnswer: 2,
        explanation: "Since internal energy U is a state function and the initial and final states of a cyclic process are identical, ΔU = 0."
      },
      {
        id: 8,
        question: "What happens to the temperature of a gas when it undergoes adiabatic compression?",
        options: ["Decreases", "Increases", "Remains constant", "Drops to absolute zero"],
        correctAnswer: 1,
        explanation: "Work is done on the gas (W < 0), and with Q = 0, ΔU = -W > 0, which raises the gas's internal energy and temperature."
      },
      {
        id: 9,
        question: "The Third Law of Thermodynamics states that the entropy of a pure crystalline substance approaches what value at 0 Kelvin?",
        options: ["Zero", "Infinity", "1 J/K", "Minus infinity"],
        correctAnswer: 0,
        explanation: "At absolute zero temperature (0 K), a perfect crystal achieves maximum order and its entropy approaches zero."
      },
      {
        id: 10,
        question: "Molar heat capacity at constant pressure (Cp) and at constant volume (Cv) for an ideal gas are related by Mayer's formula as:",
        options: ["Cp + Cv = R", "Cp - Cv = R", "Cp / Cv = R", "Cv - Cp = R"],
        correctAnswer: 1,
        explanation: "Mayer's relation for an ideal gas is Cp - Cv = R, where R is the universal gas constant."
      }
    ],
    "Kinematics & Dynamics": [
      {
        id: 1,
        question: "A ball is launched horizontally from a cliff of height h with velocity v. What determines its time of flight?",
        options: ["Only the height h and gravity g", "The horizontal velocity v", "The mass of the ball", "Both v and h"],
        correctAnswer: 0,
        explanation: "Vertical motion is independent of horizontal velocity. Time of flight depends strictly on t = √(2h/g)."
      },
      {
        id: 2,
        question: "Newton's Second Law of Motion in its most general form is expressed as:",
        options: ["F = ma", "F = dp/dt", "F = mv", "F = 1/2 mv²"],
        correctAnswer: 1,
        explanation: "Force is defined as the time rate of change of linear momentum (F = dp/dt), which simplifies to F = ma only when mass is constant."
      },
      {
        id: 3,
        question: "What is the angle of projection that yields maximum horizontal range for a projectile on level ground (ignoring air resistance)?",
        options: ["30°", "45°", "60°", "90°"],
        correctAnswer: 1,
        explanation: "The range formula R = (v² sin 2θ) / g is maximized when sin 2θ = 1, which occurs at θ = 45°."
      },
      {
        id: 4,
        question: "Which of the following statements about static friction vs kinetic friction is always true?",
        options: ["Kinetic friction is greater than maximum static friction", "Maximum static friction is greater than or equal to kinetic friction", "Static friction is independent of the normal force", "Kinetic friction depends on contact surface area"],
        correctAnswer: 1,
        explanation: "The coefficient of static friction μs is generally greater than the coefficient of kinetic friction μk."
      },
      {
        id: 5,
        question: "In an elastic collision between two objects, which of the following quantities are conserved?",
        options: ["Only linear momentum", "Only kinetic energy", "Both linear momentum and kinetic energy", "Only velocity"],
        correctAnswer: 2,
        explanation: "By definition, both total linear momentum and total kinetic energy are conserved in an ideal elastic collision."
      },
      {
        id: 6,
        question: "What is the work done by centripetal force on an object moving along a uniform circular path?",
        options: ["mv² / r", "Zero", "2πr F", "Positive and constant"],
        correctAnswer: 1,
        explanation: "Centripetal force acts perpendicular to instantaneous displacement (cos 90° = 0), so work done is zero."
      },
      {
        id: 7,
        question: "An object is dropped from rest. What distance does it fall in the third second of its free fall (take g = 10 m/s²)?",
        options: ["15 m", "25 m", "45 m", "30 m"],
        correctAnswer: 1,
        explanation: "Using Sn = u + 1/2 g(2n - 1): S3 = 0 + 5(2·3 - 1) = 5(5) = 25 m."
      },
      {
        id: 8,
        question: "The area under an acceleration-time graph represents:",
        options: ["Total displacement", "Change in velocity", "Instantaneous position", "Average speed"],
        correctAnswer: 1,
        explanation: "Integrating acceleration over time (∫a dt) gives the change in velocity (Δv)."
      },
      {
        id: 9,
        question: "When a car takes a turn on an unbanked circular road of radius r with speed v, what provides the necessary centripetal force?",
        options: ["Normal reaction", "Gravitational force", "Static friction between tires and road", "Air drag"],
        correctAnswer: 2,
        explanation: "On a flat road, static friction between the tires and road surface prevents skidding and provides centripetal acceleration."
      },
      {
        id: 10,
        question: "A rocket propels itself forward by expelling exhaust gases backward. This is a direct consequence of:",
        options: ["Conservation of mass", "Conservation of linear momentum", "Newton's First Law", "Bernoulli's principle"],
        correctAnswer: 1,
        explanation: "Rocket propulsion is based on the conservation of linear momentum (and Newton's Third Law: action and reaction)."
      }
    ],
    "Optics & Waves": [
      {
        id: 1,
        question: "Snell's Law of refraction is mathematically expressed as:",
        options: ["n1 / sin θ1 = n2 / sin θ2", "n1 sin θ1 = n2 sin θ2", "n1 cos θ1 = n2 cos θ2", "sin θ1 · sin θ2 = n1 · n2"],
        correctAnswer: 1,
        explanation: "Snell's Law states that the product of the refractive index and the sine of the angle of incidence is constant: n1 sin θ1 = n2 sin θ2."
      },
      {
        id: 2,
        question: "Total internal reflection can only occur when light travels from:",
        options: ["A rarer medium to a denser medium", "A denser medium to a rarer medium at an angle greater than critical angle", "A vacuum to water", "Any medium at 45 degrees"],
        correctAnswer: 1,
        explanation: "TIR requires light to travel from an optically denser to a rarer medium with an incidence angle exceeding the critical angle."
      },
      {
        id: 3,
        question: "In Young's Double Slit Experiment, if the distance between the slits is halved and screen distance is doubled, the fringe width will:",
        options: ["Remain unchanged", "Double", "Quadruple", "Be halved"],
        correctAnswer: 2,
        explanation: "Fringe width β = λD / d. Halving d and doubling D gives β' = λ(2D) / (d/2) = 4 β."
      },
      {
        id: 4,
        question: "Which optical phenomenon proves the transverse wave nature of light?",
        options: ["Diffraction", "Interference", "Polarization", "Refraction"],
        correctAnswer: 2,
        explanation: "Only transverse waves can be polarized; longitudinal waves (like sound) cannot undergo polarization."
      },
      {
        id: 5,
        question: "A convex lens of focal length 20 cm forms a real, inverted image of the same size as the object. Where is the object located?",
        options: ["At 20 cm", "At 40 cm", "At 10 cm", "At infinity"],
        correctAnswer: 1,
        explanation: "A convex lens produces an inverted image of the same size when the object is located at 2F (2 × 20 cm = 40 cm)."
      }
    ],
    "Electromagnetism": [
      {
        id: 1,
        question: "Gauss's Law states that the total electric flux through any closed surface is proportional to:",
        options: ["The total volume enclosed", "The net electric charge enclosed", "The square of the electric field", "The surface area"],
        correctAnswer: 1,
        explanation: "Gauss's Law states ΦE = Q_enclosed / ε0, directly proportional to the net charge enclosed."
      },
      {
        id: 2,
        question: "Lenz's Law, which determines the direction of an induced EMF, is a direct manifestation of:",
        options: ["Conservation of charge", "Conservation of momentum", "Conservation of energy", "Ampere's circuital law"],
        correctAnswer: 2,
        explanation: "Lenz's Law ensures that work must be done against the induced magnetic field, conserving energy."
      },
      {
        id: 3,
        question: "A charged particle q enters a uniform magnetic field B with velocity v perpendicular to B. Its trajectory is:",
        options: ["A straight line", "A parabola", "A circle", "A hyperbola"],
        correctAnswer: 2,
        explanation: "The magnetic Lorentz force F = q(v × B) acts perpendicularly to velocity, causing uniform circular motion."
      },
      {
        id: 4,
        question: "What is the SI unit of magnetic flux?",
        options: ["Tesla", "Weber", "Henry", "Gauss"],
        correctAnswer: 1,
        explanation: "The SI unit of magnetic flux is the Weber (Wb), where 1 Wb = 1 T · m²."
      },
      {
        id: 5,
        question: "The capacitance of a parallel plate capacitor can be increased by:",
        options: ["Increasing plate separation", "Decreasing plate area", "Introducing a dielectric material between plates", "Decreasing the voltage"],
        correctAnswer: 2,
        explanation: "Capacitance C = εr ε0 A / d. Adding a dielectric with constant εr > 1 increases capacitance."
      }
    ]
  },
  Chemistry: {
    "Chemical Bonding": [
      {
        id: 1,
        question: "What is the geometry of a methane (CH4) molecule according to VSEPR theory?",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
        correctAnswer: 2,
        explanation: "Carbon in CH4 has 4 bond pairs and 0 lone pairs (sp3 hybridization), producing a regular tetrahedral geometry with 109.5° bond angles."
      },
      {
        id: 2,
        question: "Which of the following molecules has a dipole moment equal to zero?",
        options: ["H2O", "NH3", "BF3", "SO2"],
        correctAnswer: 2,
        explanation: "BF3 has a symmetrical trigonal planar geometry where the three individual B-F bond dipoles cancel out completely (μ = 0)."
      },
      {
        id: 3,
        question: "What is the hybridization of the central sulfur atom in SF6?",
        options: ["sp3", "sp3d", "sp3d2", "dsp2"],
        correctAnswer: 2,
        explanation: "Sulfur in SF6 forms 6 sigma bonds with no lone pairs, requiring 6 hybrid orbitals: sp3d2."
      },
      {
        id: 4,
        question: "Which type of intermolecular force is responsible for the abnormally high boiling point of water?",
        options: ["London dispersion forces", "Dipole-induced dipole forces", "Hydrogen bonding", "Ionic interactions"],
        correctAnswer: 2,
        explanation: "Extensive intermolecular hydrogen bonding between electronegative oxygen and hydrogen atoms gives water its high boiling point."
      },
      {
        id: 5,
        question: "According to Molecular Orbital Theory, what is the bond order of oxygen molecule (O2)?",
        options: ["1", "2", "2.5", "3"],
        correctAnswer: 1,
        explanation: "Bond order = 1/2 (Nb - Na) = 1/2 (10 - 6) = 2, representing a double bond between oxygen atoms."
      }
    ],
    "Organic Chemistry": [
      {
        id: 1,
        question: "Which reaction mechanism is favored by tertiary alkyl halides in polar protic solvents?",
        options: ["SN1", "SN2", "E2 only", "Electrophilic addition"],
        correctAnswer: 0,
        explanation: "Tertiary carbocations are stabilized by hyperconjugation and inductive effects, favoring the two-step SN1 pathway in protic solvents."
      },
      {
        id: 2,
        question: "Markovnikov's rule predicts that in the addition of HX to an asymmetrical alkene, hydrogen attaches to:",
        options: ["The carbon with fewer hydrogen atoms", "The carbon with more hydrogen atoms", "Either carbon equally", "The halogen atom"],
        correctAnswer: 1,
        explanation: "Hydrogen adds to the double-bonded carbon bearing the greater number of hydrogen atoms to form the more stable carbocation."
      },
      {
        id: 3,
        question: "Which functional group is present in aldehydes?",
        options: ["-OH", "-COOH", "-CHO", "-NH2"],
        correctAnswer: 2,
        explanation: "Aldehydes contain the terminal formyl group (-CHO), where a carbonyl carbon is bonded to at least one hydrogen."
      },
      {
        id: 4,
        question: "Molecules that are non-superimposable mirror images of each other are called:",
        options: ["Diastereomers", "Enantiomers", "Constitutional isomers", "Conformers"],
        correctAnswer: 1,
        explanation: "Enantiomers are chiral stereoisomers that are non-superimposable mirror images of one another."
      },
      {
        id: 5,
        question: "Benzene undergoes which primary type of reaction due to its aromatic stability?",
        options: ["Electrophilic addition", "Electrophilic aromatic substitution", "Nucleophilic addition", "Free radical polymerization"],
        correctAnswer: 1,
        explanation: "Benzene preserves its stable 6-pi aromatic electron delocalization by undergoing substitution rather than addition."
      }
    ],
    "Atomic Structure": [
      {
        id: 1,
        question: "Which quantum number specifies the orientation of an orbital in 3D space?",
        options: ["Principal (n)", "Azimuthal (l)", "Magnetic (ml)", "Spin (ms)"],
        correctAnswer: 2,
        explanation: "The magnetic quantum number (ml) designates the spatial orientation of the orbital relative to an external field."
      },
      {
        id: 2,
        question: "Heisenberg's Uncertainty Principle states that it is impossible to simultaneously measure precisely:",
        options: ["Mass and charge", "Position and momentum", "Energy and charge", "Spin and magnetic moment"],
        correctAnswer: 1,
        explanation: "Δx · Δp ≥ h / (4π): The position and momentum of a subatomic particle cannot be simultaneously determined with arbitrary accuracy."
      },
      {
        id: 3,
        question: "What is the maximum number of electrons that can occupy a subshell with azimuthal quantum number l = 2 (d subshell)?",
        options: ["2", "6", "10", "14"],
        correctAnswer: 2,
        explanation: "A d subshell has 2l + 1 = 5 orbitals, each holding 2 electrons, for a total capacity of 2(2l + 1) = 10 electrons."
      },
      {
        id: 4,
        question: "Which rule states that no two electrons in an atom can have the same set of all four quantum numbers?",
        options: ["Hund's Rule", "Aufbau Principle", "Pauli Exclusion Principle", "Bohr's Postulate"],
        correctAnswer: 2,
        explanation: "The Pauli Exclusion Principle dictates that an orbital can hold at most two electrons with opposite spins."
      },
      {
        id: 5,
        question: "According to de Broglie's equation, wavelength λ is related to momentum p by:",
        options: ["λ = hp", "λ = h / p", "λ = p / h", "λ = hc / p"],
        correctAnswer: 1,
        explanation: "De Broglie wavelength is given by λ = h / p = h / (mv)."
      }
    ],
    "Equilibrium & Kinetics": [
      {
        id: 1,
        question: "According to Le Chatelier's Principle, increasing pressure on a gaseous equilibrium system shifts it toward:",
        options: ["The side with more moles of gas", "The side with fewer moles of gas", "No shift occurs", "The endothermic direction"],
        correctAnswer: 1,
        explanation: "Higher pressure favors the side with fewer gas molecules, reducing total system volume and relieving the stress."
      },
      {
        id: 2,
        question: "The rate of a zero-order reaction is:",
        options: ["Directly proportional to reactant concentration", "Inversely proportional to concentration", "Independent of reactant concentration", "Proportional to temperature squared"],
        correctAnswer: 2,
        explanation: "For a zero-order reaction, Rate = k[A]^0 = k, which is constant and independent of reactant concentration."
      },
      {
        id: 3,
        question: "What effect does a catalyst have on the position of chemical equilibrium?",
        options: ["Shifts equilibrium to the products", "Shifts equilibrium to the reactants", "Increases equilibrium constant Kc", "Does not alter the equilibrium position"],
        correctAnswer: 3,
        explanation: "A catalyst speeds up both forward and reverse reaction rates equally by lowering activation energy, reaching equilibrium faster without shifting it."
      },
      {
        id: 4,
        question: "What is the pH of a 0.001 M HCl solution at 25°C?",
        options: ["1", "2", "3", "11"],
        correctAnswer: 2,
        explanation: "HCl is a strong monoprotic acid: [H+] = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3."
      },
      {
        id: 5,
        question: "The Arrhenius equation describes the temperature dependence of rate constant k as:",
        options: ["k = A e^(-Ea / RT)", "k = A e^(Ea / RT)", "k = Ea / (RT)", "k = ln(A) - Ea/RT"],
        correctAnswer: 0,
        explanation: "The Arrhenius relation is k = A e^(-Ea/RT), where Ea is activation energy and T is absolute temperature."
      }
    ]
  },
  Mathematics: {
    "Differential Calculus": [
      {
        id: 1,
        question: "What is the derivative of f(x) = ln(sin x) with respect to x?",
        options: ["cos x", "tan x", "cot x", "-cot x"],
        correctAnswer: 2,
        explanation: "Using the chain rule: d/dx [ln(sin x)] = (1 / sin x) · d/dx [sin x] = cos x / sin x = cot x."
      },
      {
        id: 2,
        question: "What is the value of the limit lim (x → 0) [sin(5x) / x]?",
        options: ["0", "1", "5", "Does not exist"],
        correctAnswer: 2,
        explanation: "lim (x → 0) [sin(kx) / x] = k. Here k = 5, so the limit evaluates to 5."
      },
      {
        id: 3,
        question: "If f'(c) = 0 and f''(c) < 0, what does x = c represent for the function f(x)?",
        options: ["Local Minimum", "Local Maximum", "Inflection Point", "Discontinuity"],
        correctAnswer: 1,
        explanation: "By the second derivative test, a negative second derivative indicates concave downward behavior, meaning x = c is a local maximum."
      },
      {
        id: 4,
        question: "What is the slope of the normal to the curve y = x² at the point (2, 4)?",
        options: ["4", "-4", "1/4", "-1/4"],
        correctAnswer: 3,
        explanation: "y' = 2x. At x = 2, tangent slope m = 4. The normal slope is m_norm = -1/m = -1/4."
      },
      {
        id: 5,
        question: "According to Rolle's Theorem, if f(x) is continuous on [a, b], differentiable on (a, b), and f(a) = f(b), there exists at least one c in (a, b) where:",
        options: ["f(c) = 0", "f'(c) = 0", "f''(c) = 0", "f'(c) = 1"],
        correctAnswer: 1,
        explanation: "Rolle's Theorem guarantees at least one point c in (a, b) where the tangent is horizontal: f'(c) = 0."
      }
    ],
    "Matrices & Determinants": [
      {
        id: 1,
        question: "A square matrix A is invertible if and only if its determinant satisfies:",
        options: ["det(A) = 0", "det(A) ≠ 0", "det(A) > 1", "det(A) is negative"],
        correctAnswer: 1,
        explanation: "A matrix is non-singular (invertible) if and only if det(A) ≠ 0."
      },
      {
        id: 2,
        question: "For two square matrices A and B of the same size, which property of determinants is always true?",
        options: ["det(A + B) = det(A) + det(B)", "det(AB) = det(A) · det(B)", "det(AB) = det(BA) = 0", "det(kA) = k det(A)"],
        correctAnswer: 1,
        explanation: "The determinant of a matrix product equals the product of their determinants: det(AB) = det(A) · det(B)."
      },
      {
        id: 3,
        question: "What is the transpose of a symmetric matrix A?",
        options: ["-A", "A", "A^-1", "Identity matrix"],
        correctAnswer: 1,
        explanation: "By definition, a matrix is symmetric if and only if A^T = A."
      },
      {
        id: 4,
        question: "If matrix A is of order 3×3 and det(A) = 4, what is det(2A)?",
        options: ["8", "16", "32", "64"],
        correctAnswer: 2,
        explanation: "For an n×n matrix, det(kA) = k^n · det(A). Here n = 3, so det(2A) = 2^3 · 4 = 8 · 4 = 32."
      },
      {
        id: 5,
        question: "The sum of the eigenvalues of any square matrix A is always equal to:",
        options: ["det(A)", "Trace of A (sum of diagonal elements)", "Rank of A", "0"],
        correctAnswer: 1,
        explanation: "The sum of eigenvalues equals the trace of the matrix, while their product equals the determinant."
      }
    ],
    "Probability & Statistics": [
      {
        id: 1,
        question: "If events A and B are independent, what is P(A ∩ B)?",
        options: ["P(A) + P(B)", "P(A) · P(B)", "P(A|B)", "P(A) / P(B)"],
        correctAnswer: 1,
        explanation: "By definition, two events are statistically independent if and only if P(A ∩ B) = P(A) · P(B)."
      },
      {
        id: 2,
        question: "Two fair dice are rolled. What is the probability that the sum of the numbers is 7?",
        options: ["1/6", "1/12", "5/36", "7/36"],
        correctAnswer: 0,
        explanation: "Pairs summing to 7 are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 outcomes out of 36 = 6/36 = 1/6."
      },
      {
        id: 3,
        question: "Bayes' Theorem is primarily used for calculating:",
        options: ["Prior probability", "Posterior conditional probability", "Standard deviation", "Combinations"],
        correctAnswer: 1,
        explanation: "Bayes' theorem updates probability estimates given evidence: P(A|B) = P(B|A)P(A) / P(B)."
      },
      {
        id: 4,
        question: "What is the relationship between variance (Var) and standard deviation (σ)?",
        options: ["Var = √σ", "Var = σ²", "Var = 2σ", "Var = 1 / σ"],
        correctAnswer: 1,
        explanation: "Variance is the square of standard deviation: Var(X) = σ²."
      },
      {
        id: 5,
        question: "A coin is tossed 3 times. What is the probability of getting exactly two heads?",
        options: ["1/8", "3/8", "1/2", "5/8"],
        correctAnswer: 1,
        explanation: "Using binomial probability: C(3, 2) · (1/2)^2 · (1/2)^1 = 3 · 1/8 = 3/8."
      }
    ],
    "Coordinate Geometry & Vectors": [
      {
        id: 1,
        question: "Two non-zero vectors a and b are perpendicular (orthogonal) if and only if:",
        options: ["a × b = 0", "a · b = 0", "|a| = |b|", "a + b = 0"],
        correctAnswer: 1,
        explanation: "Since a · b = |a||b| cos θ, cos 90° = 0 implies the dot product is zero."
      },
      {
        id: 2,
        question: "What is the distance of the point (3, 4) from the line 3x + 4y - 10 = 0?",
        options: ["1", "2", "3", "5"],
        correctAnswer: 2,
        explanation: "Distance d = |3(3) + 4(4) - 10| / √(3² + 4²) = |9 + 16 - 10| / 5 = 15 / 5 = 3."
      },
      {
        id: 3,
        question: "The vector cross product a × b produces a vector that is:",
        options: ["Parallel to both a and b", "Perpendicular to both a and b", "In the same plane as a and b", "A scalar quantity"],
        correctAnswer: 1,
        explanation: "The cross product vector is orthogonal to the plane containing vectors a and b."
      },
      {
        id: 4,
        question: "What is the equation of a circle centered at the origin with radius r?",
        options: ["x² - y² = r²", "x² + y² = r²", "xy = r²", "x + y = r"],
        correctAnswer: 1,
        explanation: "The standard equation of a circle centered at (0, 0) is x² + y² = r²."
      },
      {
        id: 5,
        question: "What is the magnitude of the unit vector in the direction of vector v = 3i + 4j?",
        options: ["5", "1", "7", "25"],
        correctAnswer: 1,
        explanation: "By definition, the magnitude of any unit vector is always exactly 1."
      }
    ]
  }
};

// Global State
let currentQuizData = null;
let userAnswers = {};
let isQuizSubmitted = false;
let pendingParams = null; // Stored params for modal actions

// DOM Elements
const formCard = document.getElementById("formCard");
const quizForm = document.getElementById("quizForm");
const topicBoxesGrid = document.getElementById("topicBoxesGrid");
const customTopicWrapper = document.getElementById("customTopicWrapper");
const toggleCustomTopicBtn = document.getElementById("toggleCustomTopicBtn");
const chapterInput = document.getElementById("chapterInput");
const chapterError = document.getElementById("chapterError");

// API Key Elements
const apiKeyInput = document.getElementById("apiKeyInput");
const saveKeyBtn = document.getElementById("saveKeyBtn");
const clearKeyBtn = document.getElementById("clearKeyBtn");
const toggleKeyVisibilityBtn = document.getElementById("toggleKeyVisibilityBtn");
const apiKeyStatusBadge = document.getElementById("apiKeyStatusBadge");
const apiKeyNotice = document.getElementById("apiKeyNotice");
const toggleGuideBtn = document.getElementById("toggleGuideBtn");
const studentGuideBox = document.getElementById("studentGuideBox");

// Error Alert Elements
const errorAlert = document.getElementById("errorAlert");
const errorMessageText = document.getElementById("errorMessageText");
const closeErrorBtn = document.getElementById("closeErrorBtn");

// Button & Loader Elements
const generateBtn = document.getElementById("generateBtn");
const btnText = generateBtn.querySelector(".btn-text");
const btnLoader = generateBtn.querySelector(".btn-loader");
const loaderStatusText = document.getElementById("loaderStatusText");
const useLocalDirectBtn = document.getElementById("useLocalDirectBtn");

// Modal Elements
const highDemandModal = document.getElementById("highDemandModal");
const highDemandModalDesc = document.getElementById("highDemandModalDesc");
const modalTopicName = document.getElementById("modalTopicName");
const modalAcceptLocalBtn = document.getElementById("modalAcceptLocalBtn");
const modalRetryAiBtn = document.getElementById("modalRetryAiBtn");
const modalDismissBtn = document.getElementById("modalDismissBtn");

// Quiz Display Elements
const quizDisplaySection = document.getElementById("quizDisplaySection");
const quizSubjectTag = document.getElementById("quizSubjectTag");
const quizDifficultyTag = document.getElementById("quizDifficultyTag");
const quizSourceTag = document.getElementById("quizSourceTag");
const quizChapterTitle = document.getElementById("quizChapterTitle");
const newQuizTopBtn = document.getElementById("newQuizTopBtn");
const quizProgressBar = document.getElementById("quizProgressBar");
const progressCountText = document.getElementById("progressCountText");
const progressPercentText = document.getElementById("progressPercentText");
const questionsContainer = document.getElementById("questionsContainer");
const submitQuizBtn = document.getElementById("submitQuizBtn");

// Results Elements
const quizResultsCard = document.getElementById("quizResultsCard");
const resultsBadge = document.getElementById("resultsBadge");
const resultTitle = document.getElementById("resultTitle");
const resultQuote = document.getElementById("resultQuote");
const scoreProgressText = document.getElementById("scoreProgressText");
const scoreProgressBarFill = document.getElementById("scoreProgressBarFill");
const statCorrectNum = document.getElementById("statCorrectNum");
const statIncorrectNum = document.getElementById("statIncorrectNum");
const statAccuracyNum = document.getElementById("statAccuracyNum");
const topicRecommendationsContainer = document.getElementById("topicRecommendationsContainer");
const retakeQuizBtn = document.getElementById("retakeQuizBtn");
const createAnotherQuizBtn = document.getElementById("createAnotherQuizBtn");

/**
 * ==============================================================================
 * API KEY MANAGEMENT (INDIVIDUAL USER STORAGE - 100% PRIVATE)
 * ==============================================================================
 */

/**
 * Returns the individual user's key stored strictly in their own browser
 */
function getActiveApiKey() {
  const stored = localStorage.getItem(STORAGE_KEY_API);
  return stored ? stored.trim() : "";
}

function updateApiKeyUI() {
  const activeKey = getActiveApiKey();
  if (activeKey) {
    apiKeyInput.value = activeKey;
    apiKeyStatusBadge.textContent = "Personal Key Saved";
    apiKeyStatusBadge.className = "status-badge status-configured";
  } else {
    apiKeyInput.value = "";
    apiKeyStatusBadge.textContent = "No Key Entered";
    apiKeyStatusBadge.className = "status-badge status-missing";
  }
}

if (toggleGuideBtn && studentGuideBox) {
  toggleGuideBtn.addEventListener("click", () => {
    const isHidden = studentGuideBox.classList.toggle("hidden");
    toggleGuideBtn.textContent = isHidden ? "Setup Guide" : "Close Guide";
  });
}

saveKeyBtn.addEventListener("click", () => {
  const val = apiKeyInput.value.trim();
  if (!val) {
    localStorage.removeItem(STORAGE_KEY_API);
    apiKeyNotice.textContent = "Key input is empty. Please paste your Gemini API key.";
  } else {
    localStorage.setItem(STORAGE_KEY_API, val);
    apiKeyNotice.textContent = "API key saved in browser storage.";
  }
  apiKeyNotice.classList.remove("hidden");
  setTimeout(() => apiKeyNotice.classList.add("hidden"), 3000);
  updateApiKeyUI();
  hideError();
});

if (clearKeyBtn) {
  clearKeyBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY_API);
    apiKeyInput.value = "";
    apiKeyNotice.textContent = "Your API key has been removed from this browser.";
    apiKeyNotice.classList.remove("hidden");
    setTimeout(() => apiKeyNotice.classList.add("hidden"), 3000);
    updateApiKeyUI();
  });
}

toggleKeyVisibilityBtn.addEventListener("click", () => {
  if (apiKeyInput.type === "password") {
    apiKeyInput.type = "text";
    toggleKeyVisibilityBtn.setAttribute("aria-label", "Hide API key");
    toggleKeyVisibilityBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
        <line x1="2" y1="2" x2="22" y2="22"/>
      </svg>`;
  } else {
    apiKeyInput.type = "password";
    toggleKeyVisibilityBtn.setAttribute("aria-label", "Show API key");
    toggleKeyVisibilityBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>`;
  }
});

/**
 * ==============================================================================
 * TOPIC BOXES & CHAPTER DYNAMICS
 * ==============================================================================
 */

function getSelectedSubject() {
  const selectedRadio = document.querySelector('input[name="subject"]:checked');
  return selectedRadio ? selectedRadio.value : "Physics";
}

/**
 * Renders topic boxes for the given subject
 */
function renderTopicBoxes(subject) {
  const topics = SUBJECT_TOPICS[subject] || [];
  topicBoxesGrid.innerHTML = "";

  topics.forEach((topic, idx) => {
    const box = document.createElement("div");
    box.className = "topic-box";
    box.dataset.topicTitle = topic.title;

    // Default select first topic box
    if (idx === 0 && !chapterInput.value.trim()) {
      box.classList.add("active");
      chapterInput.value = topic.title;
    } else if (chapterInput.value.trim().toLowerCase() === topic.title.toLowerCase()) {
      box.classList.add("active");
    }

    box.innerHTML = `
      <div class="topic-box-header">
        <span class="topic-box-title">${topic.title}</span>
        <span class="topic-badge">${topic.badge}</span>
      </div>
      <p class="topic-box-desc">${topic.desc}</p>
    `;

    box.addEventListener("click", () => {
      // Set active styling
      document.querySelectorAll(".topic-box").forEach((b) => b.classList.remove("active"));
      box.classList.add("active");
      chapterInput.value = topic.title;
      clearFormError();
    });

    topicBoxesGrid.appendChild(box);
  });
}

// Toggle custom chapter text input
toggleCustomTopicBtn.addEventListener("click", () => {
  customTopicWrapper.classList.toggle("hidden");
  if (!customTopicWrapper.classList.contains("hidden")) {
    chapterInput.focus();
    toggleCustomTopicBtn.textContent = "- Close Custom";
  } else {
    toggleCustomTopicBtn.textContent = "+ Custom Chapter";
  }
});

chapterInput.addEventListener("input", (e) => {
  clearFormError();
  const val = e.target.value.trim().toLowerCase();
  document.querySelectorAll(".topic-box").forEach((box) => {
    if (box.dataset.topicTitle.toLowerCase() === val) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
});

const subjectRadios = document.querySelectorAll('input[name="subject"]');
subjectRadios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    chapterInput.value = "";
    renderTopicBoxes(e.target.value);
    clearFormError();
  });
});

function clearFormError() {
  chapterInput.classList.remove("invalid");
  chapterError.classList.remove("visible");
}

function showFormError(msg) {
  chapterInput.classList.add("invalid");
  chapterError.textContent = msg || "Please select a chapter topic box.";
  chapterError.classList.add("visible");
  chapterError.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showError(msg) {
  errorMessageText.textContent = msg;
  errorAlert.classList.remove("hidden");
  errorAlert.scrollIntoView({ behavior: "smooth", block: "start" });
}

function hideError() {
  errorAlert.classList.add("hidden");
}

closeErrorBtn.addEventListener("click", hideError);

/**
 * ==============================================================================
 * HIGH DEMAND / OFFLINE MODAL CONTROLS
 * ==============================================================================
 */

function showHighDemandModal(subject, chapter, difficulty, count, reason) {
  pendingParams = { subject, chapter, difficulty, count };
  modalTopicName.textContent = `${subject}: ${chapter}`;
  if (reason) {
    highDemandModalDesc.textContent = reason;
  } else {
    highDemandModalDesc.textContent = "The Gemini AI service is currently facing high traffic or quota limits. Would you like to use our curated local question bank for this chapter instead?";
  }
  highDemandModal.classList.remove("hidden");
}

function hideHighDemandModal() {
  highDemandModal.classList.add("hidden");
  pendingParams = null;
}

modalDismissBtn.addEventListener("click", hideHighDemandModal);

modalAcceptLocalBtn.addEventListener("click", () => {
  if (pendingParams) {
    const { subject, chapter, difficulty, count } = pendingParams;
    hideHighDemandModal();
    loadLocalQuiz(subject, chapter, difficulty, count);
  }
});

modalRetryAiBtn.addEventListener("click", () => {
  if (pendingParams) {
    const { subject, chapter, difficulty, count } = pendingParams;
    hideHighDemandModal();
    executeAiGeneration(subject, chapter, difficulty, count);
  }
});

/**
 * ==============================================================================
 * LOCAL QUESTION GENERATOR / FALLBACK LOADER
 * ==============================================================================
 */

function loadLocalQuiz(subject, chapter, difficulty, count) {
  const subjectBank = LOCAL_QUESTION_BANK[subject] || {};
  let questions = subjectBank[chapter];

  // If exact chapter match not found, take the first available chapter of that subject
  if (!questions || questions.length === 0) {
    const availableChapters = Object.keys(subjectBank);
    if (availableChapters.length > 0) {
      questions = subjectBank[availableChapters[0]];
      chapter = availableChapters[0];
    } else {
      questions = [];
    }
  }

  if (!questions || questions.length === 0) {
    showError("No local questions available for this combination. Please try another subject.");
    return;
  }

  // Shuffle and slice to match requested count
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  let selectedQuestions = [];

  if (count <= shuffled.length) {
    selectedQuestions = shuffled.slice(0, count);
  } else {
    // If user requested 20 but bank has 10, duplicate and re-index for full practice
    selectedQuestions = [...shuffled];
    while (selectedQuestions.length < count) {
      const clone = { ...shuffled[selectedQuestions.length % shuffled.length] };
      selectedQuestions.push(clone);
    }
  }

  // Format with consistent IDs
  const formattedQuestions = selectedQuestions.map((q, idx) => ({
    ...q,
    id: idx + 1
  }));

  const localPayload = {
    subject,
    chapter,
    difficulty,
    source: "local",
    questions: formattedQuestions
  };

  displayQuiz(localPayload);
}

// Direct button to use local questions without calling API
useLocalDirectBtn.addEventListener("click", () => {
  const chapterVal = chapterInput.value.trim();
  if (!chapterVal) {
    showFormError("Please select a topic box above first.");
    return;
  }

  const formData = new FormData(quizForm);
  const subject = formData.get("subject") || "Physics";
  const difficulty = formData.get("difficulty") || "Medium";
  const count = parseInt(formData.get("questionCount") || "10", 10);

  loadLocalQuiz(subject, chapterVal, difficulty, count);
});

/**
 * ==============================================================================
 * GEMINI API INTEGRATION & HIGH DEMAND DETECTION
 * ==============================================================================
 */

function buildGeminiPrompt(subject, chapter, difficulty, count) {
  return `You are an expert exam creator for ${subject}.
Create a high-quality multiple choice quiz based strictly on the following parameters:
- Subject: ${subject}
- Chapter/Topic: ${chapter}
- Difficulty Level: ${difficulty}
- Total Questions: ${count}

REQUIREMENTS:
1. Provide exactly ${count} multiple choice questions.
2. Each question MUST have exactly 4 plausible options.
3. "correctAnswer" MUST be the 0-based index (0, 1, 2, or 3) representing which option in "options" is correct.
4. "explanation" MUST be concise (1 short sentence explaining why the answer is correct). Keep it brief for fast generation.
5. Return ONLY a valid JSON object matching this schema, without any markdown formatting or extra text:

{
  "subject": "${subject}",
  "chapter": "${chapter}",
  "difficulty": "${difficulty}",
  "questions": [
    {
      "id": 1,
      "question": "What is the question text here?",
      "options": [
        "First option",
        "Second option",
        "Third option",
        "Fourth option"
      ],
      "correctAnswer": 0,
      "explanation": "Brief 1-sentence explanation."
    }
  ]
}`;
}

async function callGeminiApi(apiKey, promptText) {
  // Fast current models
  const modelCandidates = [
    "gemini-flash-latest",
    "gemini-flash-lite-latest"
  ];

  let lastError = null;

  for (const model of modelCandidates) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 14000); // 14s timeout

    try {
      loaderStatusText.textContent = `Connecting with Gemini (${model})...`;

      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

      const requestBody = {
        contents: [{ parts: [{ text: promptText }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.7
        }
      };

      // Clean request without custom headers avoids extra CORS preflight delays
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        let errorData = {};
        try { errorData = await response.json(); } catch { /* ignore */ }
        const message = errorData?.error?.message || response.statusText;

        // Check for High Demand / Quota / Throttling (429 or 503)
        if (
          response.status === 429 || 
          response.status === 503 || 
          (message && (
            message.toLowerCase().includes("quota") ||
            message.toLowerCase().includes("rate limit") ||
            message.toLowerCase().includes("resource has been exhausted") ||
            message.toLowerCase().includes("overloaded") ||
            message.toLowerCase().includes("too many requests")
          ))
        ) {
          const highDemandErr = new Error("HIGH_DEMAND: " + message);
          highDemandErr.isHighDemand = true;
          throw highDemandErr;
        }

        // Fallback to next candidate if 404
        if (response.status === 404 && model !== modelCandidates[modelCandidates.length - 1]) {
          console.warn(`Model ${model} returned 404. Falling back to next model...`);
          continue;
        }

        throw new Error(message || `API error with HTTP status ${response.status}`);
      }

      const responseData = await response.json();
      const rawText = responseData?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawText) throw new Error("Gemini returned an empty response.");

      let cleaned = rawText.trim();
      if (cleaned.startsWith("```")) {
        cleaned = cleaned.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
      }

      const parsedJson = JSON.parse(cleaned);
      if (!parsedJson.questions || !Array.isArray(parsedJson.questions) || parsedJson.questions.length === 0) {
        throw new Error("Invalid quiz structure returned by AI.");
      }

      parsedJson.source = "ai";
      return parsedJson;

    } catch (err) {
      clearTimeout(timeoutId);
      lastError = err;

      if (err.name === "AbortError") {
        const timeoutErr = new Error("HIGH_DEMAND: Connection timed out. Gemini took more than 14 seconds to respond due to high server traffic.");
        timeoutErr.isHighDemand = true;
        throw timeoutErr;
      }

      if (err.isHighDemand) throw err;

      if (err.message && (
        err.message.includes("API key not valid") || 
        err.message.includes("API_KEY_INVALID") || 
        err.message.includes("PERMISSION_DENIED")
      )) {
        throw new Error("Invalid API key provided. Please verify your Gemini API key.");
      }
    }
  }

  throw lastError || new Error("Failed to connect with Gemini AI.");
}

async function executeAiGeneration(subject, chapter, difficulty, count) {
  const apiKey = getActiveApiKey();
  if (!apiKey) {
    showError("Each user must provide their own Gemini API key to keep accounts private and prevent quota exhaustion. Please enter your key above, or click 'Load Offline Question Bank' to practice without a key.");
    apiKeyInput.focus();
    return;
  }

  // UI Loading State with live timer
  btnText.style.display = "none";
  btnLoader.hidden = false;
  generateBtn.disabled = true;
  useLocalDirectBtn.disabled = true;

  let seconds = 0;
  loaderStatusText.textContent = "Connecting to Gemini AI (0s)...";
  const timer = setInterval(() => {
    seconds++;
    if (seconds <= 3) {
      loaderStatusText.textContent = `Connecting to Gemini AI (${seconds}s)...`;
    } else if (seconds <= 7) {
      loaderStatusText.textContent = `Gemini drafting ${count} questions (${seconds}s)...`;
    } else {
      loaderStatusText.textContent = `Formatting quiz payload (${seconds}s)...`;
    }
  }, 1000);

  try {
    const prompt = buildGeminiPrompt(subject, chapter, difficulty, count);
    const quizResponse = await callGeminiApi(apiKey, prompt);
    clearInterval(timer);
    displayQuiz(quizResponse);

  } catch (err) {
    clearInterval(timer);
    console.error("AI Generation issue:", err);

    if (err.isHighDemand) {
      showHighDemandModal(
        subject,
        chapter,
        difficulty,
        count,
        "Gemini AI is taking too long to connect or experiencing high traffic. Would you like to use our curated local question bank for this topic instead?"
      );
    } else {
      showError(err.message || "Failed to generate quiz with AI.");
      showHighDemandModal(
        subject,
        chapter,
        difficulty,
        count,
        `AI connection issue: ${err.message}. You can switch to our curated local question set to practice instantly without delay.`
      );
    }
  } finally {
    clearInterval(timer);
    btnText.style.display = "flex";
    btnLoader.hidden = true;
    generateBtn.disabled = false;
    useLocalDirectBtn.disabled = false;
  }
}

/**
 * ==============================================================================
 * QUIZ RENDERING & INTERACTION
 * ==============================================================================
 */

function displayQuiz(quizData) {
  currentQuizData = quizData;
  userAnswers = {};
  isQuizSubmitted = false;

  // Header Tags
  quizSubjectTag.textContent = quizData.subject || getSelectedSubject();
  quizDifficultyTag.textContent = quizData.difficulty || "Medium";
  quizChapterTitle.textContent = quizData.chapter || chapterInput.value.trim();

  // Source Badge
  if (quizData.source === "local") {
    quizSourceTag.textContent = "Offline Question Bank";
    quizSourceTag.className = "tag tag-source local-source";
  } else {
    quizSourceTag.textContent = "Gemini API Generated";
    quizSourceTag.className = "tag tag-source";
  }

  // Reset Progress
  updateProgress();

  // Render Questions
  questionsContainer.innerHTML = "";
  quizData.questions.forEach((q, qIndex) => {
    const questionCard = document.createElement("div");
    questionCard.className = "question-card";
    questionCard.id = `question-card-${qIndex}`;

    // Header badge
    const header = document.createElement("div");
    header.className = "question-card-header";
    header.innerHTML = `<span class="q-badge">Question ${qIndex + 1} of ${quizData.questions.length}</span>`;
    questionCard.appendChild(header);

    // Question Text
    const qText = document.createElement("p");
    qText.className = "q-text";
    qText.textContent = q.question;
    questionCard.appendChild(qText);

    // Options Grid
    const optionsGrid = document.createElement("div");
    optionsGrid.className = "options-grid";

    const prefixes = ["A", "B", "C", "D"];
    q.options.forEach((optText, optIndex) => {
      const optBtn = document.createElement("button");
      optBtn.type = "button";
      optBtn.className = "option-btn";
      optBtn.dataset.qIndex = qIndex;
      optBtn.dataset.optIndex = optIndex;

      optBtn.innerHTML = `
        <span class="opt-prefix">${prefixes[optIndex] || optIndex + 1}</span>
        <span class="opt-text">${optText}</span>
      `;

      optBtn.addEventListener("click", () => handleOptionSelect(qIndex, optIndex));
      optionsGrid.appendChild(optBtn);
    });

    questionCard.appendChild(optionsGrid);

    // Explanation Box (Hidden until submit)
    const explanationBox = document.createElement("div");
    explanationBox.className = "explanation-box hidden";
    explanationBox.id = `explanation-${qIndex}`;
    explanationBox.innerHTML = `
      <div class="explanation-content">
        <strong>Explanation:</strong> ${q.explanation || "No explanation provided."}
      </div>
    `;
    questionCard.appendChild(explanationBox);

    questionsContainer.appendChild(questionCard);
  });

  // Reset bottom action buttons
  submitQuizBtn.classList.remove("hidden");
  submitQuizBtn.disabled = false;
  quizResultsCard.classList.add("hidden");

  // Show Quiz View, Hide Form
  formCard.classList.add("hidden");
  quizDisplaySection.classList.remove("hidden");
  quizDisplaySection.scrollIntoView({ behavior: "smooth" });
}

function handleOptionSelect(qIndex, optIndex) {
  if (isQuizSubmitted) return;

  userAnswers[qIndex] = optIndex;

  const questionCard = document.getElementById(`question-card-${qIndex}`);
  const optionButtons = questionCard.querySelectorAll(".option-btn");
  optionButtons.forEach((btn) => {
    if (parseInt(btn.dataset.optIndex, 10) === optIndex) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  updateProgress();
}

function updateProgress() {
  const total = currentQuizData ? currentQuizData.questions.length : 0;
  const answered = Object.keys(userAnswers).length;
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;

  quizProgressBar.style.width = `${pct}%`;
  progressCountText.textContent = `${answered} of ${total} answered`;
  progressPercentText.textContent = `${pct}%`;
}

/**
 * Submit Quiz & Check Answers
 */
submitQuizBtn.addEventListener("click", () => {
  if (!currentQuizData || isQuizSubmitted) return;

  const total = currentQuizData.questions.length;
  const answered = Object.keys(userAnswers).length;

  if (answered < total) {
    const proceed = confirm(`You have answered ${answered} of ${total} questions. Are you ready to submit and view your score?`);
    if (!proceed) return;
  }

  isQuizSubmitted = true;
  submitQuizBtn.disabled = true;
  submitQuizBtn.classList.add("hidden");

  let score = 0;
  const wrongQuestions = [];

  currentQuizData.questions.forEach((q, qIndex) => {
    const userSelected = userAnswers[qIndex];
    const correctIndex = typeof q.correctAnswer === "number" ? q.correctAnswer : 0;
    const questionCard = document.getElementById(`question-card-${qIndex}`);
    const optionButtons = questionCard.querySelectorAll(".option-btn");

    optionButtons.forEach((btn) => {
      const optIdx = parseInt(btn.dataset.optIndex, 10);
      btn.disabled = true;

      if (optIdx === correctIndex) {
        btn.classList.add("correct-option");
      }
      if (userSelected !== undefined && optIdx === userSelected && userSelected !== correctIndex) {
        btn.classList.add("wrong-option");
      }
    });

    if (userSelected === correctIndex) {
      score++;
    } else {
      wrongQuestions.push({
        ...q,
        userSelected: userSelected !== undefined ? userSelected : -1,
        questionIndex: qIndex
      });
    }

    const explBox = document.getElementById(`explanation-${qIndex}`);
    if (explBox) {
      explBox.classList.remove("hidden");
    }
  });

  const pct = Math.round((score / total) * 100);

  // Update Stats Grid
  statCorrectNum.textContent = score;
  statIncorrectNum.textContent = total - score;
  statAccuracyNum.textContent = `${pct}%`;

  // Update Score Progress Bar
  scoreProgressText.textContent = `${score} / ${total} Correct (${pct}%)`;
  scoreProgressBarFill.style.width = "0%";
  setTimeout(() => {
    scoreProgressBarFill.style.width = `${pct}%`;
  }, 100);

  // Motivational Quotes & Headlines
  if (score === total) {
    // Perfect score
    resultTitle.textContent = "Perfect Score: Full Accuracy";
    resultQuote.textContent = '"Assessment completed with 100% accuracy. Target curriculum objectives fully demonstrated."';
    resultsBadge.textContent = "Maximum Score";
  } else if (pct >= 80) {
    resultTitle.textContent = "Well done";
    resultQuote.textContent = '"Well done. High performance across core curriculum objectives."';
    resultsBadge.textContent = "High Proficiency";
  } else if (pct >= 50) {
    resultTitle.textContent = "Try well: Solid Foundation";
    resultQuote.textContent = '"Try well. Core fundamentals demonstrated. Review target questions below to master remaining topics."';
    resultsBadge.textContent = "Developing Proficiency";
  } else {
    resultTitle.textContent = "Try well: Additional Review Required";
    resultQuote.textContent = '"Try well. Review the foundational explanations below and re-test to solidify understanding."';
    resultsBadge.textContent = "Review Recommended";
  }

  // Render Dynamic Topic Recommendations
  renderTopicRecommendations(score, total, pct, wrongQuestions);

  quizResultsCard.classList.remove("hidden");
  quizResultsCard.scrollIntoView({ behavior: "smooth" });
});

/**
 * Render Dynamic Recommendations (Mistakes to study OR next topics if 10/10)
 */
function renderTopicRecommendations(score, total, pct, wrongQuestions) {
  topicRecommendationsContainer.innerHTML = "";

  const subject = currentQuizData.subject || "Physics";
  const currentChapter = currentQuizData.chapter || "";

  if (score === total) {
    // Perfect score -> Suggest advanced next topics for better preparation
    const allTopics = SUBJECT_TOPICS[subject] || [];
    const otherTopics = allTopics.filter(
      (t) => t.title.toLowerCase() !== currentChapter.toLowerCase()
    );

    let nextTopicsHtml = "";
    const topicsToShow = otherTopics.length > 0 ? otherTopics.slice(0, 4) : allTopics.slice(0, 4);

    topicsToShow.forEach((topic) => {
      nextTopicsHtml += `
        <div class="next-topic-box">
          <div class="next-topic-info">
            <span class="next-topic-title">${topic.title}</span>
            <p class="next-topic-desc">${topic.desc}</p>
          </div>
          <button type="button" class="btn-practice-topic" onclick="startNextTopic('${topic.title}')">
            Practice Topic
          </button>
        </div>
      `;
    });

    topicRecommendationsContainer.innerHTML = `
      <div class="perfect-score-banner">
        <span class="perfect-score-badge">Full Mastery</span>
        <h3 class="perfect-score-headline">Curriculum Objective Complete: Advanced Topics Available</h3>
        <p class="perfect-score-sub">
          All <strong>${total} of ${total}</strong> questions answered correctly in <strong>${currentChapter}</strong>.
          Continue syllabus progression with these recommended topics:
        </p>
      </div>
      <div class="rec-section-header">
        <h4 class="rec-section-title">Recommended Advanced Topics:</h4>
      </div>
      <div class="next-topics-grid">
        ${nextTopicsHtml}
      </div>
    `;

  } else {
    // Made mistakes -> Suggest the exact topics to study
    let studyCardsHtml = "";

    wrongQuestions.forEach((q) => {
      const conceptName = extractConceptName(q);

      studyCardsHtml += `
        <div class="study-topic-card">
          <div class="study-topic-header">
            <span class="study-topic-title">
              Question ${q.id}: ${conceptName}
            </span>
            <button type="button" class="jump-to-q-btn" onclick="jumpToQuestion(${q.questionIndex})">
              Review Question ${q.id}
            </button>
          </div>
          <p class="study-topic-detail"><strong>Question:</strong> ${q.question}</p>
          <div class="study-topic-takeaway">
            <strong>Key Concept & Rule:</strong> ${q.explanation}
          </div>
        </div>
      `;
    });

    topicRecommendationsContainer.innerHTML = `
      <div class="rec-section-header">
        <div class="rec-section-title">
          <span>Target Topics for Review</span>
        </div>
        <p class="rec-section-desc">
          Incorrect responses recorded for ${wrongQuestions.length} question(s) in <strong>${currentChapter}</strong>. Review the foundational principles below:
        </p>
      </div>
      <div class="study-cards-list">
        ${studyCardsHtml}
      </div>
    `;
  }
}

/**
 * Extract clean concept name from question for the study recommendation card
 */
function extractConceptName(q) {
  if (q.subtopic) return q.subtopic;
  const text = (q.question + " " + q.explanation).toLowerCase();

  if (text.includes("entropy")) return "Entropy & Irreversibility";
  if (text.includes("carnot")) return "Carnot Engine & Efficiency";
  if (text.includes("isothermal")) return "Isothermal Processes";
  if (text.includes("adiabatic")) return "Adiabatic Processes (Q = 0)";
  if (text.includes("zeroth")) return "Zeroth Law & Temperature";
  if (text.includes("first law")) return "First Law of Thermodynamics";
  if (text.includes("second law")) return "Second Law of Thermodynamics";
  if (text.includes("third law")) return "Third Law & Absolute Zero";
  if (text.includes("isochoric")) return "Isochoric (Constant Volume) Work";
  if (text.includes("projectile") || text.includes("trajectory")) return "Projectile Motion Equations";
  if (text.includes("snell") || text.includes("refraction")) return "Snell\'s Law of Refraction";
  if (text.includes("gauss") || text.includes("flux")) return "Gauss\'s Law & Electric Flux";
  if (text.includes("vsepr") || text.includes("hybridization")) return "VSEPR Theory & Molecular Shapes";
  if (text.includes("derivative") || text.includes("chain rule")) return "Differentiation & Chain Rule";
  if (text.includes("eigenvalue") || text.includes("determinant")) return "Determinants & Matrix Algebra";
  if (text.includes("bayes") || text.includes("probability")) return "Conditional Probability & Bayes\' Theorem";

  const words = q.question.split(" ").slice(0, 6).join(" ");
  return words + "...";
}

/**
 * Global jump to question helper with pulse highlight
 */
window.jumpToQuestion = function(index) {
  const card = document.getElementById(`question-card-${index}`);
  if (card) {
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.style.transition = "transform 0.3s, box-shadow 0.3s";
    card.style.transform = "scale(1.02)";
    card.style.boxShadow = "0 0 25px rgba(239, 68, 68, 0.5)";
    setTimeout(() => {
      card.style.transform = "none";
      card.style.boxShadow = "";
    }, 1400);
  }
};

/**
 * Global start next topic helper for 10 on 10 recommendations
 */
window.startNextTopic = function(topicTitle) {
  returnToSetup();
  const box = document.querySelector(`.topic-box[data-topic-title="${topicTitle}"]`);
  if (box) {
    box.click();
  } else {
    chapterInput.value = topicTitle;
  }
  formCard.scrollIntoView({ behavior: "smooth" });
};

/**
 * Retake Same Quiz
 */
retakeQuizBtn.addEventListener("click", () => {
  if (!currentQuizData) return;
  displayQuiz(currentQuizData);
});

/**
 * Return to Setup Form
 */
function returnToSetup() {
  quizDisplaySection.classList.add("hidden");
  formCard.classList.remove("hidden");
  formCard.scrollIntoView({ behavior: "smooth" });
}

newQuizTopBtn.addEventListener("click", returnToSetup);
createAnotherQuizBtn.addEventListener("click", returnToSetup);

/**
 * ==============================================================================
 * FORM SUBMISSION - TRIGGER AI GENERATION
 * ==============================================================================
 */

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  hideError();

  const chapterVal = chapterInput.value.trim();
  if (!chapterVal) {
    showFormError("Please select a topic box above or enter a chapter.");
    return;
  }

  const formData = new FormData(quizForm);
  const subject = formData.get("subject") || "Physics";
  const difficulty = formData.get("difficulty") || "Medium";
  const count = parseInt(formData.get("questionCount") || "10", 10);

  executeAiGeneration(subject, chapterVal, difficulty, count);
});

/**
 * Initialize on page load
 */
document.addEventListener("DOMContentLoaded", () => {
  updateApiKeyUI();
  renderTopicBoxes(getSelectedSubject());
});
