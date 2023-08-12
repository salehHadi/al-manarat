import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import AddProduct from "./adminPages/addProject";
import Main from "./Main";
import SignIn from "./adminPages/SingIn";
import SignUp from "./adminPages/SignUp";
import DashBoard from "./adminPages/Dashborad";
import Requests from "./adminPages/Requests";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project-info" element={<Product />} />

        {/* Admin Pages */}
        <Route path="/product-add" element={<AddProduct />} />
        <Route path="/authentication/signin" element={<SignIn />} />
        <Route path="/authentication/signup" element={<SignUp />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </>
  );
}

export default App;
