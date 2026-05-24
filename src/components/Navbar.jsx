import React, { useState, useEffect } from "react";
import { Menu, X, Mail, FileDown } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scroll shadow effect
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight
      const scrollPosition = window.scrollY + 160;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tight text-white flex items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-sm text-white shadow-md shadow-purple-500/20">
            S
          </span>
          <span className="font-heading">Sriram Nerella</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer focus:outline-none py-1 relative ${
                    activeSection === item.id 
                      ? "text-purple-400" 
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-800" />

          {/* Social Links & Resume */}
          <div className="flex items-center gap-4">
            <a 
              href={portfolioData.personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href={portfolioData.personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={portfolioData.personalInfo.resumeUrl}
              download
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-purple-600/25 border border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white transition-all shadow-md shadow-purple-900/20 focus:outline-none"
            >
              <FileDown size={14} />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-slate-800 shadow-2xl py-6 px-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-5 duration-200">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`text-base font-semibold w-full text-left py-1 cursor-pointer focus:outline-none ${
                    activeSection === item.id 
                      ? "text-purple-400 border-l-2 border-purple-500 pl-3" 
                      : "text-slate-300 hover:text-white pl-0"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="h-[1px] bg-slate-800 w-full" />
          
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <a 
                href={portfolioData.personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={portfolioData.personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <a
              href={portfolioData.personalInfo.resumeUrl}
              download
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600/30 border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white transition-all focus:outline-none"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
