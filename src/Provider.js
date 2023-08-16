import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const DataBase = createContext(null);

function DataProvider(props) {
  const [allProjectsData, setAllProjectsData] = useState([]);
  const [projectInfo, setProjectInfo] = useState("");
  const [customerForms, setCustomerForms] = useState([]);
  console.log(allProjectsData);

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

  useEffect(() => {
    const fun = async () => {
      await axios
        .get("api/v1/all-forms")
        .then((res) => setCustomerForms(res.data.customerRequests))
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
        customerForms: customerForms,
      }}
    >
      {props.children}
    </DataBase.Provider>
  );
}

export { DataProvider, DataBase };
