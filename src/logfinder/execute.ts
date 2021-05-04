import { createReturningLogFinder } from "./create-log-finder";
import { Event } from "@terra-money/terra.js";
import { LogFindersRuleSet } from "./types";

export const createLogMatcher = (
  injectedLogFindersRuleSet: LogFindersRuleSet[] = []
) => {
  const logFindersRuleSet: LogFindersRuleSet[] = [...injectedLogFindersRuleSet];

  const logFinders = logFindersRuleSet.map(({ rule, transform }) =>
    createReturningLogFinder(rule, transform)
  );

  return (events: Event[]) => {
    return events.flatMap((event) =>
      logFinders.map((logFinderFn) => logFinderFn(event))
    );
  };
};
