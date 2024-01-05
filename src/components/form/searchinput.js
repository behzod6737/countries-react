import React from "react";

const SearchInput = ({value, setValue}) => {

	
  return (
    <input
	onChange={(e) => {
		setValue(e.target.value)
	}}
	value={value}
      className="search__input-country"
      type="text"
      name="search-country"
      placeholder="Search for a country…"
    />
  );
};

export default SearchInput;
