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
  const { sortableCourseList, setCourse } = useCourse();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

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
}
