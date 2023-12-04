import React from "react";

export const OptionDisabled = () => {
  return (
    <option value={0} className="option">
      select a country
    </option>
  );
};

const Option = (props) => {
  return (
    <>
      <option value={props.regionValue} className="option">
        {props.regionName}
      </option>
    </>
  );
};

export default Option;
