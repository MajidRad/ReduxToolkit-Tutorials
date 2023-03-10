import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const searchTerm = useSelector((state) => state.cars.searchTerm);
  const handleSearch = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <TextField
      placeholder="Search"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default CarSearch;
