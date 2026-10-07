"use client";

import React, { useState } from "react";
import { Sparkles, ArrowUpRight, Filter, Code2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { PROJECTS, Project, PERSONAL_INFO } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: "all", label: "Todos os Projetos", count: PROJECTS.length },
    { id: "ai", label: "Inteligência Artificial & ML", count: PROJECTS.filter(p => p.category === "ai").length },
    { id: "fullstack", label: "Full Stack & Web", count: PROJECTS.filter(p => p.category === "fullstack").length },
    { id: "mobile", label: "Mobile & Apps", count: PROJECTS.filter(p => p.category === "mobile").length },
  ];

  const filteredProjects = activeCategory === "all" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 sm:py-32 relative border-t border-slate-200/80 bg-slate-50/70">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono mb-4 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              02 // PROJETOS EM DESTAQUE
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Projetos de impacto com <span className="text-blue-600">código aberto</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Soluções reais selecionadas diretamente do meu GitHub, cobrindo inteligência artificial, aplicações corporativas full-stack e apps móveis.
            </p>
          </div>

          {/* GitHub Direct Link */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm transition-all shrink-0 self-start md:self-end hover:-translate-y-0.5"
          >
            <GithubIcon className="w-4 h-4 text-slate-800" />
            <span>Ver perfil no GitHub (+20 repos)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal for Details */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
