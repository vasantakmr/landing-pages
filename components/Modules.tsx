"use client";
import { Description } from "@radix-ui/react-dialog";
import { useState } from "react";
import { ModuleCard } from "./ModuleCard";
export function Modules() {
  const [data, setData] = useState([
    {
      name: "Intro to Array",
      description: "Discover how to use and solve problems using arrays",
      chapters: 15,
    },
    {
      name: "Intro to String",
      description: "Discover how to use and solve problems using arrays",
      chapters: 3,
    },
    {
      name: "Bit Magic",
      description: "Discover how to use and solve problems using arrays",
      chapters: 7,
    },
    {
      name: "Greedy Algorithms",
      description: "Discover how to use and solve problems using arrays",
      chapters: 7,
    },
    {
      name: "Intro to Stacks",
      description: "Discover how to use and solve problems using arrays",
      chapters: 3,
    },
    {
      name: "Intro to Trees",
      description: "Discover how to use and solve problems using arrays",
      chapters: 3,
    },
    {
      name: "Linked Lists",
      description: "Discover how to use and solve problems using arrays",
      chapters: 3,
    },
    {
      name: "Recursion",
      description: "Discover how to use and solve problems using arrays",
      chapters: 3,
    },
    {
      name: "Divide & Conquer",
      description: "Discover how to use and solve problems using arrays",
      chapters: 3,
    },
  ]);

  return (
    <>
      <div className="flex flex-col w-full h-55">
        <h1 className="flex py-5 px-5 mx-2 font-semibold text-white-800">
          Learn DSA for placements
        </h1>
        <div className="flex overflow-x-scroll hide-scroll-bar">
          <div className="flex flex-nowrap ml-2 ">
            {data.map((data) => {
              return (
                <ModuleCard
                  name={data?.name}
                  description={data?.description}
                  chapters={data?.chapters}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
