import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";

function index() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  );
}

export default index;
