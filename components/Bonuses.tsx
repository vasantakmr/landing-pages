import Image from "next/image";
import ShimmerButton from "./landing/ShimmerButton";
import { Card, CardHeader } from "./ui/card";
import { LockKeyholeOpen } from "lucide-react";
import Link from "next/link";

export function Bonuses() {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-7 p-12">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold flex justify-center text-center items-center w-full">
        <p>
          Unlock bonuses worth{" "}
          <span className="text-orange-600 text-6xl decoration-wavy">
            ₹15,000
          </span>
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-10 p-6">
        <Card className="w-80 h-96 border-2 border-dashed border-orange-500 rounded-xl">
          <div className="w-full h-full flex flex-col">
            <div className="h-1/6 flex w-full font-bold text-lg justify-center items-center bg-orange-500 text-white rounded-t-xl">
              Bonus 1
            </div>
            <div className="h-5/6 flex w-full justify-center items-center bg-cover flex-col">
              <h1 className="font-extrabold text-2xl">ATS Resume Building</h1>
              <Image src="/bonus1.png" alt="bonus1" width={200} height={200} />
            </div>
            <div className="h-1/6 flex w-full justify-center items-center gap-5 bg-orange-100 rounded-b-xl">
              <span className="line-through text-2xl text-black font-semibold">
                ₹3000
              </span>{" "}
              <span className="text-2xl font-bold text-orange-500">Free</span>
            </div>
          </div>
        </Card>
        <Card className="w-80 h-96 border-2 border-dashed border-orange-500 rounded-xl">
          <div className="w-full h-full flex flex-col">
            <div className="h-1/6 font-bold text-lg flex w-full justify-center items-center bg-orange-500 text-white rounded-t-xl">
              Bonus 2
            </div>
            <div className="h-5/6 flex w-full justify-center items-center flex-col">
              <h1 className="font-extrabold text-2xl">Interview Preparation</h1>
              <Image src="/bonus2.png" alt="bonus2" width={200} height={200} />
            </div>
            <div className="h-1/6 flex w-full justify-center items-center gap-5 bg-orange-100 rounded-b-xl">
              <span className="line-through text-2xl text-black font-semibold">
                ₹7000
              </span>{" "}
              <span className="text-2xl font-bold text-orange-500">Free</span>
            </div>
          </div>
        </Card>
        <Card className=" w-80 h-96 border-2 border-dashed border-orange-500 rounded-xl">
          <div className="w-full h-full flex flex-col">
            <div className="h-1/6 flex w-full font-bold text-lg justify-center items-center bg-orange-500 text-white rounded-t-xl">
              Bonus 3
            </div>
            <div className="h-5/6 flex w-full justify-center items-center flex-col">
              <h1 className="font-extrabold text-2xl">1:1 MockInterview</h1>
              <h1 className="font-extrabold text-2xl">Mentorship Sessions</h1>
              <Image src="/bonus3.png" alt="bonus2" width={200} height={200} />
            </div>
            <div className="h-1/6 flex w-full justify-center items-center gap-5 bg-orange-100 rounded-b-xl">
              <span className="line-through text-2xl text-black font-semibold">
                ₹5000
              </span>{" "}
              <span className="text-2xl font-bold text-orange-500">Free</span>
            </div>
          </div>
        </Card>
      </div>
      <div className="flex justify-center">
        <Link href="https://rzp.io/l/gurucodes-cpp-dsa">
          <button className="inline-flex w-56 h-16 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-background dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-3">
            Unlock Bonuses
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lock-keyhole-open"
            >
              <circle cx="12" cy="16" r="1" />
              <rect width="18" height="12" x="3" y="10" rx="2" />
              <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
            </svg>
          </button>
        </Link>
        {/* <ShimmerButton
          text={`
          )}`}
        /> */}
      </div>
    </div>
  );
}
