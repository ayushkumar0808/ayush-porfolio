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
  ArrowUpRight,
  Code2,
  Sparkles,
  Menu,
  X,
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

const heroPills = [
  "HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "MongoDB", "Python", "Git", "Docker",
];

const projects = [
  {
    name: "Real Time Chat App",
    link: "https://real-time-chat-app-chi-five.vercel.app/",
    desc: "Real-time messaging platform with authentication and live communication.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    number: "01",
  },
  {
    name: "Ecommerce Website",
    link: "https://ecommercewebsite-orcin-pi.vercel.app/",
    desc: "Modern ecommerce web app with cart and responsive UI.",
    tags: ["React", "Tailwind", "E-commerce"],
    number: "02",
  },
  {
    name: "Nexora AI",
    link: "https://nexora-ai-kappa-topaz.vercel.app/",
    desc: "Intelligent AI chat companion with secure Google authentication.",
    tags: ["Next.js", "AI", "Auth"],
    number: "03",
  },
  {
    name: "College Event Management Portal",
    link: "https://college-event-management-portal-gules.vercel.app/",
    desc: "Portal to create, manage, and track college events with role-based access.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    number: "04",
  },
];

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

const techPulse = [
  ["Next.js 15 adoption keeps climbing among full-stack teams", "Frontend"],
  ["MongoDB Atlas rolls out new vector search improvements", "Backend"],
  ["Socket.io remains the go-to for real-time app features", "Real-time"],
  ["Docker Compose v3 workflows simplify local dev setups", "DevOps"],
  ["TypeScript continues to lead new project starts on GitHub", "Languages"],
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [mobileOpen, setMobileOpen] = useState(false);

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
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f4] text-[#171717] selection:bg-orange-500 selection:text-white">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute right-[-180px] top-[35%] h-[550px] w-[550px] rounded-full bg-yellow-100/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-black/[0.06] bg-[#f7f7f4]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#hero" className="text-xl font-black tracking-tight">
            &lt;Ayush<span className="text-orange-500">/</span>&gt;
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-600 transition hover:text-orange-500"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a href="https://www.linkedin.com/in/ayushkumar0808" target="_blank" rel="noreferrer" className="rounded-full p-2.5 transition hover:bg-orange-100 hover:text-orange-600">
              <Linkedin size={17} />
            </a>
            <a href="https://github.com/ayushkumar0808" target="_blank" rel="noreferrer" className="rounded-full p-2.5 transition hover:bg-orange-100 hover:text-orange-600">
              <Github size={17} />
            </a>
            <a href="mailto:kayush3647@gmail.com" className="rounded-full p-2.5 transition hover:bg-orange-100 hover:text-orange-600">
              <Mail size={17} />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-black/[0.06] bg-[#f7f7f4] px-5 py-5 md:hidden">
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="block border-b border-black/[0.05] py-3 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-xs font-semibold text-orange-600 shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
              Available for opportunities
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-3xl text-6xl font-black leading-[.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Ayush
              <span className="text-orange-500">.</span>
            </h1>

            <div className="mt-6 h-10 text-xl font-semibold text-neutral-500 sm:text-2xl">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "MERN Stack Engineer", 2000,
                  "Problem Solver", 2000,
                  "Real-Time App Builder", 2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-500 sm:text-lg">
              Aspiring Software Developer passionate about building scalable
              systems, real-time applications, and clean digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-orange-500"
              >
                Explore My Work
                <ArrowUpRight size={17} className="transition group-hover:rotate-45" />
              </a>
              <a
                href="https://github.com/ayushkumar0808"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1 hover:border-orange-300"
              >
                <Github size={17} /> GitHub
              </a>
            </div>

            <div className="mt-9 flex max-w-2xl flex-wrap gap-2">
              {heroPills.map((pill) => (
                <span key={pill} className="rounded-full border border-black/[0.07] bg-white/70 px-3.5 py-2 text-xs font-semibold text-neutral-600">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8, delay: .1 }}
            className="relative mx-auto w-full max-w-[470px]"
          >
            <div className="absolute -right-2 top-6 z-10 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl">
              <p className="text-2xl font-black"><CountUp end={21} duration={2} />+</p>
              <p className="text-xs text-neutral-500">Technologies</p>
            </div>

            <div className="relative overflow-hidden rounded-[3rem] border-[10px] border-white bg-neutral-200 shadow-[0_35px_90px_-25px_rgba(0,0,0,.35)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
              <img src="/profile.jpg" alt="Ayush Kumar" className="aspect-[4/5] w-full object-cover" />
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl">
              <p className="text-2xl font-black"><CountUp end={projects.length} duration={2} />+</p>
              <p className="text-xs text-neutral-500">Featured Projects</p>
            </div>

            <div className="absolute -bottom-10 right-10 -z-10 h-40 w-40 rounded-full bg-orange-300/50 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-black/[0.06] bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.65fr_1.35fr] lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-orange-500">01 / About</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">A developer who<br />likes to build.</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} transition={{ delay: .1 }}>
            <p className="text-lg leading-9 text-neutral-500">
              Hi, I&apos;m Ayush Kumar — a passionate developer who loves building
              things with code and solving challenging problems. From fixing
              errors to mastering algorithms, I believe growth comes from
              consistency and curiosity.
            </p>
            <p className="mt-5 text-lg leading-9 text-neutral-500">
              Currently sharpening my skills in DSA and modern web development
              while working toward becoming a top-tier developer. I enjoy
              working with real-time technologies and creating impactful
              digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-orange-500">02 / Skills</p>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">What I work with<span className="text-orange-500">.</span></h2>
            <Code2 className="hidden text-orange-500 sm:block" size={42} />
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .06 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-black/[0.07] bg-white p-7 shadow-[0_15px_45px_-30px_rgba(0,0,0,.35)]"
            >
              <h3 className="mb-6 flex items-center gap-2 text-lg font-black">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-semibold">
                        <span className="text-lg text-orange-500">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: .1 }}
                        className="h-full rounded-full bg-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-[#171717] text-white">
        <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-orange-400">03 / Selected Work</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Things I&apos;ve built<span className="text-orange-500">.</span></h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .08 }}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 transition hover:border-orange-500/50"
              >
                <div className="mb-12 flex items-start justify-between">
                  <span className="text-sm font-bold text-neutral-500">{project.number}</span>
                  <span className="rounded-full border border-white/10 p-3 transition group-hover:bg-orange-500 group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <h3 className="max-w-md text-2xl font-black sm:text-3xl">{project.name}</h3>
                <p className="mt-4 max-w-lg leading-7 text-neutral-400">{project.desc}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl transition group-hover:bg-orange-500/25" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-5xl px-5 py-28 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-orange-500">04 / Education</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">My journey<span className="text-orange-500">.</span></h2>
        </motion.div>

        <div className="relative space-y-5">
          <div className="absolute bottom-5 left-5 top-5 w-px bg-orange-200 sm:left-1/2" />
          {education.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, x: index % 2 ? 35 : -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex ${index % 2 ? "sm:justify-end" : "sm:justify-start"}`}
            >
              <div className="ml-12 w-full rounded-3xl border border-black/[0.07] bg-white p-6 shadow-sm sm:ml-0 sm:w-[46%]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <GraduationCap className="text-orange-500" size={23} />
                  <span className="text-xs font-bold text-neutral-400">{item.years}</span>
                </div>
                <h3 className="font-black">{item.school}</h3>
                <p className="mt-1 font-semibold text-orange-500">{item.degree}</p>
                <p className="mt-2 text-sm text-neutral-400">{item.location}</p>
              </div>
              <span className="absolute left-[14px] top-7 h-3 w-3 rounded-full bg-orange-500 ring-4 ring-orange-100 sm:left-1/2 sm:-translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Pulse */}
      <section className="border-y border-black/[0.06] bg-white/70">
        <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
          <div className="mb-10 flex items-center gap-3">
            <Sparkles className="text-orange-500" />
            <div>
              <h2 className="text-3xl font-black">Tech Pulse</h2>
              <p className="text-sm text-neutral-500">A snapshot of the technologies I work with.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-black/[0.07] bg-white">
            {techPulse.map(([title, tag], i) => (
              <div key={title} className="flex items-center justify-between gap-5 border-b border-black/[0.06] p-5 last:border-0">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="text-sm font-black text-neutral-300">0{i + 1}</span>
                  <span className="truncate text-sm font-semibold">{title}</span>
                </div>
                <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-28 lg:grid-cols-2 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-orange-400">05 / Contact</p>
            <h2 className="text-5xl font-black tracking-tight sm:text-7xl">Let&apos;s talk<span className="text-orange-500">.</span></h2>
            <p className="mt-7 max-w-lg text-lg leading-8 text-neutral-400">
              I&apos;m currently open to new opportunities. Have a project,
              question, or simply want to say hi? Drop me a message.
            </p>

            <div className="mt-10 space-y-5">
              <a href="mailto:kayush3647@gmail.com" className="flex items-center gap-4 transition hover:text-orange-400">
                <span className="rounded-xl bg-white/[0.06] p-3"><Mail size={18} /></span>
                <span className="text-sm font-semibold">kayush3647@gmail.com</span>
              </a>
              <a href="tel:+916207279496" className="flex items-center gap-4 transition hover:text-orange-400">
                <span className="rounded-xl bg-white/[0.06] p-3"><Phone size={18} /></span>
                <span className="text-sm font-semibold">+91 6207279496</span>
              </a>
              <div className="flex items-center gap-4">
                <span className="rounded-xl bg-white/[0.06] p-3"><MapPin size={18} /></span>
                <span className="text-sm font-semibold">India</span>
              </div>
            </div>

            <div className="mt-9 flex gap-3">
              <a href="https://www.linkedin.com/in/ayushkumar0808" target="_blank" rel="noreferrer" className="rounded-xl bg-white/[0.06] p-3 transition hover:bg-orange-500"><Linkedin size={19} /></a>
              <a href="https://github.com/ayushkumar0808" target="_blank" rel="noreferrer" className="rounded-xl bg-white/[0.06] p-3 transition hover:bg-orange-500"><Github size={19} /></a>
              <a href="https://www.instagram.com/confused.ayush" target="_blank" rel="noreferrer" className="rounded-xl bg-white/[0.06] p-3 transition hover:bg-orange-500"><Instagram size={19} /></a>
              <a href="https://wa.me/916207279496" target="_blank" rel="noreferrer" className="rounded-xl bg-white/[0.06] p-3 transition hover:bg-orange-500"><MessageCircle size={19} /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 sm:p-9">
            <h3 className="mb-7 text-xl font-black">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition placeholder:text-neutral-600 focus:border-orange-500"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition placeholder:text-neutral-600 focus:border-orange-500"
              />
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 outline-none transition placeholder:text-neutral-600 focus:border-orange-500"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white transition hover:bg-orange-400 disabled:opacity-60"
              >
                <Send size={17} />
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent! I'll reply soon." : status === "error" ? "Something went wrong — try again" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#171717] px-5 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Ayush Kumar. <span className="text-neutral-400">Commit Today • Build Tomorrow</span>
      </footer>
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
