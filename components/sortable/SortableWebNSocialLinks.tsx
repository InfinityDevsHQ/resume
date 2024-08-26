"use client";
import React, { Dispatch, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      label
                    </Label>
                    <Input
                      value={webNSocialLinksHistory[index]?.webNSocialLinkLabel}
                      onChange={(e) => {
                        setWebNSocialLinkLabel(index, e.target.value);
                      }}
                      name="webNSocialLinkLabel"
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      link
                    </Label>
                    <Input
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
          <div
            onClick={() => {
              handleDeleteDiv(index);
              setWebNSocialLinkLabel(index, "");
              setWebNSocialLink(index, "");
            }}
          >
            <TrashIcon className="hover:text-aquamarine-100" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SortableWebNSocialLinks;
