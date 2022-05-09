import React, { useContext, useEffect } from "react";
// import Home from "@pages/Home";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Feed from "@components/feed/feed";
import FullPage from "@pages/fullpage/fullPage";
import Vimeo from "@components/Vimeo/vimeo";
import CryptoTracker from "@components/cryptotracker/CryptoTracker";
import Login from "./pages/Login/Login";
import Registration from "./pages/Login/Registration";
import ForgetPassword from "./pages/Login/ForgetPassword";
import { AuthContext } from "./context/AuthContext";
import Weather from "./components/weather/Weather";
import ProtectedRoute from "./ProtectedRoute";
import Topbar from "./components/topbar/topbar";
import SearchResults from "./components/search/SearchResult";
import { WeatherContextProvider } from "./context/WeatherContext";
import { SearchContextProvider } from "./context/SearchContext";
import ChuckNorris from "@components/chuckNorris/ChuckNorris";
import "./App.css";
import ProfilePage from "@components/profile-page/ProfilePage";
import ZenQuotes from "@components/zenQuotes/ZenQuotes";
import Books from "@components/books/Books";

library.add(fas);

function App() {
  const { user, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userToken");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // setUser(foundUser);
      dispatch({ type: "LOGIN_SUCCESS", payload: foundUser.data });
      console.log("you are logged in");
    } else {
      //  REDIRECT TO LOGIN
      // return <Navigate to="/register" />;
      return;
    }
  }, []);
  return (
    <BrowserRouter>
      <SearchContextProvider>
        <WeatherContextProvider>
          <nav className="App">{user ? <Topbar /> : null}</nav>
          <div className="bodyContainer">
            <Routes>
              {/* <Route exact path="/" element={<FullPage />}>
            <Route path="" element={<Feed />} />
            <Route path="vimeo" element={<Vimeo />} />
          </Route> */}

              <Route
                path="/"
                element={
                  <ProtectedRoute user={user}>
                    <FullPage />
                  </ProtectedRoute>
                }
              >
                <Route path="" element={<Feed />} />
                <Route path="/apis/vimeo" element={<Vimeo />} />
                <Route path="/apis/cryptotracker" element={<CryptoTracker />} />
                <Route
                  path="/apis/weather"
                  element={<Weather showSearch={true} />}
                />
                <Route path="/apis/books" element={<Books />} />
                <Route path="/apis/chuck" element={<ChuckNorris />} />
                <Route path="/apis/zen" element={<ZenQuotes />} />
                <Route path="search" element={<SearchResults />} />
                <Route path="profile/:id" element={<ProfilePage />} />
                <Route path="search" element={<SearchResults />} />
              </Route>
              {/* <Route exact path="/" element={user ? <FullPage /> : <Login />}>
            <Route path="" element={<Feed />} />
            <Route path="vimeo" element={<Vimeo />} />
            {<Route path='weather' element={<Weather />} />}
          </Route> */}
              {/* <Route
            path="/"
            element={ */}

              {/* } */}
              {/* /> */}

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
        </WeatherContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
  );
}

export default App;
