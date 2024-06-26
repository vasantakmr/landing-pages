import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileVideo2 } from "lucide-react";

import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";

export function OfferingList() {
  return (
    <div className="container py-7 lg:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              <BrainCogIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Creative minds
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We choose our teams carefully. Our people are the secret to
                  great work.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Effortless updates
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Benefit from automatic updates to all boards any time you need
                  to make a change to your website.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Strong empathy
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We&apos;ve user tested our own process by shipping over 1k
                  products for clients.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              <TrophyIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Conquer the best
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We stay lean and help your product do one thing well.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              <UsersIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Designing for people
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We actively pursue the right balance between functionality and
                  aesthetics, creating delightful experiences.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Simple and affordable
                </h3>
                <p className="mt-1 text-muted-foreground">
                  From boarding passes to movie tickets, there&apos;s pretty
                  much nothing you can&apos;t do.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
    // <Accordion
    //   type="single"
    //   collapsible
    //   className="w-full text-xl mt-3 text-slate-700"
    // >
    //   <AccordionItem value="item-1">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       🎥 100+ hours of Course Content
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    //       This course equips you with the essential skills for problem-solving:
    //       C++ programming fundamentals, data structures, and algorithms.
    //     </AccordionContent>
    //   </AccordionItem>
    //   <AccordionItem value="item-2">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       🤯 300+ problems
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    //       Course features 300+ problems to help you master problem-solving
    //       skills and prepare for high-paying tech careers.
    //     </AccordionContent>
    //   </AccordionItem>
    //   <AccordionItem value="item-3">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       🎙️ Weekly 4 days live
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    //       This course includes weekly sessions: 2 days for live doubt solving
    //       and 2 days for interactive problem-solving.
    //     </AccordionContent>
    //   </AccordionItem>
    //   <AccordionItem value="item-4">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       📘 Regular quizzes/assignments
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    //       Regular assignments and quizzes will help you practice your skills and
    //       receive feedback throughout the course.
    //     </AccordionContent>
    //   </AccordionItem>
    //   <AccordionItem value="item-5">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       🗓️ 6 Months Course Duration
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    //       6 months of regular course content, quizzes/assignments, live
    //       sessions.
    //     </AccordionContent>
    //   </AccordionItem>
    //   <AccordionItem value="item-6">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       📅 2 Years Course Validity
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    //       2 years of course access.
    //     </AccordionContent>
    //   </AccordionItem>
    //   <AccordionItem value="item-7">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       🗂️ Resume/Interview Preparation
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    //       This course includes resume building and interview preparation tips.
    //     </AccordionContent>
    //   </AccordionItem>
    // </Accordion>
  );
}

export default function IconSection2ColsGrid() {
  return (
    <>
      {/* Icon Blocks */}

      {/* End Icon Blocks */}
    </>
  );
}
