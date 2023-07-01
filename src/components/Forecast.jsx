import ForecastDay from "./ForecastDay";
import Card from "./Card";
const Forecast = ({ data }) => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div>
      <h5 style={{ margin: "24px 0px", fontSize: "30px" }}>Forecast</h5>
      <ul style={{ overflow: "scroll" }}>
        {data.map((day) => (
          <Card key={getRandomNumber(1, 100)}>
            <ForecastDay
              data={day}
              key={getRandomNumber(1, 100)}
              style={{ marginBottom: "9px" }}
            />
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Forecast;
