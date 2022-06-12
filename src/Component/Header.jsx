import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { Typography } from '@mui/material';
import SearchBar from "./SearchBar";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
      <AppBar position="static" sx={{ backgroundColor: "#e65856" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "left" }}
          >
            FinProH8
          </Typography>
          <SearchBar Value={props.Value} onChangeText={props.onChange} onSubmit={props.onSubmit} onClear={props.onClear} onSubmitEnter={props.onSubmitEnter} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;