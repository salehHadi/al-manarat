import "./App.css";
import { Routes, Route } from "react-router-dom";
import SingleProject from "./Pages/SingleProject";
import AddProduct from "./adminPages/addProject";
import Main from "./Main";
import SignIn from "./adminPages/SingIn";
import SignUp from "./adminPages/SignUp";
import DashBoard from "./adminPages/Dashborad";
import Requests from "./adminPages/Requests";
import ResetPassword from "./adminPages/ResetPassword";
import EmailSent from "./adminPages/EmailSent";
import FormSent from "./Pages/FormSent";
import OurProjects from "./adminPages/OurProjects";
import { useEffect } from "react";
import ProductDetail from "./components/productDetail";
import { UIProvider } from "./context/ui";

function App() {
  useEffect(() => {
    document.title = "Al-Manarat RealEstate";
  }, []);
  return (
    <>
      <UIProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project-info" element={<SingleProject />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/form-sent" element={<FormSent />} />
          {/* Admin Pages */}
          <Route path="/authentication/signin" element={<SignIn />} />
          <Route path="/authentication/signup" element={<SignUp />} />
          <Route
            path="/authentication/reset-password"
            element={<ResetPassword />}
          />
          {/* Dashboard Routes */}
          <Route path="/authentication/email-sent" element={<EmailSent />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/product-add" element={<AddProduct />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/our-projects" element={<OurProjects />} />
        </Routes>
      </UIProvider>
    </>
  );
}

export default App;
