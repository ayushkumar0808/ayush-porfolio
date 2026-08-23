"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
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
  ShoppingCart,
  Sparkles,
  CalendarDays,
  Users,
} from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiPython,
  SiTensorflow,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
} from "react-icons/si";

/* ================= SKILLS DATA ================= */

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC />, level: 90 },
      { name: "C++", icon: <SiCplusplus />, level: 85 },
      { name: "Java", icon: <SiOpenjdk />, level: 88 },
      { name: "JavaScript", icon: <SiJavascript />, level: 70 },
      { name: "TypeScript", icon: <SiTypescript />, level: 65 },
      { name: "Python", icon: <SiPython />, level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, level: 92 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 88 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 70 },
      { name: "HTML", icon: <SiHtml5 />, level: 95 },
      { name: "CSS", icon: <SiCss3 />, level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
      { name: "Express", icon: <SiExpress />, level: 70 },
      { name: "MongoDB", icon: <SiMongodb />, level: 78 },
      { name: "Socket.io", icon: <SiSocketdotio />, level: 68 },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Python", icon: <SiPython />, level: 75 },
      { name: "TensorFlow", icon: <SiTensorflow />, level: 60 },
    ],
  },
  {
    title: "Dev & Tools",
    skills: [
      { name: "Git", icon: <SiGit />, level: 85 },
      { name: "GitHub", icon: <SiGithub />, level: 88 },
      { name: "Docker", icon: <SiDocker />, level: 70 },
      { name: "Linux", icon: <SiLinux />, level: 72 },
    ],
  },
];

// Flattened pills shown under the hero intro (mirrors the reference layout)
const heroPills = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Python",
  "Git",
  "Docker",
];

const totalSkillCount = skillCategories.reduce(
  (sum, cat) => sum + cat.skills.length,
  0
);

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

/* ================= PAGE ================= */

// Replace with your own Formspree form endpoint (see setup note below the component).
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [menuOpen, setMenuOpen] = useState(false);

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
    <main className="relative bg-[#fafafa] text-[#1a1a1a] overflow-hidden">
      {/* Geometric background */}
      <div className="fixed inset-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1900 1200"
          preserveAspectRatio="xMidYMid slice"
        >
          <polygon points="0,0 400,0 200,300 0,250" fill="#e4e5e7" stroke="#d5d6d9" strokeWidth="1" />
          <polygon points="400,0 800,0 600,350 200,300" fill="#d7d9dc" stroke="#c8cacd" strokeWidth="1" />
          <polygon points="800,0 1200,0 1000,300 600,350" fill="#e9eaec" stroke="#d5d6d9" strokeWidth="1" />
          <polygon points="1200,0 1900,0 1900,400 1000,300" fill="#dcdee0" stroke="#cdcfd2" strokeWidth="1" />
          <polygon points="0,250 200,300 300,700 0,650" fill="#eef0f1" stroke="#dcdedf" strokeWidth="1" />
          <polygon points="200,300 600,350 500,750 300,700" fill="#d2d4d7" stroke="#c3c5c8" strokeWidth="1" />
          <polygon points="600,350 1000,300 900,700 500,750" fill="#e6e7e9" stroke="#d7d8db" strokeWidth="1" />
          <polygon points="1000,300 1900,400 1900,800 900,700" fill="#d9dadd" stroke="#cacbce" strokeWidth="1" />
          <polygon points="0,650 300,700 200,1200 0,1200" fill="#e2e4e6" stroke="#d3d5d7" strokeWidth="1" />
          <polygon points="300,700 500,750 400,1200 200,1200" fill="#ecedef" stroke="#dddfe1" strokeWidth="1" />
          <polygon points="500,750 900,700 800,1200 400,1200" fill="#d5d7d9" stroke="#c6c8ca" strokeWidth="1" />
          <polygon points="900,700 1900,800 1900,1200 800,1200" fill="#e0e1e4" stroke="#d1d3d5" strokeWidth="1" />
        </svg>
      </div>

      <div className="fixed top-6 left-6 z-0 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_20px_6px_rgba(249,115,22,0.5)]" />

      {/* Everything below sits above the background */}
      <div className="relative z-10">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur bg-white/70 border-b border-black/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <a href="#hero" className="font-bold text-lg tracking-tight">
            {"<"}Ayush{"/>"}
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-orange-500 transition">About</a>
            <a href="#skills" className="hover:text-orange-500 transition">Skills</a>
            <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
            <a href="#education" className="hover:text-orange-500 transition">Education</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
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

            <div className="mt-3 text-2xl md:text-3xl font-semibold text-gray-500 h-10">
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
            </div>

            <p className="text-gray-500 mt-6 max-w-lg leading-relaxed">
              Aspiring Software Developer | Problem Solver | Passionate about
              building scalable systems, real-time applications, and
              beautiful user experiences.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/ayushkumar0808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 transition"
              >
                My GitHub Overview 😁
              </a>
              <a
                href="https://codolio.com/profile/confused.ayush"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-600 font-semibold px-6 py-3 rounded-full shadow-lg bg-white border border-orange-200 hover:border-orange-400 transition"
              >
                My Coding Profile 😑
              </a>
              <a
                href="https://github.com/ayushkumar0808?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-lg bg-[#1a1a1a] hover:bg-black transition"
              >
                Watch My Repo 👀
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="text-sm font-medium bg-white border border-black/10 px-4 py-2 rounded-full text-gray-700"
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
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white">
              <img
                src="/profile.jpg"
                alt="Ayush Kumar"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 text-center">
              <p className="text-xl font-bold">
                <CountUp end={totalSkillCount} duration={2} />+
              </p>
              <p className="text-xs text-gray-500">Skills</p>
            </div>

            <div className="absolute bottom-6 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3 text-center">
              <p className="text-xl font-bold">
                <CountUp end={projects.length} duration={2} />+
              </p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>
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

        <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-6 md:p-12">
          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <motion.h3
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold mb-6 text-gray-800"
                >
                  {category.title}
                </motion.h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 rounded-2xl bg-gray-50 border border-black/5"
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
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-6 md:p-12 mt-8">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-gray-800">
            <Users className="text-orange-500" size={22} /> Soft Skills
          </h3>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {softSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
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
              className="rounded-2xl bg-white border border-black/5 shadow-sm overflow-hidden"
            >
              <div className="h-44 bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center text-orange-400">
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

      {/* EDUCATION */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 text-4xl font-bold mb-14 justify-center"
        >
          <GraduationCap className="text-orange-500" size={36} /> Education
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
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
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
      </section>

      {/* TECH PULSE */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 md:p-12">
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
                className="flex items-center justify-between gap-4 p-4 rounded-xl bg-gray-50"
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
      <section id="contact" className="bg-[#0b1120] text-white">
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
      <footer className="text-center py-8 text-gray-500 text-sm bg-[#0b1120] border-t border-white/5">
        © {new Date().getFullYear()} Ayush Kumar. Commit Today Build Tomorrow
      </footer>

      </div>
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
