import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  let usenavigate = useNavigate();

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
      <h1>DashBoard</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default DashBoard;
