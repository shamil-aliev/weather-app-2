import HourlyForecast from "./HourlyForecast";
import styles from "../styles/TodayForecast.module.css";
function TodayForecast({ data }) {
  return (
    <div className={styles.forecast}>
      <HourlyForecast
        time={data[6].time}
        icon={data[6].condition.icon}
        temp={data[6].temp_c}
      />
      <HourlyForecast
        time={data[9].time}
        icon={data[9].condition.icon}
        temp={data[9].temp_c}
      />
      <HourlyForecast
        time={data[12].time}
        icon={data[12].condition.icon}
        temp={data[12].temp_c}
      />
      <HourlyForecast
        time={data[15].time}
        icon={data[15].condition.icon}
        temp={data[15].temp_c}
      />
      <HourlyForecast
        time={data[18].time}
        icon={data[18].condition.icon}
        temp={data[18].temp_c}
      />
      <HourlyForecast
        time={data[21].time}
        icon={data[21].condition.icon}
        temp={data[21].temp_c}
      />
    </div>
  );
}

export default TodayForecast;
