// import { create } from "zustand";

// type SkillsEntryTypes = {
//   skillsTitle: string | any;
//   skillsLevel: string | any;
// };

// type SkillsHistoryTypes = {
//   skillsHistory: { [key: number]: SkillsEntryTypes };
//   setSkillsTitle: (index: number, skillsTitle: string) => void;
//   setSkillsLevel: (index: number, skillsLevel: string) => void;
// };

// export const useSkills = create<SkillsHistoryTypes>((set) => ({
//   skillsHistory: {},

//   setSkillsTitle: (index, skillsTitle) =>
//     set((state) => ({
//       skillsHistory: {
//         ...state.skillsHistory,
//         [index]: {
//           ...state.skillsHistory[index],
//           skillsTitle,
//         },
//       },
//     })),

//   setSkillsLevel: (index, skillsLevel) =>
//     set((state) => ({
//       skillsHistory: {
//         ...state.skillsHistory,
//         [index]: {
//           ...state.skillsHistory[index],
//           skillsLevel,
//         },
//       },
//     })),
// }));

import { create } from "zustand";

type SkillsEntryTypes = {
  skillsTitle: string | any;
  skillsLevel: string | any;
};

type SkillsHistoryTypes = {
  skillsHistory: { [key: number]: SkillsEntryTypes };
  addSkill: (label: string) => void;
  setSkillsTitle: (index: number, skillsTitle: string) => void;
  setSkillsLevel: (index: number, skillsLevel: string) => void;
};

export const useSkills = create<SkillsHistoryTypes>((set) => ({
  skillsHistory: {},

  addSkill: (label) =>
    set((state) => {
      const nextIndex = Object.keys(state.skillsHistory).length;
      return {
        skillsHistory: {
          ...state.skillsHistory,
          [nextIndex]: {
            skillsTitle: label,
            skillsLevel: "60", // Default skill level
          },
        },
      };
    }),

  setSkillsTitle: (index, skillsTitle) =>
    set((state) => ({
      skillsHistory: {
        ...state.skillsHistory,
        [index]: {
          ...state.skillsHistory[index],
          skillsTitle,
        },
      },
    })),

  setSkillsLevel: (index, skillsLevel) =>
    set((state) => ({
      skillsHistory: {
        ...state.skillsHistory,
        [index]: {
          ...state.skillsHistory[index],
          skillsLevel,
        },
      },
    })),
}));
