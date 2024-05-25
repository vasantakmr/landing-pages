import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TestCasesTabs } from "./testcases";

export function IDE() {
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
        <div className="flex h-[800px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} className="overflow-auto">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <div className="pt-6 px-6 font-semibold">Test Cases</div>
            <div className="flex h-full justify-center p-6">
              <TestCasesTabs />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    //</div>
  );
}
