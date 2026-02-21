"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiJouav,
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
      { name: "Java", icon: <SiJouav />, level: 88 },
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

/* ================= PROJECTS ================= */

const projects = [
  {
    name: "Real Time Chat App",
    link: "https://real-time-chat-app-rq6r.onrender.com/login",
    desc: "Real-time messaging platform with authentication and live communication.",
  },
  {
    name: "Ecommerce Website",
    link: "https://ecommercewebsite-orcin-pi.vercel.app/",
    desc: "Modern ecommerce web app with cart and responsive UI.",
  },
];

/* ================= PAGE ================= */

export default function Page() {
  return (
    <main className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full top-[-200px] left-[-200px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-3xl rounded-full bottom-[-200px] right-[-200px] animate-pulse" />
      </div>

      {/* Cursor Glow */}
      <div className="pointer-events-none fixed inset-0 z-30">
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full top-1/3 left-1/3"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg">Ayush Kumar 🇮🇳</h1>
          <div className="flex gap-6 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>
        </div>
      </nav>



      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">

        {/* ================= BACKGROUND ROTATING TEXT ================= */}

        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ perspective: 1000 }}
        >
          <h1
            className="
          text-[120px] md:text-[180px]
          font-black tracking-widest
          opacity-10
          blur-[2px]
          select-none
          "
            style={{
              fontFamily: "Orbitron, sans-serif",
              textShadow:
                "0 0 20px rgba(141, 61, 216, 0.8), 0 0 40px rgba(128, 10, 114, 0.6), 0 0 80px rgba(59,130,246,0.5)",
            }}
          >
            Ayush Kumar Ayush
          </h1>
        </motion.div>

        {/* ================= BLUR TRAIL LAYER ================= */}

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="absolute whitespace-nowrap opacity-5 text-[150px] font-black blur-xl"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          AYUSH KUMAR AYUSH KUMAR AYUSH KUMAR
        </motion.div>

        {/* ================= PROFILE IMAGE ================= */}

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl"
        >
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-64 h-64 object-cover rounded-3xl"
          />
        </motion.div>

        {/* ================= NAME ================= */}

        <h1 className="text-6xl font-bold mt-6 z-10">Ayush Kumar</h1>

        {/* ================= TYPING EFFECT ================= */}

        <div className="mt-4 text-xl text-white-400 font-semibold z-10">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "MERN Stack Engineer",
              2000,
              "Problem Solver ",
              2000,
              "Real-Time App Builder ",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* ================= DESCRIPTION ================= */}

        <p className="text-gray-400 mt-4 max-w-xl z-10">
          Aspiring Software Developer | Problem Solver |Passionate about building scalable systems, real-time applications,
          and beautiful user experiences.
        </p>





        <div className="flex gap-4 mt-8 flex-wrap justify-center">

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ayushkumar0808"

            className="mt-6 inline-block px-8 py-3 rounded-full font-semibold
  bg-gradient-to-r from-pink-500 via-purple-500 to-purpule-500
  shadow-xl"
          >
            My GitHub Overviwe😁

          </motion.a>

            <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://codolio.com/profile/confused.ayush "

            className="mt-6 inline-block text-black px-8 py-3 rounded-full font-semibold
  bg-gradient-to-r from-purple-500 via-white to-purpule-500
  shadow-xl"
          >
           My Coding Profile😑

          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ayushkumar0808?tab=repositories"

            className="mt-6 inline-block px-8 py-3 rounded-full font-semibold
  bg-gradient-to-r from-purpule-500 via-purple-500 to-pink-500
  shadow-xl"
          >
            Watch My repo👀

          </motion.a>


          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="resume"
            className="mt-6 inline-block px-8 py-3 rounded-full font-semibold
  bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
  shadow-xl"
          >
            My Resume📄

          </motion.a>

          
        </div>


      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>

        <p className="text-gray-400 leading-relaxed">
          Hi, I'm Ayush Kumar — a passionate developer who loves building things with code
          and solving challenging problems. From fixing errors to mastering algorithms,
          I believe growth comes from consistency and curiosity. Currently sharpening
          my skills in DSA and modern web development while working toward my goal of becoming a top-tier developer.
          I enjoy working with  real-time technologies as well and creating impactful digital experiences.

            

        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          I'm Good at👉👈
        </motion.h2>

        <div className="space-y-20">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl font-semibold mb-10 text-purple-400"
              >
                {category.title}
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl" />

                    <div className="relative flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3 text-lg font-semibold">
                        <span className="text-2xl group-hover:scale-125 transition">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </div>

                      <span className="text-sm text-gray-400 font-medium">
                        <CountUp end={skill.level} duration={2} />%
                      </span>
                    </div>

                    <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5 }}
                        className="h-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          My Recent Works🤧
        </motion.h2>

        <h2 className="text-4xl font-bold mb-12 text-center"></h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.name}
              </h3>

              <p className="text-gray-400 mb-4">{project.desc}</p>

              <a
                href={project.link}
                target="_blank"
                className="text-purple-400 underline"
              >
                Visit My artwork →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Contact
        </motion.h2>

        <h2 className="text-4xl font-bold mb-8"></h2>

        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:kayush3647@gmail.com">
            <Mail />
          </a>

          <a href="https://github.com/ayushkumar0808">
            <Github />
          </a>

          <a href="https://www.linkedin.com/in/ayushkumar0808">
            <Linkedin />
          </a>

          <a href="https://www.instagram.com/confused.ayush">
            <Instagram />
          </a>
        </div>

        <p className="text-gray-400">kayush3647@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center pb-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ayush Kumar. Commit Today Build Tommorow
      </footer>
    </main>
  );
}
