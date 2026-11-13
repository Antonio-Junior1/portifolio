"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  ArrowRight, 
  Sliders,
  Lock
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { Project } from "@/data/portfolioData";
import ProjectSandbox from "./ProjectSandbox";
import ProjectPreview from "./ProjectPreview";

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
    "proton-flow-totvs",
    "challenge-porto",
    "futurehub",
    "qualitypulse",
    "mobilesecurityx-mottu",
    "safe-core-java"
  ].includes(project.id);

  return (
    <div className="light-card p-6 sm:p-7 flex flex-col justify-between group/card">
      
      <div>
        {/* Top Metadata & View Toggle (streamlined, single accent) */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider">
            {getCategoryLabel(project.category)}
          </span>

          <div className="flex items-center gap-1.5">
            {project.demoUrl && (
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            )}

            {hasInteractiveSandbox && (
              <button
                onClick={() => setActiveView(activeView === "overview" ? "sandbox" : "overview")}
                className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border transition active:scale-[0.97] flex items-center gap-1 ${
                  activeView === "sandbox"
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
                title="Alternar entre prévia visual e simulador interativo"
              >
                <Sliders className="w-3 h-3" />
                {activeView === "sandbox" ? "Prévia" : "Sandbox"}
              </button>
            )}
          </div>
        </div>

        {/* Conditional View: Sandbox vs Visual Preview + Editorial Copy */}
        {activeView === "sandbox" && hasInteractiveSandbox ? (
          <div className="animate-in fade-in duration-150">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug mb-1">
              {project.title}
            </h3>
            <ProjectSandbox projectId={project.id} />
          </div>
        ) : (
          <>
            <ProjectPreview projectId={project.id} />

            {/* Title & Subtitle */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover/card:text-blue-600 transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1 mb-3">
              {project.subtitle}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Problem Solved (Editorial Left Accent instead of nested heavy box) */}
            <div className="mb-5 pl-3 border-l-2 border-blue-600/35">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5 font-semibold">
                Impacto &amp; Problema Resolvido
              </span>
              <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          </>
        )}

        {/* Tech tags (Clean neutral scale) */}
        <div className="flex flex-wrap gap-1.5 mt-4 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-slate-100/80 text-slate-600 font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 text-[11px] font-mono rounded-md text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition"
              title="Ver repositório principal no GitHub"
              aria-label={`Ver repositório de ${project.title} no GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          ) : project.isPrivateRepo ? (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-100 text-slate-600 border border-slate-200 text-[11px] font-mono font-semibold"
              title="Repositório privado colaborativo — demonstração técnica disponível em entrevista"
            >
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Repo Privado</span>
            </span>
          ) : null}
          {project.secondaryGithubUrl && (
            <a
              href={project.secondaryGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-[11px] font-mono font-bold transition"
              title={`Ver repositório ${project.secondaryGithubLabel || "Secundário"} no GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{project.secondaryGithubLabel || "API"}</span>
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
