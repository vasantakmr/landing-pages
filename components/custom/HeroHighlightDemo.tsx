"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Image from "next/image";
import { Card } from "../ui/card";
import ShimmerButton from "../landing/ShimmerButton";
import { Clapperboard } from "lucide-react";
import { BookOpenCheck } from "lucide-react";
import { Brain } from "lucide-react";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <Card
        className="rounded-2xl shadow-xl border-none flex justify-center"
        style={{ maxHeight: "485px" }}
      >
        <div className="grid grid-rows-3 grid-flow-col">
          <div className="col-span-2 p-4">
            <div className="flex p-5 max-h-2xl justify-center items-center">
              <h1 className="text-2xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white max-w-2xl leading-relaxed lg:leading-snug mx-auto ">
                Complete Programming and Problem Solving Roadmap Mastering
                <span className="text-blue-700"> C++ </span>&
                <span className="text-blue-700"> DSA</span>
              </h1>
            </div>
          </div>
          <div className="row-span-2 col-span-2">
            <div className="flex flex-col w-full h-full justify-center pl-10">
              <div className="flex flex-col gap-4">
                <div className="flex gap-5 font-semibold text-lg">
                  <Clapperboard />
                  <p>160+ Hrs of Pre-Recorded Video Content</p>
                </div>
                <div className="flex gap-5 font-semibold text-lg">
                  <BookOpenCheck />
                  <p>50 Live Sessions With Vasanta Kumar for 6 Months</p>
                </div>
                <div className="flex gap-5 font-semibold text-lg">
                  <Brain />
                  <p>Exclusive Problem Solving and Live doubt Sessions</p>
                </div>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <ShimmerButton text={"Enroll Now"} />
                </div>
                {/* <div></div> */}
              </div>
            </div>
          </div>
          <div className="row-span-3">
            <div className="flex flex-col w-full h-full justify-center items-center">
              <Image src="/img/img.webp" alt="guru" width={450} height={450} />
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold text-xl">- with Vasanta Kumar</h3>
                <p className="text-lg ">Founder at Guru Codes | Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* <Card className="w-full h-full flex flex-row pt-28 border-none rounded-xl">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Learn DSA and Programming to crack your dream tech job
        </motion.h1>
        <div>
          <Image src="/img/img.webp" alt="guru" width={500} height={500} />
        </div>
        <div>
          <div></div>
          <div>
            <ShimmerButton text={"Enroll Now"} />
          </div>
        </div>
      </Card> */}
    </HeroHighlight>
  );
}
