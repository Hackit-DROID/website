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
    image: "/images/team/president.jpeg",
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
    image: "/images/team/vice-president.jpeg",
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
    image: "/images/team/secretary.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "secretary@sggs.ac.in"
  },
  {
    id: "lead-4",
    name: "[Technical Lead Name]",
    role: "Technical Lead",
    domain: "Security Engineering & Systems",
    bio: "Designing technical labs, CTF challenges, and vulnerability testing frameworks. Enthusiastic about kernel exploitation, system internals, and compiler security.",
    domains: ["Exploit Development", "Kernel Security", "System Architecture", "CTF Designing"],
    image: "/images/team/tech-lead.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "techlead@sggs.ac.in"
  },
  {
    id: "lead-5",
    name: "[Community Lead Name]",
    role: "Community Lead",
    domain: "Public Relations & Growth",
    bio: "Fostering community engagement, onboarding new students, and managing public outreach. Passionate about OSINT, social engineering concepts, and peer mentorship networks.",
    domains: ["OSINT", "Public Speaking", "Community Operations", "Event Management"],
    image: "/images/team/community-lead.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "community@sggs.ac.in"
  },
  {
    id: "lead-6",
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

const explicitCore = [
  {
    id: "core-member-1",
    name: "[Technical Co-Lead Name]",
    role: "Technical Co-Lead",
    domain: "Web & Infrastructure Operations",
    bio: "Assisting in technical coordination, maintaining lab environments, and organizing security exercises. Active core team coordinator for SGGSIE&T HackIT labs.",
    domains: ["Web Security", "Infrastructure", "React", "Node.js"],
    image: "/images/team/tech-co-lead.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "tech.colead@sggs.ac.in"
  },
  {
    id: "core-member-2",
    name: "[Community Co-Lead Name]",
    role: "Community Co-Lead",
    domain: "Community Engagement & Operations",
    bio: "Coordinating peer learning programs, student support, and event outreach. Active core team coordinator for SGGSIE&T HackIT labs.",
    domains: ["Community Management", "Event Planning", "Outreach", "OSINT"],
    image: "/images/team/comunity-co-lead.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "community.colead@sggs.ac.in"
  }
];

const generatedCore = Array.from({ length: 12 }, (_, index) => {
  const num = index + 3;
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

export const coreCommittee = [...explicitCore, ...generatedCore];

export const teamData = {
  faculty,
  leadership,
  coreCommittee
};
