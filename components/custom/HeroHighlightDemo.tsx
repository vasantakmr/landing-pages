"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Image from "next/image";
import { Card } from "../ui/card";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="">
      <Card className="w-full flex flex-row pt-28 border-none rounded-xl">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Learn DSA and Programming to crack your dream tech job
        </motion.h1>
        <div>
          <Image src="/img/img.webp" alt="guru" width={500} height={500} />
        </div>
      </Card>
    </HeroHighlight>
  );
}
