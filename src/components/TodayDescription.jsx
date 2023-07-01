import styles from "../styles/TodayDescription.module.css";
function TodayDescription({ data }) {
  return (
    <div className={styles.description}>
      <p className={styles.temp}>
        Feels like:{" "}
        <span className={styles.highlight}>{data?.current?.feelslike_c} ℃</span>
      </p>
      <p className={styles.wind}>
        Wind is:{" "}
        <span className={styles.highlight}>{data?.current?.gust_kph} k/ph</span>
      </p>
      <p className={styles.max}>
        Max temperature is:{" "}
        <span className={styles.highlight}>
          {data.forecast.forecastday[0].day.maxtemp_c} ℃
        </span>
      </p>
      <p className={styles.min}>
        Min temperature is:{" "}
        <span className={styles.highlight}>
          {data.forecast.forecastday[0].day.mintemp_c} ℃
        </span>
      </p>
    </div>
  );
}

export default TodayDescription;
