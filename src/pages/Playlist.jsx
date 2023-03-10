import { Button, Container } from "@mui/material";
import React from "react";
import MoviePlaylist from "./MoviePlaylist";
import SongPlaylist from "./SongPlaylist";
import { useDispatch } from "react-redux";
import { reset } from "../store";

const Playlist = () => {

  const dispatch = useDispatch();
  
  const handleResetClick = () => {
    // @ts-ignore
    dispatch(reset());
  };

  return (
    <Container maxWidth="md">
      <Button onClick={handleResetClick}>Reset Both Playlist</Button>
      <MoviePlaylist />
      <SongPlaylist />
    </Container>
  );
};

export default Playlist;
