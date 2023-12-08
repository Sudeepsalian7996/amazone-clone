import React from "react";
import "../../styles/Product.css";

function Slid({ product }) {
  const price = product.price;

  // Format the number as currency with commas
  const formattedPrice = price.toLocaleString("en-IN", {
    currency: "INR",
  });

  return (
    <>
      <div className="product__card">
        <div className="product__title">{product.title}</div>
        <div className="image__container">
          <img
            src={product.imageUrl}
            className="product__image"
            alt="produt-image"
          />
        </div>
        <div className="product__info">
          <p className="product__description">
            {product.description.length > 80
              ? `${product.description.slice(0, 80)}...`
              : product.description}
          </p>
          <div className="product__price">
            <small>&#8377;</small>
            <strong>{`${formattedPrice}.00`}</strong>
          </div>
        </div>
        <div className="product__cart__container">
          <button className="product__cart__button">Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default Slid;
