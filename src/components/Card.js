import React from "react";
import "../App.css";


const Card = props => {
    const {title, date, url, explanation} = props;


return (
    <div className="card">
    <h2>{title}</h2>
    <img className="photo" src={url} alt={title} />
    <p>{explanation}</p>
    </div>
);
};


export default Card;