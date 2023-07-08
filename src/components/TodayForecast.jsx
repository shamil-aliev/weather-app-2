import HourlyForecast from "./HourlyForecast";
import styles from "../styles/TodayForecast.module.css";
function TodayForecast({ data }) {
  return (
    <div className={styles.forecast}>
      {data.map((hour) => (
        <HourlyForecast
          time={hour.time}
          icon={hour.condition?.icon}
          temp={hour.temp_c}
          key={hour.time_epoch}
        />
      ))}
    </div>
  );
}

export default TodayForecast;
