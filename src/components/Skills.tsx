"use client";

import React, { useState } from "react";
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Sparkles, 
  Smartphone, 
  Layers,
  Search,
  CheckCircle2,
  ExternalLink,
  Code2,
  X
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

interface SkillDetail {
  name: string;
  category: string;
  tag?: string;
  appliedIn: string;
  highlights: string;
}

const SKILL_PRACTICAL_MAP: Record<string, { appliedIn: string; highlights: string }> = {
  "React 19": {
    appliedIn: "Challenge Porto & Meeting AI Insights",
    highlights: "Componentes desacoplados, client/server boundaries, hooks customizados e renderização otimizada."
  },
  "Next.js 15": {
    appliedIn: "Portfólio & QualityPulse Web",
    highlights: "App Router com layouts aninhados, Server Actions, font optimization e performance Lighthouse 98+."
  },
  "TypeScript": {
    appliedIn: "Todos os projetos frontend e backend",
    highlights: "Tipagem estrita (strict mode), interfaces genéricas, schemas Zod e refatorações sem regressão."
  },
  "Tailwind CSS": {
    appliedIn: "Aplicações web corporativas e acadêmicas",
    highlights: "Design tokens, glassmorphism, suporte nativo a temas e responsividade fluida."
  },
  "Node.js": {
    appliedIn: "Meeting AI & APIs de suporte",
    highlights: "APIs RESTful com Express, integração de endpoints assíncronos, middlewares de autenticação e validação."
  },
  ".NET 8 / C#": {
    appliedIn: "MotoSecurityX Mottu Web API",
    highlights: "Arquitetura em camadas, injeção de dependência, Entity Framework Core e controllers RESTful tipados."
  },
  "Python": {
    appliedIn: "Challenge Porto Seguro & NLP Pipeline",
    highlights: "Processamento de Linguagem Natural, vetorização TF-IDF, Scikit-learn e scripts para automação de tarefas."
  },
  "PostgreSQL": {
    appliedIn: "Sistemas corporativos & MotoSecurityX",
    highlights: "Modelagem relacional, chaves estrangeiras, índices e transações seguras com ORMs."
  },
  "Docker": {
    appliedIn: "Containerização de microsserviços",
    highlights: "Criação de Dockerfiles otimizados multi-stage e orquestração com Docker Compose."
  },
  "Git & GitHub": {
    appliedIn: "Mais de 20 repositórios versionados",
    highlights: "Git Flow, commits semânticos (Conventional Commits), pull requests e automações de CI."
  }
};

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-blue-600" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-600" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-600" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-sky-600" />;
      case "BrainCircuit":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-teal-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  const getTagStyle = (tag?: string) => {
    switch (tag) {
      case "Principal":
        return "bg-blue-100 text-blue-700 font-bold border-blue-200";
      case "Corporativo":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Avançado":
        return "bg-emerald-100 text-emerald-700 font-bold border-emerald-200";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  const handleSelectSkill = (skillName: string, category: string, tag?: string) => {
    soundManager.playClick();
    const details = SKILL_PRACTICAL_MAP[skillName] || {
      appliedIn: "Projetos acadêmicos na FIAP e desafios práticos",
      highlights: "Aplicado com padrões modernos de desenvolvimento, testes e boas práticas de código limpo."
    };

    setSelectedSkill({
      name: skillName,
      category,
      tag,
      appliedIn: details.appliedIn,
      highlights: details.highlights
    });
  };

  // Filter categories and skills by search query
  const filteredCategories = SKILL_CATEGORIES.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(cat => cat.skills.length > 0);

  return (
    <section id="tecnologias" className="py-24 sm:py-32 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono mb-4 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              04 // STACK & COMPETÊNCIAS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Tecnologias dominadas na <span className="text-blue-600">prática e no código</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Competências estruturadas por camadas arquiteturais. Clique em qualquer tecnologia para inspecionar a aplicação real no portfólio.
            </p>
          </div>

          {/* Interactive Live Search Input */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Filtrar stack (ex: React, .NET)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Live Selected Skill Inspector Banner */}
        {selectedSkill && (
          <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-blue-50/90 border border-blue-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/25 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-slate-900">
                    {selectedSkill.name}
                  </h4>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                    {selectedSkill.category}
                  </span>
                  {selectedSkill.tag && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getTagStyle(selectedSkill.tag)}`}>
                      {selectedSkill.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600">
                  <strong className="text-blue-700">Aplicado em:</strong> {selectedSkill.appliedIn}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  <strong className="text-slate-700">Destaque:</strong> {selectedSkill.highlights}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white/50 transition self-end sm:self-center"
              title="Fechar painel de inspeção"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 p-7 flex flex-col justify-between group rounded-3xl border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges (Interactive Buttons) */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => handleSelectSkill(skill.name, cat.title, skill.tag)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-150 hover:scale-105 ${
                        selectedSkill?.name === skill.name
                          ? "bg-blue-600 text-white border-blue-600 font-bold shadow-xs"
                          : "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-700"
                      }`}
                      title={`Clique para ver detalhes de ${skill.name}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${selectedSkill?.name === skill.name ? "bg-white" : "bg-blue-600"}`} />
                      <span className="font-medium">{skill.name}</span>
                      {skill.tag && (
                        <span className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-md border ${getTagStyle(skill.tag)}`}>
                          {skill.tag}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{cat.skills.length} tecnologias</span>
                <span className="text-blue-700 font-bold">Clique para inspecionar</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
