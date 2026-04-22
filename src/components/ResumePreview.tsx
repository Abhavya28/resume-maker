import { ExperienceItem } from "@/types";

export default function ResumePreview({ data }: any) {


  const formatDate = (date:any) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    return new Date(year, month - 1).toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
  };


  return (
    <div className="bg-white p-8 shadow rounded-xl text-sm leading-relaxed">

      {/* HEADER */}
      <div className="border-b pb-4 mb-4">
        <h1 className="text-3xl font-bold tracking-wide">
          {data.firstName} {data.lastName}
        </h1>

        <p className="text-gray-600 mt-1">
          {data.email} | {data.phone}
        </p>

        <p className="text-gray-600">
          {data.linkedinURL} | {data.githubURL}
        </p>

        <p className="text-gray-600">
          {data.cityState}, {data.country}
        </p>
      </div>

      {/* EXPERIENCE */}
      {data.experiences.some(
        (exp: ExperienceItem) => exp.jobTitle || exp.company
      ) && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold pb-1 mb-1">
              EXPERIENCE
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
                      {formatDate(exp.startDate)} –{" "}
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

    </div>
  );
}