import React from "react";
import PropTypes from "prop-types";
import Icons from "./Icons";
import "./weather.css";

function ForecastDays({ data }) {
  return (
    <div className="info-box">
      <p className="description-title">5-DAY FORECAST</p>
      <div className="info">
        {data
          .filter((items) => new Date(items.dt_txt).getHours() === 12)
          .map((days, index) => {
            let today;
            switch (new Date(days.dt_txt).getDay()) {
              case 1:
                today = "Monday";
                break;
              case 2:
                today = "Tuesday";
                break;
              case 3:
                today = "Wednesday";
                break;
              case 4:
                today = "Thursday";
                break;
              case 5:
                today = "Friday";
                break;
              case 6:
                today = "Saturday";
                break;
              case 0:
                today = "Sunday";
                break;
              default:
                today = "Not a day";
            }
            return (
              <div key={index} className="forecast-items">
                {days ? <span className="title-day">{today}</span> : null}
                <div className="icons-sx">
                  {days ? <Icons icons={days} /> : null}
                </div>
                {days ? <p>{days.main.temp_min.toFixed()}°C</p> : null}
              </div>
            );
          })}
      </div>
    </div>
  );
}

ForecastDays.propTypes = {
  data: PropTypes.array,
};
ForecastDays.defaultProps = {
  data: [],
};

export default ForecastDays;
