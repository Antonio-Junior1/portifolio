"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Wrench, Sparkles, ArrowRight, Lock, Users } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { Project } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-9 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-600 rounded-t-3xl" />

        {/* Close Button */}
        <button
          onClick={() => {
            soundManager.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Ficha Técnica do Projeto</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {project.title}
          </h2>
          <p className="text-sm font-semibold text-blue-700 mt-1.5">
            {project.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 pb-6 border-b border-slate-100">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver Código no GitHub</span>
            </a>
          ) : project.isPrivateRepo ? (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 border border-slate-200">
              <Lock className="w-4 h-4 text-slate-500" />
              <span>Repositório Privado (Demonstração em Entrevista)</span>
            </div>
          ) : null}
          {project.secondaryGithubUrl && (
            <a
              href={project.secondaryGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Repositório {project.secondaryGithubLabel || "Backend / IA"}</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundManager.playClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md shadow-blue-500/25"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Acessar Live Demo (Deploy Vercel)</span>
            </a>
          )}
        </div>

        {/* Modal Content Details */}
        <div className="mt-6 space-y-6 text-sm text-slate-600">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs uppercase font-mono text-blue-700 tracking-wider mb-2 font-bold">
              Visão Geral do Projeto
            </h3>
            <p className="leading-relaxed bg-slate-50 p-4.5 rounded-2xl border border-slate-200 text-slate-800">
              {project.description}
            </p>
          </div>

          {/* Problem Solved */}
          <div>
            <h3 className="text-xs uppercase font-mono text-slate-900 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              Problema que o Projeto Resolve
            </h3>
            <p className="leading-relaxed bg-slate-50 p-4.5 rounded-2xl border border-slate-200 text-slate-800">
              {project.problemSolved}
            </p>
          </div>

          {/* My Role */}
          {project.myRole && (
            <div>
              <h3 className="text-xs uppercase font-mono text-blue-700 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                <Wrench className="w-3.5 h-3.5 text-blue-600" />
                Minha Participação & Contribuição Técnica
              </h3>
              <p className="leading-relaxed bg-slate-50 p-4.5 rounded-2xl border border-slate-200 text-slate-800">
                {project.myRole}
              </p>
            </div>
          )}

          {/* Collaborators */}
          {project.collaborators && project.collaborators.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-mono text-slate-900 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                Desenvolvimento Colaborativo em Equipe
              </h3>
              <div className="flex flex-wrap gap-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {project.collaborators.map((collab) => (
                  <span
                    key={collab}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white text-slate-700 border border-slate-200"
                  >
                    {collab}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h3 className="text-xs uppercase font-mono text-slate-900 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                Camadas de Arquitetura & Integração
              </h3>
              <ul className="space-y-2.5 bg-slate-50 p-4.5 rounded-2xl border border-slate-200">
                {project.architecture.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && (
            <div>
              <h3 className="text-xs uppercase font-mono text-slate-500 tracking-wider mb-2.5 font-bold">
                Destaques Técnicos de Engenharia
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tags */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-xs font-mono text-slate-500 block mb-2.5 uppercase tracking-wider font-bold">
              Stack de Tecnologias:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
          >
            Fechar Ficha Técnica
          </button>
        </div>
      </div>
    </div>
  );
}
