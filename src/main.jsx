import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Form from "./Simple_Form/Form.jsx";
import WeatherApp from "./WeatherApp/weather.jsx";
import BirthdayApp from "./BirthdayApp/BirthdayApp.jsx";
import SearchApp from "./SearchBar/SearchApp.jsx";
import Box from "@mui/material/Box";
import { Provider } from "react-redux";
import { store } from "./React-Redux/store.js";
import TodoApp from "./React-Redux/TodoApp.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //alignItems: "center",
        }}
      >
        <App />
        <Form />
        <BirthdayApp />
        <TodoApp />
        <WeatherApp />
        <SearchApp />
      </Box>
    </Provider>
  </React.StrictMode>
);
