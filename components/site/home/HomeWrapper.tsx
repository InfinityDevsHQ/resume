"use client";
import React, { useState } from "react";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

const HomeWrapper = () => {
  // statemanagement

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

  const [sortableWebNSocialLinksList, setSortableWebNSocialLinksList] =
    useState<number[]>([]);

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

  return (
    <>
      <section className="w-full h-full flex">
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
        />
        <PreviewSection
          sortableEmploymentList={sortableEmploymentList}
          sortableEducationList={sortableEducationList}
          sortableWebNSocialLinksList={sortableWebNSocialLinksList}
          sortableCourseList={sortableCourseList}
          sortableInternshipList={sortableInternshipList}
        />
      </section>
    </>
  );
};

export default HomeWrapper;
