import MarkdownDisplay from "@/components/general/markdon-display";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Document, Page } from "@react-pdf/renderer";
import Link from "next/link";
import MarkdownIt from "markdown-it";
import { useRef, useState, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
type PDFDocProps = {
  skillsToggledProgress: boolean;
  targetRef: any;
  selectedImage: string | null;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  countryName: string;
  email: string;
  address: string;
  postalCode: string;
  nationality: string;
  dateOfBirth: string;
  jobTitle: string;
  placeOfBirth: string;
  personalDetailsTitle: string;
  sortableWebNSocialLinksList: any;
  webNSocialLinkTitle: string;
  webNSocialLinksHistory: any;
  sortableSkillsList: any;
  skillTitle: string;
  skillsHistory: any;
  toggledHobbies: boolean;
  hobbiesTitle: string;
  hobbiesDescription: string;
  sortableLanguageList: any;
  languagesTitle: string;
  languageHistory: any;
  sortableEmploymentList: any;
  employmentHistoryTitle: string;
  employmentHistory: any;
  sortableEducationList: any;
  educationTitle: string;
  educationHistory: any;
  sortableInternshipList: any;
  internshipsTitle: string;
  internshipHistory: any;
  sortableCourseList: any;
  coursesTitle: string;
  courseHistory: any;
  sortableReferenceList: any;
  referencesTitle: string;
  referenceHistory: any;
  sortableActivitiesList: any;
  activitiesTitle: string;
  activityHistory: any;
  sortableCustomSectionList: any;
  customSectionTitle: string;
  customHistory: any;
  professionalSummary: string;
  professionalSummaryTitle: string;
};

export default function PDFDoc({
  skillsToggledProgress,
  targetRef,
  selectedImage,
  firstName,
  lastName,
  phone,
  city,
  countryName,
  email,
  postalCode,
  address,
  nationality,
  jobTitle,
  dateOfBirth,
  placeOfBirth,
  personalDetailsTitle,
  sortableWebNSocialLinksList,
  webNSocialLinkTitle,
  webNSocialLinksHistory,
  sortableSkillsList,
  skillTitle,
  skillsHistory,
  toggledHobbies,
  professionalSummary,
  hobbiesTitle,
  hobbiesDescription,
  sortableLanguageList,
  languagesTitle,
  languageHistory,
  sortableEmploymentList,
  employmentHistoryTitle,
  employmentHistory,
  sortableEducationList,
  educationTitle,
  educationHistory,
  sortableInternshipList,
  internshipsTitle,
  internshipHistory,
  sortableCourseList,
  coursesTitle,
  courseHistory,
  sortableReferenceList,
  referencesTitle,
  referenceHistory,
  sortableActivitiesList,
  activitiesTitle,
  activityHistory,
  sortableCustomSectionList,
  customSectionTitle,
  professionalSummaryTitle,
  customHistory,
}: PDFDocProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const mdParser = new MarkdownIt();
  const chunkSize = 1121;
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      const chunkSize = 1121; // This value should match the actual page height
      const calculatedPages = Math.ceil(contentHeight / chunkSize);
      setNumPages(calculatedPages);

      console.log(contentHeight, chunkSize, "height");
      const numPages = Math.ceil(contentHeight / chunkSize);
      setNumPages(numPages);
    }
  }, [contentRef]);
  const contentChunks = Array.from({ length: numPages }, (_, i) => {
    const start = i * chunkSize;
    const end = start + chunkSize;
    const chunkContent = (
      <>
        <div className="break-words xl:w-[30%] w-[35%] bg-[#1d473a] h-full py-8 px-4">
          {/* Personal Details */}
          <div>
            <div>
              {selectedImage && (
                <Avatar className="break-words mx-auto h-14 w-14">
                  <AvatarImage src={selectedImage} className="object-cover" />
                </Avatar>
              )}
            </div>
            <div className="break-words text-center mt-3">
              <h3 className="break-words text-white font-normal text-base">
                {firstName} {lastName}
              </h3>
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
          {sortableWebNSocialLinksList?.length > 0 && (
            <>
              <h1 className="break-words text-white text-[10px] leading-[14px] font-medium capitalize">
                {webNSocialLinkTitle}
              </h1>
              {sortableWebNSocialLinksList?.map((item: any, index: any) => (
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
          {sortableSkillsList?.length > 0 && (
            <>
              <h1 className="break-words text-white text-[10px] leading-[14px] font-medium capitalize">
                {skillTitle}
              </h1>
              {sortableSkillsList.map((item: any, index: any) => (
                <div key={index} className="break-words space-y-1 mt-1">
                  <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
                    {skillsHistory[index]?.skillsTitle}
                  </h6>
                  {skillsHistory[index]?.skillsTitle &&
                    skillsToggledProgress && (
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
                <MarkdownDisplay
                  html={mdParser.render(hobbiesDescription) || ""}
                  className="!break-words !text-white/85 !font-normal !text-[8px] !leading-[13px]"
                />
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
                <div key={index + 1} className="break-words space-y-1 mt-1">
                  <h6 className="break-words text-white/85 font-normal text-[8px] leading-[13px]">
                    {languageHistory[index + 1]?.languageTitle}
                  </h6>
                  {languageHistory[index + 1]?.languageTitle && (
                    <Progress
                      value={languageHistory[index + 1]?.languageLevel || 66}
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
              <MarkdownDisplay html={mdParser.render(professionalSummary)} />
            </div>
          )}
          {/* Employment History */}
          {sortableEmploymentList.length > 0 && (
            <div className="break-words space-y-2">
              <h1 className="break-words text-black/85 text-[10px] leading-[14px] font-bold mb-1 capitalize">
                {employmentHistoryTitle}
              </h1>
              {sortableEmploymentList.map((index: any) => {
                return (
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
                    <MarkdownDisplay
                      html={
                        employmentHistory[index]?.employmentDescription || ""
                      }
                    />
                  </div>
                );
              })}
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
                  <MarkdownDisplay
                    html={mdParser.render(
                      educationHistory[index]?.educationDescription || ""
                    )}
                  />
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
                  <MarkdownDisplay
                    html={mdParser.render(
                      internshipHistory[index]?.internshipDescription || ""
                    )}
                  />
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
                  <MarkdownDisplay
                    html={activityHistory[index]?.activityDescription || ""}
                  />
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
              <div className="flex flex-col gap-3">
                {sortableCustomSectionList.map((index: any) => (
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
                    <MarkdownDisplay
                      html={mdParser.render(
                        customHistory[index]?.customDescription || ""
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );

    return renderToStaticMarkup(chunkContent);
  });
  return (
    <>
      <Document ref={targetRef}>
        {contentChunks.map((chunk) => (
          <Page key={chunk} size={"A4"}>
            <div
              className="w-full h-full min-h-[1121px] flex"
              dangerouslySetInnerHTML={{
                __html: chunk,
              }}
            />
          </Page>
        ))}
      </Document>
    </>
  );
}
const Pagination = ({
  numPages,
  currentPage,
  setCurrentPage,
}: {
  numPages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}) => {
  return (
    <div className="flex justify-center mb-4">
      {Array(numPages)
        .fill(0)
        .map((_, index) => (
          <button
            key={index}
            className={`px-2 py-1 ${
              currentPage === index + 1 ? "bg-red-900" : "bg-white"
            } rounded`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};
