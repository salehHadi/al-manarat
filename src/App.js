import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Header from "./components/Header";
import AddProduct from "./adminPages/addProject";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project-info" element={<Product />} />
        <Route path="/product-add" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
