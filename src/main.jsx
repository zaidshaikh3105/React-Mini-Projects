import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Form from "./Simple_Form/Form.jsx";
import BirthdayApp from "./BirthdayApp/BirthdayApp.jsx";
import Box from "@mui/material/Box";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // or 'row' if you want them side by side
        alignItems: "center",
        gap: "20px", // space between components
        height: "100vh", // make the Box take the full height of the viewport
      }}
    >
      <App />
      <Form />
      <BirthdayApp />
    </Box>
  </React.StrictMode>
);
