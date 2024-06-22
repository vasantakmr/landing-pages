import { Problem } from "@/utils/types/problem";
import { problems } from "@/utils/problems";

export function getProblem( problemId: string ): Problem {

  const foundProblem = problems[problemId]
  return foundProblem;
}