import { DescriptionCard } from "@/components/DescriptionCard";

export default function JobDetails({ params }: { params: { jobsId: string } }) {
  return (
    <div className=" md:flex flex-col">
      <DescriptionCard id={params.jobsId} />
    </div>
  );
}
