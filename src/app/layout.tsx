import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritik Gupta | AI/ML & Backend Engineer | RAG, FastAPI, LLM Systems",
  description: "AI/ML Engineer with 2.5+ years building production GenAI systems, RAG pipelines, and scalable FastAPI backends. Open to opportunities.",
  keywords: ["AI ML engineer", "FastAPI developer", "RAG pipeline engineer", "LLM backend developer", "Python AI engineer"],
  authors: [{ name: "Ritik Gupta" }],
  openGraph: {
    title: "Ritik Gupta | AI/ML & Backend Engineer",
    description: "AI/ML Engineer with 2.5+ years building production GenAI systems, RAG pipelines, and scalable FastAPI backends.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
