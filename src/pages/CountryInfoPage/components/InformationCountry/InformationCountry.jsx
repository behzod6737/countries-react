import React from 'react'
import './Information.css'
import { Borders } from '../Borders/Borders'


export const InformationCountry = ({currentData}) => {
	let populationData = currentData.population.toLocaleString('es-ES')
	let areaData = currentData.area.toLocaleString('es-ES')
  return (
	<div className="information-content">
		<h2 className="info-content__title">{currentData.name.common}</h2>
		<div className="info-content__wrapper">
		<ul className="info-content__list">
			<li className="info-item"><strong className="item__strong">Native Name:</strong><span className="info-item__desc"> {currentData.name.common}</span></li>
			<li className="info-item"><strong className="item__strong">Population:</strong><span className="info-item__desc"> {populationData}</span></li>
			<li className="info-item"><strong className="item__strong">Region:</strong><span className="info-item__desc"> {currentData.region}</span></li>
			<li className="info-item"><strong className="item__strong">Sub Region:</strong><span className="info-item__desc"> {currentData.subregion}</span></li>
			<li className="info-item"><strong className="item__strong">Capital:</strong><span className="info-item__desc"> {currentData.capital[0]}</span></li>
		</ul>
		 
		 <ul className="info-content__list">
			<li className="info-item"><strong className="item__strong">Area:</strong><span className="info-item__desc"> {areaData}</span></li>
			<li className="info-item"><strong className="item__strong">Continent:</strong><span className="info-item__desc"> {currentData.continents}</span></li>
			<li className="info-item"><strong className="item__strong">Flag:</strong><span className="info-item__desc"> {currentData.flag}</span></li>
			<li className="info-item"><strong className="item__strong">Timezone:</strong><span className="info-item__desc"> {currentData.timezones}</span></li>
			<li className="info-item"><strong className="item__strong">Top Level Domain:</strong><span className="info-item__desc"> {currentData.tld[0]}</span></li>
		 </ul>
		</div>

		<div className="border__info">
			<strong className="borders__name">Border Countries:</strong>
			{currentData.borders ? currentData.borders.map((border,ind) => <Borders key={ind} border={border} />) : <p>there aren't neighbour Countries </p>}
		</div>
	</div>
  )
}
