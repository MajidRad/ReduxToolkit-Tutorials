import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const CarValue = () => {
  //@ts-ignore
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );
  return (
    <Box display="flex" justifyContent="flex-end">
      <Typography variant="h4" color="primary">
        Total Cost:${totalCost}
      </Typography>
    </Box>
  );
};

export default CarValue;
