"use client";
import React, { useState } from "react";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

const HomeWrapper = () => {
  const [sortableEmploymentList, setSortableEmploymentList] = useState<
    number[]
  >([]);

  const handleAddSortableEmploymentList = () => {
    setSortableEmploymentList((sortableEmploymentList) => [
      ...sortableEmploymentList,
      sortableEmploymentList.length + 1,
    ]);
  };

  return (
    <>
      <section className="w-full h-full flex">
        <FormSection
          handleAddSortableEmploymentList={handleAddSortableEmploymentList}
          sortableEmploymentList={sortableEmploymentList}
          setSortableEmploymentList={setSortableEmploymentList}
        />
        <PreviewSection sortableEmploymentList={sortableEmploymentList} />
      </section>
    </>
  );
};

export default HomeWrapper;
