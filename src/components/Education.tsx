"use client";

import React from "react";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="formacao" className="py-24 sm:py-32 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 sm:mb-16">
          <span className="section-kicker">
            06 / FORMAÇÃO &amp; ESPECIALIZAÇÕES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Base acadêmica na FIAP & <span className="text-blue-600">especialização contínua</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Formação sólida e reconhecida pelo mercado, complementada por imersões práticas de arquitetura e desenvolvimento full-stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Academic Journey */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-8 flex items-center gap-2 font-bold">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Trajetória Acadêmica FIAP
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8">
              {EDUCATION.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Dot */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      item.status === "Cursando"
                        ? "bg-blue-600 border-white ring-4 ring-blue-100"
                        : "bg-emerald-500 border-white ring-4 ring-emerald-100"
                    }`}
                  />

                  {/* Bento Timeline Card */}
                  <div className="bg-slate-50/80 p-7 border border-slate-200/80 rounded-3xl hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-blue-700 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                        {item.institution} &bull; {item.level}
                      </span>
                      <span
                        className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                          item.status === "Cursando"
                            ? "bg-blue-100/70 text-blue-800 border border-blue-200"
                            : "bg-emerald-100/70 text-emerald-800 border border-emerald-200"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                      {item.degree}
                    </h4>

                    <p className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mb-4">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {item.period}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white text-slate-700 border border-slate-200/80 font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Level Certifications */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-8 flex items-center gap-2 font-bold">
              <Award className="w-4 h-4 text-blue-600" />
              Certificações & Imersões Práticas
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 p-6 rounded-3xl border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-blue-700 font-bold px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                      {cert.issuer}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.focus}
                  </p>
                </div>
              ))}

              {/* Callout Quote */}
              <div className="p-6 bg-blue-50/60 border border-blue-200/80 rounded-3xl">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-700 block mb-2 font-bold">
                  Compromisso com o Código
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;A formação na FIAP dá a profundidade teórica e estrutural necessária; a prática diária de construir aplicações e estudar arquitetura transforma essa base em resultados ágeis para a empresa.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
