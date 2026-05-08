"use client";

import { motion } from "framer-motion";
import { Bot, FolderKanban, Home, Info, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PortfolioAssistant } from "@/components/portfolio/portfolio-assistant";
import { LanguageToggle } from "@/components/portfolio/language-toggle";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { portfolioContent } from "@/data/portfolio-content";
import { useHydratedLanguage } from "@/stores/language-store";

type SiteFrameProps = {
  children: React.ReactNode;
};

const routeConfig = [
  { href: "/", key: "home", icon: Home },
  { href: "/about", key: "about", icon: Info },
  { href: "/portfolio", key: "portfolio", icon: FolderKanban },
  { href: "/ai-lab", key: "aiLab", icon: Bot },
  { href: "/contact", key: "contact", icon: Mail },
] as const;

export function SiteFrame({ children }: SiteFrameProps) {
  const pathname = usePathname();
  const { language, toggleLanguage } = useHydratedLanguage();
  const copy = portfolioContent[language];

  const routeLabels = {
    en: { home: "Home", about: "About", portfolio: "Portfolio", aiLab: "AI Lab", contact: "Contact" },
    es: { home: "Inicio", about: "Sobre mi", portfolio: "Proyectos", aiLab: "Lab IA", contact: "Contacto" },
  } as const;

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold tracking-tight">{copy.profile.name}</p>
              <p className="text-xs text-muted-foreground">{copy.profile.role}</p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="hidden md:inline-flex">
              {language === "en" ? "English First" : "Prioridad Ingles"}
            </Badge>
            <LanguageToggle language={language} onToggle={toggleLanguage} />
          </div>
        </div>
        <nav className="mx-auto hidden max-w-7xl items-center gap-2 px-5 pb-4 lg:flex lg:px-8">
          {routeConfig.map(({ href, key, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {routeLabels[language][key]}
              </Link>
            );
          })}
        </nav>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border/70 bg-background/92 px-3 py-2 backdrop-blur lg:hidden">
        <div className="grid grid-cols-5 gap-2">
          {routeConfig.map(({ href, key, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex flex-col items-center gap-1 rounded-md py-2 text-xs font-medium",
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {routeLabels[language][key]}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="h-20 lg:hidden" />
      <PortfolioAssistant />
    </main>
  );
}
