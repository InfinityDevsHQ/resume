import { Button } from "@/components/ui/button";
import { Frown, Plus, Smile } from "lucide-react";
import React from "react";

interface SkillsBadgeProps {
  setSortableSkillsList: any;
}

const badges = [
  { label: "Communication Skills", level: "skillful" },
  { label: "Ability to Work Under Pressure", level: "skillful" },
  { label: "Adaptability", level: "skillful" },
  { label: "Microsoft Office", level: "skillful" },
  { label: "Fast Learner", level: "skillful" },
  { label: "Customer Service", level: "skillful" },
  { label: "Programming", level: "skillful" },
  { label: "Ability to work in a team", level: "skillful" },
  { label: "Critical thinking and problem solving", level: "skillful" },
  { label: "Effective Time Managment", level: "skillful" },
  { label: "Team leadership", level: "skillful" },
  { label: "Ability to Multitask", level: "skillful" },
  { label: "Ability to Multitask", level: "skillful" },
];

const SkillsBadge: React.FC<SkillsBadgeProps> = ({ setSortableSkillsList }) => {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {badges.map((item, index) => (
          <Button
            type="button"
            key={index}
            className="bg-[#eff2f9] text-[#424242] hover:bg-[#eff2f9] hover:text-aquamarine-100 gap-x-2"
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
