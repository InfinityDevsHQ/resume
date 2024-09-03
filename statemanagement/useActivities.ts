"use client";

import { create } from "zustand";

type ActivityEntryTypes = {
  activityFunctionTitle: string;
  activityEmployer: string;
  activityStartDate: Date | null | any;
  activityEndDate: Date | null | any;
  activityDescription: string;
  activityCity: string;
};

type ActivityHistoryTypes = {
  activityHistory: { [key: number]: ActivityEntryTypes };
  setActivityFunctionTitle: (
    index: number,
    activityFunctionTitle: string
  ) => void;
  setActivityEmployer: (index: number, activityEmployer: string) => void;
  setActivityStartDate: (
    index: number,
    activityStartDate: Date | null | any
  ) => void;
  setActivityEndDate: (
    index: number,
    activityEndDate: Date | null | any
  ) => void;
  setActivityDescription: (index: number, activityDescription: string) => void;
  setActivityCity: (index: number, activityCity: string) => void;
};

export const useActivity = create<ActivityHistoryTypes>((set) => ({
  activityHistory: {},

  setActivityFunctionTitle: (index, activityFunctionTitle) =>
    set((state) => ({
      activityHistory: {
        ...state.activityHistory,
        [index]: {
          ...state.activityHistory[index],
          activityFunctionTitle,
        },
      },
    })),

  setActivityEmployer: (index, activityEmployer) =>
    set((state) => ({
      activityHistory: {
        ...state.activityHistory,
        [index]: {
          ...state.activityHistory[index],
          activityEmployer,
        },
      },
    })),

  setActivityStartDate: (index, activityStartDate) =>
    set((state) => ({
      activityHistory: {
        ...state.activityHistory,
        [index]: {
          ...state.activityHistory[index],
          activityStartDate,
        },
      },
    })),

  setActivityEndDate: (index, activityEndDate) =>
    set((state) => ({
      activityHistory: {
        ...state.activityHistory,
        [index]: {
          ...state.activityHistory[index],
          activityEndDate,
        },
      },
    })),

  setActivityDescription: (index, activityDescription) =>
    set((state) => ({
      activityHistory: {
        ...state.activityHistory,
        [index]: {
          ...state.activityHistory[index],
          activityDescription,
        },
      },
    })),

  setActivityCity: (index, activityCity) =>
    set((state) => ({
      activityHistory: {
        ...state.activityHistory,
        [index]: {
          ...state.activityHistory[index],
          activityCity,
        },
      },
    })),
}));
