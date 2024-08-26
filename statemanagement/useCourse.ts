"use client";

import { create } from "zustand";

type CourseEntryTypes = {
  course: string;
  courseInstitution: string;
  courseStartDate: Date | null | any;
  courseEndDate: Date | null | any;
};

type CourseHistoryTypes = {
  courseHistory: { [key: number]: CourseEntryTypes };
  setCourse: (index: number, course: string) => void;
  setCourseInstitution: (index: number, courseInstitution: string) => void;
  setCourseStartDate: (index: number, courseStartDate: Date | null | any) => void;
  setCourseEndDate: (index: number, courseEndDate: Date | null | any) => void;
};

export const useCourse = create<CourseHistoryTypes>((set) => ({
  courseHistory: {},

  setCourse: (index, course) =>
    set((state) => ({
      courseHistory: {
        ...state.courseHistory,
        [index]: {
          ...state.courseHistory[index],
          course,
        },
      },
    })),

  setCourseInstitution: (index, courseInstitution) =>
    set((state) => ({
      courseHistory: {
        ...state.courseHistory,
        [index]: {
          ...state.courseHistory[index],
          courseInstitution,
        },
      },
    })),

  setCourseStartDate: (index, courseStartDate) =>
    set((state) => ({
      courseHistory: {
        ...state.courseHistory,
        [index]: {
          ...state.courseHistory[index],
          courseStartDate,
        },
      },
    })),

  setCourseEndDate: (index, courseEndDate) =>
    set((state) => ({
      courseHistory: {
        ...state.courseHistory,
        [index]: {
          ...state.courseHistory[index],
          courseEndDate,
        },
      },
    })),
}));
