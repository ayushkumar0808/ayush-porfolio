"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flip-heading text-3xl sm:text-5xl md:text-7xl font-extrabold text-center cursor-default"
      >
        <span className="flip-dark text-[#1a1a1a]">About</span>{" "}
        <span className="flip-orange text-orange-500">Me</span>
      </motion.h2>

      <p className="text-center text-lg md:text-xl font-semibold text-gray-600 mt-4">
        A little about who I am
      </p>

      <div className="flex items-center justify-center gap-4 my-10">
        <span className="h-px w-16 bg-orange-500" />
        <User className="text-orange-500" size={20} />
        <span className="h-px w-16 bg-orange-200" />
      </div>

      <p className="text-gray-600 leading-relaxed">
        Hi, I'm Ayush Kumar — a passionate developer who loves building things
        with code and solving challenging problems. From fixing errors to
        mastering algorithms, I believe growth comes from consistency and
        curiosity. Currently sharpening my skills in DSA and modern web
        development while working toward my goal of becoming a top-tier
        developer. I enjoy working with real-time technologies as well and
        creating impactful digital experiences.
      </p>
    </section>
  );
}
