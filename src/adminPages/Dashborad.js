import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../adminComponent/AdminDashboard";

const DashBoard = () => {
  const [renderPage, setRenderPage] = useState(false);
  const [userLogedIn, setUserLogedIn] = useState("");
  let usenavigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      await axios
        .get("/api/v1/userdashboard", {
          withCredentials: true,
        })
        .then((res) => {
          setUserLogedIn(res.data.user);
          setRenderPage(true);
        })
        .catch((err) => {
          setRenderPage(false);
          usenavigate("/authentication/signin");
          console.log(err);
        });
    };
    data();
    // eslint-disable-next-line
  }, [0]);

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
      {renderPage && <AdminDashboard userLogedIn={userLogedIn} />}
      {renderPage && <button onClick={logout}>Logout</button>}
    </>
  );
};

export default DashBoard;
