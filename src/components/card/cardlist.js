import React from "react";
import "./cardlist.css";
import Card from "./card";

const Cards = () => {
const countries = [
	{
		src: 'https://picsum.photos/267/160',
		title: 'Uzbekistan',
		population: '37.000.000',
		region: 'asia',
		capital: 'tashkent'
	},
	{
		src: 'https://picsum.photos/267/160',
		title: 'Russia',
		population: '70.000.000',
		region: 'europe',
		capital: 'moscow'
	},
	{
		src: 'https://picsum.photos/267/160',
		title: 'Englad',
		population: '50.000.000',
		region: 'europe',
		capital: 'london'
	},
	{
		src: 'https://picsum.photos/267/160',
		title: 'Turkey',
		population: '40.000.000',
		region: 'europe',
		capital: 'istanbul'
	}
];

  return (
    <section className="section-countries">
      <div className="container">
        <div className="countries__wrapper">
			{countries.map(country => <Card imgUrl={country.src} title={country.title} population={country.population} region={country.region} capital={country.capital} />)}
		</div>
      </div>
    </section>
  );
};

export default Cards;
