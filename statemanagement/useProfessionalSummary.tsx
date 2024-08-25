"use client";

import { create } from "zustand";

type ProfessionalSummaryTypes = {
  professionalSummary: string;
  setProfessionalSummary: (professionalSummary: string) => void;
};

export const useProfessionalSummary = create<ProfessionalSummaryTypes>(
  (set) => ({
    professionalSummary: "",
    setProfessionalSummary: (professionalSummary) =>
      set({ professionalSummary }),
  })
);
