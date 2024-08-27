"use client";
import React, { Dispatch, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Frown, Smile, TrashIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { useActivity } from "@/statemanagement/useActivities";

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
  const handleDeleteDiv = (index: any) => {
    setSortableActivitiesList((sortableActivitiesList: any[]) =>
      sortableActivitiesList.filter((_: any, i: any) => i !== index)
    );
    if (sortableActivitiesList.length <= 1) {
      setToggledActivities(!toggledActivities);
    }
  };

  const {
    activityHistory,
    setActivityCity,
    setActivityDescription,
    setActivityEmployer,
    setActivityEndDate,
    setActivityFunctionTitle,
    setActivityStartDate,
  } = useActivity();

  return (
    <>
      {sortableActivitiesList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-black text-left">
                    {activityHistory[index]?.activityFunctionTitle ||
                    activityHistory[index]?.activityEmployer ? (
                      <>
                        {activityHistory[index]?.activityFunctionTitle}{" "}
                        {activityHistory[index]?.activityEmployer && (
                          <>- {activityHistory[index]?.activityEmployer}</>
                        )}
                      </>
                    ) : (
                      "Not specified"
                    )}
                  </span>
                  <span className="block text-charcoal text-left">
                    {activityHistory[index]?.activityEndDate ||
                    activityHistory[index]?.activityStartDate ? (
                      <>
                        {activityHistory[index]?.activityStartDate &&
                          activityHistory[
                            index
                          ]?.activityStartDate?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}{" "}
                        {activityHistory[index]?.activityEndDate && (
                          <>
                            -{" "}
                            {activityHistory[
                              index
                            ]?.activityEndDate?.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            })}
                          </>
                        )}
                      </>
                    ) : (
                      "Not specified"
                    )}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8">
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      function title
                    </Label>
                    <Input
                      name="activityFunctionTitle"
                      value={
                        activityHistory[index]?.activityFunctionTitle || ""
                      }
                      onChange={(e) => {
                        setActivityFunctionTitle(index, e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      employer
                    </Label>
                    <Input
                      name="activityEmployer"
                      value={activityHistory[index]?.activityEmployer || ""}
                      onChange={(e) => {
                        setActivityEmployer(index, e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="w-1/2 flex gap-2">
                    <div className="w-full space-y-2">
                      <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                        start date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full h-12 px-3 text-left text-black/95 font-normal text-sm bg-[#eff2f9] hover:bg-[#eff2f9] hover:text-black/95 rounded-none border-0",
                              !activityHistory[index]?.activityStartDate &&
                                "text-charcoal"
                            )}
                          >
                            {activityHistory[index]?.activityStartDate ? (
                              format(
                                activityHistory[index]?.activityStartDate,
                                "PP"
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={activityHistory[index]?.activityStartDate}
                            onSelect={(date) =>
                              setActivityStartDate(index, date)
                            }
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="w-full space-y-2">
                      <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                        end date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full h-12 px-3 text-left text-black/95 font-normal text-sm bg-[#eff2f9] hover:bg-[#eff2f9] hover:text-black/95 rounded-none border-0",
                              !activityHistory[index]?.activityEndDate &&
                                "text-charcoal"
                            )}
                          >
                            {activityHistory[index]?.activityEndDate ? (
                              format(
                                activityHistory[index]?.activityEndDate,
                                "PP"
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={activityHistory[index]?.activityEndDate}
                            onSelect={(date) => setActivityEndDate(index, date)}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      city
                    </Label>
                    <Input
                      value={activityHistory[index]?.activityCity || ""}
                      onChange={(e) => {
                        setActivityCity(index, e.target.value);
                      }}
                      name="activityCity"
                    />
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <Textarea
                    name="activityDescription"
                    className="capitalize font-normal text-sm text-charcoal resize-none"
                    rows={6}
                    value={activityHistory[index]?.activityDescription || ""}
                    onChange={(e) => {
                      setActivityDescription(index, e.target.value);
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl">
                Delete Entry
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base text-charcoal">
                Are you sure want to delete this entry ?
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogAction
                className="bg-aquamarine-100 hover:bg-aquamarine-200 text-white hover:text-white uppercase text-base font-light min-w-[91.5px]"
                onClick={() => {
                  handleDeleteDiv(index);
                  setActivityCity(index, "");
                  setActivityDescription(index, "");
                  setActivityEmployer(index, "");
                  setActivityEndDate(index, null);
                  setActivityFunctionTitle(index, "");
                  setActivityStartDate(index, null);
                }}
              >
                delete
              </AlertDialogAction>
              <AlertDialogCancel className="text-black bg-transparent border-charcoal uppercase text-base font-light min-w-[91.5px]">
                cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </div>
      ))}
    </>
  );
};

export default SortableActivities;
