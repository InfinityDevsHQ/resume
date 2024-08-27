"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useProfessionalDetails } from "@/statemanagement/usePersonalDetails";
import { useProfessionalSummary } from "@/statemanagement/useProfessionalSummary";
import { useEmploymentHistory } from "@/statemanagement/useEmploymentHistory";
import { Button } from "@/components/ui/button";
import { useEducation } from "@/statemanagement/useEducation";
import { useWebNSocialLinks } from "@/statemanagement/useWebNSocialLink";
import { useCourse } from "@/statemanagement/useCourse";
import { useInternship } from "@/statemanagement/useInternship";
import { useReference } from "@/statemanagement/useReference";
import { useHobbies } from "@/statemanagement/useHobbies";
import { useActivity } from "@/statemanagement/useActivities";
import { useCustom } from "@/statemanagement/useCustom";
import { useSkills } from "@/statemanagement/useSkills";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/statemanagement/useLanguage";
import html2canvas from "html2canvas";

interface PreviewSectionProps {
  sortableEmploymentList: any;
  sortableEducationList: any;
  sortableWebNSocialLinksList: any;
  sortableCourseList: any;
  sortableInternshipList: any;
  sortableReferenceList: any;
  toggledHobbies: any;
  sortableActivitiesList: any;
  sortableCustomSectionList: any;
  sortableSkillsList: any;
  sortableLanguageList: any;
  skillsToggledProgress: any;
  languageToggledProgress: any;
  pdfName: any;
  setPdfName: any;
  targetRef: any;
  className: any;
}

const Forest: React.FC<PreviewSectionProps> = ({
  sortableEmploymentList,
  sortableEducationList,
  sortableWebNSocialLinksList,
  sortableCourseList,
  sortableInternshipList,
  sortableReferenceList,
  toggledHobbies,
  sortableActivitiesList,
  sortableCustomSectionList,
  sortableSkillsList,
  sortableLanguageList,
  skillsToggledProgress,
  languageToggledProgress,
  pdfName,
  setPdfName,
  targetRef,
  className,
}) => {
  // Language

  const { languageHistory } = useLanguage();

  // Internship History

  const { activityHistory } = useActivity();

  // Reference

  const { referenceHistory } = useReference();

  // Skills

  const { skillsHistory } = useSkills();

  // Hobbies

  const { hobbiesDescription } = useHobbies();

  // Custom Section

  const { customHistory } = useCustom();

  // Internship History

  const { internshipHistory } = useInternship();

  // Employment History

  const { employmentHistory } = useEmploymentHistory();

  // Education History

  const { educationHistory } = useEducation();

  // Course History

  const { courseHistory } = useCourse();

  // Professional Summary

  const { professionalSummary } = useProfessionalSummary();

  // Web and Social Links

  const { webNSocialLinksHistory } = useWebNSocialLinks();

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
      <div
        ref={targetRef}
        className={`${className} break-words rounded-xl overflow-hidden flex`}
      >
        <div className="break-words w-[30%] bg-[#1d473a] h-full py-8 px-4">
          {/* Personal Details */}
          <div>
            <div>
              {selectedImage && (
                <Avatar className="break-words mx-auto h-14 w-14">
                  <AvatarImage src={selectedImage} />
                </Avatar>
              )}
            </div>
            <div className="break-words text-center mt-3">
              <h1 className="break-words text-white font-normal text-base">
                {firstName} {lastName}
              </h1>
            </div>
            <span className="break-words block h-[1px] w-[22px] bg-white mx-auto mt-1"></span>
            <div className="break-words text-center mt-1">
              <h1 className="break-words text-white font-normal text-[9px] leading-[14px]">
                {jobTitle}
              </h1>
            </div>
          </div>
          <div className="break-words mt-3">
            {phone ||
            city ||
            countryName ||
            email ||
            address ||
            postalCode ||
            nationality ||
            dateOfBirth ||
            placeOfBirth ? (
              <h1 className="break-words text-white text-[10px] leading-[14px] font-medium">
                Personal Profile
              </h1>
            ) : (
              ""
            )}
            <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
              {address}
            </h6>
            <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
              {city} {postalCode}
            </h6>
            <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
              {countryName}
            </h6>
            <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px] underline">
              <Link href="#">{phone}</Link>
            </h6>
            <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px] underline">
              <Link href="#">{email}</Link>
            </h6>
          </div>
          {dateOfBirth && (
            <div>
              <h1 className="break-words text-charcoal text-[8px] leading-[13px] font-normal uppercase">
                date of birth
              </h1>
              <h6 className="break-words text-white font-normal text-[8px] leading-[13px]">
                {dateOfBirth}
              </h6>
            </div>
          )}
          {nationality && (
            <div>
              <h1 className="break-words text-charcoal text-[8px] leading-[13px] font-normal uppercase">
                nationality
              </h1>
              <h6 className="break-words text-white font-normal text-[8px] leading-[13px]">
                {nationality}
              </h6>
            </div>
          )}
          {/*  Web and Social Links */}
          {sortableWebNSocialLinksList.length > 0 && (
            <>
              <h1 className="break-words text-white text-[10px] leading-[14px] font-medium">
                Links
              </h1>
              {sortableWebNSocialLinksList.map((item: any, index: any) => (
                <div key={index}>
                  <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
                    <Link
                      href={
                        webNSocialLinksHistory[index]?.webNSocialLink
                          ? webNSocialLinksHistory[index].webNSocialLink
                          : "#"
                      }
                    >
                      {webNSocialLinksHistory[index]?.webNSocialLinkLabel}
                    </Link>
                  </h6>
                </div>
              ))}
            </>
          )}
          {/*  Skills */}
          {sortableSkillsList.length > 0 && (
            <>
              <h1 className="break-words text-white text-[10px] leading-[14px] font-medium">
                Skills
              </h1>
              {sortableSkillsList.map((item: any, index: any) => (
                <div key={index} className="break-words space-y-1 mt-1">
                  <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
                    {skillsHistory[index]?.skillsTitle}
                  </h6>
                  {skillsHistory[index]?.skillsTitle && (
                    <Progress
                      value={skillsHistory[index]?.skillsLevel || 60}
                      className="break-words w-[100%] h-1 bg-[#808080]"
                    />
                  )}
                </div>
              ))}
            </>
          )}
          {/*  Hobbies */}
          {toggledHobbies && (
            <>
              <h1 className="break-words text-white text-[10px] leading-[14px] font-medium">
                Hobbies
              </h1>
              <div>
                <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
                  {hobbiesDescription}
                </h6>
              </div>
            </>
          )}
          {/*  Languages */}
          {sortableLanguageList.length > 0 && (
            <>
              <h1 className="break-words text-white text-[10px] leading-[14px] font-medium">
                Languages
              </h1>
              {sortableLanguageList.map((item: any, index: any) => (
                <div key={index} className="break-words space-y-1 mt-1">
                  <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
                    {languageHistory[index]?.languageTitle}
                  </h6>
                  {languageHistory[index]?.languageTitle && (
                    <Progress
                      value={languageHistory[index]?.languageLevel || 66}
                      className="break-words w-[100%] h-1 bg-[#808080]"
                    />
                  )}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="break-words w-[70%] bg-white h-full py-8 px-4 space-y-3">
          {/* Professional Summary */}
          {professionalSummary && (
            <div>
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                Professional Summary
              </h1>
              <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                {professionalSummary}
              </h6>
            </div>
          )}

          {/* Employment History */}
          {sortableEmploymentList.length > 0 && (
            <div className="break-words space-y-2">
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                Employment History
              </h1>
              {sortableEmploymentList.map((item: any, index: any) => (
                <div key={index}>
                  <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                    {employmentHistory[index]?.employmentJobTitle}
                    {employmentHistory[index]?.employer && (
                      <>, {employmentHistory[index]?.employer}</>
                    )}
                    {employmentHistory[index]?.employmentCity && (
                      <>, {employmentHistory[index]?.employmentCity}</>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
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
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {employmentHistory[index]?.employmentDescription}
                  </h6>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {sortableEducationList.length > 0 && (
            <div className="break-words space-y-2">
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                Education
              </h1>
              {sortableEducationList.map((item: any, index: any) => (
                <div key={index}>
                  <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                    {educationHistory[index]?.educationSchool}
                    {educationHistory[index]?.educationDegree && (
                      <>, {educationHistory[index]?.educationDegree}</>
                    )}
                    {educationHistory[index]?.educationCity && (
                      <>, {educationHistory[index]?.educationCity}</>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
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
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {educationHistory[index]?.educationDescription}
                  </h6>
                </div>
              ))}
            </div>
          )}

          {/* Internship */}
          {sortableInternshipList.length > 0 && (
            <div className="break-words space-y-2">
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                Internship
              </h1>
              {sortableInternshipList.map((item: any, index: any) => (
                <div key={index}>
                  <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                    {internshipHistory[index]?.internshipJobTitle}
                    {internshipHistory[index]?.internshipEmployer && (
                      <>, {internshipHistory[index]?.internshipEmployer}</>
                    )}
                    {internshipHistory[index]?.internshipCity && (
                      <>, {internshipHistory[index]?.internshipCity}</>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {internshipHistory[
                      index
                    ]?.internshipStartDate?.toLocaleDateString()}{" "}
                    {internshipHistory[index]?.internshipEndDate && (
                      <>
                        -{" "}
                        {internshipHistory[
                          index
                        ]?.internshipEndDate?.toLocaleDateString()}
                      </>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {internshipHistory[index]?.internshipDescription}
                  </h6>
                </div>
              ))}
            </div>
          )}

          {/* Course */}
          {sortableCourseList.length > 0 && (
            <div className="break-words space-y-2">
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                Course
              </h1>
              {sortableCourseList.map((item: any, index: any) => (
                <div key={index}>
                  <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                    {courseHistory[index]?.course}
                    {courseHistory[index]?.courseInstitution && (
                      <>, {courseHistory[index]?.courseInstitution}</>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {courseHistory[
                      index
                    ]?.courseStartDate?.toLocaleDateString()}{" "}
                    {courseHistory[index]?.courseEndDate && (
                      <>
                        -{" "}
                        {courseHistory[
                          index
                        ]?.courseEndDate?.toLocaleDateString()}
                      </>
                    )}
                  </h6>
                </div>
              ))}
            </div>
          )}

          {/* Reference */}
          {sortableReferenceList.length > 0 && (
            <div className="break-words space-y-2">
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                Reference
              </h1>
              {sortableReferenceList.map((item: any, index: any) => (
                <div key={index}>
                  <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                    {referenceHistory[index]?.referenceFullName}{" "}
                    {referenceHistory[index]?.referenceCompany && (
                      <>from {referenceHistory[index]?.referenceCompany}</>
                    )}
                  </h6>

                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {referenceHistory[index]?.referenceEmail && (
                      <>{referenceHistory[index]?.referenceEmail} |</>
                    )}{" "}
                    {referenceHistory[index]?.referencePhone}
                  </h6>
                </div>
              ))}
            </div>
          )}

          {/* Extra Curricular Activities */}
          {sortableActivitiesList.length > 0 && (
            <div className="break-words space-y-2">
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                Extra Curricular Activities
              </h1>
              {sortableActivitiesList.map((item: any, index: any) => (
                <div key={index}>
                  <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                    {activityHistory[index]?.activityFunctionTitle}
                    {activityHistory[index]?.activityEmployer && (
                      <>, {activityHistory[index]?.activityEmployer}</>
                    )}
                    {activityHistory[index]?.activityCity && (
                      <>, {activityHistory[index]?.activityCity}</>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {activityHistory[
                      index
                    ]?.activityStartDate?.toLocaleDateString()}{" "}
                    {activityHistory[index]?.activityEndDate && (
                      <>
                        -{" "}
                        {activityHistory[
                          index
                        ]?.activityEndDate?.toLocaleDateString()}
                      </>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {activityHistory[index]?.activityDescription}
                  </h6>
                </div>
              ))}
            </div>
          )}

          {/* Custom Section */}
          {sortableCustomSectionList.length > 0 && (
            <div className="break-words space-y-2">
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1">
                Custom Section
              </h1>
              {sortableCustomSectionList.map((item: any, index: any) => (
                <div key={index}>
                  <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                    {customHistory[index]?.customTitle}
                    {customHistory[index]?.customCity && (
                      <>, {customHistory[index]?.customCity}</>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {customHistory[
                      index
                    ]?.customStartDate?.toLocaleDateString()}{" "}
                    {customHistory[index]?.customEndDate && (
                      <>
                        -{" "}
                        {customHistory[
                          index
                        ]?.customEndDate?.toLocaleDateString()}
                      </>
                    )}
                  </h6>
                  <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                    {customHistory[index]?.customDescription}
                  </h6>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Forest;
