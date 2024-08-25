import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface SkillsBadgeProps {
  setDisabledBadges: any;
  disabledBadges: any;
  handleAddSortableSkillsList: any;
}

const badges = [
  { id: 1, label: "Communication Skills", level: "skillful" },
  { id: 2, label: "Ability to Work Under Pressure", level: "skillful" },
  { id: 3, label: "Adaptability", level: "skillful" },
  { id: 4, label: "Microsoft Office", level: "skillful" },
  { id: 5, label: "Fast Learner", level: "skillful" },
  { id: 6, label: "Customer Service", level: "skillful" },
  { id: 7, label: "Programming", level: "skillful" },
  { id: 8, label: "Ability to work in a team", level: "skillful" },
  { id: 9, label: "Critical thinking and problem solving", level: "skillful" },
  { id: 10, label: "Effective Time Management", level: "skillful" },
  { id: 11, label: "Team leadership", level: "skillful" },
  { id: 12, label: "Ability to Multitask", level: "skillful" },
];

const SkillsBadge: React.FC<SkillsBadgeProps> = ({
  setDisabledBadges,
  handleAddSortableSkillsList,
  disabledBadges,
}) => {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {badges.map((item, index) => (
          <Button
            onClick={handleAddSortableSkillsList}
            type="button"
            key={index}
            className={`bg-[#eff2f9] text-[#424242] hover:bg-[#eff2f9] hover:text-aquamarine-100 gap-x-2 $`}
          >
            {item.label}
            <Plus className="w-[18px]" />
          </Button>
        ))}
      </div>
    </>
  );
};

export default SkillsBadge;
