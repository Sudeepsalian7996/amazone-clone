import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import "../../styles/Order.css";

const Order = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const token = localStorage.getItem("token");

  const apiCall = async () => {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_HOSTNAME}/order/get-cart`,
        {
          headers: { Authorization: token },
        }
      );
      setData(data?.data);
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
  return (
    <div className="order__container">
      <div className="order_title">Your Orders</div>
      {data?.data?.length === 0 ? (
        <div className="order__error">No order has been made yet</div>
      ) : (
        <>
          {" "}
          {data?.data?.reverse()?.map((item, index) => (
            <OrderCard key={index} product={item} refresh={refreshHandler} />
          ))}
        </>
      )}
    </div>
  );
};

export default Order;
