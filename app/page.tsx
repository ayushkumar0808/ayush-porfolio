"use client";

import type { FormEvent } from "react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink,
  GraduationCap,
  Send,
  MapPin,
  Phone,
  MessageCircle,
  Menu,
  X,
  Download,
  ShoppingCart,
  Sparkles,
  CalendarDays,
  Users,
  Loader2,
  Award,
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
} from "react-icons/si";

/* ================= SKILLS DATA ================= */

const technicalSkills = [
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
];

// Flattened pills shown under the hero intro (mirrors the reference layout)
const heroPills = [
  "HTML/CSS",
  "JavaScript",
  "MERN Stack",
  "React",
  "Node.js",
  "MongoDB",
  "SQL",
  "Python",
  "Git",
];

const totalSkillCount = technicalSkills.length;

// Converts a numeric skill level into the text label the reference design uses
function getLevelLabel(level: number) {
  if (level >= 85) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Beginner";
}

const softSkills = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Adaptability",
  "Time Management",
];

/* ================= PROJECTS ================= */

const projects = [
  {
    name: "Real Time Chat App",
    link: "https://real-time-chat-app-chi-five.vercel.app/",
    desc: "Real-time messaging platform with authentication and live communication.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    icon: <MessageCircle size={48} />,
  },
  {
    name: "Ecommerce Website",
    link: "https://ecommercewebsite-orcin-pi.vercel.app/",
    desc: "Modern ecommerce web app with cart and responsive UI.",
    tags: ["React", "Tailwind", "E-commerce"],
    icon: <ShoppingCart size={48} />,
  },
  {
    name: "Nexora AI",
    link: "https://nexora-ai-kappa-topaz.vercel.app/",
    desc: "Intelligent AI chat companion with secure Google authentication.",
    tags: ["Next.js", "AI", "Auth"],
    icon: <Sparkles size={48} />,
  },
  {
    name: "College Event Management Portal",
    link: "https://college-event-management-portal-gules.vercel.app/",
    desc: "Portal to create, manage, and track college events with role-based access.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    icon: <CalendarDays size={48} />,
  },
];

/* ================= EDUCATION ================= */

const education = [
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
/* Only one certificate has a live link right now — add more entries (with
   their own `link`) as they're earned. Leave `link` empty for a cert with
   no public link yet. */

const certifications = [
  {
    title: "Web Development Certification",
    issuer: "KnowledgeGate",
    date: "2025",
    link: "https://www.knowledgegate.ai/certificate/84A7CBC7",
  },
];

/* ================= TECH PULSE (static preview) ================= */
/* Swap this static list for a live feed later if you wire up an API. */

const techPulse = [
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

/* ================= CHATBOT (canned Q&A, no backend needed) ================= */

const BOT_NAME = "Kiro";
const BOT_AVATAR = "/kiro-avatar.jpg";

const QUICK_PROMPTS = [
  "What projects has Ayush built?",
  "What are his skills?",
  "How can I contact him?",
  "What's his education?",
];

function getBotReply(question: string): string {
  const q = question.toLowerCase();

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

/* ================= PAGE ================= */

// Replace with your own Formspree form endpoint (see setup note below the component).
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [menuOpen, setMenuOpen] = useState(false);

  // ---- navbar show/hide on scroll ----
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current) {
        setNavVisible(false); // scrolling down -> hide
      } else {
        setNavVisible(true); // scrolling up -> show
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- chatbot state ----
  const [chatOpen, setChatOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I'm Kiro — Ayush's assistant. Ask me about his projects, skills, or how to reach him!",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowGreeting(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, botTyping]);

  const sendChat = (raw: string) => {
    const text = raw.trim();
    if (!text || botTyping) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setChatInput("");
    setBotTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getBotReply(text) }]);
      setBotTyping(false);
    }, 650);
  };

  const toggleChat = () => {
    setChatOpen((v) => !v);
    setShowGreeting(false);
    setShowBadge(false);
  };

  // ---- cursor trail (desktop only) ----
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef(
    Array.from({ length: 8 }, () => ({ x: -100, y: -100 }))
  );
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const loop = () => {
      trail.current.unshift({ ...mouse.current });
      if (trail.current.length > 8) trail.current.length = 8;
      trail.current.forEach((pos, i) => {
        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
          el.style.opacity = `${1 - i * 0.12}`;
        }
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <main className="relative text-[#1a1a1a] overflow-x-hidden">
      {/* Global styles for cursor trail + fade-in animation */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        #about, #skills, #projects, #education, #contact {
          scroll-margin-top: 84px;
        }
        @media (max-width: 767px) {
          .cursor-trail { display: none; }
        }
        .trail-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: radial-gradient(circle, #ffffffdd, #f97316cc 30%, #f9731666 60%, transparent);
          box-shadow: 0 0 20px #f9731699, 0 0 34px #f9731644;
          transform: translate3d(-100px, -100px, 0);
          pointer-events: none;
          will-change: transform, opacity;
          mix-blend-mode: screen;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up { animation: fadeInUp 0.35s ease-out; }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-1.5deg) scale(1.02); }
          75% { transform: rotate(1.5deg) scale(1.02); }
        }
        .hover-wiggle {
          transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .hover-wiggle:hover {
          background-color: rgba(249, 115, 22, 0.08);
          border-color: rgba(249, 115, 22, 0.35);
          animation: wiggle 0.4s ease-in-out;
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          15% { transform: scale(1.12); }
          30% { transform: scale(0.97); }
          45% { transform: scale(1.08); }
          60% { transform: scale(1); }
        }
        .heartbeat { animation: heartbeat 1.8s ease-in-out infinite; }
      `}</style>

      {/* Cursor trail - desktop only */}
      <div className="cursor-trail fixed inset-0 z-[60] pointer-events-none hidden md:block">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            ref={(el) => {
              trailRefs.current[i] = el;
            }}
            className="trail-dot"
          />
        ))}
      </div>

      {/* Background images: portrait crop for mobile, landscape crop for desktop.
          Fixed + z-0 so it stays put behind everything while the page scrolls over it. */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <img
          src="/bg-mobile.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top md:hidden"
          loading="eager"
          decoding="sync"
        />
        <img
          src="/bg-desktop.jpg"
          alt=""
          aria-hidden="true"
          className="hidden md:block w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
      </div>

      {/* Everything below sits above the background */}
      <div className="relative z-10">

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-40 bg-transparent transition-transform duration-300 ease-in-out ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <a href="#hero" className="font-bold text-lg tracking-tight">
            {"<"}Ayush{"/>"}
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-orange-500 transition inline-block hover:animate-[wiggle_0.4s_ease-in-out]">About</a>
            <a href="#skills" className="hover:text-orange-500 transition inline-block hover:animate-[wiggle_0.4s_ease-in-out]">Skills</a>
            <a href="#projects" className="hover:text-orange-500 transition inline-block hover:animate-[wiggle_0.4s_ease-in-out]">Projects</a>
            <a href="#education" className="hover:text-orange-500 transition inline-block hover:animate-[wiggle_0.4s_ease-in-out]">Education</a>
            <a href="#contact" className="hover:text-orange-500 transition inline-block hover:animate-[wiggle_0.4s_ease-in-out]">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} /> Get Resume
            </a>
            <a href="https://www.linkedin.com/in/ayushkumar0808" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/ayushkumar0808" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="mailto:kayush3647@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-white flex flex-col md:hidden"
        >
          <div className="flex justify-between items-center p-4 border-b border-black/5">
            <span className="font-bold text-lg tracking-tight">
              {"<"}Ayush{"/>"}
            </span>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-7 p-6 text-xl font-medium text-gray-700">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          <div className="px-6">
            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 transition-all"
            >
              <Download size={16} /> Get Resume
            </a>
          </div>

          <div className="mt-auto p-6 border-t border-black/5">
            <p className="text-xs text-gray-400 mb-4">Connect</p>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/ayushkumar0808" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/ayushkumar0808" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="mailto:kayush3647@gmail.com" aria-label="Email">
                <Mail size={22} />
              </a>
              <a href="https://wa.me/916207279496" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              Hi, I'm <span className="text-orange-500">Ayush</span>
            </h1>

            <div className="mt-3 text-2xl md:text-3xl font-semibold text-gray-600 min-h-[1.5em] flex items-center">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Engineer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Real-Time App Builder",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              <span className="inline-block w-[2px] h-[1em] bg-gray-600 ml-1 animate-pulse" />
            </div>

            <p className="text-gray-600 mt-6 max-w-lg leading-relaxed">
              Aspiring Software Developer | Problem Solver | Passionate about
              building scalable systems, real-time applications, and
              beautiful user experiences.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/ayushkumar0808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 transition-all"
              >
                My GitHub Overview 😁
              </a>
              {/* Glass-style secondary button */}
              <a
                href="https://codolio.com/profile/confused.ayush"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 font-semibold px-6 py-3 rounded-full border border-white/40 bg-white/40 backdrop-blur-md shadow-lg hover:bg-white/60 hover:-translate-y-0.5 transition-all"
              >
                My Coding Profile 😑
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="text-sm font-medium bg-white/40 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full text-gray-800 shadow-sm hover:bg-orange-100/70 hover:border-orange-300 hover:-translate-y-0.5 hover:scale-105 transition-all cursor-default"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="hover-wiggle relative w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white">
              <img
                src="/profile.jpg"
                alt="Ayush Kumar"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hover-wiggle absolute top-4 -left-4 bg-white/50 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl px-5 py-3 text-center"
            >
              <p className="text-xl font-bold">
                <CountUp end={totalSkillCount} duration={2} />+
              </p>
              <p className="text-xs text-gray-600">Skills</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="hover-wiggle absolute bottom-6 -right-4 bg-white/50 backdrop-blur-md border border-white/40 rounded-2xl shadow-xl px-5 py-3 text-center"
            >
              <p className="text-xl font-bold">
                <CountUp end={projects.length} duration={2} />+
              </p>
              <p className="text-xs text-gray-600">Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <p className="text-gray-600 leading-relaxed">
          Hi, I'm Ayush Kumar — a passionate developer who loves building
          things with code and solving challenging problems. From fixing
          errors to mastering algorithms, I believe growth comes from
          consistency and curiosity. Currently sharpening my skills in DSA
          and modern web development while working toward my goal of
          becoming a top-tier developer. I enjoy working with real-time
          technologies as well and creating impactful digital experiences.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          My technical toolkit and{" "}
          <span className="text-orange-500">professional attributes</span>
        </motion.h2>

        <div className="flex items-center justify-center gap-4 my-10">
          <span className="h-px w-16 bg-orange-500" />
          <span className="text-orange-500">{"</>"}</span>
          <span className="h-px w-16 bg-orange-200" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm p-6 md:p-10">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-gray-800">
              <span className="text-orange-500">{"</>"}</span> Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="hover-wiggle p-5 rounded-2xl bg-gray-50/70 border border-black/5"
                >
                  <span className="text-2xl text-orange-500 mb-3 block">
                    {skill.icon}
                  </span>
                  <p className="font-semibold">{skill.name}</p>
                  <p className="text-sm text-gray-400">
                    {getLevelLabel(skill.level)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm p-6 md:p-10">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-gray-800">
              <Users className="text-orange-500" size={22} /> Soft Skills
            </h3>
            <div className="space-y-5">
              {softSkills.map((skill) => (
                <div key={skill} className="hover-wiggle flex items-center gap-3 rounded-xl px-2 py-1 -mx-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Featured <span className="text-orange-500">Projects</span>
        </motion.h2>
        <p className="text-center text-gray-500 mt-3">
          Some of my recent work
        </p>

        <div className="flex items-center justify-center gap-4 my-10">
          <span className="h-px w-16 bg-orange-500" />
          <ExternalLink className="text-orange-500" size={20} />
          <span className="h-px w-16 bg-orange-200" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="hover-wiggle rounded-2xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-sm overflow-hidden"
            >
              <div className="h-44 bg-gradient-to-br from-orange-50/80 to-gray-100/80 flex items-center justify-center text-orange-400">
                {project.icon}
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="text-orange-500 shrink-0"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="text-gray-500 mb-5">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-orange-50 text-orange-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-10"
            >
              <GraduationCap className="text-orange-500" size={32} /> Education
            </motion.h2>

            <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gray-200">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-10"
                >
                  <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-orange-100" />
                  <div className="hover-wiggle p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-sm">
                    <div className="flex flex-wrap justify-between gap-2">
                      <h3 className="font-bold text-lg">{item.school}</h3>
                      <span className="text-sm font-semibold text-gray-500">
                        {item.years}
                      </span>
                    </div>
                    <p className="text-orange-500 font-medium mt-1">
                      {item.degree}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{item.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-3 mb-10"
            >
              <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold">
                <Award className="text-orange-500" size={32} /> Certifications
              </h2>
              {certifications.length > 0 && certifications[0].link && (
                <a
                  href={certifications[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-black/10 bg-white/80 shadow-sm hover:bg-orange-50 hover:border-orange-200 transition"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              )}
            </motion.div>

            <div className="rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm p-4 md:p-6">
              <div className="space-y-3">
                {certifications.map((cert, i) => {
                  const CardInner = (
                    <div className="hover-wiggle flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-black/5">
                      <span className="shrink-0 w-11 h-11 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                        <Award size={20} />
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900">{cert.title}</p>
                        <p className="text-sm text-gray-400 mt-1">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                  );
                  return cert.link ? (
                    <a
                      key={i}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {CardInner}
                    </a>
                  ) : (
                    <div key={i}>{CardInner}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH PULSE */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-3xl font-bold">Tech Pulse</h2>
            <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
              Static Preview
            </span>
          </div>
          <p className="text-center text-gray-500 mb-10">
            A snapshot of what's trending across the stack I build with.
          </p>

          <div className="space-y-3">
            {techPulse.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 p-4 rounded-xl bg-gray-50/70"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-300 font-bold w-5">{i + 1}</span>
                  <span className="font-medium">{item.title}</span>
                </div>
                <span className="text-xs font-medium bg-orange-50 text-orange-600 px-3 py-1 rounded-full shrink-0">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#0b1120]/90 backdrop-blur-sm text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm currently open to new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back
              to you!
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-white/5">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold">kayush3647@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-white/5">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-semibold">+91 6207279496</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="p-3 rounded-xl bg-white/5">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-semibold">India</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-8 mb-3">Connect with me</p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ayushkumar0808"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/ayushkumar0808"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.instagram.com/confused.ayush"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/916207279496"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8">
            <h3 className="font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 transition text-white font-semibold px-6 py-3 rounded-xl"
              >
                <Send size={16} />
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Sent! I'll reply soon."
                  : status === "error"
                  ? "Something went wrong — try again"
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-500 text-sm bg-[#0b1120]/90 backdrop-blur-sm border-t border-white/5">
        © {new Date().getFullYear()} Ayush Kumar. Commit Today Build Tomorrow
      </footer>

      </div>

      {/* ===== FLOATING CHATBOT WIDGET ===== */}

      {/* Greeting bubble */}
      <AnimatePresence>
        {showGreeting && !chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-24 right-6 z-[70] max-w-[220px]"
          >
            <div className="relative bg-white rounded-2xl rounded-br-sm shadow-xl px-4 py-3 text-sm text-gray-800 border border-gray-200">
              <button
                onClick={() => setShowGreeting(false)}
                aria-label="Dismiss greeting"
                className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-gray-300 hover:bg-gray-400 rounded-full text-white text-xs"
              >
                <X size={12} />
              </button>
              🖐️ Hey! Ask me about Ayush!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[70] w-[90vw] max-w-sm h-[70vh] max-h-[560px] flex flex-col rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200"
          >
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-white">
              <span className="heartbeat w-9 h-9 rounded-full overflow-hidden ring-2 ring-orange-400 shrink-0 inline-block">
                <img
                  src={BOT_AVATAR}
                  alt={BOT_NAME}
                  className="w-full h-full object-cover"
                />
              </span>
              <div>
                <p className="font-semibold leading-tight">{BOT_NAME}</p>
                <p className="text-xs text-gray-400 leading-tight">
                  Ayush's Assistant
                </p>
              </div>
            </div>

            <div
              ref={chatBodyRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`fade-in-up flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-orange-500 text-white rounded-br-sm"
                        : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {botTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-2 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-orange-500" />
                  </div>
                </div>
              )}
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_PROMPTS.map((qp) => (
                  <button
                    key={qp}
                    onClick={() => sendChat(qp)}
                    className="text-xs px-3 py-1.5 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-700 transition-colors"
                  >
                    {qp}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendChat(chatInput);
              }}
              className="flex items-center gap-2 p-3 border-t border-gray-200 bg-white"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={`Ask ${BOT_NAME} anything...`}
                className="flex-1 px-3 py-2 rounded-full bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                disabled={botTyping || !chatInput.trim()}
                className="p-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 rounded-full text-white transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={toggleChat}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 z-[70] w-14 h-14 rounded-full shadow-lg overflow-visible bg-orange-500 hover:bg-orange-600 text-white transition-colors flex items-center justify-center"
      >
        {chatOpen ? (
          <X size={24} />
        ) : (
          <span className="heartbeat relative block w-full h-full rounded-full overflow-hidden ring-2 ring-white">
            <img
              src={BOT_AVATAR}
              alt={BOT_NAME}
              className="w-full h-full object-cover"
            />
            {showBadge && (
              <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white text-[9px] font-bold rounded-full border-2 border-white">
                1
              </span>
            )}
          </span>
        )}
      </button>
    </main>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import CountUp from "react-countup";
// import { Github, Linkedin, Mail, Instagram } from "lucide-react";
// import {
//   SiC,
//   SiCplusplus,
//   SiJavascript,
//   SiTypescript,
//   SiOpenjdk,
//   SiReact,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiHtml5,
//   SiCss3,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiSocketdotio,
//   SiPython,
//   SiTensorflow,
//   SiGit,
//   SiGithub,
//   SiDocker,
//   SiLinux,
// } from "react-icons/si";

// /* ================= SKILLS DATA ================= */

// const skillCategories = [
//   {
//     title: "Languages",
//     skills: [
//       { name: "C", icon: <SiC />, level: 90 },
//       { name: "C++", icon: <SiCplusplus />, level: 85 },
//       { name: "Java", icon: <SiOpenjdk />, level: 88 },
//       { name: "JavaScript", icon: <SiJavascript />, level: 70 },
//       { name: "TypeScript", icon: <SiTypescript />, level: 65 },
//       { name: "Python", icon: <SiPython />, level: 75 },
//     ],
//   },
//   {
//     title: "Frontend",
//     skills: [
//       { name: "React", icon: <SiReact />, level: 92 },
//       { name: "Next.js", icon: <SiNextdotjs />, level: 88 },
//       { name: "Tailwind", icon: <SiTailwindcss />, level: 70 },
//       { name: "HTML", icon: <SiHtml5 />, level: 95 },
//       { name: "CSS", icon: <SiCss3 />, level: 90 },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
//       { name: "Express", icon: <SiExpress />, level: 70 },
//       { name: "MongoDB", icon: <SiMongodb />, level: 78 },
//       { name: "Socket.io", icon: <SiSocketdotio />, level: 68 },
//     ],
//   },
//   {
//     title: "AI / ML",
//     skills: [
//       { name: "Python", icon: <SiPython />, level: 75 },
//       { name: "TensorFlow", icon: <SiTensorflow />, level: 60 },
//     ],
//   },
//   {
//     title: "Dev & Tools",
//     skills: [
//       { name: "Git", icon: <SiGit />, level: 85 },
//       { name: "GitHub", icon: <SiGithub />, level: 88 },
//       { name: "Docker", icon: <SiDocker />, level: 70 },

//       { name: "Linux", icon: <SiLinux />, level: 72 },
//     ],
//   },
// ];

// /* ================= PROJECTS ================= */

// const projects = [
//   {
//     name: "Real Time Chat App",
//     link: "https://real-time-chat-app-chi-five.vercel.app/",
//     desc: "Real-time messaging platform with authentication and live communication.",
//   },
//   {
//     name: "Nexora AI",
//     link: "https://nexora-ai-kappa-topaz.vercel.app/",
//     desc: "Intelligent AI chat companion with secure Google authentication.",
//   },
//   {
//     name: "College Event Management Portal",
//     link: "https://college-event-management-portal-gules.vercel.app/",
//     desc: "Portal to create, manage, and track college events with role-based access.",
//   },
//    {
//     name: "Ecommerce Website",
//     link: "https://ecommercewebsite-orcin-pi.vercel.app/",
//     desc: "Modern ecommerce web app with cart and responsive UI.",
//   },
// ];

// /* ================= PAGE ================= */

// export default function Page() {
//   return (
//     <main className="relative bg-black text-white overflow-hidden">
//       {/* Animated Background Glow */}
//       <div className="fixed inset-0 -z-10">
//         <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full top-[-200px] left-[-200px] animate-pulse" />
//         <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-3xl rounded-full bottom-[-200px] right-[-200px] animate-pulse" />
//       </div>

//       {/* Cursor Glow */}
//       <div className="pointer-events-none fixed inset-0 z-30">
//         <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-1/3 left-1/3"></div>
//       </div>

//       {/* Navbar */}
//       <nav className="fixed top-0 w-full z-40 backdrop-blur border-b border-white/10">
//         <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//           <h1 className="font-bold text-lg">Ayush Kumar 🇮🇳</h1>
//           <div className="flex gap-6 text-sm">
//             <a href="#about">About</a>
//             <a href="#skills">Skills</a>
//             <a href="#projects">Projects</a>
//             <a href="#contact">Contact</a>

//           </div>
//         </div>
//       </nav>



//       {/* HERO */}
//       <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">

//         {/* ================= BACKGROUND ROTATING TEXT ================= */}

//         <motion.div
//           animate={{
//             rotateX: [0, 360],
//             rotateY: [0, -360],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute inset-0 flex items-center justify-center pointer-events-none"
//           style={{ perspective: 1000 }}
//         >
//           <h1
//             className="
//           text-[120px] md:text-[180px]
//           font-black tracking-widest
//           opacity-10
//           blur-[2px]
//           select-none
//           "
//             style={{
//               fontFamily: "Orbitron, sans-serif",
//               textShadow:
//                 "0 0 20px rgba(141, 61, 216, 0.8), 0 0 40px rgba(128, 10, 114, 0.6), 0 0 80px rgba(59,130,246,0.5)",
//             }}
//           >
//             Ayush Kumar Ayush
//           </h1>
//         </motion.div>

//         {/* ================= BLUR TRAIL LAYER ================= */}

//         <motion.div
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             repeat: Infinity,
//             duration: 20,
//             ease: "linear",
//           }}
//           className="absolute whitespace-nowrap opacity-5 text-[150px] font-black blur-xl"
//           style={{ fontFamily: "Orbitron, sans-serif" }}
//         >
//           AYUSH KUMAR AYUSH KUMAR AYUSH KUMAR
//         </motion.div>

//         {/* ================= PROFILE IMAGE ================= */}

//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ duration: 1 }}
//           className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl"
//         >
//           <img
//             src="/profile.jpg"
//             alt="profile"
//             className="w-64 h-64 object-cover rounded-3xl"
//           />
//         </motion.div>

//         {/* ================= NAME ================= */}

//         <h1 className="text-6xl font-bold mt-6 z-10">Ayush Kumar</h1>

//         {/* ================= TYPING EFFECT ================= */}

//         <div className="mt-4 text-xl text-gray-300 font-semibold z-10">
//           <TypeAnimation
//             sequence={[
//               "Full Stack Developer",
//               2000,
//               "MERN Stack Engineer",
//               2000,
//               "Problem Solver ",
//               2000,
//               "Real-Time App Builder ",
//               2000,
//             ]}
//             speed={50}
//             repeat={Infinity}
//           />
//         </div>

//         {/* ================= DESCRIPTION ================= */}

//         <p className="text-gray-400 mt-4 max-w-xl z-10">
//           Aspiring Software Developer | Problem Solver |Passionate about building scalable systems, real-time applications,
//           and beautiful user experiences.
//         </p>





//         <div className="flex gap-4 mt-8 flex-wrap justify-center">

//           <motion.a
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             href="https://github.com/ayushkumar0808"

//             className="mt-6 inline-block px-8 py-3 rounded-full font-semibold
//   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
//   shadow-xl"
//           >
//             My GitHub Overview😁

//           </motion.a>

//             <motion.a
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             href="https://codolio.com/profile/confused.ayush"

//             className="mt-6 inline-block text-black px-8 py-3 rounded-full font-semibold
//   bg-gradient-to-r from-purple-500 via-white to-purple-500
//   shadow-xl"
//           >
//            My Coding Profile😑

//           </motion.a>

//           <motion.a
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             href="https://github.com/ayushkumar0808?tab=repositories"

//             className="mt-6 inline-block px-8 py-3 rounded-full font-semibold
//   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
//   shadow-xl"
//           >
//             Watch My repo👀

//           </motion.a>


//           <motion.a
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-6 inline-block px-8 py-3 rounded-full font-semibold
//   bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
//   shadow-xl"
//           >
//             My Resume📄

//           </motion.a>

          
//         </div>


//       </section>

//       {/* ABOUT */}
//       <section id="about" className="max-w-4xl mx-auto px-6 py-24 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold mb-6"
//         >
//           About Me
//         </motion.h2>

//         <p className="text-gray-400 leading-relaxed">
//           Hi, I'm Ayush Kumar — a passionate developer who loves building things with code
//           and solving challenging problems. From fixing errors to mastering algorithms,
//           I believe growth comes from consistency and curiosity. Currently sharpening
//           my skills in DSA and modern web development while working toward my goal of becoming a top-tier developer.
//           I enjoy working with  real-time technologies as well and creating impactful digital experiences.

            

//         </p>
//       </section>

//       {/* SKILLS SECTION */}
//       <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold text-center mb-20"
//         >
//           I'm Good at👉👈
//         </motion.h2>

//         <div className="space-y-20">
//           {skillCategories.map((category, index) => (
//             <div key={index}>
//               <motion.h3
//                 initial={{ opacity: 0, x: -40 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 className="text-2xl font-semibold mb-10 text-purple-400"
//               >
//                 {category.title}
//               </motion.h3>

//               <div className="grid md:grid-cols-2 gap-8">
//                 {category.skills.map((skill, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
//                     transition={{ duration: 0.4 }}
//                     className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
//                   >
//                     <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl" />

//                     <div className="relative flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3 text-lg font-semibold">
//                         <span className="text-2xl group-hover:scale-125 transition">
//                           {skill.icon}
//                         </span>
//                         {skill.name}
//                       </div>

//                       <span className="text-sm text-gray-400 font-medium">
//                         <CountUp end={skill.level} duration={2} />%
//                       </span>
//                     </div>

//                     <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         transition={{ duration: 1.5 }}
//                         className="h-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PROJECTS */}
//       <section id="projects" className="max-w-4xl mx-auto px-6 py-24 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold mb-6"
//         >
//           My Recent Works🤧
//         </motion.h2>

//         <h2 className="text-4xl font-bold mb-12 text-center"></h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
//               className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur"
//             >
//               <h3 className="text-2xl font-semibold mb-3">
//                 {project.name}
//               </h3>

//               <p className="text-gray-400 mb-4">{project.desc}</p>

//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-purple-400 underline"
//               >
//                 Visit My artwork →
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold mb-6"
//         >
//           Contact
//         </motion.h2>

//         <h2 className="text-4xl font-bold mb-8"></h2>

//         <div className="flex justify-center gap-6 mb-6">
//           <a href="mailto:kayush3647@gmail.com">
//             <Mail />
//           </a>

//           <a href="https://github.com/ayushkumar0808">
//             <Github />
//           </a>

//           <a href="https://www.linkedin.com/in/ayushkumar0808">
//             <Linkedin />
//           </a>

//           <a href="https://www.instagram.com/confused.ayush">
//             <Instagram />
//           </a>
//         </div>

//         <p className="text-gray-400">kayush3647@gmail.com</p>
//       </section>

//       {/* FOOTER */}
//       <footer className="text-center pb-10 text-gray-500 text-sm">
//         © {new Date().getFullYear()} Ayush Kumar. Commit Today Build Tomorrow
//       </footer>
//     </main>
//   );
// }
