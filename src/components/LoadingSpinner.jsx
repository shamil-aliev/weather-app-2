import styles from "../styles/LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles["loading-spinner-container"]}>
      <div className={styles["loading-spinner"]}></div>
    </div>
  );
}

export default LoadingSpinner;
