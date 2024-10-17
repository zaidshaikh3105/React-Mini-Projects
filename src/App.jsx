import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right, #283048,#859398);",
          py: 4, // Padding on top and bottom
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
        }}
      >
        <Typography
          variant="h3"
          color="white"
          align="center"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase", // Makes the header more prominent
            letterSpacing: 2, // Adds some spacing between letters
          }}
        >
          React Mini Projects
        </Typography>
      </Box>
    </>
  );
};

export default App;
