import React from "react";

const Option = (props) => {
  return (
      <option value={props.regionValue} className="option">
        {props.regionName}
      </option>
  );
};

export default Option;
