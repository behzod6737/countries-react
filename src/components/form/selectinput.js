import React from "react";
import Option, {OptionDisabled} from "./optioninput";

const SelectInput = () => {
	const regions = [
		{
		  name: "europe",
		  id:1
		},
		{
		  name: "asia",
		  id:2
		},
		{
		  name: "africa",
		  id:3
		},
		{
		  name: "america",
		  id:4
		},
	  ];
  return (
    <div className="form__select-inner">
      <select className="search__select" name="country">
		<OptionDisabled />
		{regions.map(region => <Option id={region.id}  regionName={region.name} />)}
	  </select>
      <button className="search__btn" type="submit">
        go
      </button>
    </div>
  );
};


export default SelectInput