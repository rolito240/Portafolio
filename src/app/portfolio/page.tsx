"use client";

import { motion } from "framer-motion";

import { ProjectsGrid } from "@/components/portfolio/projects-grid";
import { SiteFrame } from "@/components/portfolio/site-frame";
import { Badge } from "@/components/ui/badge";
import { portfolioContent } from "@/data/portfolio-content";
import { useHydratedLanguage } from "@/stores/language-store";

export default function PortfolioPage() {
  const { language } = useHydratedLanguage();
  const copy = portfolioContent[language];

  return (
    <SiteFrame>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-4xl space-y-4"
        >
          <Badge variant="accent">{language === "en" ? "Portfolio" : "Portafolio"}</Badge>
          <h1 className="font-display text-5xl md:text-6xl">
            {language === "en"
              ? "Projects with real interfaces and product intent."
              : "Proyectos con interfaz real y enfoque de producto."}
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            {language === "en"
              ? "Each project includes visual evidence, implementation links, and the specific value delivered."
              : "Cada proyecto incluye evidencia visual, links de implementacion y valor entregado."}
          </p>
        </motion.div>

        <ProjectsGrid projects={copy.projects} />
      </section>
    </SiteFrame>
  );
}

