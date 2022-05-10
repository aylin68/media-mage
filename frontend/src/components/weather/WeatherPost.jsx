import axios from "@services/axios";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import WeatherContextProvider from "../../context/WeatherContext";
import Icons from "./Icons";
import ForecastWeatherTime from "./ForecastWeatherTime";
import ForecastWeatherDay from "./ForecastWeatherDay";
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather.css";
import { AuthContext } from "../../context/AuthContext";

const WeatherPost = (props) => {
  // const { location, setLocation, data, setData } = useContext(
  //   WeatherContextProvider
  // );
  const { user } = useContext(AuthContext);

  //const [searchQuery, setSerachQuery] = useState(location);
  const { weatherContent } = props;
  console.log("TEST ", weatherContent);

  // useEffect(() => {
  //   if (location) {
  //     SearchHandel();
  //   }
  // }, []);

  // console.log(data.city.name);
  const data = { ...weatherContent };
  return (
    <>
      <div className="weather-style">
        <div className="weather-body">
          <div className="curent-weather">
            <div className="title-location">
              <div className="title-icon">
                <div className="icons-lg">
                  {data.list ? <Icons icons={weatherContent.list[0]} /> : null}
                </div>
                {data.city ? <h5>{weatherContent.city.name}</h5> : null}
              </div>
              {data.list ? (
                <h1>{weatherContent.list[0].main.temp.toFixed()}°C</h1>
              ) : null}
            </div>
            <div className="info-box">
              <div className="info">
                <div className="feels_like">
                  {data.list ? (
                    <p>{weatherContent.list[0].main.feels_like.toFixed()}°C</p>
                  ) : null}
                  {data.list ? <span>Feels Like</span> : null}
                </div>
                <div className="humidity">
                  {data.list ? (
                    <p>{weatherContent.list[0].main.humidity}%</p>
                  ) : null}
                  {data.list ? <span>Humidity</span> : null}
                </div>
                <div className="temp_min">
                  {data.list ? (
                    <p>{weatherContent.list[0].main.temp_min.toFixed()}°C</p>
                  ) : null}
                  {data.list ? <span>Min</span> : null}
                </div>
                <div className="temp_max">
                  {data.list ? (
                    <p>{weatherContent.list[0].main.temp_max.toFixed()}°C</p>
                  ) : null}
                  {data.list ? <span>Max</span> : null}
                </div>
              </div>
            </div>
          </div>
          <div className="forecast-weather">
            {data.list ? (
              <ForecastWeatherTime data={weatherContent.list} />
            ) : null}
            {data.list ? (
              <ForecastWeatherDay data={weatherContent.list} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default WeatherPost;
