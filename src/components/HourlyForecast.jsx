import styles from "../styles/HourlyForecast.module.css";
function HourlyForecast({ time, icon, temp }) {
  let dateString = time;
  const dateObj = new Date(dateString);
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Format the time in 12-hour format with AM/PM
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedTime = `${formattedHours}:${minutes
    .toString()
    .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

  return (
    <div className={styles.box}>
      <p className={styles.time}>{formattedTime}</p>
      <img className={styles.img} src={icon} />
      <p className={styles.temp}>{temp} ℃</p>
    </div>
  );
}

export default HourlyForecast;
