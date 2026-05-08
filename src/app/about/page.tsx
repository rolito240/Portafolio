"use client";

import { motion } from "framer-motion";
import { Bot, Database, MonitorSmartphone } from "lucide-react";

import { SiteFrame } from "@/components/portfolio/site-frame";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { useHydratedLanguage } from "@/stores/language-store";

const icons = [MonitorSmartphone, Database, Bot];

export default function AboutPage() {
  const { language } = useHydratedLanguage();
  const copy = portfolioContent[language];

  return (
    <SiteFrame>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl space-y-4"
        >
          <Badge variant="accent">{language === "en" ? "About me" : "Sobre mi"}</Badge>
          <h1 className="font-display text-5xl md:text-6xl">
            {language === "en" ? "A profile built for execution." : "Un perfil construido para ejecutar."}
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">{copy.profile.summary}</p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {copy.tracks.map((track, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Card className="h-full">
                  <CardHeader className="space-y-3">
                    <Icon className="h-7 w-7 text-primary" />
                    <CardTitle>{track.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-7 text-muted-foreground">{track.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-3">
          {copy.education.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}

