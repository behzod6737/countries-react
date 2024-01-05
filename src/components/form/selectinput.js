import { useContext, useEffect, useState } from "react";
import Option, { OptionDisabled } from "./optioninput";
import { countriesContext } from "../../context/countries";

const SelectInput = () => {
  
  const { setSearch, filter, setFilter,regions } = useContext(countriesContext);

  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      action="https://echo.htmlacademy.ru/"
      method="GET"
      className="form__select-inner"
      onSubmit={handleSubmit}
    >
      <select
        value={filter}
        onChange={(e) => {
          setSearch("");
          setFilter(e.target.value);
        }}
        className="search__select"
        name="country"
      >
        <Option regionValue={''} regionName={"All"} />
        {regions.map((reg, index) => (
          <Option key={index} regionValue={reg} regionName={reg} />
        ))}
      </select>
    </form>
  );
};

export default SelectInput;
