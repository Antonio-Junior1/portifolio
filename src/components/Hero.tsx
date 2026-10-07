"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  FileDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import HeroPlayground from "./HeroPlayground";
import CodeInspector from "./CodeInspector";
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
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-slate-50/60">
      
      {/* Decorative ambient blurred pastel orbs */}
      <div className="absolute top-10 left-1/4 w-[450px] h-[300px] bg-sky-100 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-indigo-100/70 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive Recruiter Lens Switcher Bar */}
        <div className="mb-8 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-white border border-slate-200/90 shadow-sm max-w-2xl flex flex-wrap items-center gap-1">
          <span className="text-[11px] font-mono text-slate-400 font-bold px-3 py-1 uppercase tracking-wider hidden sm:inline">
            Perspectiva:
          </span>
          <button
            onClick={() => handleSelectLens("fullstack")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              lens === "fullstack"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ⚡ Full Stack
          </button>
          <button
            onClick={() => handleSelectLens("frontend")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              lens === "frontend"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ⚛️ Frontend & UI
          </button>
          <button
            onClick={() => handleSelectLens("backend")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              lens === "backend"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            ⚙️ Backend & .NET
          </button>
          <button
            onClick={() => handleSelectLens("ai")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              lens === "ai"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🤖 Inteligência Artificial
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Profile Avatar Bar with Status & Interactive Switcher */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-6 p-2 sm:p-2.5 pr-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <button
                onClick={() => {
                  soundManager.playClick();
                  toggleAvatarMode();
                }}
                className="relative group/heroavatar focus:outline-none shrink-0"
                title={`Avatar atual: ${avatarLabel}. Clique para alternar entre Foto Real e 3D Char!`}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden ring-2 ring-blue-500/30 group-hover/heroavatar:ring-blue-600 shadow-sm transition-all duration-300 group-hover/heroavatar:scale-105 bg-slate-100">
                  <img
                    src={avatarSrc}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/heroavatar:scale-110"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-full bg-slate-900 text-white text-[9px] font-mono font-bold border-2 border-white shadow-xs">
                  {avatarMode === "photo" ? "📸 Foto" : "👾 3D"}
                </span>
              </button>

              <div className="flex flex-col justify-center gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-xs shadow-emerald-400" />
                  </span>
                  <span className="text-emerald-700 font-bold text-xs">
                    Disponível para Estágio & Jr.
                  </span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="text-slate-500 font-mono text-[11px] hidden sm:inline">
                    São Paulo, SP
                  </span>
                </div>

                {/* Avatar Switcher Pills */}
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-slate-400 mr-1 hidden sm:inline">Avatar:</span>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setAvatarMode("photo");
                    }}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono transition ${
                      avatarMode === "photo"
                        ? "bg-blue-600 text-white font-bold shadow-2xs"
                        : "bg-slate-100 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    📸 Foto Real
                  </button>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setAvatarMode("char");
                    }}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono transition ${
                      avatarMode === "char"
                        ? "bg-blue-600 text-white font-bold shadow-2xs"
                        : "bg-slate-100 text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    👾 3D Char
                  </button>
                </div>
              </div>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-2 leading-[1.08]">
              <span className="block">{PERSONAL_INFO.name}</span>
              <span className="block mt-2 text-blue-600 font-extrabold text-3xl sm:text-5xl lg:text-6xl">
                {lensData.titleSupplement}
              </span>
            </h1>

            {/* Dynamic Recruiter Focus Pill */}
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lensData.badge}</span>
            </div>

            {/* Narrative */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {lensData.summary}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm">
              <span className="text-slate-500 font-mono text-xs mr-1 uppercase tracking-wider font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blue-600" />
                Stack Core:
              </span>
              {lensData.highlightedTechs.map((tech) => (
                <span
                  key={tech}
                  className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs font-semibold shadow-2xs hover:border-blue-500 hover:text-blue-700 transition-all duration-150 hover:-translate-y-0.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Curriculo_Antonio_Junior.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playSuccess()}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3.5 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileDown className="w-4 h-4" />
                <span>Baixar Currículo (PDF)</span>
              </a>

              <a
                href="#projetos"
                onClick={() => soundManager.playClick()}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3.5 rounded-2xl font-bold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ver projetos</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </a>

              <button
                onClick={() => {
                  soundManager.playClick();
                  setShowCodeInspector(prev => !prev);
                }}
                className={`flex items-center justify-center gap-2 w-full sm:w-auto px-4.5 py-3.5 rounded-2xl font-semibold text-sm border shadow-2xs transition-all duration-200 hover:-translate-y-0.5 ${
                  showCodeInspector 
                    ? "bg-slate-900 text-white border-slate-900" 
                    : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200/90"
                }`}
              >
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>{showCodeInspector ? "Fechar Código" : "Inspecionar Código"}</span>
              </button>
            </div>

            {/* Direct Connect Links */}
            <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold">
                Canais Diretos:
              </span>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-700 transition font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (+20 Repos)</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-blue-700 transition font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              {/* Copy Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition border border-slate-200 shadow-2xs"
                title="Copiar e-mail"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
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
