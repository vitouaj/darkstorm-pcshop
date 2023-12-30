import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import ProductDeatail from "../components/pages/ProductDeatail";

const Routers = () => {
  return (
    <Routes>
      <Route path="home" element={Home} />
      <Route path="login" element={Login} />
      <Route path="register" element={Register} />
      <Route path="productdetail" element={ProductDeatail} />
    </Routes>
  );
};

export default Routers;
