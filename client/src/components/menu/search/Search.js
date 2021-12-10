import React from "react";
import { SearchBox } from "./Search.Styles";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({setSearchText}) => {
  return (
    <SearchBox className="searchBox">
      <div className="searchBox__inner">
        <SearchIcon fontSize="small" />
        <input type="text" placeholder="Search contacts"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </SearchBox>
  );
};

export default Search;
