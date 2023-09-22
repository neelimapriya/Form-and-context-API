import React, { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle.jsx/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney]=useState(1000)
    const asset = "diamond";
  return (
    <div className="Grandpa">
      <h2>Grandpa</h2>
      <p>Net Money: {money}</p>
      <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;