"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Play, 
  Copy, 
  Check, 
  Terminal, 
  Sparkles, 
  RotateCcw,
  Layers,
  FileCode
} from "lucide-react";
import { soundManager } from "@/utils/soundEffects";

interface CodeSnippet {
  id: string;
  name: string;
  language: string;
  stack: string;
  code: string;
  simulatedOutput: string[];
}

const SNIPPETS: CodeSnippet[] = [
  {
    id: "nextjs",
    name: "action.ts",
    language: "typescript",
    stack: "Next.js 15 & Zod",
    code: `"use server";
import { z } from "zod";
import { db } from "@/lib/db";

const Schema = z.object({
  title: z.string().min(3),
  value: z.number().positive(),
  category: z.enum(["infra", "dev", "ai"])
});

export async function createRecord(prevState: any, formData: FormData) {
  const parsed = Schema.safeParse({
    title: formData.get("title"),
    value: Number(formData.get("value")),
    category: formData.get("category")
  });

  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const result = await db.transaction.create({ data: parsed.data });
  return { success: true, id: result.id };
}`,
    simulatedOutput: [
      "[Server Action] Recebendo FormData...",
      "[Zod Validation] Schema validado com sucesso (strict type-check)",
      "[Database] Prisma transaction executada em 18ms",
      "✓ Registro persistido com status 201 Created"
    ]
  },
  {
    id: "dotnet",
    name: "VehicleController.cs",
    language: "csharp",
    stack: ".NET 8 & C#",
    code: `[ApiController]
[Route("api/v1/[controller]")]
public class VehicleTelemetryController : ControllerBase
{
    private readonly ITelemetryService _service;
    private readonly ILogger<VehicleTelemetryController> _logger;

    public VehicleTelemetryController(
        ITelemetryService service, 
        ILogger<VehicleTelemetryController> logger)
    {
        _service = service;
        _logger = logger;
    }

    [HttpPost("diagnostics")]
    public async Task<IActionResult> Analyze([FromBody] TelemetryPayload payload)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        
        var diagnosis = await _service.PredictFaultAsync(payload);
        _logger.LogInformation("Veículo {Id} analisado com sucesso", payload.VehicleId);
        
        return Ok(diagnosis);
    }
}`,
    simulatedOutput: [
      "[ASP.NET Core 8] Injeção de dependência resolvida",
      "[Route] POST /api/v1/VehicleTelemetry/diagnostics -> Status 200 OK",
      "[TelemetryService] Telemetria processada para veículo #MOTTU-492",
      "✓ Resposta serializada em JSON (tempo: 24ms)"
    ]
  },
  {
    id: "python",
    name: "pipeline_ml.py",
    language: "python",
    stack: "Python & Scikit-Learn",
    code: `import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline

def build_diagnostic_pipeline():
    # Pipeline de PLN para triagem de queixas mecânicas
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(ngram_range=(1, 2), min_df=2)),
        ('clf', RandomForestClassifier(n_estimators=100, random_state=42))
    ])
    return pipeline

def predict_issue(model, complaint_text: str):
    cleaned = complaint_text.strip().lower()
    prediction = model.predict([cleaned])[0]
    confidence = np.max(model.predict_proba([cleaned]))
    return {"category": prediction, "confidence": round(confidence * 100, 2)}`,
    simulatedOutput: [
      "[Python 3.11] Scikit-Learn Pipeline inicializado",
      "[TF-IDF] Vetorização de n-grams (1, 2) concluída",
      "[Random Forest] Inferência concluída com 100 árvores",
      "✓ Predição: 'Falha no Sistema de Freios' (Confiança: 96.8%)"
    ]
  }
];

export default function CodeInspector() {
  const [activeSnippetId, setActiveSnippetId] = useState<string>("nextjs");
  const [isRunning, setIsRunning] = useState(false);
  const [runLogs, setRunLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const activeSnippet = SNIPPETS.find(s => s.id === activeSnippetId) || SNIPPETS[0];

  const handleCopy = () => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    soundManager.playClick();
    setIsRunning(true);
    setRunLogs(["[Simulador] Compilando e executando snippet..."]);

    setTimeout(() => {
      setRunLogs(activeSnippet.simulatedOutput);
      setIsRunning(false);
      soundManager.playSuccess();
    }, 600);
  };

  return (
    <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl shadow-slate-200/50 bg-white">
      
      {/* Editor Window Header */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-100 border-b border-slate-200 gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-2 font-mono text-xs font-bold text-slate-800 flex items-center gap-1.5">
            <FileCode className="w-3.5 h-3.5 text-blue-600" />
            Inspetor de Código em Produção
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs font-mono">
          {SNIPPETS.map(snippet => (
            <button
              key={snippet.id}
              onClick={() => {
                soundManager.playClick();
                setActiveSnippetId(snippet.id);
                setRunLogs([]);
              }}
              className={`px-3 py-1 rounded-lg font-semibold transition ${
                activeSnippetId === snippet.id
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {snippet.name}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-xs font-mono text-slate-700 hover:bg-slate-50 border border-slate-200 transition"
            title="Copiar código"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition disabled:opacity-50"
          >
            <Play className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : ""}`} />
            <span>{isRunning ? "Executando..." : "Simular"}</span>
          </button>
        </div>
      </div>

      {/* Code Viewer */}
      <div className="p-4 sm:p-6 bg-slate-950 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
          <span className="text-cyan-400 font-semibold">{activeSnippet.stack}</span>
          <span className="text-slate-500">Padrão Arquitetural Limpo &bull; Produção</span>
        </div>
        <pre className="text-slate-200 leading-relaxed font-mono">
          <code>{activeSnippet.code}</code>
        </pre>
      </div>

      {/* Execution Output Console */}
      {runLogs.length > 0 && (
        <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs font-mono animate-in fade-in duration-200">
          <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Saída do Terminal em Tempo Real:</span>
          </div>
          <div className="space-y-1 text-slate-300">
            {runLogs.map((log, i) => (
              <div 
                key={i} 
                className={log.startsWith("✓") ? "text-emerald-400 font-bold" : "text-slate-300"}
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
