import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import { AiFillCheckCircle } from "react-icons/ai";
import { appCardList, flexColumnCenter } from "@styles/styles";
import { trimText } from "@data/app.data.js";

const AppCard = ({ url, title, channelTitle, videoId }) => {
  return (
    <Card sx={{ boxShadow: 0 }}>
      <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
        <CardMedia component="img" height="240" image={url} alt={title} />
      </Link>
      <CardContent sx={{ m: 0, p: 0 }}>
        <List sx={appCardList}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="channel avatar"
                src={`https://i.pravatar.cc/150?img=1`}
              />
            </ListItemAvatar>
            <Box sx={flexColumnCenter}>
              <Typography
                sx={{ fontWeight: "bold", mb: 1 }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {trimText(title)}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{ mr: 1, mb: 0, p: 0 }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {channelTitle}
                </Typography>
                <AiFillCheckCircle />
              </Box>
            </Box>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default AppCard;
