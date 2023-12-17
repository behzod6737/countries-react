import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  let [countryData, setData] = useState([]);
  let [isWhite, setWhite] = useState(false);

  let [getLoading, setLoading] = useState(false);
  let [getError, setError] = useState(null);

  useEffect(() => {
    (async function () {
		setLoading(true)
      let res = await fetch(" https://restcountries.com/v3.1/all");
      if (!res.ok) {
		setLoading(false)
		setError(res.status)
        throw new Error(res.status);
      }
      res = await res.json();
	  setLoading(false)
	  setError(null)
      setData(res);
    })();
}, []);


  return (
    <div className={`body  ${isWhite ? "body-white-mode" : ""} `}>
      <Header whiteMode={isWhite} setWhite={setWhite} />
      <Main countries={countryData} getError={getError} getLoading={getLoading}/>
     
    </div>
  );
}

export default App;
