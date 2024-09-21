"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type WebNSocialLinkEntryTypes = {
  webNSocialLinkLabel: string | any;
  webNSocialLink: string | any;
};

type WebNSocialLinkHistiryTypes = {
  webNSocialLinksHistory: { [key: number]: WebNSocialLinkEntryTypes };
  setWebNSocialLinkLabel: (index: number, label: string | any) => void;
  setWebNSocialLink: (index: number, link: string | any) => void;
};

export const useWebNSocialLinks = create<WebNSocialLinkHistiryTypes>()(
  persist(
    (set) => ({
      webNSocialLinksHistory: {},

      setWebNSocialLinkLabel: (index, webNSocialLinkLabel) =>
        set((state) => ({
          webNSocialLinksHistory: {
            ...state.webNSocialLinksHistory,
            [index]: {
              ...state.webNSocialLinksHistory[index],
              webNSocialLinkLabel,
            },
          },
        })),

      setWebNSocialLink: (index, webNSocialLink) =>
        set((state) => ({
          webNSocialLinksHistory: {
            ...state.webNSocialLinksHistory,
            [index]: {
              ...state.webNSocialLinksHistory[index],
              webNSocialLink,
            },
          },
        })),
    }),
    { name: "social-links", storage: createJSONStorage(() => localStorage) }
  )
);
