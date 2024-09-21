"use client";
import React from "react";
import { useHobbies } from "@/statemanagement/useHobbies";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";

const SortableHobbies = () => {
  const { setHobbiesDescription, hobbiesDescription } = useHobbies();
  const mdParser = new MarkdownIt();
  return (
    <>
      <div className="w-full flex gap-x-3 items-center justify-between">
        <div className="w-full space-y-2">
          <MdEditor
            value={hobbiesDescription}
            onChange={(e) => {
              setHobbiesDescription(e.text);
            }}
            style={{ height: "170px", width: "full" }}
            renderHTML={(text) => mdParser.render(text)}
          />
        </div>
      </div>
    </>
  );
};

export default SortableHobbies;
