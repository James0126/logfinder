import { Event } from "@terra-money/terra.js";
import { LogFinderRule, LogFragment } from "./create-log-finder";

export interface TransformResult {
  msgType: string;
  canonicalMsg: string[];
  payload: Event;
}

export type TransformFn = (
  logFragment: LogFragment,
  height?: number
) => TransformResult;

export interface LogFindersRuleSet {
  rule: LogFinderRule;
  transform: TransformFn;
}
