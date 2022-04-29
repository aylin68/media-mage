import React from "react";
import Icons from "./Icons";
import "./weather.css";

const ForecastDays = ({ data }) => {
  return (
    <>
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
              }
              return (
                <div key={index} className="forecast-items">
                  {days ? <span>{today}</span> : null}
                  <div className="icons-sx">
                    {days ? <Icons icons={days} /> : null}
                  </div>
                  {days ? <p>{days.main.temp_min.toFixed()}°C</p> : null}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default ForecastDays;
