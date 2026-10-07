"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  DollarSign, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Play, 
  RotateCcw,
  Zap,
  Activity,
  Layers,
  ExternalLink
} from "lucide-react";

interface ProjectSandboxProps {
  projectId: string;
}

export default function ProjectSandbox({ projectId }: ProjectSandboxProps) {
  // 1. Porto AI State
  const [symptom, setSymptom] = useState("Barulho agudo de ferro ao pisar no freio");
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [portoResult, setPortoResult] = useState<{
    component: string;
    risk: "Alta" | "Média" | "Baixa";
    accuracy: string;
    recommendation: string;
  } | null>({
    component: "Pastilhas e Discos de Freio Dianteiro",
    risk: "Alta",
    accuracy: "97.8%",
    recommendation: "Substituição preventiva das pastilhas para evitar danos aos discos e perda de frenagem."
  });

  const runPortoDiagnosis = (customText?: string) => {
    const textToUse = customText || symptom;
    setIsDiagnosing(true);
    setTimeout(() => {
      setIsDiagnosing(false);
      if (textToUse.toLowerCase().includes("motor") || textToUse.toLowerCase().includes("falhando")) {
        setPortoResult({
          component: "Sistema de Injeção Eletrônica e Velas",
          risk: "Média",
          accuracy: "96.4%",
          recommendation: "Limpeza de bicos injetores e teste de centelha das velas de ignição."
        });
      } else if (textToUse.toLowerCase().includes("óleo") || textToUse.toLowerCase().includes("vazamento")) {
        setPortoResult({
          component: "Junta da Tampa de Válvulas / Cárter",
          risk: "Alta",
          accuracy: "98.1%",
          recommendation: "Inspeção de vedação do cárter e verificação imediata do nível de óleo."
        });
      } else {
        setPortoResult({
          component: "Pastilhas e Discos de Freio",
          risk: "Alta",
          accuracy: "97.8%",
          recommendation: "Substituição imediata para evitar risco mecânico e perda de eficiência."
        });
      }
    }, 600);
  };

  // 2. Meeting AI State
  const [isMeetingAnalyzing, setIsMeetingAnalyzing] = useState(false);
  const [meetingActions, setMeetingActions] = useState([
    { task: "Refatorar endpoints de autenticação JWT", owner: "Antônio Junior", deadline: "12/10", done: true },
    { task: "Configurar container Docker da API .NET 8", owner: "Carlos Eduardo", deadline: "14/10", done: false },
    { task: "Integrar modelo de Machine Learning no Next.js", owner: "Antônio Junior", deadline: "16/10", done: false },
  ]);

  const toggleAction = (idx: number) => {
    setMeetingActions(prev => prev.map((item, i) => i === idx ? { ...item, done: !item.done } : item));
  };

  // 3. QualityPulse State
  const [urlInput, setUrlInput] = useState("https://meusite.com.br");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditScores, setAuditScores] = useState({
    a11y: 98,
    perf: 95,
    sec: 100,
    seo: 98
  });

  const runAudit = () => {
    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditScores({
        a11y: Math.floor(Math.random() * 5) + 95,
        perf: Math.floor(Math.random() * 6) + 93,
        sec: 100,
        seo: Math.floor(Math.random() * 4) + 96
      });
    }, 700);
  };

  // 4. Mottu Telemetry State
  const [selectedPatio, setSelectedPatio] = useState("Pátio 01 - Mooca");
  const [mottuStats, setMottuStats] = useState({
    totalMotos: 142,
    disponiveis: 118,
    manutencao: 24,
    apiHealth: "200 OK (Swagger .NET 8)"
  });

  // Render specific interactive sandbox
  if (projectId === "challenge-porto") {
    return (
      <div className="mt-4 p-4 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
            <Bot className="w-4 h-4 text-blue-600" />
            <span>Simulador Interativo: Modelo de IA do Challenge Porto</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold border border-blue-200">
            Live Sandbox
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={symptom}
            onChange={e => setSymptom(e.target.value)}
            placeholder="Digite o sintoma (ex: barulho no freio, motor falhando...)"
            className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => runPortoDiagnosis()}
            disabled={isDiagnosing}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-1.5 shrink-0"
          >
            {isDiagnosing ? (
              <span>Vetorizando...</span>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Testar IA</span>
              </>
            )}
          </button>
        </div>

        {/* Preset symptom pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
          <span>Testes rápidos:</span>
          {[
            "Barulho agudo de ferro ao pisar no freio",
            "Motor falhando em subidas",
            "Vazamento de óleo na garagem"
          ].map((preset, i) => (
            <button
              key={i}
              onClick={() => {
                setSymptom(preset);
                runPortoDiagnosis(preset);
              }}
              className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-[10px] transition border border-slate-200"
            >
              {preset.split(" ")[0]}...
            </button>
          ))}
        </div>

        {/* Diagnosis result */}
        {portoResult && (
          <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-1 animate-in fade-in">
            <div className="flex items-center justify-between font-bold">
              <span className="text-slate-900">
                Diagnóstico: {portoResult.component}
              </span>
              <span className="text-blue-700 font-mono text-[11px]">
                Confiança: {portoResult.accuracy}
              </span>
            </div>
            <p className="text-slate-600 text-[11px]">
              {portoResult.recommendation}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (projectId === "ai-meeting-insights") {
    return (
      <div className="mt-4 p-4 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Simulador Interativo: Ata & Plano de Ação 5W2H com LLM</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold">
            Interactive 5W2H
          </span>
        </div>

        <p className="text-xs text-slate-600">
          Clique nas caixas para simular o acompanhamento do plano de ação gerado automaticamente pela LLM:
        </p>

        <div className="space-y-2">
          {meetingActions.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggleAction(idx)}
              className={`p-2.5 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition ${
                item.done
                  ? "bg-emerald-50/70 border-emerald-200 text-emerald-800"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => {}}
                  className="rounded text-emerald-600 focus:ring-0 cursor-pointer"
                />
                <span className={item.done ? "line-through opacity-80" : "font-medium"}>
                  {item.task}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono">
                <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200">
                  {item.owner}
                </span>
                <span className="text-slate-500">{item.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (projectId === "qualitypulse") {
    return (
      <div className="mt-4 p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Simulador Interativo: Auditor de Qualidade Web & API</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
            Live Scanner
          </span>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={urlInput}
            onChange={e => setUrlInput(e.target.value)}
            placeholder="URL para escanear"
            className="flex-1 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800"
          />
          <button
            onClick={runAudit}
            disabled={isAuditing}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition"
          >
            {isAuditing ? "Auditando..." : "Escanear"}
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 pt-1 font-mono text-center">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="text-emerald-700 font-bold text-sm">{auditScores.a11y}</span>
            <p className="text-[9px] text-slate-500">Acessibilidade</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="text-blue-700 font-bold text-sm">{auditScores.perf}</span>
            <p className="text-[9px] text-slate-500">Performance</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="text-indigo-700 font-bold text-sm">{auditScores.sec}</span>
            <p className="text-[9px] text-slate-500">Segurança</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <span className="text-amber-700 font-bold text-sm">{auditScores.seo}</span>
            <p className="text-[9px] text-slate-500">SEO Score</p>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "mobilesecurityx-mottu") {
    return (
      <div className="mt-4 p-4 rounded-2xl bg-white border border-sky-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-sky-700">
            <Smartphone className="w-4 h-4 text-sky-600" />
            <span>Simulador Interativo: Telemetria de Pátio Mottu</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 font-bold">
            IoT & .NET 8
          </span>
        </div>

        <div className="flex items-center justify-between text-xs font-mono">
          <select
            value={selectedPatio}
            onChange={e => setSelectedPatio(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800"
          >
            <option>Pátio 01 - Mooca</option>
            <option>Pátio 02 - Pinheiros</option>
            <option>Pátio 03 - Tatuapé</option>
          </select>
          <span className="text-emerald-700 font-bold text-[11px]">
            API .NET 8 Online
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 font-mono text-center text-xs">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900 text-sm">{mottuStats.totalMotos}</span>
            <p className="text-[9px] text-slate-500">Total Frotas</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-emerald-700 text-sm">{mottuStats.disponiveis}</span>
            <p className="text-[9px] text-slate-500">Disponíveis</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-amber-700 text-sm">{mottuStats.manutencao}</span>
            <p className="text-[9px] text-slate-500">Manutenção</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
