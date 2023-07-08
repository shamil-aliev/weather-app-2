import styles from "../styles/ErrorMessage.module.css";
function ErrorMessage({ error }) {
  return <p className={styles.message}>⛔️ {error}</p>;
}

export default ErrorMessage;
