import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Header from "./components/Header";
import AddProduct from "./adminPages/addProject";
import Main from "./Main";
import SignIn from "./adminPages/SingIn";
import SignUp from "./adminPages/SignUp";
import DashBoard from "./adminPages/Dashborad";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project-info" element={<Product />} />

        {/* Admin Pages */}
        <Route path="/product-add" element={<AddProduct />} />
        <Route path="/authentication/signin" element={<SignIn />} />
        <Route path="/authentication/signup" element={<SignUp />} />
        <Route path="/dashBoard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;
