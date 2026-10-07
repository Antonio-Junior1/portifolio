"use client";

import React from "react";
import { 
  GraduationCap, 
  Terminal, 
  Layers, 
  Users, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  FileDown
} from "lucide-react";
import { useAvatar } from "@/context/AvatarContext";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const { avatarSrc, avatarMode, toggleAvatarMode, avatarLabel } = useAvatar();

  return (
    <section id="sobre" className="py-24 sm:py-32 relative border-t border-slate-200/80 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono mb-4 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            01 // SOBRE MIM
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl leading-tight">
            Engenharia de software com <span className="text-blue-600">visão prática e sistêmica</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Unindo a base acadêmica de excelência na FIAP com a experiência real de resolução de problemas em infraestrutura corporativa e desenvolvimento web.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Narrative & Core Philosophy (Span 7) */}
          <div className="md:col-span-7 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono text-blue-600 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Code2 className="w-4 h-4" />
                  Perfil do Desenvolvedor
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                  Full Stack
                </span>
              </div>

              {/* Profile Card Header with Avatar */}
              <div className="flex items-center gap-3.5 mb-5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <button
                  onClick={toggleAvatarMode}
                  className="relative group/aboutavatar shrink-0 focus:outline-none"
                  title={`Avatar atual: ${avatarLabel}. Clique para alternar entre Foto Real e 3D Char!`}
                >
                  <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-blue-500/25 group-hover/aboutavatar:ring-blue-600 shadow-2xs transition-all group-hover/aboutavatar:scale-105 bg-white">
                    <img
                      src={avatarSrc}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover transition-transform group-hover/aboutavatar:scale-110"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 px-1 py-0.2 rounded-md bg-white border border-slate-200 text-[8px] font-mono shadow-2xs">
                    {avatarMode === "photo" ? "📸" : "👾"}
                  </span>
                </button>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>{PERSONAL_INFO.fullName}</span>
                      <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full border border-blue-200">
                        FIAP
                      </span>
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      São Paulo, SP • Full Stack Júnior & Estagiário
                    </p>
                  </div>

                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    download="Curriculo_Antonio_Junior.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-xs font-semibold text-slate-700 hover:text-blue-700 shadow-2xs transition self-start sm:self-auto"
                    title="Baixar currículo completo em PDF"
                  >
                    <FileDown className="w-3.5 h-3.5 text-blue-600" />
                    <span>Currículo PDF</span>
                  </a>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                "Transformo problemas complexos em soluções simples, testáveis e escaláveis."
              </h3>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Sou formado em <strong className="text-slate-800">Análise e Desenvolvimento de Sistemas pela FIAP</strong> e atualmente aprofundo meus fundamentos no <strong className="text-slate-800">Bacharelado em Engenharia de Software</strong> na mesma instituição.
                </p>
                <p>
                  Minha atuação une a agilidade do ecossistema moderno de frontend (<strong className="text-slate-800">React</strong>, <strong className="text-slate-800">Next.js</strong>, <strong className="text-slate-800">TypeScript</strong>) à solidez do backend e arquitetura (<strong className="text-slate-800">Node.js</strong>, <strong className="text-slate-800">.NET 8</strong>, <strong className="text-slate-800">Python</strong> e bancos de dados relacionais e em nuvem).
                </p>
                <p>
                  Acredito que o código só tem valor quando resolve uma dor real de forma confiável. Por isso, prezo por arquitetura limpa, código legível e documentação objetiva.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Metodologias Ágeis
              </span>
              <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Clean Architecture
              </span>
              <span className="flex items-center gap-1.5 text-blue-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" /> Git Flow
              </span>
            </div>
          </div>

          {/* Card 2: FIAP Double Degree (Span 5) */}
          <div className="md:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-blue-700 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                  FIAP
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Excelência Acadêmica
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Formação contínua na faculdade referência em tecnologia do país.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-900">Engenharia de Software</span>
                    <span className="text-blue-700 font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100/70 border border-blue-200">Cursando</span>
                  </div>
                  <p className="text-xs text-slate-500">Bacharelado &bull; Previsão 2028</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-900">Análise e Desenv. de Sistemas</span>
                    <span className="text-emerald-700 font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100/70 border border-emerald-200">Concluído</span>
                  </div>
                  <p className="text-xs text-slate-500">Graduação Tecnológica &bull; FIAP</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>Foco: Arquitetura & Cloud</span>
              <span className="text-blue-600 font-bold">&infin; Aprendizado Contínuo</span>
            </div>
          </div>

          {/* Card 3: Support & Systems Bridge (Span 4) */}
          <div className="md:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Ponte Suporte & Software
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No suporte da BB Central, lido com Active Directory, redes e sistemas corporativos. Essa vivência me capacitou a criar automações em PowerShell e Bash e a entender como falhas afetam o usuário final.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-mono text-blue-600 font-bold flex items-center gap-1.5">
              <span>&gt; Visão analítica de causa-raiz</span>
            </div>
          </div>

          {/* Card 4: Full Stack & APIs (Span 4) */}
          <div className="md:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                APIs, Backend & Dados
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Foco no desenvolvimento de microsserviços e APIs RESTful (.NET 8, Node.js e Python), com modelagem consistente em PostgreSQL, MySQL, SQLite e bancos em nuvem como Firestore.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-mono text-blue-600 font-bold flex items-center gap-1.5">
              <span>&gt; Full Cycle 3.0 & Ignite</span>
            </div>
          </div>

          {/* Card 5: Teamwork & Communication (Span 4) */}
          <div className="md:col-span-4 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Trabalho em Equipe & Facilitação
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Facilitador em equipes multidisciplinares da FIAP em desafios para Porto Seguro e Mottu. Focado em comunicação clara, suporte aos colegas e garantia de entregas no prazo.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-xs font-mono text-blue-600 font-bold flex items-center gap-1.5">
              <span>&gt; Liderança & Resolução</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
