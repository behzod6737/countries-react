import React, { useContext } from "react";
import "./main.css";
import Form from "../form/mainform";
import Cards from "../card/cardlist";
import { Loading } from "../loading/loading";
import { Error } from "../error/error";
import { countriesContext } from "../../context/countries";

const Main = () => {
	const {getError,getLoading,countryData} = useContext(countriesContext)
  return (
    <main className="site-main">
      <Form />
	  {getLoading && <Loading />}
	  {getError && <Error />}
      <Cards renderCountries={countryData} />
    </main>
  );
};

export default Main;
