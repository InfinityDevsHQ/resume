"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type EducationEntryTypes = {
  educationSchool: string;
  educationDegree: string;
  educationStartDate: Date | null | any;
  educationEndDate: Date | null | any;
  educationDescription: string;
  educationCity: string;
};

type EducationHistoryTypes = {
  educationHistory: { [key: number]: EducationEntryTypes };
  setEducationSchool: (index: number, educationSchool: string) => void;
  setEducationDegree: (index: number, educationDegree: string) => void;
  setEducationStartDate: (
    index: number,
    educationStartDate: Date | null | any
  ) => void;
  setEducationEndDate: (
    index: number,
    educationEndDate: Date | null | any
  ) => void;
  setEducationDescription: (
    index: number,
    educationDescription: string
  ) => void;
  setEducationCity: (index: number, educationCity: string) => void;
};

export const useEducation = create<EducationHistoryTypes>()(
  persist(
    (set) => ({
      educationHistory: {},

      setEducationSchool: (index, educationSchool) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              ...state.educationHistory[index],
              educationSchool,
            },
          },
        })),

      setEducationDegree: (index, educationDegree) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              ...state.educationHistory[index],
              educationDegree,
            },
          },
        })),

      setEducationStartDate: (index, educationStartDate) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              ...state.educationHistory[index],
              educationStartDate,
            },
          },
        })),

      setEducationEndDate: (index, educationEndDate) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              ...state.educationHistory[index],
              educationEndDate,
            },
          },
        })),

      setEducationDescription: (index, educationDescription) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              ...state.educationHistory[index],
              educationDescription,
            },
          },
        })),

      setEducationCity: (index, educationCity) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              ...state.educationHistory[index],
              educationCity,
            },
          },
        })),
    }),
    {
      name: "internships",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
