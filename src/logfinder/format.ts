import { LCDClient, TxInfo } from "@terra-money/terra.js";
import { Network } from "../network/network";
import { createLogMatcher } from "./execute";
import { anchorRuleSet } from "./rule-set/anchor-rule-set";
import { mirrorRuleSet } from "./rule-set/mirror-rule-set";
import { terraRuleSet } from "./rule-set/terra-rule-set";

const rules = (network: Network) =>
  [
    anchorRuleSet(network.chainID),
    mirrorRuleSet(network.chainID),
    terraRuleSet(network.chainID),
  ].flat();

export const parseHash = async (data: string, network: Network) => {
  const lcd = new LCDClient(network);
  const tx = await lcd.tx.txInfo(data);

  const logMatcher = createLogMatcher(rules(network));
  if (tx.logs) {
    const matched = logMatcher(tx.logs.flatMap((log) => log?.events))
      .flat()
      .filter(Boolean);
    console.log(matched);
    return matched;
  } else return null;
};

export const parseData = (data: string, network: Network) => {
  const tx: TxInfo = JSON.parse(data);

  const logMatcher = createLogMatcher(rules(network));

  if (tx.logs) {
    const matched = logMatcher(tx.logs.flatMap((log) => log.events))
      .flat()
      .filter(Boolean);
    console.log(matched);
    return matched;
  } else return null;
};
