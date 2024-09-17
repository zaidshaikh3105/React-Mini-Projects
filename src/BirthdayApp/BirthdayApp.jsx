import { CssBaseline, Container, Box } from "@mui/material";
import BirthdayCard from "./BirthdayCard";
import ConfettiAnimation from "./ConfettiAnimation";
import PhotoCard from "./PhotoCard";

function BirthdayApp() {
  return (
    <>
      <CssBaseline />
      <body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(to right,#003973, #e5e5be)",
          width: "100vw",
          padding: "10px",
          boxSizing: "border-box",
          overflowX: "hidden",
          "@media (max-width: 960px)": {
            width: "90vw",
          },
          "@media (max-width: 600px)": {
            width: "80vw",
          },
          "@media (max-width: 400px)": {
            width: "70vw",
          },
        }}
      >
        <ConfettiAnimation />
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              textAlign: "center",

              p: 3,
              boxShadow: 3,
              borderRadius: 2,
              animation: "fadeIn 2s ease-in-out",
              "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            <BirthdayCard />
            <PhotoCard />
          </Box>
        </Container>
      </body>
    </>
  );
}

export default BirthdayApp;
