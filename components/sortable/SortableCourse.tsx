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

export default function SortableCourse() {
  const { sortableCourseList, setSortableCourseList } = useCourse();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = sortableCourseList.findIndex(
        (item) => item === active.id
      );
      const newIndex = sortableCourseList.findIndex((item) => item === over.id);
      setSortableCourseList(arrayMove(sortableCourseList, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      onDragEnd={handleDragEnd}
    >
      <div>
        <Accordion type="multiple" className="w-full space-y-2">
          <SortableContext
            strategy={verticalListSortingStrategy}
            items={sortableCourseList.map((item) => item)} // Ensure each item has a unique ID
          >
            {sortableCourseList?.map((item: any, index: number) => (
              <DraggableCourse
                key={item.id} // Ensure key is unique
                index={index}
                course={item} // Pass the entire course object
              />
            ))}
          </SortableContext>
        </Accordion>
      </div>
    </DndContext>
  );
}
