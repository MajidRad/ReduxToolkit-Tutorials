import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import TheatersIcon from "@mui/icons-material/Theaters";
import DeleteIcon from "@mui/icons-material/Delete";

import { createRandomMovie } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";

/* ------------------------ Dispatch an action steps ------------------------ */
// add a reducer to on of your slice that change state
//export the action creator that the slice automatically creates for us
//find the component that you want to dispatch from
//import the action creator  function  and useDispatch from 'react-redux'
//call useDispatch hook  to get access dispatch function
//when the user does something call the action creator to get an action
//then dispatch it

/* ----------------------- Access State From Component ---------------------- */
//import the useSelector hook from 'react-redux'
//call the hook  passing selector function
//use the state if state change component will be re rendered

const MoviePlaylist = () => {
  const dispatch = useDispatch();

  //@ts-ignore
  // const { movies } = useSelector((state) => state.movie);
  const moviePlaylist = useSelector((state) => state.movies);

  const handleMovieAdd = (movie) => {
    const action = addMovie(movie);
    dispatch(action);
  };

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderMovies = moviePlaylist.map((movie) => {
    return (
      <ListItem
        key={movie}
        disablePadding
        secondaryAction={
          <IconButton
            color="error"
            aria-label="remove"
            onClick={() => handleMovieRemove(movie)}
          >
            <DeleteIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
        }
      >
        <ListItemButton>
          <ListItemText>
            <Typography variant="h5" color="secondary" fontWeight="bold">
              {movie}
            </Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <>
      <Divider />
      <Box display="flex" my={3}>
        <Box display="flex" alignItems="center">
          <Typography variant="h3" mr={2} color="primary">
            Movie PlayList
          </Typography>
          <TheatersIcon sx={{ fontSize: "3rem" }} color="success" />
        </Box>
        <Button
          variant="contained"
          sx={{ ml: "auto" }}
          startIcon={<AddIcon fontSize="large" />}
          onClick={() => handleMovieAdd(createRandomMovie())}
        >
          Add Movie To Playlist
        </Button>
      </Box>
      <List>{renderMovies}</List>
    </>
  );
};

export default MoviePlaylist;
