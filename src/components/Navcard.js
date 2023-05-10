import React from "react";
import "../styles/NavCrad.css";

const Navcard = ({ name, price, image, index }) => {
  return (
    <div className="Navcard">
      <img src={image} alt={`${index} phone`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default Navcard;
