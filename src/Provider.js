import React, { useState } from "react";
import { createContext } from "react";
import data from "./data.json";

const DataBase = createContext(null);

function DataProvider(props) {
  const allData = data;
  const [prodectInfo, setProdectInfo] = useState([]);

  const prodectDetails = (id) => {
    const info = allData.find((e) => e.id === id);
    setProdectInfo(info);
  };

  return (
    <DataBase.Provider value={{ data: allData, prodectDetails, prodectInfo }}>
      {props.children}
    </DataBase.Provider>
  );
}

export { DataProvider, DataBase };
