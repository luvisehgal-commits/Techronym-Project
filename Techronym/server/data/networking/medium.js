const networkingMedium = [
  {
    id: 161,
    acronym: "NAT",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Network", "Address", "Translation"],
    hint: "Allows multiple devices to share one public IP.",
    explanation:
      "NAT translates private IP addresses into a public IP address, conserving IPv4 addresses.",
  },
  {
    id: 162,
    acronym: "ARP",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Address", "Resolution", "Protocol"],
    hint: "Finds a MAC address from an IP address.",
    explanation:
      "ARP maps an IPv4 address to the corresponding MAC address on a local network.",
  },
  {
    id: 163,
    acronym: "ICMP",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Internet", "Control", "Message", "Protocol"],
    hint: "Used by the ping command.",
    explanation:
      "ICMP is used for diagnostics and error reporting in IP networks.",
  },
  {
    id: 164,
    acronym: "RIP",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Routing", "Information", "Protocol"],
    hint: "A distance-vector routing protocol.",
    explanation:
      "RIP exchanges routing information between routers using hop count as its metric.",
  },
  {
    id: 165,
    acronym: "OSPF",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Open", "Shortest", "Path", "First"],
    hint: "A link-state routing protocol.",
    explanation:
      "OSPF calculates the shortest path between routers using Dijkstra's algorithm.",
  },
  {
    id: 166,
    acronym: "BGP",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Border", "Gateway", "Protocol"],
    hint: "The routing protocol of the Internet.",
    explanation:
      "BGP exchanges routing information between autonomous systems across the Internet.",
  },
  {
    id: 167,
    acronym: "VLAN",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Virtual", "Local", "Area", "Network"],
    hint: "Creates separate logical networks.",
    explanation:
      "A VLAN divides one physical network into multiple logical broadcast domains.",
  },
  {
    id: 168,
    acronym: "VPN",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Virtual", "Private", "Network"],
    hint: "Creates a secure encrypted connection.",
    explanation:
      "A VPN encrypts internet traffic and allows secure remote access to private networks.",
  },
  {
    id: 169,
    acronym: "ACL",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Access", "Control", "List"],
    hint: "Filters network traffic.",
    explanation:
      "ACLs define rules that permit or deny network traffic based on specified conditions.",
  },
  {
    id: 170,
    acronym: "ASN",
    category: "Networking",
    difficulty: "Medium",
    answer: ["Autonomous", "System", "Number"],
    hint: "Identifies an autonomous system on the Internet.",
    explanation:
      "An ASN uniquely identifies a network participating in inter-domain routing using BGP.",
  },
];

export default networkingMedium;