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
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DeleteIcon from "@mui/icons-material/Delete";

import { createRandomSong } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store";

const SongPlaylist = () => {
  const dispatch = useDispatch();

  //@ts-ignore

  const songPlaylist = useSelector((state) => state.songs);

  const handleSongAdd = (song) => {
    const action = addSong(song);
    dispatch(action);
  };

  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };

  const renderMovies = songPlaylist.map((song) => {
    return (
      <ListItem
        key={song}
        disablePadding
        secondaryAction={
          <IconButton
            color="error"
            aria-label="remove"
            onClick={() => handleSongRemove(song)}
          >
            <DeleteIcon sx={{ fontSize: "2.5rem" }} />
          </IconButton>
        }
      >
        <ListItemButton>
          <ListItemText>
            <Typography variant="h5" color="secondary" fontWeight="bold">
              {song}
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
            Song PlayList
          </Typography>
          <MusicNoteIcon sx={{ fontSize: "3rem" }} color="success" />
        </Box>
        <Button
          variant="contained"
          sx={{ ml: "auto" }}
          startIcon={<AddIcon fontSize="large" />}
          onClick={() => handleSongAdd(createRandomSong())}
        >
          Add Music To Playlist
        </Button>
      </Box>
      <List>{renderMovies}</List>
    </>
  );
};

export default SongPlaylist;
