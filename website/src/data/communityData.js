// Community Data Structure for HackIT SGGSIE&T

export const communityPhilosophy = [
  {
    title: "Learning by Doing",
    description: "Prioritizing active experimentation, terminal practice, and solving real challenges over theoretical reading."
  },
  {
    title: "Collaboration Over Competition",
    description: "Supporting fellow peers, sharing knowledge, and building together rather than working in isolation."
  },
  {
    title: "Hands-on Experimentation",
    description: "Building lab environments, testing tools, and taking initiative to explore emerging technology."
  },
  {
    title: "Peer-to-Peer Learning",
    description: "Bridging senior members and beginners through structured mentorship and collaborative coding."
  },
  {
    title: "Building Practical Skills",
    description: "Focusing on real-world engineering skills, security practices, and open-source contributions."
  }
];

export const howWeLearn = [
  {
    id: "workshops",
    title: "Workshops",
    icon: "school",
    description: "Practical sessions covering cybersecurity, programming, Linux, networking, and emerging technologies."
  },
  {
    id: "ctf-practice",
    title: "CTF Practice",
    icon: "flag",
    description: "Collaborative problem-solving through Capture-the-Flag competitions and security challenges."
  },
  {
    id: "projects",
    title: "Projects",
    icon: "terminal",
    description: "Building tools, experimenting with ideas, and contributing to open-source software."
  },
  {
    id: "hackathons",
    title: "Hackathons",
    icon: "bolt",
    description: "Rapid prototyping, teamwork, and solving real-world problems."
  }
];

export const domainsExplored = [
  "Web Security",
  "Reverse Engineering",
  "Cryptography",
  "Linux",
  "Networking",
  "Digital Forensics",
  "Open Source",
  "AI & Security",
  "Competitive Programming"
];

export const recruitmentConfig = {
  isOpen: false, // Easy to toggle between true and false
  statusText: "Recruitment Closed", // Or "Recruitment Open"
  statusSubtext: "Annual recruitment takes place once every academic year for SGGSIE&T students.",
  pipeline: [
    { step: "01", name: "Announcement", desc: "Official call for applications published across club channels." },
    { step: "02", name: "Application Form", desc: "Online application submission covering domain interest and background." },
    { step: "03", name: "Screening", desc: "Basic technical task or aptitude check based on selected track." },
    { step: "04", name: "Interview", desc: "Interactive discussion with core committee members." },
    { step: "05", name: "Selection", desc: "Final onboarding shortlist announced." },
    { step: "06", name: "Membership", desc: "Welcome to active HackIT community workshops, projects & CTFs." }
  ]
};

export const socialLinks = [
  {
    name: "Discord",
    url: "https://discord.com",
    icon: "forum"
  },
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "code"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "link"
  }
];
