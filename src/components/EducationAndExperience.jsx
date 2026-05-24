import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function EducationAndExperience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="education" className="py-20 relative bg-[#040917]/30 border-t border-b border-slate-900/50">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-4">
            Educational Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            My academic credentials, key achievements, and performance scores that lay the foundation of my engineering expertise.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500/30 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {portfolioData.education.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline point on the line */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-purple-500 shadow-[0_0_10px_#a855f7] flex items-center justify-center text-purple-400">
                      <GraduationCap size={14} />
                    </div>
                  </div>

                  {/* Spacer for MD screens to keep grid balanced */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Block */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass p-6 rounded-2xl border border-slate-800 hover-glow transition-all duration-300 relative">
                      {/* Date block */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider mb-4 font-mono">
                        <Calendar size={10} />
                        {edu.duration}
                      </div>

                      <h3 className="text-lg font-bold text-white font-heading mb-1.5 leading-snug">
                        {edu.institution}
                      </h3>

                      <div className="text-sm font-semibold text-slate-300 font-sans mb-3">
                        {edu.degree}
                      </div>

                      {/* Location & Score */}
                      <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-3 border-t border-slate-800/60 font-sans">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-cyan-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-semibold text-slate-200">
                          <Award size={12} className="text-amber-400" />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
