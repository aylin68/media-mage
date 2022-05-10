import axios from "@services/axios";
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Icons from "./Icons";
import ForecastWeatherTime from "./ForecastWeatherTime";
import ForecastWeatherDay from "./ForecastWeatherDay";
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather.css";

import { AuthContext } from "../../context/AuthContext";

function Weather(props) {
  const { showSearch, weatherContent } = props;
  const [location, setLocation] = useState("Berlin");
  const [data, setData] = useState({});
  const { user } = useContext(AuthContext);

  const SearchHandel = () => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=4266a1091de6973c5820cf5ec044b4f8`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);

        // console.log("data is: ", data);
      })
      .catch((err) => console.error("erorr ", err));
  };

  const handleEnterDown = (event) => {
    if (event.key === "Enter") {
      SearchHandel();
    }
  };

  const createPostWeatherHandel = async () => {
    const nPost = {
      /* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
      userId: user._id,
      postContent: "weather",
      weatherContent: data,
      postTitle: "Weather",
      postType: "weather",
      username: user.username,
      likes: [],
      comments: [],
      profilePic: "src/assets/images/icon.png",
    };
    try {
      await axios.post("/posts", nPost);
      window.location.replace("/");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (weatherContent) {
      setData(weatherContent);
    } else {
      SearchHandel();
    }
  }, []);

  return (
    <>
      <div className="weather-style">
        <div className="weather-body">
          <div className="curent-weather">
            {showSearch ? (
              <div className="search-box">
                <input
                  type="text"
                  className="form-control search-input"
                  value={location}
                  placeholder="Enter location"
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={handleEnterDown}
                />
                <button
                  className="search-button"
                  onClick={SearchHandel}
                  type="button"
                >
                  <FontAwesomeIcon
                    className="weather-search"
                    icon="fa-solid fa-magnifying-glass"
                  />
                </button>
              </div>
            ) : null}

            <div className="title-location">
              <div className="title-icon">
                <div className="icons-lg">
                  {data.list ? <Icons icons={data.list[0]} /> : null}
                </div>
                {data.city ? (
                  <h5 style={{ fontFamily: "Roboto", fontSize: "22px" }}>
                    {data.city.name}
                  </h5>
                ) : null}
              </div>
              {data.list ? (
                <h1>
                  {data.list[0].main.temp.toFixed()}
                  °C
                </h1>
              ) : null}
            </div>
            <div className="info-box">
              <div className="info">
                <div className="feels_like">
                  {data.list ? (
                    <p>
                      {data.list[0].main.feels_like.toFixed()}
                      °C
                    </p>
                  ) : null}
                  {data.list ? <span>Feels Like</span> : null}
                </div>
                <div className="humidity">
                  {data.list ? <p>{data.list[0].main.humidity}%</p> : null}
                  {data.list ? <span>Humidity</span> : null}
                </div>
                <div className="temp_min">
                  {data.list ? (
                    <p>
                      {data.list[0].main.temp_min.toFixed()}
                      °C
                    </p>
                  ) : null}
                  {data.list ? <span>Min</span> : null}
                </div>
                <div className="temp_max">
                  {data.list ? (
                    <p>
                      {data.list[0].main.temp_max.toFixed()}
                      °C
                    </p>
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

          {showSearch ? (
            <button
              className="weather-btn-post"
              onClick={createPostWeatherHandel}
              type="button"
            >
              Create a Post
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

Weather.propTypes = {
  showSearch: PropTypes.bool,
  weatherContent: PropTypes.shape({}),
};
Weather.defaultProps = {
  showSearch: false,
  weatherContent: null,
};

export default Weather;
