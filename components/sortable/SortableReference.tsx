"use client";
import React, { Dispatch, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TrashIcon } from "lucide-react";
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
import { useReference } from "@/statemanagement/useReference";

interface SortableReferenceProps {
  sortableReferenceList: any;
  setSortableReferenceList: any;
  setToggledReference: any;
  toggledReference: any;
}

const SortableReference: React.FC<SortableReferenceProps> = ({
  sortableReferenceList,
  setSortableReferenceList,
  setToggledReference,
  toggledReference,
}) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [charCount, SetCharCount] = useState(0);

  const handleDeleteDiv = (index: any) => {
    setSortableReferenceList((sortableReferenceList: any[]) =>
      sortableReferenceList.filter((_: any, i: any) => i !== index)
    );
    if (sortableReferenceList.length <= 1) {
      setToggledReference(!toggledReference);
    }
  };

  const {
    referenceHistory,
    setReferenceCompany,
    setReferenceEmail,
    setReferenceFullName,
    setReferencePhone,
  } = useReference();

  return (
    <>
      {sortableReferenceList.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full flex gap-x-3 items-center justify-between"
        >
          <Accordion type="multiple" className="w-full">
            <AccordionItem value={`item-${index}`} className="border px-5">
              <AccordionTrigger className="capitalize text-base font-medium hover:no-underline">
                <div>
                  <span className="block text-black text-left">
                    {referenceHistory[index]?.referenceFullName
                      ? referenceHistory[index]?.referenceFullName
                      : "Not specified"}
                  </span>
                  <span className="block text-charcoal text-left">
                    {referenceHistory[index]?.referenceCompany
                      ? referenceHistory[index]?.referenceCompany
                      : "Not specified"}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-8">
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      referent&apos;s full name
                    </Label>
                    <Input
                      value={referenceHistory[index]?.referenceFullName || ""}
                      onChange={(e) => {
                        setReferenceFullName(index, e.target.value);
                      }}
                      name="referenceFullName"
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      company
                    </Label>
                    <Input
                      value={referenceHistory[index]?.referenceCompany || ""}
                      onChange={(e) => {
                        setReferenceCompany(index, e.target.value);
                      }}
                      name="referenceCompany"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-start items-center gap-8">
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      phone
                    </Label>
                    <Input
                      value={referenceHistory[index]?.referencePhone || ""}
                      onChange={(e) => {
                        setReferencePhone(index, e.target.value);
                      }}
                      name="referencePhone"
                    />
                  </div>
                  <div className="w-1/2 space-y-2">
                    <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                      email
                    </Label>
                    <Input
                      value={referenceHistory[index]?.referenceEmail || ""}
                      onChange={(e) => {
                        setReferenceEmail(index, e.target.value);
                      }}
                      name="referenceEmail"
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

              <AlertDialogFooter>
                <AlertDialogAction
                  className="bg-aquamarine-100 hover:bg-aquamarine-200 text-white hover:text-white uppercase text-base font-light min-w-[91.5px]"
                  onClick={() => {
                    handleDeleteDiv(index);
                    setReferenceCompany(index, "");
                    setReferenceEmail(index, "");
                    setReferenceFullName(index, "");
                    setReferencePhone(index, "");
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

export default SortableReference;
