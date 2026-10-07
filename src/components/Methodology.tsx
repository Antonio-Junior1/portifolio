"use client";

import React from "react";
import { 
  Zap, 
  FolderKanban, 
  Users, 
  SearchCheck, 
  TrendingUp, 
  MessageSquareCheck, 
  Layers 
} from "lucide-react";
import { SOFT_SKILLS } from "@/data/portfolioData";

export default function Methodology() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-600" />;
      case "FolderKanban":
        return <FolderKanban className="w-5 h-5 text-blue-600" />;
      case "Users":
        return <Users className="w-5 h-5 text-indigo-600" />;
      case "SearchCheck":
        return <SearchCheck className="w-5 h-5 text-emerald-600" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-cyan-600" />;
      case "MessageSquareCheck":
        return <MessageSquareCheck className="w-5 h-5 text-purple-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  const getBg = (name: string) => {
    switch (name) {
      case "Zap": return "bg-amber-100/70";
      case "FolderKanban": return "bg-blue-100/70";
      case "Users": return "bg-indigo-100/70";
      case "SearchCheck": return "bg-emerald-100/70";
      case "TrendingUp": return "bg-cyan-100/70";
      case "MessageSquareCheck": return "bg-purple-100/70";
      default: return "bg-blue-100/70";
    }
  };

  return (
    <section id="metodologia" className="py-24 sm:py-32 relative border-t border-slate-200/80 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono mb-4 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            05 // METODOLOGIA & POSTURA
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Como eu trabalho & <span className="text-blue-600">soft skills na prática</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Habilidades comportamentais demonstradas em entregas reais, desafios em equipe e rotinas corporativas diárias.
          </p>
        </div>

        {/* Soft Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOFT_SKILLS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 flex flex-col justify-between group hover:border-blue-400 hover:shadow-md transition-all rounded-3xl border border-slate-200/90 shadow-sm"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${getBg(item.iconName)} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Concrete Practical Context */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 block mb-1 font-bold">
                  Aplicação Concreta:
                </span>
                {item.practicalContext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
