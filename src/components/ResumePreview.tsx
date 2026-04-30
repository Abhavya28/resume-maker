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
    <div className="bg-white w-full max-w-[794px] min-h-[1123px] mx-auto p-4 md:p-10 text-gray-900 break-words">

      {/* HEADER */}
      <div className="pb-3 border-b items-center flex flex-col justify-center">
        <h1 className="text-3xl font-bold tracking-wide">
          {data.firstName} {data.lastName}
        </h1>

        <p className="text-sm mt-1">
          {data.email} | {data.phone}
        </p>

        {(data.linkedinURL || data.githubURL) && (
          <div className="flex gap-2 text-sm mt-1 flex-wrap">

            {data.linkedinURL && (
              <span>{data.linkedinURL}</span>
            )}

            {data.linkedinURL && data.githubURL && (
              <span>|</span>
            )}

            {data.githubURL && (
              <span>{data.githubURL}</span>
            )}
          </div>
        )}

        <p className="text-sm">
          {data.cityState}, {data.country}
        </p>
      </div>

      {/* SUMMARY */}
      {data.summary && (
        <div className="mt-3 pb-3 border-b break-inside-avoid">
          <h2 className="text-lg font-semibold mb-1">Summary</h2>
          <p className="text-sm leading-relaxed">
            {data.summary}
          </p>
        </div>
      )}

      {/* EXPERIENCE */}
      {data.experiences?.some(
        (exp: ExperienceItem) => exp.jobTitle || exp.company
      ) && (
        <div className="mt-4 pb-3 border-b break-inside-avoid">
          <h2 className="text-lg font-semibold mb-2">Experience</h2>

          {data.experiences.map((exp: ExperienceItem, ind: number) => {
            if (!exp.jobTitle && !exp.company) return null;

            return (
              <div key={ind} className="mb-3 break-inside-avoid">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm">
                    {exp.jobTitle}
                  </h3>

                  <p className="text-xs">
                    {formatDate(exp.startDate)} -{" "}
                    {exp.isCurrent ? "Present" : formatDate(exp.endDate)}
                  </p>
                </div>

                <p className="text-sm italic">
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
        <div className="mt-4 pb-3 border-b break-inside-avoid">
          <h2 className="text-lg font-semibold mb-2">Education</h2>

          {data.education.map((edu: EducationItem, ind: number) => {
            if (!edu.school && !edu.degree) return null;

            return (
              <div key={ind} className="mb-3 break-inside-avoid">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">
                      {edu.school}, {edu.city}
                    </h3>
                    <p className="text-sm italic">
                      {edu.degree}
                    </p>
                  </div>

                  <p className="text-xs">
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
        <div className="mt-4 pb-3 border-b break-inside-avoid">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: SkillItem, index: number) => {
              if (!skill.skillName) return null;

              return (
                <span
                  key={index}
                  className="text-sm"
                >
                  • {skill.skillName}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* CERTIFICATES */}
      {data.certificates?.some((cert: any) => cert.name || cert.issuer) && (
        <div className="mt-4 break-inside-avoid">
          <h2 className="text-lg font-semibold mb-2">
            Certifications
          </h2>

          {data.certificates.map((cert: any, index: number) => {
            if (!cert.name && !cert.issuer) return null;

            return (
              <div key={index} className="mb-2 break-inside-avoid">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-sm">
                    {cert.name}
                  </h3>

                  <p className="text-xs">
                    {cert.startDate && formatDate(cert.startDate)}
                    {cert.endDate
                      ? ` - ${formatDate(cert.endDate)}`
                      : ""}
                  </p>
                </div>

                <p className="text-sm italic">
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