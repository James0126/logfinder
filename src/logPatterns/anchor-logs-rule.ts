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
