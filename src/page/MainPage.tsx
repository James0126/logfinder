import { useContext, useState } from "react";
import { TransformResult } from "../logfinder/types";
import { getTxInfo } from "../logfinder/format";
import SelectNetworks from "../network/SelectNetwork";
import NetworkContext from "../network/NetworkContext";
import s from "./MainPage.module.scss";

const MainPage = () => {
  const [hash, setHash] = useState<string>("");
  const [result, setResult] = useState<(TransformResult | null)[] | null>();
  const { network } = useContext(NetworkContext);

  const onClick = async (hash: string) => {
    const info = await getTxInfo(hash, network);
    setResult(info);
  };

  return (
    <>
      <SelectNetworks />

      <section className={s.wrapper}>
        <article>
          <div>
            Tx Hash:
            <br />
            <input onChange={(e) => setHash(e.target.value)} />
            <button type="submit" onClick={() => onClick(hash)}>
              Parse
            </button>
          </div>
          <br />
          <div>
            Tx Data:
            <br />
            <input />
            <button type="submit" onClick={() => onClick(hash)}>
              Parse
            </button>
          </div>
        </article>
        <article className={s.result}>
          <pre>{result?.map((data) => JSON.stringify(data, undefined, 2))}</pre>
        </article>
      </section>
    </>
  );
};

export default MainPage;
