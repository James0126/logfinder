import { LogFindersRuleSet } from "./types";
import {
  bondLunaRule,
  borrowStableRule,
  claimRewardRule,
  depositCollateralRule,
  depositStableRule,
  lockCollateralRule,
  provideLiquidityRule,
  redeemStableRule,
  repayStableRule,
  unbondLunaRule,
  unlockCollateralRule,
  withdrawCollateralRule,
  withdrawLiquidityRule,
  withdrawUnbondedRule,
} from "../logPatterns/anchor-logs-rule";

//only tequilat
const anchorbLunaAddress = "terra1u0t35drzyy0mujj8rkdyzhe264uls4ug3wdp3x";
const anchorbLunaHubAddress = "terra1fflas6wv4snv8lsda9knvq2w0cyt493r8puh2e";
const anchorbLunaRwardAddress = "terra1ac24j6pdxh53czqyrkr6ygphdeftg7u3958tl2";
const anchorPairAddress = "terra1wfvczps2865j0awnurk9m04u7wdmd6qv3fdnvz";
const anchorMarketAddress = "terra15dwd5mj8v59wpj0wvt233mf5efdff808c5tkal";
const anchorbLunaCustodyAddress =
  "terra1ltnkx0mv7lf2rca9f8w740ashu93ujughy4s7p";

export const anchorProvideLiquidityRuleSet: LogFindersRuleSet = {
  rule: provideLiquidityRule(anchorPairAddress),
  transform: (fragment) => ({
    msgType: "anchor/provide-liquidity",
    canonicalMsg: [
      `Provide ${fragment.attributes[2].value} Liquidity to ${fragment.attributes[0].value}`,
      `Mint ${fragment.attributes[13].value}${fragment.attributes[10].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorWithdrawLiquidityRuleSet: LogFindersRuleSet = {
  rule: withdrawLiquidityRule(anchorPairAddress),
  transform: (fragment) => ({
    msgType: "anchor/withdraw-liquidity",
    canonicalMsg: [
      `Withdraw ${fragment.attributes[8].value} Liquidity from ${fragment.attributes[6].value}`,
      `Burn ${fragment.attributes[17].value}${fragment.attributes[14].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorDepositStableRuleSet: LogFindersRuleSet = {
  rule: depositStableRule(anchorMarketAddress),
  transform: (fragment) => ({
    msgType: "anchor/deposit-stable",
    canonicalMsg: [
      `Deposit ${fragment.attributes[4].value}uusd to ${fragment.attributes[0].value}`,
      `Mint ${fragment.attributes[3].value}${fragment.attributes[5].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorRedeemStableRuleSet: LogFindersRuleSet = {
  rule: redeemStableRule(anchorMarketAddress),
  transform: (fragment) => ({
    msgType: "anchor/redeem-stable",
    canonicalMsg: [
      `Withdraw ${fragment.attributes[7].value}uusd from ${fragment.attributes[5].value}`,
      `Burn ${fragment.attributes[7].value}${fragment.attributes[9].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorBondLunaRuleSet: LogFindersRuleSet = {
  rule: bondLunaRule(anchorbLunaHubAddress),
  transform: (fragment) => ({
    msgType: "anchor/bond-luna",
    canonicalMsg: [
      `Bond ${fragment.attributes[3].value}uluna`,
      `Mint ${fragment.attributes[4].value}${fragment.attributes[5].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorUnbondLunaRuleSet: LogFindersRuleSet = {
  rule: unbondLunaRule(anchorbLunaAddress),
  transform: (fragment) => ({
    msgType: "anchor/unbond-bluna",
    canonicalMsg: [
      `Unbond ${fragment.attributes[4].value}${fragment.attributes[0].value}`,
      `Burn ${fragment.attributes[16].value}${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorWithdrawUnbondedRuleSet: LogFindersRuleSet = {
  rule: withdrawUnbondedRule(anchorbLunaHubAddress),
  transform: (fragment) => ({
    msgType: "anchor/withdraw-unbonded",
    canonicalMsg: [
      `Withdraw ${fragment.attributes[3].value}uluna from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorClaimRewardRuleSet: LogFindersRuleSet = {
  rule: claimRewardRule(anchorbLunaRwardAddress),
  transform: (fragment) => ({
    msgType: "anchor/claim-reward",
    canonicalMsg: [
      `Claim ${fragment.attributes[3].value}uusd rewards from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorDepositCollateralRuleSet: LogFindersRuleSet = {
  rule: depositCollateralRule(anchorbLunaCustodyAddress),
  transform: (fragment) => ({
    msgType: "anchor/deposit-collateral",
    canonicalMsg: [
      `Deposit ${fragment.attributes[4].value}${fragment.attributes[0].value} to ${fragment.attributes[11].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorLockCollateralRuleSet: LogFindersRuleSet = {
  rule: lockCollateralRule(anchorbLunaCustodyAddress),
  transform: (fragment) => ({
    msgType: "anchor/lock-collateral",
    canonicalMsg: [
      `Lock ${fragment.attributes[3].value} to ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorUnlockCollateralRuleSet: LogFindersRuleSet = {
  rule: unlockCollateralRule(anchorbLunaCustodyAddress),
  transform: (fragment) => ({
    msgType: "anchor/unlock-collateral",
    canonicalMsg: [
      `Unlock ${fragment.attributes[3].value} from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorWithdrawCollateralRuleSet: LogFindersRuleSet = {
  rule: withdrawCollateralRule(anchorbLunaCustodyAddress),
  transform: (fragment) => ({
    msgType: "anchor/withdraw-collateral",
    canonicalMsg: [
      `Withdraw ${fragment.attributes[3].value}${fragment.attributes[4].value} from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorBorrowStableRuleSet: LogFindersRuleSet = {
  rule: borrowStableRule(anchorMarketAddress),
  transform: (fragment) => ({
    msgType: "anchor/borrow-stable",
    canonicalMsg: [
      `Borrow ${fragment.attributes[3].value}uusd from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

export const anchorRepayStableRuleSet: LogFindersRuleSet = {
  rule: repayStableRule(anchorMarketAddress),
  transform: (fragment) => ({
    msgType: "anchor/repay-stable",
    canonicalMsg: [
      `Repay ${fragment.attributes[3].value}uusd from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};
