import React from "react";
import PreferenceNav from "@/components/problems/workspace/playground/PreferenceNav";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import EditorFooter from "./EditorFooter";
import { Problem } from "@/utils/types/problem";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Playground({ problemId }: { problemId: Problem }) {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
      <PreferenceNav />
      <div className="h-[calc(100vh-94px)]">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <ScrollArea className="h-full">
              <div className="w-full overflow-auto">
                <CodeMirror
                  value={problemId.starterCode}
                  theme={vscodeDark}
                  style={{ fontSize: 16 }}
                />
              </div>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <ScrollArea className="h-full">
              <div className="w-full px-5 overflow-auto	">
                {/* testcase heading */}
                <div className="flex h-10 items-center space-x-6">
                  <div className="relative flex h-full flex-col justify-center cursor-pointer">
                    <div className="text-sm font-medium leading-5 text-foreground">
                      Testcases
                    </div>
                    <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-foreground" />
                  </div>
                </div>

                <div className="flex">
                  {problemId.examples.map((example, index) => (
                    <div className="mr-2 items-start mt-2 " key={example.id}>
                      <div className="flex flex-wrap items-center gap-y-4">
                        <div
                          className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap text-foreground`}
                        >
                          Case {index + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="font-semibold my-4">
                  <p className="text-sm font-medium mt-4 text-foreground">
                    Input:
                  </p>
                  <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-foreground mt-2">
                    [2, 3, 11, 23]
                  </div>
                  <p className="text-sm font-medium mt-4 text-foreground">
                    Output:
                  </p>
                  <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-foreground mt-2">
                    [0, 1]
                  </div>
                </div>
              </div>
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <EditorFooter />
    </div>
  );
}
export default Playground;
