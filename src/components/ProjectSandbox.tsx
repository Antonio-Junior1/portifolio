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
  ExternalLink,
  FileText
} from "lucide-react";

interface ProjectSandboxProps {
  projectId: string;
}

export default function ProjectSandbox({ projectId }: ProjectSandboxProps) {
  // 0. Proton Flow (TOTVS) Local AI Meeting Minutes State
  const [meetingTranscript, setMeetingTranscript] = useState(
    "Cliente relatou atraso na entrega do módulo fiscal e pediu aprovação urgente da diretoria para liberar a implantação."
  );
  const [isExtractingAta, setIsExtractingAta] = useState(false);
  const [ataApproved, setAtaApproved] = useState(false);
  const [ataResult, setAtaResult] = useState<{
    category: string;
    urgency: "Crítica" | "Alta" | "Média";
    actionPlan: string;
    model: string;
  }>({
    category: "atraso_prazo / aprovacao_pendente",
    urgency: "Crítica",
    actionPlan: "Escalar homologação do módulo fiscal com squad ERP e agendar alinhamento de aprovação até 48h.",
    model: "Ollama llama3 + Faster-Whisper (LGPD Local)"
  });

  const runProtonExtraction = (customSnippet?: string) => {
    const text = (customSnippet ?? meetingTranscript).toLowerCase();
    setIsExtractingAta(true);
    setAtaApproved(false);
    setTimeout(() => {
      setIsExtractingAta(false);
      if (text.includes("insatisfa") || text.includes("nps") || text.includes("chamado")) {
        setAtaResult({
          category: "insatisfacao_cliente",
          urgency: "Alta",
          actionPlan: "Acionar Customer Success para revisão dos chamados abertos e plano de recuperação de NPS trimestral.",
          model: "Ollama qwen2.5:3b + DPO Reranker"
        });
      } else if (text.includes("fila") || text.includes("lento") || text.includes("gargalo")) {
        setAtaResult({
          category: "gargalo_operacional",
          urgency: "Média",
          actionPlan: "Mapear etapa de integração no pipeline de faturamento e automatizar fila assíncrona.",
          model: "Ollama llama3 + Faster-Whisper (LGPD Local)"
        });
      } else {
        setAtaResult({
          category: "atraso_prazo / aprovacao_pendente",
          urgency: "Crítica",
          actionPlan: "Escalar homologação do módulo fiscal com squad ERP e agendar alinhamento de aprovação até 48h.",
          model: "Ollama llama3 + Faster-Whisper (LGPD Local)"
        });
      }
    }, 550);
  };

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

  // 2. FutureHub Gamified AI Missions State
  const [futureHubMissions, setFutureHubMissions] = useState([
    { task: "Arquitetar API RESTful em Spring Boot com JWT", area: "Backend Java", xp: "+250 XP", done: true },
    { task: "Integrar gerador de missões com IA em Python/Flask", area: "IA & NLP", xp: "+300 XP", done: true },
    { task: "Sincronizar ranking em tempo real no App React Native", area: "Mobile Expo", xp: "+200 XP", done: false },
  ]);

  const toggleMission = (idx: number) => {
    setFutureHubMissions(prev => prev.map((item, i) => i === idx ? { ...item, done: !item.done } : item));
  };

  // 5. SAFE.Core Environmental Telemetry State
  const [selectedRegion, setSelectedRegion] = useState("Sudeste - São Paulo");
  const [sensorTemp, setSensorTemp] = useState(38.4);

  const simulateSensorReading = (region: string) => {
    setSelectedRegion(region);
    if (region.includes("Centro-Oeste")) setSensorTemp(41.2);
    else if (region.includes("Sul")) setSensorTemp(24.6);
    else setSensorTemp(38.4);
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
  if (projectId === "proton-flow-totvs") {
    return (
      <div className="mt-4 p-4 rounded-2xl bg-white border border-violet-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-violet-700">
            <FileText className="w-4 h-4 text-violet-600" />
            <span>Simulador Proton Flow: Ata & IA Local (TOTVS)</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 font-bold border border-violet-200">
            LGPD On-Premise
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={meetingTranscript}
            onChange={e => setMeetingTranscript(e.target.value)}
            placeholder="Trecho transcrito pelo Faster-Whisper..."
            className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-500"
          />
          <button
            onClick={() => runProtonExtraction()}
            disabled={isExtractingAta}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 transition flex items-center justify-center gap-1.5 shrink-0"
          >
            {isExtractingAta ? (
              <span>Analisando...</span>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Extrair Ata</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
          <span>Cenários:</span>
          {[
            "Cliente relatou atraso no módulo fiscal e aprovação pendente.",
            "Insatisfação com tempo de resposta de chamados e queda de NPS.",
            "Gargalo operacional e fila lenta no fechamento diário."
          ].map((preset, i) => (
            <button
              key={i}
              onClick={() => {
                setMeetingTranscript(preset);
                runProtonExtraction(preset);
              }}
              className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-[10px] transition border border-slate-200"
            >
              {preset.split(" ").slice(0, 2).join(" ")}...
            </button>
          ))}
        </div>

        <div className="p-3 rounded-xl bg-violet-50/70 border border-violet-200 text-xs space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 font-bold">
            <span className="text-slate-900 font-mono text-[11px]">
              Dor: <span className="text-violet-700">{ataResult.category}</span>
            </span>
            <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
              ataResult.urgency === "Crítica"
                ? "bg-rose-50 text-rose-700 border-rose-200"
                : ataResult.urgency === "Alta"
                ? "bg-amber-50 text-amber-800 border-amber-200"
                : "bg-blue-50 text-blue-700 border-blue-200"
            }`}>
              Urgência: {ataResult.urgency}
            </span>
          </div>
          <p className="text-slate-700 text-[11px] leading-relaxed">
            <strong>Plano de Ação:</strong> {ataResult.actionPlan}
          </p>
          <div className="flex items-center justify-between pt-1 border-t border-violet-200/60">
            <span className="text-[10px] font-mono text-slate-500">{ataResult.model}</span>
            <button
              onClick={() => setAtaApproved(prev => !prev)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition border ${
                ataApproved
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white text-violet-700 border-violet-300 hover:bg-violet-100"
              }`}
            >
              {ataApproved ? "✓ Validado (PostgreSQL)" : "Aprovar Human-in-the-Loop"}
            </button>
          </div>
        </div>
      </div>
    );
  }

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

  if (projectId === "futurehub") {
    const totalXp = futureHubMissions.reduce((acc, m) => acc + (m.done ? parseInt(m.xp.replace(/\D/g, ""), 10) : 0), 0);
    return (
      <div className="mt-4 p-4 rounded-2xl bg-white border border-blue-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Simulador: Missões IA & Ranking (Spring Boot + Python)</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold">
            {totalXp} XP Acumulados
          </span>
        </div>

        <p className="text-xs text-slate-600">
          Marque as missões geradas pela API de IA para simular a pontuação do usuário no ranking Java/Spring:
        </p>

        <div className="space-y-2">
          {futureHubMissions.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggleMission(idx)}
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
              <div className="flex items-center gap-1.5 text-[10px] font-mono shrink-0 ml-2">
                <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200">
                  {item.area}
                </span>
                <span className="font-bold text-indigo-700">{item.xp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (projectId === "safe-core-java") {
    const isCritical = sensorTemp >= 35;
    return (
      <div className="mt-4 p-4 rounded-2xl bg-white border border-indigo-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
            <Activity className="w-4 h-4 text-indigo-600" />
            <span>Simulador SAFE.Core: Telemetria & Alertas (Java + Oracle)</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold">
            JWT Auth OK
          </span>
        </div>

        <div className="flex items-center justify-between text-xs font-mono gap-2">
          <select
            value={selectedRegion}
            onChange={e => simulateSensorReading(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800"
          >
            <option>Sudeste - São Paulo</option>
            <option>Centro-Oeste - Pantanal</option>
            <option>Sul - Curitiba</option>
          </select>
          <span className={`font-bold text-[11px] px-2 py-0.5 rounded-md border ${
            isCritical ? "bg-amber-50 text-amber-800 border-amber-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"
          }`}>
            {isCritical ? "⚠️ Alerta Térmico Ativo" : "✓ Nível Normal"}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 font-mono text-center text-xs">
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-900 text-sm">{sensorTemp}°C</span>
            <p className="text-[9px] text-slate-500">Média Regional</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-indigo-700 text-sm">Oracle DB</span>
            <p className="text-[9px] text-slate-500">Spring Data JPA</p>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-emerald-700 text-sm">200 OK</span>
            <p className="text-[9px] text-slate-500">/swagger-ui</p>
          </div>
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
