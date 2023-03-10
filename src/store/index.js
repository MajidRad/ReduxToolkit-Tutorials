import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";
const store = configureStore({
  //this object determines what keys our state object has
  //this example movies the name of my key
  //and movies Values produce by movieSliceReducer
  reducer: {
    movies: moviesReducer,
    songs: songsReducer,
  },
});
export { store };
export { addMovie, removeMovie, addSong, removeSong };
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
