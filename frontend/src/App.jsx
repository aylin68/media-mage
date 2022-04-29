import React, { useContext } from "react";
// import Home from "@pages/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Feed from "@components/feed/feed";
import FullPage from "@pages/fullpage/fullPage";
import Vimeo from "@components/Vimeo/vimeo";
import Login from "./pages/Login/Login";
import Registration from "./pages/Login/Registration";
import ForgetPassword from "./pages/Login/ForgetPassword";
import { AuthContext } from "./context/AuthContext";
// import Weather from "./components/Weather";
import Topbar from "./components/navbar/topbar";

import "./App.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <nav className="App">
        <Topbar />
      </nav>
      <div className="bodyContainer">
        <Routes>
          <Route exact path="/" element={user ? <FullPage /> : <Login />}>
            <Route path="" element={<Feed />} />
            <Route path="vimeo" element={<Vimeo />} />
            {/* <Route path='apis/weather' element={<Weather />} /> */}
          </Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Registration />}
          />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
