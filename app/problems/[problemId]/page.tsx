'use client';

import Workspace from "@/components/problems/workspace/Workspace";
import { getProblem } from '@/utils/problems/getProblem'
 
export  default function ProblemDetails({ params }: { params: { problemId: string } }) {
  
  const obj = getProblem(params.problemId)

  return (
    <div>
      <Workspace problemId={obj} />
    </div>
  );
}
