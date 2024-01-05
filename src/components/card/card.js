import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card" id={props.id}>
      <img
        src={props.imgUrl}
        className="card__img"
        alt={"country flag" + " " + props.title}
        style={{
          width: "267",
          height: "160",
        }}
      />
      <div className="card__content">
        <Link to={`/countries/${props.id}`} className="content__heading"> {props.title}</Link>
        <div className="content__inner">
          <div className="card__info">
            <strong>Population: </strong>
            <span className="card__info__extra info-population"> 
             {props.population}
            </span>
          </div>
          <div className="card__info">
            <strong>Region: </strong>
            <span className="card__info__extra info-region">
               {props.region}
            </span>
          </div>
          <div className="card__info">
            <strong>Capital :</strong>
            <span className="card__info__extra info-capital">
               {props.capital}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
