import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: { searchTerm: "", data: [] },
  reducers: {
    addCar: (state, action) => {
      //@ts-ignore
      //assumption
      // action.payload === {name:'bmw',cost:2000}
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar: (state, action) => {
      //@ts-ignore
      //action.payload === id
      const updated = state.data.filter((car) => car.id !== action.payload);
      //@ts-ignore
      state.data = updated;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});
export const { addCar, changeSearchTerm, removeCar } = carsSlice.actions;
export const carsSliceReducer = carsSlice.reducer;
