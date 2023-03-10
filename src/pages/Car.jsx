import React from "react";
import CarForm from "../components/car/CarForm";
import CarList from "../components/car/CarList";
import CarValue from "../components/car/CarValue";
import CarSearch from "../components/car/CarSearch";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

const Car = () => {
  /* -------------------------- Identify State Props & Slice -------------------------- */
  //1-identify what state exist in the app
  //2-identify how that state changes overtime
  //3-group together common pieces of state
  //4-create a slice for each group

  /* ------------------------------- STATE PROPS ------------------------------ */
  //STEP1  Identify State Props & Slice

  // REQUIRED
  //  name String,cost Number,searchTerm String,cars ArrayOf{id,name,cost}

  /* ------------------------------ DERIVED STATE ----------------------------- */
  //STEP1  Identify State Props & Slice
  // DerivedState mean: Values that we can calculate using existing state
  // totalCost number ,matchedCars ???
  /* -------------------- HOW THAT STATE CHANGING OVERTIME -------------------- */
  //change name
  //change cost
  //change searchterm
  //add car
  //remove car
  /* ------------------------------ slice design ------------------------------ */
  // FormSlice
  //      name,cost      action:changeName,changeCost
  // CarList slice
  //      searchTerm,cars  action changeTerm addCar,deleteCar
  return (
    <Container maxWidth="md">
      <Box>
        <CarForm />
        <CarList />
        <CarValue />
      </Box>
    </Container>
  );
};

export default Car;
