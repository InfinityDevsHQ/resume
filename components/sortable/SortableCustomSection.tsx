"use client";
import React, { Dispatch, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
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
      {sortableCustomSectionList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-black text-left">
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
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      activity name, job title, book title etc
                    </Label>
                    <Input
                      value={customHistory[index]?.customTitle || ""}
                      onChange={(e) => {
                        setCustomTitle(index, e.target.value);
                      }}
                      name="customTitle"
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      city
                    </Label>
                    <Input
                      value={customHistory[index]?.customCity || ""}
                      onChange={(e) => {
                        setCustomCity(index, e.target.value);
                      }}
                      name="customCity"
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
                  <Textarea
                    name="customDescription"
                    className="capitalize font-normal text-sm text-charcoal resize-none"
                    rows={6}
                    value={customHistory[index]?.customDescription || ""}
                    onChange={(e) => {
                      setCustomDescription(index, e.target.value);
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div
            onClick={() => {
              handleDeleteDiv(index);
              setCustomCity(index, "");
              setCustomDescription(index, "");
              setCustomEndDate(index, null);
              setCustomStartDate(index, null);
              setCustomTitle(index, "");
            }}
          >
            <TrashIcon className="hover:text-aquamarine-100" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SortableCustomSection;
