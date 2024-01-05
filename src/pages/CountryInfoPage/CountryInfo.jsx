import React, { useContext } from "react";
import './CountryInfo.css'
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { countriesContext } from "../../context/countries";
import { BackButton } from "./components/BackButton/BackButton";
import { Flag } from "./components/Flag/Flag";
import { InformationCountry } from "./components/InformationCountry/InformationCountry";

export const CountryInfo = ({ countryData }) => {
  const getParams = useParams();
  const { isWhite, setWhite } = useContext(countriesContext);

  let currentData = countryData.find(
    (country) => country.name.common == getParams.id
  );

  if (currentData) {
    return (
      <div className={`body  ${isWhite ? "body-white-mode" : ""} `}>
        <Header whiteMode={isWhite} setWhite={setWhite} />
        <div className="container button__container">
          <BackButton />
        </div>

		<section className="country-info-section">
			<div className="container info__container">
				<Flag currentData={currentData} />
				<InformationCountry currentData={currentData}/>
			</div>
		</section>
      </div>
    );
  }
};
