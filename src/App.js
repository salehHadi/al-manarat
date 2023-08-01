import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Header from "./components/Header";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project-info" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
