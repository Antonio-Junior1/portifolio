"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Methodology from "@/components/Methodology";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import FloatingDock from "@/components/FloatingDock";
import { ThemeProvider } from "@/context/ThemeContext";
import { AvatarProvider } from "@/context/AvatarContext";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <AvatarProvider>
        <div className="relative min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-500/20 selection:text-blue-700 dark:selection:text-blue-300 pb-16 overflow-x-clip transition-colors duration-300">
          
          {/* Navigation Bar */}
          <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        
        {/* Main Content Sections */}
        <main className="flex-1 w-full">
          <Hero onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Methodology />
          <Education />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />

        {/* Global Floating Interactive Dock */}
        <FloatingDock onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Global Command Palette (Ctrl+K) */}
        <CommandPalette 
          isOpen={commandPaletteOpen} 
          onClose={() => setCommandPaletteOpen(false)} 
        />
        </div>
      </AvatarProvider>
    </ThemeProvider>
  );
}
