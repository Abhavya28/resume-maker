"use client";

import ResumePreview from "@/src/components/ResumePreview";
import Experience from "@/src/components/steps/Experience";
import PersonalDetails from "@/src/components/steps/PersonalDetails";
import { ExperienceItem } from "@/types";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function page() {
  const [step, setStep] = useState(0);

  // ✅ Personal + Experience combined state
  const [data, setData] = useState({
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
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

 const handleExperienceChange = (
  index: number,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const updated = [...data.experiences];

  const name = e.target.name as keyof ExperienceItem;
  updated[index][name] = e.target.value;

  setData({ ...data, experiences: updated });
};

  const addExperience = () => {
    setData({
      ...data,
      experiences: [
        ...data.experiences,
        {
          jobTitle: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const updated = data.experiences.filter((_, i) => i !== index);
    setData({ ...data, experiences: updated });
  };

  const steps = [
    <PersonalDetails data={data} onChange={handleChange} />,
    <Experience
      data={data.experiences}
      onChange={handleExperienceChange}
      addExperience={addExperience}
      removeExperience={removeExperience}
    />,
  ];

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <section className="min-h-screen px-4 md:px-16 lg:px-24 py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

        {/* LEFT */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
          <p className="text-sm text-gray-500 mb-4">
            Step {step + 1} of {steps.length}
          </p>

          <div>{steps[step]}</div>

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
        <div className="hidden lg:block sticky top-24">
          <ResumePreview data={data} />
        </div>

      </div>
    </section>
  );
}