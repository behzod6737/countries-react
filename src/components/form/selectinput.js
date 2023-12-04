import React from "react";
import Option, { OptionDisabled } from "./optioninput";

const SelectInput = ({ renderRegions }) => {
  let newRegions = [];

  for (const country of renderRegions) {
    if (newRegions.includes(country.region)) {
      continue;
    } else newRegions.push(country.region);
  }

  return (
    <div className="form__select-inner">
      <select className="search__select" name="country">
        <OptionDisabled />
        {newRegions.map((region, index) => (
          <Option key={index} regionValue={region} regionName={region} />
        ))}
      </select>
      <button className="search__btn" type="submit">
        go
      </button>
    </div>
  );
};

export default SelectInput;
