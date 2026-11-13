export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  myRole: string;
  category: 'all' | 'fullstack' | 'ai' | 'mobile' | 'backend';
  tags: string[];
  githubUrl: string;
  secondaryGithubUrl?: string;
  secondaryGithubLabel?: string;
  isPrivateRepo?: boolean;
  collaborators?: string[];
  demoUrl?: string;
  featured: boolean;
  highlights: string[];
  architecture?: string[];
  gradient: string;
  accentColor: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  level: string;
  period: string;
  status: 'Concluído' | 'Cursando';
  description: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  focus: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

export interface SoftSkill {
  title: string;
  description: string;
  practicalContext: string;
  iconName: string;
}

export const PERSONAL_INFO = {
  name: "Antônio Junior",
  fullName: "Antônio Lino da Silva Jr",
  role: "Desenvolvedor Full Stack",
  headline: "Desenvolvedor de software com experiência em desenvolvimento web, suporte técnico e projetos acadêmicos e profissionais. Gosto de transformar problemas em soluções funcionais, com foco em aprendizado contínuo, organização e boas práticas de desenvolvimento.",
  location: "São Paulo, SP",
  status: "Disponível para Estágio / Desenvolvedor Júnior / Full Stack",
  email: "junuor10133@gmail.com",
  phone: "(11) 97181-2005",
  whatsappUrl: "https://wa.me/5511971812005",
  githubUrl: "https://github.com/Antonio-Junior1",
  linkedinUrl: "https://www.linkedin.com/in/antoniojr1/",
  resumeUrl: "/curriculo-antonio-junior.pdf",
  heroTechs: ["React", "Next.js", "TypeScript", "Node.js", "Docker"]
};

export const PROJECTS: Project[] = [
  {
    id: "proton-flow-totvs",
    title: "Proton Flow — Inteligência Gerencial & Atas (TOTVS)",
    subtitle: "Plataforma Corporativa com Transcrição Local (Faster-Whisper), IA On-Premise & Analytics",
    description: "Plataforma de inteligência gerencial desenvolvida em equipe para a TOTVS, capaz de capturar chamadas corporativas via WebRTC ou arquivos de áudio/vídeo e transformar transcrições em atas automatizadas, planos de ação, análise trimestral de NPS e detecção de clientes em risco.",
    problemSolved: "Elimina o trabalho manual de registro de reuniões e previne a perda de sinais críticos de gargalos ou insatisfação de clientes, operando 100% em infraestrutura local (Ollama + Faster-Whisper) em conformidade rigorosa com a LGPD.",
    myRole: "Desenvolvimento do Frontend em React 19 + Vite 8: construção dos componentes da interface analítica, gráficos executivos com Recharts, responsividade completa da plataforma, fluxos de revisão humana (Human-in-the-Loop) e exportação corporativa em DOCX e PDF.",
    category: "ai",
    tags: ["React 19", "Vite 8", "Recharts", "Python", "FastAPI", "Faster-Whisper", "Ollama (LLM Local)", "PostgreSQL (JSONB)", "WebRTC", "Docker"],
    githubUrl: "",
    isPrivateRepo: true,
    collaborators: ["Guilherme Roselli (Backend & Arquitetura)", "Lucas Miranda (STT & WebRTC)"],
    featured: true,
    highlights: [
      "Transcrição local otimizada para PT-BR com Faster-Whisper, Silero VAD, FFmpeg e glossário fonético auditável",
      "IA 100% On-Premise via Ollama (llama3 / qwen2.5:3b) com Reranker calibrado (DPO/RLAIF) e validação Human-in-the-Loop",
      "Dashboard Executivo Trimestral em Recharts com evolução temporal, urgência de gargalos e NPS médio",
      "Backend Python FastAPI + Pydantic v2 com persistência híbrida JSONB no PostgreSQL 14+ (psycopg 3) e trilha audit_events"
    ],
    architecture: [
      "Frontend (PWA): React 19, Vite 8, Recharts, Lucide React e exportação em DOCX/PDF (docx & jsPDF)",
      "Captura & STT: WebRTC / Opus 48 kbps sem bots invasivos + pipeline FFmpeg, PyAV e Faster-Whisper (CTranslate2)",
      "Backend & Validação: Python 3.10+, FastAPI, Uvicorn e contratos determinísticos em Pydantic v2",
      "Dados & IA Local: Ollama com detecção automática CPU/GPU e PostgreSQL 14+ com colunas JSONB indexadas"
    ],
    gradient: "from-violet-600/20 via-blue-500/10 to-transparent",
    accentColor: "violet"
  },
  {
    id: "challenge-porto",
    title: "Challenge Porto — Diagnóstico Automotivo Inteligente",
    subtitle: "Plataforma Web com Machine Learning (Python/Flask) & Chatbot Interativo",
    description: "Solução desenvolvida para a Porto Seguro que transforma a triagem automotiva através de um chat web inteligente. O usuário relata sintomas mecânicos e recebe um diagnóstico preditivo preliminar em tempo real baseado em Machine Learning.",
    problemSolved: "Elimina filas e triagens mecânicas imprecisas ao correlacionar queixas do motorista em linguagem natural com falhas prováveis de componentes, direcionando o segurado diretamente para a oficina ou serviço adequado.",
    myRole: "Facilitador da equipe e desenvolvedor full-stack: atuei na integração do frontend Next.js com a API de predição em Python/Flask (api-ia), desenvolvimento dos componentes do chat, telas de serviço e módulo CRUD com validação de placas (Mercosul e padrão antigo).",
    category: "ai",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Flask", "Scikit-Learn", "Random Forest", "TF-IDF", "IBM Watson"],
    githubUrl: "https://github.com/Antonio-Junior1/nextjs-sprint",
    secondaryGithubUrl: "https://github.com/Antonio-Junior1/api-ia",
    secondaryGithubLabel: "API Python (ML)",
    demoUrl: "https://challenge-porto-ashy.vercel.app",
    featured: true,
    highlights: [
      "Processamento de linguagem natural com vetorizador TF-IDF e modelo Random Forest treinado (repositório api-ia)",
      "Chatbot interativo com respostas dinâmicas e integração IBM Watson Assistant",
      "Deploy e integração contínua na Vercel (Frontend Next.js) e API de IA em Python",
      "Validação robusta de formatos de placas (Mercosul/antigo) e gerenciamento de cadastros de veículos"
    ],
    architecture: [
      "Frontend (nextjs-sprint): Next.js (App Router), React, TypeScript e Tailwind CSS",
      "Backend de Predição (api-ia): Microsserviço Flask em Python com modelo serializado (.pkl)",
      "Modelo ML: scikit-learn (Random Forest Classifier + TF-IDF Vectorizer)",
      "Atendimento: Chat interativo integrado ao IBM Watson Assistant"
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "cyan"
  },
  {
    id: "qualitypulse",
    title: "QualityPulse — Plataforma de Auditoria Web & APIs",
    subtitle: "Diagnóstico Técnico em Acessibilidade, Performance, Segurança e SEO",
    description: "Plataforma completa de auditoria de software que analisa URLs e endpoints de API sob 4 dimensões críticas, calculando um índice global de qualidade com achados priorizados e recomendações acionáveis para o time de engenharia.",
    problemSolved: "Substitui auditorias manuais demoradas por uma análise server-side automatizada com pontuação de releases, permitindo que times acompanhem a evolução da qualidade antes de irem a produção.",
    myRole: "Desenvolvimento full-stack em TypeScript ponta a ponta: motor de scanner server-side, modelagem relacional com Drizzle ORM, testes automatizados com Vitest e interface analítica em React com componentes visuais de score.",
    category: "fullstack",
    tags: ["TypeScript", "React", "Vite", "Node.js", "Express", "Drizzle ORM", "Vitest", "Tailwind CSS"],
    githubUrl: "https://github.com/Antonio-Junior1/qualitypulse",
    featured: true,
    highlights: [
      "Auditoria multidimensional: Acessibilidade (a11y), Performance, Segurança (CSP, HSTS, HTTPS) e SEO",
      "Arquitetura server-side em Express com Drizzle ORM para persistência e comparação de histórico de releases",
      "Suíte de testes automatizados com Vitest garantindo estabilidade dos motores de cálculo",
      "Interface com gráficos de pontuação e matriz de criticidade dos achados técnicos"
    ],
    architecture: [
      "Frontend: React, TypeScript, Tailwind CSS, Componentes modulares",
      "Backend: Node.js, Express, TypeScript, scanner server-side desacoplado",
      "Database: Drizzle ORM com migrações tipadas",
      "Qualidade: Vitest para testes unitários e de integração"
    ],
    gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    accentColor: "emerald"
  },
  {
    id: "futurehub",
    title: "FutureHub — Plataforma de Inovação Gamificada & IA",
    subtitle: "Ecossistema Mobile (React Native), Backend Java Spring Boot & IA em Python",
    description: "Plataforma gamificada que conecta profissionais e estudantes através de desafios, ideias e ranking por áreas de conhecimento, utilizando Inteligência Artificial generativa para criar missões personalizadas em tempo real.",
    problemSolved: "Combate o baixo engajamento em programas de capacitação e inovação corporativa ao transformar o aprendizado contínuo em missões dinâmicas geradas por IA com pontuação e ranking competitivo.",
    myRole: "Desenvolvimento e integração da arquitetura distribuída conectando o aplicativo móvel em React Native (Expo) à API principal em Java 17 (Spring Boot) e ao microsserviço Python de geração de missões com IA.",
    category: "ai",
    tags: ["Java 17", "Spring Boot 3", "React Native", "Expo", "Python", "Flask", "IA Generativa", "Azure SQL", "JWT", "Swagger"],
    githubUrl: "https://github.com/Antonio-Junior1/FutureHub",
    featured: true,
    highlights: [
      "Arquitetura poliglota integrando App Mobile (Expo), API Corporativa (Spring Boot) e Microsserviço de IA (Python)",
      "Geração automática e contextualizada de missões gamificadas via API Python integrada a LLMs",
      "Backend Java 17 com autenticação JWT, persistência em Azure SQL Server / H2 e documentação Swagger UI",
      "Sistema completo de ranking, submissão de ideias e progressão de usuários por trilha de conhecimento"
    ],
    architecture: [
      "Mobile Frontend: React Native com Expo e gerenciamento de estado reativo",
      "Core Backend: Java 17, Spring Boot, Spring Security (JWT), Spring Data JPA",
      "Serviço de IA: API REST em Python/Flask para orquestração de prompts e geração de missões",
      "Banco de Dados: Azure SQL Server (produção) e H2 Database (ambiente de testes)"
    ],
    gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
    accentColor: "blue"
  },
  {
    id: "mobilesecurityx-mottu",
    title: "MotoSecurityX / MobileMottu",
    subtitle: "Gestão e Telemetria de Pátios de Motocicletas com API REST .NET & Firebase",
    description: "Aplicativo móvel multiplataforma desenvolvido para a Mottu voltado à gestão operacional, rastreabilidade e segurança de frotas de motocicletas e pátios de filiais.",
    problemSolved: "Centraliza o inventário físico de motos em pátios distribuídos, prevenindo extravios, monitorando entrada/saída de veículos e sincronizando dados operacionais em tempo real com o backend corporativo.",
    myRole: "Liderança e organização das atividades do projeto, consumo e integração da API RESTful desenvolvida em .NET 8 / C# via Axios, autenticação segura com Firebase Auth, suporte a internacionalização (PT/ES) e implementação de tema claro/escuro.",
    category: "mobile",
    tags: ["React Native", "Expo", ".NET 8", "C#", "ASP.NET Core", "Firebase Auth", "Firestore", "Axios", "i18n"],
    githubUrl: "https://github.com/Antonio-Junior1/mottuMobile",
    featured: true,
    highlights: [
      "Operações CRUD completas integradas com API RESTful em .NET 8 (Swagger e Data Annotations)",
      "Autenticação de operadores e armazenamento de pátios em tempo real via Firebase Auth & Firestore",
      "Internacionalização completa com suporte nativo a Português e Espanhol (i18n)",
      "Interface adaptável com alternância dinâmica entre tema claro e escuro e notificações push"
    ],
    architecture: [
      "Mobile: React Native, Expo, React Navigation (Tabs & Stack), Context API",
      "Backend Corporativo: .NET 8 API (C#) com endpoints RESTful documentados via Swagger",
      "Nuvem: Google Firebase Authentication e Cloud Firestore",
      "Comunicação: Cliente HTTP Axios com interceptors e tratamento de erros"
    ],
    gradient: "from-sky-500/20 via-teal-500/10 to-transparent",
    accentColor: "sky"
  },
  {
    id: "safe-core-java",
    title: "SAFE.Core — API de Monitoramento Ambiental & Alertas",
    subtitle: "Backend Corporativo em Java 17, Spring Boot, Oracle Database & JWT",
    description: "API RESTful central da solução SAFE.Guard (Global Solution FIAP), responsável por receber, processar e auditar leituras de sensores ambientais, gerando relatórios térmicos regionais e alertas automáticos de risco.",
    problemSolved: "Garante ingestão confiável e segura de telemetria ambiental para prevenção de desastres, automatizando o disparo de alertas críticos quando leituras ultrapassam limites seguros por região.",
    myRole: "Desenvolvimento do backend em Java 17 com Spring Boot, modelagem de entidades e relatórios no Oracle Database, implementação de segurança stateless com JWT e documentação interativa no Swagger.",
    category: "backend",
    tags: ["Java 17", "Spring Boot", "Spring Data JPA", "Oracle Database", "Spring Security", "JWT", "Swagger / OpenAPI", "Maven"],
    githubUrl: "https://github.com/Antonio-Junior1/java",
    featured: true,
    highlights: [
      "CRUD completo e seguro de Regiões, Sensores, Leituras de Telemetria e Alertas Ambientais",
      "Consultas analíticas para cálculo de temperatura média por região e detecção automática de anomalias",
      "Autenticação e autorização baseadas em tokens JWT (Spring Security) com perfis de acesso",
      "Documentação OpenAPI / Swagger UI completa para homologação e integração com web e mobile"
    ],
    architecture: [
      "API Core: Java 17 + Spring Boot 3 (Controllers, Services, Repositories, DTOs)",
      "Persistência: Spring Data JPA integrado ao Oracle Database",
      "Segurança: Filtro de autenticação stateless via JSON Web Token (JWT)",
      "Ecossistema: Camada central integrada ao SAFE.Dashboard (Web) e SAFE.App (Mobile)"
    ],
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    accentColor: "indigo"
  },
  {
    id: "sistema-controle-gastos",
    title: "Sistema de Controle de Gastos Residenciais",
    subtitle: "Aplicação Full-Stack com Backend RESTful & Frontend React + TypeScript",
    description: "Sistema de gestão financeira pessoal e residencial com divisão rigorosa de responsabilidades entre backend e frontend SPA. Permite cadastros de membros da família, conciliação de receitas/despesas e balanços consolidados.",
    problemSolved: "Organiza as finanças domésticas de forma centralizada e intuitiva, garantindo precisão matemática no fechamento de contas e visualização clara do saldo familiar em tempo real.",
    myRole: "Desenvolvimento full-stack ponta a ponta: construção da API REST, modelagem relacional de transações em SQLite, validações de regras contábeis (como restrição de menores de idade a despesas) e interface reativa em React com TypeScript.",
    category: "fullstack",
    tags: ["TypeScript", "React", "Vite", "Node.js", "RESTful API", "SQLite", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/Antonio-Junior1/sistema-controle-gastos",
    featured: false,
    highlights: [
      "Arquitetura desacoplada com frontend e backend independentes e contratos REST bem definidos",
      "Cálculo de balanço consolidado em tempo real com agregação de totais de receitas, despesas e saldo líquido",
      "Regras de negócio estritas validadas no backend (deleção em cascata de transações e validações por idade)",
      "Interface limpa e responsiva em React + TypeScript com visualização gráfica de indicadores"
    ],
    architecture: [
      "Frontend: React, TypeScript, Vite, Componentes reutilizáveis e gráficos interativos",
      "Backend: API REST estruturada em camadas (Controllers, Services, Models)",
      "Database: Banco relacional SQLite com integridade referencial"
    ],
    gradient: "from-blue-500/20 via-slate-800/20 to-transparent",
    accentColor: "blue"
  },
  {
    id: "green-vision",
    title: "Green-Vision — Plataforma de Energia Sustentável",
    subtitle: "Aplicação Web em Next.js, TypeScript & Tailwind CSS com Deploy na Vercel",
    description: "Plataforma web interativa dedicada à transição energética e sustentabilidade (Global Solution FIAP), apresentando soluções de energia limpa, áreas de cadastro/login, acompanhamento de indicadores e módulo de feedback.",
    problemSolved: "Conecta consumidores e empresas a iniciativas de energia renovável através de uma experiência digital rápida, educativa e orientada à redução da pegada de carbono.",
    myRole: "Desenvolvimento frontend da aplicação utilizando Next.js (App Router), estruturação das rotas (Projeto, Indicados, Feedback, Login/Cadastro), componentização em TypeScript e estilização responsiva com Tailwind CSS.",
    category: "fullstack",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "App Router", "Vercel", "UI/UX"],
    githubUrl: "https://github.com/Antonio-Junior1/Green-Vision",
    demoUrl: "https://green-vision-gilt.vercel.app",
    featured: false,
    highlights: [
      "Aplicação publicada em produção na Vercel com carregamento otimizado e rotas App Router",
      "Múltiplos fluxos navegáveis: apresentação do Projeto, Indicadores, Feedback, Equipe e Autenticação",
      "Componentização fortemente tipada em TypeScript (98.3% da base de código)",
      "Interface responsiva mobile-first construída com Tailwind CSS"
    ],
    architecture: [
      "Framework: Next.js (App Router) com React e TypeScript",
      "Estilização: Tailwind CSS com design system consistente voltado à sustentabilidade",
      "Infraestrutura: Deploy contínuo (CI/CD) na Vercel"
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "emerald"
  }
];

export const EXPERIENCE: ExperienceItem = {
  company: "BB Central Serviços Terceirizados LTDA",
  role: "Estagiário – Assistente Técnico",
  period: "Janeiro de 2025 – Atual",
  location: "São Paulo, SP",
  type: "Estágio Corporativo",
  description: "Atuação com suporte técnico corporativo, manutenção e configuração de computadores, sistemas operacionais, redes e ferramentas internas. Também apoio em testes de sistemas, documentação, organização de inventário de TI e criação de scripts e ferramentas para melhoria de processos.",
  achievements: [
    "Criação e execução de scripts de automação (PowerShell e Bash) para rotinas de diagnóstico e manutenção",
    "Manutenção preventiva e corretiva de hardware e configuração avançada de sistemas operacionais (Windows e Linux)",
    "Gerenciamento de acessos corporativos, permissões e políticas no Active Directory e redes TCP/IP",
    "Apoio direto à equipe técnica na homologação de novos softwares, documentação operacional e gestão de inventário",
    "Visão sistêmica aplicada: aplicação de metodologias de análise de causa-raiz no suporte e na engenharia de código"
  ],
  skills: [
    "Windows",
    "Linux",
    "Active Directory",
    "TCP/IP",
    "PowerShell",
    "Bash",
    "Help Desk",
    "Automação de Scripts",
    "Documentação Técnica"
  ]
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "FIAP",
    degree: "Bacharelado em Engenharia de Software",
    level: "Graduação",
    period: "2024 – Previsão 2028",
    status: "Cursando",
    description: "Formação aprofundada em engenharia de sistemas complexos, arquitetura de software, computação distribuída, bancos de dados, inteligência artificial, governança e liderança técnica.",
    skills: ["Engenharia de Software", "Microsserviços", "Cloud Computing", "Algoritmos Avançados", "DevOps"]
  },
  {
    institution: "FIAP",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    level: "Graduação Tecnológica",
    period: "2024 – 2026",
    status: "Concluído",
    description: "Foco intensivo e prático no desenvolvimento de software de ponta a ponta, engenharia web, mobile, modelagem de banco de dados e metodologias ágeis.",
    skills: ["Full Stack Development", "React / Next.js", "Java / Spring Boot", ".NET Core", "Modelagem de Dados", "Scrum"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Rocketseat Ignite",
    issuer: "Rocketseat",
    focus: "Desenvolvimento Full Stack moderno com ecossistema React, Node.js e React Native"
  },
  {
    title: "Full Cycle 3.0",
    issuer: "Full Cycle",
    focus: "Arquitetura de Software corporativa, microsserviços, mensageria e boas práticas de engenharia"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Interfaces modernas, responsivas e focadas na experiência do usuário",
    iconName: "Layout",
    skills: [
      { name: "React", tag: "Principal" },
      { name: "Next.js", tag: "Principal" },
      { name: "TypeScript", tag: "Principal" },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS", tag: "Principal" },
      { name: "Styled Components" },
      { name: "HTML5 & CSS3 Semântico" },
      { name: "Vue.js" }
    ]
  },
  {
    title: "Backend & APIs",
    description: "Construção de serviços seguros, eficientes e escaláveis",
    iconName: "Server",
    skills: [
      { name: "Node.js", tag: "Principal" },
      { name: "APIs RESTful", tag: "Principal" },
      { name: ".NET 8 / ASP.NET", tag: "Corporativo" },
      { name: "C#" },
      { name: "Express.js" },
      { name: "Fastify" },
      { name: "Python", tag: "IA / Backend" },
      { name: "Spring Boot (Java)" }
    ]
  },
  {
    title: "Bancos de Dados",
    description: "Persistência e modelagem consistente de dados",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", tag: "Relacional" },
      { name: "MySQL", tag: "Relacional" },
      { name: "Oracle", tag: "Corporativo" },
      { name: "SQLite", tag: "Local / Testes" },
      { name: "Firebase Firestore", tag: "NoSQL Cloud" },
      { name: "Drizzle / EF Core", tag: "ORMs" }
    ]
  },
  {
    title: "DevOps, Infra & Ferramentas",
    description: "Ambientes de desenvolvimento, automação e esteiras de entrega",
    iconName: "Terminal",
    skills: [
      { name: "Docker", tag: "Containers" },
      { name: "Git & GitHub", tag: "Controle de Versão" },
      { name: "GitLab" },
      { name: "Linux", tag: "Sistemas" },
      { name: "PowerShell & Bash", tag: "Automação" },
      { name: "Active Directory", tag: "Infra" },
      { name: "TCP/IP & Redes" },
      { name: "VS Code & Figma" }
    ]
  },
  {
    title: "IA, Dados & Inovação",
    description: "Integração inteligente de modelos de linguagem e aprendizado de máquina",
    iconName: "BrainCircuit",
    skills: [
      { name: "LLMs & Engenharia de Prompts", tag: "Avançado" },
      { name: "Machine Learning (Scikit-Learn)", tag: "Classificação" },
      { name: "Integração de APIs de IA" },
      { name: "IBM Watson Assistant" },
      { name: "Processamento de Linguagem Natural (NLP)" }
    ]
  },
  {
    title: "Mobile",
    description: "Aplicações nativas híbridas fluidas e integradas",
    iconName: "Smartphone",
    skills: [
      { name: "React Native", tag: "Mobile" },
      { name: "Expo", tag: "Framework" },
      { name: "React Navigation" },
      { name: "Firebase Mobile" },
      { name: "Moti (Animações)" },
      { name: "Axios Mobile Integration" }
    ]
  }
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    title: "Proatividade & Automação",
    description: "Busca contínua por antecipar problemas e automatizar processos repetitivos.",
    practicalContext: "No suporte da BB Central, crio scripts em PowerShell e Bash para acelerar diagnósticos e otimizar rotinas que antes eram manuais.",
    iconName: "Zap"
  },
  {
    title: "Organização & Qualidade de Código",
    description: "Estruturação metódica de projetos, separação de camadas e documentação.",
    practicalContext: "Aplico boas práticas como Clean Architecture, commits semânticos, componentização no React e contratos claros de APIs RESTful.",
    iconName: "FolderKanban"
  },
  {
    title: "Trabalho em Equipe & Facilitação",
    description: "Comunicação transparente, mediação de ideias e foco em resultados coletivos.",
    practicalContext: "Atuei como líder e facilitador em projetos multidisciplinares na FIAP (como Challenge Porto e MotoSecurityX), sincronizando metas da equipe.",
    iconName: "Users"
  },
  {
    title: "Resolução Analítica de Problemas",
    description: "Abordagem orientada à causa-raiz em vez de soluções temporárias superficiais.",
    practicalContext: "A vivência no atendimento corporativo refinou meu raciocínio para diagnosticar problemas complexos de software e infraestrutura sob pressão.",
    iconName: "SearchCheck"
  },
  {
    title: "Aprendizado Contínuo & Adaptação",
    description: "Facilidade para absorver novos ecossistemas e acompanhar a velocidade da tecnologia.",
    practicalContext: "Transição constante entre stacks exigidas pelo mercado (.NET, Node.js, Python e Next.js), além de investir em especializações contínuas.",
    iconName: "TrendingUp"
  },
  {
    title: "Comunicação Clara e Acessível",
    description: "Habilidade de dialogar tanto com desenvolvedores quanto com usuários finais e negócios.",
    practicalContext: "Atendimento técnico a colaboradores internos no dia a dia corporativo, traduzindo aspectos técnicos em explicações objetivas e funcionais.",
    iconName: "MessageSquareCheck"
  }
];
