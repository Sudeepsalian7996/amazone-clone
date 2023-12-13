import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const CartItemCard = ({ product, cart, amountHandler }) => {
  let quantity = 0;
  let totalAmount = 0;
  for (const quant of cart) {
    if (quant.product === product._id) {
      quantity = quant.quantity;
      totalAmount += quant.quantity * product.price;
    }
  }
  useEffect(() => {
    amountHandler(totalAmount);
  }, []);
  return (
    <>
      <div className="cart__items">
        <Link to={`/getproduct-detail/${product._id}`}>
          <div className="image__container">
            <img src={product?.imageUrl} alt="cart item" />
          </div>
        </Link>
        <div className="item_description__container">
          <div className="item__title">
            {product?.title.length < 67
              ? `${product?.title} Comfortable and Trendy for Every Occasion on Amazon`
              : product?.title}
          </div>
          <div className="stock__tag">In stock</div>
          <div className="shipping__tag">Eligible for free shipping</div>
          <div className="image__tag">
            <img
              src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
              alt="image tag"
            />
          </div>
          <div className="cart_items__feature">
            {/* <input
              type="text"
              placeholder="Qty:"
              value={quantity}
              onChange={quantityHandler}
            /> */}
            <div className="quantity">
              Qty: <strong>{quantity}</strong>
            </div>
            <div className="delete">Delete</div>
          </div>
        </div>
        <div className="item__price">&#8377;{product?.price}.00</div>
      </div>
      <Divider />
    </>
  );
};

export default CartItemCard;
