"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { technicalSkills, softSkills, getLevelLabel } from "../data/portfolio-data";

export default function Skills() {
  return (
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
        <div className="hover-wiggle rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm p-6 md:p-10">
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
        <div className="hover-wiggle rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm p-6 md:p-10">
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
  );
}
