"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { useHobbies } from "@/statemanagement/useHobbies";

const SortableHobbies = () => {
  const { setHobbiesDescription, hobbiesDescription } = useHobbies();

  return (
    <>
      <div className="w-full flex gap-x-3 items-center justify-between">
        <div className="w-full space-y-2">
          <Textarea
            name="hobbiesDescription"
            className="capitalize font-normal text-sm text-charcoal resize-none"
            rows={6}
            value={hobbiesDescription || ""}
            onChange={(e) => {
              setHobbiesDescription(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SortableHobbies;
