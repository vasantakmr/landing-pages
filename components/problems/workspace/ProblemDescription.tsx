import { Badge } from "@/components/ui/badge";
import { Problem } from "@/utils/types/problem";
import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";

export function ProblemDescription({ problemId }: { problemId: Problem }) {
  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-foreground overflow-x-hidden">
        <div
          className={
            "bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-foreground font-medium">
                {problemId.title}
              </div>
            </div>
            <div className="flex items-center mt-3">
              <Badge>Easy</Badge>

              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                Circle Icon
              </div>
              <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                <ThumbsUp />
                <span className="text-xs">120</span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                <ThumbsDown />
                <span className="text-xs">2</span>
              </div>
              <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                <Star />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-foreground text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problemId.problemStatement }}
              />
            </div>

            {/* Examples */}
            <div className="mt-4">
              {problemId.examples.map((example, index) => (
                <div key={example.id}>
                  <p className="font-medium text-foreground ">
                    Example {index + 1}:{" "}
                  </p>
                  {example.img && (
                    <Image
                      src={example.img}
                      alt=""
                      className="mt-3"
                      width={350}
                      height={200}
                    />
                  )}
                  <div className="example-card">
                    <pre>
                      <strong className="text-foreground">Input: </strong>{" "}
                      {example.inputText}
                      <br />
                      <strong>Output:</strong>
                      {example.outputText} <br />
                      {example.explanation && (
                        <>
                          <strong>Explanation:</strong> {example.explanation}
                        </>
                      )}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className="my-8 pb-4">
              <div className="text-foreground text-sm font-medium">Constraints:</div>
              <ul className="text-foreground ml-5 list-disc ">
                <div
                  dangerouslySetInnerHTML={{ __html: problemId.constraints }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
