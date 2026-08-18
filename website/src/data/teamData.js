// Team Data Structure for HackIT SGGSIE&T
// Formatted with clean role-based placeholders as requested

export const faculty = {
  id: "faculty-coordinator",
  name: "[Faculty Advisor Name]",
  role: "Faculty Advisor",
  domain: "Department of Computer Science & Engineering",
  bio: "Providing guidance on academic integrations, research directions, and cybersecurity laboratory development.",
  domains: ["Machine Learning", "Neural Networks", "Image Processing", "Research Advisor"],
  image: "",
  github: "",
  linkedin: "https://linkedin.com",
  email: "faculty@sggs.ac.in"
};

export const leadership = [
  {
    id: "lead-1",
    name: "[President Name]",
    role: "President",
    domain: "Cybersecurity & Community Lead",
    bio: "Coordinating club activities, workshops, and SGGSIE&T representation in national CTFs. Passionate about Linux kernels, system exploitation, and network security audits.",
    domains: ["Reverse Engineering", "Binary Exploitation", "Linux Systems", "CTF Coordination"],
    image: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "president@sggs.ac.in"
  },
  {
    id: "lead-2",
    name: "[Vice President Name]",
    role: "Vice President",
    domain: "Web Security & Operations",
    bio: "Managing technical operations, server deployments, and infrastructure. Specialized in application penetration testing, secure code review, and cloud automation.",
    domains: ["Web Penetration Testing", "Node.js", "Docker & Kubernetes", "OAuth Security"],
    image: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "vp@sggs.ac.in"
  },
  {
    id: "lead-3",
    name: "[Secretary Name]",
    role: "Secretary",
    domain: "Events & Technical Coordination",
    bio: "Organizing event schedules, maintaining department liaison, and structuring technical labs. Specialized in encryption protocols and secure database architectures.",
    domains: ["Cryptography", "Database Administration", "Technical Writing", "Event Planning"],
    image: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "secretary@sggs.ac.in"
  },
  {
    id: "lead-4",
    name: "[Treasurer Name]",
    role: "Treasurer",
    domain: "Finance & Community Support",
    bio: "Managing club sponsorships, event budgets, and community outreach. Enthusiastic about security compliance, forensic analysis, and open-source licensing models.",
    domains: ["Digital Forensics", "OSINT", "Sponsorship Outreach", "Budget Management"],
    image: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "treasurer@sggs.ac.in"
  }
];

export const coreCommittee = Array.from({ length: 14 }, (_, index) => {
  const num = index + 1;
  const focusAreas = [
    ["Web Security", "React", "Node.js", "API Testing"],
    ["Competitive Programming", "C++", "Data Structures", "Algorithms"],
    ["Linux Systems", "Bash Scripting", "Firewall Audits", "Git"],
    ["Cybersecurity", "CTF Competing", "Cryptography", "Network Security"]
  ];
  
  const bios = [
    "Focused on building secure web portals and examining API vulnerabilities. Active contributor to open source frameworks.",
    "Algorithm enthusiast and competitive coder. Enjoys optimizing complex data pipelines and solving algorithmic puzzles.",
    "Systems engineer managing Linux environments, server setups, and automated deployment scripts.",
    "Cybersecurity researcher interested in digital forensics, cryptanalysis, and capture-the-flag competitions."
  ];

  const domains = focusAreas[index % focusAreas.length];
  const bio = bios[index % bios.length] + " Active core team coordinator for SGGSIE&T HackIT labs.";

  return {
    id: `core-member-${num}`,
    name: `[Core Member Name ${num}]`,
    role: "Core Committee Member",
    domain: domains[0] + " & Operations",
    bio: bio,
    domains: domains,
    image: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: `member${num}@sggs.ac.in`
  };
});

export const teamData = {
  faculty,
  leadership,
  coreCommittee
};
