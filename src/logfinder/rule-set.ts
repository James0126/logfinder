import { LogFindersRuleSet } from "./types";
import {
  provideLiquidityRule,
  withdrawLiquidityRule,
} from "../logPatterns/anchor-logs-rule";

export const anchorProvideLiquidityRuleSet: LogFindersRuleSet = {
  rule: provideLiquidityRule("terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3"),
  transform: (fragment) => ({
    msgType: "anchor/provide-liquidity",
    canonicalMsg: `Provided ${fragment.attributes[2].value}`,
    payload: fragment,
  }),
};

export const anchorWithdrawLiquidityRuleSet: LogFindersRuleSet = {
  rule: withdrawLiquidityRule("terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3"),
  transform: (fragment) => ({
    msgType: "anchor/withdraw-liquidity",
    canonicalMsg: `Withdraw ${fragment.attributes[8].value}`,
    payload: fragment,
  }),
};
