const databaseHard = [
  {
    id: 1,
    acronym: "CAP",
    category: "Database",
    difficulty: "Hard",
    answer: ["Consistency", "Availability", "Partition", "Tolerance"],
    hint: "A theorem for distributed databases.",
    explanation:
      "The CAP theorem states that a distributed system can guarantee only two of Consistency, Availability, and Partition Tolerance simultaneously.",
  },
  {
    id: 2,
    acronym: "BASE",
    category: "Database",
    difficulty: "Hard",
    answer: ["Basically", "Available", "Soft", "State", "Eventually", "Consistent"],
    hint: "Alternative consistency model used by many NoSQL databases.",
    explanation:
      "BASE prioritizes availability over strict consistency, allowing eventual consistency across distributed systems.",
  },
  {
    id: 3,
    acronym: "WAL",
    category: "Database",
    difficulty: "Hard",
    answer: ["Write", "Ahead", "Logging"],
    hint: "Used for crash recovery.",
    explanation:
      "Write-Ahead Logging ensures changes are recorded in a log before being written to the database.",
  },
  {
    id: 4,
    acronym: "MVCC",
    category: "Database",
    difficulty: "Hard",
    answer: ["Multi", "Version", "Concurrency", "Control"],
    hint: "Allows multiple transactions without blocking readers.",
    explanation:
      "MVCC maintains multiple versions of data to improve concurrency and reduce locking.",
  },
  {
    id: 5,
    acronym: "RAID",
    category: "Database",
    difficulty: "Hard",
    answer: ["Redundant", "Array", "of", "Independent", "Disks"],
    hint: "Improves storage reliability and performance.",
    explanation:
      "RAID combines multiple physical disks to improve fault tolerance and performance.",
  },
  {
    id: 6,
    acronym: "SAN",
    category: "Database",
    difficulty: "Hard",
    answer: ["Storage", "Area", "Network"],
    hint: "High-speed storage architecture.",
    explanation:
      "A SAN provides block-level storage for enterprise databases and servers.",
  },
  {
    id: 7,
    acronym: "NAS",
    category: "Database",
    difficulty: "Hard",
    answer: ["Network", "Attached", "Storage"],
    hint: "File-level shared storage.",
    explanation:
      "NAS provides centralized file storage accessible over a network.",
  },
  {
    id: 8,
    acronym: "SCD",
    category: "Database",
    difficulty: "Hard",
    answer: ["Slowly", "Changing", "Dimension"],
    hint: "Data warehousing concept.",
    explanation:
      "SCD techniques manage historical changes in dimension tables within data warehouses.",
  },
  {
    id: 9,
    acronym: "MDM",
    category: "Database",
    difficulty: "Hard",
    answer: ["Master", "Data", "Management"],
    hint: "Maintains a single source of truth.",
    explanation:
      "MDM ensures consistency and accuracy of key business data across an organization.",
  },
  {
    id: 10,
    acronym: "DW",
    category: "Database",
   difficulty: "Hard",
    answer: ["Data", "Warehouse"],
    hint: "Stores historical business data.",
    explanation:
      "A Data Warehouse is designed for reporting, analytics, and business intelligence.",
  },

];

export default databaseHard;