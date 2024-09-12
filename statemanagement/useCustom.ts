"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CustomEntryTypes = {
  customTitle: string;
  customCity: string;
  customStartDate: Date | null | any;
  customEndDate: Date | null | any;
  customDescription: string;
};

type CustomHistoryTypes = {
  customHistory: { [key: number]: CustomEntryTypes };
  customSectionTitle: string;
  setCustomSectionTitle: (title: string) => void;
  sortableCustomSectionList: number[];
  setSortableCustomSectionList: (list: number[]) => void;
  setCustomTitle: (index: number, customTitle: string) => void;
  setCustomCity: (index: number, customCity: string) => void;
  setCustomStartDate: (
    index: number,
    customStartDate: Date | null | any
  ) => void;
  setCustomEndDate: (index: number, customEndDate: Date | null | any) => void;
  setCustomDescription: (index: number, customDescription: string) => void;
};

export const useCustom = create<CustomHistoryTypes>()(
  persist(
    (set) => ({
      customHistory: {},
      customSectionTitle: "custom section", // default value
      sortableCustomSectionList: [], // default empty list

      setCustomSectionTitle: (title) =>
        set(() => ({
          customSectionTitle: title,
        })),

      setSortableCustomSectionList: (list) =>
        set(() => ({
          sortableCustomSectionList: list,
        })),

      setCustomTitle: (index, customTitle) =>
        set((state) => ({
          customHistory: {
            ...state.customHistory,
            [index]: {
              ...state.customHistory[index],
              customTitle,
            },
          },
        })),

      setCustomCity: (index, customCity) =>
        set((state) => ({
          customHistory: {
            ...state.customHistory,
            [index]: {
              ...state.customHistory[index],
              customCity,
            },
          },
        })),

      setCustomStartDate: (index, customStartDate) =>
        set((state) => ({
          customHistory: {
            ...state.customHistory,
            [index]: {
              ...state.customHistory[index],
              customStartDate,
            },
          },
        })),

      setCustomEndDate: (index, customEndDate) =>
        set((state) => ({
          customHistory: {
            ...state.customHistory,
            [index]: {
              ...state.customHistory[index],
              customEndDate,
            },
          },
        })),

      setCustomDescription: (index, customDescription) =>
        set((state) => ({
          customHistory: {
            ...state.customHistory,
            [index]: {
              ...state.customHistory[index],
              customDescription,
            },
          },
        })),
    }),
    { name: "custom-section", storage: createJSONStorage(() => localStorage) }
  )
);
