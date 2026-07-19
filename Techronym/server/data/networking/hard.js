const networkingHard = [
  {
    id: 171,
    acronym: "MPLS",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Multiprotocol", "Label", "Switching"],
    hint: "A high-performance packet forwarding technology.",
    explanation:
      "MPLS forwards packets using labels instead of IP addresses, improving speed and efficiency.",
  },
  {
    id: 172,
    acronym: "STP",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Spanning", "Tree", "Protocol"],
    hint: "Prevents loops in switched networks.",
    explanation:
      "STP disables redundant paths to prevent switching loops in Ethernet networks.",
  },
  {
    id: 173,
    acronym: "RSTP",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Rapid", "Spanning", "Tree", "Protocol"],
    hint: "A faster version of STP.",
    explanation:
      "RSTP significantly reduces the time needed for network recovery after topology changes.",
  },
  {
    id: 174,
    acronym: "HSRP",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Hot", "Standby", "Router", "Protocol"],
    hint: "Provides gateway redundancy.",
    explanation:
      "HSRP ensures continuous network availability by providing a backup default gateway.",
  },
  {
    id: 175,
    acronym: "VRRP",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Virtual", "Router", "Redundancy", "Protocol"],
    hint: "An alternative to HSRP.",
    explanation:
      "VRRP allows multiple routers to share a virtual IP address for high availability.",
  },
  {
    id: 176,
    acronym: "LACP",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Link", "Aggregation", "Control", "Protocol"],
    hint: "Combines multiple network links into one.",
    explanation:
      "LACP increases bandwidth and provides redundancy by bundling multiple physical links.",
  },
  {
    id: 177,
    acronym: "SNMP",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Simple", "Network", "Management", "Protocol"],
    hint: "Used to monitor network devices.",
    explanation:
      "SNMP allows administrators to monitor and manage routers, switches, servers, and other devices.",
  },
  {
    id: 178,
    acronym: "NTP",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Network", "Time", "Protocol"],
    hint: "Synchronizes clocks across devices.",
    explanation:
      "NTP keeps network devices synchronized with accurate time servers.",
  },
  {
    id: 179,
    acronym: "VoIP",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Voice", "over", "Internet", "Protocol"],
    hint: "Technology for making calls over the Internet.",
    explanation:
      "VoIP enables voice communication using IP networks instead of traditional telephone lines.",
  },
  {
    id: 180,
    acronym: "QoS",
    category: "Networking",
    difficulty: "Hard",
    answer: ["Quality", "of", "Service"],
    hint: "Prioritizes important network traffic.",
    explanation:
      "QoS manages network resources by giving priority to latency-sensitive applications like voice and video.",
  },
];

export default networkingHard;