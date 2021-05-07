import { useContext } from "react";
import { networks } from "./network";
import NetworkContext from "./NetworkContext";
import s from "./SelectNetworks.module.scss";

const SelectNetworks = () => {
  const { network, selectNetwork } = useContext(NetworkContext);

  const setNetworks = (value: string) => {
    for (const network of networks) {
      if (network.chainID === value) {
        selectNetwork(network);
        return;
      }
    }
  };

  return (
    <div className={s.wrapper}>
      <select
        className={s.select}
        value={network.chainID}
        onChange={(e) => setNetworks(e.target.value)}
      >
        {networks.map(({ chainID }, index) => (
          <option key={index}>{chainID}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectNetworks;
