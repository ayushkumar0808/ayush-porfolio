import {
  MessageCircle,
  ShoppingCart,
  Sparkles,
  CalendarDays,
} from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiGit,
  SiGithub,
  SiMysql,
} from "react-icons/si";

/* ================= SKILLS DATA ================= */

export const technicalSkills = [
  { name: "C", icon: <SiC />, level: 90 },
  { name: "C++", icon: <SiCplusplus />, level: 85 },
  { name: "Java", icon: <SiOpenjdk />, level: 88 },
  { name: "JavaScript", icon: <SiJavascript />, level: 70 },
  { name: "TypeScript", icon: <SiTypescript />, level: 65 },
  { name: "Python", icon: <SiPython />, level: 75 },
  { name: "React", icon: <SiReact />, level: 92 },
  { name: "HTML", icon: <SiHtml5 />, level: 95 },
  { name: "CSS", icon: <SiCss3 />, level: 90 },
  { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
  { name: "Express", icon: <SiExpress />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb />, level: 78 },
  { name: "Git", icon: <SiGit />, level: 85 },
  { name: "GitHub", icon: <SiGithub />, level: 88 },
  { name: "MySQL", icon: <SiMysql />, level: 80 },
];

// Flattened pills shown under the hero intro section, derived from the technicalSkills array.
export const heroPills = [
  "HTML/CSS",
  "JavaScript",
  "MERN Stack",
  "React.js",
  "Node.js",
  "MongoDB",
  "SQL",
  "Python",
  "Git",
];

export const totalSkillCount = technicalSkills.length;

export function getLevelLabel(level: number) {
  if (level >= 85) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Beginner";
}

export const softSkills = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Adaptability",
  "Time Management",
  "Decision Making",
  "Confidence",
  "Creativity",
  "Leadership",
  "Work Ethic",
  "Self-Motivation",
];

/* ================= PROJECTS ================= */

export const projects = [
  {
    name: "Real Time Chat App",
    link: "https://real-time-chat-app-chi-five.vercel.app/",
    desc: "Real-time messaging platform with authentication and live communication.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240223113231/Online-Chat-Application.webp",
  },
  {
    name: "Nexora AI",
    link: "https://nexora-ai-kappa-topaz.vercel.app/",
    desc: "Intelligent AI chat companion with secure Google authentication.",
    tags: ["Next.js", "AI", "Auth"],
    image:
      "https://img.magnific.com/free-vector/cute-friendly-robot-with-welcome-speech-bubble_107791-29910.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "College Event Management Portal",
    link: "https://college-event-management-portal-gules.vercel.app/",
    desc: "Portal to create, manage, and track college events with role-based access.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://image.slidesharecdn.com/collegeeventmanagement-presentation-210413110429/75/College-Event-Management-Presentation-1-2048.jpg",
  },
  {
    name: "Ecommerce Website",
    link: "https://ecommercewebsite-orcin-pi.vercel.app/",
    desc: "Modern ecommerce web app with cart and responsive UI.",
    tags: ["React", "Tailwind", "E-commerce"],
    image:
      "https://img.magnific.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150321996.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

/* ================= EDUCATION ================= */

export const education = [
  {
    school: "M.S. Ramaiah University of Applied Sciences",
    degree: "Master of Computer Application",
    years: "2025 – Ongoing",
    location: "Bengaluru, Karnataka",
  },
  {
    school: "Ranchi University, Ranchi",
    degree: "Bachelor of Computer Application",
    years: "2021 – 2024",
    location: "Ranchi, Jharkhand",
  },
  {
    school: "St. Xavier's College",
    degree: "Intermediate, Percentage: 75%",
    years: "2018 – 2020",
    location: "Ranchi, Jharkhand",
  },
];

/* ================= CERTIFICATIONS ================= */

export const certifications = [
  {
    title: "HTML Certification",
    issuer: "KnowledgeGate",
    date: "2026",
    link: "https://www.knowledgegate.ai/certificate/84A7CBC7",
  },
  {
    title: "CSS Certification",
    issuer: "KnowledgeGate",
    date: "2026",
    link: "https://www.knowledgegate.ai/certificate/B87BE3CB",
  },
  {
    title: "JavaScript Certification",
    issuer: "KnowledgeGate",
    date: "2026",
    link: "https://www.knowledgegate.ai/certificate/1DDDA2C6",
  },
  {
    title: "Web Development Certification",
    issuer: "Udemy",
    date: "2026",
    link: "",
  },
];

/* ================= TECH PULSE (static preview) ================= */

export const techPulse = [
  {
    title: "Next.js 15 adoption keeps climbing among full-stack teams",
    tag: "Frontend",
  },
  {
    title: "MongoDB Atlas rolls out new vector search improvements",
    tag: "Backend",
  },
  {
    title: "Socket.io remains the go-to for real-time app features",
    tag: "Real-time",
  },
  {
    title: "Docker Compose v3 workflows simplify local dev setups",
    tag: "DevOps",
  },
  {
    title: "TypeScript continues to lead new project starts on GitHub",
    tag: "Languages",
  },
];

/* ================= CHATBOT  ================= */

export const BOT_NAME = "Kiro";
export const BOT_AVATAR = "/kiro-avatar.jpg";

export const QUICK_PROMPTS = [
  "Who is Ayush?",
  "What projects has Ayush built?",
  "What are his skills?",
  "How can I contact him?",
  "What's his education?",
  "Who are you?",
];

export function getBotReply(question: string): string {
  const q = question.toLowerCase();

  if (/(who is ayush|about ayush|tell me about ayush)/.test(q)) {
    return "Ayush Kumar is a passionate developer who loves building things with code and solving challenging problems. He's currently pursuing his MCA at M.S. Ramaiah University of Applied Sciences and sharpening his skills in DSA and modern web development, working toward becoming a top-tier developer.";
  }
  if (/(who are you|what are you|your name)/.test(q)) {
    return `I'm ${BOT_NAME}, Ayush's virtual assistant! I'm here to answer questions about his projects, skills, education, and how to get in touch with him.`;
  }
  if (/(project|built|made|work)/.test(q)) {
    const names = projects.map((p) => p.name).join(", ");
    return `Ayush has built ${projects.length} projects including ${names}. Check the Projects section above for live links!`;
  }
  if (/(skill|tech|stack|language|know)/.test(q)) {
    return `Ayush works across languages, frontend, and backend technologies. His strongest areas are React, Node.js, and Java — scroll to the Skills section for the full breakdown.`;
  }
  if (/(contact|reach|email|phone|hire|whatsapp)/.test(q)) {
    return "You can reach Ayush at kayush3647@gmail.com or +91 6207279496, or just use the contact form below!";
  }
  if (/(education|degree|college|university|study)/.test(q)) {
    return "Ayush is pursuing his MCA at M.S. Ramaiah University of Applied Sciences, after a BCA from Ranchi University.";
  }
  if (/(hi|hello|hey|namaste)/.test(q)) {
    return "Hey! I'm here to help you learn more about Ayush. Ask me about his projects, skills, or how to get in touch.";
  }
  return "I'm a simple assistant so I might not catch everything — try asking about Ayush's projects, skills, education, or contact info!";
}

// Replace with your own Formspree form endpoint (see setup note in Contact.tsx).
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/myegvvak";
