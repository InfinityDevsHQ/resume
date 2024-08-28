"use client";
import React, { Dispatch, useState } from "react";
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
import { useWebNSocialLinks } from "@/statemanagement/useWebNSocialLink";

interface SortableWebNSocialLinksProps {
  sortableWebNSocialLinksList: any;
  setSortableWebNSocialLinksList: any;
}

const SortableWebNSocialLinks: React.FC<SortableWebNSocialLinksProps> = ({
  sortableWebNSocialLinksList,
  setSortableWebNSocialLinksList,
}) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [charCount, SetCharCount] = useState(0);

  const handleDeleteDiv = (index: any) => {
    setSortableWebNSocialLinksList((sortableWebNSocialLinksList: any[]) =>
      sortableWebNSocialLinksList.filter((_: any, i: any) => i !== index)
    );
  };

  const { setWebNSocialLink, setWebNSocialLinkLabel, webNSocialLinksHistory } =
    useWebNSocialLinks();

  return (
    <>
      {sortableWebNSocialLinksList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-black text-left">
                    {webNSocialLinksHistory[index]?.webNSocialLinkLabel
                      ? webNSocialLinksHistory[index]?.webNSocialLinkLabel
                      : "Not specified"}
                  </span>
                  <span className="block text-charcoal text-left">
                    {webNSocialLinksHistory[index]?.webNSocialLink
                      ? webNSocialLinksHistory[index]?.webNSocialLink
                      : "Not specified"}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8">
                <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-8">
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      label
                    </Label>
                    <Input
                      autoComplete="off"
                      value={webNSocialLinksHistory[index]?.webNSocialLinkLabel}
                      onChange={(e) => {
                        setWebNSocialLinkLabel(index, e.target.value);
                      }}
                      name="webNSocialLinkLabel"
                    />
                  </div>
                  <div className="sm:w-1/2 w-full space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      link
                    </Label>
                    <Input
                      autoComplete="off"
                      value={webNSocialLinksHistory[index]?.webNSocialLink}
                      onChange={(e) => {
                        setWebNSocialLink(index, e.target.value);
                      }}
                      name="webNSocialLink"
                    />
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
                    setWebNSocialLinkLabel(index, "");
                    setWebNSocialLink(index, "");
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

export default SortableWebNSocialLinks;
