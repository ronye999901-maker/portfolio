export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "AI / ML" | "WEB DEVELOPMENT" | "BACKEND" | "IOT" | "DRONE" | "DATA SCIENCE" | "E-COMMERCE";
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
    implementation: "Designed a multi-modal computer vision architecture merging FLIR thermal streams with optical YOLOv8 bounding boxes, cross-referencing temperature threshold matrices to prevent false positives.",
    challenges: "Minimizing false positives caused by solar reflections on water bodies and hot rocky terrain in dense canopy zones.",
    futureImprovements: "Edge mesh network coordination with automated drone fleet dispatch and solar-recharging base stations.",
    githubUrl: "https://github.com/ronye999901-maker/pyroeye",
    liveDemoUrl: "https://pyroeye-demo.vercel.app",
    featured: true,
    heroGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "nidar",
    slug: "nidar",
    number: "02",
    title: "NIDAR",
    subtitle: "NIDAR Drone Research Project",
    category: "DRONE",
    allCategories: ["DRONE", "AI / ML", "IOT"],
    description: "Conducted research on autonomous UAV control systems, edge AI processing, and hardware integration.",
    technologies: ["Drone Tech", "Raspberry Pi", "Edge AI", "Computer Vision", "LoRa"],
    features: [
      "Hardware-software integration pipeline",
      "Autonomous flight controller integration",
      "Low-power LoRa long-range communication",
      "Lightweight edge computer vision inference",
      "Fail-safe return-to-launch protocols"
    ],
    architectureSteps: [
      "Sensors & GPS",
      "Raspberry Pi Edge",
      "Flight Controller",
      "LoRa Telemetry",
      "Ground Station",
      "Dashboard"
    ],
    keyResult: "Sub-100ms telemetry latency over a 3.5km operational radius without cellular infrastructure.",
    stats: [
      { label: "Range", value: "3.5 km" },
      { label: "Edge Hardware", value: "Raspberry Pi 5" },
      { label: "Efficiency Gain", value: "+30%" }
    ],
    problem: "Natural catastrophes often sever cellular towers and ground access roads, blinding rescue teams and delaying critical medical supplies or emergency evacuations.",
    objective: "Design a resilient UAV hardware and software architecture running localized AI on a Raspberry Pi 5 with low-power LoRa mesh relays that operate completely off-grid.",
    implementation: "Deployed quantized TensorFlow models for survivor and structural hazard detection on the Raspberry Pi 5 with multithreaded camera buffers, transmitting compressed coordinate payloads via LoRa E5 Mini to mobile rescue field stations.",
    challenges: "Achieving steady 15+ FPS video inference on edge embedded ARM architecture while keeping thermal throttling and battery draw within strict flight envelopes.",
    futureImprovements: "Multi-drone ad-hoc routing protocols, real-time 3D topographical map stitching, and automated emergency payload drop mechanisms.",
    githubUrl: "https://github.com/ronye999901-maker/nidar",
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
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Flask"],
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
    githubUrl: "https://github.com/ronye999901-maker/cinematch",
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
    githubUrl: "https://github.com/ronye999901-maker/drone-monitoring-backend",
    liveDemoUrl: "https://drone-backend-api.vercel.app",
    featured: true,
    heroGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    id: "pricebite",
    slug: "pricebite",
    number: "05",
    title: "PriceBite",
    subtitle: "Smart Grocery Price Comparison & Basket Optimization Platform",
    category: "E-COMMERCE",
    allCategories: ["E-COMMERCE", "WEB DEVELOPMENT"],
    description: "Engineered a high-performance grocery price comparison and multi-store basket optimization platform built with React 19, TypeScript, Vite, Tailwind CSS, and Supabase.",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Recharts", "Lucide React"],
    features: [
      "Real-time cross-vendor grocery price tracking & comparison",
      "Intelligent multi-store basket optimizer for maximum savings",
      "Historical price volatility & inflation trend analytics",
      "Supabase relational data store & secure authentication",
      "Internationalization (i18n) & responsive fluid UI"
    ],
    architectureSteps: [
      "Product Catalog",
      "Price Ingestion Engine",
      "Supabase Backend",
      "Basket Optimizer",
      "Recharts Analytics",
      "User Dashboard"
    ],
    keyResult: "Delivers sub-100ms multi-vendor cart optimization calculations with interactive price volatility visual analytics.",
    stats: [
      { label: "Frontend", value: "React 19 + Vite" },
      { label: "Database", value: "Supabase" },
      { label: "Optimization", value: "Multi-Store" }
    ],
    problem: "Fragmented online grocery retailers and volatile pricing make finding the cheapest total basket across multiple vendors time-consuming and inefficient for consumers.",
    objective: "Build an intuitive, lightning-fast price comparison and basket optimizer that calculates the lowest combined order cost across stores while visualizing price trends.",
    implementation: "Built with React 19 and TypeScript, powered by Vite for instant HMR. Integrated Supabase for persistent price feeds, user carts, and relational product hierarchies, visualized through Recharts.",
    challenges: "Calculating combinatorial basket distribution across split vendors while accounting for individual store minimum order thresholds and delivery charges.",
    futureImprovements: "Automated scheduled web scrapers, receipt OCR scanner for offline grocery bills, and push notification alerts for price drops.",
    githubUrl: "https://github.com/ronye999901-maker/pricebite",
    liveDemoUrl: "https://pricebite.vercel.app",
    featured: true,
    heroGradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    id: "flipkart-clone",
    slug: "flipkart-clone",
    number: "06",
    title: "Flipkart MERN Clone",
    subtitle: "Full-Stack E-Commerce & Payment Engine",
    category: "E-COMMERCE",
    allCategories: ["E-COMMERCE", "WEB DEVELOPMENT", "BACKEND"],
    description: "Engineered a production-ready MERN stack e-commerce web platform replicating Flipkart's end-to-end shopping experience, user authentication, and payment gateway workflows.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Paytm Gateway", "JWT", "REST APIs"],
    features: [
      "Secure user authentication (JWT + Bcrypt) & session management",
      "Comprehensive product catalog with multi-attribute filtering & search",
      "Dynamic shopping cart with optimistic price calculations",
      "Paytm / Stripe payment gateway integration with webhooks",
      "Admin order management, order tracking, and inventory fulfillment"
    ],
    architectureSteps: [
      "React UI + Redux Store",
      "Express REST API",
      "JWT Middleware",
      "MongoDB Database",
      "Payment Gateway",
      "Order Fulfillment"
    ],
    keyResult: "Full end-to-end purchase lifecycle with sub-second catalog search and secure payment verification.",
    stats: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Payments", value: "Paytm / Stripe" },
      { label: "State", value: "Redux Toolkit" }
    ],
    problem: "Building a production-ready e-commerce platform requires seamless synchronization between real-time product inventories, secure checkout pipelines, state management, and reliable payment callbacks.",
    objective: "Develop a high-performance Flipkart clone replicating enterprise e-commerce UX, decoupled REST API services, transactional payment workflows, and reactive state management.",
    implementation: "Structured a decoupled React SPA with Redux for global cart state, connected to an Express/Node.js API backend that interfaces with MongoDB Atlas and integrates Paytm payment checksum validation.",
    challenges: "Ensuring idempotency during checkout transactions and preventing race conditions during simultaneous inventory deductions.",
    futureImprovements: "Redis caching layer for trending products, recommendation engine integration, and automated invoice PDF generation.",
    githubUrl: "https://github.com/ronye999901-maker/flipkart-mern",
    liveDemoUrl: "https://flipkart-mern-sayan.vercel.app",
    featured: true,
    heroGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
];
