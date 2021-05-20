import { Dictionary } from "ramda";
import { LogFindersRuleSet } from "../types";
import contracts from "../../contracts/contracts.json";
import {
  mAssetSwapRule,
  openPositionRule,
  depositRule,
  withdrawRule,
  burnRule,
  provideLiquidityRule,
  withdrawLiquidityRule,
  stakeLPRule,
  unstakeLPRule,
  lpStakingRewardRule,
  govStakeRule,
  govUnstakeRule,
  createPollRule,
  castVoteRule,
  airdropRule,
  buySubmitOrderRule,
  sellSubmitOrderRule,
  cancelOrderRule,
  buyExecuteOrderRule,
  sellExecuteOrderRule,
  ustSwapRule,
  transferRule,
} from "../../logPatterns/mirror-logs-rule";

export const mirrorRuleSet = (network: string) => {
  const contract = (contracts as Dictionary<Dictionary<string>>)[network];

  const mirrormAssetSwapRuleSet: LogFindersRuleSet = {
    rule: mAssetSwapRule(),
    transform: (fragment) => ({
      msgType: "mirror/mAsset-swap",
      canonicalMsg: [
        `Swap ${fragment.attributes[4].value}${fragment.attributes[2].value} for ${fragment.attributes[5].value}${fragment.attributes[3].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorUstSwapRuleSet: LogFindersRuleSet = {
    rule: ustSwapRule(),
    transform: (fragment) => ({
      msgType: "mirror/UST-swap",
      canonicalMsg: [
        `Swap ${fragment.attributes[9].value}${fragment.attributes[7].value} for ${fragment.attributes[10].value}${fragment.attributes[8].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorOpenPositionRuleSet: LogFindersRuleSet = {
    rule: openPositionRule(contract["mirrorMintAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/open-position",
      canonicalMsg: [
        `Deposit ${fragment.attributes[4].value} (Position ID: ${fragment.attributes[2].value})`,
        `Mint ${fragment.attributes[3].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorDepositRuleSet: LogFindersRuleSet = {
    rule: depositRule(contract["mirrorMintAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/deposit",
      canonicalMsg: [
        `Deposit ${fragment.attributes[3].value} (Position ID: ${fragment.attributes[2].value})`,
      ],
      payload: fragment,
    }),
  };

  const mirrorWithdrawRuleSet: LogFindersRuleSet = {
    rule: withdrawRule(contract["mirrorMintAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/withdraw",
      canonicalMsg: [
        `Withdraw ${fragment.attributes[3].value} (Position ID: ${fragment.attributes[2].value})`,
      ],
      payload: fragment,
    }),
  };

  const mirrorBurnRuleSet: LogFindersRuleSet = {
    rule: burnRule(contract["mirrorMintAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/burn",
      canonicalMsg: [
        `Burn ${fragment.attributes[8].value} (Position ID: ${fragment.attributes[7].value})`,
      ],
      payload: fragment,
    }),
  };

  const mirrorProvideLiquidityRuleSet: LogFindersRuleSet = {
    rule: provideLiquidityRule(),
    transform: (fragment) => ({
      msgType: "mirror/provide-liquidity",
      canonicalMsg: [
        `Provide ${fragment.attributes[2].value} Liquidity to ${fragment.attributes[0].value}`,
        `Mint ${fragment.attributes[13].value}${fragment.attributes[10].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorWithdrawLiquidityRuleSet: LogFindersRuleSet = {
    rule: withdrawLiquidityRule(),
    transform: (fragment) => ({
      msgType: "mirror/withdraw-liquidity",
      canonicalMsg: [
        `Withdraw ${fragment.attributes[8].value} Liquidity from ${fragment.attributes[5].value}`,
        `Burn ${fragment.attributes[17].value}${fragment.attributes[14].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorStakeLPRuleSet: LogFindersRuleSet = {
    rule: stakeLPRule(contract["mirrorStakingAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/stake-lp",
      canonicalMsg: [
        `Stake ${fragment.attributes[8].value}${fragment.attributes[0].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorUnstakeLPRuleSet: LogFindersRuleSet = {
    rule: unstakeLPRule(contract["mirrorStakingAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/unstake-lp",
      canonicalMsg: [
        `Unstake ${fragment.attributes[8].value}${fragment.attributes[4].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorLPStakingRewardRuleSet: LogFindersRuleSet = {
    rule: lpStakingRewardRule(contract["mirrorStakingAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/lpStaking-reward",
      canonicalMsg: [
        `Claim Reward ${fragment.attributes[7].value}${fragment.attributes[3].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorGovStakeRuleSet: LogFindersRuleSet = {
    rule: govStakeRule(contract["mirrorGovAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/governance-stake",
      canonicalMsg: [
        `Stake ${fragment.attributes[4].value}${fragment.attributes[0].value} to ${fragment.attributes[5].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorGovUnstakeRuleSet: LogFindersRuleSet = {
    rule: govUnstakeRule(contract["mirrorGovAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/governance-unstake",
      canonicalMsg: [
        `Unstake ${fragment.attributes[3].value}${fragment.attributes[4].value} to ${fragment.attributes[0].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorCreatePollRuleSet: LogFindersRuleSet = {
    rule: createPollRule(contract["mirrorGovAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/create-poll",
      canonicalMsg: [`Create Poll (Poll ID: ${fragment.attributes[8].value})`],
      payload: fragment,
    }),
  };

  const mirrorCastVoteRuleSet: LogFindersRuleSet = {
    rule: castVoteRule(contract["mirrorGovAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/cast-vote",
      canonicalMsg: [
        `Vote to Poll (Poll ID: ${fragment.attributes[2].value}) (${fragment.attributes[1].value})`,
      ],
      payload: fragment,
    }),
  };

  const mirrorAirdropRuleSet: LogFindersRuleSet = {
    rule: airdropRule(contract["mirrorAirdropAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/airdrop",
      canonicalMsg: [
        `Claim ${fragment.attributes[9].value}${fragment.attributes[5].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorBuySubmitOrderRuleSet: LogFindersRuleSet = {
    rule: buySubmitOrderRule(contract["mirrorLimitOrderAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/submit-order-buy",
      canonicalMsg: [
        `Order to buy ${fragment.attributes[5].value} with ${fragment.attributes[4].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorSellSubmitOrderRuleSet: LogFindersRuleSet = {
    rule: sellSubmitOrderRule(contract["mirrorLimitOrderAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/submit-order-sell",
      canonicalMsg: [
        `Order to sell ${fragment.attributes[9].value} for ${fragment.attributes[10].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorCancelOrderRuleSet: LogFindersRuleSet = {
    rule: cancelOrderRule(contract["mirrorLimitOrderAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/cancel-order",
      canonicalMsg: [`Canceled limit order ID ${fragment.attributes[2].value}`],
      payload: fragment,
    }),
  };

  const mirrorBuyExecuteOrderRuleSet: LogFindersRuleSet = {
    rule: buyExecuteOrderRule(contract["mirrorLimitOrderAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/execute-order-buy",
      canonicalMsg: [
        `Bought ${fragment.attributes[9].value} with ${fragment.attributes[8].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorSellExecuteOrderRuleSet: LogFindersRuleSet = {
    rule: sellExecuteOrderRule(contract["mirrorLimitOrderAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/execute-order-sell",
      canonicalMsg: [
        `Sold ${fragment.attributes[3].value} for ${fragment.attributes[4].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorTransferRuleSet: LogFindersRuleSet = {
    rule: transferRule(contract["mirrorMIRAddress"]),
    transform: (fragment) => ({
      msgType: "mirror/transfer",
      canonicalMsg: [
        `Transfer ${fragment.attributes[4].value}${fragment.attributes[0].value} to ${fragment.attributes[2].value}`,
      ],
      payload: fragment,
    }),
  };

  const mirrorRuleArray: LogFindersRuleSet[] = [
    mirrormAssetSwapRuleSet,
    mirrorUstSwapRuleSet,
    mirrorOpenPositionRuleSet,
    mirrorDepositRuleSet,
    mirrorWithdrawRuleSet,
    mirrorBurnRuleSet,
    mirrorProvideLiquidityRuleSet,
    mirrorWithdrawLiquidityRuleSet,
    mirrorStakeLPRuleSet,
    mirrorUnstakeLPRuleSet,
    mirrorLPStakingRewardRuleSet,
    mirrorGovStakeRuleSet,
    mirrorGovUnstakeRuleSet,
    mirrorCreatePollRuleSet,
    mirrorCastVoteRuleSet,
    mirrorAirdropRuleSet,
    mirrorBuySubmitOrderRuleSet,
    mirrorSellSubmitOrderRuleSet,
    mirrorCancelOrderRuleSet,
    mirrorBuyExecuteOrderRuleSet,
    mirrorSellExecuteOrderRuleSet,
    mirrorTransferRuleSet,
  ];

  return mirrorRuleArray;
};
