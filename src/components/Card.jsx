import React from "react";
import "./Card.css";

const Card = (props) => {
  const handleClick = () => {
    window.open(
      "https://vcahospitals.com/shop/home/articles/" + props.link,
      "_blank"
    );
  };

  return (
    <div className="card">
      <img src={props.imgUrl} style={{ width: "300px", height: "150px" }} />
      <h2>{props.name}</h2>
      <h3>{props.location}</h3>
      <button onClick={handleClick}>Learn More</button>
    </div>
  );
};

export default Card;