import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Divider } from "@mui/material";
import CartItemCard from "./CartItemCard";
import Loader from "../common/Loader";
import { CartContext } from "../../context/CartCount";
import checkmark from "../../images/checkmark.png";
import "../../styles/CartItems.css";

const CartItems = () => {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(0);
  const [loader, setLoader] = useState(false);

  const context = useContext(CartContext);
  let search = context.searchText;

  const apiCall = async () => {
    try {
      setLoader(true);
      const token = localStorage.getItem("token");
      const data = await axios.get(
        `${import.meta.env.VITE_HOSTNAME}/cart/get-cart`,
        { headers: { Authorization: token } }
      );
      setData(data?.data);
      setLoader(false);
    } catch (err) {
      console.log("error in api call->", err);
    }
  };
  useEffect(() => {
    apiCall();
  }, [render]);

  let totalAmount = 0;
  if (data.cart !== undefined) {
    for (const amt of data?.cart) {
      totalAmount += amt?.price * amt?.quantity;
    }
  }

  const deleteRerender = () => {
    setRender((prev) => prev + 1);
  };

  const buyNowHandler = async () => {
    var options = {
      key: "rzp_test_UafHRYeLm92SQK",
      key_secret: "wuLxONl4exspaeHCygohimqC",
      amount: parseInt(totalAmount * 100),
      currency: "INR",
      order_receipt: "order_rcptid_",
      name: "amazon-clone",
      description: "for testing purpose",
      handler: function (response) {
        console.log("response.>>>", response);
        // toast.success("Payment Successful");
        // const paymentId = response.razorpay_payment_id;
        // const orderInfo = {
        //   cartItems,
        //   addressInfo,
        //   date: new Date().toLocaleString("en-US", {
        //     month: "short",
        //     day: "2-digit",
        //     year: "numeric",
        //   }),
        //   email: JSON.parse(localStorage.getItem("user")).user.email,
        //   userid: JSON.parse(localStorage.getItem("user")).user.uid,
        //   paymentId,
        // };

        // try {
        //   const result = addDoc(collection(fireDB, "orders"), orderInfo);
        // } catch (error) {
        //   console.log(error);
        // }
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log("pay>>", pay);
    pay.on("payment.failed", async function () {
      try {
        // const key = resource.data.order.id;
        console.log("payemnet failed>>");
      } catch (err) {
        console.log("error in payment failed section", err);
      }
    });
  };

  return (
    <>
      {loader ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="container">
          <div className="cart_item__container">
            <div className="cart_item__title">Shopping Cart</div>
            <div className="tag">Select all items</div>
            <div className="price__tag">Price</div>
            <Divider />
            {data?.data
              ?.filter((item) => {
                return search?.toLowerCase() === ""
                  ? item
                  : item?.title?.toLowerCase()?.includes(search?.toLowerCase());
              })
              .map((item, index) => (
                <CartItemCard
                  key={index}
                  product={item}
                  cart={data?.cart}
                  deleteRender={deleteRerender}
                />
              ))}
            <div className="sub__total">
              Subtotal ({data?.data?.length} items):{" "}
              <b>&#8377;{totalAmount}.00</b>
            </div>
          </div>

          <div className="right__card">
            <div className="right_card__description">
              <div className="svg__container">
                <img src={checkmark} alt="svg" />
              </div>
              <div className="desc">
                <span>Part of your order qualifies for FREE Delivery.</span>{" "}
                Select this option at checkout.
              </div>
            </div>
            <div className="right_sub__total">
              Subtotal ({data?.data?.length} items):{" "}
              <b>&#8377;{totalAmount}.00</b>
            </div>
            <button className="buy__button" onClick={buyNowHandler}>
              Proceed to buy
            </button>
            <div className="emi__description">
              Your order qualifies for EMI with valid credit cards (not
              available on purchase of Gold, Jewelry, Gift cards and Amazon pay
              balance top up).
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
