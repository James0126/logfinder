import { useState } from "react";
import { TransformResult } from "./logfinder/types";
import { getTxInfo } from "./logfinder/format";

const MainPage = () => {
  const [hash, setHash] = useState<string>("");
  const [result, setResult] = useState<(TransformResult | null)[] | null>();

  const onClick = async (hash: string) => {
    const info = await getTxInfo(hash);
    //B1030469F398F8B137E86FF19A89638843727F87A9E73CD6D8E223BDE9BFF8A4
    setResult(info);
  };

  return (
    <section>
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
      <article>
        <pre>{result?.map((data) => JSON.stringify(data, undefined, 2))}</pre>
      </article>
    </section>
  );
};

export default MainPage;
