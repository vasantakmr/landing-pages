import { TimeTaken } from "@/components/TimeTaken";
import { Modules } from "@/components/Modules";

export default function Learn() {
  return (
    <div className="flex justify-center h-full items-center bg-background w-full px-4">
      <div
        className="flex flex-col w-full md:mt-2 gap-4 bg-background md:p-4"
        style={{ maxWidth: "1000px" }}
      >
        <Modules />
        <Modules />
        <Modules />
        <Modules />
      </div>
    </div>
  );
}
