"use client";

import { create } from "zustand";

type HobbiesTypes = {
  hobbiesDescription: string;
  setHobbiesDescription: (professionalSummary: string) => void;
};

export const useHobbies = create<HobbiesTypes>((set) => ({
  hobbiesDescription: "",
  setHobbiesDescription: (hobbiesDescription) => set({ hobbiesDescription }),
}));
