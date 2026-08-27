export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "sports" | "creative" | "community" | "technical";
  badge: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "cricket",
    title: "Cricket",
    subtitle: "District Level Representative",
    description: "Represented at the District Level, developing deep resilience, tactical decision-making, and high-pressure team leadership.",
    category: "sports",
    badge: "District Level",
  },
  {
    id: "drawing",
    title: "Drawing & Visual Arts",
    subtitle: "2nd Place District Level Competition",
    description: "Secured 2nd Place in a competitive District Level Drawing Competition, honing meticulous visual aesthetics and spatial composition.",
    category: "creative",
    badge: "2nd Place",
  },
  {
    id: "gaming",
    title: "University Gaming Guild",
    subtitle: "Official Member",
    description: "Active official member of the University Gaming Guild, analyzing game mechanics, strategy optimization, and interactive systems.",
    category: "community",
    badge: "Official Member",
  },
  {
    id: "urekon",
    title: "UREKON Techno-Management Fest",
    subtitle: "Volunteer Coordinator",
    description: "Volunteered at UREKON, IEM Kolkata's premier techno-management festival, coordinating technical event logistics and attendee operations.",
    category: "community",
    badge: "Volunteer Leader",
  },
  {
    id: "hackathons",
    title: "Hackathons & Technical Events",
    subtitle: "Participant & Innovator",
    description: "Actively participated in hackathons, engineering project presentations, and competitive technical problem-solving showcases.",
    category: "technical",
    badge: "Innovator",
  },
];
