# 🚀 Portfólio Profissional — Antônio Junior

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

Portfólio interativo de engenharia de software desenvolvido por **Antônio Lino da Silva Jr (Antônio Junior)** — Desenvolvedor Full Stack graduado em **Análise e Desenvolvimento de Sistemas (FIAP)** e graduando no **Bacharelado em Engenharia de Software (FIAP)**.

O projeto foi concebido não apenas como uma vitrine estática, mas como uma **aplicação web interativa em produção**, permitindo que recrutadores e líderes técnicos testem simuladores dos projetos reais, inspecionem código, filtrem competências por camada arquitetural e naveguem via linha de comando ou atalhos de teclado (`Ctrl+K`).

---

## ✨ Diferenciais & Funcionalidades Interativas

- 🎯 **Recruiter Lens Switcher (Hero):** Alterna dinamicamente a narrativa, os destaques e a stack principal da página inicial conforme o foco da vaga (*Full Stack*, *Frontend & UI*, *Backend & .NET* ou *Inteligência Artificial*).
- 🧪 **Interactive Project Sandboxes:** Simuladores funcionais embutidos diretamente nos cards dos projetos principais:
  - **Proton Flow (Case TOTVS):** Simulador de extração de ata de reunião, detecção de urgência/gargalos e validação Human-in-the-Loop com IA local (Faster-Whisper + Ollama).
  - **Challenge Porto:** Simulador de inferência de Machine Learning (TF-IDF + Random Forest) para triagem de sintomas mecânicos.
  - **QualityPulse:** Scanner interativo de métricas de Acessibilidade (a11y), Performance, Segurança e SEO.
  - **FutureHub:** Simulador de missões gamificadas geradas por IA e cálculo de XP integrado ao ecossistema Java/Spring Boot.
  - **MotoSecurityX (Mottu):** Painel de telemetria de pátios e status de frota em tempo real (.NET 8 API).
  - **SAFE.Core (Java):** Simulador de monitoramento térmico regional e disparo de alertas ambientais (Spring Boot + Oracle).
- 💻 **Console do Desenvolvedor (3 em 1):**
  - *Match Recrutador:* Calculadora interativa de compatibilidade técnica com os requisitos da vaga.
  - *Explorador de Arquitetura:* Inspeção visual das 4 camadas (Frontend, Backend/APIs, IA/ML e Persistência).
  - *Terminal Interativo:* Emulador de CLI com comandos rápidos (`bio`, `stacks`, `repos`, `fiap`, `cv`, `avatar`, `contato`).
- ⌨️ **Command Palette Global (`Ctrl+K` / `Cmd+K`):** Busca instantânea (insensível a acentos) indexando todos os projetos, links de Live Demo, 40+ competências técnicas e ações rápidas.
- 🔍 **Inspetor de Código & Stack:** Visualizador de código de produção (*Next.js Server Actions + Zod*, *.NET 8 Controllers* e *Pipelines Scikit-Learn*) com simulação de execução e mapeamento prático de todas as tecnologias do portfólio.
- 🔊 **Web Audio API Synthesizer:** Feedback sonoro tátil sintetizado nativamente no navegador via Web Audio API (sem arquivos de áudio externos), com opção de mute na *Floating Dock*.
- 📬 **API de Contato Híbrida (`/api/contact`):** Route Handler no Next.js com suporte a envio server-side via **Resend** ou **Formspree** e fallback automático para `mailto:` + **WhatsApp Dinâmico**, garantindo que nenhuma mensagem seja perdida.
- 📈 **SEO & OpenGraph Dinâmico:** Geração de card social 1200x630 via `next/og` (`opengraph-image.tsx`), dados estruturados JSON-LD (`Schema.org/ProfilePage` & `Person`), `sitemap.xml` e `robots.txt`.

---

## 🏆 Projetos em Destaque no Portfólio

| Projeto | Categoria | Stack Principal | Links |
| :--- | :--- | :--- | :--- |
| **Proton Flow — Inteligência Gerencial (TOTVS)** | IA & Analytics | React 19, Vite 8, Recharts, Python, FastAPI, Faster-Whisper, Ollama, PostgreSQL | 🔒 Repositório Privado (Colaborativo) |
| **Challenge Porto — Diagnóstico Automotivo** | IA & ML | Next.js, TypeScript, Python, Flask, Scikit-Learn, IBM Watson | [Frontend Repo](https://github.com/Antonio-Junior1/nextjs-sprint) • [API IA Repo](https://github.com/Antonio-Junior1/api-ia) • [Live Demo](https://challenge-porto-ashy.vercel.app) |
| **QualityPulse — Auditoria Web & APIs** | Full Stack | TypeScript, React, Node.js, Express, Drizzle ORM, Vitest | [GitHub Repo](https://github.com/Antonio-Junior1/qualitypulse) |
| **FutureHub — Inovação Gamificada & IA** | IA & Mobile | Java 17, Spring Boot 3, React Native (Expo), Python/Flask IA, Azure SQL | [GitHub Repo](https://github.com/Antonio-Junior1/FutureHub) |
| **MotoSecurityX / MobileMottu** | Mobile & IoT | React Native, Expo, .NET 8 (C#), Firebase Auth & Firestore, i18n | [GitHub Repo](https://github.com/Antonio-Junior1/mottuMobile) |
| **SAFE.Core — Monitoramento Ambiental** | Backend & APIs | Java 17, Spring Boot, Spring Data JPA, Oracle DB, JWT, Swagger | [GitHub Repo](https://github.com/Antonio-Junior1/java) |
| **Sistema de Controle de Gastos** | Full Stack | React, TypeScript, Vite, Node.js, REST API, SQLite | [GitHub Repo](https://github.com/Antonio-Junior1/sistema-controle-gastos) |
| **Green-Vision — Energia Sustentável** | Full Stack & Web | Next.js (App Router), React, TypeScript, Tailwind CSS | [GitHub Repo](https://github.com/Antonio-Junior1/Green-Vision) • [Live Demo](https://green-vision-gilt.vercel.app) |

---

## 📂 Arquitetura do Projeto

```text
src/
├── app/
│   ├── api/contact/route.ts    # Endpoint REST para envio de mensagens (Resend / Formspree / Mailto)
│   ├── globals.css             # Tokens visuais, Bento Cards e animações em Tailwind CSS 4
│   ├── layout.tsx              # Root Layout, fontes (Plus Jakarta Sans & JetBrains Mono), Metadata e JSON-LD
│   ├── opengraph-image.tsx     # Geração dinâmica de imagem OpenGraph (1200x630) no Edge
│   ├── page.tsx                # Composição principal das seções do portfólio
│   ├── robots.ts               # Regras de indexação para motores de busca
│   └── sitemap.ts              # Sitemap XML dinâmico
├── components/
│   ├── Header.tsx              # Barra de navegação fixa com status em tempo real e busca rápida
│   ├── Hero.tsx                # Apresentação principal com Recruiter Lens e Avatar Switcher
│   ├── HeroPlayground.tsx      # Console interativo (Match Recrutador, Arquitetura e Terminal)
│   ├── CodeInspector.tsx       # Visualizador e simulador de snippets (Next.js, .NET 8 e Python ML)
│   ├── About.tsx               # Bento Grid sobre formação FIAP e ponte Suporte/Engenharia
│   ├── Experience.tsx          # Experiência corporativa na BB Central e conquistas técnicas
│   ├── Projects.tsx            # Vitrine filtrável de projetos (Todos, IA, Full Stack, Mobile, Backend)
│   ├── ProjectCard.tsx         # Card com alternância entre visão geral e Sandbox interativo
│   ├── ProjectSandbox.tsx      # Simuladores interativos de 6 projetos reais
│   ├── ProjectModal.tsx        # Ficha técnica detalhada de arquitetura e responsabilidades
│   ├── Skills.tsx              # Matriz de competências com busca em tempo real e inspetor prático
│   ├── Methodology.tsx         # Soft skills aplicadas a contextos reais de engenharia
│   ├── Education.tsx           # Linha do tempo acadêmica (FIAP) e certificações (Ignite, Full Cycle)
│   ├── Contact.tsx             # Formulário integrado à API, templates de 1 clique e WhatsApp dinâmico
│   ├── CommandPalette.tsx      # Paleta de comandos global (Ctrl+K)
│   ├── FloatingDock.tsx        # Dock flutuante inferior com navegação, áudio e ações rápidas
│   └── Footer.tsx              # Rodapé institucional
├── context/
│   ├── AvatarContext.tsx       # Estado global para alternância entre Foto Real e Avatar 3D
│   └── ThemeContext.tsx        # Provedor de tema claro de alto contraste
├── data/
│   └── portfolioData.ts        # Fonte única de verdade (Projetos, Experiência, Formação e Skills)
└── utils/
    └── soundEffects.ts         # Sintetizador de áudio Web Audio API para microinterações
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- **Node.js** 20+
- **npm**, **pnpm** ou **yarn**

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Antonio-Junior1/portifolio.git

# 2. Acesse a pasta do projeto
cd portifolio

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

### Variáveis de Ambiente (Opcional)

Para habilitar o disparo direto de e-mails server-side no formulário de contato (sem depender do fallback `mailto:`), crie um arquivo `.env.local` na raiz do projeto com uma das opções abaixo:

```env
# Opção 1: Envio via Resend (https://resend.com)
RESEND_API_KEY=re_sua_chave_aqui

# Opção 2: Envio via Formspree (https://formspree.io)
FORMSPREE_ENDPOINT=https://formspree.io/f/seu_id_aqui
```

---

## 📬 Contato & Redes

- **Nome:** Antônio Lino da Silva Jr (*Antônio Junior*)
- **Localização:** São Paulo, SP — Disponível para Estágio & Desenvolvedor Júnior Full Stack
- **LinkedIn:** [linkedin.com/in/antoniojr1](https://www.linkedin.com/in/antoniojr1/)
- **GitHub:** [github.com/Antonio-Junior1](https://github.com/Antonio-Junior1)
- **E-mail:** [junuor10133@gmail.com](mailto:junuor10133@gmail.com)
