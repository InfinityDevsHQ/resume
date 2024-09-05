"use client";
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
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";

import React from "react";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";

import { useActivity } from "@/statemanagement/useActivities";
import DraggableActivity from "./draggable/draggable-activity";

interface SortableActivitiesProps {
  sortableActivitiesList: any;
  setSortableActivitiesList: any;
  setToggledActivities: any;
  toggledActivities: any;
}

const SortableActivities: React.FC<SortableActivitiesProps> = ({
  sortableActivitiesList,
  setSortableActivitiesList,
  setToggledActivities,
  toggledActivities,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDegreeDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setSortableActivitiesList((prevList: any) => {
        const oldIndex = prevList.findIndex(
          (item: any) => item.id === active.id
        );
        const newIndex = prevList.findIndex((item: any) => item.id === over.id);
        return arrayMove(prevList, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      {" "}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDegreeDragEnd}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      >
        <SortableContext
          items={sortableActivitiesList}
          strategy={verticalListSortingStrategy}
        >
          {sortableActivitiesList.map((activity: any, index: any) => (
            <DraggableActivity
              sortableActivitiesList={sortableActivitiesList}
              setSortableActivitiesList={setSortableActivitiesList}
              setToggledActivities={setToggledActivities}
              index={index}
              key={index}
              activity={activity}
              toggledActivities={toggledActivities}
            />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};

export default SortableActivities;
