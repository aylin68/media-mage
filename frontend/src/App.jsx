import React from "react";
// import Home from "@pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "@components/feed/feed";
import FullPage from "@components/fullpage/fullPage";
import Vimeo from "@components/Vimeo/vimeo";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ForgetPassword from "./pages/ForgetPassword";
// import Weather from "./components/Weather";
import Topbar from "./components/navbar/topbar";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="App">
        <Topbar />
      </nav>
      <div className="bodyContainer">
        <Routes>
          <Route exact path="/" element={<FullPage />}>
            <Route path="" element={<Feed />} />
            <Route path="vimeo" element={<Vimeo />} />
            {/* <Route path='weather' element={<Weather />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
