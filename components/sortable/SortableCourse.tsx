"use client";
import React, { Dispatch, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Delete, Frown, Smile, TrashIcon } from "lucide-react";
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
import { useCourse } from "@/statemanagement/useCourse";

interface SortableCourseProps {
  sortableCourseList: any;
  setSortableCourseList: any;
  setToggledCourse: any;
  toggledCourse: any;
}

const SortableCourse: React.FC<SortableCourseProps> = ({
  sortableCourseList,
  setSortableCourseList,
  setToggledCourse,
  toggledCourse,
}) => {
  const handleDeleteDiv = (index: any) => {
    setSortableCourseList((sortableCourseList: any[]) =>
      sortableCourseList.filter((_: any, i: any) => i !== index)
    );
    if (sortableCourseList.length <= 1) {
      setToggledCourse(!toggledCourse);
    }
  };

  const {
    courseHistory,
    setCourse,
    setCourseInstitution,
    setCourseStartDate,
    setCourseEndDate,
  } = useCourse();

  return (
    <>
      {sortableCourseList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-gray-800 text-left">
                    {courseHistory[index]?.course ||
                    courseHistory[index]?.courseInstitution ? (
                      <>
                        {courseHistory[index]?.course}{" "}
                        {courseHistory[index]?.courseInstitution && (
                          <>at {courseHistory[index]?.courseInstitution}</>
                        )}
                      </>
                    ) : (
                      "Not specified"
                    )}
                  </span>
                  <span className="block text-charcoal text-left">
                    {courseHistory[index]?.courseEndDate ||
                    courseHistory[index]?.courseStartDate ? (
                      <>
                        {courseHistory[index]?.courseStartDate &&
                          courseHistory[
                            index
                          ]?.courseStartDate?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}{" "}
                        {courseHistory[index]?.courseEndDate && (
                          <>
                            -{" "}
                            {courseHistory[
                              index
                            ]?.courseEndDate?.toLocaleDateString("en-US", {
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
                <div className="w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      course
                    </Label>
                    <Input
                      autoComplete="off"
                      name="course"
                      value={courseHistory[index]?.course || ""}
                      onChange={(e) => {
                        setCourse(index, e.target.value);
                      }}
                    />
                  </div>
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      institution
                    </Label>
                    <Input
                      autoComplete="off"
                      name="courseInstitution"
                      value={courseHistory[index]?.courseInstitution || ""}
                      onChange={(e) => {
                        setCourseInstitution(index, e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="lg:w-1/2 w-full flex sm:flex-row flex-col lg:gap-2 gap-8">
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
                              !courseHistory[index]?.courseStartDate &&
                                "text-charcoal"
                            )}
                          >
                            {courseHistory[index]?.courseStartDate ? (
                              format(
                                courseHistory[index]?.courseStartDate,
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
                            selected={courseHistory[index]?.courseStartDate}
                            onSelect={(date) => setCourseStartDate(index, date)}
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
                              !courseHistory[index]?.courseEndDate &&
                                "text-charcoal"
                            )}
                          >
                            {courseHistory[index]?.courseEndDate ? (
                              format(courseHistory[index]?.courseEndDate, "PP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={courseHistory[index]?.courseEndDate}
                            onSelect={(date) => setCourseEndDate(index, date)}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div>
                <TrashIcon className="hover:text-aquamarine-100" />
              </div>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl">
                  Delete Entry
                </AlertDialogTitle>
                <AlertDialogDescription className="text-base text-charcoal">
                  Are you sure want to delete this entry ?
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter className="sm:space-y-0 space-y-4 space-y-reverse">
                <AlertDialogAction
                  className="bg-aquamarine-100 hover:bg-aquamarine-200 text-white hover:text-white uppercase text-base font-light min-w-[91.5px]"
                  onClick={() => {
                    handleDeleteDiv(index);
                    setCourse(index, "");
                    setCourseEndDate(index, null);
                    setCourseStartDate(index, null);
                    setCourseInstitution(index, "");
                  }}
                >
                  delete
                </AlertDialogAction>
                <AlertDialogCancel className="text-black bg-transparent border-charcoal uppercase text-base font-light min-w-[91.5px]">
                  cancel
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ))}
    </>
  );
};

export default SortableCourse;
