// "use client";

// import { create } from "zustand";

// type EmploymentHistoryTypes = {
//   employmentJobTitle: string;
//   employer: string;
//   employmentCity: string;
//   employmentDescription: string;

//   setEmploymentJobTitle: (employmentJobTitle: string) => void;
//   setEmployer: (employer: string) => void;
//   setemploymentCity: (employmentCity: string) => void;
//   setEmploymentDescription: (employmentDescription: string) => void;
// };

// export const useEmploymentHistory = create<EmploymentHistoryTypes>((set) => ({
//   employmentJobTitle: "",
//   employer: "",
//   employmentCity: "",
//   employmentDescription: "",

//   setEmploymentJobTitle: (employmentJobTitle) => set({ employmentJobTitle }),
//   setEmployer: (employer) => set({ employer }),
//   setemploymentCity: (employmentCity) => set({ employmentCity }),
//   setEmploymentDescription: (employmentDescription) =>
//     set({ employmentDescription }),
// }));

"use client";

import { create } from "zustand";

type EmploymentEntry = {
  employmentJobTitle: string;
  employer: string;
  employmentCity: string;
  employmentDescription: string;
  employmentStartDate: Date | null | any;
  employmentEndDate: Date | null | any;
};

type EmploymentHistoryTypes = {
  employmentHistory: { [key: number]: EmploymentEntry };
  setEmploymentJobTitle: (index: number, employmentJobTitle: string) => void;
  setEmployer: (index: number, employer: string) => void;
  setEmploymentCity: (index: number, employmentCity: string) => void;
  setEmploymentDescription: (
    index: number,
    employmentDescription: string
  ) => void;
  setEmploymentStartDate: (
    index: number,
    employmentStartDate: Date | null | any
  ) => void;
  setEmploymentEndDate: (index: number, employmentEndDate: Date | null | any) => void;
};

export const useEmploymentHistory = create<EmploymentHistoryTypes>((set) => ({
  employmentHistory: {},

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
}));
