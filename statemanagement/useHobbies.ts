"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type HobbiesTypes = {
  hobbiesDescription: string;
  setHobbiesDescription: (professionalSummary: string) => void;
};

export const useHobbies = create<HobbiesTypes>()(
  persist(
    (set) => ({
      hobbiesDescription: "",
      setHobbiesDescription: (hobbiesDescription) =>
        set({ hobbiesDescription }),
    }),
    {
      name: "hobbies",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
