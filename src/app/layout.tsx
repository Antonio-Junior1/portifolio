import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://antoniojunior.dev"),
  title: "Antônio Junior | Desenvolvedor Full Stack",
  description: "Portfólio de Antônio Junior. Desenvolvedor Full Stack focado em React, Next.js, TypeScript, Node.js, .NET e Inteligência Artificial. Formação em Análise e Desenvolvimento de Sistemas e Engenharia de Software pela FIAP.",
  keywords: [
    "Antônio Junior",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Júnior",
    "Estágio Desenvolvimento",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    ".NET",
    "FIAP",
    "Inteligência Artificial",
    "São Paulo"
  ],
  authors: [{ name: "Antônio Junior", url: "https://github.com/Antonio-Junior1" }],
  creator: "Antônio Junior",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://github.com/Antonio-Junior1",
    title: "Antônio Junior | Desenvolvedor Full Stack",
    description: "Desenvolvedor de software com experiência em desenvolvimento web, suporte técnico e projetos acadêmicos e corporativos. React, Next.js, TypeScript, Node.js e Docker.",
    siteName: "Portfólio Antônio Junior",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antônio Junior | Desenvolvedor Full Stack",
    description: "Portfólio profissional e projetos de desenvolvimento web, mobile e inteligência artificial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth light" style={{ colorScheme: "light" }}>
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} min-h-screen bg-[#f8fafc] text-slate-900 antialiased selection:bg-blue-500/20 selection:text-blue-700`}
      >
        {children}
      </body>
    </html>
  );
}
