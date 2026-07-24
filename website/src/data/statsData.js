export const statsData = [
  {
    id: "members",
    number: 779,
    suffix: "+",
    label: "Active Members",
    sublabel: "Students, researchers & security engineers"
  },
  {
    id: "ctf-wins",
    number: 47,
    suffix: "",
    label: "CTF Podium Finishes",
    sublabel: "DEFCON Quals, PicoCTF & National CTFs"
  },
  {
    id: "workshops",
    number: 120,
    suffix: "+",
    label: "Workshops Conducted",
    sublabel: "Web Sec, Binary Exploitation & Crypto"
  },
  {
    id: "bounties",
    number: 50,
    suffix: "k+",
    prefix: "$",
    label: "Bounties Disclosed",
    sublabel: "Ethical disclosures to CVE databases"
  }
];

export const heroTerminalCommands = [
  { cmd: "hackit status", output: "[✓] Club Status: ACTIVE\n[✓] Next CTF: Midnight Sun CTF 2026\n[✓] Weekly Meetup: Thursdays 18:00 UTC\n[!] Open slots for Red Team Track: 12" },
  { cmd: "cat /etc/hackit/manifest.json", output: '{\n  "club": "HackIT Cybersecurity",\n  "motto": "Break, Build, Secure.",\n  "focus": ["Binary Exploitation", "Web Security", "Cryptography", "Reverse Engineering"]\n}' },
  { cmd: "npx hackit-cli join", output: "Initiating membership challenge sequence...\n[OK] Identity verified.\nWelcome to HackIT. Execute 'hackit help' to explore tracks." }
];
