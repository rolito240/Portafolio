"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

import { SiteFrame } from "@/components/portfolio/site-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { useHydratedLanguage } from "@/stores/language-store";

export default function ContactPage() {
  const { language } = useHydratedLanguage();
  const copy = portfolioContent[language];

  return (
    <SiteFrame>
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 lg:grid-cols-[1fr_1fr]"
        >
          <div className="space-y-4">
            <Badge variant="accent">{language === "en" ? "Contact" : "Contacto"}</Badge>
            <h1 className="font-display text-5xl md:text-6xl">{copy.contact.title}</h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">{copy.contact.description}</p>
            <p className="text-sm text-muted-foreground">{copy.profile.availability}</p>
          </div>

          <Card className="border-primary/25">
            <CardHeader>
              <CardTitle>{language === "en" ? "Preferred channels" : "Canales preferidos"}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
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
        </motion.div>
      </section>
    </SiteFrame>
  );
}

