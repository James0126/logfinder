import { LCDClient } from "@terra-money/terra.js";
import { createLogMatcher } from "./execute";
import { anchorRuleArray } from "./rule-set/anchor-rule-set";
import { mirrorRuleArray } from "./rule-set/mirror-rule-set";

export const getTxInfo = async (data: string) => {
  const lcd = new LCDClient({
    URL: "https://tequila-lcd.terra.dev",
    chainID: "tequila-0004",
  });
  const tx = await lcd.tx.txInfo(data);
  const logMatcher = createLogMatcher(
    [anchorRuleArray, mirrorRuleArray].flat()
  );
  if (tx.logs) {
    const matched = logMatcher(tx.logs.flatMap((log) => log.events))
      .flat()
      .filter(Boolean);
    console.log(matched);
    return matched;
  } else return null;
};
