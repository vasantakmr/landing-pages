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
        <div className="flex">
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
          <div className=" flex justify-center items-center w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
