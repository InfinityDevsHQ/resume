"use client";
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import DraggableCourse from "./draggable/draggable-course";
import { useCourse } from "@/statemanagement/useCourse";

interface SortableCourseProps {
  setSortableCourseList: any;
  setToggledCourse: any;
  toggledCourse: any;
}

const SortableCourse: React.FC<SortableCourseProps> = ({
  setSortableCourseList,
  setToggledCourse,
  toggledCourse,
}) => {
  const { sortableCourseList, setCourse } = useCourse();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  // const handleDegreeDragEnd = (event: any) => {
  //   const { active, over } = event;
  //   if (active.id !== over?.id) {
  //     const oldIndex = sortableCourseList.indexOf(active.id);
  //     const newIndex = sortableCourseList.indexOf(over?.id);
  //     const newSortableActivitiesList = arrayMove(
  //       sortableCourseList,
  //       oldIndex,
  //       newIndex
  //     );
  //     setCourse(newSortableActivitiesList);
  //     const activityHistoryArray = Object.values(activityHistory);
  //     const newActivityHistoryArray = arrayMove(
  //       activityHistoryArray,
  //       oldIndex,
  //       newIndex
  //     );
  //     const updatedActivityHistory: { [key: number]: ActivityEntryTypes } = {};
  //     newSortableActivitiesList.forEach((id, index) => {
  //       updatedActivityHistory[id as number] = newActivityHistoryArray[index];
  //     });

  //     useCourse.setState({ activityHistory: updatedActivityHistory });
  //   }
  // };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
    >
      <div>
        <Accordion type="multiple" className="w-full space-y-2">
          <SortableContext
            strategy={verticalListSortingStrategy}
            items={sortableCourseList}
          >
            {sortableCourseList?.map((item: any, index: number) => (
              <DraggableCourse key={index} index={index} course={item} />
            ))}
          </SortableContext>
        </Accordion>
      </div>
    </DndContext>
  );
};

export default SortableCourse;
