"use client";

import RetroGrid from "@/components/magicui/retro-grid";

const RetroGridDemo = () => {
  return (
    <div className="relative flex flex-col h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
      <div className="pointer-events-none  whitespace-pre-wrap bg-gradient-to-b  to-[#8c1eff] bg-clip-text text-left text-4xl font-bold leading-tight	 tracking-tighter text-foreground md:text-5xl">
        Code Your Way to Success:
      </div>
      <div className="pointer-events-none  whitespace-pre-wrap bg-gradient-to-b from-[#ff2975] to-[#8c1eff] bg-clip-text  text-5xl font-bold leading-tight	 tracking-tighter text-transparent">
        Master C++ Programming & DSA
      </div>
      <div>
        <span className="pointer-events-none  whitespace-pre-wrap   bg-clip-text text-center text-5xl font-bold leading-tight	 tracking-tighter text-white ">
          Land Your Dream 
        </span>
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ff2975] to-[#8c1eff] bg-clip-text  text-5xl font-bold leading-tight	 tracking-tighter text-transparent">
          {" "}High-Paying Tech Job.
        </span>
      </div>

      <RetroGrid />
    </div>
  );
};

export default RetroGridDemo;
