"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@radix-ui/react-separator";
import { useLanguage } from "@/statemanagement/useLanguage";
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
  const handleDeleteDiv = (index: any) => {
    setSortableLanguageList((sortableLanguageList: any[]) =>
      sortableLanguageList.filter((_: any, i: any) => i !== index)
    );
    if (sortableLanguageList.length <= 1) {
      setToggledLanguage(!toggledLanguage);
    }
  };

  const { languageHistory, setLanguageLevel, setLanguageTitle } = useLanguage();

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
                  <span className="block text-black text-left">
                    {languageHistory[index]?.languageTitle
                      ? languageHistory[index]?.languageTitle
                      : "Not specified"}
                  </span>
                  <span className="block text-charcoal text-left">
                    {languageHistory[index]?.languageLevel
                      ? (languageHistory[index]?.languageLevel == "33" &&
                          "good command") ||
                        (languageHistory[index]?.languageLevel == "66" &&
                          "high proficient") ||
                        (languageHistory[index]?.languageLevel == "100" &&
                          "native speaker")
                      : "native speaker"}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8">
                <div className="w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      language
                    </Label>
                    <Input
                      autoComplete="off"
                      value={languageHistory[index]?.languageTitle || ""}
                      onChange={(e) => {
                        setLanguageTitle(index, e.target.value);
                      }}
                      name="languageTitle"
                    />
                  </div>
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Tabs
                      defaultValue="100"
                      className="w-full"
                      onValueChange={(value) => {
                        setLanguageLevel(index, value);
                      }}
                    >
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="33"
                      >
                        Level --{" "}
                        <span className="text-[#48ba75]">good command</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="66"
                      >
                        Level --{" "}
                        <span className="text-[#f9ba44]">high proficient</span>
                      </TabsContent>
                      <TabsContent
                        className="capitalize font-normal text-sm text-charcoal"
                        value="100"
                      >
                        Level --{" "}
                        <span className="text-[#9ba1fb]">native speaker</span>
                      </TabsContent>
                      <TabsList className="w-full flex h-12 p-0">
                        <TabsTrigger
                          className="w-1/3 h-12  data-[state=active]:bg-[#48ba75] rounded-md"
                          value="33"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal w-[1px]"
                        />
                        <TabsTrigger
                          className="w-1/3 h-12  data-[state=active]:bg-[#f9ba44] rounded-md"
                          value="66"
                        ></TabsTrigger>
                        <Separator
                          orientation="vertical"
                          className="h-[40%] bg-charcoal w-[1px]"
                        />
                        <TabsTrigger
                          className="w-1/3 h-12  data-[state=active]:bg-[#9ba1fb] rounded-md"
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
                    setLanguageLevel(index, "");
                    setLanguageTitle(index, "");
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

export default SortableLanguage;
