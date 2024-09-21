"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type EducationEntryTypes = {
  educationSchool: string;
  educationDegree: string;
  educationStartDate: Date | null;
  educationEndDate: Date | null;
  educationDescription: string;
  educationCity: string;
};

type EducationHistoryTypes = {
  educationHistory: { [key: number]: EducationEntryTypes };
  sortableEducationList: number[];
  setSortableEducationList: (sortableList: number[]) => void;
  setEducationSchool: (index: number, educationSchool: string) => void;
  setEducationDegree: (index: number, educationDegree: string) => void;
  setEducationStartDate: (
    index: number,
    educationStartDate: Date | null
  ) => void;
  setEducationEndDate: (index: number, educationEndDate: Date | null) => void;
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
      sortableEducationList: [],

      setSortableEducationList: (sortableList) =>
        set(() => ({
          sortableEducationList: sortableList,
        })),

      setEducationSchool: (index, educationSchool) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              educationDegree:
                state.educationHistory[index]?.educationDegree || "",
              educationStartDate:
                state.educationHistory[index]?.educationStartDate || null,
              educationEndDate:
                state.educationHistory[index]?.educationEndDate || null,
              educationDescription:
                state.educationHistory[index]?.educationDescription || "",
              educationCity: state.educationHistory[index]?.educationCity || "",
              educationSchool,
            },
          },
        })),

      setEducationDegree: (index, educationDegree) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              educationSchool:
                state.educationHistory[index]?.educationSchool || "",
              educationStartDate:
                state.educationHistory[index]?.educationStartDate || null,
              educationEndDate:
                state.educationHistory[index]?.educationEndDate || null,
              educationDescription:
                state.educationHistory[index]?.educationDescription || "",
              educationCity: state.educationHistory[index]?.educationCity || "",
              educationDegree,
            },
          },
        })),

      setEducationStartDate: (index, educationStartDate) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              educationSchool:
                state.educationHistory[index]?.educationSchool || "",
              educationDegree:
                state.educationHistory[index]?.educationDegree || "",
              educationEndDate:
                state.educationHistory[index]?.educationEndDate || null,
              educationDescription:
                state.educationHistory[index]?.educationDescription || "",
              educationCity: state.educationHistory[index]?.educationCity || "",
              educationStartDate,
            },
          },
        })),

      setEducationEndDate: (index, educationEndDate) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              educationSchool:
                state.educationHistory[index]?.educationSchool || "",
              educationDegree:
                state.educationHistory[index]?.educationDegree || "",
              educationStartDate:
                state.educationHistory[index]?.educationStartDate || null,
              educationDescription:
                state.educationHistory[index]?.educationDescription || "",
              educationCity: state.educationHistory[index]?.educationCity || "",
              educationEndDate,
            },
          },
        })),

      setEducationDescription: (index, educationDescription) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              educationSchool:
                state.educationHistory[index]?.educationSchool || "",
              educationDegree:
                state.educationHistory[index]?.educationDegree || "",
              educationStartDate:
                state.educationHistory[index]?.educationStartDate || null,
              educationEndDate:
                state.educationHistory[index]?.educationEndDate || null,
              educationCity: state.educationHistory[index]?.educationCity || "",
              educationDescription,
            },
          },
        })),

      setEducationCity: (index, educationCity) =>
        set((state) => ({
          educationHistory: {
            ...state.educationHistory,
            [index]: {
              educationSchool:
                state.educationHistory[index]?.educationSchool || "",
              educationDegree:
                state.educationHistory[index]?.educationDegree || "",
              educationStartDate:
                state.educationHistory[index]?.educationStartDate || null,
              educationEndDate:
                state.educationHistory[index]?.educationEndDate || null,
              educationDescription:
                state.educationHistory[index]?.educationDescription || "",
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
