"use client";
import React, { useState } from "react";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";
import { useSkills } from "@/statemanagement/useSkills";
import { useReference } from "@/statemanagement/useReference";
import { useEmploymentHistory } from "@/statemanagement/useEmploymentHistory";

const HomeWrapper = () => {
  // statemanagement

  const [customSectionTitle, setCustomSectionTitle] =
    useState<string>("custom section");

  const [personalDetailsTitle, setPersonalDetailsTitle] =
    useState<string>("personal details");

  const [professionalSummaryTitle, setProfessionalSummaryTitle] =
    useState<string>("professional summary");

  const [educationTitle, setEducationTitle] = useState<string>("education");

  const [webNSocialLinkTitle, setWebNSocialLinkTitle] = useState<string>(
    "websites & social links"
  );

  const [languagesTitle, setLanguagesTitle] = useState<string>("languages");

  const [coursesTitle, setCoursesTitle] = useState<string>("courses");

  const [internshipsTitle, setInternshipsTitle] =
    useState<string>("internships");
  const { referencesTitle, setReferencesTitle } = useReference();

  const [skillTitle, setSkillTitle] = useState<string>("skills");

  const [hobbiesTitle, setHobbiesTitle] = useState<string>("hobbies");

  const [activitiesTitle, setActivitiesTitle] = useState<string>(
    "extra curricular activities"
  );

  const {
    employmentHistoryTitle,
    setEmploymentHistoryTitle,
    sortableEmploymentList,
    setSortableEmploymentList,
  } = useEmploymentHistory();

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
  const [pdfName, setPdfName] = useState("Untitled");
  const handleAddSortableEmploymentList = () => {
    setSortableEmploymentList([
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
    <section className="w-full grid lg:grid-cols-2 h-screen overflow-hidden">
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
        handleAddSortableCustomSectionList={handleAddSortableCustomSectionList}
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
        customSectionTitle={customSectionTitle}
        setCustomSectionTitle={setCustomSectionTitle}
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
        setPersonalDetailsTitle={setPersonalDetailsTitle}
        setProfessionalSummaryTitle={setProfessionalSummaryTitle}
        setEducationTitle={setEducationTitle}
        setWebNSocialLinkTitle={setWebNSocialLinkTitle}
        setLanguagesTitle={setLanguagesTitle}
        setCoursesTitle={setCoursesTitle}
        setEmploymentHistoryTitle={setEmploymentHistoryTitle}
        setInternshipsTitle={setInternshipsTitle}
        setReferencesTitle={setReferencesTitle}
        setSkillTitle={setSkillTitle}
        setHobbiesTitle={setHobbiesTitle}
        setActivitiesTitle={setActivitiesTitle}
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
      />
    </section>
  );
};

export default HomeWrapper;
