import { TimeTaken } from "@/components/TimeTaken";
import { Modules as Modulesv1 } from "@/components/Modules";
import { Modules2 } from "@/components/Modules2";

export default function Learn() {
  return (
    <div className="flex justify-center h-full items-center bg-background w-full px-4">
      <div
        className="flex flex-col w-full md:mt-2 gap-4 bg-background md:p-4"
        style={{ maxWidth: "1000px" }}
      >
        <div className="flex flex-row gap-5 w-full justify-center mt-2">
          <div className="text-muted-foreground transition-colors cursor-pointer">
            web
          </div>
          <div className="transition-colors cursor-pointer border-b-2 border-white">
            dsa
          </div>
          <div></div>
        </div>
        <Modules2 />
        {/* <Modulesv1 />
        <Modulesv1 />
        <Modulesv1 />
        <Modulesv1 /> */}
      </div>
    </div>
  );
}
