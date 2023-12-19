import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import Loader from "../common/Loader";
import { CartContext } from "../../context/CartCount";
import "../../styles/Order.css";

const Order = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [refresh, setRefresh] = useState(0);

  const context = useContext(CartContext);
  let search = context.searchText;

  const token = localStorage.getItem("token");

  const apiCall = async () => {
    try {
      setLoader(true);
      const data = await axios.get(
        `${import.meta.env.VITE_HOSTNAME}/order/get-cart`,
        {
          headers: { Authorization: token },
        }
      );
      setData(data?.data);
      setLoader(false);
    } catch (err) {
      console.log("error in api call->", err);
    }
  };

  useEffect(() => {
    apiCall();
  }, [refresh]);

  const refreshHandler = () => {
    setRefresh(1);
  };

  //scroll to top
  window.scrollTo(0, 0);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="order__container">
          <div className="order_title">Your Orders</div>
          {data?.data?.length === 0 ? (
            <div className="order__error">No order has been made yet</div>
          ) : (
            <>
              {" "}
              {data?.data
                ?.filter((item) => {
                  return search?.toLowerCase() === ""
                    ? item
                    : item?.productId?.title
                        ?.toLowerCase()
                        ?.includes(search?.toLowerCase());
                })
                .reverse()
                ?.map((item, index) => (
                  <OrderCard
                    key={index}
                    product={item}
                    refresh={refreshHandler}
                  />
                ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Order;
