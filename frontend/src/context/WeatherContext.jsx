import React, { createContext, useState } from "react";
const WeatherContext = createContext("");
export default WeatherContext;

export const WeatherContextProvider = ({ children }) => {
  const [location, setLocation] = useState("berlin");
  const [data, setData] = useState({});

  return (
    <WeatherContext.Provider value={{ location, setLocation, data, setData }}>
      {children}
    </WeatherContext.Provider>
  );
};
