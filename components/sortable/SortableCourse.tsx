"use client";
import React, { Dispatch, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, Delete, Frown, Smile, TrashIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { format } from "date-fns";
import { Textarea } from "../ui/textarea";
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
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [charCount, SetCharCount] = useState(0);

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
                  <span className="block text-black text-left">
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
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      course
                    </Label>
                    <Input
                      name="course"
                      value={courseHistory[index]?.course || ""}
                      onChange={(e) => {
                        setCourse(index, e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      institution
                    </Label>
                    <Input
                      name="courseInstitution"
                      value={courseHistory[index]?.courseInstitution || ""}
                      onChange={(e) => {
                        setCourseInstitution(index, e.target.value);
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
          <div
            onClick={() => {
              handleDeleteDiv(index);
              setCourse(index, "");
              setCourseEndDate(index, null);
              setCourseStartDate(index, null);
              setCourseInstitution(index, "");
            }}
          >
            <TrashIcon className="hover:text-aquamarine-100" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SortableCourse;
