import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Banner from "./Banner";
import ProductDiff from "./ProductDiff";
import Loader from "../common/Loader";
import "../../styles/Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const apiCall = async () => {
    try {
      setLoader(true);
      const data = await axios.get(
        `${import.meta.env.VITE_HOSTNAME}/products/get-products`
      );
      setData(data.data);
      setLoader(false);
    } catch (err) {
      console.log("error in api call->", err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  //scroll to top
  window.scrollTo(0, 0);
  return (
    <>
      {loader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="home">
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
          </div>
        </>
      )}
    </>
  );
}

export default Home;
