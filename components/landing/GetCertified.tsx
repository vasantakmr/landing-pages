import React from "react";
import { Card } from "../ui/card";
import { Crown, CircleCheck, Share2 } from "lucide-react";
import ShimmerButton from "./ShimmerButton";
import Image from "next/image";

function GetCertified() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-[420px] w-full p-10 flex flex-wrap justify-center items-center ">
        <div className="flex flex-col justify-center w-[500px] h-full items-start">
          <div className="text-4xl font-bold pb-6">
            Get <span className="text-orange-600">Certified</span>
          </div>
          <div className=" flex flex-col gap-4">
            <div className="flex gap-4 text-xl font-semibold text-slate-700 items-center">
              <Crown className="fill-orange-500" />
              Earn your credential of Expertise
            </div>
            <div className="flex gap-4 text-xl font-semibold text-slate-700 items-center">
              <Share2 className="fill-orange-500" />
              Share your verified certificate
            </div>
            <div className="flex gap-4 text-xl font-semibold text-slate-700 items-center">
              <CircleCheck className="fill-orange-500" />
              Add certificate to your Linkedin
            </div>
          </div>
          <div className="pt-6">
            <ShimmerButton text={"Upskill Today"} />
          </div>
        </div>
        <div>
          <Card className="w-full h-full">
            <Image
              width={544}
              height={407}
              src="/img/certificate.png"
              alt="Image of Certificate"
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default GetCertified;
