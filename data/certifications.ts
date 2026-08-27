export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
  skills: string[];
  link?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "ai-ml-uol",
    title: "AI & Machine Learning",
    issuer: "University of London",
    date: "May 2025",
    description: "In-depth foundation in neural networks, statistical machine learning models, gradient descent optimization, and algorithmic evaluation.",
    badge: "University of London",
    skills: ["AI/ML", "Supervised Learning", "Neural Networks", "Optimization"],
    link: "#",
  },
  {
    id: "software-engineering-ibm",
    title: "Software Engineering",
    issuer: "IBM",
    date: "April 2025",
    description: "Core software engineering principles, agile methodologies, clean architectural patterns, CI/CD practices, and system scalability.",
    badge: "IBM",
    skills: ["Software Engineering", "System Design", "Agile", "Testing"],
    link: "#",
  },
  {
    id: "cyber-security-uol",
    title: "Cyber Security",
    issuer: "University of London",
    date: "October 2025",
    description: "Network security protocols, vulnerability analysis, cryptography foundations, access control mechanisms, and threat mitigation strategies.",
    badge: "University of London",
    skills: ["Cyber Security", "Network Protocols", "Cryptography", "Security Architecture"],
    link: "#",
  },
];
