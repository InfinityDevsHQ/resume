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
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import React from "react";
import DraggableActivity from "./draggable/draggable-activity";
import { Accordion } from "../ui/accordion";
import {
  ActivityEntryTypes,
  useActivity,
} from "@/statemanagement/useActivities";

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
  const { activityHistory } = useActivity();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDegreeDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sortableActivitiesList.indexOf(active.id);
      const newIndex = sortableActivitiesList.indexOf(over?.id);
      const newSortableActivitiesList = arrayMove(
        sortableActivitiesList,
        oldIndex,
        newIndex
      );
      setSortableActivitiesList(newSortableActivitiesList);
      const activityHistoryArray = Object.values(activityHistory);
      const newActivityHistoryArray = arrayMove(
        activityHistoryArray,
        oldIndex,
        newIndex
      );
      const updatedActivityHistory: { [key: number]: ActivityEntryTypes } = {};
      newSortableActivitiesList.forEach((id, index) => {
        updatedActivityHistory[id as number] = newActivityHistoryArray[index];
      });

      useActivity.setState({ activityHistory: updatedActivityHistory });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDegreeDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
    >
      <Accordion type="multiple" className="w-full">
        <SortableContext
          items={sortableActivitiesList}
          strategy={verticalListSortingStrategy}
        >
          {sortableActivitiesList.map((activity: any, index: any) => (
            <DraggableActivity
              key={activity}
              activity={activity}
              index={index}
              sortableActivitiesList={sortableActivitiesList}
              setSortableActivitiesList={setSortableActivitiesList}
              toggledActivities={toggledActivities}
              setToggledActivities={setToggledActivities}
            />
          ))}
        </SortableContext>
      </Accordion>
    </DndContext>
  );
};

export default SortableActivities;
