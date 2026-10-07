"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 text-slate-900 font-extrabold text-base mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-slate-500 font-mono text-xs font-normal">/ Full Stack Developer</span>
            </div>
            <p className="text-xs text-slate-500 font-normal">
              © 2026 Antônio Junior. Todos os direitos reservados.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-blue-700 border border-slate-200 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-blue-700 border border-slate-200 transition"
              aria-label="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-xs font-mono text-slate-600 hover:text-blue-700 border border-slate-200 transition ml-2"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
