"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  X, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  Sparkles,
  Command,
  User,
  FileDown,
  Cpu,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from "@/data/portfolioData";
import { useAvatar } from "@/context/AvatarContext";

interface CommandItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  tag?: string;
  keywords?: string;
  external?: boolean;
}

interface CommandCategory {
  category: string;
  items: CommandItem[];
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { toggleAvatarMode, avatarLabel } = useAvatar();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizeText = (text: string) =>
    text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const categories: CommandCategory[] = [
    {
      category: "Projetos Selecionados (GitHub & Live Demo)",
      items: PROJECTS.flatMap(project => {
        const baseItem: CommandItem = {
          label: project.title,
          icon: <Code2 className="w-4 h-4 text-blue-600 shrink-0" />,
          href: project.githubUrl || "#projetos",
          tag: project.isPrivateRepo
            ? `Case Privado • ${project.tags.slice(0, 2).join(" • ")}`
            : project.tags.slice(0, 3).join(" • "),
          keywords: `${project.subtitle} ${project.description} ${project.tags.join(" ")} ${project.category}`,
          external: Boolean(project.githubUrl)
        };
        if (project.demoUrl) {
          return [
            baseItem,
            {
              label: `Abrir Live Demo: ${project.title.split("—")[0].trim()}`,
              icon: <ExternalLink className="w-4 h-4 text-emerald-600 shrink-0" />,
              href: project.demoUrl,
              tag: "Deploy Vercel",
              keywords: `demo online vercel ${project.title} ${project.tags.join(" ")}`,
              external: true
            }
          ];
        }
        return [baseItem];
      })
    },
    {
      category: "Navegação Rápida",
      items: [
        { label: "Ver Projetos em Destaque", icon: <Code2 className="w-4 h-4 text-blue-600" />, href: "#projetos", keywords: "portfolio repositorios github codigo" },
        { label: "Experiência Profissional (BB Central)", icon: <Briefcase className="w-4 h-4 text-cyan-600" />, href: "#experiencia", keywords: "trabalho estagio suporte ti" },
        { label: "Formação Acadêmica (FIAP)", icon: <GraduationCap className="w-4 h-4 text-indigo-600" />, href: "#formacao", keywords: "faculdade engenharia de software ads" },
        { label: "Stack de Tecnologias", icon: <Sparkles className="w-4 h-4 text-emerald-600" />, href: "#tecnologias", keywords: "skills habilidades competencias" },
        { label: "Como Eu Trabalho (Metodologia)", icon: <Command className="w-4 h-4 text-amber-600" />, href: "#metodologia", keywords: "soft skills equipe" },
        { label: "Entrar em Contato", icon: <Mail className="w-4 h-4 text-rose-600" />, href: "#contato", keywords: "mensagem vaga oportunidade" },
      ]
    },
    {
      category: "Competências & Tecnologias (Stack)",
      items: SKILL_CATEGORIES.flatMap(cat =>
        cat.skills.map(skill => ({
          label: `${skill.name}`,
          icon: <Cpu className="w-4 h-4 text-indigo-600 shrink-0" />,
          href: "#tecnologias",
          tag: skill.tag ? `${cat.title} • ${skill.tag}` : cat.title,
          keywords: `${skill.name} ${cat.title} ${cat.description} ${skill.tag || ""}`
        }))
      )
    },
    {
      category: "Ações & Contatos",
      items: [
        {
          label: "Baixar Currículo em PDF",
          icon: <FileDown className="w-4 h-4 text-blue-600" />,
          href: PERSONAL_INFO.resumeUrl,
          tag: "PDF",
          keywords: "cv resume curriculo download",
          external: true
        },
        {
          label: `Alternar Avatar (Ativo: ${avatarLabel})`,
          icon: <User className="w-4 h-4 text-blue-600" />,
          keywords: "foto 3d personagem imagem",
          onClick: () => {
            toggleAvatarMode();
            onClose();
          }
        },
        { 
          label: copiedEmail ? "E-mail Copiado com Sucesso!" : "Copiar E-mail: " + PERSONAL_INFO.email, 
          icon: copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />, 
          keywords: "email gmail contato copiar",
          onClick: () => {
            navigator.clipboard.writeText(PERSONAL_INFO.email);
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
          }
        },
        { 
          label: "Chamar no WhatsApp", 
          icon: <Phone className="w-4 h-4 text-emerald-600" />, 
          href: PERSONAL_INFO.whatsappUrl, 
          tag: PERSONAL_INFO.phone,
          keywords: "telefone celular conversa",
          external: true 
        },
        { 
          label: "Abrir LinkedIn", 
          icon: <LinkedinIcon className="w-4 h-4 text-blue-600" />, 
          href: PERSONAL_INFO.linkedinUrl, 
          tag: "/in/antoniojr1",
          keywords: "rede social perfil",
          external: true 
        },
        { 
          label: "Abrir GitHub (21 Repositórios)", 
          icon: <GithubIcon className="w-4 h-4 text-slate-800" />, 
          href: PERSONAL_INFO.githubUrl, 
          tag: "@Antonio-Junior1",
          keywords: "git codigo repositorios",
          external: true 
        }
      ]
    }
  ];

  const normalizedQuery = normalizeText(query.trim());

  const filteredCategories = categories
    .map(cat => {
      const matchedItems = cat.items.filter(item => {
        if (!normalizedQuery) {
          // When query is empty, keep the list concise (hide full 40-skill list until user types)
          return cat.category !== "Competências & Tecnologias (Stack)";
        }
        const searchable = normalizeText(
          `${item.label} ${item.tag || ""} ${item.keywords || ""}`
        );
        return searchable.includes(normalizedQuery);
      });
      return {
        ...cat,
        items: matchedItems
      };
    })
    .filter(cat => cat.items.length > 0);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Digite para buscar projetos, seções, contatos..."
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {filteredCategories.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-400 font-medium">
              Nenhum resultado encontrado para &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredCategories.map((cat, idx) => (
              <div key={idx}>
                <div className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                  {cat.category}
                </div>
                <div className="mt-1 space-y-1">
                  {cat.items.map((item, itemIdx) => {
                    const content = (
                      <div className="flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-800 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        {item.tag && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500 group-hover:text-blue-700">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    );

                    if (item.onClick) {
                      return (
                        <div key={itemIdx} onClick={() => { item.onClick!(); if (!item.label.includes("Copiar")) onClose(); }}>
                          {content}
                        </div>
                      );
                    }

                    if (item.external && item.href) {
                      return (
                        <a key={itemIdx} href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                          {content}
                        </a>
                      );
                    }

                    if (item.href) {
                      return (
                        <a key={itemIdx} href={item.href} onClick={onClose}>
                          {content}
                        </a>
                      );
                    }

                    return <div key={itemIdx}>{content}</div>;
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Dica: Use <strong>ESC</strong> para fechar</span>
          <span>Navegue com o mouse ou clique</span>
        </div>
      </div>
    </div>
  );
}
