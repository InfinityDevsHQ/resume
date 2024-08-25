"use client";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useProfessionalDetails } from "@/store/usePersonalDetails";
import { useProfessionalSummary } from "@/store/useProfessionalSummary";

const PreviewSection = () => {
  // Professional Summary

  const { professionalSummary } = useProfessionalSummary();

  // Professional Details

  const {
    selectedImage,
    address,
    city,
    countryName,
    dateOfBirth,
    drivingLicense,
    email,
    firstName,
    jobTitle,
    nationality,
    lastName,
    phone,
    placeOfBirth,
    postalCode,
  } = useProfessionalDetails();

  return (
    <>
      <div className="bg-misty w-1/2 h-full fixed top-0 bottom-0 right-0 flex justify-center items-center">
        <div className="aspect-[1/1.3] absolute w-[480px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-red-300 rounded-xl overflow-hidden flex">
          <div className="w-[30%] bg-[#1d473a] h-full py-8 px-4">
            {/* Personal Details */}
            <div>
              <div>
                {selectedImage && (
                  <Avatar className="mx-auto">
                    <AvatarImage src={selectedImage} />
                  </Avatar>
                )}
              </div>
              <div className="text-center mt-3">
                <h1 className="text-white font-normal text-base">
                  {firstName} {lastName}
                </h1>
              </div>
              <span className="block h-[1px] w-[22px] bg-white mx-auto mt-1"></span>
              <div className="text-center mt-1">
                <h1 className="text-white font-normal text-[9px] leading-[14px]">
                  {jobTitle}
                </h1>
              </div>
            </div>
            <div className="mt-3">
              {phone ||
              city ||
              countryName ||
              email ||
              address ||
              postalCode ||
              nationality ||
              dateOfBirth ||
              placeOfBirth ? (
                <h1 className="text-white text-[10px] leading-[14px] font-medium">
                  Personal Profile
                </h1>
              ) : (
                ""
              )}
              <h6 className="text-white/85 font-normal text-[8px] leading-[13px]">
                {address}
              </h6>
              <h6 className="text-white/85 font-normal text-[8px] leading-[13px]">
                {city} {postalCode}
              </h6>
              <h6 className="text-white/85 font-normal text-[8px] leading-[13px]">
                {countryName}
              </h6>
              <h6 className="text-white/85 font-normal text-[8px] leading-[13px] underline">
                <Link href="#">{phone}</Link>
              </h6>
              <h6 className="text-white/85 font-normal text-[8px] leading-[13px] underline">
                <Link href="#">{email}</Link>
              </h6>
            </div>
            {dateOfBirth && (
              <div>
                <h1 className="text-charcoal text-[8px] leading-[13px] font-normal uppercase">
                  date of birth
                </h1>
                <h6 className="text-white font-normal text-[8px] leading-[13px]">
                  {dateOfBirth}
                </h6>
              </div>
            )}
            {nationality && (
              <div>
                <h1 className="text-charcoal text-[8px] leading-[13px] font-normal uppercase">
                  nationality
                </h1>
                <h6 className="text-white font-normal text-[8px] leading-[13px]">
                  {nationality}
                </h6>
              </div>
            )}
          </div>
          <div className="w-[70%] bg-white h-full py-8 px-4">
            {/* Professional Summary */}
            {professionalSummary && (
              <div>
                <h1 className="text-black/85 text-[10px] leading-[14px] font-bold">
                  Professional Summary
                </h1>
                <h6 className="text-black/95 font-normal text-[8px] leading-[13px] mt-1">
                  {professionalSummary}
                </h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewSection;
