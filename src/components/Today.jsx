import styles from "../styles/Today.module.css";
function Today({ data }) {
  return (
    <div className={styles.today}>
      <div>
        <h3 className={styles.location}>
          {data?.location?.name}, {data?.location?.country}
        </h3>
        <p className={styles.temp}>
          Current temperature is:{" "}
          <span className={styles["temp-special"]}>
            {data?.current?.temp_c} ℃
          </span>
        </p>
        <p className={styles.condition}>
          {data.forecast.forecastday[0].day.condition.text}
        </p>
      </div>
      <img
        className={styles.img}
        src={data.forecast.forecastday[0].day.condition.icon}
      />
    </div>
  );
}

export default Today;
