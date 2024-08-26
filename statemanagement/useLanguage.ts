"use client";

import { create } from "zustand";

type LanguageEntryTypes = {
  languageTitle: string | any;
  languageLevel: string | any;
};

type LanguageHistoryTypes = {
  languageHistory: { [key: number]: LanguageEntryTypes };
  setLanguageTitle: (index: number, languageTitle: string) => void;
  setLanguageLevel: (index: number, languageLevel: string) => void;
};

export const useLanguage = create<LanguageHistoryTypes>((set) => ({
  languageHistory: {},

  setLanguageTitle: (index, languageTitle) =>
    set((state) => ({
      languageHistory: {
        ...state.languageHistory,
        [index]: {
          ...state.languageHistory[index],
          languageTitle,
        },
      },
    })),

  setLanguageLevel: (index, languageLevel) =>
    set((state) => ({
      languageHistory: {
        ...state.languageHistory,
        [index]: {
          ...state.languageHistory[index],
          languageLevel,
        },
      },
    })),
}));
