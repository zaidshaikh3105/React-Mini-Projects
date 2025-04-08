import React from "react";
import { Box, Container } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <AnimatePresence mode="wait">
        <Container
          maxWidth="xl"
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
            px: { xs: 2, sm: 3, md: 4 },
            position: "relative",
          }}
        >
          {children}
        </Container>
      </AnimatePresence>
      <Footer />
    </Box>
  );
};

export default Layout;
