"use client";
import React, { Dispatch, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { TrashIcon } from "lucide-react";
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

interface SortableLanguageProps {
  sortableLanguageList: any;
  setSortableLanguageList: any;
  setToggledLanguage: any;
  toggledLanguage: any;
}

const SortableLanguage: React.FC<SortableLanguageProps> = ({
  sortableLanguageList,
  setSortableLanguageList,
  setToggledLanguage,
  toggledLanguage,
}) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [charCount, SetCharCount] = useState(0);

  const handleDeleteDiv = (index: any) => {
    setSortableLanguageList((sortableLanguageList: any[]) =>
      sortableLanguageList.filter((_: any, i: any) => i !== index)
    );
    if (sortableLanguageList.length <= 1) {
      setToggledLanguage(!toggledLanguage);
    }
  };

  return (
    <>
      {sortableLanguageList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-black">Not specified</span>
                  <span className="block text-charcoal">Not specified</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8">
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      job title
                    </Label>
                    <Input name="employmentJobTitle" />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      employer
                    </Label>
                    <Input name="employer" />
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

export default SortableLanguage;
