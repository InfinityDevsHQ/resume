"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface SortableSkillsProps {
  sortableSkillsList: any;
  setSortableSkillsList: any;
}

const SortableSkills: React.FC<SortableSkillsProps> = ({
  sortableSkillsList,
  setSortableSkillsList,
}) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [charCount, SetCharCount] = useState(0);

  const handleDeleteDiv = (index: any) => {
    setSortableSkillsList((sortableSkillsList: any[]) =>
      sortableSkillsList.filter((_: any, i: any) => i !== index)
    );
  };

  return (
    <>
      {sortableSkillsList.map((item: any, index: any) => (
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
                      skill
                    </Label>
                    <Input name="employmentJobTitle" />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Tabs defaultValue="skillful" className="w-full">
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="novice"
                      >
                        Level -- <span className="text-[#fe7d8b]">novice</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="beginner"
                      >
                        Level --{" "}
                        <span className="text-[#f68559]">beginner</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="skillful"
                      >
                        Level --{" "}
                        <span className="text-[#f9ba44]">skillful</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="experienced"
                      >
                        Level --{" "}
                        <span className="text-[#48ba75]">experienced</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="advance"
                      >
                        Level -- <span className="text-[#9ba1fb]">advance</span>
                      </TabsContent>
                      <TabsList className="w-full flex h-12 p-0">
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#fe7d8b] rounded-md"
                          value="novice"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal"
                        />
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#f68559] rounded-md"
                          value="beginner"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal"
                        />
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#f9ba44] rounded-md"
                          value="skillful"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal"
                        />
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#48ba75] rounded-md"
                          value="experienced"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal"
                        />
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#9ba1fb] rounded-md"
                          value="advance"
                        ></TabsTrigger>
                      </TabsList>
                    </Tabs>
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

export default SortableSkills;
