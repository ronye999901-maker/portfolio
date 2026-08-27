export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  mentors?: string;
  description: string[];
  technologies: string[];
  researchDetails?: {
    topic: string;
    focus: string[];
    pipeline: string[];
  };
  highlight?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "iedc-research-intern",
    title: "Research Internship",
    role: "Research Intern",
    organization: "Innovation & Entrepreneurship Development Cell (IEDC), IEM, Kolkata",
    location: "Kolkata, India",
    period: "Research Project",
    mentors: "Prof. (Dr.) Siddhartha Roy and Prof. Rangan Sarkar",
    description: [
      "Investigated cutting-edge semiconductor modeling in 'Fabrication of GNR MOSFET using Machine Learning'.",
      "Engineered machine learning models for fabrication parameter optimization and device characteristic simulation.",
      "Predicted nano-ribbon material behavior and electronic conductance curves using trained neural architectures.",
      "Accelerated semiconductor design iterations by substituting computational TCAD sweeps with fast ML surrogate models."
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "Material Simulation"],
    researchDetails: {
      topic: "Fabrication of GNR MOSFET using Machine Learning",
      focus: [
        "AI models for fabrication parameter optimization",
        "Material behavior prediction across graphene nano-ribbons",
        "Device characteristic simulation and I-V curve modeling"
      ],
      pipeline: [
        "Fabrication Parameters",
        "Machine Learning",
        "Parameter Optimization",
        "Material Behavior Prediction",
        "Device Simulation"
      ]
    },
    highlight: true,
  },
  {
    id: "btech-cse",
    title: "Academic Milestone",
    role: "B.Tech in Computer Science & Engineering (4th Year Undergrad)",
    organization: "Institute of Engineering & Management (IEM), Kolkata",
    location: "Kolkata, India",
    period: "Currently Pursuing (4th Year)",
    description: [
      "Currently in final (4th) year with a strong cumulative grade point average of 8.15 / 10.",
      "Specializing in Cyber Security, Blockchain Technology, and Internet of Things (IoT).",
      "Designing and deploying engineering systems spanning autonomous UAVs, computer vision, and distributed backends."
    ],
    technologies: ["Computer Science", "Algorithms", "IoT", "Cyber Security", "Blockchain"],
    highlight: false,
  }
];
