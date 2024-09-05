"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ReferenceEntryTypes = {
  referenceFullName: string;
  referenceCompany: string;
  referencePhone: string;
  referenceEmail: string;
};

type ReferenceHistoryTypes = {
  referencesTitle: string;
  setReferencesTitle: (referenceTitle: string) => void;
  referenceHistory: { [key: number]: ReferenceEntryTypes };
  toggledReference: boolean;
  setToggledReference: (value: boolean) => void;
  setReferenceFullName: (index: number, referenceFullName: string) => void;
  setReferenceCompany: (index: number, referenceCompany: string) => void;
  setReferencePhone: (index: number, referencePhone: string) => void;
  setReferenceEmail: (index: number, referenceEmail: string) => void;
};

export const useReference = create<ReferenceHistoryTypes>()(
  persist(
    (set) => ({
      referencesTitle: "references",
      setReferencesTitle: (referenceTitle: string) =>
        set({ referencesTitle: referenceTitle }),
      referenceHistory: {},
      toggledReference: false,
      setToggledReference: (value: boolean) => set({ toggledReference: value }),
      setReferenceFullName: (index, referenceFullName) =>
        set((state) => ({
          referenceHistory: {
            ...state.referenceHistory,
            [index]: {
              ...state.referenceHistory[index],
              referenceFullName,
            },
          },
        })),

      setReferenceCompany: (index, referenceCompany) =>
        set((state) => ({
          referenceHistory: {
            ...state.referenceHistory,
            [index]: {
              ...state.referenceHistory[index],
              referenceCompany,
            },
          },
        })),

      setReferencePhone: (index, referencePhone) =>
        set((state) => ({
          referenceHistory: {
            ...state.referenceHistory,
            [index]: {
              ...state.referenceHistory[index],
              referencePhone,
            },
          },
        })),

      setReferenceEmail: (index, referenceEmail) =>
        set((state) => ({
          referenceHistory: {
            ...state.referenceHistory,
            [index]: {
              ...state.referenceHistory[index],
              referenceEmail,
            },
          },
        })),
    }),
    {
      name: "reference-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
