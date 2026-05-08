"use client";

import { Languages } from "lucide-react";

import type { Language } from "@/data/portfolio-content";
import { Button } from "@/components/ui/button";

type LanguageToggleProps = {
  language: Language;
  onToggle: () => void;
};

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={onToggle}
      aria-label="Toggle language"
      className="min-w-24 bg-card/90"
    >
      <Languages className="h-4 w-4" />
      {language === "en" ? "EN" : "ES"}
    </Button>
  );
}
