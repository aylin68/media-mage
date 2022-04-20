
import React from "react";
//import Home from "@pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ForgetPassword from "./pages/ForgetPassword";
//import Weather from "./components/Weather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Feed from "@components/feed/feed";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <nav className="App">
      <Navbar/>
    </nav>
    <div className="bodyContainer">
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
