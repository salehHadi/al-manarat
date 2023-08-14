import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../adminComponent/AdminDashboard";

const DashBoard = () => {
  let usenavigate = useNavigate();
  const [reload, setReload] = useState(0);

  const data = async () => {
    await axios
      .get("/api/v1/userdashboard", {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch((err) => {
        usenavigate("/authentication/signin");
        console.log(err);
      });
  };
  data();

  const logout = async () => {
    await axios
      .get("api/v1/logout")
      .then((res) => {
        console.log(res);
        const cookies = new Cookies();
        cookies.remove("token", { path: "/" });
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AdminDashboard />
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default DashBoard;
