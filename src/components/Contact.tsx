"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [deliveryMode, setDeliveryMode] = useState<"server" | "mailto">("server");
  const [lastSubmittedData, setLastSubmittedData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopyEmail = () => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClick();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setSubmitError(result.error || "Erro ao enviar a mensagem. Tente pelo WhatsApp.");
        setIsSubmitting(false);
        return;
      }

      setLastSubmittedData(formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
      soundManager.playSuccess();

      if (result.delivery === "mailto" && result.mailtoUrl) {
        setDeliveryMode("mailto");
        window.location.href = result.mailtoUrl;
      } else {
        setDeliveryMode("server");
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      // Fallback directly to mailto if offline or network error
      const mailtoSubject = encodeURIComponent(`[Portfólio] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `Olá Antônio,\n\n${formData.message}\n\n---\nEnviado por: ${formData.name} (${formData.email})`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setLastSubmittedData(formData);
      setDeliveryMode("mailto");
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  // Generate dynamic WhatsApp link based on input
  const getDynamicWhatsAppUrl = (source = formData) => {
    const text = encodeURIComponent(
      `Olá Antônio, meu nome é ${source.name || "[Seu Nome]"} e estou entrando em contato sobre: ${source.subject || "Oportunidade na área de tecnologia"}. ${source.message ? `Mensagem: ${source.message}` : ""}`
    );
    return `https://wa.me/5511971812005?text=${text}`;
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative border-t border-slate-200/80 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="section-kicker">
            07 / CONTATO &amp; OPORTUNIDADES
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Vamos <span className="text-blue-600">conversar?</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            Estou aberto a novas oportunidades na área de tecnologia e sempre interessado em conhecer novos projetos e desafios.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* E-mail Card with 1-Click Copy */}
            <div className="bg-white p-6 border border-slate-200/90 hover:border-blue-400 rounded-3xl shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider block font-bold">
                      E-mail Profissional
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-slate-900 hover:text-blue-700 transition break-all mt-1 block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition shrink-0"
                  title="Copiar e-mail"
                  aria-label="Copiar e-mail"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-emerald-700 font-bold mt-3 flex items-center gap-1.5 pt-2 border-t border-slate-100">
                  <Check className="w-3.5 h-3.5" /> E-mail copiado para a área de transferência!
                </p>
              )}
            </div>

            {/* WhatsApp Card with direct link */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 border border-slate-200/90 hover:border-emerald-500/60 flex items-center justify-between group rounded-3xl shadow-sm transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider block font-bold">
                    WhatsApp & Ligação
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 border border-slate-200/90 hover:border-blue-500/60 flex items-center justify-between group rounded-3xl shadow-sm transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider block font-bold">
                    LinkedIn
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">
                    linkedin.com/in/antoniojr1
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 border border-slate-200/90 hover:border-slate-400 flex items-center justify-between group rounded-3xl shadow-sm transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 shrink-0 border border-slate-200 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                    GitHub
                  </span>
                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">
                    github.com/Antonio-Junior1
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition" />
            </a>

            {/* Location Pill */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 text-xs text-slate-600 shadow-2xs">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span>São Paulo - SP &bull; Presencial, Híbrido ou Remoto</span>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-9 border border-slate-200/90 rounded-3xl shadow-md relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    Envie uma mensagem direta
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Preencha os campos para contato imediato.
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                  Resposta Rápida
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-900 mb-1.5">
                    {deliveryMode === "server"
                      ? "Mensagem Enviada com Sucesso!"
                      : "Mensagem Preparada no seu Cliente de E-mail!"}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {deliveryMode === "server"
                      ? "Muito obrigado pelo contato! Recebi sua mensagem e retornarei ao seu e-mail o mais breve possível."
                      : `Abrimos seu aplicativo de e-mail com a mensagem preenchida para ${PERSONAL_INFO.email}. Caso prefira enviar pelo WhatsApp com 1 clique, use o botão abaixo:`}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={getDynamicWhatsAppUrl(lastSubmittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enviar também no WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition"
                    >
                      Escrever nova mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700">
                      {submitError}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-700 mb-1.5 font-bold">
                        Seu Nome *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Beatriz Lima"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-700 mb-1.5 font-bold">
                        Seu E-mail *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: beatriz@tech.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 transition"
                      />
                    </div>
                  </div>

                  {/* Quick Template Selector */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[11px] font-mono text-slate-500 block font-bold">
                      Preenchimento Rápido com 1 Clique:
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs">
                      {[
                        { 
                          label: "💼 Vaga Dev Júnior", 
                          subj: "Oportunidade Desenvolvedor Júnior Full Stack",
                          msg: "Olá Antônio, estamos com oportunidade para Desenvolvedor Júnior Full Stack e seu portfólio chamou nossa atenção. Gostaríamos de agendar uma conversa técnica!" 
                        },
                        { 
                          label: "🎓 Vaga de Estágio", 
                          subj: "Oportunidade Estágio em Desenvolvimento de Software",
                          msg: "Olá Antônio, temos uma vaga de Estágio Tech na nossa equipe e achamos sua formação na FIAP e projetos no GitHub muito promissores. Podemos conversar?" 
                        },
                        { 
                          label: "☕ Bate-papo Técnico", 
                          subj: "Networking e Bate-papo Técnico",
                          msg: "Olá Antônio, vi seus projetos de IA e .NET e gostaria de trocar uma ideia sobre arquitetura e desenvolvimento." 
                        }
                      ].map(template => (
                        <button
                          type="button"
                          key={template.label}
                          onClick={() => {
                            soundManager.playClick();
                            setFormData({
                              ...formData,
                              subject: template.subj,
                              message: template.msg
                            });
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-700 hover:border-blue-500 hover:text-blue-700 transition"
                        >
                          {template.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-700 mb-1.5 font-bold">
                      Assunto da Vaga ou Projeto *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Oportunidade Desenvolvedor Júnior Full Stack"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-700 mb-1.5 font-bold">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Olá Antônio, vimos seu portfólio e gostaríamos de agendar uma entrevista..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 transition resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar via E-mail</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getDynamicWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition"
                      title="Enviar essa mensagem diretamente no WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Ou no WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
