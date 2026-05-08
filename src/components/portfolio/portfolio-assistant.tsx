"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, ExternalLink, MessageCircle, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { useHydratedLanguage } from "@/stores/language-store";

type AssistantKey = "intro" | "frontend" | "data" | "ai" | "contact";

export function PortfolioAssistant() {
  const { language } = useHydratedLanguage();
  const copy = portfolioContent[language];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<AssistantKey>("intro");

  const labels = useMemo(
    () =>
      language === "en"
        ? {
            title: "Portfolio Assistant",
            subtitle: "Guided tour of projects and capabilities",
            cta: "Ask portfolio",
            sections: {
              intro:
                "I can guide you through Daniel's strongest projects, technology stack, and AI automation workflows.",
              frontend:
                "Frontend stack: React 19, Next.js 15, TypeScript strict mode, Tailwind CSS v4, shadcn/ui, Radix, and UX focused delivery.",
              data:
                "Data lane: SQL, PostgreSQL, Supabase, KPI dashboards, reporting structure, and practical business analytics.",
              ai:
                "AI lane: custom agents, MCP-aware integrations, tools/skills orchestration, subagent collaboration, testing, and deployment workflows.",
              contact:
                "Best next step: open LinkedIn for profile and project context, then contact by email for opportunities.",
            },
            quick: {
              intro: "Overview",
              frontend: "Frontend",
              data: "Data",
              ai: "Agentic AI",
              contact: "Contact",
            },
            openPortfolio: "Open portfolio",
            openAiLab: "Open AI Lab",
            openLinkedIn: "Open LinkedIn",
          }
        : {
            title: "Asistente del Portafolio",
            subtitle: "Recorrido guiado de proyectos y capacidades",
            cta: "Preguntar portafolio",
            sections: {
              intro:
                "Puedo guiarte por los proyectos mas fuertes de Daniel, su stack tecnico y su enfoque de automatizacion con IA.",
              frontend:
                "Stack frontend: React 19, Next.js 15, TypeScript estricto, Tailwind CSS v4, shadcn/ui, Radix y entrega enfocada en UX.",
              data:
                "Linea de datos: SQL, PostgreSQL, Supabase, dashboards KPI, estructura de reportes y analitica aplicada a negocio.",
              ai:
                "Linea IA: agentes personalizados, integraciones con conceptos MCP, orquestacion de tools/skills, subagentes, testing y despliegue.",
              contact:
                "Siguiente paso ideal: abrir LinkedIn para perfil y contexto de proyectos, luego contacto por correo para oportunidades.",
            },
            quick: {
              intro: "Resumen",
              frontend: "Frontend",
              data: "Datos",
              ai: "IA Agentica",
              contact: "Contacto",
            },
            openPortfolio: "Abrir portafolio",
            openAiLab: "Abrir Lab IA",
            openLinkedIn: "Abrir LinkedIn",
          },
    [language],
  );

  return (
    <div className="fixed bottom-24 right-4 z-40 lg:bottom-8 lg:right-8">
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="assistant-panel"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22 }}
          >
            <Card className="w-[min(92vw,360px)] border-primary/30 bg-card/98 shadow-[0_24px_70px_-30px_rgba(31,78,140,0.5)] backdrop-blur">
              <CardHeader className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <CardTitle className="inline-flex items-center gap-2 text-lg">
                      <Sparkles className="h-4 w-4 text-accent" />
                      {labels.title}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">{labels.subtitle}</p>
                  </div>
                  <Button size="icon" variant="ghost" onClick={() => setOpen(false)} aria-label="Close assistant">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">{labels.sections[active]}</p>
                <div className="flex flex-wrap gap-2">
                  {(
                    ["intro", "frontend", "data", "ai", "contact"] as AssistantKey[]
                  ).map((key) => (
                    <Button
                      key={key}
                      type="button"
                      size="sm"
                      variant={active === key ? "default" : "outline"}
                      onClick={() => setActive(key)}
                    >
                      {labels.quick[key]}
                    </Button>
                  ))}
                </div>
                <div className="grid gap-2">
                  <Button asChild size="sm">
                    <Link href="/portfolio">
                      {labels.openPortfolio}
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/ai-lab">
                      {labels.openAiLab}
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={copy.profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      {labels.openLinkedIn}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!open ? (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.26 }}>
          <Button size="lg" onClick={() => setOpen(true)} className="rounded-full shadow-[0_20px_40px_-20px_rgba(31,78,140,0.8)]">
            <MessageCircle className="h-4 w-4" />
            {labels.cta}
          </Button>
        </motion.div>
      ) : null}

      <motion.div
        className="pointer-events-none absolute -left-3 -top-3 h-11 w-11 rounded-full bg-primary/15 blur-xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="pointer-events-none absolute -right-4 -bottom-3 h-10 w-10 rounded-full bg-accent/20 blur-xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 2.4, repeat: Number.POSITIVE_INFINITY }}
      />
      <span className="sr-only">
        <Bot />
      </span>
    </div>
  );
}
