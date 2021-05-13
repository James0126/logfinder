export const transferRule = () => ({
  type: "from_contract",
  attributes: [
    ["contract_address"],
    ["action", "transfer"],
    ["from"],
    ["to"],
    ["amount"],
  ],
});
