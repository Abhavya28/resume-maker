import { EducationItem, ExperienceItem } from "@/types";

export default function ResumePreview({ data }: any) {


  const formatDate = (date: any) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    return new Date(year, month - 1).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
  };


  return (
    <div className="bg-white shadow-lg rounded-md w-[794px] min-h-[1123px] mx-auto p-10">

      {/* HEADER */}
      <div className="border-b pb-2">
        <h1 className="text-3xl font-bold tracking-wide">
          {data.firstName} {data.lastName}
        </h1>

        <p className="text-gray-600 mt-1">
          {data.email} | {data.phone}
        </p>

        {(data.linkedinURL || data.githubURL) && (
          <div className="flex items-center gap-3 text-sm text-gray-600">

            {data.linkedinURL && (
              <a
                href={data.linkedinURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 hover:underline"
              >
                {data.linkedinURL}
              </a>
            )}

            {data.linkedinURL && data.githubURL && (
              <span className="text-gray-400">|</span>
            )}

            {data.githubURL && (
              <a
                href={data.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700  hover:underline"
              >
                {data.githubURL}
              </a>
            )}

          </div>
        )}


        <p className="text-gray-600">
          {data.cityState}, {data.country}
        </p>
      </div>

      {/* EXPERIENCE */}
      {data.experiences.some(
        (exp: ExperienceItem) => exp.jobTitle || exp.company
      ) && (
          <div className="mt-1 border-b ">
            <h2 className="text-lg font-semibold pb-1 mb-1">
              Experience
            </h2>

            {data.experiences.map((exp: ExperienceItem, ind: number) => {
              if (!exp.jobTitle && !exp.company) return null;

              return (
                <div key={ind} className="mb-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-base">
                      {exp.jobTitle}
                    </h3>

                    <p className="text-gray-500 text-xs">
                      {formatDate(exp.startDate)} - {" "}
                      {exp.isCurrent ? "Present" : formatDate(exp.endDate)}
                    </p>
                  </div>

                  <p className="text-gray-700 italic text-sm">
                    {exp.company} {exp.city}, {exp.state}
                  </p>

                  {/* Description */}
                  <p className="mt-1 text-gray-800">
                    {exp.description}
                  </p>

                </div>
              );
            })}
          </div>
        )}

      {/* EDUCATION */}
      {data.education.some(
        (edu: EducationItem) => edu.school || edu.degree
      ) && (
          <div className="mt-1 border-b">
            <h2 className="text-lg font-semibold pb-1 mb-1">
              Education
            </h2>

            {data.education.map((edu: EducationItem, ind: number) => {
              if (!edu.school && !edu.degree) return null;

              return (
                <div key={ind} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-base text-gray-900">
                        {edu.school}, {edu.city}
                      </h3>
                      <p className="text-sm text-gray-600 italic">
                        {edu.degree}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs whitespace-nowrap">
                      {formatDate(edu.startDate)} - {" "}
                      {edu.endDate ? formatDate(edu.endDate) : "Present"}
                    </p>

                  </div>
                  {edu.description && (
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                </div>
              );
            })}
          </div>
        )}

    </div>
  );
}