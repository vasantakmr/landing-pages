import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export function MasterClassFor() {
  return (
    <div className="flex justify-center w-full flex-col items-center gap-3 mt-5">
      <div className="text-4xl lg:text-5xl font-bold text-center my-10">
        Who is this <span className="text-orange-600">MasterClass</span> for?
      </div>
      <div className="flex flex-wrap w-full gap-5 justify-center mt-4">
        <Card className="w-[21rem] h-48 flex items-center gap-3">
          <div className="flex justify-center">
            <div className="pl-6 ">
              <Briefcase size={32} />
            </div>

            <div className="flex flex-col mx-5">
              <div className="font-bold text-xl">Working Professionals</div>
              <div className="mt-5 w-11/12">
                who want to enhance your problem-solving skills or transition to
                a high paying role.
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-[21rem] h-48 flex items-center gap-3">
          <div className="flex justify-center">
            <div className="pl-6 ">
              <GraduationCap size={32} />
            </div>

            <div className="flex flex-col mx-5">
              <div className="font-bold text-xl">Students</div>
              <div className="mt-4 w-11/12">
                who want to build a solid CS foundation, improve problem solving, and prepare for coding interviews.
              </div>
            </div>
          </div>
        </Card>
        <Card className="w-[21rem] h-48 flex items-center gap-3">
          <div className="flex justify-center">
            <div className="pl-6 ">
              <GraduationCap size={32} />
            </div>

            <div className="flex flex-col mx-5">
              <div className="font-bold text-xl">Career Changers</div>
              <div className="mt-5 w-11/12">
                who want a structured path to learn C++ and essential data structures, making them job-ready.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
