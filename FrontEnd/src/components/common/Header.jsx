import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/amazoneLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../styles/Header.css";

export default function () {
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
            <span className="basket__count">0</span>
          </div>
        </div>
      </div>
    </>
  );
}
