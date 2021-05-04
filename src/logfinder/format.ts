import { LCDClient } from "@terra-money/terra.js";
import {
  anchorProvideLiquidityRuleSet,
  anchorWithdrawLiquidityRuleSet,
} from "./rule-set";
import { createLogMatcher } from "./execute";

export const getTxInfo = async (data: string) => {
  const lcd = new LCDClient({
    URL: "https://lcd.terra.dev",
    chainID: "columbus-4",
  });
  const tx = await lcd.tx.txInfo(data);

  //B1030469F398F8B137E86FF19A89638843727F87A9E73CD6D8E223BDE9BFF8A4
  const logMatcher = createLogMatcher([
    anchorProvideLiquidityRuleSet,
    anchorWithdrawLiquidityRuleSet,
  ]);

  if (tx.logs) {
    const matched = logMatcher(tx.logs.flatMap((log) => log.events))
      .flat()
      .filter(Boolean);
    return matched;
  } else return null;
};
