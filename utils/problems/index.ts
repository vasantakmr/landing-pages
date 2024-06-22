import { Problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { twoSum } from "./two-sums";
import { validParentheses } from "./valid-parentheses";


interface ProblemMap {
  [key: string]: Problem;
}

export const problems: ProblemMap = {
  "two-sum": twoSum,
  "reverse-linked-list": reverseLinkedList,
  "jump-game": jumpGame,
  "valid-parentheses": validParentheses,
};