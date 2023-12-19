import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ProductCard.css";

function ProductCard({ product }) {
  const token = localStorage.getItem("token");
  return (
    <div className="product__card">
      <div className="image__container">
        <Link to={`${token ? `/getproduct-detail/${product._id}` : "/signin"}`}>
          <img
            src={product.imageUrl}
            className="product__image"
            alt="produt-image"
          />
        </Link>
      </div>
      <div className="product__offers">
        <div className="percentage__offer">Up to {product?.offer}% off</div>
        <div className="offer__desc">{`${
          product.offer > 20
            ? product?.offer > 50
              ? "Special offer"
              : "Deal of the Day"
            : "Deal"
        }`}</div>
      </div>
      <div className="product__description">
        {product.description.length > 40
          ? `${product.description.slice(0, 40)}...`
          : product.description}
      </div>
    </div>
  );
}

export default ProductCard;
