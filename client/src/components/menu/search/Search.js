import React from "react";
import { SearchBox } from "./Search.Styles";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <SearchBox className="searchBox">
      <div className="searchBox__inner">
        <SearchIcon fontSize="small" />
        <input type="text" placeholder="Search contacts"/>
      </div>
    </SearchBox>
  );
};

export default Search;
