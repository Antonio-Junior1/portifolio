"use client";

import React, { useState } from "react";
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Sparkles, 
  Smartphone, 
  Layers,
  Search,
  Code2,
  X
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { soundManager } from "@/utils/soundEffects";

interface SkillDetail {
  name: string;
  category: string;
  tag?: string;
  appliedIn: string;
  highlights: string;
}

const SKILL_PRACTICAL_MAP: Record<string, { appliedIn: string; highlights: string }> = {
  // Frontend
  "React": {
    appliedIn: "Proton Flow (Case TOTVS), Challenge Porto, QualityPulse, Controle de Gastos & Portfólio",
    highlights: "React 19 + Vite, componentes analíticos em Recharts, responsividade completa e hooks customizados."
  },
  "Next.js": {
    appliedIn: "Challenge Porto (nextjs-sprint), Green-Vision & Portfólio",
    highlights: "App Router com layouts aninhados, Server Components, otimização de fontes/imagens e deploy na Vercel."
  },
  "TypeScript": {
    appliedIn: "QualityPulse (98.5% TS), Controle de Gastos, Green-Vision & Portfólio",
    highlights: "Tipagem estrita (strict mode), interfaces genéricas, contratos de API tipados e refatorações seguras."
  },
  "JavaScript (ES6+)": {
    appliedIn: "FutureHub, MotoSecurityX & Fundações Web",
    highlights: "Programação assíncrona (async/await), manipulação de estruturas de dados, módulos ES e integração de APIs."
  },
  "Tailwind CSS": {
    appliedIn: "Challenge Porto, Green-Vision, QualityPulse & Portfólio",
    highlights: "Design tokens, Bento Grids, responsividade mobile-first e sistemas visuais de alto contraste."
  },
  "Styled Components": {
    appliedIn: "Projetos React & React Native na FIAP e Ignite",
    highlights: "Componentização isolada com CSS-in-JS, temas dinâmicos e estilização baseada em props."
  },
  "HTML5 & CSS3 Semântico": {
    appliedIn: "Auditorias do QualityPulse, Green-Vision & Projetos Web FIAP",
    highlights: "Landmarks de acessibilidade (a11y), hierarquia semântica de headings, Flexbox, CSS Grid e SEO."
  },
  "Vue.js": {
    appliedIn: "Estudos práticos de interfaces reativas e SPAs",
    highlights: "Single-File Components, diretivas reativas, gerenciamento de estado e roteamento client-side."
  },

  // Backend & APIs
  "Node.js": {
    appliedIn: "QualityPulse & Sistema de Controle de Gastos",
    highlights: "Execução server-side assíncrona, scanners de rede/HTTP, middlewares e APIs RESTful."
  },
  "APIs RESTful": {
    appliedIn: "SAFE.Core (Java), MotoSecurityX (.NET), QualityPulse (Node) & Challenge Porto (Python)",
    highlights: "Modelagem de recursos, status HTTP semânticos, paginação, tratamento padronizado de erros e documentação Swagger."
  },
  ".NET 8 / ASP.NET": {
    appliedIn: "MotoSecurityX / MobileMottu Web API",
    highlights: "Arquitetura em camadas, injeção de dependência, Entity Framework Core e controllers RESTful documentados via Swagger."
  },
  "C#": {
    appliedIn: "Backend MotoSecurityX (.NET 8) & Projetos Corporativos FIAP",
    highlights: "Programação orientada a objetos, LINQ, tipagem forte, Data Annotations e programação assíncrona (Task/async)."
  },
  "Express.js": {
    appliedIn: "QualityPulse Server & APIs Node.js",
    highlights: "Roteamento modular, middlewares de autenticação/validação e integração com Drizzle ORM."
  },
  "Fastify": {
    appliedIn: "Trilha Rocketseat Ignite & microsserviços Node.js",
    highlights: "APIs de alta performance e baixo overhead com validação de schemas e plugins desacoplados."
  },
  "Python": {
    appliedIn: "Proton Flow / TOTVS (FastAPI + Faster-Whisper), Challenge Porto (api-ia) & FutureHub IA",
    highlights: "APIs FastAPI com Pydantic v2, Flask para ML (Random Forest + TF-IDF), transcrição PT-BR e automação."
  },
  "Spring Boot (Java)": {
    appliedIn: "SAFE.Core (Global Solution) & FutureHub Backend",
    highlights: "APIs corporativas em Java 17 com Spring Boot 3, Spring Security (JWT), Spring Data JPA, Oracle e Azure SQL."
  },

  // Bancos de Dados
  "PostgreSQL": {
    appliedIn: "Proton Flow (Case TOTVS), Ignite & Arquitetura Relacional",
    highlights: "PostgreSQL 14+ com arquitetura híbrida JSONB indexada, pool psycopg 3, trilhas de auditoria e transações ACID."
  },
  "MySQL": {
    appliedIn: "QualityPulse (Drizzle ORM) & Sistemas Web",
    highlights: "Persistência relacional de histórico de auditorias, migrações versionadas e consultas agregadas."
  },
  "Oracle": {
    appliedIn: "SAFE.Core (Global Solution Java) & Projetos Acadêmicos FIAP",
    highlights: "Integração corporativa via Spring Data JPA / Hibernate, procedures e relatórios analíticos regionais."
  },
  "SQLite": {
    appliedIn: "Sistema de Controle de Gastos Residenciais",
    highlights: "Banco relacional embarcado com integridade referencial, deleção em cascata e rápida execução em testes."
  },
  "Firebase Firestore": {
    appliedIn: "MotoSecurityX (mottuMobile) & Lista Tarefas Plus (CpMobile)",
    highlights: "Banco NoSQL orientado a documentos na nuvem com sincronização em tempo real para clientes móveis."
  },
  "Drizzle / EF Core": {
    appliedIn: "QualityPulse (Drizzle ORM) & MotoSecurityX (Entity Framework Core)",
    highlights: "Mapeamento objeto-relacional (ORM) type-safe, queries parametrizadas e controle de migrações."
  },

  // DevOps, Infra & Ferramentas
  "Docker": {
    appliedIn: "Containerização de APIs (.NET, Node.js, Java) e Bancos de Dados",
    highlights: "Criação de ambientes isolados e reprodutíveis com Dockerfiles e Docker Compose."
  },
  "Git & GitHub": {
    appliedIn: "21 repositórios públicos versionados (@Antonio-Junior1)",
    highlights: "Git Flow, commits semânticos, resolução de conflitos em equipe e CI/CD integrado à Vercel."
  },
  "GitLab": {
    appliedIn: "Fluxos de versionamento corporativo e pipelines DevOps",
    highlights: "Gerenciamento de repositórios, merge requests e revisão de código."
  },
  "Linux": {
    appliedIn: "Atuação na BB Central & Ambientes de Servidores/Containers",
    highlights: "Administração de sistemas, permissões, gerenciamento de pacotes, diagnóstico de rede e shell script."
  },
  "PowerShell & Bash": {
    appliedIn: "Automação de Suporte Técnico e Infraestrutura na BB Central",
    highlights: "Scripts para diagnóstico automatizado de máquinas, limpeza, configuração de rede e inventário de TI."
  },
  "Active Directory": {
    appliedIn: "Operação Corporativa na BB Central Serviços",
    highlights: "Gestão de usuários, grupos de segurança, políticas de domínio (GPO) e controle de acessos corporativos."
  },
  "TCP/IP & Redes": {
    appliedIn: "Infraestrutura Corporativa BB Central & Diagnóstico de APIs",
    highlights: "Configuração de DNS, DHCP, sub-redes, firewall, análise de latência e troubleshooting de conectividade."
  },
  "VS Code & Figma": {
    appliedIn: "Fluxo diário de Engenharia de Software & UI/UX",
    highlights: "Prototipação de interfaces no Figma e desenvolvimento ágil com debugging, extensões e linters no VS Code."
  },

  // IA, Dados & Inovação
  "LLMs & Engenharia de Prompts": {
    appliedIn: "Proton Flow / TOTVS (Ollama Local) & FutureHub (Gerador de Missões IA)",
    highlights: "LLMs on-premise (llama3 / qwen2.5:3b) para atas e planos de ação LGPD, reranker DPO e saídas estruturadas."
  },
  "Machine Learning (Scikit-Learn)": {
    appliedIn: "Challenge Porto Seguro (Repositório api-ia)",
    highlights: "Treinamento e serialização de modelo Random Forest Classifier para predição de falhas mecânicas."
  },
  "Integração de APIs de IA": {
    appliedIn: "Proton Flow / TOTVS (FastAPI + Ollama), FutureHub & Challenge Porto",
    highlights: "Orquestração entre frontends React/Mobile e backends Python de inferência, STT e validação Human-in-the-Loop."
  },
  "IBM Watson Assistant": {
    appliedIn: "Challenge Porto Seguro — Triagem Automotiva",
    highlights: "Árvores de diálogo inteligentes, reconhecimento de intenções/entidades e atendimento automatizado."
  },
  "Processamento de Linguagem Natural (NLP)": {
    appliedIn: "Proton Flow / TOTVS (Faster-Whisper PT-BR) & Challenge Porto (api-ia)",
    highlights: "Speech-to-Text local com Silero VAD, classificação de dores corporativas e vetorização TF-IDF."
  },

  // Mobile
  "React Native": {
    appliedIn: "MotoSecurityX (mottuMobile), FutureHub & Lista Tarefas Plus",
    highlights: "Desenvolvimento mobile multiplataforma (Android/iOS) com componentes nativos e alta fluidez."
  },
  "Expo": {
    appliedIn: "MotoSecurityX, FutureHub Mobile & CpMobile",
    highlights: "Configuração ágil de projeto com Expo SDK, gerenciamento de assets, fontes e testes em dispositivos físicos."
  },
  "React Navigation": {
    appliedIn: "MotoSecurityX (mottuMobile) & FutureHub",
    highlights: "Roteamento mobile estruturado combinando Stack Navigator, Bottom Tabs e rotas autenticadas."
  },
  "Firebase Mobile": {
    appliedIn: "MotoSecurityX & Lista Tarefas Plus (CpMobile)",
    highlights: "Autenticação segura (E-mail/Senha e Google Auth) e persistência reativa no Cloud Firestore."
  },
  "Moti (Animações)": {
    appliedIn: "Lista Tarefas Plus (CpMobile) & Microinterações Mobile",
    highlights: "Animações declarativas de entrada, transições de tela e feedback visual suave em 60fps."
  },
  "Axios Mobile Integration": {
    appliedIn: "MotoSecurityX (.NET 8 API) & FutureHub (Spring Boot + Python APIs)",
    highlights: "Consumo de APIs REST em apps móveis com tratamento de estado de carregamento, erros e tokens JWT."
  }
};

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-blue-600" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-600" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-600" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-sky-600" />;
      case "BrainCircuit":
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-teal-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  const getTagStyle = (tag?: string) => {
    switch (tag) {
      case "Principal":
        return "bg-blue-100 text-blue-700 font-bold border-blue-200";
      case "Corporativo":
        return "bg-indigo-100 text-indigo-700 border-indigo-200";
      case "Avançado":
        return "bg-emerald-100 text-emerald-700 font-bold border-emerald-200";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  const handleSelectSkill = (skillName: string, category: string, tag?: string) => {
    soundManager.playClick();
    const details = SKILL_PRACTICAL_MAP[skillName] || {
      appliedIn: "Projetos acadêmicos na FIAP e desafios práticos",
      highlights: "Aplicado com padrões modernos de desenvolvimento, testes e boas práticas de código limpo."
    };

    setSelectedSkill({
      name: skillName,
      category,
      tag,
      appliedIn: details.appliedIn,
      highlights: details.highlights
    });
  };

  // Filter categories and skills by search query
  const filteredCategories = SKILL_CATEGORIES.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(cat => cat.skills.length > 0);

  return (
    <section id="tecnologias" className="py-24 sm:py-32 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="section-kicker">
              04 / STACK &amp; COMPETÊNCIAS
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Tecnologias dominadas na <span className="text-blue-600">prática e no código</span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Competências estruturadas por camadas arquiteturais. Clique em qualquer tecnologia para inspecionar a aplicação real no portfólio.
            </p>
          </div>

          {/* Interactive Live Search Input */}
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Filtrar stack (ex: React, .NET)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Live Selected Skill Inspector Banner */}
        {selectedSkill && (
          <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-blue-50/90 border border-blue-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/25 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-slate-900">
                    {selectedSkill.name}
                  </h4>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                    {selectedSkill.category}
                  </span>
                  {selectedSkill.tag && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getTagStyle(selectedSkill.tag)}`}>
                      {selectedSkill.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600">
                  <strong className="text-blue-700">Aplicado em:</strong> {selectedSkill.appliedIn}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  <strong className="text-slate-700">Destaque:</strong> {selectedSkill.highlights}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-white/50 transition self-end sm:self-center"
              title="Fechar painel de inspeção"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 p-7 flex flex-col justify-between group rounded-3xl border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges (Streamlined tactile chips) */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <button
                      key={skill.name}
                      onClick={() => handleSelectSkill(skill.name, cat.title, skill.tag)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-150 active:scale-[0.97] ${
                        selectedSkill?.name === skill.name
                          ? "bg-slate-900 text-white border-slate-900 font-bold shadow-xs"
                          : "bg-white border-slate-200/90 text-slate-700 hover:border-blue-400 hover:text-blue-700"
                      }`}
                      title={`Clique para ver detalhes de ${skill.name}`}
                    >
                      <span className="font-medium">{skill.name}</span>
                      {skill.tag === "Principal" && (
                        <span className={`ml-0.5 text-[9px] px-1.5 py-0.2 rounded border ${
                          selectedSkill?.name === skill.name
                            ? "bg-white/15 text-white border-white/20"
                            : "bg-blue-50 text-blue-700 border-blue-200 font-semibold"
                        }`}>
                          Core
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{cat.skills.length} tecnologias</span>
                <span className="text-blue-700 font-bold">Clique para inspecionar</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
