"use client";
import { useState } from "react";
import { ModuleCard } from "./ModuleCard";
export function Modules2() {
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
    <div className="flex flex-col w-full h-55 justify-center px-4">
      <div className="flex flex-col w-full h-55">
        <h1 className="flex justify-center py-5 px-5 mx-2font-semibold text-white-800">
          Learn DSA for placements
        </h1>
        <div className="flex">
          <div className="flex w-full">
            <div className="flex px-4 flex-wrap m-2">
              {data.map((data) => {
                return (
                  <ModuleCard
                    key={data?.name}
                    name={data?.name}
                    description={data?.description}
                    chapters={data?.chapters}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
