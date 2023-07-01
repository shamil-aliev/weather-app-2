import { useState } from "react";
import "./App.css";

import Today from "./components/Today";
import SearchBar from "./components/SearchBar";
import TodayDescription from "./components/TodayDescription";
import TodayForecast from "./components/TodayForecast";
import Forecast from "./components/Forecast";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const key = "d1ebfa74588148aebb3194442231506";
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=6&aqi=no&alerts=no`
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
      console.log(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="app">
      <div className="information-box">
        <SearchBar
          city={city}
          setCity={setCity}
          fetchData={fetchData}
          className="search"
        />
        {error && <p>{error}</p>}

        {loading && <LoadingSpinner />}

        {weatherData && !error && (
          <Today data={weatherData} loading={loading} />
        )}

        {weatherData && !error && !loading && (
          <TodayForecast data={weatherData.forecast.forecastday[0].hour} />
        )}

        {weatherData && !error && !loading && (
          <TodayDescription data={weatherData} />
        )}
      </div>
      <div className="forecast-box">
        {weatherData && !error && !loading && (
          <Forecast data={weatherData.forecast.forecastday.slice(1)} />
        )}
      </div>
    </div>
  );
}

export default App;
