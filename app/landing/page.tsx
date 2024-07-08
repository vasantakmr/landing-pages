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
import Pricing from "@/components/landingpage/pricing/Pricing";
import { NotConvinced } from "@/components/landingpage/convinced/NotConvinced";
import Footer from "@/components/landingpage/footer/Footer";

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
      <Pricing />
      <FAQ />
      <NotConvinced />
      <Footer />
      <div className="sticky bottom-8 md:bottom-0 left-0 h-24 w-full bg-[#0b091f] lg:bg-[#140160] bg-clip-padding backdrop-filter flex px-5 z-[1000] text-white">
        <div className="flex w-full justify-center items-center">
          <div className="flex items-center w-full justify-between gap-10 max-w-7xl">
            <div className="flex gap-4 items-center">
              <Card className=" hidden md:block h-20 w-44 items-center justify-center rounded-md border"></Card>
              <div className="hidden md:block w-52">
                <p className="w-full font-semibold tracking-wide text-lg">
                  DSA Master Class
                </p>
                <p className=" text-muted-foreground text-md tracking-wide">
                  Limited Seats Only
                </p>
              </div>
            </div>
            {/* <div className="flex justify-between items-center w-full"> */}
            <div className="flex text-lg gap-1 w-full p-2 md:text-2xl md:justify-center">
              <span className="line-through">₹12,000</span>
              <span className="underline">₹6,999</span>
            </div>
            <button className="inline-flex h-16 md:w-3/6 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-orange-500 bg-[length:200%_100%] px-4 font-semibold text-white text-xl transition-colors focus:outline-none focus:ring-2">
              Enroll Now
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="md:hidden sticky bottom-0 left-0 h-8 bg-orange-500 flex items-center justify-center z-[1000] text-white">
        <div>Limited Time Offer - 50% Exclusive Discount</div>
      </div>
    </div>
  );
}
