import React from "react";
import { Box, Grid } from "@mui/material";
import AppCard from "./Card";

const CardList = ({ items }) => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4 }}>
        {items.length &&
          items.map((item, index) => {
            const { videoId } = item.id;
            const { thumbnails, title, channelTitle } = item.snippet;
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <AppCard
                  url={thumbnails.high.url}
                  title={title}
                  channelTitle={channelTitle}
                  videoId={videoId}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default CardList;
