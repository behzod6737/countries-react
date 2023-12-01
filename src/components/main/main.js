import React from "react";
import "./main.css";
import Form from "../form/mainform";
import Cards from "../card/cardlist";

const Main = () => {
  return (
    <main className="site-main">
      <Form />
	  <Cards/>
    </main>
  );
};

export default Main;
