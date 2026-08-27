export interface SocialProfile {
  id: string;
  name: string;
  username: string;
  url: string;
  description: string;
  icon: "linkedin" | "github" | "instagram" | "facebook" | "x" | "mail" | "phone";
  category: "professional" | "code" | "creative" | "social" | "direct";
  primary?: boolean;
}

export const socialProfiles: SocialProfile[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    username: "sayan-das-b3739928a",
    url: "https://www.linkedin.com/in/sayan-das-b3739928a",
    description: "Professional network, engineering career updates, and research discussions.",
    icon: "linkedin",
    category: "professional",
    primary: true,
  },
  {
    id: "github",
    name: "GitHub",
    username: "ronye999901-maker",
    url: "https://github.com/ronye999901-maker",
    description: "Code, open-source repositories, system architectures, and engineering projects.",
    icon: "github",
    category: "code",
    primary: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    username: "@sayan_das",
    url: "https://instagram.com/",
    description: "Personal and creative side, visual arts, and engineering experiments.",
    icon: "instagram",
    category: "creative",
  },
  {
    id: "facebook",
    name: "Facebook",
    username: "Sayan Das",
    url: "https://facebook.com/",
    description: "Social profile and community connections.",
    icon: "facebook",
    category: "social",
  },
  {
    id: "x",
    name: "X / Twitter",
    username: "@sayan_das_dev",
    url: "https://x.com/",
    description: "Tech discourse, AI/ML insights, robotics, and developer thoughts.",
    icon: "x",
    category: "social",
  },
  {
    id: "email",
    name: "Email",
    username: "04sayandas@gmail.com",
    url: "mailto:04sayandas@gmail.com",
    description: "Direct email for inquiries, collaborations, and engineering opportunities.",
    icon: "mail",
    category: "direct",
    primary: true,
  },
  {
    id: "phone",
    name: "Phone",
    username: "+91-7872872833",
    url: "tel:+917872872833",
    description: "Direct contact line for recruitment and project collaboration.",
    icon: "phone",
    category: "direct",
  },
];
