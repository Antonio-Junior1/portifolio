"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Code2,
  Terminal,
  FileDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import HeroPlayground from "./HeroPlayground";
import CodeInspector from "./CodeInspector";
import AntigravityBackground from "./AntigravityBackground";
import { soundManager } from "@/utils/soundEffects";
import { useAvatar } from "@/context/AvatarContext";

interface HeroProps {
  onOpenCommandPalette?: () => void;
}

type RecruiterLens = "fullstack" | "frontend" | "backend" | "ai";

export default function Hero({ onOpenCommandPalette }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [lens, setLens] = useState<RecruiterLens>("fullstack");
  const [showCodeInspector, setShowCodeInspector] = useState(false);
  const { avatarSrc, avatarMode, toggleAvatarMode, setAvatarMode, avatarLabel } = useAvatar();

  const handleCopyEmail = () => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSelectLens = (newLense: RecruiterLens) => {
    soundManager.playClick();
    setLens(newLense);
  };

  const getLensDetails = () => {
    switch (lens) {
      case "frontend":
        return {
          badge: "Especialista em Interfaces Reativas & Design Systems",
          titleSupplement: "Frontend & UI Engineering",
          summary: "Especialista em construir interfaces modernas, fluidas e acessíveis com React 19, Next.js 15, TypeScript e Tailwind CSS, conectando-se perfeitamente com APIs REST e Server Actions.",
          highlightedTechs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Acessibilidade", "Framer Motion"]
        };
      case "backend":
        return {
          badge: "Foco em Microsserviços, APIs REST & Alta Confiabilidade",
          titleSupplement: "Backend & Systems Architecture",
          summary: "Focado em desenvolvimento de APIs RESTful estruturadas, controllers limpos, injeção de dependência e persistência de dados em .NET 8 (C#), Node.js, PostgreSQL e Docker.",
          highlightedTechs: [".NET 8", "C#", "Node.js", "PostgreSQL", "Docker", "REST APIs"]
        };
      case "ai":
        return {
          badge: "Soluções Aplicadas de Machine Learning & PLN",
          titleSupplement: "IA & Inteligência de Dados",
          summary: "Experiência prática no treinamento de modelos com Scikit-Learn, vetorização TF-IDF para triagem de sintomas de veículos e geração automatizada de atas e planos de ação (5W2H) com IA.",
          highlightedTechs: ["Python", "Scikit-Learn", "Vetorização TF-IDF", "Random Forest", "Flask", "Integração LLMs"]
        };
      default:
        return {
          badge: "Visão Holística: Do Frontend Reativo ao Banco de Dados",
          titleSupplement: "Desenvolvedor Full Stack",
          summary: PERSONAL_INFO.headline,
          highlightedTechs: PERSONAL_INFO.heroTechs
        };
    }
  };

  const lensData = getLensDetails();

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-slate-50/70 dark:bg-[#020617]">
      
      {/* Interactive Google Antigravity particle canvas */}
      <AntigravityBackground />

      {/* Subtle readability halo behind hero typography */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_45%,rgba(248,250,252,0.88)_0%,rgba(248,250,252,0.45)_45%,transparent_80%)] dark:bg-[radial-gradient(ellipse_at_28%_45%,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.45)_45%,transparent_80%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Segmented Recruiter Lens Switcher */}
        <div className="mb-7 sm:mb-8 inline-flex flex-wrap items-center gap-1 p-1 rounded-2xl sm:rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 shadow-2xs max-w-full">
          <span className="text-[11px] font-mono text-slate-400 font-semibold px-3 py-1 hidden sm:inline">
            Perspectiva:
          </span>
          {[
            { id: "fullstack" as const, label: "Full Stack" },
            { id: "frontend" as const, label: "Frontend & UI" },
            { id: "backend" as const, label: "Backend & .NET" },
            { id: "ai" as const, label: "IA & Dados" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectLens(item.id)}
              className={`px-3 sm:px-3.5 py-1.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-semibold transition-all active:scale-[0.97] ${
                lens === item.id
                  ? "bg-slate-900 dark:bg-blue-600 text-white shadow-2xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Streamlined Avatar + Availability Row (No heavy double-card box) */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-6">
              <button
                onClick={() => {
                  soundManager.playClick();
                  toggleAvatarMode();
                }}
                className="relative group/heroavatar focus:outline-none shrink-0 active:scale-[0.97] transition-transform"
                title={`Avatar atual: ${avatarLabel}. Clique para alternar entre Foto Real e 3D Char!`}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700 group-hover/heroavatar:ring-blue-600 shadow-sm transition-all duration-300 bg-white dark:bg-slate-800">
                  <Image
                    src={avatarSrc}
                    alt={PERSONAL_INFO.name}
                    width={72}
                    height={72}
                    priority
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover/heroavatar:scale-105 ${
                      avatarMode === "photo" ? "brightness-110 contrast-105" : ""
                    }`}
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-slate-900 dark:bg-slate-800 text-white text-[9px] font-mono font-bold border border-white dark:border-slate-700 shadow-2xs">
                  {avatarMode === "photo" ? "Foto" : "3D"}
                </span>
              </button>

              <div className="flex flex-col justify-center gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-xs">
                    Disponível para Estágio &amp; Dev Jr.
                  </span>
                  <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">&bull;</span>
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] hidden sm:inline">
                    São Paulo, SP
                  </span>
                </div>

                {/* Minimal Avatar Switcher */}
                <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 w-fit">
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setAvatarMode("photo");
                    }}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono transition ${
                      avatarMode === "photo"
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold shadow-2xs"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    Foto Real
                  </button>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setAvatarMode("char");
                    }}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono transition ${
                      avatarMode === "char"
                        ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold shadow-2xs"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    3D Char
                  </button>
                </div>
              </div>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 leading-[1.04]">
              <span className="block">{PERSONAL_INFO.name}</span>
              <span className="block mt-1.5 text-blue-600 dark:text-blue-400 font-extrabold text-3xl sm:text-5xl lg:text-[54px]">
                {lensData.titleSupplement}
              </span>
            </h1>

            {/* Clean Editorial Lens Kicker (replaces heavy pill box) */}
            <p className="mt-2 font-mono text-xs sm:text-[13px] text-blue-700 dark:text-blue-400 font-semibold tracking-tight">
              &#47;&#47; {lensData.badge}
            </p>

            {/* Narrative */}
            <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              {lensData.summary}
            </p>

            {/* Core Tech Stack Tags (Clean Neutral Scale) */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 dark:text-slate-400 font-mono text-[11px] mr-1 uppercase tracking-wider font-semibold">
                Core:
              </span>
              {lensData.highlightedTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-mono text-xs font-medium hover:border-slate-300 dark:hover:border-slate-500 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons with Tactile Feedback */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Curriculo_Antonio_Junior.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSuccess()}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3.5 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                <span>Baixar Currículo (PDF)</span>
              </a>

              <a
                href="#projetos"
                onClick={() => soundManager.playClick()}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3.5 rounded-2xl font-bold text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Ver projetos</span>
                <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </a>

              <button
                onClick={() => {
                  soundManager.playClick();
                  setShowCodeInspector(prev => !prev);
                }}
                className={`flex items-center justify-center gap-2 w-full sm:w-auto px-4.5 py-3.5 rounded-2xl font-semibold text-sm border shadow-2xs transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
                  showCodeInspector 
                    ? "bg-slate-900 dark:bg-blue-600 text-white border-slate-900 dark:border-blue-600" 
                    : "bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200/90 dark:border-slate-700"
                }`}
              >
                <Code2 className={`w-4 h-4 ${showCodeInspector ? "text-white" : "text-blue-600 dark:text-blue-400"}`} />
                <span>{showCodeInspector ? "Fechar Código" : "Inspecionar Código"}</span>
              </button>
            </div>

            {/* Direct Connect Links */}
            <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600 dark:text-slate-400">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold">
                Canais Diretos:
              </span>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (+20 Repos)</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 transition font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>

              {/* Copy Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 transition border border-slate-200 dark:border-slate-700 shadow-2xs"
                title="Copiar e-mail"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Hero Playground (Interactive Sandbox Console) */}
          <div className="lg:col-span-5 w-full">
            <HeroPlayground />
          </div>

        </div>

        {/* Live Code Inspector Accordion Panel */}
        {showCodeInspector && (
          <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-blue-700 uppercase tracking-wider font-bold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-600" />
                Demonstração de Código de Produção (Next.js, .NET 8, Python ML):
              </span>
              <button
                onClick={() => setShowCodeInspector(false)}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Fechar visualizador &times;
              </button>
            </div>
            <CodeInspector />
          </div>
        )}

      </div>
    </section>
  );
}
