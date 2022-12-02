import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { CgYoutube } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { shortsItems } from "@data/app.data";
import {
  shortsWrapper,
  flex,
  shortsHeader,
  scrollWrapper,
  shortsCard,
} from "@styles/styles";

const Shorts = ({ hideShorts, isHidden, undoHide }) => {
  return (
    <Box>
      <Box component="div" sx={shortsWrapper}>
        <Box sx={flex}>
          <CgYoutube size={32} color="red" />
          <Typography sx={shortsHeader} variant="h6">
            Shorts
          </Typography>
        </Box>
        <Button onClick={hideShorts}>
          <RiCloseFill />
        </Button>
      </Box>
      {isHidden ? (
        <Box>
          <Typography>
            This shelf will be hidden for 30 days.
            <Button onClick={undoHide}>Undo</Button>
          </Typography>
        </Box>
      ) : (
        <Box component="div" sx={scrollWrapper}>
          <Box component="div" sx={flex}>
            {shortsItems.map((item) => {
              return (
                <Link key={item.id} href={item.shortsUrl}>
                  <Card sx={shortsCard}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.url}
                      alt="Shorts image"
                    />
                    <CardContent>
                      <Typography
                        noWrap
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {item.text}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.views} views
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Shorts;
