import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const WeatherContext = createContext({});

export default WeatherContext;

export function WeatherContextProvider({ children }) {
  const [location, setLocation] = useState("Berlin");
  const [data, setData] = useState({});

  return (
    <WeatherContext.Provider value={{ location, setLocation, data, setData }}>
      {children}
    </WeatherContext.Provider>
  );
}

WeatherContextProvider.propTypes = {
  children: PropTypes.array,
};
WeatherContextProvider.defaultProps = {
  children: [],
};
