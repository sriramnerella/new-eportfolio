import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Computer Science Student",
    "AI & Computer Vision Innovator",
    "IoT Systems Developer"
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 2000;

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setRoleText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    // Role typed out fully
    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } 
    // Role deleted fully
    else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 bg-dots overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Text Block */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wide w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Available for Internships & Projects
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight mb-4">
            Hi, I'm <br />
            <span className="text-gradient font-black text-glow">
              {portfolioData.personalInfo.name}
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="h-10 text-xl sm:text-2xl font-bold text-slate-300 mb-6 flex items-center gap-1">
            <span>A </span>
            <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
              {roleText}
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl font-sans">
            {portfolioData.personalInfo.summary}
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 mb-8 border-t border-b border-slate-800/60 py-6 max-w-xl">
            <div className="flex items-center gap-3 text-sm">
              <MapPin size={16} className="text-purple-400 flex-shrink-0" />
              <span>{portfolioData.personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} className="text-purple-400 flex-shrink-0" />
              <span>{portfolioData.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} className="text-cyan-400 flex-shrink-0" />
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-cyan-300 transition-colors">
                {portfolioData.personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Linkedin size={16} className="text-cyan-400 flex-shrink-0" />
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => {
                const contactEl = document.getElementById("contact");
                if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:opacity-95 hover:shadow-xl hover:shadow-purple-600/40 transition-all cursor-pointer focus:outline-none"
            >
              Contact Me <ArrowRight size={18} />
            </button>

            <a
              href={portfolioData.personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all focus:outline-none"
            >
              Download Resume <FileDown size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Decorative Image Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[320px] aspect-square sm:aspect-[4/5]">
            {/* Glow backing */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-2xl blur-xl opacity-30 animate-pulse" />
            
            {/* Profile Card Container */}
            <div className="absolute inset-0 rounded-2xl glass p-3 border border-slate-800 shadow-2xl relative z-10 overflow-hidden flex flex-col justify-between">
              {/* Picture frame */}
              <div className="flex-grow rounded-xl overflow-hidden bg-slate-950 relative group aspect-[4/4.5] w-full">
                <img 
                  src={portfolioData.personalInfo.profileImageUrl} 
                  alt={portfolioData.personalInfo.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to initial avatar or styling if image fails to load
                    e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=300&auto=format&fit=crop";
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-65" />
              </div>
              
              {/* Name & Quick Details inside Card */}
              <div className="p-3 text-center">
                <div className="font-heading font-bold text-white text-base">
                  {portfolioData.personalInfo.name}
                </div>
                <div className="text-[10px] text-cyan-400 font-semibold font-mono tracking-wider mt-1 uppercase">
                  {portfolioData.personalInfo.title}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
