"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ProfessionalSummaryTypes = {
  professionalSummary: string;
  setProfessionalSummary: (professionalSummary: string) => void;
};

export const useProfessionalSummary = create<ProfessionalSummaryTypes>()(
  persist(
    (set) => ({
      professionalSummary: "",
      setProfessionalSummary: (professionalSummary) =>
        set({ professionalSummary }),
    }),
    {
      name: "professional-summary",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
