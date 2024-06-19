"use server";

import { useEffect } from "react";
import JobCard from "./JobCard";
import { Badge } from "./ui/badge";
import Link from "next/link";

type Job = {
  jobId: string;
  createdAt: string;
  jobTitle: string;
  jobDescription: string;
  jobApplyLink: string;
  employerLogo: string;
  employerName: string;
  jobLocation: string;
};

export async function JobList() {
  const res = await fetch(
    "https://raw.githubusercontent.com/vasantakmr/gurucodes-data/main/jobs/index.json"
  );
  const jobsData = await res.json();
  return (
    <div>
      {jobsData.map((job: Job) => {
        return (
          <Link
            key={job?.jobId}
            className="cursor-pointer flex gap-5 p-3 border-b-2"
            href={`/jobs/${job.jobId}`}
          >
            <div className="flex items-center w-14 h-14">
              <img src={job?.employerLogo} alt="logo" />
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <p>{job.employerName}</p>
                <p>{job?.jobTitle}</p>
                <div className="flex flex-row gap-2">
                  <Badge>Salary</Badge>
                  <Badge>WFH</Badge>
                  <Badge>{job.jobLocation}</Badge>
                </div>
              </div>
              <div>6h</div>
            </div>
          </Link>
        );
      })}
      {/* <JobCard />
      <JobCard />
      <JobCard /> */}
    </div>
  );
}
