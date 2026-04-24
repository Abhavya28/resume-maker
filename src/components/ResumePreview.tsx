import { EducationItem, ExperienceItem, SkillItem } from "@/types";

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
    <div className="bg-white shadow-lg rounded-xl w-full min-h-[1123px] mx-auto p-10 border border-gray-200">

      {/* HEADER / PERSONAL DETAILS */}
      <div className="pb-3">
        <h1 className="text-3xl font-bold tracking-wide">
          {data.firstName} {data.lastName}
        </h1>

        <p className="text-gray-600 mt-1">
          {data.email} | {data.phone}
        </p>

        {(data.linkedinURL || data.githubURL) && (
          <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">

            {data.linkedinURL && (
              <a
                href={data.linkedinURL}
                target="_blank"
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
                className="hover:text-blue-700 hover:underline"
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
      {/* SUMMARY */}
      <p className="text-sm text-gray-700 border-b bor leading-relaxed">
        {data.summary}
      </p>

      {/* EXPERIENCE */}
      {data.experiences?.some(
        (exp: ExperienceItem) => exp.jobTitle || exp.company
      ) && (
          <div className="mt-4 border-b pb-3">
            <h2 className="text-lg font-semibold mb-2">Experience</h2>

            {data.experiences.map((exp: ExperienceItem, ind: number) => {
              if (!exp.jobTitle && !exp.company) return null;

              return (
                <div key={ind} className="mb-3">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">
                      {exp.jobTitle}
                    </h3>

                    <p className="text-gray-500 text-xs">
                      {formatDate(exp.startDate)} -{" "}
                      {exp.isCurrent ? "Present" : formatDate(exp.endDate)}
                    </p>
                  </div>

                  <p className="text-gray-700 italic text-sm">
                    {exp.company} {exp.city}, {exp.state}
                  </p>

                  <p className="text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

      {/* EDUCATION */}
      {data.education?.some(
        (edu: EducationItem) => edu.school || edu.degree
      ) && (
          <div className="mt-4 border-b pb-3">
            <h2 className="text-lg font-semibold mb-2">Education</h2>

            {data.education.map((edu: EducationItem, ind: number) => {
              if (!edu.school && !edu.degree) return null;

              return (
                <div key={ind} className="mb-3">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {edu.school}, {edu.city}
                      </h3>
                      <p className="text-sm text-gray-600 italic">
                        {edu.degree}
                      </p>
                    </div>

                    <p className="text-gray-500 text-xs">
                      {formatDate(edu.startDate)} -{" "}
                      {edu.endDate ? formatDate(edu.endDate) : "Present"}
                    </p>
                  </div>

                  {edu.description && (
                    <p className="text-sm mt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}

      {/* SKILLS */}
      {data.skills?.some((skill: SkillItem) => skill.skillName) && (
        <div className="mt-4 border-b pb-3">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: SkillItem, index: number) => {
              if (!skill.skillName) return null;

              return (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-gray-200 rounded-full"
                >
                  {skill.skillName}
                </span>
              );
            })}
          </div>
        </div>
      )}



      {/* CERTIFICATES (LAST SECTION) */}
      {data.certificates?.some((cert: any) => cert.name || cert.issuer) && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">
            Certifications
          </h2>

          {data.certificates.map((cert: any, index: number) => {
            if (!cert.name && !cert.issuer) return null;

            return (
              <div key={index} className="mb-2">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm">
                    {cert.name}
                  </h3>

                  <p className="text-gray-500 text-xs">
                    {cert.startDate && formatDate(cert.startDate)}{" "}
                    {cert.endDate
                      ? ` - ${formatDate(cert.endDate)}`
                      : ""}
                  </p>
                </div>

                <p className="text-sm text-gray-600 italic">
                  {cert.issuer}
                </p>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}