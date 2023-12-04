import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  let [countryData, setData] = useState([]);
  let [isWhite, setWhite] = useState(false);

  fetch(" https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setData(data))
	.catch(error => console.error(error))

  return (
    <div className={`body  ${isWhite ? "body-white-mode" : ""} `}>
      <Header whiteMode={isWhite} setWhite={setWhite} />
      <Main countries={countryData} />
    </div>
  );
}

export default App;
