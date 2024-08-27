"use client";
import React, { useState } from "react";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";
import { useSkills } from "@/statemanagement/useSkills";

const HomeWrapper = () => {
  // statemanagement

  const [clickedBadges, setClickedBadges] = useState<Set<string>>(new Set());

  const { addSkill } = useSkills();

  const [skillsToggledProgress, setSkillsToggledProgress] =
    useState<boolean>(true);

  const [languageToggledProgress, setLanguageToggledProgress] =
    useState<boolean>(true);

  const [toggledHobbies, setToggledHobbies] = useState<boolean>(false);

  const [sortableActivitiesList, setSortableActivitiesList] = useState<
    number[]
  >([]);

  const [sortableReferenceList, setSortableReferenceList] = useState<number[]>(
    []
  );

  const [sortableLanguageList, setSortableLanguageList] = useState<number[]>(
    []
  );

  const [sortableEmploymentList, setSortableEmploymentList] = useState<
    number[]
  >([]);

  const [sortableInternshipList, setSortableInternshipList] = useState<
    number[]
  >([]);

  const [sortableCourseList, setSortableCourseList] = useState<number[]>([]);

  const [sortableEducationList, setSortableEducationList] = useState<number[]>(
    []
  );

  const [sortableCustomSectionList, setSortableCustomSectionList] = useState<
    number[]
  >([]);

  const [sortableWebNSocialLinksList, setSortableWebNSocialLinksList] =
    useState<number[]>([]);

  const [sortableSkillsList, setSortableSkillsList] = useState<number[]>([]);

  const [pdfName, setPdfName] = useState<any>();

  // Add More

  const handleAddSortableEmploymentList = () => {
    setSortableEmploymentList((sortableEmploymentList) => [
      ...sortableEmploymentList,
      sortableEmploymentList.length + 1,
    ]);
  };

  const handleAddSortableEducationList = () => {
    setSortableEducationList((sortableEducationList) => [
      ...sortableEducationList,
      sortableEducationList.length + 1,
    ]);
  };

  const handleAddSortableWebNSocialLinksList = () => {
    setSortableWebNSocialLinksList((sortableWebNSocialLinksList) => [
      ...sortableWebNSocialLinksList,
      sortableWebNSocialLinksList.length + 1,
    ]);
  };

  const handleAddSortableCourseList = () => {
    setSortableCourseList((sortableCourseList) => [
      ...sortableCourseList,
      sortableCourseList.length + 1,
    ]);
  };

  const handleAddSortableInternshipList = () => {
    setSortableInternshipList((sortableInternshipList) => [
      ...sortableInternshipList,
      sortableInternshipList.length + 1,
    ]);
  };

  const handleAddSortableReferenceList = () => {
    setSortableReferenceList((sortableReferenceList) => [
      ...sortableReferenceList,
      sortableReferenceList.length + 1,
    ]);
  };

  const handleAddSortableActivitiesList = () => {
    setSortableActivitiesList((sortableActivitiesList) => [
      ...sortableActivitiesList,
      sortableActivitiesList.length + 1,
    ]);
  };

  const handleAddSortableCustomSectionList = () => {
    setSortableCustomSectionList((sortableCustomSectionList) => [
      ...sortableCustomSectionList,
      sortableCustomSectionList.length + 1,
    ]);
  };

  const handleAddSortableSkillsList = () => {
    setSortableSkillsList((sortableSkillsList) => [
      ...sortableSkillsList,
      sortableSkillsList.length + 1,
    ]);
  };

  const handleAddSortableSkillsBadgeList = (label?: string) => {
    if (label) {
      addSkill(label);
      setClickedBadges((prev) => new Set(prev).add(label));
    }
    setSortableSkillsList((sortableSkillsList) => [
      ...sortableSkillsList,
      sortableSkillsList.length + 1,
    ]);
  };

  const handleAddSortableLanguageList = () => {
    setSortableLanguageList((sortableLanguageList) => [
      ...sortableLanguageList,
      sortableLanguageList.length + 1,
    ]);
  };

  return (
    <>
      <section className="w-full flex">
        <FormSection
          handleAddSortableEmploymentList={handleAddSortableEmploymentList}
          sortableEmploymentList={sortableEmploymentList}
          setSortableEmploymentList={setSortableEmploymentList}
          handleAddSortableEducationList={handleAddSortableEducationList}
          sortableEducationList={sortableEducationList}
          setSortableEducationList={setSortableEducationList}
          handleAddSortableWebNSocialLinksList={
            handleAddSortableWebNSocialLinksList
          }
          sortableWebNSocialLinksList={sortableWebNSocialLinksList}
          setSortableWebNSocialLinksList={setSortableWebNSocialLinksList}
          handleAddSortableCourseList={handleAddSortableCourseList}
          sortableCourseList={sortableCourseList}
          setSortableCourseList={setSortableCourseList}
          handleAddSortableInternshipList={handleAddSortableInternshipList}
          sortableInternshipList={sortableInternshipList}
          setSortableInternshipList={setSortableInternshipList}
          handleAddSortableReferenceList={handleAddSortableReferenceList}
          sortableReferenceList={sortableReferenceList}
          setSortableReferenceList={setSortableReferenceList}
          toggledHobbies={toggledHobbies}
          setToggledHobbies={setToggledHobbies}
          handleAddSortableActivitiesList={handleAddSortableActivitiesList}
          sortableActivitiesList={sortableActivitiesList}
          setSortableActivitiesList={setSortableActivitiesList}
          handleAddSortableCustomSectionList={
            handleAddSortableCustomSectionList
          }
          sortableCustomSectionList={sortableCustomSectionList}
          setSortableCustomSectionList={setSortableCustomSectionList}
          handleAddSortableSkillsBadgeList={handleAddSortableSkillsBadgeList}
          sortableSkillsList={sortableSkillsList}
          setSortableSkillsList={setSortableSkillsList}
          handleAddSortableLanguageList={handleAddSortableLanguageList}
          sortableLanguageList={sortableLanguageList}
          setSortableLanguageList={setSortableLanguageList}
          skillsToggledProgress={skillsToggledProgress}
          setSkillsToggledProgress={setSkillsToggledProgress}
          languageToggledProgress={languageToggledProgress}
          setLanguageToggledProgress={setLanguageToggledProgress}
          handleAddSortableSkillsList={handleAddSortableSkillsList}
          pdfName={pdfName}
          setPdfName={setPdfName}
          clickedBadges={clickedBadges}
          setClickedBadges={setClickedBadges}
        />
        <PreviewSection
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
        />
      </section>
    </>
  );
};

export default HomeWrapper;
