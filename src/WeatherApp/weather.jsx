import { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Box,
  Container,
} from "@mui/material";

function Weather() {
  const [city, setCity] = useState("Mumbai");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // Function to fetch weather data for the current city
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=ecd29e840aaf426f84f183743241709&q=${cityName}&aqi=no`
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching weather data. Please try another city.");
      setLoading(false);
    }
  };

  // Handle form submission to search for a city
  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setCity(inputValue);
      fetchWeather(inputValue);
      setInputValue("");
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // Function to determine background color based on temperature
  const getBackgroundStyle = (temperature) => {
    if (temperature < 20) {
      // Cool colors
      return "linear-gradient(to right, #005aa7, #fffde4)";
    } else if (temperature >= 20 && temperature < 35) {
      // Warmer colors
      return "linear-gradient(to right, #FFD194, #D1913C)";
    } else {
      // Warmest colors
      return "linear-gradient(to right, #ff512f, #dd2476)";
    }
  };

  const backgroundStyle =
    weatherData && weatherData.current
      ? getBackgroundStyle(weatherData.current.temp_c)
      : "linear-gradient(to right, #ece9e6, #ffffff)";

  return (
    <Box sx={{ ...styles.container, background: backgroundStyle }}>
      <Container maxWidth="sm" sx={styles.paperContainer}>
        <Typography variant="h3" gutterBottom>
          Weather App
        </Typography>

        {/* Search form */}
        <form onSubmit={handleSearch} style={styles.form}>
          <TextField
            label="Enter city"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            sx={styles.input}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={styles.button}
          >
            Search
          </Button>
        </form>

        {loading && <CircularProgress />}
        {error && <Typography color="error">{error}</Typography>}

        {/* Weather data display */}
        {weatherData && !loading && !error && (
          <Box sx={styles.weatherContainer}>
            <Typography variant="h4">
              Weather in {weatherData.location.name}
            </Typography>
            <Box sx={styles.weatherDetails}>
              <img
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
                style={styles.icon}
              />
              <Typography>{weatherData.current.condition.text}</Typography>
              <Typography>
                Temperature: {weatherData.current.temp_c}°C
              </Typography>
              <Typography>Humidity: {weatherData.current.humidity}%</Typography>
              <Typography>
                Wind Speed: {weatherData.current.wind_kph} kph
              </Typography>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    padding: "20px",
    color: "#fff",
  },
  paperContainer: {
    padding: "40px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    color: "#fff",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    marginBottom: "20px",
  },
  button: {
    marginBottom: "20px",
  },
  weatherContainer: {
    textAlign: "center",
  },
  weatherDetails: {
    marginTop: "20px",
  },
  icon: {
    width: "100px",
    height: "100px",
  },
};

export default Weather;
