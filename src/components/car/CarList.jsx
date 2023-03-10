import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { changeSearchTerm, removeCar } from "../../store";
import CarSearch from "./CarSearch";

const CarList = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleRemove = (car) => {
    dispatch(removeCar(car));
  };
  const renderCarList = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <ListItemButton key={car.id}>
        <ListItem
          secondaryAction={
            <IconButton onClick={() => handleRemove(car.id)}>
              <DeleteIcon color="error" sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          }
        >
          <ListItemText
            primary={
              <Typography
                variant="h5"
                color="primary"
                fontWeight={bold && "bold"}
              >
                {"Car Name: " + car.name}
              </Typography>
            }
            secondary={
              <Typography variant="h6" color="InfoText">
                {"Car Cost: " + car.cost + "$"}
              </Typography>
            }
          />
        </ListItem>
      </ListItemButton>
    );
  });

  return (
    <Box boxShadow={2} p={5} sx={{ borderRadius: "5px", my: 1 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" color="primary">
          Cars
        </Typography>
        <CarSearch />
      </Box>
      <List>{renderCarList}</List>
    </Box>
  );
};

export default CarList;
