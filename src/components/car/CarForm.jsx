import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../../store";

const CarForm = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const { name, cost } = useSelector((state) => state.form);
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value) || 0));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  return (
    <Box boxShadow={1} p={5} sx={{ borderRadius: "5px" }}>
      <Box>
        <Typography variant="h5" color="primary">
          Add Car
        </Typography>
      </Box>
      <Box
        display="flex"
        component="form"
        onSubmit={handleSubmit}
        sx={{ "&>*": { mr: 1 } }}
      >
        <TextField
          fullWidth
          placeholder="Car Name"
          onChange={handleNameChange}
          value={name}
        />
        <TextField
          fullWidth
          placeholder="Cost"
          onChange={handleCostChange}
          type="number"
          value={cost || ""}
        />
        <Button fullWidth color="success" variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CarForm;
