import { Button } from "@/components/ui/button";
import { FilterCard } from "@/components/FilterCard";
import { DescriptionCard } from "@/components/DescriptionCard";
import { JobList } from "@/components/JobList";
import { PaginationS } from "@/components/PaginationS";

export default function JobsPage() {
  return (
    <div className="w-full flex flex-col">
      {/* <div className="w-full p-2">
        <FilterCard />
      </div> */}
      <div className="flex w-full justify-center">
        {/* <div className="w-2/5 flex flex-col gap-3 p-4"> */}
        <div className="w-1/2 flex flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Featured jobs</div>
            <Button variant="outline">All Jobs</Button>
          </div>
          <div className="w-full border-2 rounded-sm cursor-pointer">
            <FilterCard />
          </div>
          <div>
            <JobList />
          </div>
          <div className="flex justify-center">you viewed n out of n+ jobs</div>
          {/* <div className="">
            <PaginationS />
          </div> */}
        </div>
        {/* <div className=" w-3/5 p-4 hidden md:flex flex-col">
          <DescriptionCard />
        </div> */}
      </div>
    </div>
  );
}
