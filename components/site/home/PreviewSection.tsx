"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Margin, usePDF, Resolution } from "react-to-pdf";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useProfessionalDetails } from "@/statemanagement/usePersonalDetails";
import { useProfessionalSummary } from "@/statemanagement/useProfessionalSummary";
import { useEmploymentHistory } from "@/statemanagement/useEmploymentHistory";
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
import { Grid2X2, ScanEye, X } from "lucide-react";

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
  customSectionTitle: any;
  personalDetailsTitle: any;
  professionalSummaryTitle: any;
  educationTitle: any;
  webNSocialLinkTitle: any;
  languagesTitle: any;
  coursesTitle: any;
  employmentHistoryTitle: any;
  internshipsTitle: any;
  referencesTitle: any;
  skillTitle: any;
  hobbiesTitle: any;
  activitiesTitle: any;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({
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
  pdfName,
  customSectionTitle,
  personalDetailsTitle,
  professionalSummaryTitle,
  educationTitle,
  webNSocialLinkTitle,
  languagesTitle,
  coursesTitle,
  employmentHistoryTitle,
  internshipsTitle,
  referencesTitle,
  skillTitle,
  hobbiesTitle,
  activitiesTitle,
}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [respToggled, setRespToggled] = useState(false);

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
    email,
    firstName,
    jobTitle,
    nationality,
    lastName,
    phone,
    placeOfBirth,
    postalCode,
  } = useProfessionalDetails();
  const [pdfSize, setPdfSize] = useState(false);

  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: `${pdfName}.pdf`,
    resolution: Resolution.HIGH,
    page: {
      margin: Margin.NONE,
      format: "A4",
    },
    overrides: {
      pdf: {
        compress: true,
      },
      // canvas: {
      //   useCORS: true,
      //   width: 100,
      //   height: 100,
      // },
    },
  });

  useEffect(() => {
    let scrollTimeout: any;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      <div
        className={`break-words bg-misty w-full  xl:flex justify-center items-center h-screen fixed lg:relative overflow-hidden ${
          respToggled ? "" : "hidden"
        }`}
      >
        <div className=" w-full flex flex-col justify-center items-center">
          <div className="break-words  flex justify-between md:flex-row flex-col gap-2 xl:w-[480px] md:w-[65%] sm:w-[75%] w-[80%] top-0 mt-5">
            <Button
              type="button"
              className="hidden lg:flex md:order-first order-last break-words text-white bg-transparent hover:bg-charcoal rounded-full px-8 font-normal text-base capitalize"
            >
              <Grid2X2 className="mr-2" />
              select template
            </Button>
            <div className="flex justify-between">
              <Button
                onClick={() => {
                  toPDF();
                  setPdfSize(!pdfSize);
                }}
                type="button"
                className="break-words text-white bg-aquamarine-100 hover:bg-aquamarine-200 px-6 font-normal text-base"
              >
                Download PDF
              </Button>
              <Button
                onClick={() => {
                  setRespToggled(false);
                }}
                type="button"
                className={`text-white rounded-full py-2 px-2 bg-transparent hover:bg-charcoal transition duration-300 xl:hidden ${
                  respToggled ? "" : "flex"
                }`}
              >
                <X />
              </Button>
            </div>
          </div>
          <div
            className={`xl:w-[480px] md:w-[65%] sm:w-[75%] w-[80%] h-[580px] break-words overflow-hidden md:mt-8 mt-16`}
          >
            <div ref={targetRef} className="w-full h-full min-h-[1121px] flex">
              <div className="break-words xl:w-[30%] w-[35%] bg-[#1d473a] h-full py-8 px-4">
                {/* Personal Details */}
                <div>
                  <div>
                    {selectedImage && (
                      <Avatar className="break-words mx-auto h-14 w-14">
                        <AvatarImage
                          src={selectedImage}
                          className="object-cover"
                        />
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
                    <h1 className="break-words text-white text-[10px] leading-[14px] font-medium capitalize">
                      {personalDetailsTitle}
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
                    <h1 className="break-words text-white text-[10px] leading-[14px] font-medium capitalize">
                      {webNSocialLinkTitle}
                    </h1>
                    {sortableWebNSocialLinksList.map(
                      (item: any, index: any) => (
                        <div key={index}>
                          <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
                            <Link
                              href={
                                webNSocialLinksHistory[index]?.webNSocialLink
                                  ? webNSocialLinksHistory[index].webNSocialLink
                                  : "#"
                              }
                            >
                              {
                                webNSocialLinksHistory[index]
                                  ?.webNSocialLinkLabel
                              }
                            </Link>
                          </h6>
                        </div>
                      )
                    )}
                  </>
                )}
                {/*  Skills */}
                {sortableSkillsList.length > 0 && (
                  <>
                    <h1 className="break-words text-white text-[10px] leading-[14px] font-medium capitalize">
                      {skillTitle}
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
                    <h1 className="break-words text-white text-[10px] leading-[14px] font-medium capitalize">
                      {hobbiesTitle}
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
                    <h1 className="break-words text-white text-[10px] leading-[14px] font-medium capitalize">
                      {languagesTitle}
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
              <div className="break-words xl:w-[70%] w-[65%] bg-white h-full py-8 px-4 space-y-3">
                {/* Professional Summary */}
                {professionalSummary && (
                  <div>
                    <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                      {professionalSummaryTitle}
                    </h1>
                    <h6 className="break-words text-black/95 font-normal text-[8px] leading-[13px]">
                      {professionalSummary}
                    </h6>
                  </div>
                )}

                {/* Employment History */}
                {sortableEmploymentList.length > 0 && (
                  <div className="break-words space-y-2">
                    <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                      {employmentHistoryTitle}
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
                    <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                      {educationTitle}
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
                    <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                      {internshipsTitle}
                    </h1>
                    {sortableInternshipList.map((item: any, index: any) => (
                      <div key={index}>
                        <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                          {internshipHistory[index]?.internshipJobTitle}
                          {internshipHistory[index]?.internshipEmployer && (
                            <>
                              , {internshipHistory[index]?.internshipEmployer}
                            </>
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
                    <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                      {coursesTitle}
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
                    <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                      {referencesTitle}
                    </h1>
                    {sortableReferenceList.map((item: any, index: any) => (
                      <div key={index}>
                        <h6 className="break-words text-black/85 text-[9px] leading-[14px] font-semibold">
                          {referenceHistory[index]?.referenceFullName}{" "}
                          {referenceHistory[index]?.referenceCompany && (
                            <>
                              from {referenceHistory[index]?.referenceCompany}
                            </>
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
                    <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                      {activitiesTitle}
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
                    <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                      {customSectionTitle}
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
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          setRespToggled(true);
        }}
        className={`bg-aquamarine-100 h-14 hover:bg-aquamarine-200 uppercase fixed md:bottom-10 bottom-8 right-10 xl:hidden flex rounded-full shadow-lg
          ${respToggled && "hidden"}
          transition duration-300 ${isScrolling ? "px-4 py-2" : "w-14 h-14"}`}
      >
        {isScrolling ? (
          <>
            preview and download
            <ScanEye className="ml-2" />
          </>
        ) : (
          <ScanEye className="ml-0" />
        )}
      </Button>
    </>
  );
};

export default PreviewSection;
