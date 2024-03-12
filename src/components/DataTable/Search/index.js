"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <div className="input-container-search d-flex" style={{ justifyContent: "flex-start" }}>
      <input
        id="search"
        name="search"
        type="text"
        className="form-control search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => onInputChange(e.target.value)}
        style={{ fontSize: ".7rem" }}
      />
    </div>
  );
};

export default Search;
