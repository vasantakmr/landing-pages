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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <BrainCogIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Problem Solving
                </h3>
                <p className="mt-1 text-muted-foreground">
                  160+ hours of Course video lectures. C++ fundamentals, data
                  structures, and algorithms.
                </p>
              </div>
            </div>

            <div className="flex">
              <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  300+ problems
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Solve 300+ problems to master problem-solving
                  skills and prepare for high-paying tech careers.
                </p>
              </div>
            </div>

            <div className="flex">
              <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Weekly 4 days Live
                </h3>
                <p className="mt-1 text-muted-foreground">
                  2 days of Live doubt-solving and 2 days of interactive
                  problem-solving.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-10">
            <div className="flex">
              <TrophyIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Regular Quizzs
                </h3>
                <p className="mt-1 text-muted-foreground">
                  6-months of regular assignments and
                  quizzes to practice your skills and get feedback.
                </p>
              </div>
            </div>
            <div className="flex">
              <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Resume/Interview Preparation
                </h3>
                <p className="mt-1 text-muted-foreground">
                  This course includes resume building and interview preparation
                  tips.
                </p>
              </div>
            </div>
            <div className="flex">
              <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Course Validity
                </h3>
                <p className="mt-1 text-muted-foreground">
                  6 months course duration & 2 years of course access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Accordion
    //   type="single"
    //   collapsible
    //   className="w-full text-xl mt-3 text-slate-700"
    // >
    //   <AccordionItem value="item-1">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       🎥 160+ hours of Course Content
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
    // This course includes weekly sessions: 2 days for live doubt solving
    // and 2 days for interactive problem-solving.
    //     </AccordionContent>
    //   </AccordionItem>
    //   <AccordionItem value="item-4">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       📘 Regular quizzes/assignments
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    // Regular assignments and quizzes will help you practice your skills and
    // receive feedback throughout the course.
    //     </AccordionContent>
    //   </AccordionItem>
    //   <AccordionItem value="item-5">
    //     <AccordionTrigger className="hover:text-foreground hover:no-underline">
    //       🗓️ 6 Months Course Duration
    //     </AccordionTrigger>
    //     <AccordionContent className="text-base">
    // 6 months of regular course content, quizzes/assignments, live
    // sessions.
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
    // This course includes resume building and interview preparation tips.
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
