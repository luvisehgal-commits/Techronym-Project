const webHard = [
  {
    id: 101,
    acronym: "CSP",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["Content", "Security", "Policy"],
    hint: "Helps prevent XSS attacks.",
    explanation:
      "Content Security Policy restricts which resources a browser is allowed to load, reducing security risks.",
  },
  {
    id: 102,
    acronym: "SRI",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["Subresource", "Integrity"],
    hint: "Protects external resources from tampering.",
    explanation:
      "SRI ensures that externally loaded files haven't been modified by checking their cryptographic hash.",
  },
  {
    id: 103,
    acronym: "CSRF",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["Cross", "Site", "Request", "Forgery"],
    hint: "A security attack exploiting authenticated users.",
    explanation:
      "CSRF tricks authenticated users into unknowingly submitting malicious requests.",
  },
  {
    id: 104,
    acronym: "XSS",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["Cross", "Site", "Scripting"],
    hint: "Allows attackers to inject malicious JavaScript.",
    explanation:
      "Cross-Site Scripting enables attackers to execute malicious scripts in another user's browser.",
  },
  {
    id: 105,
    acronym: "OIDC",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["OpenID", "Connect"],
    hint: "Authentication protocol built on OAuth 2.0.",
    explanation:
      "OpenID Connect adds user authentication capabilities to OAuth 2.0.",
  },
  {
    id: 106,
    acronym: "OAuth",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["Open", "Authorization"],
    hint: "Used for Google, GitHub and Facebook login.",
    explanation:
      "OAuth allows users to authorize applications without sharing their passwords.",
  },
  {
    id: 107,
    acronym: "W3C",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["World", "Wide", "Web", "Consortium"],
    hint: "Develops web standards.",
    explanation:
      "The W3C develops standards including HTML, CSS and accessibility guidelines.",
  },
  {
    id: 108,
    acronym: "WCAG",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["Web", "Content", "Accessibility", "Guidelines"],
    hint: "Accessibility standards for websites.",
    explanation:
      "WCAG helps developers build websites accessible to people with disabilities.",
  },
  {
    id: 109,
    acronym: "BFF",
    category: "Web Development",
    difficulty: "Hard",
    answer: ["Backend", "For", "Frontend"],
    hint: "A backend designed specifically for one frontend.",
    explanation:
      "The Backend for Frontend pattern creates APIs tailored for a particular client application.",
  },
  {
    id: 110,
    acronym: "HATEOAS",
    category: "Web Development",
    difficulty: "Hard",
    answer: [
      "Hypermedia",
      "As",
      "The",
      "Engine",
      "Of",
      "Application",
      "State",
    ],
    hint: "An advanced REST principle.",
    explanation:
      "HATEOAS enables REST APIs to provide links that guide clients through available actions.",
  },
    
];

export default webHard;