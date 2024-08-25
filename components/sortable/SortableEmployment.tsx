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
import { useEmploymentHistory } from "@/store/useEmploymentHistory";

interface SortableEmploymentProps {
  sortableEmploymentList: any;
  setSortableEmploymentList: any;
}

const SortableEmployment: React.FC<SortableEmploymentProps> = ({
  sortableEmploymentList,
  setSortableEmploymentList,
}) => {
  const [employmentStartDate, setEmploymentStartDate] = useState<Date>();
  const [employmentEndDate, setEmploymentEndDate] = useState<Date>();
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
    setemploymentCity,
    employmentJobTitle,
    employer,
  } = useEmploymentHistory();

  return (
    <>
      {sortableEmploymentList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-black text-left">
                    {employmentJobTitle || employer
                      ? `${employmentJobTitle} - ${employer}`
                      : "Not specified"}
                  </span>
                  <span className="block text-charcoal text-left">
                    {employmentEndDate || employmentStartDate ? (
                      <>
                        {employmentStartDate &&
                          employmentStartDate?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}
                        {" - "}
                        {employmentEndDate &&
                          employmentEndDate?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}
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
                      name="employmentJobTitle"
                      onChange={(e) => {
                        setEmploymentJobTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      employer
                    </Label>
                    <Input
                      name="employer"
                      onChange={(e) => {
                        setEmployer(e.target.value);
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
                              !employmentStartDate && "text-charcoal"
                            )}
                          >
                            {employmentStartDate ? (
                              format(employmentStartDate, "PP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={employmentStartDate}
                            onSelect={setEmploymentStartDate}
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
                              !employmentEndDate && "text-charcoal"
                            )}
                          >
                            {employmentEndDate ? (
                              format(employmentEndDate, "PP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={employmentEndDate}
                            onSelect={setEmploymentEndDate}
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
                      name="employmentCity"
                      onChange={(e) => {
                        setemploymentCity(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="w-full space-y-2">
                  <Textarea
                    name="employemntDiscription"
                    className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center"
                    rows={6}
                    maxLength={400}
                    onChange={(e) => {
                      SetCharCount(e.target.value.length);
                      setEmploymentDescription(e.target.value);
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
          <div onClick={() => handleDeleteDiv(index)}>
            <TrashIcon className="hover:text-aquamarine-100" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SortableEmployment;
