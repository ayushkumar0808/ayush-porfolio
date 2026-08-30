"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin, ExternalLink } from "lucide-react";
import { experience } from "../data/portfolio-data";

function ExperienceCard({ exp }: { exp: (typeof experience)[number] }) {
  const cardInner = (
    <>
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
        <span className="shrink-0 text-xs font-semibold bg-orange-50 text-orange-600 px-3 py-1 rounded-full">
          {exp.type}
        </span>
      </div>

      <p className="flex items-center gap-2 text-orange-500 font-medium mb-1">
        <Briefcase size={16} /> {exp.company}
      </p>

      <p className="flex items-center gap-2 text-sm text-gray-400 mb-1">
        <CalendarDays size={14} /> {exp.duration}
      </p>

      {exp.location && (
        <p className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <MapPin size={14} /> {exp.location}
        </p>
      )}

      <ul className={`space-y-2 ${exp.location ? "" : "mt-4"}`}>
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>

      {exp.link && (
        <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-orange-600">
          <ExternalLink size={14} /> Visit company site
        </span>
      )}
    </>
  );

  const className =
    "hover-wiggle block h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-sm p-6 md:p-8";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {exp.link ? (
        <a
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {cardInner}
        </a>
      ) : (
        <div className={className}>{cardInner}</div>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flip-heading text-3xl sm:text-5xl md:text-7xl font-extrabold text-center cursor-default"
      >
        <span className="flip-dark text-[#1a1a1a]">Work</span>{" "}
        <span className="flip-orange text-orange-500">Experience</span>
      </motion.h2>

      <p className="text-center text-lg md:text-xl font-semibold text-gray-600 mt-4">
        My professional journey so far
      </p>

      <div className="flex items-center justify-center gap-4 my-10">
        <span className="h-px w-16 bg-orange-500" />
        <Briefcase className="text-orange-500" size={20} />
        <span className="h-px w-16 bg-orange-200" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {experience.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}
