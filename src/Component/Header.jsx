import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import {Button, Typography} from '@mui/material';
import SearchBar from "./SearchBar";

const Header = () => {

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
      <AppBar position="static" sx={{backgroundColor:"#e65856"}}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "left" }}
          >
            MUI
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
      </Box>
  )
}

export default Header;