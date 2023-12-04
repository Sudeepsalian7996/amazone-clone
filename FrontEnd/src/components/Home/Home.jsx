import React, { useState, useEffect } from "react";
import axios from "axios";
import banner from "../../images/homebanner.jpg";
import Product from "./Product";
import "../../styles/Home.css";

function Home() {
  const [data, setDate] = useState([]);

  const apiCall = async () => {
    try {
      const data = await axios.get(
        "https://amazon-clone-fvsy.onrender.com/products/get-products"
      );
      setDate(data.data);
    } catch (err) {
      console.log("error in api call->", err);
    }
  };
  console.log("data ->", data.data);
  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <div className="home">
        <div className="image__container__home">
          <img src={banner} alt="home_banner" className="image__tag" />
        </div>
      </div>
      <div className="product__container">
        {data?.data?.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div>
    </>
  );
}

export default Home;
