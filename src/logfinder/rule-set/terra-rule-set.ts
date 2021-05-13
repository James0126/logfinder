import { transferRule } from "../../logPatterns/terra-logs-rule";
import { LogFindersRuleSet } from "../types";

export const terraRuleSet = (network: string) => {
  const transferRuleSet: LogFindersRuleSet = {
    rule: transferRule(),
    transform: (fragment) => ({
      msgType: "transfer",
      canonicalMsg: [
        `Transfer ${fragment.attributes[4].value}${fragment.attributes[0].value} to ${fragment.attributes[2].value}`,
      ],
      payload: fragment,
    }),
  };

  return [transferRuleSet];
};
