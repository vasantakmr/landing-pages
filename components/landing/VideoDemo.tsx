import React from "react";
import { Card, CardContent } from "../ui/card";
import { CirclePlay } from "lucide-react";
import ShimmerButton from "./ShimmerButton";

function VideoDemo() {
  return (
    <div className="h-full">
      <div className="relative w-full py-16 flex flex-col justify-center items-center mt-16 bg-gradient-to-r from-sky-500 to-indigo-900">
        <div className="flex flex-col justify-center items-center text-white gap-1 pb-5">
          <h2 className="font-bold text-6xl">Overview</h2>
          <p className="text-lg">
            Let me quickly navigate you through the entire thing once
          </p>
        </div>
        <div>
          <Card
            className="h-full flex justify-center items-center cursor-pointer"
            style={{ width: "965px", height: "542px" }}
          >
            <CardContent>
              <CirclePlay className="w-36 h-36" />
            </CardContent>
          </Card>
        </div>
        <div className="mt-12">
          <ShimmerButton text="Enroll Now" />
        </div>
      </div>
    </div>
  );
}

export default VideoDemo;
