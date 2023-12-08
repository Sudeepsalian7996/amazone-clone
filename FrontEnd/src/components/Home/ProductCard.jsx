import React from "react";
import "../../styles/ProductCard.css";

function ProductCard({ product }) {
  const price = product.price;

  // Format the number as currency with commas
  const formattedPrice = price.toLocaleString("en-IN", {
    currency: "INR",
  });
  return (
    <div className="product__card">
      <div className="image__container">
        <img
          src={product.imageUrl}
          className="product__image"
          alt="produt-image"
        />
      </div>
      <div className="product__offers">
        <div className="percentage__offer">Up to 50% off</div>
        <div className="offer__desc">Deal of the Day</div>
      </div>
      <div className="product__description">
        {product.description.length > 30
          ? `${product.description.slice(0, 30)}...`
          : product.description}
      </div>
    </div>
  );
}

export default ProductCard;
