"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type EmploymentEntryTypes = {
  employmentJobTitle: string;
  employer: string;
  employmentCity: string;
  employmentDescription: string;
  employmentStartDate: Date | null;
  employmentEndDate: Date | null;
};

type EmploymentHistoryTypes = {
  employmentHistory: { [key: number]: EmploymentEntryTypes };
  setEmploymentJobTitle: (index: number, employmentJobTitle: string) => void;
  setEmployer: (index: number, employer: string) => void;
  setEmploymentCity: (index: number, employmentCity: string) => void;
  setEmploymentDescription: (
    index: number,
    employmentDescription: string
  ) => void;
  setEmploymentStartDate: (
    index: number,
    employmentStartDate: Date | null
  ) => void;
  setEmploymentEndDate: (index: number, employmentEndDate: Date | null) => void;
  employmentHistoryTitle: string;
  setEmploymentHistoryTitle: (title: string) => void;
};

export const useEmploymentHistory = create<EmploymentHistoryTypes>()(
  persist(
    (set) => ({
      employmentHistory: {},
      employmentHistoryTitle: "employment history",
      setEmploymentHistoryTitle: (employmentHistoryTitle) =>
        set(() => ({ employmentHistoryTitle })),

      setEmploymentJobTitle: (index, employmentJobTitle) =>
        set((state) => ({
          employmentHistory: {
            ...state.employmentHistory,
            [index]: {
              ...state.employmentHistory[index],
              employmentJobTitle,
            },
          },
        })),

      setEmployer: (index, employer) =>
        set((state) => ({
          employmentHistory: {
            ...state.employmentHistory,
            [index]: {
              ...state.employmentHistory[index],
              employer,
            },
          },
        })),

      setEmploymentCity: (index, employmentCity) =>
        set((state) => ({
          employmentHistory: {
            ...state.employmentHistory,
            [index]: {
              ...state.employmentHistory[index],
              employmentCity,
            },
          },
        })),

      setEmploymentDescription: (index, employmentDescription) =>
        set((state) => ({
          employmentHistory: {
            ...state.employmentHistory,
            [index]: {
              ...state.employmentHistory[index],
              employmentDescription,
            },
          },
        })),

      setEmploymentEndDate: (index, employmentEndDate) =>
        set((state) => ({
          employmentHistory: {
            ...state.employmentHistory,
            [index]: {
              ...state.employmentHistory[index],
              employmentEndDate,
            },
          },
        })),

      setEmploymentStartDate: (index, employmentStartDate) =>
        set((state) => ({
          employmentHistory: {
            ...state.employmentHistory,
            [index]: {
              ...state.employmentHistory[index],
              employmentStartDate,
            },
          },
        })),
    }),
    { name: "employments", storage: createJSONStorage(() => localStorage) }
  )
);
