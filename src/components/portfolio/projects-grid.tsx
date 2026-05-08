"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PortfolioCopy } from "@/data/portfolio-content";

type ProjectsGridProps = {
  projects: PortfolioCopy["projects"];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
        >
          <Card className="overflow-hidden border-border/80 shadow-[0_16px_60px_-44px_rgba(17,24,39,0.45)]">
            {"images" in project && project.images[0] ? (
              <div className="relative aspect-[16/10] border-b border-border bg-muted">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} screenshot`}
                  fill
                  className="pointer-events-none object-cover"
                />
              </div>
            ) : null}
            {"images" in project && project.images.length > 1 ? (
              <div className="flex gap-2 overflow-x-auto border-b border-border px-3 py-3">
                {project.images.slice(1, 7).map((imagePath) => (
                  <div
                    key={imagePath}
                    className="relative h-24 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-muted"
                  >
                    <Image
                      src={imagePath}
                      alt={`${project.title} detail`}
                      fill
                      className="pointer-events-none object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <CardHeader className="space-y-3">
              <Badge variant="outline">{project.category}</Badge>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="leading-7 text-muted-foreground">{project.description}</p>
              <p className="text-sm font-medium leading-6">{project.impact}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center gap-1 text-primary"
                >
                  Case Study <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary"
                >
                  Repo <ArrowUpRight className="h-4 w-4" />
                </a>
                {"liveUrl" in project && project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary"
                  >
                    Live <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </motion.article>
      ))}
    </div>
  );
}
