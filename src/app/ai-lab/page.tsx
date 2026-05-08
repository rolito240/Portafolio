"use client";

import { motion } from "framer-motion";
import { Bot, Boxes, Bug, GitBranch, Rocket, Search, ShieldCheck, Wrench } from "lucide-react";

import { SiteFrame } from "@/components/portfolio/site-frame";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHydratedLanguage } from "@/stores/language-store";

const laneIcons = [Bot, Wrench, Boxes, Search, Bug, Rocket, ShieldCheck, GitBranch];

export default function AiLabPage() {
  const { language } = useHydratedLanguage();

  const copy =
    language === "en"
      ? {
          badge: "AI Lab",
          title: "Agentic workflows built for delivery, not demos.",
          subtitle:
            "This page shows the practical capability stack I am building with Codex: planning, implementation, QA, and production-ready handoff.",
          flowTitle: "How we execute",
          flow: [
            "Scope and research: clarify business goal, constraints, and evidence.",
            "Plan architecture: choose stack, components, and implementation phases.",
            "Build in iterations: ship visible progress with clean code boundaries.",
            "Verify with tests and browser checks before delivery.",
          ],
          lanes: [
            { title: "Custom Agents", detail: "Task-focused agents with clear responsibilities and quality criteria." },
            { title: "Tools + Skills", detail: "Reusable workflows for coding, docs, QA, and release tasks." },
            { title: "MCP Integrations", detail: "Context-aware connections to apps, repos, and production systems." },
            { title: "Research Pipelines", detail: "Fast multi-source research turned into implementation decisions." },
            { title: "Debug Systems", detail: "Systematic diagnosis for runtime, UI, and integration problems." },
            { title: "Deployment Flow", detail: "GitHub + Vercel oriented release flow with strong validation." },
            { title: "Quality Gates", detail: "Lint, type safety, build checks, and E2E verification." },
            { title: "Collaboration", detail: "Subagent coordination with ownership and execution tracking." },
          ],
        }
      : {
          badge: "Lab IA",
          title: "Flujos agenticos para entregar resultados, no solo demos.",
          subtitle:
            "Esta pagina muestra la pila de capacidades practicas que construyo con Codex: planeacion, implementacion, QA y entrega lista para produccion.",
          flowTitle: "Como ejecutamos",
          flow: [
            "Alcance e investigacion: objetivo de negocio, restricciones y evidencia.",
            "Plan de arquitectura: stack, componentes y fases de implementacion.",
            "Construccion iterativa: avances visibles con limites de codigo claros.",
            "Verificacion con tests y browser checks antes de entregar.",
          ],
          lanes: [
            { title: "Agentes Personalizados", detail: "Agentes enfocados por tarea con responsabilidades y criterios de calidad." },
            { title: "Tools + Skills", detail: "Flujos reutilizables para codigo, documentos, QA y release." },
            { title: "Integraciones MCP", detail: "Conexiones con contexto a apps, repositorios y sistemas productivos." },
            { title: "Pipelines de Investigacion", detail: "Investigacion rapida multi-fuente convertida en decisiones tecnicas." },
            { title: "Sistemas de Debug", detail: "Diagnostico sistematico de errores runtime, UI e integracion." },
            { title: "Flujo de Despliegue", detail: "Entrega orientada a GitHub + Vercel con validacion robusta." },
            { title: "Puertas de Calidad", detail: "Lint, tipado estricto, build y verificacion E2E." },
            { title: "Colaboracion", detail: "Coordinacion con subagentes, ownership y seguimiento de ejecucion." },
          ],
        };

  return (
    <SiteFrame>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl space-y-4"
        >
          <Badge variant="accent">{copy.badge}</Badge>
          <h1 className="font-display text-5xl md:text-6xl">{copy.title}</h1>
          <p className="text-lg leading-8 text-muted-foreground">{copy.subtitle}</p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="border-primary/20 bg-card/90">
            <CardHeader>
              <CardTitle>{copy.flowTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {copy.flow.map((item, index) => (
                <div key={item} className="rounded-md border border-border bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                  <span className="mr-2 font-mono text-primary">0{index + 1}</span>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {copy.lanes.map((lane, index) => {
              const Icon = laneIcons[index];
              return (
                <motion.div
                  key={lane.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.34, delay: index * 0.04 }}
                >
                  <Card className="h-full border-border/80 bg-card/92">
                    <CardHeader className="space-y-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{lane.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-muted-foreground">{lane.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
