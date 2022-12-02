import React from "react";
import "./App.css";
import AppNavMenu from "@navigation/AppNavMenu";
import { Box } from "@mui/material";
import { appWrapper } from "@styles/styles";
import AppContentArea from "@components/AppContentArea";
import SearchContext from "./context/SearchContext";

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [search, setSearch] = React.useState("javascript");
  const handleDrawerToggle = () => {
    setMobileOpen((v) => !v);
  };
  const onSearch = (val) => {
    setSearch(val);
  };
  return (
    <Box sx={appWrapper}>
      <SearchContext.Provider
        value={{ searchText: search, onSearch: onSearch }}
      >
        <AppNavMenu handleDrawerToggle={handleDrawerToggle} />
        <AppContentArea isOpen={mobileOpen} />
      </SearchContext.Provider>
    </Box>
  );
}

export default App;
