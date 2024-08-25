"use client";

import { create } from "zustand";

type EmploymentHistoryTypes = {
  employmentJobTitle: string;
  employer: string;
  //   employmentStartDate: Date | null;
  //   employmentEndDate: Date | null;
  employmentCity: string;
  employmentDescription: string;

  setEmploymentJobTitle: (employmentJobTitle: string) => void;
  setEmployer: (employer: string) => void;
  //   setEmploymentStartDate: (startDate: Date | null) => void;
  //   setEmploymentEndDate: (endDate: Date | null) => void;
  setemploymentCity: (employmentCity: string) => void;
  setEmploymentDescription: (employmentDescription: string) => void;
};

export const useEmploymentHistory = create<EmploymentHistoryTypes>((set) => ({
  employmentJobTitle: "",
  employer: "",
  //   employmentStartDate: null,
  //   employmentEndDate: null,
  employmentCity: "",
  employmentDescription: "",

  setEmploymentJobTitle: (employmentJobTitle) => set({ employmentJobTitle }),
  setEmployer: (employer) => set({ employer }),
  //   setEmploymentStartDate: (employmentStartDate) => set({ employmentStartDate }),
  //   setEmploymentEndDate: (employmentEndDate) => set({ employmentEndDate }),
  setemploymentCity: (employmentCity) => set({ employmentCity }),
  setEmploymentDescription: (employmentDescription) =>
    set({ employmentDescription }),
}));
