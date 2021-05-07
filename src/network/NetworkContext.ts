import React from "react";
import { networks, Network } from "./network";

const NetworkContext = React.createContext({
  network: networks[0],
  selectNetwork: (network: Network) => {},
});

export default NetworkContext;
