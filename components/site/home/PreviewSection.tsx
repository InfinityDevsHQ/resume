"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Margin, usePDF, Resolution } from "react-to-pdf";
import Forest from "@/templates/Forest";

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
  skillsToggledProgress,
  languageToggledProgress,
  pdfName,
  setPdfName,
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
      canvas: {
        useCORS: true,
      },
    },
  });

  return (
    <>
      <div className="break-words bg-misty w-1/2 fixed top-0 bottom-0 right-0 flex justify-center items-center">
        <div className="h-full w-full flex justify-center items-center">
          <div className="break-words absolute left-[50%] translate-x-[-50%] text-right w-[480px] top-0 mt-5">
            <Button
              onClick={() => {
                toPDF();
                setPdfSize(!pdfSize);
              }}
              type="button"
              className="break-words text-white bg-aquamarine-100 hover:bg-aquamarine-200 px-8 font-normal text-base"
            >
              Download PDF
            </Button>
          </div>

          <div className="w-[480px] h-[580px]">
            <Forest
              sortableEmploymentList={sortableEmploymentList}
              sortableEducationList={sortableEducationList}
              sortableWebNSocialLinksList={sortableWebNSocialLinksList}
              sortableCourseList={sortableCourseList}
              sortableInternshipList={sortableInternshipList}
              sortableReferenceList={sortableReferenceList}
              toggledHobbies={toggledHobbies}
              sortableActivitiesList={sortableActivitiesList}
              sortableCustomSectionList={sortableCustomSectionList}
              sortableSkillsList={sortableSkillsList}
              sortableLanguageList={sortableLanguageList}
              skillsToggledProgress={skillsToggledProgress}
              languageToggledProgress={languageToggledProgress}
              pdfName={pdfName}
              setPdfName={setPdfName}
              targetRef={targetRef}
              customSectionTitle={customSectionTitle}
              personalDetailsTitle={personalDetailsTitle}
              professionalSummaryTitle={professionalSummaryTitle}
              educationTitle={educationTitle}
              webNSocialLinkTitle={webNSocialLinkTitle}
              languagesTitle={languagesTitle}
              coursesTitle={coursesTitle}
              employmentHistoryTitle={employmentHistoryTitle}
              internshipsTitle={internshipsTitle}
              referencesTitle={referencesTitle}
              skillTitle={skillTitle}
              hobbiesTitle={hobbiesTitle}
              activitiesTitle={activitiesTitle}
              className={`object-cover w-full h-full mt-6`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewSection;
