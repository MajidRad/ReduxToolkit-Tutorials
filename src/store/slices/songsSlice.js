import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      //@ts-ignore
      state.push(action.payload);
    },
    removeSong(state, action) {
      //@ts-ignore
      const songIndex = state.indexOf(action.payload);
      state.splice(songIndex, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
  //multiple state update
  //make megaReducer listen to mini reducer
  // extraReducers(builder) {
  //downside is dependency to movieSlice
  //   builder.addCase(movieSlice.actions.resetState, (state, action) => {
  //     return [];
  //   });
  // },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer=songsSlice.reducer;