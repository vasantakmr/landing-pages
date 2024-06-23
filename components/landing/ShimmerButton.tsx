import React from "react";

export default function ShimmerButton({ text }: { text: string }) {
  return (
    <div>
      <button className="inline-flex w-56 h-16 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-background dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {text}
      </button>
    </div>
  );
}
