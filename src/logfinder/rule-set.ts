import { LogFindersRuleSet } from "./types";
import { createLogMatcher } from "./execute";
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
  blunaSwapRule,
  lunaSwapRule,
  ancSwapRule,
  ustSwapRule,
  stakeLPRule,
  unstakeLPRule,
  airdropRule,
  lpStakingRewardRule,
  borrowRewardsRule,
  govStakeRule,
  govUnstakeRule,
  createPollRule,
  castVoteRule,
} from "../logPatterns/anchor-logs-rule";

//only tequila
const anchorbLunaAddress = "terra1u0t35drzyy0mujj8rkdyzhe264uls4ug3wdp3x";
const anchorbLunaHubAddress = "terra1fflas6wv4snv8lsda9knvq2w0cyt493r8puh2e";
const anchorbLunaRwardAddress = "terra1ac24j6pdxh53czqyrkr6ygphdeftg7u3958tl2";
const anchorANCPairAddress = "terra1wfvczps2865j0awnurk9m04u7wdmd6qv3fdnvz";
const anchorbLunaPairAddress = "terra13e4jmcjnwrauvl2fnjdwex0exuzd8zrh5xk29v";
const anchorMarketAddress = "terra15dwd5mj8v59wpj0wvt233mf5efdff808c5tkal";
const anchorbLunaCustodyAddress =
  "terra1ltnkx0mv7lf2rca9f8w740ashu93ujughy4s7p";
const anchorLPStakingAddress = "terra19nxz35c8f7t3ghdxrxherym20tux8eccar0c3k";
const anchorGovAddress = "terra16ckeuu7c6ggu52a8se005mg5c0kd2kmuun63cu";
const anchorAirdropAddress = "terra1u5ywhlve3wugzqslqvm8ks2j0nsvrqjx0mgxpk";

const anchorProvideLiquidityRuleSet: LogFindersRuleSet = {
  rule: provideLiquidityRule(anchorANCPairAddress),
  transform: (fragment) => ({
    msgType: "anchor/provide-liquidity",
    canonicalMsg: [
      `Provide ${fragment.attributes[2].value} Liquidity to ${fragment.attributes[0].value}`,
      `Mint ${fragment.attributes[13].value}${fragment.attributes[10].value}`,
    ],
    payload: fragment,
  }),
};

const anchorWithdrawLiquidityRuleSet: LogFindersRuleSet = {
  rule: withdrawLiquidityRule(anchorANCPairAddress),
  transform: (fragment) => ({
    msgType: "anchor/withdraw-liquidity",
    canonicalMsg: [
      `Withdraw ${fragment.attributes[8].value} Liquidity from ${fragment.attributes[6].value}`,
      `Burn ${fragment.attributes[17].value}${fragment.attributes[14].value}`,
    ],
    payload: fragment,
  }),
};

const anchorDepositStableRuleSet: LogFindersRuleSet = {
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

const anchorRedeemStableRuleSet: LogFindersRuleSet = {
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

const anchorBondLunaRuleSet: LogFindersRuleSet = {
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

const anchorUnbondLunaRuleSet: LogFindersRuleSet = {
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

const anchorWithdrawUnbondedRuleSet: LogFindersRuleSet = {
  rule: withdrawUnbondedRule(anchorbLunaHubAddress),
  transform: (fragment) => ({
    msgType: "anchor/withdraw-unbonded",
    canonicalMsg: [
      `Withdraw ${fragment.attributes[3].value}uluna from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorClaimRewardRuleSet: LogFindersRuleSet = {
  rule: claimRewardRule(anchorbLunaRwardAddress),
  transform: (fragment) => ({
    msgType: "anchor/claim-reward",
    canonicalMsg: [
      `Claim ${fragment.attributes[3].value}uusd rewards from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorDepositCollateralRuleSet: LogFindersRuleSet = {
  rule: depositCollateralRule(anchorbLunaCustodyAddress),
  transform: (fragment) => ({
    msgType: "anchor/deposit-collateral",
    canonicalMsg: [
      `Deposit ${fragment.attributes[4].value}${fragment.attributes[0].value} to ${fragment.attributes[11].value}`,
    ],
    payload: fragment,
  }),
};

const anchorLockCollateralRuleSet: LogFindersRuleSet = {
  rule: lockCollateralRule(anchorbLunaCustodyAddress),
  transform: (fragment) => ({
    msgType: "anchor/lock-collateral",
    canonicalMsg: [
      `Lock ${fragment.attributes[3].value} to ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorUnlockCollateralRuleSet: LogFindersRuleSet = {
  rule: unlockCollateralRule(anchorbLunaCustodyAddress),
  transform: (fragment) => ({
    msgType: "anchor/unlock-collateral",
    canonicalMsg: [
      `Unlock ${fragment.attributes[3].value} from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorWithdrawCollateralRuleSet: LogFindersRuleSet = {
  rule: withdrawCollateralRule(anchorbLunaCustodyAddress),
  transform: (fragment) => ({
    msgType: "anchor/withdraw-collateral",
    canonicalMsg: [
      `Withdraw ${fragment.attributes[3].value}${fragment.attributes[4].value} from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorBorrowStableRuleSet: LogFindersRuleSet = {
  rule: borrowStableRule(anchorMarketAddress),
  transform: (fragment) => ({
    msgType: "anchor/borrow-stable",
    canonicalMsg: [
      `Borrow ${fragment.attributes[3].value}uusd from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorRepayStableRuleSet: LogFindersRuleSet = {
  rule: repayStableRule(anchorMarketAddress),
  transform: (fragment) => ({
    msgType: "anchor/repay-stable",
    canonicalMsg: [
      `Repay ${fragment.attributes[3].value}uusd from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorbLunaSwapRuleSet: LogFindersRuleSet = {
  rule: blunaSwapRule(anchorbLunaPairAddress),
  transform: (fragment) => ({
    msgType: "anchor/bLuna-swap",
    canonicalMsg: [
      `Swap ${fragment.attributes[18].value}${fragment.attributes[15].value} for ${fragment.attributes[17].value}${fragment.attributes[16].value}`,
    ],
    payload: fragment,
  }),
};

const anchorLunaSwapRuleSet: LogFindersRuleSet = {
  rule: lunaSwapRule(anchorbLunaPairAddress),
  transform: (fragment) => ({
    msgType: "anchor/Luna-swap",
    canonicalMsg: [
      `Swap ${fragment.attributes[4].value}${fragment.attributes[2].value} for ${fragment.attributes[5].value}${fragment.attributes[3].value}`,
    ],
    payload: fragment,
  }),
};

const anchorAncSwapRuleSet: LogFindersRuleSet = {
  rule: ancSwapRule(anchorANCPairAddress),
  transform: (fragment) => ({
    msgType: "anchor/ANC-swap",
    canonicalMsg: [
      `Swap ${fragment.attributes[4].value}${fragment.attributes[2].value} for ${fragment.attributes[5].value}${fragment.attributes[3].value}`,
    ],
    payload: fragment,
  }),
};

const anchorUstSwapRuleSet: LogFindersRuleSet = {
  rule: ustSwapRule(anchorANCPairAddress),
  transform: (fragment) => ({
    msgType: "anchor/UST-swap",
    canonicalMsg: [
      `Swap ${fragment.attributes[9].value}${fragment.attributes[7].value} for ${fragment.attributes[10].value}${fragment.attributes[8].value}`,
    ],
    payload: fragment,
  }),
};

const anchorStakeLPRuleSet: LogFindersRuleSet = {
  rule: stakeLPRule(anchorLPStakingAddress),
  transform: (fragment) => ({
    msgType: "anchor/stake-lp",
    canonicalMsg: [
      `Stake ${fragment.attributes[4].value}${fragment.attributes[0].value} to ${fragment.attributes[3].value}`,
    ],
    payload: fragment,
  }),
};

const anchorUnstakeLPRuleSet: LogFindersRuleSet = {
  rule: unstakeLPRule(anchorLPStakingAddress),
  transform: (fragment) => ({
    msgType: "anchor/unstake-lp",
    canonicalMsg: [
      `Unstake ${fragment.attributes[3].value}${fragment.attributes[4].value} from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorAirdropRuleSet: LogFindersRuleSet = {
  rule: airdropRule(anchorAirdropAddress),
  transform: (fragment) => ({
    msgType: "anchor/airdrop",
    canonicalMsg: [
      `Claim ${fragment.attributes[4].value}${fragment.attributes[5].value} from Anchor Airdrop`,
    ],
    payload: fragment,
  }),
};

const anchorLPStakingRewardRuleSet: LogFindersRuleSet = {
  rule: lpStakingRewardRule(anchorLPStakingAddress),
  transform: (fragment) => ({
    msgType: "anchor/lp-staking-reward",
    canonicalMsg: [
      `Claim ${fragment.attributes[3].value}${fragment.attributes[4].value} rewards from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorBorrowRewardRuleSet: LogFindersRuleSet = {
  rule: borrowRewardsRule(anchorMarketAddress),
  transform: (fragment) => ({
    msgType: "anchor/borrow-reward",
    canonicalMsg: [
      `Claim ${fragment.attributes[2].value}${fragment.attributes[7].value} rewards from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorGovStakeRuleSet: LogFindersRuleSet = {
  rule: govStakeRule(anchorGovAddress),
  transform: (fragment) => ({
    msgType: "anchor/gov-stake",
    canonicalMsg: [
      `Stake ${fragment.attributes[4].value}${fragment.attributes[0].value} to ${fragment.attributes[3].value}`,
    ],
    payload: fragment,
  }),
};

const anchorGovUntakeRuleSet: LogFindersRuleSet = {
  rule: govUnstakeRule(anchorGovAddress),
  transform: (fragment) => ({
    msgType: "anchor/gov-unstake",
    canonicalMsg: [
      `Unstake ${fragment.attributes[3].value}${fragment.attributes[4].value} from ${fragment.attributes[0].value}`,
    ],
    payload: fragment,
  }),
};

const anchorCreatePollRuleSet: LogFindersRuleSet = {
  rule: createPollRule(anchorGovAddress),
  transform: (fragment) => ({
    msgType: "anchor/create-poll",
    canonicalMsg: [`Create poll with ID ${fragment.attributes[8].value}`],
    payload: fragment,
  }),
};

const anchorCastVoteRuleSet: LogFindersRuleSet = {
  rule: castVoteRule(anchorGovAddress),
  transform: (fragment) => ({
    msgType: "anchor/cast-vote",
    canonicalMsg: [
      `Vote to poll with ID ${fragment.attributes[2].value} (${fragment.attributes[5].value})`,
    ],
    payload: fragment,
  }),
};

export const logMatcher = createLogMatcher([
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
  anchorbLunaSwapRuleSet,
  anchorLunaSwapRuleSet,
  anchorAncSwapRuleSet,
  anchorUstSwapRuleSet,
  anchorStakeLPRuleSet,
  anchorUnstakeLPRuleSet,
  anchorAirdropRuleSet,
  anchorLPStakingRewardRuleSet,
  anchorBorrowRewardRuleSet,
  anchorGovStakeRuleSet,
  anchorGovUntakeRuleSet,
  anchorCreatePollRuleSet,
  anchorCastVoteRuleSet,
]);
