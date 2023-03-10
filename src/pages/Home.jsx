import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        height="98vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        sx={{ whiteSpace: "nowrap" }}
      >
        <Typography variant="h2" textAlign="center" color="primary">
          Welcome to redux toolkit tutorial
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
