import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Expand, Settings } from "lucide-react";
import React from "react";

type PreferenceNavProps = {};

const PreferenceNav: React.FC<PreferenceNavProps> = () => {
  return (
    <div className="flex items-center justify-between bg-dark-layer-2 h-11 w-full">
      <div className="flex items-center text-foreground">
        <button className="flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2 dark:text-dark-label-2">
              JavaScript
            </div>
          </div>
        </button>
      </div>

      <div className="flex gap-2 items-center m-4">
        <button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
                  <Settings className="h-4 w-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </button>

        <button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
                  <Expand className="h-4 w-4"/>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Full Screen</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </button>
      </div>
    </div>
  );
};
export default PreferenceNav;
