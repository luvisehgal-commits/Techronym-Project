const databaseMedium = [
  {
    id: 1,
    acronym: "OLTP",
    category: "Database",
    difficulty: "Medium",
    answer: ["Online", "Transaction", "Processing"],
    hint: "Handles day-to-day business transactions.",
    explanation:
      "OLTP systems are optimized for fast transaction processing such as banking, e-commerce, and reservation systems.",
  },
  {
    id: 2,
    acronym: "OLAP",
    category: "Database",
    difficulty: "Medium",
    answer: ["Online", "Analytical", "Processing"],
    hint: "Used for reporting and business intelligence.",
    explanation:
      "OLAP systems are optimized for complex queries, analysis, and decision-making rather than transactions.",
  },
  {
    id: 3,
    acronym: "ETL",
    category: "Database",
    difficulty: "Medium",
    answer: ["Extract", "Transform", "Load"],
    hint: "Used in data warehousing.",
    explanation:
      "ETL extracts data from sources, transforms it into a suitable format, and loads it into a data warehouse.",
  },
  {
    id: 4,
    acronym: "BCNF",
    category: "Database",
    difficulty: "Medium",
    answer: ["Boyce", "Codd", "Normal", "Form"],
    hint: "A normalization level beyond 3NF.",
    explanation:
      "BCNF removes anomalies caused by certain functional dependencies and is stricter than Third Normal Form.",
  },
  {
    id: 5,
    acronym: "UUID",
    category: "Database",
    difficulty: "Medium",
    answer: ["Universally", "Unique", "Identifier"],
    hint: "Used instead of auto-increment IDs.",
    explanation:
      "A UUID is a 128-bit identifier designed to be globally unique without central coordination.",
  },
  {
    id: 6,
    acronym: "ERM",
    category: "Database",
    difficulty: "Medium",
    answer: ["Entity", "Relationship", "Model"],
    hint: "Conceptual model for designing databases.",
    explanation:
      "ERM defines entities, attributes, and relationships before implementing the database.",
  },
  {
  id: 7,
  acronym: "TDE",
  category: "Database",
  difficulty: "Medium",
  answer: ["Transparent", "Data", "Encryption"],
  hint: "Encrypts data stored in a database.",
  explanation:
    "Transparent Data Encryption protects data at rest by encrypting database files without requiring application changes.",
},
  {
    id: 8,
    acronym: "CDC",
    category: "Database",
    difficulty: "Medium",
    answer: ["Change", "Data", "Capture"],
    hint: "Tracks modifications in a database.",
    explanation:
      "CDC identifies inserted, updated, and deleted data so downstream systems can stay synchronized.",
  },
  {
    id: 9,
    acronym: "MVCC",
    category: "Database",
    difficulty: "Medium",
    answer: ["Multi", "Version", "Concurrency", "Control"],
    hint: "Allows multiple transactions simultaneously.",
    explanation:
      "MVCC lets readers and writers access the database concurrently without unnecessary locking.",
  },
  {
    id: 10,
    acronym: "CTE",
    category: "Database",
    difficulty: "Medium",
    answer: ["Common", "Table", "Expression"],
    hint: "Temporary named result set in SQL.",
    explanation:
      "A CTE simplifies complex SQL queries by creating a temporary result set within a statement.",
  },
   
];

export default databaseMedium;