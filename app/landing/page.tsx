import { HeroHighlightDemo } from "@/components/custom/HeroHighlightDemo";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import ShineBorder from "@/components/magicui/shine-border";
import { GotPlaced } from "@/components/GotPlaced";
import { Testimonials } from "@/components/Testimonials";
import { ModulesOverview } from "@/components/ModulesOverview";
import { Bonuses } from "@/components/Bonuses";
import VideoDemo from "@/components/landing/VideoDemo";
import Mentor from "@/components/landing/Mentor";
import GetCertified from "@/components/landing/GetCertified";
import { FAQ } from "@/components/landingpage/faq/faq";
import { MasterClassFor } from "@/components/landingpage/masterclassfor/MasterClassFor";
import CourseOffering from "@/components/landingpage/courseoffering/CourseOffering";

export default function LandingPage() {
  return (
    <div>
      <HeroHighlightDemo />
      <GotPlaced />
      <VideoDemo />
      <CourseOffering />
      <Bonuses />
      <MasterClassFor />
      {/* <Testimonials /> */}
      {/* <ModulesOverview /> */}
      <Mentor />
      <GetCertified />
      <FAQ />
      <div className="sticky bottom-8 md:bottom-0 left-0 h-24 w-full bg-[#0b091f] bg-clip-padding backdrop-filter flex items-center justify-between px-5 z-[1000] text-white">
        <div className="hidden md:block">
          <p>DSA Master Class</p>
          <p>5k+ Students Enrolled</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex text-lg gap-1 w-full p-2">
            <span className="line-through">₹12,000</span>
            <span className="underline">₹6,999</span>
          </div>
          <button className="inline-flex h-16 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-orange-500 bg-[length:200%_100%] px-6 font-semibold text-white text-xl transition-colors focus:outline-none focus:ring-2">
            Enroll Now
          </button>
        </div>
      </div>
      <div className="md:hidden sticky bottom-0 left-0 h-8 bg-orange-500 flex items-center justify-center z-[1000] text-white">
        <div>Limited Time Offer - 50% Exclusive Discount</div>
      </div>
    </div>
  );
}
