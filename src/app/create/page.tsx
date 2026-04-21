"use client";

import ResumePreview from "@/src/components/ResumePreview";
import PersonalDetails from "@/src/components/steps/PersonalDetails";

import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function CreatePage() {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedinURL: "",
    githubURL: "",
    cityState: "",
    country: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const steps = [
    <PersonalDetails data={data} onChange={handleChange} />,
  ];

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <section className="min-h-screen p-6 bg-gray-100">
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT SIDE FORM */}
        <div className="bg-white p-5 rounded-xl shadow flex flex-col justify-between">

          <p className="text-sm text-gray-500 mb-4">
            Step {step + 1} of {steps.length}
          </p>

          <div>{steps[step]}</div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              disabled={step === 0}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              <ChevronLeft className="text-black font-bold" />
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

        {/* RIGHT SIDE PREVIEW */}
        <ResumePreview data={data} />
      </div>
    </section>
  );
}