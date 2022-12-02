import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  appBar,
  toolbarWrapper,
  flexAlignCenter,
  logoText,
  hideOnMobile,
} from "@styles/styles";
import SearchBar from "./SearchBar";
import UserProfile from "@components/UserProfile";
import NotificationList from "@components/NotificationList";
import Upload from "@components/Upload";

const AppNavMenu = (props) => {
  return (
    <AppBar component="nav" sx={appBar}>
      <Toolbar>
        <Box sx={toolbarWrapper}>
          <Box sx={flexAlignCenter}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={props.handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <AiFillYoutube size={32} />
            <Typography variant="h6" component="div" sx={logoText}>
              Youtube
            </Typography>
          </Box>
          <Box sx={hideOnMobile}>
            <SearchBar />
          </Box>
          <Box sx={hideOnMobile}>
            <Upload />
            <NotificationList />
            <UserProfile />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavMenu;
