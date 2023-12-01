import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header ">
      <div className="container header__container">
        <h1 className="header__heading">Where in the world?</h1>
        <button className="header__button" type="submit">
          dark mode
        </button>
      </div>
    </header>
  );
};

export default Header;
