import React from "react";
import { Divider } from "@mui/material";
import checkmark from "../../images/checkmark.png";
import "../../styles/CartItems.css";

const CartItems = () => {
  return (
    <div className="container">
      <div className="cart_item__container">
        <div className="cart_item__title">Shopping Cart</div>
        <div className="tag">Select all items</div>
        <div className="price__tag">Price</div>
        <Divider />
        <div className="cart__items">
          <div className="image__container">
            <img
              src="https://m.media-amazon.com/images/I/71t9JRry+3L._SY679_.jpg"
              alt="cart item"
            />
          </div>
          <div className="item_description__container">
            <div className="item__title">
              Engage M1 Perfume Spray For Men, Citrus and Woody, Skin Friendly,
              120ml, Opens in a new tab Engage M1 Perfume Spray For Men, Citrus
              and Woody, Skin Friendly, 120ml
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
              <input type="text" placeholder="Qty:" />
              <div className="delete">Delete</div>
            </div>
          </div>
          <div className="item__price">&#8377;7872.00</div>
        </div>
        <Divider />
        <div className="sub__total">
          Subtotal (3 items): <b>&#8377;2,892.00</b>
        </div>
      </div>

      <div className="right__card">
        <div className="right_card__description">
          <div className="svg__container">
            <img src={checkmark} alt="svg" />
          </div>
          <div className="desc">
            <span>Part of your order qualifies for FREE Delivery.</span> Select
            this option at checkout.
          </div>
        </div>
        <div className="right_sub__total">
          Subtotal (3 items): <b>&#8377;2,892.00</b>
        </div>
        <button className="buy__button">Proceed to buy</button>
        <div className="emi__description">
          Your order qualifies for EMI with valid credit cards (not available on
          purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).
        </div>
      </div>
    </div>
  );
};

export default CartItems;
