const cloudHard = [
  {
    id: 201,
    acronym: "IaC",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Infrastructure", "as", "Code"],
    hint: "Managing infrastructure using code instead of manual configuration.",
    explanation:
      "Infrastructure as Code automates provisioning and management of cloud infrastructure using configuration files.",
  },
  {
    id: 202,
    acronym: "CI/CD",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Continuous", "Integration", "Continuous", "Deployment"],
    hint: "Automates software building, testing, and deployment.",
    explanation:
      "CI/CD is a DevOps practice that enables developers to frequently integrate code and automatically deploy applications.",
  },
  {
    id: 203,
    acronym: "SLA",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Service", "Level", "Agreement"],
    hint: "Defines guaranteed service availability.",
    explanation:
      "A Service Level Agreement specifies uptime, performance, and responsibilities between a cloud provider and customer.",
  },
  {
    id: 204,
    acronym: "RTO",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Recovery", "Time", "Objective"],
    hint: "Maximum acceptable downtime after a disaster.",
    explanation:
      "Recovery Time Objective defines how quickly systems should be restored after an outage.",
  },
  {
    id: 205,
    acronym: "RPO",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Recovery", "Point", "Objective"],
    hint: "Maximum acceptable amount of data loss.",
    explanation:
      "Recovery Point Objective defines the maximum data loss measured in time during a disaster.",
  },
  {
    id: 206,
    acronym: "HPA",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Horizontal", "Pod", "Autoscaler"],
    hint: "Automatically scales Kubernetes pods.",
    explanation:
      "Horizontal Pod Autoscaler increases or decreases the number of Kubernetes pods based on workload.",
  },
  {
    id: 207,
    acronym: "PVC",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Persistent", "Volume", "Claim"],
    hint: "Requests persistent storage in Kubernetes.",
    explanation:
      "A Persistent Volume Claim allows Kubernetes applications to request durable storage resources.",
  },
  {
    id: 208,
    acronym: "CSI",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Container", "Storage", "Interface"],
    hint: "Standard interface for storage plugins.",
    explanation:
      "Container Storage Interface enables Kubernetes to connect with different storage providers.",
  },
  {
    id: 209,
    acronym: "CNI",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Container", "Network", "Interface"],
    hint: "Handles networking for containers.",
    explanation:
      "Container Network Interface provides networking capabilities for container orchestration platforms like Kubernetes.",
  },
  {
    id: 210,
    acronym: "DR",
    category: "Cloud",
    difficulty: "Hard",
    answer: ["Disaster", "Recovery"],
    hint: "Plan for restoring systems after failures.",
    explanation:
      "Disaster Recovery includes strategies and procedures to recover applications and data after unexpected events.",
  },
];

export default cloudHard;