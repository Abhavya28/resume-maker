import { ExperienceItem } from "@/types";

export default function ResumePreview({ data }: any) {

  return (
    <div className="bg-white p-6 shadow rounded-xl text-sm">
      
      <h1 className="text-2xl font-bold">
        {data.firstName} {data.lastName}
      </h1>
      <p>{data.email} | {data.phone}</p>
      <p>{data.linkedinURL} | {data.githubURL}</p>
      <p>{data.cityState}, {data.country}</p>

      <div>
        <h1 className="text-2xl font-bold">Experience</h1>
        {data.experiences.map((exp: ExperienceItem,ind: any) =>(
          <div key={ind} className="mb-2">
            <p className="font-semibold text-lg">{exp.jobTitle}</p>
            <p>{exp.company}, {exp.location}</p>
            <p>{exp.description}</p>
            <p>{exp.startDate}</p>
            <p>{exp.endDate}</p>
          </div>
        ))}
      </div>

    </div>
  );
}