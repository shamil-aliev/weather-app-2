import styles from "../styles/ForecastDay.module.css";
function ForecastDay({ data }) {
  const dateString = data.date;
  const dateObj = new Date(dateString);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekName = daysOfWeek[dateObj.getDay()];

  return (
    <div className={styles.box}>
      <div className={styles.description}>
        <h4 className={styles.day}>{dayOfWeekName}</h4>
        <p className={styles.temp}>
          Average temperature is{" "}
          <span className={styles.highlight}>{data.day.avgtemp_c} ℃</span>
        </p>
        <p className={styles.condition}>{data.day.condition.text}</p>
      </div>
      <div className={styles["image-box"]}>
        <img src={data.day.condition.icon} className={styles.img} />
      </div>
    </div>
  );
}

export default ForecastDay;
