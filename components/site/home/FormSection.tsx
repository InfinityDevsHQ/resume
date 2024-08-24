"use client";
import React, { useState } from "react";
import { ChevronDown, Upload } from "lucide-react";
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

const FormSection = () => {
  const form = useForm();
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
  } = useProfessionalDetails();

  const handleImageChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: any
  ) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
            <div className="flex flex-col gap-4">
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
                    <UploadIcon className="w-9" />
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
                  <AccordionTrigger className="max-w-[170px] text-aquamarine-100 hover:text-aquamarine-200 capitalize text-sm font-normal hover:no-underline">
                    edit additiona details
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default FormSection;
