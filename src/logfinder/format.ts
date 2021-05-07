import { LCDClient } from "@terra-money/terra.js";
import { Network } from "../network/network";
import { createLogMatcher } from "./execute";
import { anchorRuleSet } from "./rule-set/anchor-rule-set";
import { mirrorRuleSet } from "./rule-set/mirror-rule-set";

export const getTxInfo = async (data: string, network: Network) => {
  const lcd = new LCDClient(network);
  const tx = await lcd.tx.txInfo(data);

  const logMatcher = createLogMatcher(
    [anchorRuleSet(network.chainID), mirrorRuleSet(network.chainID)].flat()
  );
  if (tx.logs) {
    const matched = logMatcher(tx.logs.flatMap((log) => log.events))
      .flat()
      .filter(Boolean);
    console.log(matched);
    return matched;
  } else return null;
};
