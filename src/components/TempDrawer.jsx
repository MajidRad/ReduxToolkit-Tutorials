import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BuildIcon from "@mui/icons-material/Build";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import TimerIcon from "@mui/icons-material/Timer";
import CallMadeIcon from "@mui/icons-material/CallMade";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";


export default function TempDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navlinks = [
    { text: "useState", path: "/counter", icon: TimerIcon },
    { text: "useReducer", path: "/counterReducer", icon: CallMadeIcon },
    {
      text: "PlayList ReduxToolkit",
      path: "/PlayList",
      icon: AllInclusiveIcon,
    },
    { text: "reduxRtkQuery", path: "/reduxRtkQuery", icon: BuildIcon },
  ];

  return (
    <>
      <IconButton onClick={() => setDrawerOpen(!isDrawerOpen)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          {navlinks.map((item) => (
            <ListItem
              key={item.path}
              disablePadding
              component={Link}
              to={item.path}
            >
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" color="primary">
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
