import React from "react";
import { Card, CardContent } from "../ui/card";
import { CirclePlay } from "lucide-react";
import ShimmerButton from "./ShimmerButton";

function VideoDemo() {
  return (
    <div className="h-full">
      <div className="relative w-full py-16 flex flex-col justify-center items-center mt-16 bg-gradient-to-r from-sky-500 to-indigo-900">
        <div className="flex flex-col justify-center items-center text-white gap-1 pb-5">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl">
            Overview
          </h2>
          <p className="w-4/5 text-center md:text-muted lg:text-lg">
            Let me quickly navigate you through the entire Master Class
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Card
            className="flex w-4/5 h-64 md:h-[354px] lg:h-[542px] justify-center items-center cursor-pointer"
            // style={{ width: "965px", height: "542px" }}
          >
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/ga8pfKoj0hM?si=zJF7fyYi9I-gRpfF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
