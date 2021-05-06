import { LCDClient } from "@terra-money/terra.js";
import { logMatcher } from "./rule-set";

export const getTxInfo = async (data: string) => {
  const lcd = new LCDClient({
    URL: "https://tequila-lcd.terra.dev",
    chainID: "tequila-0004",
  });
  const tx = await lcd.tx.txInfo(data);

  if (tx.logs) {
    const matched = logMatcher(tx.logs.flatMap((log) => log.events))
      .flat()
      .filter(Boolean);
    console.log(matched);
    return matched;
  } else return null;
};
