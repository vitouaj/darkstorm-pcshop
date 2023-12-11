import landing from "../pages/Landing";
import { Routes, Route } from "react-router-dom";

import React from "react";

const Routers = () => {
  return (
    <Routes>
      <Route path="home" element={landing} />
    </Routes>
  );
};

export default Routers;
