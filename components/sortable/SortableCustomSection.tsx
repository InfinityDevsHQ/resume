"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, TrashIcon } from "lucide-react";
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
import { useCustom } from "@/statemanagement/useCustom";

interface SortableCustomSectionProps {
  sortableCustomSectionList: any;
  setSortableCustomSectionList: any;
  setToggledCustomSection: any;
  toggledCustomSection: any;
}

const SortableCustomSection: React.FC<SortableCustomSectionProps> = ({
  sortableCustomSectionList,
  setSortableCustomSectionList,
  setToggledCustomSection,
  toggledCustomSection,
}) => {
  const mdParser = new MarkdownIt();
  const handleDeleteDiv = (index: any) => {
    setSortableCustomSectionList((sortableCustomSectionList: any[]) =>
      sortableCustomSectionList.filter((_: any, i: any) => i !== index)
    );
    if (sortableCustomSectionList.length <= 1) {
      setToggledCustomSection(!toggledCustomSection);
    }
  };

  const {
    customHistory,
    setCustomCity,
    setCustomDescription,
    setCustomEndDate,
    setCustomStartDate,
    setCustomTitle,
  } = useCustom();

  return (
    <>
      {sortableCustomSectionList.map((index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-gray-800 text-left">
                    {customHistory[index]?.customTitle ||
                    customHistory[index]?.customCity ? (
                      <>
                        {customHistory[index]?.customTitle}{" "}
                        {customHistory[index]?.customCity && (
                          <>, {customHistory[index]?.customCity}</>
                        )}
                      </>
                    ) : (
                      "Not specified"
                    )}
                  </span>
                  <span className="block text-charcoal text-left">
                    {customHistory[index]?.customEndDate ||
                    customHistory[index]?.customStartDate ? (
                      <>
                        {customHistory[index]?.customStartDate &&
                          customHistory[
                            index
                          ]?.customStartDate?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}{" "}
                        {customHistory[index]?.customEndDate && (
                          <>
                            -{" "}
                            {customHistory[
                              index
                            ]?.customEndDate?.toLocaleDateString("en-US", {
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
                    <Label className="capitalize font-normal md:text-sm sm:text-xs text-sm text-charcoal flex gap-2 justify-start items-center">
                      activity name, job title, book title etc
                    </Label>
                    <Input
                      autoComplete="off"
                      value={customHistory[index]?.customTitle || ""}
                      onChange={(e) => {
                        setCustomTitle(index, e.target.value);
                      }}
                      name="customTitle"
                    />
                  </div>
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      city
                    </Label>
                    <Input
                      autoComplete="off"
                      value={customHistory[index]?.customCity || ""}
                      onChange={(e) => {
                        setCustomCity(index, e.target.value);
                      }}
                      name="customCity"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="md:w-1/2 w-full flex md:flex-row flex-col gap-2">
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
                              !customHistory[index]?.customStartDate &&
                                "text-charcoal"
                            )}
                          >
                            {customHistory[index]?.customStartDate ? (
                              format(
                                customHistory[index]?.customStartDate,
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
                            selected={customHistory[index]?.customStartDate}
                            onSelect={(date) => setCustomStartDate(index, date)}
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
                              !customHistory[index]?.customEndDate &&
                                "text-charcoal"
                            )}
                          >
                            {customHistory[index]?.customEndDate ? (
                              format(customHistory[index]?.customEndDate, "PP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={customHistory[index]?.customEndDate}
                            onSelect={(date) => setCustomEndDate(index, date)}
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
                <div className="w-full space-y-2">
                  <MdEditor
                    name="activityDescription"
                    style={{ height: "170px", width: "full" }}
                    renderHTML={(text) => mdParser.render(text)}
                    value={customHistory[index]?.customDescription || ""}
                    onChange={(e) => {
                      setCustomDescription(index, e.text);
                    }}
                  />
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
                    setCustomCity(index, "");
                    setCustomDescription(index, "");
                    setCustomEndDate(index, null);
                    setCustomStartDate(index, null);
                    setCustomTitle(index, "");
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

export default SortableCustomSection;
