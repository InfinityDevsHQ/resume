import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
  activitiesTitle: string;
  sortableActivitiesList: number[];
  toggledActivities: boolean;
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
  setActivitiesTitle: (activitiesTitle: string) => void;
  setSortableActivitiesList: (sortableActivitiesList: number[]) => void;
  setToggledActivities: (toggledActivities: boolean) => void;
  updateToggledActivities: () => void;
};

export const useActivity = create<ActivityHistoryTypes>()(
  persist(
    (set, get) => ({
      activityHistory: {},
      activitiesTitle: "extra curricular activities",
      sortableActivitiesList: [],
      toggledActivities: false,

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

      setActivitiesTitle: (activitiesTitle) => set({ activitiesTitle }),

      setSortableActivitiesList: (sortableActivitiesList) =>
        set({ sortableActivitiesList }),

      setToggledActivities: (toggledActivities) => set({ toggledActivities }),

      updateToggledActivities: () => {
        const { activityHistory } = get();
        const hasEntries = Object.keys(activityHistory).length > 0;
        set({ toggledActivities: hasEntries });
      },
    }),
    {
      name: "extra-curricular-activities",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
