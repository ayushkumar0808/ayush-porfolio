"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { heroPills, totalSkillCount, projects } from "../data/portfolio-data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16"
    >
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
            building scalable systems, real-time applications, and beautiful
            user experiences.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://github.com/ayushkumar0808"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 transition-all"
            >
              GitHub Overview 😎
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
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
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
  );
}
