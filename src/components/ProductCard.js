import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ image, index, price, name, review }) => {
  return (
    <div className="ProductCard">
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
};

export default ProductCard;
