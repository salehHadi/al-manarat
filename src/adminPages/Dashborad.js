import React, { useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import AdminDashboard from "../adminComponent/AdminDashboard";

const DashBoard = () => {
  let usenavigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      await axios
        .get("/api/v1/userdashboard", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          usenavigate("/authentication/signin");
        });
    };
    data();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AdminDashboard />
    </>
  );
};

export default DashBoard;
