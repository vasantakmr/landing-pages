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
import Link from "next/link";

export default function Mentor() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = ["img.jpg", "img2.jpg", "img3.png", "img4.png"];

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
    <div className="container py-10 md:py-24 lg:py-32 max-w-6xl">
      <div className="grid lg:grid-cols-7 gap-6 lg:gap-x-8 lg:items-center">
        <div className="lg:col-span-2 mt-10 lg:mt-0 mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="justify-center items-center flex h-full">
                    <Image
                      className="rounded-xl"
                      width={300}
                      height={100}
                      src={`/mentor/${img}`}
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
            <h1 className="md:text-left text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet your{" "}
              <span className="md:text-black text-orange-600">Mentor</span>
            </h1>
            <h4 className="text-lg font-semibold">
              Vasanta Kumar, a software developer and educator, followed a path
              similar to many aspiring tech enthusiasts. After cracking the GATE
              exam, completing a degree in Data Analytics at NIT Trichy, and
              securing a high-paying job at KLA Tencor, Vasanta has been working
              there for the past 2 years.
            </h4>
            <p>
              The journey began with a strong desire to excel in the tech field,
              just like others. Initially clueless, Vasanta navigated through
              the challenges, figuring things out independently. With over 100k
              followers on the Instagram page <Link href="https://insgtagram.com/gurucodes.dev" className="text-blue-600">@Gurucodes.dev</Link>, Vasanta’s
              teaching is appreciated by the community. Having personally
              experienced the entire journey, Vasanta empathizes with students
              facing coding challenges. This unique perspective allows Vasanta
              to anticipate and address every aspect of problem-solving,
              ensuring a comprehensive foundation for learners.
            </p>
            <p>
              Vasanta is excited to share a comprehensive programming and DSA
              roadmap to help others achieve their coding dreams!
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
              <div className="font-bold text-center text-xl text-nowrap">
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
              <div className="font-bold text-center text-xl text-nowrap">
                <NumberTicker value={132} />
                K+
              </div>
            </Card>
            <Card className="flex flex-col justify-center items-center w-1/4 p-2">
              <Image src="/youtube.png" width={50} height={50} alt="linkedin" />
              <div className="font-bold text-center text-xl text-nowrap">
                <NumberTicker value={2} />
                K+
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
