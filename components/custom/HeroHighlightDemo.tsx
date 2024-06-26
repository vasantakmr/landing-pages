"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Image from "next/image";
import { Card } from "../ui/card";
import ShimmerButton from "../landing/ShimmerButton";
import { Clapperboard } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { Brain } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <Card className="rounded-2xl shadow-xl border-none p-10">
        <div className="container md:max-w-7xl md:py-5">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center text-center md:text-start">
            <div className="mx-auto">
              <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-5xl">
                Complete <span className="text-blue-700"> Programming </span>{" "}
                and <span className="text-blue-700"> Problem Solving </span>{" "}
                Roadmap
              </h1>
              <p className="mt-3 font-semibold text-xl text-muted-foreground">
                Mastering
                <span className="text-blue-700"> C++ </span>&
                <span className="text-blue-700"> DSA</span>
              </p>
              <div className="mt-6 lg:mt-10 grid grid-cols-1 gap-x-5 text-sm md:text-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 md:gap-5 font-semibold items-center">
                    <Clapperboard />
                    <p>160+ Hrs of Pre-Recorded Video Content</p>
                  </div>
                  <div className="flex gap-2 md:gap-5 font-semibold items-center">
                    <BookOpenCheck />
                    <p>50 Live Sessions With Vasanta for 6 Months</p>
                  </div>
                  <div className="flex gap-2 md:gap-5 font-semibold items-center">
                    <Brain />
                    <p>Problem Solving and Live doubts sessions</p>
                  </div>
                </div>
              </div>
              <div className="mt-7 gap-3 w-full md:inline-flex hidden lg:block ">
                {/* <Button size={"lg"}>Get started</Button> */}
                <ShimmerButton text={"Enroll Now"} />
              </div>
            </div>
            {/* Col */}
            <div className="relative ms-4">
              <Image src="/img/img.webp" alt="guru" width={450} height={450} />
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl">- with Vasanta Kumar</h3>
                <p className="text-lg ">Founder at Guru Codes | Instagram</p>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </Card>{" "}
    </HeroHighlight>
  );
}

function Hero() {
  return (
    <>
      {/* Hero */}
      <Card
        className="rounded-2xl shadow-xl border-none flex justify-center w-full p-10"
        // style={{ maxHeight: "485px" }}
      >
        <div className="relative flex w-full flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="p-4">
              <div className="flex p-5 max-h-2xl justify-center items-center">
                <h1 className="text-2xl md:text-2xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white max-w-2xl leading-relaxed lg:leading-snug mx-auto text-center md:text-start">
                  Complete Programming and Problem Solving Roadmap Mastering
                  <span className="text-blue-700"> C++ </span>&
                  <span className="text-blue-700"> DSA</span>
                </h1>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col w-full h-full justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <h3 className="font-bold text-xl">- with Vasanta Kumar</h3>
                  <p className="text-lg ">Founder at Guru Codes | Instagram</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:absolute lg:absolute bottom-0">
            <div className="flex flex-col w-full h-full justify-center pl-10">
              <div className="mt-9">
                <div className="flex">
                  <ShimmerButton text={"Enroll Now"} />
                </div>
                {/* <div></div> */}
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* End Hero */}
    </>
  );
}

const star = (
  <svg
    className="h-4 w-4"
    width={51}
    height={51}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
      fill="currentColor"
    />
  </svg>
);
