import React from "react";
import "./weather.css";

const Icons = ({ icons }) => {
  let weatherIcon;
  if (icons) {
    switch (icons.weather[0].main) {
      case "Clear":
        weatherIcon = "sun";
        break;
      case "Cloud":
        weatherIcon = "cloud";
        break;
      case "Rain":
        weatherIcon = "lightRain";
        break;
      case "Mist":
        weatherIcon = "mist";
        break;
      case "Snow":
        weatherIcon = "snow";
        break;
      case "Clouds":
        weatherIcon = "overcastClouds";
        break;
    }
  } else {
    return null;
  }
  return <span className={`icon ${weatherIcon}`}></span>;
};
export default Icons;
