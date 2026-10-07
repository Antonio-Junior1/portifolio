"use client";

import React, { useState, useEffect } from "react";
import { 
  Home, 
  FolderGit2, 
  Cpu, 
  Briefcase, 
  Mail, 
  Search, 
  Volume2, 
  VolumeX, 
  MessageCircle,
  Copy,
  Check,
  FileDown
} from "lucide-react";
import { soundManager } from "@/utils/soundEffects";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface FloatingDockProps {
  onOpenCommandPalette: () => void;
}

export default function FloatingDock({ onOpenCommandPalette }: FloatingDockProps) {
  const [soundOn, setSoundOn] = useState(true);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["sobre", "experiencia", "projetos", "tecnologias", "contato"];
      const scrollPos = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 400) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const state = soundManager.toggle();
    setSoundOn(state);
    if (state) soundManager.playSuccess();
  };

  const handleCopyEmail = () => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    soundManager.playClick();
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside 
      aria-label="Barra de navegação rápida" 
      className="fixed bottom-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-full bg-white/95 backdrop-blur-xl border border-slate-300/90 shadow-2xl shadow-slate-300/50 transition-all duration-300">
        
        {/* Navigation Items */}
        <button
          onClick={() => scrollTo("hero")}
          className={`p-2.5 rounded-full transition-all group relative ${
            activeSection === "hero"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
          title="Início"
          aria-label="Início"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Início</span>
        </button>

        <button
          onClick={() => scrollTo("projetos")}
          className={`p-2.5 rounded-full transition-all group relative ${
            activeSection === "projetos"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
          title="Projetos"
          aria-label="Projetos"
        >
          <FolderGit2 className="w-4 h-4" />
          <span className="sr-only">Projetos</span>
        </button>

        <button
          onClick={() => scrollTo("tecnologias")}
          className={`p-2.5 rounded-full transition-all group relative ${
            activeSection === "tecnologias"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
          title="Tecnologias & Stack"
          aria-label="Tecnologias"
        >
          <Cpu className="w-4 h-4" />
          <span className="sr-only">Tecnologias</span>
        </button>

        <button
          onClick={() => scrollTo("experiencia")}
          className={`p-2.5 rounded-full transition-all group relative ${
            activeSection === "experiencia"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
          title="Experiência"
          aria-label="Experiência"
        >
          <Briefcase className="w-4 h-4" />
          <span className="sr-only">Experiência</span>
        </button>

        <button
          onClick={() => scrollTo("contato")}
          className={`p-2.5 rounded-full transition-all group relative ${
            activeSection === "contato"
              ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
          title="Contato"
          aria-label="Contato"
        >
          <Mail className="w-4 h-4" />
          <span className="sr-only">Contato</span>
        </button>

        {/* Vertical Divider */}
        <div className="w-[1px] h-6 bg-slate-200 mx-0.5" />

        {/* Command Palette Trigger */}
        <button
          onClick={() => {
            soundManager.playClick();
            onOpenCommandPalette();
          }}
          className="p-2.5 rounded-full text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition"
          title="Busca rápida (Ctrl+K)"
          aria-label="Busca rápida"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="p-2.5 rounded-full text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition relative"
          title="Copiar e-mail"
          aria-label="Copiar e-mail"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>

        {/* Sound Toggle */}
        <button
          onClick={handleToggleSound}
          className="hidden sm:inline-flex p-2.5 rounded-full text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition"
          title={soundOn ? "Mutar sons de interface" : "Ativar sons de interface"}
          aria-label="Alternar sons de interface"
        >
          {soundOn ? (
            <Volume2 className="w-4 h-4 text-blue-600" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-400" />
          )}
        </button>

        {/* Download Resume Button */}
        <a
          href={PERSONAL_INFO.resumeUrl}
          download="Curriculo_Antonio_Junior.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundManager.playSuccess()}
          className="p-2.5 rounded-full text-slate-600 hover:text-blue-700 hover:bg-slate-100 transition"
          title="Baixar Currículo em PDF"
          aria-label="Baixar Currículo em PDF"
        >
          <FileDown className="w-4 h-4 text-blue-600" />
        </a>

        {/* WhatsApp Direct */}
        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundManager.playClick()}
          className="p-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/25 transition-transform hover:scale-105"
          title="Conversar no WhatsApp"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

      </div>
    </aside>
  );
}
