import React from "react";
import SearchBar from "../search_bar/searchBar";

const Header = () => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <SearchBar />
    </div>
  </header>
)


export default Header
