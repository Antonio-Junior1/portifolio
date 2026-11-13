"use client";

import React from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2
} from "lucide-react";
import { EXPERIENCE } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 sm:py-32 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-16">
          <span className="section-kicker">
            03 / EXPERIÊNCIA PROFISSIONAL
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Vivência corporativa & <span className="text-blue-600">engenharia prática</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Atuação com suporte corporativo, infraestrutura e desenvolvimento de scripts na BB Central, fortalecendo a transição sólida para a engenharia de software.
          </p>
        </div>

        {/* Experience Bento Card */}
        <div className="bg-slate-50/80 p-7 sm:p-10 border border-slate-200/90 rounded-3xl shadow-sm hover:shadow-md transition-all">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-200/80">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {EXPERIENCE.role}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-mono font-bold">
                  {EXPERIENCE.type}
                </span>
              </div>
              <p className="text-base font-bold text-blue-700 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600 inline" />
                {EXPERIENCE.company}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 font-medium">
                <Calendar className="w-4 h-4 text-blue-600" />
                {EXPERIENCE.period}
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 font-medium">
                <MapPin className="w-4 h-4 text-indigo-600" />
                {EXPERIENCE.location}
              </span>
            </div>
          </div>

          {/* Grid: Description & Developer Bridge */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Narrative & Core Responsibilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 block mb-2 font-bold">
                  Atribuições & Escopo Corporativo:
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-white p-5 rounded-2xl border border-slate-200/80">
                  &ldquo;{EXPERIENCE.description}&rdquo;
                </p>
              </div>

              {/* Concrete achievements */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1 font-bold">
                  Principais Entregas & Atuações:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EXPERIENCE.achievements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: The Strategic Bridge to Software Engineering */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>O Diferencial na Engenharia de Software</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A experiência em suporte corporativo é a fundação para ser um <strong>desenvolvedor mais preparado</strong>:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-blue-200/60 shadow-2xs">
                  <strong className="text-slate-900 block mb-0.5">&bull; Resolução Analítica de Causa-Raiz</strong>
                  <span className="text-slate-600">Diagnóstico metódico de logs e anomalias sob pressão sem atalhos.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-blue-200/60 shadow-2xs">
                  <strong className="text-slate-900 block mb-0.5">&bull; Automação Prática via Scripts</strong>
                  <span className="text-slate-600">Criação de scripts em PowerShell e Bash que transformam tarefas manuais em rotinas automáticas.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-blue-200/60 shadow-2xs">
                  <strong className="text-slate-900 block mb-0.5">&bull; Domínio de Ambientes Corporativos</strong>
                  <span className="text-slate-600">Compreensão de permissões, políticas de Active Directory e redes TCP/IP essenciais para infra e dev.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Applied Technologies Footer */}
          <div className="mt-8 pt-6 border-t border-slate-200/80">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-3 font-bold">
              Tecnologias & Ferramentas Dominadas no Suporte:
            </span>
            <div className="flex flex-wrap gap-2">
              {EXPERIENCE.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-white text-slate-700 text-xs font-mono border border-slate-200 hover:border-blue-400 hover:text-blue-700 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
