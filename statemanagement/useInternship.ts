"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type InternshipEntryTypes = {
  internshipJobTitle: string;
  internshipEmployer: string;
  internshipStartDate: Date | null | any;
  internshipEndDate: Date | null | any;
  internshipCity: string;
  internshipDescription: string;
};

type InternshipHistoryTypes = {
  internshipHistory: { [key: number]: InternshipEntryTypes };
  internshipsTitle: string;
  sortableInternshipList: number[];
  setInternshipJobTitle: (index: number, internshipJobTitle: string) => void;
  setInternshipEmployer: (index: number, internshipEmployer: string) => void;
  setInternshipStartDate: (
    index: number,
    internshipStartDate: Date | null | any
  ) => void;
  setInternshipEndDate: (
    index: number,
    internshipEndDate: Date | null | any
  ) => void;
  setInternshipCity: (index: number, internshipCity: string) => void;
  setInternshipDescription: (
    index: number,
    internshipDescription: string
  ) => void;
  setInternshipsTitle: (internshipsTitle: string) => void;
  setSortableInternshipList: (sortableInternshipList: number[]) => void;
};

export const useInternship = create<InternshipHistoryTypes>()(
  persist(
    (set) => ({
      internshipHistory: {},
      internshipsTitle: "internships",
      sortableInternshipList: [],

      setInternshipJobTitle: (index, internshipJobTitle) =>
        set((state) => ({
          internshipHistory: {
            ...state.internshipHistory,
            [index]: {
              ...state.internshipHistory[index],
              internshipJobTitle,
            },
          },
        })),

      setInternshipEmployer: (index, internshipEmployer) =>
        set((state) => ({
          internshipHistory: {
            ...state.internshipHistory,
            [index]: {
              ...state.internshipHistory[index],
              internshipEmployer,
            },
          },
        })),

      setInternshipStartDate: (index, internshipStartDate) =>
        set((state) => ({
          internshipHistory: {
            ...state.internshipHistory,
            [index]: {
              ...state.internshipHistory[index],
              internshipStartDate,
            },
          },
        })),

      setInternshipEndDate: (index, internshipEndDate) =>
        set((state) => ({
          internshipHistory: {
            ...state.internshipHistory,
            [index]: {
              ...state.internshipHistory[index],
              internshipEndDate,
            },
          },
        })),

      setInternshipCity: (index, internshipCity) =>
        set((state) => ({
          internshipHistory: {
            ...state.internshipHistory,
            [index]: {
              ...state.internshipHistory[index],
              internshipCity,
            },
          },
        })),

      setInternshipDescription: (index, internshipDescription) =>
        set((state) => ({
          internshipHistory: {
            ...state.internshipHistory,
            [index]: {
              ...state.internshipHistory[index],
              internshipDescription,
            },
          },
        })),

      setInternshipsTitle: (internshipsTitle) => set({ internshipsTitle }),

      setSortableInternshipList: (sortableInternshipList) =>
        set({ sortableInternshipList }),
    }),
    {
      name: "internships",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
