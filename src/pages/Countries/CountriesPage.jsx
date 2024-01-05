import { useContext, useEffect, useState } from "react";
import { countriesContext } from "../../context/countries";
import Header from "../../components/header/header";
import Main from "../../components/main/main";


export const CountriesPage = () => {
  const { isWhite, setWhite } = useContext(countriesContext);
  return (
    <div className={`body  ${isWhite ? "body-white-mode" : ""} `}>
      <Header whiteMode={isWhite} setWhite={setWhite} />
      <Main />
    </div>
  );
};
