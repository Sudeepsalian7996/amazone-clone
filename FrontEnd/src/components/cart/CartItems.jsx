import React, { useState, useEffect } from "react";
import axios from "axios";
import { Divider } from "@mui/material";
import CartItemCard from "./CartItemCard";
import checkmark from "../../images/checkmark.png";
import "../../styles/CartItems.css";

const CartItems = () => {
  const [data, setData] = useState([]);
  const [amount, setAmount] = useState(0);
  const apiCall = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await axios.get(
        `${import.meta.env.VITE_HOSTNAME}/cart/get-cart`,
        { headers: { Authorization: token } }
      );
      setData(data?.data);
    } catch (err) {
      console.log("error in api call->", err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  const amountHandler = (total) => {
    let x = amount + total;
    setAmount(x);
  };
  console.log("cart item amt-->", amount);
  return (
    <div className="container">
      <div className="cart_item__container">
        <div className="cart_item__title">Shopping Cart</div>
        <div className="tag">Select all items</div>
        <div className="price__tag">Price</div>
        <Divider />
        {data?.data?.map((item, index) => (
          <CartItemCard
            key={index}
            product={item}
            cart={data?.cart}
            amountHandler={amountHandler}
          />
        ))}
        <div className="sub__total">
          Subtotal ({data?.data?.length} items): <b>&#8377;2,892.00</b>
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
          Subtotal ({data?.data?.length} items): <b>&#8377;2,892.00</b>
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
