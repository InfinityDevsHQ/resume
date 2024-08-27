"use client";
import React, { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { useInternship } from "@/statemanagement/useInternship";

interface SortableInternshipProps {
  sortableInternshipList: any;
  setSortableInternshipList: any;
  toggledInternship: any;
  setToggledInternship: any;
}

const SortableInternship: React.FC<SortableInternshipProps> = ({
  sortableInternshipList,
  setSortableInternshipList,
  toggledInternship,
  setToggledInternship,
}) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [charCount, SetCharCount] = useState(0);

  const handleDeleteDiv = (index: any) => {
    setSortableInternshipList((sortableInternshipList: any[]) =>
      sortableInternshipList.filter((_: any, i: any) => i !== index)
    );
    if (sortableInternshipList.length <= 1) {
      setToggledInternship(!toggledInternship);
    }
  };

  const {
    internshipHistory,
    setInternshipCity,
    setInternshipDescription,
    setInternshipEmployer,
    setInternshipEndDate,
    setInternshipStartDate,
    setInternshipJobTitle,
  } = useInternship();

  return (
    <>
      {sortableInternshipList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-black text-left">
                    {internshipHistory[index]?.internshipJobTitle ||
                    internshipHistory[index]?.internshipEmployer ? (
                      <>
                        {internshipHistory[index]?.internshipJobTitle}{" "}
                        {internshipHistory[index]?.internshipEmployer && (
                          <>- {internshipHistory[index]?.internshipEmployer}</>
                        )}
                      </>
                    ) : (
                      "Not specified"
                    )}
                  </span>
                  <span className="block text-charcoal text-left">
                    {internshipHistory[index]?.internshipEndDate ||
                    internshipHistory[index]?.internshipStartDate ? (
                      <>
                        {internshipHistory[index]?.internshipStartDate &&
                          internshipHistory[
                            index
                          ]?.internshipStartDate?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}{" "}
                        {internshipHistory[index]?.internshipEndDate && (
                          <>
                            -{" "}
                            {internshipHistory[
                              index
                            ]?.internshipEndDate?.toLocaleDateString("en-US", {
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
                      job title
                    </Label>
                    <Input
                      value={internshipHistory[index]?.internshipJobTitle || ""}
                      onChange={(e) => {
                        setInternshipJobTitle(index, e.target.value);
                      }}
                      name="internshipJobTitle"
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      employer
                    </Label>
                    <Input
                      value={internshipHistory[index]?.internshipEmployer || ""}
                      onChange={(e) => {
                        setInternshipEmployer(index, e.target.value);
                      }}
                      name="internshipEmployer"
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
                              !internshipHistory[index]?.internshipStartDate &&
                                "text-charcoal"
                            )}
                          >
                            {internshipHistory[index]?.internshipStartDate ? (
                              format(
                                internshipHistory[index]?.internshipStartDate,
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
                              internshipHistory[index]?.internshipStartDate
                            }
                            onSelect={(date) =>
                              setInternshipStartDate(index, date)
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
                              !internshipHistory[index]?.internshipEndDate &&
                                "text-charcoal"
                            )}
                          >
                            {internshipHistory[index]?.internshipEndDate ? (
                              format(
                                internshipHistory[index]?.internshipEndDate,
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
                              internshipHistory[index]?.internshipEndDate
                            }
                            onSelect={(date) => {
                              setInternshipEndDate(index, date);
                            }}
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
                      value={internshipHistory[index]?.internshipCity || ""}
                      onChange={(e) => {
                        setInternshipCity(index, e.target.value);
                      }}
                      name="internshipCity"
                    />
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <Textarea
                    name="internshipDescription"
                    className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center resize-none"
                    rows={6}
                    value={
                      internshipHistory[index]?.internshipDescription || ""
                    }
                    onChange={(e) => {
                      SetCharCount(e.target.value.length);
                      setInternshipDescription(index, e.target.value);
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

              <AlertDialogFooter>
                <AlertDialogAction
                  className="bg-aquamarine-100 hover:bg-aquamarine-200 text-white hover:text-white uppercase text-base font-light min-w-[91.5px]"
                  onClick={() => {
                    handleDeleteDiv(index);
                    setInternshipCity(index, "");
                    setInternshipDescription(index, "");
                    setInternshipEmployer(index, "");
                    setInternshipEndDate(index, null);
                    setInternshipJobTitle(index, "");
                    setInternshipStartDate(index, null);
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

export default SortableInternship;
