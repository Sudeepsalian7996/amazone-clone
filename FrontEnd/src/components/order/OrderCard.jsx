import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

const OrderCard = ({ product, refresh }) => {
  const [orderSuccess, setOrderSuccess] = useState(false);

  const token = localStorage.getItem("token");

  const date = new Date(product?.date);
  const currentDate = date?.getDate();
  const currentYear = date?.getFullYear();
  const currentMonthNum = date?.getMonth();
  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  const maxDaysInMonth = getDaysInMonth(currentYear, currentMonthNum);

  const randomNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;

  const randomDay =
    currentDate + randomNumber > maxDaysInMonth
      ? maxDaysInMonth
      : currentDate + randomNumber;

  const options = { month: "short" };
  const currentMonth = date?.toLocaleDateString("en-US", options);

  const buyNowHandler = async () => {
    var options = {
      key: "rzp_test_UafHRYeLm92SQK",
      key_secret: "wuLxONl4exspaeHCygohimqC",
      amount: parseInt(product?.productId?.price * 100),
      currency: "INR",
      order_receipt: "order_rcptid_",
      name: "amazon-clone",
      description: "Payment is secured",
      handler: async function (response) {
        const data = await axios.post(
          `${import.meta.env.VITE_HOSTNAME}/order/add-order/${
            product?.productId?._id
          }`,
          { paymentId: response.razorpay_payment_id },
          { headers: { Authorization: token } }
        );
        console.log("order data>>", data);
        setOrderSuccess(true);
        refresh();
        toast.success("Product purchased successfully", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();

    pay.on("payment.failed", async function () {
      pay.close();
      setOrderSuccess(true);
      toast.error("Payment issue! Try again", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return (
    <div className="layout">
      <div className="left__layout">
        <div className="header__section">
          <div className="placed__date">
            <div>ORDER PLACED</div>
            <div className="font_change">
              {`${currentDate}-${currentMonth}-${currentYear}`}
            </div>
          </div>
          <div className="total">
            <div>TOTAL</div>
            <div className="font_change">
              &#8377;{product?.productId?.price}.00
            </div>
          </div>
          <div className="ship_to">
            <div>SHIP TO</div>
            <div className="font_change">{product?.userId?.name}</div>
          </div>
          <div className="order_id">ORDER # {product?.paymentId}</div>
        </div>
        <div className="main__section">
          <div className="deliver__date">
            Deliver on {`${randomDay}-${currentMonth}-${currentYear}`}
          </div>
          <div className="deliver__desc">Package was handed to resident</div>
          <div className="order_product_detail__container">
            <div className="order_image__container">
              <img src={product?.productId?.imageUrl} alt="" />
            </div>
            <div className="product__description">
              <div className="order_product__title">
                {product?.productId?.title?.length < 67
                  ? `${product?.productId?.title} Comfortable and Trendy for Every Occasion on Amazon`
                  : product?.productId?.title}
              </div>
              <div className="return_date">
                Return window closed by end of the year.
              </div>
              <div className="buttons">
                <button className="buy__again" onClick={buyNowHandler}>
                  Buy it again
                </button>
                <Link to={`/getproduct-detail/${product?.productId?._id}`}>
                  <button className="viewagain">View your item</button>
                </Link>
              </div>
              {orderSuccess && (
                <div>
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
