import { useState } from "react";
import MainPage from "./page/MainPage";
import "./App.css";
import NetworkContext from "./network/NetworkContext";
import { networks, Network } from "./network/network";

function App() {
  const [network, setNetwork] = useState<Network>(networks[0]);
  const selectNetwork = (network: Network) => setNetwork(network);
  return (
    <NetworkContext.Provider value={{ network, selectNetwork }}>
      <MainPage />
    </NetworkContext.Provider>
  );
}

export default App;
