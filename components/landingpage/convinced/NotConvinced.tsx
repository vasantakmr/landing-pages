import ShimmerButton from "@/components/landing/ShimmerButton";
import Ripple from "@/components/magicui/ripple";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function NotConvinced() {
  return (
    <div className="w-full flex justify-center items-center m-2">
      <Card className="relative flex flex-col gap-4 h-96 w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-blue-600">
          Still not convinced?
        </p>
        <p>
          Go to my{" "}
          <a
            href={"https://www.instagram.com/gurucodes.dev"}
            target="_blank"
            className="underline"
          >
            Instagram
          </a>
          .
        </p>
        <p>Check couple of my videos and explanations.</p>
        <p>I’m sure you’ll have no problem getting value from me. 🙂</p>
        <button className="inline-flex w-66 h-16 cursor-pointer animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-orange-500 bg-[length:200%_100%] px-6 font-medium text-background dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Start today, your future self will thank you.
        </button>
      </Card>
    </div>
  );
}
