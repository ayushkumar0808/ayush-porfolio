"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
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
  );
}
