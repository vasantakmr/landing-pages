import { Button } from "@/components/ui/button";
import { FilterCard } from "@/components/FilterCard";
import { DescriptionCard } from "@/components/DescriptionCard";
import { JobList } from "@/components/JobList";
import { PaginationS } from "@/components/PaginationS";

export default function JobsPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex w-full flex-col lg:flex-row">
        {/* <div className="p-4 w-full cursor-pointer filtercard flex justify-center md:w-2/5">
          <FilterCard />
        </div> */}
        <div className="flex w-full justify-center">
          {/* <div className="w-2/5 flex flex-col gap-3 p-4"> */}
          <div className="flex flex-col gap-3 p-4">
            <div className="flex items-center justify-center text-2xl font-bold">
              Featured jobs
            </div>
            <div className="joblist">
              <JobList />
            </div>
            <div className="">
              <PaginationS />
            </div>
            {/* <div className="flex justify-center">you viewed n out of n+ jobs</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
