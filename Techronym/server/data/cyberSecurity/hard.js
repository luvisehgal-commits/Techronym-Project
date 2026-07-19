const cyberHard = [
  {
    id: 231,
    acronym: "APT",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["Advanced", "Persistent", "Threat"],
    hint: "A long-term targeted cyber attack.",
    explanation:
      "An APT is a sophisticated cyberattack where attackers gain unauthorized access and remain undetected for an extended period.",
  },
  {
    id: 232,
    acronym: "HIDS",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["Host", "Intrusion", "Detection", "System"],
    hint: "Monitors a single computer for attacks.",
    explanation:
      "A HIDS detects suspicious activities by monitoring files, logs, and processes on a host.",
  },
  {
    id: 233,
    acronym: "NIDS",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["Network", "Intrusion", "Detection", "System"],
    hint: "Monitors network traffic for attacks.",
    explanation:
      "A NIDS analyzes network traffic to identify malicious activity across an entire network.",
  },
  {
    id: 234,
    acronym: "PBKDF2",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: [
      "Password",
      "Based",
      "Key",
      "Derivation",
      "Function",
      "2",
    ],
    hint: "Used for secure password hashing.",
    explanation:
      "PBKDF2 strengthens passwords by repeatedly hashing them with a salt, making brute-force attacks much harder.",
  },
  {
    id: 235,
    acronym: "SAML",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["Security", "Assertion", "Markup", "Language"],
    hint: "Used for Single Sign-On.",
    explanation:
      "SAML enables secure exchange of authentication and authorization information between systems.",
  },
  {
    id: 236,
    acronym: "RCE",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["Remote", "Code", "Execution"],
    hint: "Allows attackers to execute code remotely.",
    explanation:
      "RCE vulnerabilities allow attackers to run arbitrary code on a target system.",
  },
  {
    id: 237,
    acronym: "XXE",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["XML", "External", "Entity"],
    hint: "A vulnerability in XML parsers.",
    explanation:
      "XXE attacks exploit XML parsers to access sensitive files or perform server-side attacks.",
  },
  {
    id: 238,
    acronym: "SSRF",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["Server", "Side", "Request", "Forgery"],
    hint: "Forces a server to send unauthorized requests.",
    explanation:
      "SSRF vulnerabilities allow attackers to trick a server into making requests to unintended destinations.",
  },
  {
    id: 239,
    acronym: "CSRF",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["Cross", "Site", "Request", "Forgery"],
    hint: "Tricks users into performing unwanted actions.",
    explanation:
      "CSRF attacks exploit authenticated user sessions to perform unauthorized actions on web applications.",
  },
  {
    id: 240,
    acronym: "XSS",
    category: "Cyber Security",
    difficulty: "Hard",
    answer: ["Cross", "Site", "Scripting"],
    hint: "Injects malicious scripts into web pages.",
    explanation:
      "XSS attacks inject malicious JavaScript into trusted websites, potentially stealing user data or sessions.",
  },
];

export default cyberHard;