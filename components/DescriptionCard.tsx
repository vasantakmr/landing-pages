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

export function DescriptionCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardDescription>#logo# facebook, inc</CardDescription>
          <div className="flex items-center justify-between">
            <CardTitle>Backend Developer (Rust)</CardTitle>
            <div className="flex gap-2">
              <Button>copy</Button>
              <Button>Apply Now</Button>
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
