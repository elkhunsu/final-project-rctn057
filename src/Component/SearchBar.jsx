import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { Search , SearchIconWrapper, StyledInputBase, CloseIconWrapper} from "./styles";
import { Button } from "@mui/material";

const SearchBar = () => {
  return (
    <>
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
      <CloseIconWrapper onClick={() => alert()}>
        <CancelIcon />
      </CloseIconWrapper>
    </Search>
     <Button color="inherit">Search</Button>
    </>
  )

}

export default SearchBar;