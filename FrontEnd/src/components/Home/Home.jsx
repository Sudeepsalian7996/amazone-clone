import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Banner from "./Banner";
import ProductDiff from "./ProductDiff";
import "../../styles/Home.css";

function Home() {
  const [data, setData] = useState([]);

  const apiCall = async () => {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_HOSTNAME}/products/get-products`
      );
      setData(data.data);
    } catch (err) {
      console.log("error in api call->", err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <div className="home">
        {/* <div className="image__container__home">
          <img src={banner} alt="home_banner" className="image__tag" />
        </div> */}
        <Banner />
      </div>
      <div className="products__container">
        <ProductDiff data={data.data} />
        <Product data={data} />
        <Product data={data} />
        <ProductDiff data={data.data} />
        <Product data={data} />
        <ProductDiff data={data.data} />
        <Product data={data} />
        <Product data={data} />
        {/* <div className="product__container">
        {data?.data?.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </div> */}
      </div>
    </div>
  );
}

export default Home;
