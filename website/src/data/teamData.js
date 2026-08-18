// Team Data Structure for HackIT SGGSIE&T
// Future-proof data source. Update this single file when real member information is collected.

export const faculty = {
  id: "faculty-coordinator",
  name: "[Faculty Coordinator Name]",
  role: "Faculty Coordinator",
  domain: "Department of Computer Science & Engineering",
  image: "", // Path to photo (e.g. "/images/team/faculty.jpg")
  github: "",
  linkedin: "https://linkedin.com",
  email: "faculty@sggs.ac.in" // Stored in data, not displayed publicly
};

export const leadership = [
  {
    id: "lead-1",
    name: "[President Name]",
    role: "President",
    domain: "Cybersecurity & Community Lead",
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
    image: "",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "secretary@sggs.ac.in"
  }
];

export const coreCommittee = Array.from({ length: 18 }, (_, index) => ({
  id: `core-member-${index + 1}`,
  name: `[Core Member ${index + 1}]`,
  role: "Core Committee Member",
  domain: index % 4 === 0 
    ? "Cybersecurity & CTFs" 
    : index % 4 === 1 
    ? "Web Security" 
    : index % 4 === 2 
    ? "Competitive Coding" 
    : "Open Source Projects",
  image: "",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: `member${index + 1}@sggs.ac.in`
}));

export const teamData = {
  faculty,
  leadership,
  coreCommittee
};
