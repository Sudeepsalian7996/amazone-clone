import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../../styles/ProductDetail.css";
import { CartContext } from "../../context/CartCount";

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const [sucess, setSucess] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const cartCount = useContext(CartContext);

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

  const { id } = useParams();

  const apiCall = async () => {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_HOSTNAME}/products/product-detail/${id}`
      );
      setData(data?.data);
    } catch (err) {
      console.log("error in api call->", err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  const token = localStorage.getItem("token");
  const cartHandler = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_HOSTNAME}/cart/add-cart/${id}`,
        { price: data?.data?.price },
        { headers: { Authorization: token } }
      );

      if (response?.data?.success === true) {
        setSucess(true);
        //setting the context for cart
        cartCount.countHandler();
        toast.success("Product added to cart", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          setSucess(false);
        }, 3000);
      } else if (response?.data?.success === false) {
        setSucess(true);
        toast.error("Something went wrong try after few minutes", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          setSucess(false);
        }, 2000);
      }
    } catch (err) {
      console.log("error in api call->", err);
    }
  };
  const savedPrice =
    (Number(data?.data?.price) * Number(data?.data?.offer)) / 100;

  const totalPrice = Number(data?.data?.price) - savedPrice;

  const date = new Date();
  const options = { month: "short" };
  const currentMonth = date.toLocaleDateString("en-US", options);
  const currentDate = date.getDate();

  const buyNowHandler = async () => {
    var options = {
      key: "rzp_test_UafHRYeLm92SQK",
      key_secret: "wuLxONl4exspaeHCygohimqC",
      amount: parseInt(data?.data?.price * 100),
      currency: "INR",
      order_receipt: "order_rcptid_",
      name: "amazon-clone",
      description: "Payment is secured",
      handler: async function (response) {
        const data = await axios.post(
          `${import.meta.env.VITE_HOSTNAME}/order/add-order/${id}`,
          { paymentId: response.razorpay_payment_id },
          { headers: { Authorization: token } }
        );
        setOrderSuccess(true);
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
    console.log("pay>>", pay);
    pay.on("payment.failed", async function () {
      console.log("payment failed console");
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
    <>
      <div className="product_detail__container">
        <div className="product__left">
          <div className="product_image__container">
            <img
              src={data?.data?.imageUrl}
              className="product__image"
              alt="product image"
            />
          </div>
          <div className="button__container">
            <button
              className="add_cart__button"
              onClick={cartHandler}
              disabled={sucess}
            >
              {sucess ? "Added to cart" : "Add to cart"}
            </button>

            <button className="buy__now" onClick={buyNowHandler}>
              Buy now
            </button>
          </div>
        </div>
        {sucess && (
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
        <div className="product_right__container">
          <div className="product__right">
            <div className="product__title">
              {data?.data?.title.length < 67
                ? `${data?.data?.title} Comfortable and Trendy for Every Occasion on Amazon`
                : data?.data?.title}
            </div>
            <div className="rating">
              <span>{data?.data?.rating}</span> {starRating(data?.data?.rating)}
            </div>
            <div className="product__MRP">
              M.R.P : &#8377;<s>{data?.data?.price}.00</s>
            </div>
            <div className="product__deal">
              Deal of the day : <span>&#8377;{totalPrice}.00</span>
            </div>
            <div className="product__save">
              You save :{" "}
              <span> &#8377;{`${savedPrice}.00 (${data?.data?.offer}%)`}</span>
            </div>
            <div className="product__delivery">
              FREE DELIVERY : {currentMonth} {currentDate} -{" "}
              {currentDate < 29 ? currentDate + 2 : 1}
            </div>
            <div className="proudct__description">
              <span>About this item: </span>
              <br />
              {data?.data?.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
