import { Event } from "@terra-money/terra.js";
import { TransformFn, TransformResult } from "./types";

export type LogFragment = Event;
export type LogFinderFn = (log: LogFragment, height?: number) => void;
export type LogFinderMapper = (log: Event, height?: number) => void;
export interface LogFinderRule {
  type: string;
  attributes: string[][];
}

export const createLogFinder =
  (logFindRule: LogFinderRule, callback: LogFinderFn): LogFinderMapper =>
  (event: Event, height?: number) => {
    // if type is not a match, skip
    if (event.type !== logFindRule.type) return;

    const match = event.attributes.every((attr, i) => {
      const rule = logFindRule.attributes[i];

      if (typeof rule === "undefined") {
        return false;
      }

      // key-only
      if (rule.length === 1) {
        return attr.key === rule[0];
      } else if (rule.length === 2) {
        return attr.key === rule[0] && attr.value === rule[1];
      } else {
        throw new Error("invalid rule");
      }
    });

    // run callback if it is a match
    if (match) callback(event, height);
  };

// returning log finder
export type ReturningLogFinderResult = {
  fragment: LogFragment;
  height?: number;
}[];
export type ReturningLogFinderMapper = (
  log: Event,
  height?: number
) => { fragment: LogFragment; height?: number }[];

// TODO: fix results for concurrency handling
export const createReturningLogFinder =
  (logFindRule: LogFinderRule, transform: TransformFn) =>
  (event: Event, height?: number) => {
    const results: TransformResult[] = [];
    const cb: LogFinderFn = (log) => results.push(transform(log));
    const lf = createLogFinder(logFindRule, cb);

    lf(event, height);

    return results.length === 0 ? null : results;
  };
