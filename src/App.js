import { Route, Routes } from "react-router-dom";
import { CountriesPage } from "./pages/Countries/CountriesPage";
import { CountryInfo } from "./pages/CountryInfoPage/CountryInfo";
import { countriesContext } from "./context/countries";
import { useContext } from "react";

export const API = "https://restcountries.com/v3.1/";

export async function fetchAPI(query) {
	let res = await fetch(API + query);
	if (!res.ok) {
	  return {data:null,loading:false,error:true,status:res.status}
	}
	let data = await res.json()
	return  {data:data,loading:false,error:false}
  }

function App() {
	const {countryData,setData} = useContext(countriesContext)
  return (
	<Routes>
		<Route path="/" element={<CountriesPage />}/>
		<Route path="countries/:id" element={<CountryInfo countryData={countryData} />} />
	</Routes>
  )
}

export default App;
