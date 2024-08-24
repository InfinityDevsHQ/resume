import React from "react";
import FormSection from "./FormSection";
import PreviewSection from "./PreviewSection";

const HomeWrapper = () => {
  return (
    <>
      <section className="w-full h-full flex">
        <FormSection />
        <PreviewSection />
      </section>
    </>
  );
};

export default HomeWrapper;
