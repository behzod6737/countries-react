import React from "react";
import "./cardlist.css";
import Card from "./card";

const Cards = ({ renderCountries }) => {
  return (
    <section className="section-countries">
      <div className="container">
        <div className="countries__wrapper">
          {renderCountries.map((country, ind) => (
            <Card
              id={country.name.common}
              key={ind}
              imgUrl={country.flags.png}
              title={country.name.common}
              population={country.population.toLocaleString("en-US")}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
