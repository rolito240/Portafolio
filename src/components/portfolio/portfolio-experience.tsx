"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Contact,
  Database,
  GitBranch,
  Mail,
  MapPin,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguageToggle } from "@/components/portfolio/language-toggle";
import { portfolioContent } from "@/data/portfolio-content";
import { useHydratedLanguage } from "@/stores/language-store";

const trackIcons = [MonitorSmartphone, Database, Bot];

export function PortfolioExperience() {
  const { language, toggleLanguage } = useHydratedLanguage();
  const copy = portfolioContent[language];

  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-border bg-background/88 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href="#top" className="font-semibold tracking-tight">
            {copy.profile.name}
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            {copy.nav.map((item, index) => {
              const href = ["#about", "#work", "#ai", "#skills", "#contact"][index];
              return (
                <a key={item} href={href} className="transition-colors hover:text-foreground">
                  {item}
                </a>
              );
            })}
          </nav>
          <LanguageToggle language={language} onToggle={toggleLanguage} />
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center gap-8">
          <div className="space-y-5">
            <Badge variant="accent">{copy.hero.eyebrow}</Badge>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                {copy.profile.role}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-7xl">
                {copy.hero.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                {copy.profile.headline}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#work">
                {copy.hero.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                {copy.hero.secondaryCta}
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {copy.profile.location}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={copy.profile.githubUrl}>
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={copy.profile.linkedinUrl}>
              <Contact className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{copy.profile.fullName}</p>
                  <CardTitle className="mt-2 text-2xl">{copy.profile.role}</CardTitle>
                </div>
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <p className="text-base leading-7 text-muted-foreground">{copy.profile.summary}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {copy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-md border border-border bg-muted p-4">
                    <p className="font-mono text-2xl font-semibold text-primary">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-card/55">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 lg:grid-cols-3 lg:px-8">
          {copy.tracks.map((track, index) => {
            const Icon = trackIcons[index];
            return (
              <Card key={track.title}>
                <CardHeader>
                  <Icon className="h-6 w-6 text-primary" />
                  <CardTitle>{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">{track.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <SectionShell id="work" eyebrow="Selected work" title={language === "en" ? "Projects with business context and real interfaces." : "Proyectos con contexto real e interfaces concretas."}>
        <div className="grid gap-5 lg:grid-cols-2">
          {copy.projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              {"images" in project && project.images[0] ? (
                <div className="relative aspect-[16/9] border-b border-border bg-muted">
                  <Image src={project.images[0]} alt={`${project.title} screenshot`} fill className="pointer-events-none object-cover" />
                </div>
              ) : null}
              {"images" in project && project.images.length > 1 ? (
                <div className="flex gap-2 overflow-x-auto border-b border-border p-2">
                  {project.images.slice(1, 6).map((imagePath) => (
                    <div key={imagePath} className="relative h-20 w-14 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
                      <Image src={imagePath} alt={`${project.title} detail`} fill className="pointer-events-none object-cover" />
                    </div>
                  ))}
                </div>
              ) : null}
              <CardHeader>
                <Badge variant="outline">{project.category}</Badge>
                <CardTitle>{project.title}</CardTitle>
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
                <div className="flex flex-wrap gap-3 text-sm font-semibold">
                  <a href={project.repoUrl} className="inline-flex items-center gap-1 text-primary">
                    Repo <ArrowUpRight className="h-4 w-4" />
                  </a>
                  {"liveUrl" in project && project.liveUrl ? (
                    <a href={project.liveUrl} className="inline-flex items-center gap-1 text-primary">
                      Live <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="ai" eyebrow="Agentic systems" title={copy.aiSystems.title}>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <p className="text-xl leading-9 text-muted-foreground">{copy.aiSystems.description}</p>
          <div className="grid gap-3">
            {copy.aiSystems.items.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <Bot className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="skills" eyebrow="Capabilities" title={language === "en" ? "A practical skill matrix." : "Una matriz de habilidades practica."}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {copy.skills.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 grid gap-3">
          {copy.education.map((item) => (
            <div key={item} className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </SectionShell>

      <section id="contact" className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-4">
            <Badge variant="accent">Contact</Badge>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{copy.contact.title}</h2>
            <p className="max-w-xl text-lg leading-8 text-secondary-foreground/72">{copy.contact.description}</p>
            <a className="inline-flex items-center gap-2 text-sm font-semibold" href={`mailto:${copy.profile.email}`}>
              <Mail className="h-4 w-4" />
              {copy.profile.email}
            </a>
          </div>
          <Card className="bg-background text-foreground">
            <CardContent className="grid gap-4 pt-6">
              <Button asChild size="lg">
                <a href={copy.profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  {copy.contact.primary}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`mailto:${copy.profile.email}`}>
                  {copy.contact.secondary}
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="mb-8 max-w-3xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
