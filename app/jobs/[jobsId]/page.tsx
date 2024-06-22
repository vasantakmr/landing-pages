import { DescriptionCard } from "@/components/DescriptionCard";

export default function JobDetails({ params }: { params: { jobsId: string } }) {
  return (
    <div className="flex flex-col justify-center w-full">
      <DescriptionCard id={params.jobsId} />
    </div>
  );
}
