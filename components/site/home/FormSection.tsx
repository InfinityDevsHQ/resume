"use client";
import React, { useState } from "react";
import { Frown, Languages, Pencil, Plus, Smile, TrashIcon } from "lucide-react";
import MdEditor from "react-markdown-editor-lite";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";

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
import { useProfessionalDetails } from "@/statemanagement/usePersonalDetails";
import Image from "next/image";
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
import { Switch } from "@/components/ui/switch";
import { useSkills } from "@/statemanagement/useSkills";

type FormSecyionProps = {
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
  handleAddSortableSkillsBadgeList: any;
  sortableSkillsList: any;
  setSortableSkillsList: any;
  handleAddSortableLanguageList: any;
  sortableLanguageList: any;
  setSortableLanguageList: any;
  skillsToggledProgress: any;
  setSkillsToggledProgress: any;
  setLanguageToggledProgress: any;
  languageToggledProgress: any;
  handleAddSortableSkillsList: any;
  setClickedBadges: any;
  clickedBadges: any;
  pdfName: string;
  setPdfName: any;
  customSectionTitle: any;
  setCustomSectionTitle: any;
  personalDetailsTitle: any;
  professionalSummaryTitle: any;
  educationTitle: any;
  webNSocialLinkTitle: any;
  languagesTitle: any;
  coursesTitle: any;
  employmentHistoryTitle: any;
  internshipsTitle: any;
  referencesTitle: any;
  skillTitle: any;
  hobbiesTitle: any;
  activitiesTitle: any;
  setPersonalDetailsTitle: any;
  setProfessionalSummaryTitle: any;
  setEducationTitle: any;
  setWebNSocialLinkTitle: any;
  setLanguagesTitle: any;
  setCoursesTitle: any;
  setEmploymentHistoryTitle: any;
  setInternshipsTitle: any;
  setReferencesTitle: any;
  setSkillTitle: any;
  setHobbiesTitle: any;
  setActivitiesTitle: any;
};

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
  handleAddSortableSkillsBadgeList,
  sortableSkillsList,
  setSortableSkillsList,
  handleAddSortableLanguageList,
  sortableLanguageList,
  setSortableLanguageList,
  skillsToggledProgress,
  setSkillsToggledProgress,
  languageToggledProgress,
  setLanguageToggledProgress,
  handleAddSortableSkillsList,
  setClickedBadges,
  clickedBadges,
  pdfName,
  setPdfName,
  customSectionTitle,
  setCustomSectionTitle,
  personalDetailsTitle,
  professionalSummaryTitle,
  educationTitle,
  webNSocialLinkTitle,
  languagesTitle,
  coursesTitle,
  employmentHistoryTitle,
  internshipsTitle,
  referencesTitle,
  skillTitle,
  hobbiesTitle,
  activitiesTitle,
  setPersonalDetailsTitle,
  setProfessionalSummaryTitle,
  setEducationTitle,
  setWebNSocialLinkTitle,
  setLanguagesTitle,
  setCoursesTitle,
  setEmploymentHistoryTitle,
  setInternshipsTitle,
  setReferencesTitle,
  setSkillTitle,
  setHobbiesTitle,
  setActivitiesTitle,
}) => {
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  const form = useForm();
  const [toggled, setToggled] = useState(false);
  const [charCount, SetCharCount] = useState(0);
  const { setHobbiesDescription } = useHobbies();
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

  const { addSkill, skillsHistory, setSkillsTitle, setSkillsLevel } =
    useSkills();

  // Handle Delete Hobbies

  const handleDeleteDiv = () => {
    setToggledHobbies(!toggledHobbies);
  };

  return (
    <>
      <div className="break-words bg-white  w-full xxl:p-12 xl:p-6 md:p-12 p-6 h-screen overflow-y-auto">
        <Form {...form}>
          <form className="overflow-hidden">
            {/* Resume Title */}
            <div className="break-words max-w-xs mx-auto mb-5">
              <Input
                className="break-words bg-transparent text-2xl text-center placeholder:text-2xl border-b-2 border-transparent hover:border-black"
                placeholder="Untitled"
                autoComplete="off"
                value={pdfName}
                onChange={(e) => {
                  setPdfName(e.target.value);
                }}
              />
            </div>

            {/* Personal Details */}
            <div className="break-words flex flex-col gap-4 mb-7">
              <div className="flex items-center group max-w-max">
                <Input
                  className="capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg px-0 pb-0 max-w-max"
                  autoComplete="off"
                  value={personalDetailsTitle}
                  onChange={(e) => {
                    setPersonalDetailsTitle(e.target.value);
                  }}
                />
                <Pencil className="opacity-0 group-hover:opacity-100" />
              </div>
              <div className="break-words w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                <div className="break-words sm:w-1/2 w-full space-y-px">
                  <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                    wanted job title{""}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <HelpCircle
                            height={16}
                            width={16}
                            className="break-words text-aquamarine-100 hover:text-aquamarine-200 text-xl"
                          />
                        </TooltipTrigger>
                        <TooltipContent className="break-words max-w-60 w-full bg-black text-white font-normal text-xs">
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
                <div className="break-words sm:w-1/2 w-full space-y-px">
                  <div className="break-words flex justify-start items-center gap-2">
                    {selectedImage ? (
                      <div className="break-words size-16">
                        <Image
                          src={selectedImage}
                          width={60}
                          height={60}
                          className="break-words w-full"
                          alt="avatar"
                        />
                      </div>
                    ) : (
                      <UploadIcon className="break-words w-9" />
                    )}

                    <Label className="break-words capitalize font-normal text-sm text-aquamarine-100 hover:text-aquamarine-200 cursor-pointer">
                      Upload Photo
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="break-words hidden"
                      />
                    </Label>
                  </div>
                </div>
              </div>
              <div className="break-words w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                <div className="break-words sm:w-1/2 w-full space-y-px">
                  <Label className="break-words capitalize font-normal text-sm text-charcoal">
                    first name
                  </Label>
                  <Input
                    autoComplete="off"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="break-words sm:w-1/2 w-full space-y-px">
                  <Label className="break-words capitalize font-normal text-sm text-charcoal">
                    last name
                  </Label>
                  <Input
                    autoComplete="off"
                    name="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="break-words w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                <div className="break-words sm:w-1/2 w-full space-y-px">
                  <Label className="break-words capitalize font-normal text-sm text-charcoal">
                    email
                  </Label>
                  <Input
                    autoComplete="off"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="break-words sm:w-1/2 w-full space-y-px">
                  <Label className="break-words capitalize font-normal text-sm text-charcoal">
                    phone
                  </Label>
                  <Input
                    autoComplete="off"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <Accordion
                type="single"
                collapsible
                className="break-words w-full"
              >
                <AccordionItem value="item-1" className="break-words border-0">
                  <AccordionContent className="break-words flex flex-col gap-4">
                    <div className="break-words w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                      <div className="break-words sm:w-1/2 w-full space-y-px">
                        <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                          country name{""}
                        </Label>
                        <Input
                          autoComplete="off"
                          name="countryName"
                          onChange={(e) => setCountryName(e.target.value)}
                        />
                      </div>
                      <div className="break-words sm:w-1/2 w-full space-y-px">
                        <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                          city{""}
                        </Label>
                        <Input
                          autoComplete="off"
                          name="city"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="break-words w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                      <div className="break-words sm:w-1/2  w-full space-y-px">
                        <Label className="break-words capitalize font-normal text-sm text-charcoal">
                          address
                        </Label>
                        <Input
                          autoComplete="off"
                          name="address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="break-words sm:w-1/2  w-full space-y-px">
                        <Label className="break-words capitalize font-normal text-sm text-charcoal">
                          postal code
                        </Label>
                        <Input
                          autoComplete="off"
                          name="postalCode"
                          onChange={(e) => setPostalCode(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="break-words w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                      <div className="break-words sm:w-1/2  w-full space-y-px">
                        <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                          driving license{""}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle
                                  height={16}
                                  width={16}
                                  className="break-words text-aquamarine-100 hover:text-aquamarine-200 text-xl"
                                />
                              </TooltipTrigger>
                              <TooltipContent className="break-words max-w-60 w-full bg-black text-white font-normal text-xs">
                                Include this section if our proffession is
                                requires a certian type of license. If not,
                                leave it blank.
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          autoComplete="off"
                          name="drivingLicense"
                          onChange={(e) => setDrivingLicense(e.target.value)}
                        />
                      </div>
                      <div className="break-words sm:w-1/2 w-full space-y-px">
                        <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                          nationality{""}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle
                                  height={16}
                                  width={16}
                                  className="break-words text-aquamarine-100 hover:text-aquamarine-200 text-xl"
                                />
                              </TooltipTrigger>
                              <TooltipContent className="break-words max-w-60 w-full bg-black text-white font-normal text-xs">
                                Include your nationality only if it relevent to
                                your postion. In most cases, leave this blank.
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          autoComplete="off"
                          name="nationality"
                          onChange={(e) => setNationality(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="break-words w-full flex sm:flex-row flex-col justify-start items-center gap-8">
                      <div className="break-words sm:w-1/2 w-full space-y-px">
                        <Label className="break-words capitalize font-normal text-sm text-charcoal">
                          place of birth{""}
                        </Label>
                        <Input
                          autoComplete="off"
                          name="placeOfBirth"
                          onChange={(e) => setPlaceOfBirth(e.target.value)}
                        />
                      </div>
                      <div className="break-words sm:w-1/2  w-full space-y-px">
                        <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                          date of birth{""}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle
                                  height={16}
                                  width={16}
                                  className="break-words text-aquamarine-100 hover:text-aquamarine-200 text-xl"
                                />
                              </TooltipTrigger>
                              <TooltipContent className="break-words max-w-60 w-full bg-black text-white font-normal text-xs">
                                Add your date of birth only if it is relevent
                                requirement for your position. In most cases,
                                leave this blank.
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Input
                          autoComplete="off"
                          name="dateOfBirth"
                          onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                  <AccordionTrigger
                    onClick={handleToggled}
                    className="break-words max-w-[180px] text-aquamarine-100 hover:text-aquamarine-200 capitalize text-sm font-normal hover:no-underline"
                  >
                    {toggled
                      ? "hide additional details"
                      : "edit additional details"}
                  </AccordionTrigger>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Professional Summary */}
            <div className="break-words flex flex-col gap-2 mb-7">
              <div>
                <Input
                  className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                  autoComplete="off"
                  value={professionalSummaryTitle}
                  onChange={(e) => {
                    setProfessionalSummaryTitle(e.target.value);
                  }}
                />
              </div>
              <div className="break-words w-full space-y-px">
                <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                  Write 2-4 short & energetic sentences to interest the reader!
                  Mention your role, experience & most importantly - your
                  biggest achievements, best qualities and skills.
                </Label>
                <MdEditor
                  style={{ height: "170px", width: "full" }}
                  renderHTML={(text) => mdParser.render(text)}
                  onChange={(e) => {
                    SetCharCount(e.text.length);
                    setProfessionalSummary(e.html);
                    console.log(e);
                  }}
                />
                <div className="break-words flex justify-between items-center">
                  <p className="break-words font-normal sm:text-sm  text-xs text-charcoal flex gap-2 justify-start items-center">
                    Write 400-600 characters to increase interview chances
                  </p>
                  <p className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                    {charCount} / 400+
                    {charCount >= 400 ? (
                      <Smile className="break-words text-green-400" />
                    ) : (
                      <Frown className="break-words text-red-400" />
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Employment History */}
            <div className="break-words flex flex-col gap-3 mb-7">
              <div>
                <Input
                  className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                  autoComplete="off"
                  value={employmentHistoryTitle}
                  onChange={(e) => {
                    setEmploymentHistoryTitle(e.target.value);
                  }}
                />
              </div>
              <div className="break-words w-full space-y-px">
                <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
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
                  className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                >
                  <Plus className="break-words text-aquamarine-100" />
                  {sortableEmploymentList.length > 0
                    ? "add one more employment"
                    : "add employment"}
                </Button>
              </div>
            </div>

            {/* Education */}
            <div className="break-words flex flex-col gap-3 mb-7">
              <div>
                <Input
                  className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                  autoComplete="off"
                  value={educationTitle}
                  onChange={(e) => {
                    setEducationTitle(e.target.value);
                  }}
                />
              </div>
              <div className="break-words w-full space-y-px">
                <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
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
                  className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                >
                  <Plus className="break-words text-aquamarine-100" />
                  {sortableEducationList.length > 0
                    ? "add one more education"
                    : "add education"}
                </Button>
              </div>
            </div>

            {/* Website & Social Links */}
            <div className="break-words flex flex-col gap-3 mb-7">
              <div>
                <Input
                  className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                  autoComplete="off"
                  value={webNSocialLinkTitle}
                  onChange={(e) => {
                    setWebNSocialLinkTitle(e.target.value);
                  }}
                />
              </div>
              <div className="break-words w-full space-y-px">
                <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
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
                  className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                >
                  <Plus className="break-words text-aquamarine-100" />
                  {sortableWebNSocialLinksList.length > 0
                    ? "add one more link"
                    : "add link"}
                </Button>
              </div>
            </div>

            {/* Skills */}
            <div className="break-words flex flex-col gap-3 mb-7">
              <div>
                <Input
                  className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                  autoComplete="off"
                  value={skillTitle}
                  onChange={(e) => {
                    setSkillTitle(e.target.value);
                  }}
                />
              </div>
              <div className="break-words w-full space-y-2">
                <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center">
                  Choose 5 of the most important skills to show your talents!
                  Make sure they match the keywords of the job listing if
                  applying via on online system.
                </Label>
                <div>
                  <SkillsBadge
                    handleAddSortableSkillsBadgeList={
                      handleAddSortableSkillsBadgeList
                    }
                    skillsHistory={skillsHistory}
                    clickedBadges={clickedBadges}
                  />
                </div>
                <div className="break-words flex items-center space-x-2">
                  <Switch
                    onClick={() => {
                      setSkillsToggledProgress(!skillsToggledProgress);
                    }}
                    checked={skillsToggledProgress}
                    id="showExpertise"
                  />
                  <Label
                    htmlFor="showExpertise"
                    className="break-words capitalize font-normal text-base text-black/90"
                  >
                    show expertise
                  </Label>
                </div>
                <div
                  className={`${sortableSkillsList.length > 1 && "space-y-4"}`}
                >
                  <SortableSkills
                    sortableSkillsList={sortableSkillsList}
                    setSortableSkillsList={setSortableSkillsList}
                    skillsHistory={skillsHistory}
                    setSkillsLevel={setSkillsLevel}
                    setSkillsTitle={setSkillsTitle}
                    setClickedBadges={setClickedBadges}
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={handleAddSortableSkillsList}
                  type="button"
                  className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                >
                  <Plus className="break-words text-aquamarine-100" />
                  {sortableSkillsList.length > 0
                    ? "add one more skill"
                    : "add skill"}
                </Button>
              </div>
            </div>

            {/* Course */}
            {toggledCourse && (
              <div className="break-words flex flex-col gap-2 mb-7">
                <div>
                  <Input
                    className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                    autoComplete="off"
                    value={coursesTitle}
                    onChange={(e) => {
                      setCoursesTitle(e.target.value);
                    }}
                  />
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
                    className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="break-words text-aquamarine-100" />
                    {sortableCourseList.length > 0
                      ? "add one more education"
                      : "add education"}
                  </Button>
                </div>
              </div>
            )}

            {/* Internship */}
            {toggledInternship && (
              <div className="break-words flex flex-col gap-2 mb-7">
                <div>
                  <Input
                    className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                    autoComplete="off"
                    value={internshipsTitle}
                    onChange={(e) => {
                      setInternshipsTitle(e.target.value);
                    }}
                  />
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
                    className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="break-words text-aquamarine-100" />
                    {sortableInternshipList.length > 0
                      ? "add one more internship"
                      : "add internship"}
                  </Button>
                </div>
              </div>
            )}

            {/* Language */}
            {toggledLanguage && (
              <div className="break-words flex flex-col gap-w mb-7">
                <div>
                  <Input
                    className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                    autoComplete="off"
                    value={languagesTitle}
                    onChange={(e) => {
                      setLanguagesTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="break-words flex items-center space-x-2">
                  <Switch
                    onClick={() => {
                      setLanguageToggledProgress(!languageToggledProgress);
                    }}
                    checked={languageToggledProgress}
                    id="showExpertise"
                  />
                  <Label
                    htmlFor="showExpertise"
                    className="break-words capitalize font-normal text-base text-black/90"
                  >
                    show expertise
                  </Label>
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
                    className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="break-words text-aquamarine-100" />
                    {sortableLanguageList.length > 0
                      ? "add one more language"
                      : "add language"}
                  </Button>
                </div>
              </div>
            )}

            {/* References */}
            {toggledReference && (
              <div className="break-words flex flex-col gap-w mb-7">
                <div>
                  <Input
                    className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                    autoComplete="off"
                    value={referencesTitle}
                    onChange={(e) => {
                      setReferencesTitle(e.target.value);
                    }}
                  />
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
                    className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="break-words text-aquamarine-100" />
                    {sortableReferenceList.length > 0
                      ? "add one more reference"
                      : "add reference"}
                  </Button>
                </div>
              </div>
            )}

            {/* Activities */}
            {toggledActivities && (
              <div className="break-words flex flex-col gap-w mb-7">
                <div>
                  <Input
                    className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                    autoComplete="off"
                    value={activitiesTitle}
                    onChange={(e) => {
                      setActivitiesTitle(e.target.value);
                    }}
                  />
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
                    className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="break-words text-aquamarine-100" />
                    {sortableReferenceList.length > 0
                      ? "add one more activities"
                      : "add activities"}
                  </Button>
                </div>
              </div>
            )}

            {/* Custom Section */}
            {toggledCustomSection && (
              <div className="break-words flex flex-col gap-w mb-7">
                <div>
                  {/* Custom Section */}
                  <Input
                    className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                    autoComplete="off"
                    value={customSectionTitle}
                    onChange={(e) => {
                      setCustomSectionTitle(e.target.value);
                    }}
                  />
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
                    className="break-words flex justify-start capitalize gap-x-4 w-full bg-transparent hover:bg-green-50 transition duration-200 rounded-none h-12 text-aquamarine-100"
                  >
                    <Plus className="break-words text-aquamarine-100" />
                    {sortableReferenceList.length > 0
                      ? "add one more custome section"
                      : "add custome section"}
                  </Button>
                </div>
              </div>
            )}

            {/* Hobbies */}
            {toggledHobbies && (
              <div className="break-words flex flex-col gap-w mb-7">
                <div className="break-words group flex gap-x-3 items-center">
                  <Input
                    className="px-0 capitalize break-words bg-transparent text-lg text-black/85 font-semibold placeholder:text-lg w-max pb-0"
                    autoComplete="off"
                    value={hobbiesTitle}
                    onChange={(e) => {
                      setHobbiesTitle(e.target.value);
                    }}
                  />
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div>
                        <TrashIcon className="break-words hover:text-aquamarine-100 hidden group-hover:flex transition duration-200 cursor-pointer" />
                      </div>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-2xl">
                          Delete Section
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-base text-charcoal">
                          Are you sure want to delete this section ?
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter className="sm:space-y-0 space-y-4 space-y-reverse">
                        <AlertDialogAction
                          className="bg-aquamarine-100 hover:bg-aquamarine-200 text-white hover:text-white uppercase text-base font-light min-w-[91.5px]"
                          onClick={() => {
                            handleDeleteDiv();
                            setHobbiesDescription("");
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
                <Label className="break-words capitalize font-normal sm:text-sm text-xs text-charcoal flex gap-2 justify-start items-center mb-2">
                  What do you like ?
                </Label>
                <SortableHobbies />
              </div>
            )}

            {/* Add Section */}
            <div className="break-words flex flex-col gap-2 mb-7">
              <div>
                <h1 className="break-words text-xl font-semibold text-black/85">
                  Add Section
                </h1>
              </div>
              <div className="break-words grid xxl:grid-cols-2 xl:grid-cols-1 md:grid-cols-2 grid-cols-1">
                <Button
                  type="button"
                  onClick={() => {
                    setToggledCustomSection(true);
                  }}
                  disabled={toggledCustomSection}
                  className="break-words hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent disabled:fill-charcoal fill-aquamarine-100"
                >
                  <CustomSectionIcon className="break-words w-[40px]" />
                  custom sections
                </Button>
                <Button
                  onClick={() => {
                    setToggledCourse(true);
                  }}
                  disabled={toggledCourse}
                  type="button"
                  className="break-words hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent disabled:fill-charcoal fill-aquamarine-100"
                >
                  <CoursesIcon className="break-words w-[40px]" />
                  Courses
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledActivities(true);
                  }}
                  disabled={toggledActivities}
                  className="break-words hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent disabled:fill-charcoal fill-aquamarine-100"
                >
                  <ActivitiesIcon className="break-words w-[40px]" />
                  extra curricular activities
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledInternship(true);
                  }}
                  disabled={toggledInternship}
                  className="break-words hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent disabled:fill-charcoal fill-aquamarine-100"
                >
                  <InternshipIcon className="break-words w-[40px]" />
                  internships
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledHobbies(true);
                  }}
                  disabled={toggledHobbies}
                  className="break-words hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent disabled:fill-charcoal fill-aquamarine-100"
                >
                  <HobbyIcon className="break-words w-[40px]" />
                  hobbies
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledLanguage(true);
                  }}
                  disabled={toggledLanguage}
                  className="break-words hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent disabled:fill-charcoal fill-aquamarine-100"
                >
                  <LanguageIcon className="break-words w-[40px]" />
                  languages
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setToggledReference(true);
                  }}
                  disabled={toggledReference}
                  className="break-words hover:text-aquamarine-100 justify-start gap-x-3 w-max h-13 rounded-none bg-transparent text-charcoal text-base capitalize hover:bg-transparent disabled:fill-charcoal fill-aquamarine-100"
                >
                  <ReferenceIcon className="break-words w-[40px]" />
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
