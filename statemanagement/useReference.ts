"use client";

import { create } from "zustand";

type ReferenceEntryTypes = {
  referenceFullName: string;
  referenceCompany: string;
  referencePhone: string;
  referenceEmail: string;
};

type ReferenceHistoryTypes = {
  referenceHistory: { [key: number]: ReferenceEntryTypes };
  setReferenceFullName: (index: number, referenceFullName: string) => void;
  setReferenceCompany: (index: number, referenceCompany: string) => void;
  setReferencePhone: (index: number, referencePhone: string) => void;
  setReferenceEmail: (index: number, referenceEmail: string) => void;
};

export const useReference = create<ReferenceHistoryTypes>((set) => ({
  referenceHistory: {},

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
}));
