"use client";

import ResumePreview from "@/src/components/ResumePreview";
import Education from "@/src/components/steps/Education";
import Experience from "@/src/components/steps/Experience";
import PersonalDetails from "@/src/components/steps/PersonalDetails";
import Skills from "@/src/components/steps/Skills";
import { ExperienceItem, ResumeData } from "@/types";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ResumeData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedinURL: "",
    githubURL: "",
    cityState: "",
    country: "",

    experiences: [
      {
        jobTitle: "",
        company: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        description: "",
        isCurrent: false,
      },
    ],

    education: [
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        description: "",
        city: "",
      }
    ],

    skills:[
      {
        skillName: "",
      }
    ],
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (
    index: number,
    name: keyof ExperienceItem,
    value: any
  ) => {
    const updated = [...data.experiences];

    (updated[index] as any)[name] = value;

    if (name === "isCurrent" && value) {
      updated[index].endDate = "";
    }

    setData({ ...data, experiences: updated });
  };

  const handleEducationChange = (
    index: number,
    name: keyof (typeof data.education)[0],
    value: any
  ) => {
    const updated = [...data.education];
    updated[index][name] = value;

    setData({ ...data, education: updated });
  };

 const handleSkillChange = (
    index: number,
    name: keyof (typeof data.skills)[0],
    value: any
  ) => {
    const updated = [...data.skills];
    updated[index][name] = value;

    setData({ ...data, skills: updated });
  };

  const addExperience = () => {
    setData({
      ...data,
      experiences: [
        ...data.experiences,
        {
          jobTitle: "",
          company: "",
          city: "",
          state: "",
          startDate: "",
          endDate: "",
          description: "",
          isCurrent: false,
        },
      ],
    });
  };

  const addEducation = () => {
    setData({
      ...data,
      education: [
        ...data.education,
        {
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          description: "",
          city: "",
        },
      ],
    });
  };

  const addSkill = () => {
    setData({
      ...data,
      skills: [
        ...data.skills,
        {
          skillName: "",
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const updated = data.experiences.filter((_, i) => i !== index);
    setData({ ...data, experiences: updated });
  };

  const removeEducation = (index: number) => {
    const updated = data.education.filter((_, i) => i !== index);
    setData({ ...data, education: updated });
  };

  const removeSkill = (index: number) => {
    const updated = data.skills.filter((_, i) => i !== index);
    setData({ ...data, skills: updated });
  };

  const steps = [
    <PersonalDetails data={data} onChange={handleChange} />,
    <Experience
      data={data.experiences}
      onChange={handleExperienceChange}
      addExperience={addExperience}
      removeExperience={removeExperience}
    />,
    <Education
      data={data.education}
      onChange={handleEducationChange}
      addEducation={addEducation}
      removeEducation={removeEducation}
    />,
    <Skills
      data={data.skills}
      onChange={handleSkillChange}
      addSkill={addSkill}
      removeSkill={removeSkill}
    />,
  ];

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <section className="min-h-screen px-2 md:px-4 lg:px-8 py-20 bg-gray-100 overflow-x-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_794px] gap-2 lg:h-[calc(100vh-80px)]">

        {/* LEFT */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between w-full min-w-0  lg:h-full lg:overflow-y-auto no-scrollbar border border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Step {step + 1} of {steps.length}
          </p>

          <div className="flex top-0">{steps[step]}</div>

          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              disabled={step === 0}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              disabled={step === steps.length - 1}
              className="px-4 py-2 bg-black text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:h-full lg:overflow-y-auto flex justify-center no-scrollbar">
          <ResumePreview data={data} />
        </div>

      </div>
    </section>
  );
}