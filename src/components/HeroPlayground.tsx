"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Layers, 
  Sliders, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Database, 
  Smartphone,
  Play,
  RotateCcw,
  Zap,
  Check
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useAvatar } from "@/context/AvatarContext";

export default function HeroPlayground() {
  const [activeTab, setActiveTab] = useState<"matcher" | "architecture" | "terminal">("matcher");
  const { toggleAvatarMode, avatarMode } = useAvatar();

  // State for Matcher
  const techOptions = [
    { id: "react", label: "React / Next.js", match: 100 },
    { id: "ts", label: "TypeScript", match: 100 },
    { id: "node", label: "Node.js / Express", match: 100 },
    { id: "dotnet", label: ".NET 8 / C#", match: 95 },
    { id: "python", label: "Python & IA / ML", match: 95 },
    { id: "mobile", label: "React Native / Expo", match: 90 },
    { id: "docker", label: "Docker & Linux", match: 90 },
    { id: "sql", label: "PostgreSQL & SQLite", match: 95 }
  ];

  const [selectedTechs, setSelectedTechs] = useState<string[]>(["react", "ts", "node", "dotnet"]);

  const toggleTech = (id: string) => {
    if (selectedTechs.includes(id)) {
      setSelectedTechs(selectedTechs.filter(t => t !== id));
    } else {
      setSelectedTechs([...selectedTechs, id]);
    }
  };

  const calculateMatch = () => {
    if (selectedTechs.length === 0) return 0;
    const total = selectedTechs.reduce((acc, curr) => {
      const item = techOptions.find(t => t.id === curr);
      return acc + (item ? item.match : 0);
    }, 0);
    return Math.round(total / selectedTechs.length);
  };

  // State for Architecture interactive nodes
  const [activeTier, setActiveTier] = useState<"frontend" | "api" | "ai" | "database">("frontend");

  const tierDetails = {
    frontend: {
      title: "Frontend Layer (React 19 & Next.js 15)",
      techs: ["React 19", "Next.js 15 (App Router)", "TypeScript Strict", "Tailwind CSS"],
      desc: "Interfaces ultra-responsivas, Server Components, client-side state reativo e foco absoluto em experiência fluida e acessibilidade."
    },
    api: {
      title: "Backend & Services Layer (.NET 8 & Node.js)",
      techs: [".NET 8 / C#", "ASP.NET Core RESTful", "Node.js / Express", "Arquitetura Desacoplada"],
      desc: "Construção de APIs robustas com validações, controllers limpos, injeção de dependência e manipulação segura de requisições."
    },
    ai: {
      title: "Inteligência Artificial & Machine Learning (Python)",
      techs: ["Python Flask", "Scikit-Learn (Random Forest)", "Vetorização TF-IDF", "Integração de LLMs"],
      desc: "Processamento de linguagem natural para triagem de sintomas de veículos e geração de atas e planos de ação (5W2H) com IA."
    },
    database: {
      title: "Persistence & Cloud Storage Layer",
      techs: ["PostgreSQL", "SQLite", "Entity Framework Core", "Firebase Firestore"],
      desc: "Modelagem relacional de dados, migrações com ORM e sincronização noSQL em tempo real para aplicações móveis e web."
    }
  };

  // State for Terminal
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Console interativo de Antônio Junior inicializado.",
    "Digite um comando ou clique nos atalhos rápidos:"
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    let response = "";

    switch (cleanCmd) {
      case "help":
        response = "Comandos disponíveis: bio, stacks, repos, cv, avatar, contato, fiap, clear";
        break;
      case "cv":
      case "curriculo":
        response = "Currículo disponível! Baixe o PDF completo clicando no botão do Hero ou acessando /curriculo-antonio-junior.pdf";
        break;
      case "bio":
        response = "Antônio Junior • Desenvolvedor Full Stack • Graduado em ADS e Cursando Engenharia de Software na FIAP.";
        break;
      case "stacks":
        response = "React, Next.js, TypeScript, Node.js, .NET 8, Python (IA), Docker, PostgreSQL, React Native.";
        break;
      case "avatar":
        toggleAvatarMode();
        response = `Avatar alternado com sucesso! Modo atual: ${avatarMode === "photo" ? "👾 3D Dev Char" : "📸 Foto Real"}.`;
        break;
      case "repos":
        response = "Possui +20 repositórios no GitHub! Destaques: Challenge Porto (IA), MotoSecurityX (.NET/Mobile), QualityPulse.";
        break;
      case "fiap":
        response = "Tecnólogo em ADS (Concluído 2024-2026) | Bacharelado em Engenharia de Software (Cursando até 2028).";
        break;
      case "contato":
        response = "Email: junuor10133@gmail.com | WhatsApp: (11) 97181-2005 | LinkedIn: /in/antoniojr1";
        break;
      case "clear":
        setTerminalHistory(["Terminal limpo. Digite 'help' para comandos."]);
        setInputVal("");
        return;
      default:
        response = `Comando não reconhecido: '${cmdText}'. Digite 'help' para ajuda.`;
    }

    setTerminalHistory(prev => [...prev, `> ${cmdText}`, response]);
    setInputVal("");
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-lg shadow-slate-200/50">
      
      {/* Top Bar Switcher */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-2 font-mono text-xs font-bold text-slate-800">
            Console do Desenvolvedor
          </span>
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-mono">
          <button
            onClick={() => setActiveTab("matcher")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              activeTab === "matcher"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Match Recrutador
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              activeTab === "architecture"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Arquitetura
          </button>
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              activeTab === "terminal"
                ? "bg-white text-blue-700 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Terminal
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Recruiter Matcher */}
      {activeTab === "matcher" && (
        <div className="space-y-5 animate-in fade-in duration-150">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-600 uppercase tracking-wider font-bold">
                1. Selecione as tecnologias da sua vaga:
              </span>
              <span className="text-xs font-bold text-blue-700 font-mono">
                {selectedTechs.length} selecionadas
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {techOptions.map(t => {
                const isSelected = selectedTechs.includes(t.id);
                return (
                  <button
                    key={t.id}
                    onClick={() => toggleTech(t.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-medium border transition-all ${
                      isSelected
                        ? "bg-blue-50 border-blue-400 text-blue-800 font-bold shadow-xs"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="truncate">{t.label}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Match Score Display */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-blue-800 uppercase tracking-wider block">
                Compatibilidade com Antônio Junior:
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                {calculateMatch() >= 90
                  ? "Excelente afinidade com a stack exigida para Estágio / Júnior Full Stack!"
                  : "Boa compatibilidade com facilidade comprovada de rápida aprendizagem!"}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right">
                <span className="text-3xl font-extrabold text-blue-700 font-mono">
                  {calculateMatch()}%
                </span>
                <span className="block text-[10px] font-mono text-slate-500">Match Técnico</span>
              </div>
              <a
                href="#contato"
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition"
              >
                Agendar Conversa
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Interactive Architecture Tier */}
      {activeTab === "architecture" && (
        <div className="space-y-4 animate-in fade-in duration-150">
          <p className="text-xs text-slate-500 font-mono">
            Clique nas camadas para explorar como Antônio constrói software:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
            <button
              onClick={() => setActiveTier("frontend")}
              className={`p-2.5 rounded-xl border text-left transition ${
                activeTier === "frontend"
                  ? "bg-blue-600 text-white border-blue-600 font-bold shadow-md"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              1. Frontend
            </button>
            <button
              onClick={() => setActiveTier("api")}
              className={`p-2.5 rounded-xl border text-left transition ${
                activeTier === "api"
                  ? "bg-blue-600 text-white border-blue-600 font-bold shadow-md"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              2. Backend / API
            </button>
            <button
              onClick={() => setActiveTier("ai")}
              className={`p-2.5 rounded-xl border text-left transition ${
                activeTier === "ai"
                  ? "bg-blue-600 text-white border-blue-600 font-bold shadow-md"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              3. IA & Machine Learning
            </button>
            <button
              onClick={() => setActiveTier("database")}
              className={`p-2.5 rounded-xl border text-left transition ${
                activeTier === "database"
                  ? "bg-blue-600 text-white border-blue-600 font-bold shadow-md"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              4. Bancos de Dados
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900">
                {tierDetails[activeTier].title}
              </h4>
              <span className="text-xs font-mono text-blue-700 font-bold">
                Camada Ativa
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {tierDetails[activeTier].desc}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200">
              {tierDetails[activeTier].techs.map(t => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono text-slate-800 font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Interactive Terminal */}
      {activeTab === "terminal" && (
        <div className="space-y-3 animate-in fade-in duration-150 font-mono text-xs">
          <div className="h-44 overflow-y-auto p-3.5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-1.5 text-[11px]">
            {terminalHistory.map((line, idx) => (
              <div 
                key={idx} 
                className={line.startsWith(">") ? "text-cyan-400 font-bold" : "text-slate-300"}
              >
                {line}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && inputVal.trim()) {
                  handleCommand(inputVal);
                }
              }}
              placeholder="Digite 'bio', 'stacks', 'repos', 'fiap' ou 'contato'..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => {
                if (inputVal.trim()) handleCommand(inputVal);
              }}
              className="px-4 py-2 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Executar
            </button>
          </div>

          {/* Quick Command Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
            <span className="text-slate-500">Atalhos rápidos:</span>
            {["bio", "stacks", "repos", "cv", "contato"].map(cmd => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition border border-slate-200"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
