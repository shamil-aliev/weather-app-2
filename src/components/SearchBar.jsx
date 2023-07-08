import styles from "../styles/Searchbar.module.css";
import { apiKey } from "../utils/apiKey";

function SearchBar({ city, setCity, setWeatherData, setLoading, setError }) {
  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6&aqi=no&alerts=no`
      );
      console.log(res);
      if (!res.ok) {
        throw new Error(
          "City with that name was not found. Please try another request..."
        );
      }
      const data = await res.json();
      setWeatherData(data);

      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

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
