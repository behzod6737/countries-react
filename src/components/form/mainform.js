import React from "react";
import "./mainform.css";
import SearchInput from "./searchinput";
import SelectInput from "./selectinput";

const Form = ({ renderRegions }) => {
  return (
    <section className="section-search">
      <div className="container">
        <form
          className="search__form"
          action="https://echo.htmlacademy.ru/"
          method="get"
        >
          <SearchInput />
          <SelectInput renderRegions={renderRegions} />
        </form>
      </div>
    </section>
  );
};

export default Form;
