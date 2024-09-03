"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
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
import { useSkills } from "@/statemanagement/useSkills";
import SkillsBadge from "../site/home/SkillsBadge";

interface SortableSkillsProps {
  sortableSkillsList: any;
  setSortableSkillsList: any;
  skillsHistory: any;
  setSkillsTitle: any;
  setSkillsLevel: any;
  setClickedBadges: any;
}

const SortableSkills: React.FC<SortableSkillsProps> = ({
  sortableSkillsList,
  setSortableSkillsList,
  skillsHistory,
  setSkillsTitle,
  setSkillsLevel,
  setClickedBadges,
}) => {
  const handleDeleteDiv = (index: any) => {
    setSortableSkillsList((sortableSkillsList: any[]) =>
      sortableSkillsList.filter((_: any, i: any) => i !== index)
    );
    setClickedBadges(new Set());
  };

  return (
    <>
      {sortableSkillsList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="border px-5"
            >
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-gray-800 text-left">
                    {skillsHistory[index]?.skillsTitle
                      ? skillsHistory[index]?.skillsTitle
                      : "Not specified"}
                  </span>
                  <span className="block text-charcoal text-left">
                    {skillsHistory[index]?.skillsLevel
                      ? (skillsHistory[index]?.skillsLevel == "20" &&
                          "novice") ||
                        (skillsHistory[index]?.skillsLevel == "40" &&
                          "beginner") ||
                        (skillsHistory[index]?.skillsLevel == "60" &&
                          "skillful") ||
                        (skillsHistory[index]?.skillsLevel == "80" &&
                          "experienced") ||
                        (skillsHistory[index]?.skillsLevel == "100" &&
                          "advance")
                      : "skillful"}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8">
                <div className="w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      skill
                    </Label>
                    <Input
                      autoComplete="off"
                      value={skillsHistory[index]?.skillsTitle || ""}
                      onChange={(e) => {
                        setSkillsTitle(index, e.target.value);
                      }}
                      name="skillsTitle"
                    />
                  </div>
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Tabs
                      defaultValue="60"
                      className="w-full"
                      onValueChange={(value) => {
                        setSkillsLevel(index, value);
                      }}
                    >
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="20"
                      >
                        Level -- <span className="text-[#fe7d8b]">novice</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="40"
                      >
                        Level --{" "}
                        <span className="text-[#f68559]">beginner</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="60"
                      >
                        Level --{" "}
                        <span className="text-[#f9ba44]">skillful</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="80"
                      >
                        Level --{" "}
                        <span className="text-[#48ba75]">experienced</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="100"
                      >
                        Level -- <span className="text-[#9ba1fb]">advance</span>
                      </TabsContent>
                      <TabsList className="w-full flex h-12 p-0">
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#fe7d8b] rounded-md"
                          value="20"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal"
                        />
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#f68559] rounded-md"
                          value="40"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal"
                        />
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#f9ba44] rounded-md"
                          value="60"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal"
                        />
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#48ba75] rounded-md"
                          value="80"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal"
                        />
                        <TabsTrigger
                          className="w-[20%] h-12  data-[state=active]:bg-[#9ba1fb] rounded-md"
                          value="100"
                        ></TabsTrigger>
                      </TabsList>
                    </Tabs>
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
                    setSkillsTitle(index, "");
                    setSkillsLevel(index, "");
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

export default SortableSkills;
