// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
// import React from "react";

// interface SkillsBadgeProps {
//   setSortableSkillsList: any;
//   sortableSkillsList: any;
// }

// const badges = [
//   { label: "Communication Skills", level: "skillful" },
//   { label: "Ability to Work Under Pressure", level: "skillful" },
//   { label: "Adaptability", level: "skillful" },
//   { label: "Microsoft Office", level: "skillful" },
//   { label: "Fast Learner", level: "skillful" },
//   { label: "Customer Service", level: "skillful" },
//   { label: "Programming", level: "skillful" },
//   { label: "Ability to work in a team", level: "skillful" },
//   { label: "Critical thinking and problem solving", level: "skillful" },
//   { label: "Effective Time Managment", level: "skillful" },
//   { label: "Team leadership", level: "skillful" },
//   { label: "Ability to Multitask", level: "skillful" },
//   { label: "Ability to Multitask", level: "skillful" },
// ];

// const handleDisabled = () => {};

// const SkillsBadge: React.FC<SkillsBadgeProps> = ({
//   setSortableSkillsList,
//   sortableSkillsList,
// }) => {
//   const handleAddSortableSkillsList = () => {
//     setSortableSkillsList((sortableSkillsList) => [
//       ...sortableSkillsList,
//       sortableSkillsList.length + 1,
//     ]);
//   };

//   return (
//     <>
//       <div className="flex flex-wrap gap-3">
//         {badges.map((item, index) => (
//           <Button
//             onClick={handleAddSortableSkillsList}
//             type="button"
//             key={index}
//             className="bg-[#eff2f9] text-[#424242] hover:bg-[#eff2f9] hover:text-aquamarine-100 gap-x-2"
//           >
//             {item.label}
//             <Plus className="w-[18px]" />
//           </Button>
//         ))}
//       </div>
//     </>
//   );
// };
// export default SkillsBadge;

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface SkillsBadgeProps {
  setDisabledBadges: any;
  disabledBadges: any;
  handleAddSortableSkillsList: any;
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
  { label: "Effective Time Management", level: "skillful" },
  { label: "Team leadership", level: "skillful" },
  { label: "Ability to Multitask", level: "skillful" },
];

const SkillsBadge: React.FC<SkillsBadgeProps> = ({
  setDisabledBadges,
  handleAddSortableSkillsList,
  disabledBadges,
}) => {
  // const [clickedBadges, setClickedBadges] = useState<string[]>([]);

  // const handleBadgeClick = (label: string) => {
  //   if (!clickedBadges.includes(label)) {
  //     setSortableSkillsList((sortableSkillsList: any) => [
  //       ...sortableSkillsList,
  //       sortableSkillsList,
  //     ]);
  //     setClickedBadges((prevClicked) => [...prevClicked, label]);
  //   }
  // };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {badges.map((item, index) => (
          <Button
            onClick={handleAddSortableSkillsList}
            disabled={disabledBadges}
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
// {
//   clickedBadges.includes(item.label)
//     ? "opacity-50 cursor-not-allowed"
//     : ""
// }
