import React from "react";
import { Card } from "../ui/card";
import { Crown, CircleCheck, Share2 } from "lucide-react";
import ShimmerButton from "./ShimmerButton";
import Image from "next/image";

import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
} from "lucide-react";

function GetCertified() {
  return (
    // <div className="flex h-full w-full justify-center items-center">
    //   <div className=" h-full w-full max-w-4xl p-10 flex justify-center items-center md:flex-wrap ">
    //     <div className="flex flex-col justify-center md:w-2/5 h-full items-start">
    //       <div className="text-4xl font-bold pb-6">
    //         Get <span className="text-orange-600">Certified</span>
    //       </div>
    //       <div className=" flex flex-col gap-4">
    //         <div className="flex gap-4 text-xl font-semibold text-slate-700 items-center">
    //           <Crown className="fill-orange-500" />
    //           Earn your credential of Expertise
    //         </div>
    //         <div className="flex gap-4 text-xl font-semibold text-slate-700 items-center">
    //           <Share2 className="fill-orange-500" />
    //           Share your verified certificate
    //         </div>
    //         <div className="flex gap-4 text-xl font-semibold text-slate-700 items-center">
    //           <CircleCheck className="fill-orange-500" />
    //           Add certificate to your Linkedin
    //         </div>
    //       </div>
    //
    //     </div>
    //     <Card className="md:w-3/5 h-full">
    //       <Image
    //         width={547}
    //         height={400}
    //         src="/img/certificate.png"
    //         alt="Image of Certificate"
    //       />
    //     </Card>
    //   </div>
    // </div>

    <div className="container py-24 lg:py-32 flex justify-center">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
        <div className="lg:w-3/4">
          <Card>
            <Image
              width={547}
              height={400}
              src="/img/certificate.png"
              alt="Image of Certificate"
            />
          </Card>
        </div>
        <div className="space-y-6 lg:space-y-10">
          <div className="flex justify-center items-center h-full w-full">
            <div className="ms-5 sm:ms-8">
              <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold flex justify-center md:block mb-6">
                Get <span className="text-orange-600"> Certified</span>
              </h3>
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
              <div className="mt-10 flex justify-center">
                <ShimmerButton text={"Upskill Today"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCertified;
