import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileVideo2 } from "lucide-react";

export function OfferingList() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-xl mt-3 text-slate-700"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:text-foreground hover:no-underline">
          🎥 100+ hours of Course Content
        </AccordionTrigger>
        <AccordionContent className="text-base">
          This course equips you with the essential skills for problem-solving:
          C++ programming fundamentals, data structures, and algorithms.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:text-foreground hover:no-underline">
          🤯 300+ problems
        </AccordionTrigger>
        <AccordionContent className="text-base">
          Course features 300+ problems to help you master problem-solving
          skills and prepare for high-paying tech careers.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="hover:text-foreground hover:no-underline">
          🎙️ Weekly 4 days live
        </AccordionTrigger>
        <AccordionContent className="text-base">
          This course includes weekly sessions: 2 days for live doubt solving
          and 2 days for interactive problem-solving.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="hover:text-foreground hover:no-underline">
          📘 Regular quizzes/assignments
        </AccordionTrigger>
        <AccordionContent className="text-base">
          Regular assignments and quizzes will help you practice your skills and
          receive feedback throughout the course.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="hover:text-foreground hover:no-underline">
          🗓️ 6 Months Course Duration
        </AccordionTrigger>
        <AccordionContent className="text-base">
          6 months of regular course content, quizzes/assignments, live
          sessions.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="hover:text-foreground hover:no-underline">
          📅 2 Years Course Validity
        </AccordionTrigger>
        <AccordionContent className="text-base">
          2 years of course access.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="hover:text-foreground hover:no-underline">
          🗂️ Resume/Interview Preparation
        </AccordionTrigger>
        <AccordionContent className="text-base">
          This course includes resume building and interview preparation tips.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
