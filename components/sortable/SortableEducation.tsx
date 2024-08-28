"use client";
import React, { Dispatch, useState } from "react";
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
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { useEducation } from "@/statemanagement/useEducation";

interface SortableEducationProps {
  sortableEducationList: any;
  setSortableEducationList: any;
}

const SortableEducation: React.FC<SortableEducationProps> = ({
  sortableEducationList,
  setSortableEducationList,
}) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [charCount, SetCharCount] = useState(0);

  const handleDeleteDiv = (index: any) => {
    setSortableEducationList((sortableEducationList: any[]) =>
      sortableEducationList.filter((_: any, i: any) => i !== index)
    );
  };

  const {
    educationHistory,
    setEducationDegree,
    setEducationDescription,
    setEducationCity,
    setEducationEndDate,
    setEducationSchool,
    setEducationStartDate,
  } = useEducation();

  return (
    <>
      {sortableEducationList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-black text-left">
                    {educationHistory[index]?.educationSchool ||
                    educationHistory[index]?.educationDegree ? (
                      <>
                        {educationHistory[index]?.educationDegree && (
                          <>{educationHistory[index]?.educationDegree} at</>
                        )}{" "}
                        {educationHistory[index]?.educationSchool}
                      </>
                    ) : (
                      "Not specified"
                    )}
                  </span>
                  <span className="block text-charcoal text-left">
                    {educationHistory[index]?.educationEndDate ||
                    educationHistory[index]?.educationStartDate ? (
                      <>
                        {educationHistory[index]?.educationStartDate &&
                          educationHistory[
                            index
                          ]?.educationStartDate?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}{" "}
                        {educationHistory[index]?.educationEndDate && (
                          <>
                            -{" "}
                            {educationHistory[
                              index
                            ]?.educationEndDate?.toLocaleDateString("en-US", {
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
                <div className="w-full sm:flex-row flex flex-col justify-start items-center gap-8">
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      school
                    </Label>
                    <Input
                      autoComplete="off"
                      name="educationSchool"
                      value={educationHistory[index]?.educationSchool || ""}
                      onChange={(e) => {
                        setEducationSchool(index, e.target.value);
                      }}
                    />
                  </div>
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      degree
                    </Label>
                    <Input
                      autoComplete="off"
                      name="educationDegree"
                      value={educationHistory[index]?.educationDegree || ""}
                      onChange={(e) => {
                        setEducationDegree(index, e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full md:flex-row flex flex-col justify-start items-center gap-8">
                  <div className="md:w-1/2 w-full flex sm:flex-row flex-col md:gap-2 gap-8">
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
                              !educationHistory[index]?.educationStartDate &&
                                "text-charcoal"
                            )}
                          >
                            {educationHistory[index]?.educationStartDate ? (
                              format(
                                educationHistory[index]?.educationStartDate,
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
                            selected={
                              educationHistory[index]?.educationStartDate
                            }
                            onSelect={(date) =>
                              setEducationStartDate(index, date)
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
                              !educationHistory[index]?.educationEndDate &&
                                "text-charcoal"
                            )}
                          >
                            {educationHistory[index]?.educationEndDate ? (
                              format(
                                educationHistory[index]?.educationEndDate,
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
                            selected={educationHistory[index]?.educationEndDate}
                            onSelect={(date) =>
                              setEducationEndDate(index, date)
                            }
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      city
                    </Label>
                    <Input
                      autoComplete="off"
                      value={educationHistory[index]?.educationCity || ""}
                      onChange={(e) => {
                        setEducationCity(index, e.target.value);
                      }}
                      name="educationCity"
                    />
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <Textarea
                    name="educationDescription"
                    className="capitalize font-normal text-sm text-charcoal resize-none"
                    rows={6}
                    value={educationHistory[index]?.educationDescription || ""}
                    onChange={(e) => {
                      SetCharCount(e.target.value.length);
                      setEducationDescription(index, e.target.value);
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <p className="font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      Write 200+ characters to increase interview chances
                    </p>
                    <p className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      {charCount} / 200+
                      {charCount >= 200 ? (
                        <Smile className="text-green-400" />
                      ) : (
                        <Frown className="text-red-400" />
                      )}
                    </p>
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
                    setEducationDegree(index, "");
                    setEducationDescription(index, "");
                    setEducationStartDate(index, null);
                    setEducationEndDate(index, null);
                    setEducationSchool(index, "");
                    setEducationCity(index, "");
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

export default SortableEducation;
