"use client";
import { create } from "zustand";

type ProfessionalDetails = {
  selectedImage: string | null;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryName: string;
  city: string;
  address: string;
  nationality: string;
  placeOfBirth: string;
  dateOfBirth: string;
  postalCode: string;
  drivingLicense: string;

  setSelectedImage: (selectedImage: string | null) => void;
  setJobTitle: (jobTitle: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setCountryName: (countryName: string) => void;
  setCity: (city: string) => void;
  setAddress: (address: string) => void;
  setNationality: (nationality: string) => void;
  setPlaceOfBirth: (placeOfBirth: string) => void;
  setDateOfBirth: (dateOfBirth: string) => void;
  setPostalCode: (postalCode: string) => void;
  setDrivingLicense: (drivingLicense: string) => void;
};

export const useProfessionalDetails = create<ProfessionalDetails>((set) => ({
  selectedImage: "",
  jobTitle: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryName: "",
  city: "",
  address: "",
  nationality: "",
  placeOfBirth: "",
  dateOfBirth: "",
  postalCode: "",
  drivingLicense: "",
  setSelectedImage: (selectedImage: any) => set({ selectedImage }),
  setJobTitle: (jobTitle) => set({ jobTitle }),
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setEmail: (email) => set({ email }),
  setPhone: (phone) => set({ phone }),
  setCountryName: (countryName) => set({ countryName }),
  setCity: (city) => set({ city }),
  setAddress: (address) => set({ address }),
  setNationality: (nationality) => set({ nationality }),
  setPlaceOfBirth: (placeOfBirth) => set({ placeOfBirth }),
  setDateOfBirth: (dateOfBirth) => set({ dateOfBirth }),
  setPostalCode: (postalCode) => set({ postalCode }),
  setDrivingLicense: (drivingLicense) => set({ drivingLicense }),
}));
