import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  CloseIconWrapper,
} from "./styles";
import { Button } from "@mui/material";

const SearchBar = (props) => {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          tabIndex="0"
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={props.Value}
          onChange={props.onChangeText}
          onKeyDown={props.onSubmitEnter}
        />
        {props.Value !== "" ? (
          <CloseIconWrapper onClick={props.onClear}>
            <CancelIcon />
          </CloseIconWrapper>
        ) : null}
      </Search>
      <Button color="inherit" onClick={props.onSubmit}>
        Search
      </Button>
    </>
  );
};

export default SearchBar;
