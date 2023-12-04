import React from "react";
import "./main.css";
import Form from "../form/mainform";
import Cards from "../card/cardlist";

const Main = ({ countries }) => {
  return (
    <main className="site-main">
      <Form renderRegions={countries} />
      <Cards renderCountries={countries} />
    </main>
  );
};

export default Main;
