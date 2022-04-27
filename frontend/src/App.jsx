import React, { useContext } from "react";
// import Home from "@pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "@components/feed/feed";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ForgetPassword from "./pages/ForgetPassword";
import { AuthContext } from "./context/AuthContext";
// import Weather from "./components/Weather";
import Topbar from "./components/navbar/topbar";
// import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <nav className="App">
        <Topbar />
      </nav>
      <div className="bodyContainer">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
