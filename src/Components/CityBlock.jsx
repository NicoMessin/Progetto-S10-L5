import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "5fb43d9317a963bf83907952a8a8a3f3";

function CityBlock({ cityName }) {
  const [city, setCity] = useState("");
  const [condition, setCondition] = useState("");
  const [temp, setTemp] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");

  const getCityValue = function () {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IT&appid=${API_KEY}&units=metric&lang=it`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero della città");
        }
      })
      .then((data) => { 
        setCity(data.name);

        setCondition(data.weather[0].description);
        setTemp(data.main.temp);
        setTempMin(data.main.temp_min);
        setTempMax(data.main.temp_max);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCityValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card
      className="mb-4 mt-4 mx-3"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2019/05/22/22/03/sky-4222653_1280.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "none",
      }}
    >
      <Card.Body className="d-flex justify-content-between align-items-center ">
        <div>
          <Card.Title>{city}</Card.Title>

          <Card.Text className="text-muted">{condition}</Card.Text>
        </div>
        <div className="text-end">
          <div>
            <strong>{temp}°C</strong>
          </div>
          <div className="text-muted" style={{ fontSize: "0.9rem" }}>
            Min: {tempMin}°C | Max: {tempMax}°C
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CityBlock;
