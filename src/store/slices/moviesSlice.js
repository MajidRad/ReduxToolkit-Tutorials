import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

/* ---------------------------- Slice Description --------------------------- */
//slice defines some initial state
//combines 'mini-reducers' into  a big reducer
//create set of 'action Creator' function
//slice automatically create reducers and actionTkypes

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],

  //replace with swithcase
  reducers: {
    addMovie(state, action) {
      // @ts-ignore
      //because of immer we can mutate our state
      //the template for actionType name of the state {'movie'} +name of the reducerMethod {'addMovie'}
      state.push(action.payload);
    },
    removeMovie(state, action) {
      //action.payload===string the song we want to remove it   assumtion
      //@ts-ignore
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    // resetState(state, action) {
    // state=[]not work because of immer this just reasign state
    //how to remove other slice state?
    //bad practice state.musics=[]  its not work why ?????
    //because state scope of the slice in here state just movie State we not access to music state
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});
export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
