import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Landing from "./Pages/LandingPage";
import Courses from "./Pages/Courses";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
};
export default App;
