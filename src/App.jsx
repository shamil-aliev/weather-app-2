import { useEffect, useState } from "react";
import "./App.css";

import Today from "./components/Today";
import SearchBar from "./components/SearchBar";
import TodayDescription from "./components/TodayDescription";
import TodayForecast from "./components/TodayForecast";
import Forecast from "./components/Forecast";
import LoadingSpinner from "./components/LoadingSpinner";
import { apiKey } from "./utils/apiKey";
import { ForecastHours } from "./utils/Hours";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [geo, setGeo] = useState("");
  let forecastHours;
  if (weatherData) {
    forecastHours = weatherData?.forecast?.forecastday[0]?.hour.filter(
      (_, index) => ForecastHours.includes(index)
    );
  }

  useEffect(() => {
    setLoading(true);
    function getUserGeolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setGeo(`${latitude},${longitude}`);
          },
          (error) => {
            console.error("Error getting geolocation:", error);

            setLoading(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }

    getUserGeolocation();
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    function fetchByGeo() {
      if (geo) {
        setLoading(true);
        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${geo}&days=6&aqi=no&alerts=no`,
          {
            signal: abortController.signal,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setError(`Error fetching data: ${error}`);
            setLoading(false);
          });
      }
    }

    fetchByGeo();

    return () => {
      abortController.abort();
      // Cancel the fetch request when the component unmounts or when the `geo` value changes
    };
  }, [geo]);

  return (
    <div className="app">
      <div className="search-box">
        <SearchBar
          city={city}
          setCity={setCity}
          setWeatherData={setWeatherData}
          setLoading={setLoading}
          setError={setError}
          className="search"
        />
      </div>
      <div className="information-box">
        {error && <ErrorMessage error={error} />}

        {loading && <LoadingSpinner />}

        {weatherData && !error && (
          <Today data={weatherData} loading={loading} />
        )}

        {weatherData && !error && !loading && (
          <TodayForecast data={forecastHours} />
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
