"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MousePointerClick } from "lucide-react";

import ShareButton from "./ShareButton";
import Link from "next/link";

export function DescriptionCard({ id }: { id: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/vasantakmr/gurucodes-data/main/jobs/index.json"
        );
        const result = await response.json();
        const filteredJob = result.find((item: any) => item.jobId === id);
        setData(filteredJob);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className=" flex items-center justify-center px-4 pt-4">
        <Card className="max-w-screen-lg">
          <CardHeader>
            <div className="flex gap-3 items-center pb-3">
              <div className="flex items-center w-9 h-9">
                <img
                  src={data?.employerLogo}
                  alt="logo"
                  className="rounded-full"
                />
              </div>
              <div className="font-semibold">{data?.employerName}</div>
            </div>
            <div className="flex items-center justify-between">
              <CardTitle>{data?.jobTitle}</CardTitle>
              <div className="flex gap-2">
                <ShareButton />
                <Button className="hidden md:block">
                  <a
                    href={data?.jobApplyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
            <CardDescription>🌍 remote, china</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">Job Description</h1>

            <div>
              <p>BackendDeveloper</p>
              <div className="pl-3">
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
              </div>
            </div>
            <div>
              <p>Qualification</p>
              <div className="pl-3">
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
                <li>
                  Design, develop, and maintain scalable and efficient
                  server-side applications using Node.js
                </li>
              </div>
            </div>
            <div className="flex gap-3 p-2">
              <p>Salary</p>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="md:hidden flex sticky bottom-0 justify-center p-4 bg-blue-800  w-screen gap-2">
        <a href={data?.jobApplyLink} target="_blank" rel="noopener noreferrer">
          Apply Now
        </a>
        <MousePointerClick />
      </div>
    </>
  );
}
