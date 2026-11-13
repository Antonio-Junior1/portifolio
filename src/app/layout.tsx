import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://antoniojr-dev.vercel.app"),
  title: {
    default: "Antônio Junior | Desenvolvedor Full Stack (React, Next.js, .NET, Java & IA)",
    template: "%s | Antônio Junior",
  },
  description:
    "Portfólio de Antônio Junior (Antônio Lino da Silva Jr). Desenvolvedor Full Stack com projetos em React, Next.js, TypeScript, Node.js, .NET 8, Java (Spring Boot), React Native e Python (IA/ML). Graduado em ADS e cursando Engenharia de Software na FIAP.",
  keywords: [
    "Antônio Junior",
    "Antônio Lino da Silva Jr",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Júnior",
    "Estágio Desenvolvimento de Software",
    "Estágio Engenharia de Software",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    ".NET 8",
    "C#",
    "Java",
    "Spring Boot",
    "React Native",
    "Python",
    "Machine Learning",
    "FIAP",
    "São Paulo",
  ],
  authors: [{ name: "Antônio Junior", url: "https://github.com/Antonio-Junior1" }],
  creator: "Antônio Junior",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://antoniojr-dev.vercel.app",
    title: "Antônio Junior | Desenvolvedor Full Stack",
    description:
      "Portfólio interativo com simuladores de projetos reais em Next.js, TypeScript, .NET 8, Java Spring Boot, React Native e Inteligência Artificial.",
    siteName: "Portfólio Antônio Junior",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antônio Junior | Desenvolvedor Full Stack",
    description:
      "Projetos reais em produção: Challenge Porto (IA), QualityPulse, FutureHub, MotoSecurityX (.NET 8) e SAFE.Core (Java Spring Boot).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: PERSONAL_INFO.fullName,
      alternateName: PERSONAL_INFO.name,
      jobTitle: PERSONAL_INFO.role,
      description: PERSONAL_INFO.headline,
      email: PERSONAL_INFO.email,
      telephone: PERSONAL_INFO.phone,
      url: "https://antoniojr-dev.vercel.app",
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "FIAP - Faculdade de Informática e Administração Paulista",
        },
      ],
      sameAs: [PERSONAL_INFO.githubUrl, PERSONAL_INFO.linkedinUrl],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        ".NET 8",
        "C#",
        "Java",
        "Spring Boot",
        "Python",
        "Machine Learning",
        "React Native",
        "PostgreSQL",
        "Oracle Database",
        "Docker",
      ],
      hasPart: PROJECTS.map((p) => ({
        "@type": "SoftwareSourceCode",
        name: p.title,
        description: p.description,
        codeRepository: p.githubUrl,
        programmingLanguage: p.tags,
      })),
    },
  };

  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} min-h-screen antialiased selection:bg-blue-500/20 selection:text-blue-600`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('portfolio-theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.classList.toggle('light',!d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
