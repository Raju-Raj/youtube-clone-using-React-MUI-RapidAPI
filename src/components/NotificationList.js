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
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { BsBellFill } from "react-icons/bs";
import { notificationData } from "@data/app.data";
import useToggle from "@hooks/useToggle";
import { notificationWrapper, inlineText } from "@styles/styles";

const NotificationList = () => {
  const { ele, open, handleClick, handleClose } = useToggle();
  return (
    <Box sx={{ px: 1 }}>
      <Button id="basic-notification-button" onClick={handleClick}>
        <BsBellFill size={24} />
      </Button>
      <Menu
        id="basic-notification-menu"
        anchorEl={ele}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-notification-button",
        }}
      >
        <List sx={{ notificationWrapper }}>
          {notificationData.map((item) => {
            return (
              <Link href={item.url} key={item.id} underline="none">
                <ListItem sx={{ pt: 0, pb: 1, mt: 1 }} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.alt} src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.text}
                    secondary={
                      <>
                        <Box component="span" sx={{ mt: 2 }}>
                          <Typography sx={inlineText} component="span">
                            {item.time}
                          </Typography>
                        </Box>
                      </>
                    }
                  ></ListItemText>
                </ListItem>
                {notificationData.length !== item.id && (
                  <Divider variant="inset" component="li" />
                )}
              </Link>
            );
          })}
        </List>
      </Menu>
    </Box>
  );
};

export default NotificationList;
