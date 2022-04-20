import React from "react";
import Home from "@pages/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ForgetPassword from "./components/ForgetPassword";
import Weather from "./components/Weather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
