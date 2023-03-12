import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
const Immutable = () => {
  // object is Mutatable
  // but react not find out state is changed when object mutate
  //we should make a copy of object to new object then pas the state to rerender component
  const initialState = { name: "majid", lastName: "rad" };
  const [info, setInfo] = useState(initialState);
  const handleChange = () => {
    // info.name = "Max";
    // info.lastName = "Muller";
    // setInfo(info);
    // const changedInfo = { ...info };
    // changedInfo.name = "Max";
    // changedInfo.lastName = "Muller";
    // setInfo(changedInfo);
    setInfo({ ...info, name: "Max2", lastName: "Muller2" });
  };
  return (
    <Container>
      <Box>
        <Typography variant="h2">{info.name}</Typography>
        <Button onClick={handleChange}>Change Info</Button>
      </Box>
    </Container>
  );
};

export default Immutable;
