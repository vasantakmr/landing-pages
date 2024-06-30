import ShimmerButton from "@/components/landing/ShimmerButton";
import Ripple from "@/components/magicui/ripple";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function NotConvinced() {
  return (
    <div className="w-full flex justify-center items-center">
      <Card className="flex flex-col gap-4 lg:h-96 w-full lg:max-w-4xl items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl text-center">
        <p className="whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-orange-600">
          Still not convinced?
        </p>
        <p className="text-md font-semibold">
          Go to my{" "}
          <a
            href={"https://www.instagram.com/gurucodes.dev"}
            target="_blank"
            className="underline"
          >
            Instagram
          </a>
        </p>
        <p className="text-md font-semibold">
          Check couple of my videos and explanations.
        </p>
        <p className="text-md font-semibold">
          I’m sure you’ll have no problem getting value from me. 🙂
        </p>
        <button className="inline-flex w-58 mt-8 h-16 cursor-pointer animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-orange-400 bg-[length:200%_100%] px-6 font-medium text-background dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Start today, your future self will thank you.
        </button>
      </Card>
    </div>
  );
}
