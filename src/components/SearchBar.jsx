import styles from "../styles/Searchbar.module.css";

function SearchBar({ city, setCity, fetchData }) {
  const onSearchHandler = () => {
    fetchData();
    setCity("");
  };
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city name..."
        className={styles.input}
      />
      <button onClick={onSearchHandler} disabled={!city} className={styles.btn}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;
