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
      <Card>
        <CardHeader>
          <CardDescription>#logo# {data?.employerName}</CardDescription>
          <div className="flex items-center justify-between">
            <CardTitle>{data?.jobTitle}</CardTitle>
            <div className="flex gap-2">
              <Button>copy</Button>
              <Button>
                <a href={data?.jobApplyLink}>Apply Now</a>
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
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
            </div>
          </div>
          <div>
            <p>Qualification</p>
            <div className="pl-3">
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
              <li>
                Design, develop, and maintain scalable and efficient server-side
                applications using Node.js
              </li>
            </div>
          </div>
          <div className="flex gap-3">
            <p>Salary</p>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </>
  );
}
