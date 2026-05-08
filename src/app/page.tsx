"use client";

import { ArrowUpRight, Contact, GitBranch, MapPin } from "lucide-react";
import Link from "next/link";

import { motion } from "framer-motion";

import { SiteFrame } from "@/components/portfolio/site-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { useHydratedLanguage } from "@/stores/language-store";

export default function HomePage() {
  const { language } = useHydratedLanguage();
  const copy = portfolioContent[language];

  return (
    <SiteFrame>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          <Badge variant="accent">{copy.hero.eyebrow}</Badge>
          <h1 className="font-display text-5xl leading-[0.98] md:text-7xl">
            {copy.hero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{copy.profile.headline}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/portfolio">
                {copy.hero.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">{copy.hero.secondaryCta}</Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {copy.profile.location}
            </span>
            <a href={copy.profile.githubUrl} className="inline-flex items-center gap-2 hover:text-foreground">
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
            <a href={copy.profile.linkedinUrl} className="inline-flex items-center gap-2 hover:text-foreground">
              <Contact className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="grid gap-4"
        >
          <Card className="border-primary/18 bg-card/92 shadow-[0_24px_90px_-55px_rgba(31,78,140,0.55)]">
            <CardHeader>
              <CardTitle className="text-2xl">{copy.profile.fullName}</CardTitle>
              <p className="text-sm text-muted-foreground">{copy.profile.role}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-7 text-muted-foreground">{copy.profile.summary}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {copy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-md border border-border bg-muted/70 p-4">
                    <p className="font-mono text-2xl font-semibold text-primary">{metric.value}</p>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </SiteFrame>
  );
}
