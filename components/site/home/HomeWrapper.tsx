"use client";
import React, { useState } from "react";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

const HomeWrapper = () => {
  // statemanagement

  const [sortableEmploymentList, setSortableEmploymentList] = useState<
    number[]
  >([]);

  const [sortableEducationList, setSortableEducationList] = useState<number[]>(
    []
  );

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
        />
        <PreviewSection
          sortableEmploymentList={sortableEmploymentList}
          sortableEducationList={sortableEducationList}
        />
      </section>
    </>
  );
};

export default HomeWrapper;
