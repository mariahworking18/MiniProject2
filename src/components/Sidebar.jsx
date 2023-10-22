import { useState } from "react";
import { NavLink } from "react-router-dom";
import {RiCloseLine} from 'react-icons/ri';
import { links } from '../assets/constants';

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Directions, DisabledByDefault } from "@mui/icons-material";

const drawerWidth = 240;

const NavLinks = ({handleClick}) => (
  <Box sx={{display: 'flex', flexDirection: 'column'}}>
    {links.map((item) => (
      <ListItem disablePadding>
        <ListItemButton
        key={item.name} 
        to={item.to} 
        onClick={() => handleClick && handleClick()}
        sx={{gap: 1, color: '#A56B60'}}>
          <item.icon size={'1.2rem'} />
          {item.name}
        </ListItemButton>
      </ListItem>
    ))}
  </Box>
);

const Sidebar = () => (
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: '#F4E1DE',
              color: '#C0521D',
              alignItems: 'center'
            },
          }}
          variant="permanent"
          anchor="left"
        >
        <h1>GROOVE</h1>
        <Toolbar />
        {/* <List>
          {['Discover', 'Around You', 'Top Artist', 'Top Charts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color: '#A56B60'}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText sx={{color: '#A56B60'}} primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <NavLinks />
        </Drawer>
      </Box>          
);

export default Sidebar;
