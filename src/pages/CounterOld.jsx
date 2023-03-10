import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  ButtonGroup,
} from "@mui/material";
const CounterOld = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (e) => {
    setValueToAdd(parseInt(e.target.value) || 0);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        component="form"
        onSubmit={handleSubmit}
      >
        <Box
          display="flex"
          flexDirection="column"
          height="60vh"
          boxShadow={1}
          p={4}
          borderRadius="10px"
        >
          <Typography variant="h2" color="primary">
            Counter Page
          </Typography>
          <Box
            height="30vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <Typography variant="h4">Current Count : {count}</Typography>
              <ButtonGroup fullWidth>
                <Button onClick={decrement}>Decrement </Button>
                <Button onClick={increment}>Increment </Button>
              </ButtonGroup>
            </Box>
            <TextField
              fullWidth
              type="number"
              value={valueToAdd}
              onChange={handleChange}
            />
            <Button type="submit">Add Range</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CounterOld;
