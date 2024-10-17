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
import DatatableApp from "./Datatable/Pages/DatatableApp.jsx";
import "./index.css";

// Reusable wrapper component to apply consistent styling
const ProjectWrapper = ({ children }) => (
  <Box
    sx={{
      borderRadius: "8px", // Rounded corners
      marginBottom: "5px",
    }}
  >
    {children}
  </Box>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {/* Use ProjectWrapper to apply consistent styles */}
        <ProjectWrapper>
          <App />
        </ProjectWrapper>
        <ProjectWrapper>
          <Form />
        </ProjectWrapper>
        <ProjectWrapper>
          <BirthdayApp />
        </ProjectWrapper>
        <ProjectWrapper>
          <TodoApp />
        </ProjectWrapper>
        <ProjectWrapper>
          <WeatherApp />
        </ProjectWrapper>
        <ProjectWrapper>
          <SearchApp />
        </ProjectWrapper>
        <ProjectWrapper>
          <DatatableApp />
        </ProjectWrapper>
      </Box>
    </Provider>
  </React.StrictMode>
);
