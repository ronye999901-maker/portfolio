export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "AI / ML" | "WEB DEVELOPMENT" | "BACKEND" | "IOT" | "DRONE" | "DATA SCIENCE";
  allCategories: string[];
  description: string;
  technologies: string[];
  features: string[];
  architectureSteps: string[];
  keyResult: string;
  stats?: { label: string; value: string }[];
  problem: string;
  objective: string;
  implementation: string;
  challenges: string;
  futureImprovements: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  heroGradient: string;
}

export const projectsData: Project[] = [
  {
    id: "pyroeye",
    slug: "pyroeye",
    number: "01",
    title: "PYROEYE",
    subtitle: "AI-Powered Forest Fire Detection System",
    category: "AI / ML",
    allCategories: ["AI / ML", "IOT", "DRONE"],
    description: "Developed an AI-powered drone system for early forest fire detection using thermal cameras and environmental sensors.",
    technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "IoT"],
    features: [
      "Real-time wildfire monitoring",
      "Computer vision detection pipeline",
      "Intelligent fire & smoke identification",
      "Thermal camera integration",
      "Environmental sensor telemetry"
    ],
    architectureSteps: [
      "Thermal Camera",
      "Sensor Data",
      "Image Processing",
      "AI Detection",
      "Fire Detection",
      "Alert",
      "Monitoring"
    ],
    keyResult: "Autonomous thermal anomaly detection at low latencies with environmental telemetry fusion.",
    stats: [
      { label: "Vision Latency", value: "< 90ms" },
      { label: "Sensors", value: "Thermal + Gas" },
      { label: "Detection Scope", value: "Fire + Smoke" }
    ],
    problem: "Wildfires expand at catastrophic speeds within minutes of ignition. Satellite passes take hours and manual lookouts have critical blindspots, resulting in delayed intervention and massive ecosystem destruction.",
    objective: "Engineer an autonomous aerial edge-detection pipeline fusing infrared thermal imaging with lightweight YOLO neural inference to isolate flare-ups before they spread.",
    implementation: "Constructed an end-to-end Python pipeline running on embedded compute that ingests continuous thermal frames, applies noise filtering, runs YOLO object detection for flame centroids, and dispatches automated telemetry triggers.",
    challenges: "Calibrating thermal threshold curves against environmental solar reflections and minimizing false positives caused by ambient ground heat.",
    futureImprovements: "Autonomous multi-UAV mesh coordination, edge swarm communications, and direct integration with forest department emergency dispatch systems.",
    githubUrl: "https://github.com/sayandas/pyroeye",
    liveDemoUrl: "https://pyroeye-demo.vercel.app",
    featured: true,
    heroGradient: "from-amber-500/20 via-red-500/10 to-transparent",
  },
  {
    id: "nidar",
    slug: "nidar",
    number: "02",
    title: "NIDAR",
    subtitle: "NIDAR Drone Research Project",
    category: "DRONE",
    allCategories: ["DRONE", "AI / ML", "IOT"],
    description: "Architected a UAV monitoring system with real-time video processing at 15+ FPS.",
    technologies: ["Raspberry Pi 5", "LoRa E5 Mini", "GPS", "TensorFlow"],
    features: [
      "Real-time edge video processing at 15+ FPS",
      "Sub-GHz LoRa E5 Mini long-range telemetry",
      "GPS waypoint navigation & geospatial logging",
      "TensorFlow embedded machine learning models",
      "Disaster response decision support"
    ],
    architectureSteps: [
      "Raspberry Pi 5",
      "GPS & LoRa Telemetry",
      "TensorFlow Edge AI",
      "15+ FPS Video Processing",
      "Command Center",
      "Disaster Response Action"
    ],
    keyResult: "Achieved 93% detection accuracy and improved disaster response efficiency by 30%.",
    stats: [
      { label: "Detection Accuracy", value: "93%" },
      { label: "Frame Rate", value: "15+ FPS" },
      { label: "Efficiency Gain", value: "+30%" }
    ],
    problem: "Natural catastrophes often sever cellular towers and ground access roads, blinding rescue teams and delaying critical medical supplies or emergency evacuations.",
    objective: "Design a resilient UAV hardware and software architecture running localized AI on a Raspberry Pi 5 with low-power LoRa mesh relays that operate completely off-grid.",
    implementation: "Deployed quantized TensorFlow models for survivor and structural hazard detection on the Raspberry Pi 5 with multithreaded camera buffers, transmitting compressed coordinate payloads via LoRa E5 Mini to mobile rescue field stations.",
    challenges: "Achieving steady 15+ FPS video inference on edge embedded ARM architecture while keeping thermal throttling and battery draw within strict flight envelopes.",
    futureImprovements: "Multi-drone ad-hoc routing protocols, real-time 3D topographical map stitching, and automated emergency payload drop mechanisms.",
    githubUrl: "https://github.com/sayandas/nidar",
    liveDemoUrl: "https://nidar-research.vercel.app",
    featured: true,
    heroGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "cinematch",
    slug: "cinematch",
    number: "03",
    title: "CINEMATCH",
    subtitle: "Predictive Movie Analytics System",
    category: "DATA SCIENCE",
    allCategories: ["DATA SCIENCE", "AI / ML"],
    description: "Designed and implemented a data-driven movie recommendation system using content-based and collaborative filtering.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "Content-based metadata similarity ranking",
      "Collaborative filtering user cluster modeling",
      "Cosine similarity matrix vectorization",
      "K-Nearest Neighbors (KNN) distance calculation",
      "Interactive data analytics visualization"
    ],
    architectureSteps: [
      "Movie Input",
      "Feature Processing",
      "Similarity Calculation",
      "Recommendation Model",
      "Recommended Movies"
    ],
    keyResult: "Sub-second similarity querying across expansive metadata catalogs with high recommendation relevance.",
    stats: [
      { label: "Methods", value: "Cosine + KNN" },
      { label: "Engine Type", value: "Hybrid Filtering" },
      { label: "Latency", value: "< 25ms" }
    ],
    problem: "Massive digital streaming libraries overwhelm users with content overload, causing viewer friction and diminished discovery of niche cinematic gems.",
    objective: "Build a dual-paradigm recommendation engine combining vectorized metadata features with user-item collaborative affinities to deliver precise ranked predictions.",
    implementation: "Engineered feature extraction pipelines in Scikit-Learn utilizing TF-IDF representations for genres, cast, and summaries, paired with cosine distance matrices and KNN neighbor lookups.",
    challenges: "Handling matrix sparsity and calculating high-dimensional vector spaces efficiently without unbounded memory overhead.",
    futureImprovements: "Neural matrix factorization, deep autoencoders for latent feature extraction, and real-time session-based reinforcement learning.",
    githubUrl: "https://github.com/sayandas/cinematch",
    liveDemoUrl: "https://cinematch-analytics.vercel.app",
    featured: true,
    heroGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    id: "drone-monitoring",
    slug: "drone-monitoring",
    number: "04",
    title: "Drone Monitoring & Emergency Response Backend System",
    subtitle: "Real-time UAV Telemetry & Emergency Coordination Engine",
    category: "BACKEND",
    allCategories: ["BACKEND", "DRONE", "IOT"],
    description: "Developed a scalable backend system for real-time UAV monitoring and emergency response coordination.",
    technologies: ["Java", "Spring Boot", "MySQL", "WebSocket", "REST APIs", "JWT"],
    features: [
      "High-frequency drone telemetry ingestion",
      "Real-time GPS tracking & geo-fence breach alerts",
      "Low-latency bi-directional WebSocket streaming",
      "JWT-secured role-based REST endpoints",
      "Scalable relational MySQL schema design"
    ],
    architectureSteps: [
      "Drone",
      "Telemetry / GPS / Sensors",
      "REST + WebSocket",
      "Spring Boot",
      "MySQL",
      "Monitoring / Alerts"
    ],
    keyResult: "Reliable sub-50ms WebSocket telemetry broadcast and synchronized multi-drone state management.",
    stats: [
      { label: "Throughput", value: "Real-time" },
      { label: "Auth", value: "JWT RBAC" },
      { label: "Protocol", value: "WS + REST" }
    ],
    problem: "Emergency drone fleets require instant situational awareness with deterministic telemetry guarantees. Standard HTTP polling introduces unmanageable delay and drops mission logs during critical flight maneuvers.",
    objective: "Architect a robust Spring Boot microservice infrastructure leveraging WebSocket streams and transactional relational storage to manage live drone positions, sensor feeds, and emergency dispatch alerts.",
    implementation: "Structured Spring Boot REST and WebSocket handlers with JWT filter interceptors, storing time-series telemetry into an indexed MySQL database with custom geospatial coordinate mapping.",
    challenges: "Handling network dropouts gracefully with automated client reconnect buffers and reconciling out-of-order sensor packets.",
    futureImprovements: "Apache Kafka integration for massive horizontal telemetry event streaming and Redis caching for sub-millisecond geofence lookups.",
    githubUrl: "https://github.com/sayandas/drone-monitoring-backend",
    liveDemoUrl: "https://drone-backend-api.vercel.app",
    featured: true,
    heroGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    number: "05",
    title: "E-Commerce Website",
    subtitle: "Swiggy Clone - Full-Stack Platform",
    category: "WEB DEVELOPMENT",
    allCategories: ["WEB DEVELOPMENT", "BACKEND"],
    description: "Engineered a responsive full-stack food delivery and e-commerce web platform with dynamic shopping cart and real-time state management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: [
      "Secure user authentication & session management",
      "Dynamic shopping cart with optimistic price calculations",
      "Custom RESTful APIs for multi-restaurant menus",
      "Mobile-first responsive interface design",
      "Structured checkout and order fulfillment lifecycle"
    ],
    architectureSteps: [
      "React Client UI",
      "RESTful API Layer",
      "Express / Node Middleware",
      "MongoDB Database",
      "Order & Cart State"
    ],
    keyResult: "Seamless mobile-first ordering experience deployed on Vercel and Render with optimized client bundle size.",
    stats: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Deployment", value: "Vercel + Render" },
      { label: "Design", value: "Mobile-First" }
    ],
    problem: "Digital food delivery services demand instantaneous cart recalculations, responsive fluid navigation on mobile screens, and resilient API handling under volatile network conditions.",
    objective: "Develop a high-performance Swiggy clone replicating consumer-grade e-commerce UX, decoupled REST API services, and reactive state management.",
    implementation: "Engineered a React SPA with Context API for state management, connected to an Express/Node.js API that communicates with a MongoDB cluster for restaurant catalogs and user orders.",
    challenges: "Maintaining zero layout shift across dynamic restaurant list loading and synchronizing complex multi-item cart options.",
    futureImprovements: "Live driver location tracking with Socket.IO and automated SMS order confirmation relays.",
    githubUrl: "https://github.com/sayandas/ecommerce-swiggy-clone",
    liveDemoUrl: "https://swiggy-clone-sayan.vercel.app",
    featured: true,
    heroGradient: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
];
