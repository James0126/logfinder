export const networks = [
  {
    URL: "https://lcd.terra.dev",
    chainID: "columbus-4",
  },
  {
    URL: "https://tequila-lcd.terra.dev",
    chainID: "tequila-0004",
  },
  {
    URL: "https://bombay-lcd.terra.dev",
    chainID: "bombay-0005",
  },
];

export type Network = {
  URL: string;
  chainID: string;
};
