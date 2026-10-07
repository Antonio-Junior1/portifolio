"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Bot, 
  Shield, 
  Activity, 
  DollarSign, 
  Smartphone,
  Play,
  Sliders
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { Project } from "@/data/portfolioData";
import ProjectSandbox from "./ProjectSandbox";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const [activeView, setActiveView] = useState<"overview" | "sandbox">("overview");

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "ai":
        return "IA & Machine Learning";
      case "mobile":
        return "Mobile & IoT";
      case "fullstack":
        return "Full Stack & Web";
      case "backend":
        return "Backend & APIs";
      default:
        return "Software Engineering";
    }
  };

  const hasInteractiveSandbox = [
    "challenge-porto",
    "ai-meeting-insights",
    "qualitypulse",
    "mobilesecurityx-mottu"
  ].includes(project.id);

  return (
    <div className="p-6 sm:p-7 flex flex-col justify-between group/card bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 rounded-3xl">
      
      <div>
        {/* Top Badges & View Toggle */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {getCategoryLabel(project.category)}
          </span>

          <div className="flex items-center gap-1.5">
            {project.demoUrl && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Demo
              </span>
            )}

            {hasInteractiveSandbox && (
              <button
                onClick={() => setActiveView(activeView === "overview" ? "sandbox" : "overview")}
                className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border transition flex items-center gap-1 ${
                  activeView === "sandbox"
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                }`}
                title="Alternar entre visão geral e simulador interativo"
              >
                <Sliders className="w-3 h-3" />
                {activeView === "sandbox" ? "Ver Dados" : "Testar Sandbox"}
              </button>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover/card:text-blue-600 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-1 mb-3">
          {project.subtitle}
        </p>

        {/* Conditional View: Sandbox vs Overview */}
        {activeView === "sandbox" && hasInteractiveSandbox ? (
          <div className="animate-in fade-in duration-150">
            <ProjectSandbox projectId={project.id} />
          </div>
        ) : (
          <>
            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Problem Solved Box */}
            <div className="mb-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 block mb-1 font-bold">
                Problema Resolvido:
              </span>
              <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          </>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[11px] font-mono rounded-lg bg-slate-100 text-slate-700 border border-slate-200/70 font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="px-2 py-0.5 text-[11px] font-mono rounded-lg bg-slate-100 text-slate-500">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition"
              title="Ver repositório no GitHub"
              aria-label={`Ver repositório de ${project.title} no GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition"
              title="Acessar projeto online"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Demo</span>
            </a>
          )}
        </div>

        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 group/btn py-1.5 px-3 rounded-xl hover:bg-blue-50 transition"
        >
          <span>Ficha Técnica</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}
