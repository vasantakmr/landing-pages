"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Mentor() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full justify-center items-center">
      <div className="flex w-full h-full justify-center items-center max-w-7xl">
        <div className=" flex justify-center items-center  flex-col md:flex-row">
          <div className="w-2/5">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-xs"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="w-1/2 flex gap-4 flex-col">
            <div className="flex flex-col gap-3">
              <h1 className="text-5xl font-bold">Meet your Mentor</h1>
              <h4 className="text-lg font-semibold">
                Vasanta Kumar is speaker and YouTuber who co-founded Think
                School, with Parsh Kothari, an education startup that generated
                4+ Billion video impressions in 24 months.
              </h4>
              <p>
                Ganesh has helped 27,000+ students improve their communication
                to become effective public speakers, great salespeople,
                YouTubers and successful business people.
              </p>
              <p>
                Ganesh’s dedication to education has earned him the title of
                “Insightful Education Creator of the Year 2023” at the Global
                Startup Summit 2023. His vision is to make the Indian youth more
                employable by helping them learn practical and fundamental
                skills in life.
              </p>
            </div>
            <div className="flex gap-6">
              <Card className="w-40 h-36"></Card>
              <Card className="w-40 h-36"></Card>
              <Card className="w-40 h-36"></Card>
            </div>
            <div>{/* <Card className="w-full h-28">Featured in</Card> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
