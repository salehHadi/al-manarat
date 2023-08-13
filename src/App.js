import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import AddProduct from "./adminPages/addProject";
import Main from "./Main";
import SignIn from "./adminPages/SingIn";
import SignUp from "./adminPages/SignUp";
import DashBoard from "./adminPages/Dashborad";
import Requests from "./adminPages/Requests";
import ResetPassword from "./adminPages/ResetPassword";
import EmailSent from "./adminPages/EmailSent";
import FormSent from "./Pages/FormSent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project-info" element={<Product />} />
        <Route path="/form-sent" element={<FormSent />} />
        {/* Admin Pages */}
        <Route path="/authentication/signin" element={<SignIn />} />
        <Route path="/authentication/signup" element={<SignUp />} />
        <Route
          path="/authentication/reset-password"
          element={<ResetPassword />}
        />
        <Route path="/authentication/email-sent" element={<EmailSent />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path="/product-add" element={<AddProduct />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </>
  );
}

export default App;
