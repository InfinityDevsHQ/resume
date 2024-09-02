"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Margin, usePDF, Resolution } from "react-to-pdf";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
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
import markdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownDisplay from "@/components/general/markdon-display";
import PDFDoc from "./pdf-doc";

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
  const mdParser = new markdownIt();
  const { languageHistory } = useLanguage();
  const { activityHistory } = useActivity();
  const { referenceHistory } = useReference();
  const { skillsHistory } = useSkills();
  const { hobbiesDescription } = useHobbies();
  const { customHistory } = useCustom();
  const { internshipHistory } = useInternship();
  const { employmentHistory } = useEmploymentHistory();
  const { educationHistory } = useEducation();
  const { courseHistory } = useCourse();
  const { professionalSummary } = useProfessionalSummary();
  const { webNSocialLinksHistory } = useWebNSocialLinks();
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
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      flexGrow: 5,
    },
  });

  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: `${pdfName}.pdf`,
    resolution: Resolution.HIGH,
    page: {
      margin: Margin.NONE,
    },
    overrides: {
      pdf: {
        compress: true,
      },
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
  console.log(targetRef.current, "DOCUMENT HERE");
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
            <PDFDoc
              skillsHistory={skillsHistory}
              sortableActivitiesList={sortableActivitiesList}
              sortableCourseList={sortableCourseList}
              sortableCustomSectionList={sortableCustomSectionList}
              sortableEducationList={sortableEducationList}
              sortableReferenceList={sortableReferenceList}
              sortableLanguageList={sortableLanguageList}
              sortableEmploymentList={sortableEmploymentList}
              sortableInternshipList={sortableInternshipList}
              sortableSkillsList={sortableSkillsList}
              sortableWebNSocialLinksList={sortableWebNSocialLinksList}
              selectedImage={selectedImage}
              skillTitle={skillTitle}
              targetRef={targetRef}
              firstName={firstName}
              lastName={lastName}
              webNSocialLinksHistory={webNSocialLinksHistory}
              toggledHobbies={toggledHobbies}
              languageHistory={languageHistory}
              employmentHistory={employmentHistory}
              educationHistory={educationHistory}
              internshipHistory={internshipHistory}
              courseHistory={courseHistory}
              referenceHistory={referenceHistory}
              activityHistory={activityHistory}
              customHistory={customHistory}
              city={city}
              countryName={countryName}
              coursesTitle={coursesTitle}
              customSectionTitle={customSectionTitle}
              professionalSummary={professionalSummary}
              professionalSummaryTitle={professionalSummaryTitle}
              phone={phone}
              email={email}
              address={address}
              postalCode={postalCode}
              nationality={nationality}
              dateOfBirth={dateOfBirth}
              jobTitle={jobTitle}
              placeOfBirth={placeOfBirth}
              personalDetailsTitle={personalDetailsTitle}
              webNSocialLinkTitle={webNSocialLinkTitle}
              hobbiesTitle={hobbiesTitle}
              hobbiesDescription={hobbiesDescription}
              languagesTitle={languagesTitle}
              employmentHistoryTitle={employmentHistoryTitle}
              educationTitle={educationTitle}
              internshipsTitle={internshipsTitle}
              referencesTitle={referencesTitle}
              activitiesTitle={activitiesTitle}
            />
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
