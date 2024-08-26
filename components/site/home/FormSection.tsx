"use client";
import React, { useState } from "react";
import { Frown, Plus, Smile, TrashIcon } from "lucide-react";
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
import {
  ActivitiesIcon,
  CoursesIcon,
  CustomSectionIcon,
  HobbyIcon,
  InternshipIcon,
  LanguageIcon,
  ReferenceIcon,
  UploadIcon,
} from "./Icons";
import { useProfessionalDetails } from "@/statemanagement/usePersonalDetails";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import SortableEmployment from "@/components/sortable/SortableEmployment";
import SortableEducation from "@/components/sortable/SortableEducation";
import SortableCourse from "@/components/sortable/SortableCourse";
import SortableWebNSocialLinks from "@/components/sortable/SortableWebNSocialLinks";
import SortableSkills from "@/components/sortable/SortableSkills";
import { Button } from "@/components/ui/button";
import SkillsBadge from "./SkillsBadge";
import SortableInternship from "@/components/sortable/SortableInternship";
import SortableLanguage from "@/components/sortable/SortableLanguage";
import SortableReference from "@/components/sortable/SortableReference";
import SortableActivities from "@/components/sortable/SortableActivities";
import SortableCustomSection from "@/components/sortable/SortableCustomSection";
import SortableHobbies from "@/components/sortable/SortableHobbies";
import { useProfessionalSummary } from "@/statemanagement/useProfessionalSummary";
import { useHobbies } from "@/statemanagement/useHobbies";

interface FormSecyionProps {
  handleAddSortableEmploymentList: any;
  setSortableEmploymentList: any;
  sortableEmploymentList: any;
  handleAddSortableEducationList: any;
  sortableEducationList: any;
  setSortableEducationList: any;
  handleAddSortableWebNSocialLinksList: any;
  sortableWebNSocialLinksList: any;
  setSortableWebNSocialLinksList: any;
  handleAddSortableCourseList: any;
  sortableCourseList: any;
  setSortableCourseList: any;
  handleAddSortableInternshipList: any;
  sortableInternshipList: any;
  setSortableInternshipList: any;
  handleAddSortableReferenceList: any;
  sortableReferenceList: any;
  setSortableReferenceList: any;
  toggledHobbies: any;
  setToggledHobbies: any;
  handleAddSortableActivitiesList: any;
  sortableActivitiesList: any;
  setSortableActivitiesList: any;
  handleAddSortableCustomSectionList: any;
  sortableCustomSectionList: any;
  setSortableCustomSectionList: any;
}

const FormSection: React.FC<FormSecyionProps> = ({
  handleAddSortableEmploymentList,
  setSortableEmploymentList,
  sortableEmploymentList,
  handleAddSortableEducationList,
  sortableEducationList,
  setSortableEducationList,
  handleAddSortableWebNSocialLinksList,
  sortableWebNSocialLinksList,
  setSortableWebNSocialLinksList,
  handleAddSortableCourseList,
  sortableCourseList,
  setSortableCourseList,
  handleAddSortableInternshipList,
  sortableInternshipList,
  setSortableInternshipList,
  handleAddSortableReferenceList,
  sortableReferenceList,
  setSortableReferenceList,
  toggledHobbies,
  setToggledHobbies,
  handleAddSortableActivitiesList,
  sortableActivitiesList,
  setSortableActivitiesList,
  handleAddSortableCustomSectionList,
  sortableCustomSectionList,
  setSortableCustomSectionList,
}) => {
  const form = useForm();
  const [toggled, setToggled] = useState(false);
  const [charCount, SetCharCount] = useState(0);

  const [sortableLanguageList, setSortableLanguageList] = useState<number[]>(
    []
  );

  const { setHobbiesDescription } = useHobbies();

  const [sortableSkillsList, setSortableSkillsList] = useState<number[]>([]);

  const [disabledBadges, setDisabledBadges] = useState<boolean>(false);
  const [toggledCourse, setToggledCourse] = useState<boolean>(false);
  const [toggledInternship, setToggledInternship] = useState<boolean>(false);
  const [toggledLanguage, setToggledLanguage] = useState<boolean>(false);
  const [toggledReference, setToggledReference] = useState<boolean>(false);
  const [toggledActivities, setToggledActivities] = useState<boolean>(false);
  const [toggledCustomSection, setToggledCustomSection] =
    useState<boolean>(false);

  // Professional Summary

  const { setProfessionalSummary } = useProfessionalSummary();

  // Professional Details

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

  // Handle Avatar Image

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

  // Handle Toggled

  const handleToggled = () => {
    setToggled(!toggled);
  };

  // Handle Delete Hobbies

  const handleDeleteDiv = () => {
    setToggledHobbies(!toggledHobbies);
  };

  // Add More

  const handleAddSortableSkillsList = () => {
    setSortableSkillsList((sortableSkillsList) => [
      ...sortableSkillsList,
      sortableSkillsList.length + 1,
    ]);
    // setDisabledBadges(!disabledBadges);
  };

  const handleAddSortableLanguageList = () => {
    setSortableLanguageList((sortableLanguageList) => [
      ...sortableLanguageList,
      sortableLanguageList.length + 1,
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
                    autoComplete="off"
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
                  name="professionalSummary"
                  className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center resize-none"
                  rows={6}
                  onChange={(e) => {
                    SetCharCount(e.target.value.length);
                    setProfessionalSummary(e.target.value);
                  }}
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
                  {sortableEmploymentList.length > 0
                    ? "add one more employment"
                    : "add employment"}
                </Button>
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-col gap-4 mb-7">
              <div>
                <h1 className="text-lg font-semibold text-black/85">
                  Education
                </h1>
              </div>
              <div className="w-full space-y-2">
                <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                  A varied education on your resume sums up the value that you
                  are learning and background will bring to job
                </Label>
                <div
                  className={`${
                    sortableEducationList.length > 1 && "space-y-4"
                  }`}
                >
                  <SortableEducation
                    sortableEducationList={sortableEducationList}
                    setSortableEducationList={setSortableEducationList}
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={handleAddSortableEducationList}
                  type="button"
                  className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                >
                  <Plus className="text-aquamarine-100" />
                  {sortableEducationList.length > 0
                    ? "add one more education"
                    : "add education"}
                </Button>
              </div>
            </div>

            {/* Website & Social Links */}
            <div className="flex flex-col gap-4 mb-7">
              <div>
                <h1 className="text-lg font-semibold text-black/85">
                  Website & Social Links
                </h1>
              </div>
              <div className="w-full space-y-2">
                <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                  You can add links to websites you wants hiring managers to
                  see! Perphaps It will be a link to your portfoliio, Linkedin
                  profile or personal website
                </Label>
                <div
                  className={`${
                    sortableWebNSocialLinksList.length > 1 && "space-y-4"
                  }`}
                >
                  <SortableWebNSocialLinks
                    sortableWebNSocialLinksList={sortableWebNSocialLinksList}
                    setSortableWebNSocialLinksList={
                      setSortableWebNSocialLinksList
                    }
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={handleAddSortableWebNSocialLinksList}
                  type="button"
                  className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                >
                  <Plus className="text-aquamarine-100" />
                  {sortableWebNSocialLinksList.length > 0
                    ? "add one more link"
                    : "add link"}
                </Button>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-4 mb-7">
              <div>
                <h1 className="text-lg font-semibold text-black/85">Skills</h1>
              </div>
              <div className="w-full space-y-2">
                <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                  Choose 5 of the most important skills to show your talents!
                  Make sure they match the keywords of the job listing if
                  applying via on online system.
                </Label>
                <div>
                  <SkillsBadge
                    setDisabledBadges={setDisabledBadges}
                    disabledBadges={disabledBadges}
                    handleAddSortableSkillsList={handleAddSortableSkillsList}
                  />
                </div>
                <div
                  className={`${sortableSkillsList.length > 1 && "space-y-4"}`}
                >
                  <SortableSkills
                    sortableSkillsList={sortableSkillsList}
                    setSortableSkillsList={setSortableSkillsList}
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={handleAddSortableSkillsList}
                  type="button"
                  className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                >
                  <Plus className="text-aquamarine-100" />
                  {sortableSkillsList.length > 0
                    ? "add one more skill"
                    : "add skill"}
                </Button>
              </div>
            </div>

            {/* Course */}
            {toggledCourse && (
              <div className="flex flex-col gap-4 mb-7">
                <div>
                  <h1 className="text-lg font-semibold text-black/85">
                    Course
                  </h1>
                </div>
                <SortableCourse
                  sortableCourseList={sortableCourseList}
                  setSortableCourseList={setSortableCourseList}
                  setToggledCourse={setToggledCourse}
                  toggledCourse={toggledCourse}
                />
                <div>
                  <Button
                    onClick={handleAddSortableCourseList}
                    type="button"
                    className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="text-aquamarine-100" />
                    {sortableCourseList.length > 0
                      ? "add one more education"
                      : "add education"}
                  </Button>
                </div>
              </div>
            )}

            {/* Internship */}
            {toggledInternship && (
              <div className="flex flex-col gap-4 mb-7">
                <div>
                  <h1 className="text-lg font-semibold text-black/85">
                    Internship
                  </h1>
                </div>
                <SortableInternship
                  sortableInternshipList={sortableInternshipList}
                  setSortableInternshipList={setSortableInternshipList}
                  toggledInternship={toggledInternship}
                  setToggledInternship={setToggledInternship}
                />
                <div>
                  <Button
                    onClick={handleAddSortableInternshipList}
                    type="button"
                    className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="text-aquamarine-100" />
                    {sortableInternshipList.length > 0
                      ? "add one more internship"
                      : "add internship"}
                  </Button>
                </div>
              </div>
            )}

            {/* Language */}
            {toggledLanguage && (
              <div className="flex flex-col gap-4 mb-7">
                <div>
                  <h1 className="text-lg font-semibold text-black/85">
                    Internship
                  </h1>
                </div>
                <SortableLanguage
                  sortableLanguageList={sortableLanguageList}
                  setSortableLanguageList={setSortableLanguageList}
                  toggledLanguage={toggledLanguage}
                  setToggledLanguage={setToggledLanguage}
                />
                <div>
                  <Button
                    onClick={handleAddSortableLanguageList}
                    type="button"
                    className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="text-aquamarine-100" />
                    {sortableLanguageList.length > 0
                      ? "add one more language"
                      : "add language"}
                  </Button>
                </div>
              </div>
            )}

            {/* References */}
            {toggledReference && (
              <div className="flex flex-col gap-4 mb-7">
                <div>
                  <h1 className="text-lg font-semibold text-black/85">
                    References
                  </h1>
                </div>
                <SortableReference
                  sortableReferenceList={sortableReferenceList}
                  setSortableReferenceList={setSortableReferenceList}
                  toggledReference={toggledReference}
                  setToggledReference={setToggledReference}
                />
                <div>
                  <Button
                    onClick={handleAddSortableReferenceList}
                    type="button"
                    className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="text-aquamarine-100" />
                    {sortableReferenceList.length > 0
                      ? "add one more reference"
                      : "add reference"}
                  </Button>
                </div>
              </div>
            )}

            {/* Activities */}
            {toggledActivities && (
              <div className="flex flex-col gap-4 mb-7">
                <div>
                  <h1 className="text-lg font-semibold text-black/85">
                    Extra Curricular Activities
                  </h1>
                </div>
                <SortableActivities
                  sortableActivitiesList={sortableActivitiesList}
                  setSortableActivitiesList={setSortableActivitiesList}
                  toggledActivities={toggledActivities}
                  setToggledActivities={setToggledActivities}
                />
                <div>
                  <Button
                    onClick={handleAddSortableActivitiesList}
                    type="button"
                    className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="text-aquamarine-100" />
                    {sortableReferenceList.length > 0
                      ? "add one more activities"
                      : "add activities"}
                  </Button>
                </div>
              </div>
            )}

            {/* Custom Section */}
            {toggledCustomSection && (
              <div className="flex flex-col gap-4 mb-7">
                <div>
                  <h1 className="text-lg font-semibold text-black/85">
                    Custom Section
                  </h1>
                </div>
                <SortableCustomSection
                  sortableCustomSectionList={sortableCustomSectionList}
                  setSortableCustomSectionList={setSortableCustomSectionList}
                  toggledCustomSection={toggledCustomSection}
                  setToggledCustomSection={setToggledCustomSection}
                />
                <div>
                  <Button
                    onClick={handleAddSortableCustomSectionList}
                    type="button"
                    className="flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="text-aquamarine-100" />
                    {sortableReferenceList.length > 0
                      ? "add one more custome section"
                      : "add custome section"}
                  </Button>
                </div>
              </div>
            )}

            {/* Hobbies */}
            {toggledHobbies && (
              <div className="flex flex-col gap-4 mb-7">
                <div className="group flex gap-x-3 items-center">
                  <h1 className="text-lg font-semibold text-black/85">
                    Hobbies
                  </h1>
                  <TrashIcon
                    onClick={() => {
                      handleDeleteDiv();
                      setHobbiesDescription("");
                    }}
                    className="hover:text-aquamarine-100 hidden group-hover:flex transition duration-200 cursor-pointer"
                  />
                </div>
                <Label className="capitalize font-normal text-sm text-charcoal flex gap-2 justify-start items-center">
                  What do you like ?
                </Label>
                <SortableHobbies />
              </div>
            )}

            {/* Add Section */}
            <div className="flex flex-col gap-4 mb-7">
              <div>
                <h1 className="text-xl font-semibold text-black/85">
                  Add Section
                </h1>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1">
                <Button
                  type="button"
                  onClick={() => {
                    setToggledCustomSection(true);
                  }}
                  disabled={toggledCustomSection}
                  className="hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent"
                >
                  <CustomSectionIcon className="fill-aquamarine-100 w-[40px]" />
                  custom sections
                </Button>
                <Button
                  onClick={() => {
                    setToggledCourse(true);
                  }}
                  disabled={toggledCourse}
                  type="button"
                  className="hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent"
                >
                  <CoursesIcon className="fill-aquamarine-100 w-[40px]" />
                  Courses
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledActivities(true);
                  }}
                  disabled={toggledActivities}
                  className="hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent"
                >
                  <ActivitiesIcon className="fill-aquamarine-100 w-[40px]" />
                  extra curricular activities
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledInternship(true);
                  }}
                  disabled={toggledInternship}
                  className="hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent"
                >
                  <InternshipIcon className="fill-aquamarine-100 w-[40px]" />
                  internships
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledHobbies(true);
                  }}
                  disabled={toggledHobbies}
                  className="hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent"
                >
                  <HobbyIcon className="fill-aquamarine-100 w-[40px]" />
                  hobbies
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledLanguage(true);
                  }}
                  disabled={toggledLanguage}
                  className="hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent"
                >
                  <LanguageIcon className="fill-aquamarine-100 w-[40px]" />
                  languages
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledReference(true);
                  }}
                  disabled={toggledReference}
                  className="hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent"
                >
                  <ReferenceIcon className="fill-aquamarine-100 w-[40px]" />
                  References
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
