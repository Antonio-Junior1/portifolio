"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  Search, 
  Command,
  FileDown
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useAvatar } from "@/context/AvatarContext";
import { soundManager } from "@/utils/soundEffects";

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

export default function Header({ onOpenCommandPalette }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { avatarSrc, avatarMode, toggleAvatarMode, avatarLabel } = useAvatar();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 sm:top-3 inset-x-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-300">
      <div
        className={`w-full max-w-5xl rounded-2xl sm:rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-md shadow-slate-200/30 py-2 px-4 sm:px-5"
            : "bg-white/90 backdrop-blur-md border border-slate-200/70 py-2.5 px-4 sm:px-5 shadow-xs"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                soundManager.playClick();
                toggleAvatarMode();
              }}
              className="relative group/avatar focus:outline-none shrink-0"
              title={`Avatar: ${avatarLabel}. Clique para alternar foto/3D!`}
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-blue-500/20 group-hover/avatar:ring-blue-600 shadow-2xs transition-all duration-200 group-hover/avatar:scale-105 bg-slate-100">
                <img
                  src={avatarSrc}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            <Link
              href="#"
              className="group flex items-center gap-2 text-left focus:outline-none"
            >
              <span className="text-slate-900 font-bold text-sm tracking-tight group-hover:text-blue-600 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="relative flex h-2 w-2" title="Disponível para novas oportunidades">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links - 4 core links */}
          <nav className="hidden md:flex items-center gap-1 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-full transition-all duration-150 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Quick Search trigger (compact) */}
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
              title="Busca rápida (Ctrl+K)"
              aria-label="Busca rápida"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Contact CTA */}
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Fale Comigo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl md:hidden text-slate-600 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-blue-600 text-sm font-medium transition"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Curriculo_Antonio_Junior.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSuccess()}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Baixar Currículo (PDF)</span>
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600"
              >
                <span>Fale Comigo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
