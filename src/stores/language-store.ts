"use client";

import { create } from "zustand";

import type { Language } from "@/data/portfolio-content";

type LanguageState = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>()(
  (set, get) => ({
    language: "en",
    setLanguage: (language) => set({ language }),
    toggleLanguage: () => set({ language: get().language === "en" ? "es" : "en" }),
  }),
);

export function useHydratedLanguage() {
  const language = useLanguageStore((state) => state.language);
  const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);

  return {
    language,
    toggleLanguage,
  };
}
