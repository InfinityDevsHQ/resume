"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useProfessionalDetails } from "@/statemanagement/usePersonalDetails";
import { useProfessionalSummary } from "@/statemanagement/useProfessionalSummary";
import { useEmploymentHistory } from "@/statemanagement/useEmploymentHistory";
import { Button } from "@/components/ui/button";
import { useEducation } from "@/statemanagement/useEducation";

interface PreviewSectionProps {
  sortableEmploymentList: any;
  sortableEducationList: any;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({
  sortableEmploymentList,
  sortableEducationList,
}) => {
  // Employment History

  const { employmentHistory } = useEmploymentHistory();

  // Education History

  const { educationHistory } = useEducation();

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
      <div className="bg-misty w-1/2 h-full fixed top-0 bottom-0 right-0">
        <div className="absolute left-[50%] translate-x-[-50%] text-right w-[480px] pt-5">
          <Button
            type="button"
            className="text-white bg-aquamarine-100 hover:bg-aquamarine-200 px-8 font-normal text-base"
          >
            Download PDF
          </Button>
        </div>
        <div className="aspect-[1/1.2] absolute w-[480px] top-[65%] left-[50%] translate-x-[-50%] translate-y-[-65%] rounded-xl overflow-hidden flex">
          <div className="w-[30%] bg-[#1d473a] h-full py-8 px-4">
            {/* Personal Details */}
            <div>
              <div>
                {selectedImage && (
                  <Avatar className="mx-auto h-14 w-14">
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
          <div className="w-[70%] bg-white h-full py-8 px-4 space-y-3">
            {/* Professional Summary */}
            {professionalSummary && (
              <div>
                <h1 className="text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                  Professional Summary
                </h1>
                <h6 className="text-black/95 font-normal text-[8px] leading-[13px]">
                  {professionalSummary}
                </h6>
              </div>
            )}

            {/* Employment History */}
            {sortableEmploymentList.length > 0 && (
              <div className="space-y-2">
                <h1 className="text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                  Employment History
                </h1>
                {sortableEmploymentList.map((item: any, index: any) => (
                  <div>
                    <h6 className="text-black/85 text-[9px] leading-[14px] font-semibold">
                      {employmentHistory[index]?.employmentJobTitle}
                      {employmentHistory[index]?.employer && (
                        <>, {employmentHistory[index]?.employer}</>
                      )}
                      {employmentHistory[index]?.employmentCity && (
                        <>, {employmentHistory[index]?.employmentCity}</>
                      )}
                    </h6>
                    <h6 className="text-black/95 font-normal text-[8px] leading-[13px]">
                      {employmentHistory[
                        index
                      ]?.employmentStartDate?.toLocaleDateString()}{" "}
                      {employmentHistory[index]?.employmentEndDate && (
                        <>
                          -{" "}
                          {employmentHistory[
                            index
                          ]?.employmentEndDate?.toLocaleDateString()}
                        </>
                      )}
                    </h6>
                    <h6 className="text-black/95 font-normal text-[8px] leading-[13px]">
                      {employmentHistory[index]?.employmentDescription}
                    </h6>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {sortableEducationList.length > 0 && (
              <div className="space-y-2">
                <h1 className="text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                  Education
                </h1>
                {sortableEducationList.map((item: any, index: any) => (
                  <div>
                    <h6 className="text-black/85 text-[9px] leading-[14px] font-semibold">
                      {educationHistory[index]?.educationSchool}
                      {educationHistory[index]?.educationDegree && (
                        <>, {educationHistory[index]?.educationDegree}</>
                      )}
                      {educationHistory[index]?.educationCity && (
                        <>, {educationHistory[index]?.educationCity}</>
                      )}
                    </h6>
                    <h6 className="text-black/95 font-normal text-[8px] leading-[13px]">
                      {educationHistory[
                        index
                      ]?.educationStartDate?.toLocaleDateString()}{" "}
                      {educationHistory[index]?.educationEndDate && (
                        <>
                          -{" "}
                          {educationHistory[
                            index
                          ]?.educationEndDate?.toLocaleDateString()}
                        </>
                      )}
                    </h6>
                    <h6 className="text-black/95 font-normal text-[8px] leading-[13px]">
                      {educationHistory[index]?.educationDescription}
                    </h6>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewSection;
