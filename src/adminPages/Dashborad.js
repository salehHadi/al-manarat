import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../adminComponent/AdminDashboard";

const DashBoard = () => {
  const [renderPage, setRenderPage] = useState(false);
  let usenavigate = useNavigate();

  const data = async () => {
    await axios
      .get("/api/v1/userdashboard", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setRenderPage(true);
      })
      .catch((err) => {
        setRenderPage(false);
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
      {renderPage && <AdminDashboard /> && (
        <button onClick={logout}>Logout</button>
      )}
    </>
  );
};

export default DashBoard;
