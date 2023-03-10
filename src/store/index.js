import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";
import {
  carsSliceReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";
const store = configureStore({
  //this object determines what keys our state object has
  //this example movies the name of my key
  //and movies Values produce by movieSliceReducer
  reducer: {
    movies: moviesReducer,
    songs: songsReducer,
    cars: carsSliceReducer,
    form: formReducer,
  },
});
export { store };
export { addMovie, removeMovie, addSong, removeSong };
export { addCar, removeCar, changeSearchTerm };
export { changeCost, changeName };
export { reset };

// const startingState = store.getState();
// console.log(startingState);

//deprecated way
// store.dispatch({
//   type: "movie/addMovie",
//   payload: "007",
// });
// store.dispatch(movieSlice.actions.addMovie("shutter iceland"));
// const finalState = store.getState();
// console.log(finalState);
