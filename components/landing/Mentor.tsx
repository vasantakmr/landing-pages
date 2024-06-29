"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

import NumberTicker from "../magicui/number-ticker";

export default function Mentor() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    // <div className="flex h-full justify-center items-center">
    //   <div className=" flex justify-center items-center flex-col md:flex-row max-w-7xl gap-">
    //     <div className="w-full flex flex-col justify-center items-center">
    // <Carousel
    //   plugins={[plugin.current]}
    //   className="w-full h-full"
    //   onMouseEnter={plugin.current.stop}
    //   onMouseLeave={plugin.current.reset}
    // >
    //   <CarouselContent>
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index}>
    //         <div className="justify-center items-center flex h-full">
    //           <Image
    //             className="rounded-t-xl bg-cover border "
    //             src="/img/mentordemo.jpg"
    //             width={300}
    //             height={200}
    //             alt="mentor-image"
    //           />
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    // </Carousel>
    //       <div className="flex flex-col justify-start border w-3/5 rounded-b-xl p-2 bg-slate-300">
    //         <p>Senior Software Engineer</p>
    //         <h1 className="font-bold">Vasanta Kumar</h1>
    //         <p>Founder of GuruCodes</p>
    //       </div>
    //     </div>
    //     <div className="w-3/5 flex gap-4 flex-col">
    // <div className="flex flex-col gap-3">
    //   <h1 className="text-5xl font-bold">Meet your Mentor</h1>
    //   <h4 className="text-lg font-semibold">
    //     Vasanta Kumar is speaker and YouTuber who co-founded Think School,
    //     with Parsh Kothari, an education startup that generated 4+ Billion
    //     video impressions in 24 months.
    //   </h4>
    //   <p>
    //     Ganesh has helped 27,000+ students improve their communication to
    //     become effective public speakers, great salespeople, YouTubers and
    //     successful business people.
    //   </p>
    //   <p>
    //     Ganesh’s dedication to education has earned him the title of
    //     “Insightful Education Creator of the Year 2023” at the Global
    //     Startup Summit 2023. His vision is to make the Indian youth more
    //     employable by helping them learn practical and fundamental skills
    //     in life.
    //   </p>
    // </div>
    // <div className="flex gap-6">
    //   <div>
    //     <Linkedin />
    //   </div>
    //   <div>
    //     <Instagram />
    //   </div>
    //   <div>
    //     <Youtube />
    //   </div>
    // </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container py-24 lg:py-32 max-w-6xl">
      <div className="grid lg:grid-cols-7 gap-6 lg:gap-x-8 lg:items-center">
        <div className="lg:col-span-2 mt-10 lg:mt-0 mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="justify-center items-center flex h-full">
                    <Image
                      className="rounded-xl"
                      width={300}
                      height={100}
                      src="/img/mentordemo.jpg"
                      alt="Image Description"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="lg:col-span-5 mx-auto">
          <div className="flex flex-col gap-3 p-2">
            <h1 className="text-5xl font-bold">Meet your Mentor</h1>
            <h4 className="text-lg font-semibold">
              Vasanta Kumar is speaker and YouTuber who co-founded Think School,
              with Parsh Kothari, an education startup that generated 4+ Billion
              video impressions in 24 months.
            </h4>
            <p>
              Ganesh has helped 27,000+ students improve their communication to
              become effective public speakers, great salespeople, YouTubers and
              successful business people.
            </p>
            <p>
              Ganesh’s dedication to education has earned him the title of
              “Insightful Education Creator of the Year 2023” at the Global
              Startup Summit 2023. His vision is to make the Indian youth more
              employable by helping them learn practical and fundamental skills
              in life.
            </p>
          </div>
          <div className="flex gap-6">
            <Card className="flex flex-col justify-center items-center w-1/4 p-2">
              <Image
                src="/linkedin.png"
                width={50}
                height={50}
                alt="linkedin"
              />
              <div className="font-bold text-xl">
                <NumberTicker value={4} />
                K+
              </div>
            </Card>
            <Card className="flex flex-col justify-center items-center w-1/4 p-2">
              <Image
                src="/instagram.png"
                width={50}
                height={50}
                alt="linkedin"
              />
              <div className="font-bold text-xl">
                <NumberTicker value={121} />
                K+
              </div>
            </Card>
            <Card className="flex flex-col justify-center items-center w-1/4 p-2">
              <Image src="/youtube.png" width={50} height={50} alt="linkedin" />
              <div className="font-bold text-xl">
                <NumberTicker value={12} />
                K+
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
