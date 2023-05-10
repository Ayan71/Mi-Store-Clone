import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductReviews.css";

const ProductReview = ({ productReviews }) => {
  return (
    <div className="ProductReview">
      {productReviews.map((item, index) => (
        <ProductCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReview;
