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
            variant="outlined"
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
    color: "#fff", // Text color
  },
  paperContainer: {
    padding: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Adjusted to give a white tint
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(255, 255, 255, 0.1)", // Light shadow in white
    textAlign: "center",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    marginBottom: "20px",
    color: "#fff",
    border: "#fff",
  },
  button: {
    marginBottom: "10px",
    marginRight: "10px",
    color: "#fff", // Button text color
    border: "1px solid #fff",
  },
  weatherContainer: {
    textAlign: "center",
    color: "#fff",
  },
  weatherDetails: {
    marginTop: "20px",
    color: "#fff",
  },
  icon: {
    width: "100px",
    height: "100px",
    align: "center",
  },
};

export default Weather;
