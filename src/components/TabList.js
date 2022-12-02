import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { tabItems } from "@data/app.data";

const TabList = ({ onTabChange }) => {
  const [value, setValue] = React.useState("All");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onTabChange(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable tabs"
      >
        {tabItems.map((tab) => {
          return <Tab key={tab.id} label={tab.text} value={tab.text} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabList;
