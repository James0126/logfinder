// const msg = {
//   msg_index: 1,
//   log: "",
//   events: [
//     {
//       type: "execute_contract",
//       attributes: [
//         {
//           key: "sender",
//           value: "terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3",
//         },
//         {
//           key: "contract_address",
//           value: "terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76",
//         },
//         {
//           key: "sender",
//           value: "terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3",
//         },
//         {
//           key: "contract_address",
//           value: "terra1gecs98vcuktyfkrve9czrpgtg0m3aq586x6gzm",
//         },
//         {
//           key: "sender",
//           value: "terra10808lqrhwvd9lk0gjyvsjmhnxzcc4kz6j09tj6",
//         },
//         {
//           key: "contract_address",
//           value: "terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3",
//         },
//       ],
//     },
//     {
//       type: "from_contract",
//       attributes: [
//         {
//           key: "contract_address",
//           value: "terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3",
//         },
//         { key: "action", value: "provide_liquidity" },
//         {
//           key: "assets",
//           value:
//             "617163133terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76, 3190236000uusd",
//         },
//         { key: "share", value: "1319903143" },
//         {
//           key: "contract_address",
//           value: "terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76",
//         },
//         { key: "action", value: "transfer_from" },
//         { key: "from", value: "terra10808lqrhwvd9lk0gjyvsjmhnxzcc4kz6j09tj6" },
//         { key: "to", value: "terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3" },
//         { key: "by", value: "terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3" },
//         { key: "amount", value: "617163133" },
//         {
//           key: "contract_address",
//           value: "terra1gecs98vcuktyfkrve9czrpgtg0m3aq586x6gzm",
//         },
//         { key: "action", value: "mint" },
//         { key: "to", value: "terra10808lqrhwvd9lk0gjyvsjmhnxzcc4kz6j09tj6" },
//         { key: "amount", value: "1319903143" },
//       ],
//     },
//     {
//       type: "message",
//       attributes: [
//         { key: "action", value: "execute_contract" },
//         { key: "module", value: "wasm" },
//         {
//           key: "sender",
//           value: "terra10808lqrhwvd9lk0gjyvsjmhnxzcc4kz6j09tj6",
//         },
//       ],
//     },
//     {
//       type: "transfer",
//       attributes: [
//         {
//           key: "recipient",
//           value: "terra1gm5p3ner9x9xpwugn9sp6gvhd0lwrtkyrecdn3",
//         },
//         {
//           key: "sender",
//           value: "terra10808lqrhwvd9lk0gjyvsjmhnxzcc4kz6j09tj6",
//         },
//         { key: "amount", value: "3190236000uusd" },
//       ],
//     },
//   ],
// };

export const provideLiquidityRule = (pairAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", pairAddress],
    ["action", "provide_liquidity"],
    ["assets"],
    ["share"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["by"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["to"],
    ["amount"],
  ],
});

export const withdrawLiquidityRule = (pairAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address", pairAddress],
    ["action", "withdraw_liquidity"],
    ["withdrawn_share"],
    ["refund_assets"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["amount"],
  ],
});

export const depositStableRule = (marketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", marketAddress],
    ["action"],
    ["depositor"],
    ["mint_amount"],
    ["deposit_amount"],
    ["contract_address"],
    ["action"],
    ["to"],
    ["amount"],
  ],
});

export const redeemStableRule = (marketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address", marketAddress],
    ["action", "redeem_stable"],
    ["burn_amount"],
    ["redeem_amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["amount"],
  ],
});

export const bondLunaRule = (hubAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", hubAddress],
    ["action", "mint"],
    ["from"],
    ["bonded"],
    ["minted"],
    ["contract_address"],
    ["action", "mint"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
  ],
});

export const unbondLunaRule = (bLunaAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", bLunaAddress],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["burnt_amount"],
    ["unbonded_amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
  ],
});

export const withdrawUnbondedRule = (hubAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", hubAddress],
    ["action", "finish_burn"],
    ["from", hubAddress],
    ["amount"],
  ],
});

export const claimRewardRule = (rewardAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", rewardAddress],
    ["action", "claim_reward"],
    ["holder_address"],
    ["rewards"],
  ],
});

export const depositCollateralRule = (anchorbLunaCustodyAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address", anchorbLunaCustodyAddress],
    ["action", "deposit_collateral"],
    ["borrower"],
    ["amount"],
  ],
});

export const lockCollateralRule = (anchorbLunaCustodyAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "lock_collateral"],
    ["borrower"],
    ["collaterals"],
    ["contract_address", anchorbLunaCustodyAddress],
    ["action"],
    ["borrower"],
    ["amount"],
  ],
});

export const unlockCollateralRule = (anchorbLunaCustodyAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "unlock_collateral"],
    ["borrower"],
    ["collaterals"],
    ["contract_address", anchorbLunaCustodyAddress],
    ["action"],
    ["borrower"],
    ["amount"],
  ],
});

export const withdrawCollateralRule = (anchorbLunaCustodyAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", anchorbLunaCustodyAddress],
    ["action", "withdraw_collateral"],
    ["borrower"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
  ],
});

export const borrowStableRule = (anchorMarketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", anchorMarketAddress],
    ["action", "borrow_stable"],
    ["borrower"],
    ["borrow_amount"],
  ],
});

export const repayStableRule = (anchorMarketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", anchorMarketAddress],
    ["action", "repay_stable"],
    ["borrower"],
    ["repay_amount"],
  ],
});

export const blunaSwapRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action", "swap"],
    ["offer_asset"],
    ["ask_asset"],
    ["offer_amount"],
    ["return_amount"],
    ["tax_amount"],
    ["spread_amount"],
    ["commission_amount"],
  ],
});

export const lunaSwapRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "swap"],
    ["offer_asset"],
    ["ask_asset"],
    ["offer_amount"],
    ["return_amount"],
    ["tax_amount"],
    ["spread_amount"],
    ["commission_amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["holder_address"],
    ["amount"],
  ],
});

export const ancSwapRule = (pairAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", pairAddress],
    ["action", "swap"],
    ["offer_asset"],
    ["ask_asset"],
    ["offer_amount"],
    ["return_amount"],
    ["tax_amount"],
    ["spread_amount"],
    ["commission_amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
  ],
});

export const ustSwapRule = (pairAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address", pairAddress],
    ["action", "swap"],
    ["offer_asset"],
    ["ask_asset"],
    ["offer_amount"],
    ["return_amount"],
    ["tax_amount"],
    ["spread_amount"],
    ["commission_amount"],
  ],
});

export const stakeLPRule = (lpStakingAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address", lpStakingAddress],
    ["action", "bond"],
    ["owner"],
    ["amount"],
  ],
});

export const unstakeLPRule = (lpStakingAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", lpStakingAddress],
    ["action", "unbond"],
    ["owner"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
  ],
});

export const airdropRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "claim"],
    ["stage"],
    ["address"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
  ],
});

export const lpStakingRewardRule = (lpStakingAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", lpStakingAddress],
    ["action", "withdraw"],
    ["owner"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
  ],
});

export const borrowRewardsRule = (marketAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", marketAddress],
    ["action", "claim_rewards"],
    ["claim_amount"],
    ["contract_address"],
    ["action", "spend"],
    ["recipient"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
  ],
});

export const govStakeRule = (govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address", govAddress],
    ["action", "staking"],
    ["sender"],
    ["share"],
    ["amount"],
  ],
});

export const govUnstakeRule = (govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", govAddress],
    ["action", "withdraw"],
    ["recipient"],
    ["amount"],
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
  ],
});

export const createPollRule = (govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address", govAddress],
    ["action", "create_poll"],
    ["creator"],
    ["poll_id"],
    ["end_height"],
  ],
});

export const castVoteRule = (govAddress: string) => ({
  type: "from_contract",
  attributes: [
    ["contract_address", govAddress],
    ["action", "cast_vote"],
    ["poll_id"],
    ["amount"],
    ["voter"],
    ["vote_option"],
  ],
});
