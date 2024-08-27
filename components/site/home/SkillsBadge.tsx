import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface SkillsBadgeProps {
  handleAddSortableSkillsBadgeList: any;
  skillsHistory: any;
  clickedBadges: any;
}

const badges = [
  { id: 1, label: "Communication Skills" },
  { id: 2, label: "Ability to Work Under Pressure" },
  { id: 3, label: "Adaptability" },
  { id: 4, label: "Microsoft Office" },
  { id: 5, label: "Fast Learner" },
  { id: 6, label: "Customer Service" },
  { id: 7, label: "Programming" },
  { id: 8, label: "Ability to work in a team" },
  { id: 9, label: "Critical thinking and problem solving" },
  { id: 10, label: "Effective Time Management" },
  { id: 11, label: "Team leadership" },
  { id: 12, label: "Ability to Multitask" },
];

const SkillsBadge: React.FC<SkillsBadgeProps> = ({
  handleAddSortableSkillsBadgeList,
  skillsHistory,
  clickedBadges,
}) => {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {badges.map((item, index) => (
          <Button
            onClick={() => {
              handleAddSortableSkillsBadgeList(item.label);
            }}
            type="button"
            disabled={clickedBadges.has(item.label)}
            key={index}
            className="bg-[#eff2f9] text-[#424242] hover:bg-[#eff2f9] hover:text-aquamarine-100 gap-x-2"
          >
            {item.label}
            {skillsHistory[index]?.badgeData}
            <Plus className="w-[18px]" />
          </Button>
        ))}
      </div>
    </>
  );
};

export default SkillsBadge;
