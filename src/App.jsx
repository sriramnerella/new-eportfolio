import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationAndExperience from "./components/EducationAndExperience";
import CertificationsAndAchievements from "./components/CertificationsAndAchievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased relative overflow-x-hidden">
      {/* Background decoration grid overlays */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-dots opacity-100 pointer-events-none z-0" />
      
      {/* Header / Navigation bar */}
      <Navbar />
      
      {/* Page Sections */}
      <main className="relative z-10">
        {/* Intro & Professional Summary */}
        <Hero />
        
        {/* Tech Skills Grid */}
        <Skills />
        
        {/* Project Showcases */}
        <Projects />
        
        {/* Education Timeline */}
        <EducationAndExperience />
        
        {/* Certifications and achievements split grid */}
        <CertificationsAndAchievements />
        
        {/* Contact Form with Web3Forms */}
        <Contact />
      </main>
      
      {/* Footer copyright and languages */}
      <Footer />
    </div>
  );
}
