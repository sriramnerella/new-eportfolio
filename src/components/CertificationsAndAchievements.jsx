import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function CertificationsAndAchievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="achievements" className="py-20 relative bg-dots">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-4">
            Honors & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Recognitions, competitive milestones, and advanced educational workshops completed during my academic studies.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Achievements - Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Trophy size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Key Accomplishments</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {portfolioData.achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass p-6 rounded-2xl border border-slate-800 hover-glow transition-all flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-amber-400 mt-0.5">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-heading mb-1">
                      {ach.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      {ach.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications - Right (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Professional Credentials</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass p-5 rounded-2xl border border-slate-800 hover-glow transition-all flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-cyan-400 mt-0.5">
                    <Award size={16} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-2 mb-1.5 flex-wrap">
                      <h4 className="text-base font-bold text-white font-heading">
                        {cert.name}
                      </h4>
                      {cert.duration && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-400 uppercase font-mono">
                          {cert.duration}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-xs font-bold text-purple-400 mb-2 font-sans">
                      Issued by {cert.issuer}
                    </div>
                    
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
