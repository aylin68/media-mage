import axios from "axios";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "./Icons";
import ForecastWeatherTime from "./ForecastWeatherTime";
import ForecastWeatherDay from "./ForecastWeatherDay";
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather.css";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("berlin");

  const SearchHandel = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=4266a1091de6973c5820cf5ec044b4f8`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log("error"));
    setLocation("");
  };
  useEffect(() => {
    if (location) {
      SearchHandel();
    }
  }, []);

  return (
    <>
      <div className="weather-style">
        <div className="weather-body">
          <div className="curent-weather">
            <div className="search-box">
              <input
                type="text"
                className="form-control search-input"
                value={location}
                placeholder="Enter location"
                onChange={(e) => setLocation(e.target.value)}
              ></input>
              <button className="search-button" onClick={SearchHandel}>
                <FontAwesomeIcon
                  className="weather-search"
                  icon="fa-solid fa-magnifying-glass"
                />
              </button>
            </div>
            <div className="title-location">
              <div className="title-icon">
                <div className="icons-lg">
                  {data.list ? <Icons icons={data.list[0]} /> : null}
                </div>
                {data.city ? <h5>{data.city.name}</h5> : null}
              </div>
              {data.list ? <h1>{data.list[0].main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="info-box">
              <div className="info">
                <div className="feels_like">
                  {data.list ? (
                    <p>{data.list[0].main.feels_like.toFixed()}°C</p>
                  ) : null}
                  {data.list ? <span>Feels Like</span> : null}
                </div>
                <div className="humidity">
                  {data.list ? <p>{data.list[0].main.humidity}%</p> : null}
                  {data.list ? <span>Humidity</span> : null}
                </div>
                <div className="temp_min">
                  {data.list ? (
                    <p>{data.list[0].main.temp_min.toFixed()}°C</p>
                  ) : null}
                  {data.list ? <span>Min</span> : null}
                </div>
                <div className="temp_max">
                  {data.list ? (
                    <p>{data.list[0].main.temp_max.toFixed()}°C</p>
                  ) : null}
                  {data.list ? <span>Max</span> : null}
                </div>
              </div>
            </div>
          </div>
          <div className="forecast-weather">
            {data.list ? <ForecastWeatherTime data={data.list} /> : null}
            {data.list ? <ForecastWeatherDay data={data.list} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
