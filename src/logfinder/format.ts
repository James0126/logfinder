import { LCDClient } from "@terra-money/terra.js";
import {
  anchorBondLunaRuleSet,
  anchorBorrowStableRuleSet,
  anchorClaimRewardRuleSet,
  anchorDepositCollateralRuleSet,
  anchorDepositStableRuleSet,
  anchorLockCollateralRuleSet,
  anchorProvideLiquidityRuleSet,
  anchorRedeemStableRuleSet,
  anchorRepayStableRuleSet,
  anchorUnbondLunaRuleSet,
  anchorUnlockCollateralRuleSet,
  anchorWithdrawCollateralRuleSet,
  anchorWithdrawLiquidityRuleSet,
  anchorWithdrawUnbondedRuleSet,
} from "./rule-set";
import { createLogMatcher } from "./execute";

export const getTxInfo = async (data: string) => {
  const lcd = new LCDClient({
    URL: "https://tequila-lcd.terra.dev",
    chainID: "tequila-0004",
  });
  const tx = await lcd.tx.txInfo(data);

  const logMatcher = createLogMatcher([
    anchorProvideLiquidityRuleSet,
    anchorWithdrawLiquidityRuleSet,
    anchorDepositStableRuleSet,
    anchorRedeemStableRuleSet,
    anchorBondLunaRuleSet,
    anchorUnbondLunaRuleSet,
    anchorWithdrawUnbondedRuleSet,
    anchorClaimRewardRuleSet,
    anchorDepositCollateralRuleSet,
    anchorLockCollateralRuleSet,
    anchorUnlockCollateralRuleSet,
    anchorWithdrawCollateralRuleSet,
    anchorBorrowStableRuleSet,
    anchorRepayStableRuleSet,
  ]);

  if (tx.logs) {
    const matched = logMatcher(tx.logs.flatMap((log) => log.events))
      .flat()
      .filter(Boolean);
    console.log(matched);
    return matched;
  } else return null;
};
