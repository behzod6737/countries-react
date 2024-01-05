import React, { useContext, useEffect, useState } from "react";
import "./mainform.css";
import SearchInput from "./searchinput";
import SelectInput from "./selectinput";
import { countriesContext } from "../../context/countries";

const Form = () => {
  const { search, setSearch } = useContext(countriesContext);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const debounceId = setTimeout(() => {
      setSearch(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(debounceId);
    };
  }, [searchTerm]);

  return (
    <section className="section-search">
      <div className="container">
        <div className="search__form">
          <SearchInput  value={searchTerm} setValue={setSearchTerm} />
          <SelectInput />
        </div>
      </div>
    </section>
  );
};

export default Form;
