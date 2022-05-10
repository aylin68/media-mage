import React from "react";
import Icons from "./Icons";
import "./weather.css";
import PropTypes from "prop-types";

function ForecastTimes({ data }) {
  return (
    <div className="info-box">
      <p className="description-title">{data[0].weather[0].description}</p>
      <div className="info">
        {data
          .filter(
            (items) => new Date().getDay() === new Date(items.dt_txt).getDay()
          )
          .map((fd, index) => {
            return (
              <div key={index} className="forecast-items">
                {fd ? <span>{new Date(fd.dt_txt).getHours()}:00</span> : null}
                <div className="icons-sx">
                  {fd.weather ? (
                    <Icons className="icons-sx" icons={fd} />
                  ) : null}
                </div>
                {fd.main ? <p>{fd.main.temp.toFixed()}°C</p> : null}
              </div>
            );
          })}
      </div>
    </div>
  );
}

ForecastTimes.propTypes = {
  data: PropTypes.array,
};
ForecastTimes.defaultProps = {
  data: [],
};

export default ForecastTimes;
