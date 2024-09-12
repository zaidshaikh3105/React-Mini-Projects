import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          height: "100vh",
          padding: "20px", // Optional: To add some padding around the content
        }}
      >
        <Typography variant="h2" color="initial" align="center">
          React Mini Projects
        </Typography>
      </Box>
    </>
  );
};

export default App;
