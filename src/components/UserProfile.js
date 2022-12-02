import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { userProfileItems } from "@data/app.data";
import { inlineText } from "@styles/styles";
import useToggle from "@hooks/useToggle";

const UserProfile = () => {
  const { ele, open, handleClick, handleClose } = useToggle();
  return (
    <Box sx={{ px: 1 }}>
      <Button id="basic-button" onClick={handleClick}>
        <FaUserCircle size={24} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={ele}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <ListItem sx={{ pt: 0, pb: 1 }} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Channel Avatar"
              src={`https://i.pravatar.cc/150?img=2`}
            />
          </ListItemAvatar>
          <ListItemText
            primary="raju youtube"
            secondary={
              <>
                <Typography sx={inlineText} component="span">
                  <Link href="#" underline="none">
                    {" "}
                    manage Your Google Account
                  </Link>
                </Typography>
              </>
            }
          ></ListItemText>
        </ListItem>
        <Box sx={{ minWidth: 300, borderTop: "1px solid #ddd" }}>
          {userProfileItems.map((item) => {
            return (
              <List sx={{ p: 0 }} key={item.id}>
                {item.divider ? (
                  <Divider />
                ) : (
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText>{item.text}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            );
          })}
        </Box>
      </Menu>
    </Box>
  );
};

export default UserProfile;
