"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { SiteFrame } from "@/components/portfolio/site-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { useHydratedLanguage } from "@/stores/language-store";

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const { language } = useHydratedLanguage();
  const copy = portfolioContent[language];
  const project = copy.projects.find((item) => item.slug === params.slug);

  if (!project) {
    return (
      <SiteFrame>
        <section className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-20">
          <Card>
            <CardHeader>
              <CardTitle>{language === "en" ? "Project not found" : "Proyecto no encontrado"}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="h-4 w-4" />
                  {language === "en" ? "Back to portfolio" : "Volver al portafolio"}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </SiteFrame>
    );
  }

  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-5"
        >
          <Button asChild variant="outline" size="sm">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4" />
              {language === "en" ? "Back to portfolio" : "Volver al portafolio"}
            </Link>
          </Button>
          <Badge variant="outline">{project.category}</Badge>
          <h1 className="font-display text-5xl md:text-6xl">{project.title}</h1>
          <p className="max-w-4xl text-lg leading-8 text-muted-foreground">{project.description}</p>
          <p className="max-w-4xl leading-7">{project.impact}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary">
              Repo <ArrowUpRight className="h-4 w-4" />
            </a>
            {"liveUrl" in project && project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary">
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </motion.div>

        {"images" in project && project.images.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {project.images.map((imagePath, index) => {
              const caption = "captions" in project && project.captions[index] ? project.captions[index] : null;
              return (
                <motion.figure
                  key={imagePath}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="overflow-hidden rounded-lg border border-border bg-card"
                >
                  <div className="relative aspect-[9/16] w-full bg-muted">
                    <Image src={imagePath} alt={`${project.title} screen ${index + 1}`} fill className="pointer-events-none object-cover" />
                  </div>
                  {caption ? (
                    <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                      {caption}
                    </figcaption>
                  ) : null}
                </motion.figure>
              );
            })}
          </div>
        ) : null}
      </section>
    </SiteFrame>
  );
}

