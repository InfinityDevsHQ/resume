"use client";
import React, { useState } from "react";
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
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";

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
import { useEmploymentHistory } from "@/statemanagement/useEmploymentHistory";

interface SortableEmploymentProps {
  sortableEmploymentList: any;
  setSortableEmploymentList: any;
}

const SortableEmployment: React.FC<SortableEmploymentProps> = ({
  sortableEmploymentList,
  setSortableEmploymentList,
}) => {
  const mdParser = new MarkdownIt();
  const [charCount, SetCharCount] = useState(0);

  const handleDeleteDiv = (index: any) => {
    setSortableEmploymentList((sortableEmploymentList: any[]) =>
      sortableEmploymentList.filter((_: any, i: any) => i !== index)
    );
  };

  const {
    setEmployer,
    setEmploymentDescription,
    setEmploymentJobTitle,
    setEmploymentCity,
    setEmploymentEndDate,
    setEmploymentStartDate,
    employmentHistory,
  } = useEmploymentHistory();

  console.log(sortableEmploymentList, "there");
  return (
    <>
      {sortableEmploymentList.map((index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-gray-800 text-left">
                    {employmentHistory[index]?.employmentJobTitle ||
                    employmentHistory[index]?.employer ? (
                      <>
                        {employmentHistory[index]?.employmentJobTitle}{" "}
                        {employmentHistory[index]?.employer && (
                          <>- {employmentHistory[index]?.employer}</>
                        )}
                      </>
                    ) : (
                      "Not specified"
                    )}
                  </span>
                  <span className="block text-charcoal text-left">
                    {employmentHistory[index]?.employmentEndDate ||
                    employmentHistory[index]?.employmentStartDate ? (
                      <>
                        {employmentHistory[index]?.employmentStartDate &&
                          employmentHistory[
                            index
                          ]?.employmentStartDate?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}{" "}
                        {employmentHistory[index]?.employmentEndDate && (
                          <>
                            -{" "}
                            {employmentHistory[
                              index
                            ]?.employmentEndDate?.toLocaleDateString("en-US", {
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
              <AccordionContent className="flex flex-col gap-4">
                <div className="w-full flex sm:flex-row flex-col justify-start items-center gap-4">
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      job title
                    </Label>
                    <Input
                      autoComplete="off"
                      name="employmentJobTitle"
                      value={employmentHistory[index]?.employmentJobTitle || ""}
                      onChange={(e) => {
                        setEmploymentJobTitle(index, e.target.value);
                      }}
                    />
                  </div>
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      employer
                    </Label>
                    <Input
                      autoComplete="off"
                      name="employer"
                      value={employmentHistory[index]?.employer || ""}
                      onChange={(e) => {
                        setEmployer(index, e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex md:flex-row flex-col justify-start items-center gap-4">
                  <div className="md:w-1/2 w-full flex sm:flex-row flex-col md:gap-2 gap-4">
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
                              !employmentHistory[index]?.employmentStartDate &&
                                "text-charcoal"
                            )}
                          >
                            {employmentHistory[index]?.employmentStartDate ? (
                              format(
                                employmentHistory[index]?.employmentStartDate,
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
                              employmentHistory[index]?.employmentStartDate
                            }
                            onSelect={(date) =>
                              setEmploymentStartDate(index, date)
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
                              !employmentHistory[index]?.employmentEndDate &&
                                "text-charcoal"
                            )}
                          >
                            {employmentHistory[index]?.employmentEndDate ? (
                              format(
                                employmentHistory[index]?.employmentEndDate,
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
                              employmentHistory[index]?.employmentEndDate
                            }
                            onSelect={(date) =>
                              setEmploymentEndDate(index, date)
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
                      name="employmentCity"
                      value={employmentHistory[index]?.employmentCity || ""}
                      onChange={(e) => {
                        setEmploymentCity(index, e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <MdEditor
                    name="activityDescription"
                    style={{ height: "170px", width: "full" }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={(e) => {
                      SetCharCount(e.text.length);
                      setEmploymentDescription(index, e.html);
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
                    setEmployer(index, "");
                    setEmploymentCity(index, "");
                    setEmploymentDescription(index, "");
                    setEmploymentEndDate(index, null);
                    setEmploymentJobTitle(index, "");
                    setEmploymentStartDate(index, null);
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

export default SortableEmployment;
