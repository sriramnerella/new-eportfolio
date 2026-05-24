import React from "react";
import { Mail, ArrowUp, Globe } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#02050e] border-t border-slate-900/60 py-12 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Logo & copyright */}
          <div>
            <h4 className="text-lg font-bold text-white font-heading mb-2">
              Nerella Venkata Sriram
            </h4>
            <p className="text-xs text-slate-500 font-sans">
              &copy; {currentYear} Nerella Venkata Sriram. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600 font-mono mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>

          {/* Spoken Languages */}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold font-heading uppercase tracking-wide">
              <Globe size={12} className="text-cyan-400" />
              Languages Spoken
            </div>
            <div className="flex gap-3 text-xs text-slate-400 font-sans">
              {portfolioData.languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-1">
                  <span className="text-slate-350 font-medium">{lang.name}</span>
                  <span className="text-[10px] text-slate-500 font-normal font-mono">({lang.proficiency})</span>
                  {index < portfolioData.languages.length - 1 && (
                    <span className="text-slate-700 ml-1">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Socials & Top Scroll Button */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            <div className="flex gap-4">
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-850 text-slate-450 hover:text-white transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-855 text-slate-450 hover:text-white transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-855 text-slate-450 hover:text-white transition-all hover:scale-105"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-xl bg-purple-600/10 border border-purple-500/25 text-purple-400 hover:bg-purple-650 hover:text-white transition-all shadow-lg hover:shadow-purple-900/20 cursor-pointer focus:outline-none"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
