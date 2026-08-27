export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    relatedProjects?: string[];
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages for systems, AI models, and scalable architectures.",
    skills: [
      { name: "Python", highlight: true, relatedProjects: ["pyroeye", "cinematch", "research"] },
      { name: "Java", highlight: true, relatedProjects: ["drone-monitoring"] },
      { name: "JavaScript", highlight: true, relatedProjects: ["ecommerce"] },
      { name: "HTML", highlight: false, relatedProjects: ["ecommerce"] },
      { name: "CSS", highlight: false, relatedProjects: ["ecommerce"] },
    ],
  },
  {
    title: "AI / ML",
    description: "Deep learning, neural architectures, computer vision, and predictive modeling.",
    skills: [
      { name: "TensorFlow", highlight: true, relatedProjects: ["pyroeye", "nidar", "research"] },
      { name: "PyTorch", highlight: true, relatedProjects: ["research"] },
      { name: "Scikit-Learn", highlight: true, relatedProjects: ["cinematch", "research"] },
      { name: "OpenCV", highlight: true, relatedProjects: ["pyroeye"] },
      { name: "YOLO", highlight: true, relatedProjects: ["pyroeye"] },
    ],
  },
  {
    title: "Frontend",
    description: "Modern component-driven web interfaces with rich state management.",
    skills: [
      { name: "React.js", highlight: true, relatedProjects: ["ecommerce"] },
    ],
  },
  {
    title: "Backend",
    description: "High-throughput server infrastructure, microservices, and real-time streaming.",
    skills: [
      { name: "Spring Boot", highlight: true, relatedProjects: ["drone-monitoring"] },
      { name: "Node.js", highlight: true, relatedProjects: ["ecommerce"] },
      { name: "Express.js", highlight: false, relatedProjects: ["ecommerce"] },
      { name: "REST APIs", highlight: true, relatedProjects: ["drone-monitoring", "ecommerce"] },
      { name: "WebSocket", highlight: true, relatedProjects: ["drone-monitoring"] },
      { name: "JWT", highlight: false, relatedProjects: ["drone-monitoring", "ecommerce"] },
    ],
  },
  {
    title: "Databases",
    description: "Relational and document data storage, schema modeling, and indexing.",
    skills: [
      { name: "MongoDB", highlight: true, relatedProjects: ["ecommerce"] },
      { name: "MySQL", highlight: true, relatedProjects: ["drone-monitoring"] },
    ],
  },
  {
    title: "Technologies",
    description: "Domain-specific engineering disciplines and emerging technologies.",
    skills: [
      { name: "Machine Learning", highlight: true, relatedProjects: ["pyroeye", "cinematch", "research"] },
      { name: "Computer Vision", highlight: true, relatedProjects: ["pyroeye", "nidar"] },
      { name: "IoT", highlight: true, relatedProjects: ["pyroeye", "nidar"] },
      { name: "Cyber Security", highlight: true },
      { name: "Blockchain", highlight: true },
    ],
  },
  {
    title: "Tools",
    description: "Developer tooling, analytics, version control, and data science IDEs.",
    skills: [
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "VS Code", highlight: true },
      { name: "Jupyter Lab", highlight: false },
      { name: "PyCharm", highlight: false },
      { name: "Google Colab", highlight: false },
      { name: "Tableau", highlight: false },
      { name: "Power BI", highlight: false },
    ],
  },
  {
    title: "Operating Systems",
    description: "Platforms and embedded distributions for development and edge deployment.",
    skills: [
      { name: "Windows", highlight: false },
      { name: "Linux", highlight: true, relatedProjects: ["nidar", "pyroeye"] },
    ],
  },
];
