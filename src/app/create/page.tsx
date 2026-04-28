"use client";

import Pagination from "@/src/components/Pagination";
import ResumePreview from "@/src/components/ResumePreview";
import Certificates from "@/src/components/steps/certificates";
import Education from "@/src/components/steps/education";
import Experience from "@/src/components/steps/experience";
import PersonalDetails from "@/src/components/steps/personalDetails";
import Skills from "@/src/components/steps/skills";
import Summary from "@/src/components/steps/summary";
import { CertificateItem, ExperienceItem, ResumeData } from "@/types";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import ATSChecker from "@/src/components/ATSChecker";


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

    skills: [
      {
        skillName: "",
      }
    ],
    summary: "",

    certificates: [
      {
        name: "",
        issuer: "",
        startDate: "",
        endDate: "",
        isCurrent: false,
      }
    ]
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

  const handleSummaryChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCertificateChange = (
    index: number,
    name: keyof CertificateItem,
    value: any
  ) => {
    const updated = [...data.certificates];

    (updated[index] as any)[name] = value;

    if (name === "isCurrent" && value) {
      updated[index].endDate = "";
    }

    setData({ ...data, certificates: updated });
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

  const addCertificate = () => {
    setData({
      ...data,
      certificates: [
        ...data.certificates,
        {
          name: "",
          issuer: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
        }
      ]
    })
  }

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

  const removeCertificate = (index: number) => {
    const updated = data.certificates.filter((_, i) => i !== index);
    setData({ ...data, certificates: updated });
  };

  const steps = [
    <PersonalDetails
      data={data}
      onChange={handleChange}
    />,
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
    <Summary
      data={data}
      onChange={handleSummaryChange}
    />,
    <Certificates
      data={data.certificates}
      onChange={handleCertificateChange}
      addCertificate={addCertificate}
      removeCertificate={removeCertificate}
    />,
  ];

  const next = () => {
    if (step === 0) {
      if (!data.firstName.trim() || !data.email.trim()) {
        alert("First Name and Email are required");
        return;
      }
    }

    setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "resume",
  });

  // const handleDownload = async () => {
  //   if (!resumeRef.current) return;

  //   const element = resumeRef.current;

  //   // Force safe colors
  //   element.style.backgroundColor = "#ffffff";
  //   element.style.color = "#000000";

  //   const html2pdf = (await import("html2pdf.js")).default;

  //   html2pdf()
  //     .from(element)
  //     .set({
  //       margin: 0,
  //       filename: "resume.pdf",
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  //     })
  //     .save();
  // };

  return (
    <section className="min-h-screen px-2 md:px-4 lg:px-8 pt-18 bg-gray-100 overflow-x-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_794px] gap-2 lg:h-[calc(100vh-80px)]">

        {/* LEFT */}
        <div className="bg-white rounded-xl shadow flex flex-col w-full min-w-0 border border-gray-200 lg:h-full">

          <div className="flex-1 overflow-y-auto p-6">
            <p className="text-sm text-gray-500 mb-4">
              Step {step + 1} of {steps.length}
            </p>

            <div>{steps[step]}</div>
          </div>

          <div className="border-t p-4 bg-white">
            <Pagination
              step={step}
              totalSteps={steps.length}
              onNext={next}
              onPrev={prev}
              onDownload={handlePrint}
            />
          </div>

        </div>

        {/* RIGHT */}
        <div
          ref={resumeRef}
          className="lg:h-full lg:overflow-y-auto flex flex-col items-center gap-4 no-scrollbar py-2"
        >
          <ResumePreview data={data} />

          {step === steps.length - 1 && (
            <div className="w-[794px]">
              <ATSChecker data={data} />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}