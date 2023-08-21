import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const DataBase = createContext(null);

function DataProvider(props) {
  const [allProjectsData, setAllProjectsData] = useState([]);
  const [projectInfo, setProjectInfo] = useState("");

  useEffect(() => {
    const fun = async () => {
      await axios
        .get("api/v1/all-project")
        .then((res) => setAllProjectsData(res.data.allProjects))
        .catch((err) => console.log(err));
    };
    fun();
    // eslint-disable-next-line
  }, [0]);

  const handleSingleProject = (id) => {
    const info = allProjectsData.find((e) => e._id === id);
    setProjectInfo(info);
  };

  return (
    <DataBase.Provider
      value={{
        data: allProjectsData,
        handleSingleProject,
        projectInfo,
      }}
    >
      {props.children}
    </DataBase.Provider>
  );
}

export { DataProvider, DataBase };
