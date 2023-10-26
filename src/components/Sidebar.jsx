import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../assets/constants";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const NavLinks = ({ handleClick }) => (
  <List sx={{ display: "flex", flexDirection: "column" }}>
    {links.map((item) => (
      <ListItem key={item.name} disablePadding>
        <ListItemButton
          key={item.name}
          to={item.to}
          onClick={() => handleClick && handleClick()}
          sx={{
            gap: 1,
            color: "#A56B60",
            "&:hover": {
              backgroundColor: "transparent",
              color: "#C0521D",
            },
          }}
        >
          <item.icon size={"1.2rem"} />
          {item.name}
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

const Sidebar = () => (
  <Box sx={{ display: "flex" }}>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#F4E1DE",
          color: "#C0521D",
          alignItems: "center",
          borderRight: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <h1>GROOVE</h1>
      <Toolbar />
      <NavLinks />
    </Drawer>
  </Box>
);

export default Sidebar;
