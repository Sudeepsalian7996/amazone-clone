import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../../styles/ProductDetail.css";

const ProductDetail = () => {
  const starRating = (star) => {
    return Array.from({ length: 5 }, (rating = star, index) => {
      let number = index + 0.5;

      return (
        <span key={index}>
          {rating >= index + 1 ? (
            <FaStar />
          ) : rating >= number ? (
            <FaStarHalfAlt />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      );
    });
  };
  return (
    <>
      <div className="product_detail__container">
        <div className="product__left">
          <div className="product_image__container">
            <img
              src="https://m.media-amazon.com/images/I/71t9JRry+3L._SY679_.jpg"
              className="product__image"
              alt="product image"
            />
          </div>
          <div className="button__container">
            <button className="add_cart__button">Add to cart</button>
            <button className="buy__now">Buy now</button>
          </div>
        </div>
        <div className="product_right__container">
          <div className="product__right">
            <div className="product__title">
              Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal,
              Sensitive Skin, 125 ml Hydrating Face Wash with Niacinamide,
              Vitamin B5
            </div>
            <div className="rating">
              <span>4.5</span> {starRating(4.5)}
            </div>
            <div className="product__MRP">
              M.R.P : &#8377;<s>1192.00</s>
            </div>
            <div className="product__deal">
              Deal of the day : <span>&#8377;645.00</span>
            </div>
            <div className="product__save">
              You save : <span> &#8377;420.00 (47%)</span>
            </div>
            <div className="product__delivery">FREE DELIVERY : Oct 8 - 21</div>
            <div className="proudct__description">
              <span>About this item: </span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur, id. Ab, rem quia. Veritatis voluptate ex minus
              distinctio? Reiciendis omnis quam corporis ut dolor blanditiis
              dolore a hic numquam voluptatibus unde, minima perferendis magnam,
              sint labore temporibus minus ipsam officiis! Tenetur sit facere
              tempore minus quod impedit culpa! Necessitatibus sequi quia autem
              architecto doloremque ipsa. Sit odit assumenda pariatur qui?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
