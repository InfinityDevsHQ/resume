"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Frown, Plus, Smile } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { HelpCircle } from "lucide-react";
import { UploadIcon } from "./Icons";
import { useProfessionalDetails } from "@/store/usePersonalDetails";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import SortableEmployment from "@/components/sortable/SortableEmployment";
import { Button } from "@/components/ui/button";

const FormSection = () => {
  const form = useForm();
  const [toggled, setToggled] = useState(false);
  const [charCount, SetCharCount] = useState(0);
  const [sortableEmploymentList, setSortableEmploymentList] = useState<
    number[]
  >([1]);

  const {
    setAddress,
    setCity,
    setCountryName,
    setDateOfBirth,
    setEmail,
    setFirstName,
    setJobTitle,
    setLastName,
    setNationality,
    setPhone,
    setPlaceOfBirth,
    setDrivingLicense,
    setPostalCode,
    setSelectedImage,
    selectedImage,
  } = useProfessionalDetails();

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleToggled = () => {
    setToggled(!toggled);
  };

  const handleAddSortableEmploymentList = () => {
    setSortableEmploymentList((sortableEmploymentList) => [
      ...sortableEmploymentList,
      sortableEmploymentList.length + 1,
    ]);
  };

  return (
    <>
      <div className="bg-white w-1/2 h-full p-12">
        <Form {...form}>
          <form>
            {/* Resume Title */}
            <div className="max-w-xs mx-auto mb-5">
              <Input
                className="bg-transparent text-2xl text-center placeholder:text-2xl"
                placeholder="Untitled"
                autoComplete="off"
              />
            </div>
            {/* Personal Details */}
            <div className="flex flex-col gap-4 mb-7">
              <div>
                <h1 className="text-lg font-semibold text-black/85">
                  Personal Details
                </h1>
              </div>
              <div className="w-full flex justify-start items-center gap-8">
                <div className="w-1/2 space-y-2">
                  <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                    wanted job title{""}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle
                            height={16}
                            width={16}
                            className="text-aquamarine-100 hover:text-aquamarine-200 text-xl"
                          />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-60 w-full bg-black text-white font-normal text-xs">
                          Add a title like &apos;Senior Marketer&apos; or
                          &apos;Sales Executive&apos; that quickly describe your
                          overall experience or the type of role you&apos;re
                          applying to
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Input
                    name="jobTitle"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                <div className="w-1/2 space-y-2">
                  <div className="flex justify-start items-center gap-2">
                    {selectedImage ? (
                      <div className="size-16">
                        <Image
                          src={selectedImage}
                          width={60}
                          height={60}
                          className="w-full"
                          alt="avatar"
                        />
                      </div>
                    ) : (
                      <UploadIcon className="w-9" />
                    )}

                    <Label className="capitalize font-normal text-sm text-aquamarine-100 hover:text-aquamarine-200 cursor-pointer">
                      Upload Photo
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </Label>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-8">
                <div className="w-1/2 space-y-2">
                  <Label className="capitalize font-normal text-sm text-charcoal">
                    first name
                  </Label>
                  <Input
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="w-1/2 space-y-2">
                  <Label className="capitalize font-normal text-sm text-charcoal">
                    last name
                  </Label>
                  <Input
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex justify-start items-center gap-8">
                <div className="w-1/2 space-y-2">
                  <Label className="capitalize font-normal text-sm text-charcoal">
                    email
                  </Label>
                  <Input
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-1/2 space-y-2">
                  <Label className="capitalize font-normal text-sm text-charcoal">
                    phone
                  </Label>
                  <Input
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-0">
                  <AccordionContent className="flex flex-col gap-4">
                    <div className="w-full flex justify-start items-center gap-8">
                      <div className="w-1/2 space-y-2">
                        <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                          country name{""}
                        </Label>
                        <Input
                          name="countryName"
                          onChange={(e) => setCountryName(e.target.value)}
                        />
                      </div>
                      <div className="w-1/2 space-y-2">
                        <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                          city{""}
                        </Label>
                        <Input
                          name="city"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-8">
                      <div className="w-1/2 space-y-2">
                        <Label className="capitalize font-normal text-sm text-charcoal">
                          address
                        </Label>
                        <Input
                          name="address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="w-1/2 space-y-2">
                        <Label className="capitalize font-normal text-sm text-charcoal">
                          postal code
                        </Label>
                        <Input
                          name="postalCode"
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-8">
                      <div className="w-1/2 space-y-2">
                        <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                          driving license{""}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle
                                  height={16}
                                  width={16}
                                  className="text-aquamarine-100 hover:text-aquamarine-200 text-xl"
                                />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-60 w-full bg-black text-white font-normal text-xs">
                                Include this section if our proffession is
                                requires a certian type of license. If not,
                                leave it blank.
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          name="drivingLicense"
                          onChange={(e) => setDrivingLicense(e.target.value)}
                        />
                      </div>
                      <div className="w-1/2 space-y-2">
                        <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                          nationality{""}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle
                                  height={16}
                                  width={16}
                                  className="text-aquamarine-100 hover:text-aquamarine-200 text-xl"
                                />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-60 w-full bg-black text-white font-normal text-xs">
                                Include your nationality only if it relevent to
                                your postion. In most cases, leave this blank.
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          name="nationality"
                          onChange={(e) => setNationality(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-8">
                      <div className="w-1/2 space-y-2">
                        <Label className="capitalize font-normal text-sm text-charcoal">
                          place of birth{""}
                        </Label>
                        <Input
                          name="placeOfBirth"
                          onChange={(e) => setPlaceOfBirth(e.target.value)}
                        />
                      </div>
                      <div className="w-1/2 space-y-2">
                        <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                          date of birth{""}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle
                                  height={16}
                                  width={16}
                                  className="text-aquamarine-100 hover:text-aquamarine-200 text-xl"
                                />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-60 w-full bg-black text-white font-normal text-xs">
                                Add your date of birth only if it is relevent
                                requirement for your position. In most cases,
                                leave this blank.
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          name="dateOfBirth"
                          onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                  <AccordionTrigger
                    onClick={handleToggled}
                    className="max-w-[180px] text-aquamarine-100 hover:text-aquamarine-200 capitalize text-sm font-normal hover:no-underline"
                  >
                    {toggled
                      ? "hide additional details"
                      : "edit additional details"}
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Professional Summary */}
            <div className="flex flex-col gap-4 mb-7">
              <div>
                <h1 className="text-lg font-semibold text-black/85">
                  Professional Summary
                </h1>
              </div>
              <div className="w-full space-y-2">
                <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                  Write 2-4 short & energetic sentences to interest the reader!
                  Mention your role, experience & most importantly - your
                  biggest achievements, best qualities and skills.
                </Label>
                <Textarea
                  name="jobTitle"
                  className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center"
                  rows={6}
                  maxLength={600}
                  onChange={(e) => SetCharCount(e.target.value.length)}
                />
                <div className="flex justify-between items-center">
                  <p className="font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                    Write 400-600 characters to increase interview chances
                  </p>
                  <p className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                    {charCount} / 400+
                    {charCount >= 400 ? (
                      <Smile className="text-green-400" />
                    ) : (
                      <Frown className="text-red-400" />
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* Employment History */}
            <div className="flex flex-col gap-4 mb-7">
              <div>
                <h1 className="text-lg font-semibold text-black/85">
                  Employment History
                </h1>
              </div>
              <div className="w-full space-y-2">
                <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                  Show your relevant experience (last 10 years). Use bullet
                  point to note your achievement. if possible - use no./facts
                  (Achived X, measured by Y. by doing Z)
                </Label>
                <div
                  className={`${
                    sortableEmploymentList.length > 1 ? "space-y-4" : ""
                  }`}
                >
                  <SortableEmployment
                    sortableEmploymentList={sortableEmploymentList}
                    setSortableEmploymentList={setSortableEmploymentList}
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={handleAddSortableEmploymentList}
                  type="button"
                  className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                >
                  <Plus className="text-aquamarine-100" />
                  add employment
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default FormSection;
