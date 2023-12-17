import React from "react";
import "./main.css";
import Form from "../form/mainform";
import Cards from "../card/cardlist";
import { Loading } from "../loading/loading";
import { Error } from "../error/error";

const Main = ({ countries,getLoading,getError }) => {
  return (
    <main className="site-main">
      <Form renderRegions={countries} />
	  {getLoading && <Loading />}
	  {getError && <Error />}
      <Cards renderCountries={countries} />
    </main>
  );
};

export default Main;
