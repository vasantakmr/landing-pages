import React from "react";
import { Playground } from "@/components/problems/workspace/playground/Playground";
import { ProblemDescription } from "@/components/problems/workspace/ProblemDescription";
import { Problem } from "@/utils/types/problem";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Workspace({ problemId }: { problemId: Problem }) {
  // const ref = useRef<HTMLDivElement>(null);
  // const [width, setWidth] = useState(0);

  // useEffect (() => {
  //     const div = ref.current!;

  //     const observer = new ResizeObserver(() => {
  //       setWidth(div.offsetWidth);
  //     });
  //     observer.observe(div);

  //     return () => {
  //       observer.unobserve(div);
  //       observer.disconnect();
  //     };
  //   }, []);

  //   const useVerticalLayout = width < 800;

  return (
    //<div ref={ref} style={{ height: useVerticalLayout ? "30rem" : undefined }}>
    <ResizablePanelGroup
      //direction={useVerticalLayout ? "vertical" : "horizontal"}
      direction="horizontal"
      className="max-w-full h-screen rounded-lg border"
    >
      <ResizablePanel defaultSize={50} className="overflow-auto">
        <ProblemDescription problemId={problemId} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} className="overflow-auto">
        <Playground problemId={problemId} />
      </ResizablePanel>
    </ResizablePanelGroup>
    //</div>
  );
}
