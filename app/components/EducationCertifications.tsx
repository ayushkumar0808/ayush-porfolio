"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications } from "../data/portfolio-data";

export default function EducationCertifications() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flip-heading text-3xl sm:text-5xl md:text-7xl font-extrabold text-center cursor-default"
      >
        <span className="flip-dark text-[#1a1a1a]">Education &</span>{" "}
        <span className="flip-orange text-orange-500">Certification</span>
      </motion.h2>

      <p className="text-center text-lg md:text-xl font-semibold text-gray-600 mt-4">
        My academic background and credentials
      </p>

      <div className="flex items-center justify-center gap-4 my-10">
        <span className="h-px w-16 bg-orange-500" />
        <GraduationCap className="text-orange-500" size={20} />
        <span className="h-px w-16 bg-orange-200" />
      </div>

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
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-wiggle block p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-sm"
                  >
                    <div className="flex flex-wrap justify-between gap-2">
                      <h3 className="font-bold text-lg">{item.school}</h3>
                      <span className="text-sm font-semibold text-gray-500">
                        {item.years}
                      </span>
                    </div>
                    <p className="text-orange-500 font-medium mt-1">
                      {item.degree}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {item.location}
                    </p>
                  </a>
                ) : (
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
                    <p className="text-sm text-gray-400 mt-1">
                      {item.location}
                    </p>
                  </div>
                )}
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
            className="mb-10"
          >
            <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold">
              <Award className="text-orange-500" size={32} /> Certifications
            </h2>
          </motion.div>

          <div className="hover-wiggle rounded-3xl bg-white/70 backdrop-blur-sm border border-black/5 shadow-sm p-4 md:p-6">
            <div className="space-y-3">
              {certifications.map((cert, i) => {
                const cardInner = (
                  <div className="hover-wiggle flex items-start gap-4 p-4 rounded-2xl bg-white/80 border border-black/5">
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                      <Award size={20} />
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {cert.title}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    {cert.link && (
                      <span className="shrink-0 flex items-center gap-1 text-xs font-semibold text-orange-600">
                        <ExternalLink size={14} /> View
                      </span>
                    )}
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
                    {cardInner}
                  </a>
                ) : (
                  <div key={i}>{cardInner}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
