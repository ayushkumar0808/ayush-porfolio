"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio-data";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        Featured <span className="text-orange-500">Projects</span>
      </motion.h2>

      <p className="text-center text-gray-500 mt-3">Some of my recent work</p>

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
            {/* PROJECT BANNER */}
            <div className="relative h-48 bg-gray-100 overflow-hidden group">
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
              )}

              {/* CENTERED LINK ICON OVERLAY */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name}`}
                className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-500 shadow-lg scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                  <ExternalLink size={20} />
                </span>
              </a>
            </div>

            {/* PROJECT DETAILS */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
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
  );
}
