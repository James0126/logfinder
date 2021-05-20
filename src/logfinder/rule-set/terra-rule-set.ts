import {
  msgSendRule,
  msgWithdrawDelegationRewardRule,
  msgVoteRule,
  msgSubmitProposalRule,
  msgDepositRule,
  msgSwapRule,
  msgExchangeRateVoteRule,
  msgExchangeRatePrevoteRule,
  msgAggregateExchangeRateVoteRule,
  msgAggregateExchangeRatePrevoteRule,
  msgUnjailRule,
  msgUndelegateRule,
  msgEditValidatorRule,
  msgDelegateRule,
  msgCreateValidatorRule,
  msgBeginRedelegateRule,
  msgStoreCodeRule,
  msgMigrateContractRule,
  msgInstantiateContractRule,
} from "../../logPatterns/terra-logs-rule";
import { LogFindersRuleSet } from "../types";

export const terraRuleSet = () => {
  const msgSendRuleSet: LogFindersRuleSet = {
    rule: msgSendRule(),
    transform: (fragment) => ({
      msgType: "terra/send",
      canonicalMsg: [
        `${fragment.attributes[1].value} send ${fragment.attributes[2].value} to ${fragment.attributes[0].value}`,
      ],
      payload: fragment,
    }),
  };

  const msgWithdrawDelegationRewardRuleSet: LogFindersRuleSet = {
    rule: msgWithdrawDelegationRewardRule(),
    transform: (fragment) => ({
      msgType: "terra/withdraw-delegation-reward",
      canonicalMsg: [`Withdraw reward from ${fragment.attributes[1].value}`],
      payload: fragment,
    }),
  };

  const msgVoteRuleSet: LogFindersRuleSet = {
    rule: msgVoteRule(),
    transform: (fragment) => ({
      msgType: "terra/vote",
      canonicalMsg: [
        `Vote ${fragment.attributes[1].value} for proposal id: ${fragment.attributes[0].value}`,
      ],
      payload: fragment,
    }),
  };

  const msgSubmitProposalRuleSet: LogFindersRuleSet = {
    rule: msgSubmitProposalRule(),
    transform: (fragment) => ({
      msgType: "terra/submit-proposal",
      canonicalMsg: [`Create proposal id: ${fragment.attributes[0].value}`],
      payload: fragment,
    }),
  };

  const msgDepositRuleSet: LogFindersRuleSet = {
    rule: msgDepositRule(),
    transform: (fragment) => ({
      msgType: "terra/deposit",
      canonicalMsg: [
        `Deposit ${fragment.attributes[0].value} proposal id: ${fragment.attributes[1].value}`,
      ],
      payload: fragment,
    }),
  };

  const msgSwapRuleSet: LogFindersRuleSet = {
    rule: msgSwapRule(),
    transform: (fragment) => ({
      msgType: "terra/swap",
      canonicalMsg: [
        `Swap ${fragment.attributes[0].value} for ${fragment.attributes[3].value}`,
      ],
      payload: fragment,
    }),
  };

  const msgExchangeRateVoteRuleSet: LogFindersRuleSet = {
    rule: msgExchangeRateVoteRule(),
    transform: (fragment) => ({
      msgType: "terra/exchange-rate-vote",
      canonicalMsg: [`???`],
      payload: fragment,
    }),
  };

  const msgExchangeRatePrevoteRuleRuleSet: LogFindersRuleSet = {
    rule: msgExchangeRatePrevoteRule(),
    transform: (fragment) => ({
      msgType: "terra/exchange-rate-prevote",
      canonicalMsg: [`???`],
      payload: fragment,
    }),
  };

  const msgAggregateExchangeRateVoteRuleSet: LogFindersRuleSet = {
    rule: msgAggregateExchangeRateVoteRule(),
    transform: (fragment) => ({
      msgType: "terra/aggregate-exchange-rate-vote",
      canonicalMsg: [`???`],
      payload: fragment,
    }),
  };

  const msgAggregateExchangeRatePrevoteRuleSet: LogFindersRuleSet = {
    rule: msgAggregateExchangeRatePrevoteRule(),
    transform: (fragment) => ({
      msgType: "terra/aggregate-exchange-rate-prevote",
      canonicalMsg: [`???`],
      payload: fragment,
    }),
  };

  const msgUnjailRuleSet: LogFindersRuleSet = {
    rule: msgUnjailRule(),
    transform: (fragment) => ({
      msgType: "terra/unjail",
      canonicalMsg: [`Unjail ${fragment.attributes[2].value}`],
      payload: fragment,
    }),
  };

  const msgUndelegateRuleSet: LogFindersRuleSet = {
    rule: msgUndelegateRule(),
    transform: (fragment) => ({
      msgType: "terra/undelegete",
      canonicalMsg: [
        `Undelegete ${fragment.attributes[1].value}uluna to ${fragment.attributes[0].value}`,
      ],
      payload: fragment,
    }),
  };

  const msgEditValidatorRuleSet: LogFindersRuleSet = {
    rule: msgEditValidatorRule(),
    transform: (fragment) => ({
      msgType: "terra/edit-validator",
      canonicalMsg: [`Edit ${fragment.attributes[2].value}`],
      payload: fragment,
    }),
  };

  const msgDelegateRuleSet: LogFindersRuleSet = {
    rule: msgDelegateRule(),
    transform: (fragment) => ({
      msgType: "terra/delegate",
      canonicalMsg: [
        `Delegate ${fragment.attributes[1].value}uluna to ${fragment.attributes[0].value}`,
      ],
      payload: fragment,
    }),
  };

  const msgCreateValidatorRuleSet: LogFindersRuleSet = {
    rule: msgCreateValidatorRule(),
    transform: (fragment) => ({
      msgType: "terra/create-validator",
      canonicalMsg: [`Create ${fragment.attributes[0].value}`],
      payload: fragment,
    }),
  };

  const msgBeginRedelegateRuleSet: LogFindersRuleSet = {
    rule: msgBeginRedelegateRule(),
    transform: (fragment) => ({
      msgType: "terra/begin-redelegate",
      canonicalMsg: [
        `Redelegate ${fragment.attributes[2].value} to ${fragment.attributes[1].value}`,
      ],
      payload: fragment,
    }),
  };

  const msgStoreCodeRuleSet: LogFindersRuleSet = {
    rule: msgStoreCodeRule(),
    transform: (fragment) => ({
      msgType: "terra/store-code",
      canonicalMsg: [`Store ${fragment.attributes[1].value}`],
      payload: fragment,
    }),
  };

  const msgMigrateContractRuleSet: LogFindersRuleSet = {
    rule: msgMigrateContractRule(),
    transform: (fragment) => ({
      msgType: "terra/migrate-contract",
      canonicalMsg: [
        `migrate ${fragment.attributes[1].value} to code ${fragment.attributes[0].value}`,
      ],
      payload: fragment,
    }),
  };

  const msgInstantiateContractRuleSet: LogFindersRuleSet = {
    rule: msgInstantiateContractRule(),
    transform: (fragment) => ({
      msgType: "terra/instantiate-contract",
      canonicalMsg: [
        `Instantiate ${fragment.attributes[2].value} to code ${fragment.attributes[1].value}`,
      ],
      payload: fragment,
    }),
  };

  return [
    msgSendRuleSet,
    msgWithdrawDelegationRewardRuleSet,
    msgVoteRuleSet,
    msgSubmitProposalRuleSet,
    msgDepositRuleSet,
    msgSwapRuleSet,
    msgExchangeRateVoteRuleSet,
    msgExchangeRatePrevoteRuleRuleSet,
    msgAggregateExchangeRateVoteRuleSet,
    msgAggregateExchangeRatePrevoteRuleSet,
    msgUnjailRuleSet,
    msgUndelegateRuleSet,
    msgEditValidatorRuleSet,
    msgDelegateRuleSet,
    msgCreateValidatorRuleSet,
    msgBeginRedelegateRuleSet,
    msgStoreCodeRuleSet,
    msgMigrateContractRuleSet,
    msgInstantiateContractRuleSet,
  ];
};
