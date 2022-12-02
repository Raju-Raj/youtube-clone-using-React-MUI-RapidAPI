import * as React from "react";
import { Box, Button, IconButton, InputBase, Paper } from "@mui/material";
import { BsFillMicFill } from "react-icons/bs";
import SearchIcon from "@mui/icons-material/Search";
import { flexAlignCenter, searchBar } from "@styles/styles";
import SearchContext from "../../context/SearchContext";

const SearchBar = () => {
  const ctx = React.useContext(SearchContext);
  const [search, setSearch] = React.useState("");
  return (
    <Box sx={flexAlignCenter}>
      <Paper component="form" sx={searchBar}>
        <InputBase
          onChange={(e) => setSearch(e.target.value)}
          sx={{ ml: 1, flex: 1, pl: 1 }}
          placeholder="Search"
        />
        <IconButton
          type="button"
          sx={{ backgroundColor: "#eee", borderRadius: 0 }}
          aria-label="search"
          onClick={() => ctx.onSearch(search)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Button sx={{ minWidth: "auto" }}>
        <BsFillMicFill size={18} />
      </Button>
    </Box>
  );
};

export default SearchBar;
