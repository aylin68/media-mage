import React from "react";
import "./weather.css";
import PropTypes from "prop-types";

function Icons({ icons }) {
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
      default:
        weatherIcon = "sun";
    }
  } else {
    return null;
  }
  return <span className={`icon ${weatherIcon}`} />;
}

Icons.propTypes = {
  icons: PropTypes.shape({}),
};
Icons.defaultProps = {
  icons: {},
};

export default Icons;
