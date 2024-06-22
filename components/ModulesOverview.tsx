import { Card } from "./ui/card";

export function ModulesOverview() {
  return (
    <div className="w-full flex justify-center p-5 mt-12">
      <div
        className=" flex w-full justify-center px-20"
        style={{ maxWidth: "1000px" }}
      >
        <div className="flex flex-col w-1/2 justify-center">
          <p className="text-4xl font-bold">
            What will you <span className="text-orange-400">learn</span>?
          </p>
          <p className="mt-5 text-slate-400 w-3/4">
            Discover a comprehensive curriculum designed to empower you with the
            skills and knowledge needed to excel in Programming. Throughout the
            DSA Masterclass, you'll explore the following modules in depth:
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Card className="w-96 h-56">
            Modules here Parallex scroll modules
          </Card>
        </div>
      </div>
    </div>
  );
}
