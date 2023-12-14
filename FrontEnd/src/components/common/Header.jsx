import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../images/amazoneLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../styles/Header.css";
import { CartContext } from "../../context/CartCount";

export default function () {
  const countObj = useContext(CartContext);
  const [data, setData] = useState([]);

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
  }, [countObj.count]);

  return (
    <>
      <div className="header__container">
        <div className="image_container">
          <Link to={"/"}>
            <img src={logo} alt="amazone-logo" className="image_tag" />
          </Link>
        </div>
        <div className="search__box">
          <input
            type="text"
            placeholder="Search amazon.in"
            className="seachbox__input"
          />
          <SearchIcon className="searchbox__icon" />
        </div>
        <div className="navbar__container">
          <div className="sign__button">
            <span>
              <Link to="/signin">Sign in</Link>
            </span>
          </div>
          <div className="return_order__button">
            Return <span>& Order</span>
          </div>

          <div className="your_prime__button">
            <span>
              <Link to={"/add-product"}>Add product</Link>
            </span>
          </div>

          <div className="basket__container">
            <Link to={"/cart-items"}>
              <ShoppingCartIcon className="basket__icon" />
            </Link>
            <span className="basket__count">{data?.data?.length}</span>
          </div>
        </div>
      </div>
    </>
  );
}
