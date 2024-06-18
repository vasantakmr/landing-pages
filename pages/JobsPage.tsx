import { Button } from "@/components/ui/button";
import { FilterCard } from "@/components/FilterCard";
import { DescriptionCard } from "@/components/DescriptionCard";
import { JobList } from "@/components/JobList";

export default function JobsPage() {
  return (
    <div className="w-screen flex flex-col">
      <div className="w-full p-2">
        <FilterCard />
      </div>
      <div className="flex w-full">
        <div className="w-2/5 p-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Featured jobs</div>
            <Button variant="outline">All Jobs</Button>
          </div>
          <div>
            <JobList />
          </div>
          <div>you viewed n out of n+ jobs</div>
          {/* <Pagination /> */}
        </div>
        <div className=" w-3/5 hidden p-4 md:flex flex-col">
          <DescriptionCard />
        </div>
      </div>
    </div>
  );
}
