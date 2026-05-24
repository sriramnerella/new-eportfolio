import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { Github } from "./BrandIcons";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 relative bg-dots">
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A selection of key technical solutions I have built, spanning full-stack web applications, computer vision models, and smart IoT infrastructures.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="flex flex-col h-full rounded-2xl glass border border-slate-800/80 hover-glow overflow-hidden transition-all duration-300"
            >
              {/* Card Header Background Block */}
              <div className="relative h-2.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500" />
              
              {/* Card Details */}
              <div className="flex-grow p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xxs font-extrabold text-slate-500 uppercase tracking-widest font-mono mb-2">
                    {project.duration}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white font-heading mb-1">
                    {project.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-cyan-400 mb-4 font-sans">
                    {project.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3 font-heading">
                      Key Highlights:
                    </div>
                    <ul className="text-xs text-slate-400 space-y-2 font-sans pl-2 list-none">
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="relative pl-3">
                          <span className="absolute left-0 top-[6px] w-1.5 h-1.5 rounded-full bg-purple-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/50">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all focus:outline-none"
                    >
                      <Github size={14} /> View Repository
                    </a>
                  ) : (
                    <span className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold bg-slate-900/40 text-slate-500 border border-slate-800/80 select-none">
                      <Code size={14} /> Repository Restricted
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
