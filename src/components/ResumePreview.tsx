export default function ResumePreview({ data }: any) {

  return (
    <div className="bg-white p-6 shadow rounded-xl text-sm">
      
      <h1 className="text-2xl font-bold">
        {data.firstName} {data.lastName}
      </h1>
      <p>{data.email} | {data.phone}</p>
      <p>{data.linkedinURL} | {data.githubURL}</p>
      <p>{data.cityState}, {data.country}</p>

    </div>
  );
}