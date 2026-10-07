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
    id: "challenge-porto",
    title: "Challenge Porto — Diagnóstico Automotivo Inteligente",
    subtitle: "Plataforma Web com Machine Learning & Chatbot Interativo",
    description: "Solução desenvolvida para a Porto Seguro que transforma a triagem automotiva através de um chat web inteligente. O usuário relata sintomas mecânicos e recebe um diagnóstico preditivo preliminar em tempo real baseado em Machine Learning.",
    problemSolved: "Elimina filas e triagens mecânicas imprecisas ao correlacionar queixas do motorista em linguagem natural com falhas prováveis de componentes, direcionando o segurado diretamente para a oficina ou serviço adequado.",
    myRole: "Facilitador da equipe e desenvolvedor: atuei na integração do frontend Next.js com a API de predição em Python/Flask, desenvolvimento dos componentes do chat, telas de serviço e módulo CRUD com validação de placas (Mercosul e padrão antigo).",
    category: "ai",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Python", "Flask", "Scikit-Learn", "Random Forest", "TF-IDF", "IBM Watson"],
    githubUrl: "https://github.com/Antonio-Junior1/nextjs-sprint",
    demoUrl: "https://challenge-porto-ashy.vercel.app",
    featured: true,
    highlights: [
      "Processamento de linguagem natural com vetorizador TF-IDF e modelo Random Forest treinado",
      "Chatbot interativo com respostas dinâmicas e fallback inteligente",
      "Deploy e integração contínua no Vercel (Next.js) e Render (API de IA)",
      "Validação robusta de formatos de placas e gerenciamento de cadastros de veículos"
    ],
    architecture: [
      "Frontend: Next.js 15 (App Router), React 19, Tailwind CSS",
      "Backend de Predição: Microserviço Flask em Python com CORS configurado",
      "Modelo ML: scikit-learn (Random Forest Classifier + TF-IDF Vectorizer)",
      "Atendimento: Chat interativo integrado a IBM Watson Assistant"
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "cyan"
  },
  {
    id: "ai-meeting-insights",
    title: "Plataforma de Análise & Resumo Executivo de Reuniões com IA",
    subtitle: "Processamento de Transcrições com LLM & Geração de Planos de Ação",
    description: "Aplicação inteligente que utiliza Large Language Models (LLMs) para analisar transcrições de reuniões corporativas, sintetizar pontos críticos, gerar resumos executivos objetivos e estruturar planos de ação automatizados com indicadores gerenciais.",
    problemSolved: "Resolve a perda de tempo e desalinhamento pós-reunião corporativa, automatizando a ata, a matriz de decisões e o acompanhamento de entregas de cada participante em minutos.",
    myRole: "Engenharia de prompts estruturados, integração com APIs de LLMs, modelagem de dados dos resumos e desenvolvimento de interface analítica com visão executiva e indicadores.",
    category: "ai",
    tags: ["Inteligência Artificial", "LLMs", "NLP", "Python", "React", "Next.js", "APIs de IA", "Métricas Executivas"],
    githubUrl: "https://github.com/Antonio-Junior1",
    featured: true,
    highlights: [
      "Extração inteligente de decisões-chave, riscos levantados e prazos estipulados",
      "Geração automática de planos de ação (metodologia 5W2H) com atribuição de responsáveis",
      "Painel gerencial com indicadores de eficiência, tempo de discussão e sentimentos de pauta",
      "Interface executiva limpa focada em leitura rápida e compartilhamento ágil"
    ],
    architecture: [
      "Camada de IA: Pipelines de orquestração de prompts e chamadas de LLM para sumarização analítica",
      "Frontend: Aplicação web em React/Next.js com dashboards de indicadores e visualização de atas",
      "Processamento: Parser de texto para transcrições em lote e estruturação JSON schema"
    ],
    gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
    accentColor: "blue"
  },
  {
    id: "mobilesecurityx-mottu",
    title: "MotoSecurityX / MobileMottu",
    subtitle: "Gestão e Telemetria de Pátios de Motocicletas com API REST & Firebase",
    description: "Aplicativo móvel multiplataforma desenvolvido para a Mottu voltado à gestão operacional, rastreabilidade e segurança de frotas de motocicletas e pátios de filiais.",
    problemSolved: "Centraliza o inventário físico de motos em pátios distribuídos, prevenindo extravios, monitorando entrada/saída de veículos e sincronizando dados operacionais em tempo real com o backend corporativo.",
    myRole: "Liderança e organização das atividades do projeto, consumo e integração da API RESTful desenvolvida em .NET 8 / C# via Axios, autenticação segura com Firebase Auth, suporte a internacionalização (PT/ES) e implementação de tema claro/escuro.",
    category: "mobile",
    tags: ["React Native", "Expo", ".NET 8", "C#", "ASP.NET Core", "Firebase Auth", "Firestore", "Axios", "Docker", "i18n"],
    githubUrl: "https://github.com/Antonio-Junior1/mottuMobile",
    featured: true,
    highlights: [
      "Operações CRUD completas integradas com API RESTful em .NET 8 (Swagger e Data Annotations)",
      "Autenticação de operadores e armazenamento de pátios em tempo real via Firebase",
      "Internacionalização completa com suporte a Português e Espanhol (i18n)",
      "Interface adaptável com alternância dinâmica entre tema claro e escuro"
    ],
    architecture: [
      "Mobile: React Native, Expo, React Navigation (Tabs & Stack), Context API",
      "Backend Corporativo: .NET 8 API (C#) com endpoints RESTful e containerização Docker",
      "Nuvem: Google Firebase Authentication e Firestore Database",
      "Comunicação: Cliente HTTP Axios com interceptors de erro e tratamento de timeouts"
    ],
    gradient: "from-sky-500/20 via-teal-500/10 to-transparent",
    accentColor: "sky"
  },
  {
    id: "qualitypulse",
    title: "QualityPulse — Plataforma de Auditoria Web & APIs",
    subtitle: "Diagnóstico Técnico em Acessibilidade, Performance, Segurança e SEO",
    description: "Plataforma completa de auditoria de software que analisa URLs e endpoints de API sob 4 dimensões críticas, calculando um índice global de qualidade com achados priorizados e recomendações acionáveis para o time de engenharia.",
    problemSolved: "Substitui auditorias manuais demoradas por uma análise server-side automatizada com pontuação de releases, permitindo que times acompanhem a evolução da qualidade antes de irem a produção.",
    myRole: "Desenvolvimento full-stack em TypeScript ponta a ponta: motor de scanner server-side, modelagem relacional com Drizzle ORM, testes automatizados e interface analítica em React com componentes visuais de score.",
    category: "fullstack",
    tags: ["TypeScript", "React", "Vite", "Node.js", "Express", "Drizzle ORM", "Vitest", "Tailwind CSS"],
    githubUrl: "https://github.com/Antonio-Junior1/qualitypulse",
    featured: true,
    highlights: [
      "Auditoria multidimensional: Acessibilidade (a11y), Performance, Segurança e SEO",
      "Arquitetura server-side em Express com Drizzle ORM para persistência de histórico de releases",
      "Suíte de testes automatizados com Vitest garantindo estabilidade dos motores de cálculo",
      "Interface com gráficos de pontuação e matriz de criticidade dos achados técnicos"
    ],
    architecture: [
      "Frontend: React, TypeScript, Tailwind CSS, Componentes modulares",
      "Backend: Node.js, Express, TypeScript, arquitetura desacoplada",
      "Database: Drizzle ORM com migrações tipadas",
      "Qualidade: Vitest para testes unitários e de integração"
    ],
    gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    accentColor: "emerald"
  },
  {
    id: "sistema-controle-gastos",
    title: "Sistema de Controle de Gastos Residenciais",
    subtitle: "Aplicação Full-Stack com Backend .NET 8 & Frontend React",
    description: "Sistema de gestão financeira pessoal e residencial com divisão rigorosa de responsabilidades entre backend corporativo e frontend SPA. Permite cadastros de membros, conciliação de receitas/despesas e balanços consolidados.",
    problemSolved: "Organiza as finanças domésticas de forma centralizada e intuitiva, garantindo precisão matemática no fechamento de contas e visualização clara do saldo familiar em tempo real.",
    myRole: "Desenvolvimento da API REST em .NET 8 com C#, modelagem relacional de transações, validações de regras contábeis e criação da interface reativa em React com TypeScript.",
    category: "fullstack",
    tags: [".NET 8", "C#", "Entity Framework", "SQLite", "React", "TypeScript", "Vite", "RESTful API"],
    githubUrl: "https://github.com/Antonio-Junior1/sistema-controle-gastos",
    featured: false,
    highlights: [
      "Backend estruturado em .NET 8 com boas práticas de arquitetura e Entity Framework",
      "Cálculo de balanço consolidado em tempo real com agregação de categorias de receitas e despesas",
      "Frontend desacoplado consumindo API RESTful com tipagem estrita em TypeScript",
      "Validação de formulários e tratamento defensivo de erros"
    ],
    architecture: [
      "Backend: .NET 8 / C#, Entity Framework Core, SQLite",
      "Frontend: React, TypeScript, Vite, Componentes reutilizáveis",
      "Padrão: Separação de camadas (Controllers, Services, Models)"
    ],
    gradient: "from-blue-500/20 via-slate-800/20 to-transparent",
    accentColor: "blue"
  },
  {
    id: "mobile-tasks-plus",
    title: "Lista Tarefas Plus & Ecossistema Mobile",
    subtitle: "Aplicativos React Native com Expo, Firebase Auth & Micro-Animações",
    description: "Conjunto de aplicações móveis modernas desenvolvidas com React Native e Expo, demonstrando autenticação social (Google + E-mail/Senha via Firebase), persistência no Firestore e microinterações fluidas com a biblioteca Moti.",
    problemSolved: "Proporciona experiência móvel ultrarrápida para organização de rotinas diárias com sincronização em nuvem e feedback tátil/visual imediato.",
    myRole: "Arquitetura do app mobile, configuração dos serviços Google Firebase, criação de componentes animados reutilizáveis e otimização do ciclo de vida das telas.",
    category: "mobile",
    tags: ["React Native", "Expo", "TypeScript", "Firebase Auth", "Firestore", "Moti", "Vector Icons"],
    githubUrl: "https://github.com/Antonio-Junior1/CpMobile",
    featured: false,
    highlights: [
      "Autenticação completa com login Google e credenciais e-mail/senha",
      "Armazenamento e sincronização em tempo real com Google Cloud Firestore",
      "Animações suaves de entrada (fade-in e slide) utilizando a biblioteca Moti",
      "Navegação intuitiva por gestos e design responsivo para diferentes telas"
    ],
    architecture: [
      "Framework: React Native com Expo SDK",
      "Autenticação & Banco: Firebase Auth & Cloud Firestore",
      "Animações: Moti & React Native Reanimated"
    ],
    gradient: "from-indigo-500/20 via-sky-500/10 to-transparent",
    accentColor: "indigo"
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
