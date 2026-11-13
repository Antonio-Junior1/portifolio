"use client";

import React from "react";
import {
  FileText,
  Bot,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Activity,
  Wallet,
  Leaf,
} from "lucide-react";

interface ProjectPreviewProps {
  projectId: string;
}

/** Miniatura visual compacta no topo de cada card para quebrar a monotonia textual e comunicar o produto em segundos. */
export default function ProjectPreview({ projectId }: ProjectPreviewProps) {
  switch (projectId) {
    case "proton-flow-totvs":
      return (
        <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              Proton Flow • TOTVS
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
              Ollama LGPD
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 items-end h-10 bg-white rounded-xl border border-slate-200/70 p-2">
            <div className="flex items-end gap-1 h-full">
              <span className="w-1.5 h-3 bg-blue-200 rounded-xs" />
              <span className="w-1.5 h-5 bg-blue-400 rounded-xs" />
              <span className="w-1.5 h-6 bg-blue-600 rounded-xs" />
              <span className="w-1.5 h-4 bg-blue-300 rounded-xs" />
            </div>
            <div className="col-span-2 text-right leading-tight">
              <span className="block text-[9px] text-slate-400">Ata Trimestral</span>
              <span className="font-bold text-slate-800">NPS +18% • 0 Vazamentos</span>
            </div>
          </div>
        </div>
      );

    case "challenge-porto":
      return (
        <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <Bot className="w-3.5 h-3.5 text-blue-600" />
              Triagem ML (TF-IDF)
            </span>
            <span className="text-blue-700 font-bold">97.8% conf.</span>
          </div>
          <div className="rounded-xl bg-white border border-slate-200/70 px-2.5 py-2 flex items-center justify-between text-slate-700">
            <span className="truncate">&ldquo;Barulho ao pisar no freio&rdquo;</span>
            <span className="ml-2 shrink-0 text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
              Pastilhas
            </span>
          </div>
        </div>
      );

    case "qualitypulse":
      return (
        <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              Audit Scanner
            </span>
            <span className="text-slate-600">Score Global 98</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-center">
            {[
              { label: "A11y", val: "98" },
              { label: "Perf", val: "95" },
              { label: "Sec", val: "100" },
              { label: "SEO", val: "98" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-white border border-slate-200/70 py-1">
                <span className="block font-bold text-slate-900">{m.val}</span>
                <span className="text-[8px] text-slate-400 uppercase">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "futurehub":
      return (
        <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Missão IA • Spring + Expo
            </span>
            <span className="font-bold text-blue-700">+550 XP</span>
          </div>
          <div className="rounded-xl bg-white border border-slate-200/70 p-2 space-y-1.5">
            <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-3/4 h-full bg-blue-600 rounded-full" />
            </div>
            <div className="flex justify-between text-[9px] text-slate-500">
              <span>Trilha Java 17 + Python</span>
              <span>75% concluído</span>
            </div>
          </div>
        </div>
      );

    case "mobilesecurityx-mottu":
      return (
        <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              Pátio Mooca • .NET 8
            </span>
            <span className="text-emerald-700 font-bold">API 200 OK</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="rounded-lg bg-white border border-slate-200/70 py-1">
              <span className="font-bold text-slate-900">142</span>
              <span className="block text-[8px] text-slate-400">Frota</span>
            </div>
            <div className="rounded-lg bg-white border border-slate-200/70 py-1">
              <span className="font-bold text-blue-700">118</span>
              <span className="block text-[8px] text-slate-400">Livres</span>
            </div>
            <div className="rounded-lg bg-white border border-slate-200/70 py-1">
              <span className="font-bold text-slate-600">PT / ES</span>
              <span className="block text-[8px] text-slate-400">i18n</span>
            </div>
          </div>
        </div>
      );

    case "safe-core-java":
      return (
        <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              SAFE.Core • Spring Boot
            </span>
            <span className="text-slate-600">Oracle DB + JWT</span>
          </div>
          <div className="rounded-xl bg-white border border-slate-200/70 px-2.5 py-2 flex items-center justify-between text-slate-700">
            <span>GET /api/telemetria/regiao</span>
            <span className="font-bold text-emerald-700">200 OK</span>
          </div>
        </div>
      );

    case "sistema-controle-gastos":
      return (
        <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <Wallet className="w-3.5 h-3.5 text-blue-600" />
              Balanço Familiar
            </span>
            <span className="text-slate-600">REST + SQLite</span>
          </div>
          <div className="rounded-xl bg-white border border-slate-200/70 px-2.5 py-2 flex items-center justify-between">
            <span className="text-slate-500">Receitas vs Despesas</span>
            <span className="font-bold text-slate-900">Conciliado</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="mb-4 rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="inline-flex items-center gap-1.5 font-semibold text-slate-700">
              <Leaf className="w-3.5 h-3.5 text-blue-600" />
              Green-Vision • Next.js
            </span>
            <span className="text-blue-700 font-bold">Vercel Prod</span>
          </div>
          <div className="rounded-xl bg-white border border-slate-200/70 px-2.5 py-2 flex items-center justify-between text-slate-700">
            <span>Energia Limpa &amp; Indicadores</span>
            <span className="font-bold text-slate-900">98.3% TS</span>
          </div>
        </div>
      );
  }
}
