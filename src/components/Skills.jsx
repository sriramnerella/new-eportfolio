import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Brain, Database, Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "languages":
        return <Code className="text-purple-400" size={24} />;
      case "web & frameworks":
        return <Layout className="text-cyan-400" size={24} />;
      case "ai / machine learning":
        return <Brain className="text-pink-400" size={24} />;
      case "cloud, iot & databases":
        return <Database className="text-blue-400" size={24} />;
      case "tools & devops":
      default:
        return <Wrench className="text-amber-400" size={24} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 relative bg-[#040917]/30 border-t border-slate-900/50">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-4">
            Technical Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A comprehensive overview of my programming languages, frontend and backend technologies, machine learning tools, and developer utilities.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass p-6 rounded-2xl border border-slate-800 hover-glow transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4 mb-6">
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-lg font-bold text-white font-heading">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills Items */}
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative flex items-center px-3.5 py-2 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-purple-500/25 transition-all duration-200"
                  >
                    <span className="text-xs font-medium text-slate-300 group-hover:text-purple-300 transition-colors font-sans">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
