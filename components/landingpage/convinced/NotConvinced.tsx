import ShimmerButton from "@/components/landing/ShimmerButton";
import Ripple from "@/components/magicui/ripple";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function NotConvinced() {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-[#1f329f]">
        <div className="flex flex-col gap-6 lg:h-96 w-full lg:max-w-4xl items-center justify-center p-10 text-center">
          <p className="whitespace-pre-wrap text-center text-5xl font-semibold text-orange-500">
            Still not convinced?
          </p>
          <div className="text-xl text-white">
            Go to my{" "}
            <a
              href={"https://www.instagram.com/gurucodes.dev"}
              target="_blank"
              className="underline"
            >
              Instagram
            </a>
            . Check couple of my videos and explanations.
            <div className="">
              I’m sure you’ll have no problem getting value from me. 🙂
            </div>
          </div>
          <Link href="https://rzp.io/l/gurucodes-cpp-dsa">
            <button className="inline-flex w-58 mt-8 h-16 cursor-pointer font-bold animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-orange-600 hover:bg-orange-500 shadow-md bg-[length:200%_100%] px-6 font-medium text-background dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Start today, your future self will Thank you.
            </button>
          </Link>
        </div>
      </div>
      <p className="text-center text-sm px-2">
        Have a question? send a message at{" "}
        <span className="font-semibold"><Link href="https://api.whatsapp.com/send?phone=918333063366&text=Hi%20%F0%9F%98%80Vasant%2C%0A%0ACourse%20kosam%20chinna%20doubt%20vundi.">Whatsapp: 8333063366</Link> Whatsapp: 8333063366 </span> and
        we'll respond as soon as possible.
      </p>
    </>
  );
}
