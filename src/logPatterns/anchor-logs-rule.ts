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
    ["contract_address", pairAddress],
    ["action"],
    ["from"],
    ["to"],
    ["amount"],
    ["contract_address"],
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

// const testLogFinder = createLogFinder(
//   provideLiquidityRule("terra111"),
//   (log) => {
//     log.attributes[1].value === msg.events[1]
//   }
// )

export const claimRewardsRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
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
