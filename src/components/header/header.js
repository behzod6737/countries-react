import { useRef } from "react";
import "./header.css";

const Header = ({ whiteMode, setWhite }) => {
  const getNameRef = useRef();

  const handleClick = () => {
    setWhite(!whiteMode);

    if (getNameRef.current.textContent.includes("dark mode")) {
      getNameRef.current.textContent = "light mode";
    } else if (getNameRef.current.textContent.includes("light mode")) {
      getNameRef.current.textContent = "dark mode";
    }
  };
  return (
    <header className="header ">
      <div className="container header__container">
        <h1 className="header__heading">Where in the world?</h1>
        <button
          ref={getNameRef}
          className="header__button"
          type="submit"
          onClick={handleClick}
        >
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
