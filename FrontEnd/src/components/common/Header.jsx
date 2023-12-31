import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import logo from "../../images/amazoneLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../styles/Header.css";
import { CartContext } from "../../context/CartCount";

export default function () {
  const countObj = useContext(CartContext);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [login, setLogin] = useState("Sign in");
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");
  const apiCall = async () => {
    try {
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

  const toggleHandler = () => {
    if (token) {
      localStorage.removeItem("token");
      navigate("/signin");
    }
  };

  useEffect(() => {
    if (token) {
      setLogin("Sign Out");
    } else {
      setLogin("Sign in");
    }
  }, [token]);

  //Pass searching text to context
  useEffect(() => {
    setSearch("");
  }, [location.pathname]);
  countObj.searchTextHandler(search);

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className="searchbox__icon" />
        </div>
        <div className="navbar__container">
          <div className="sign__button">
            <span>
              <Link to="/signin" onClick={toggleHandler}>
                {login}
              </Link>
            </span>
          </div>
          <div className="return_order__button">
            <span>
              {" "}
              <Link to={`${token ? "/order-return" : "/signin"}`}>
                {" "}
                Return & Order
              </Link>
            </span>
          </div>

          <div className="your_prime__button">
            <span>
              <Link to={`${token ? "/add-product" : "/signin"}`}>
                Add product
              </Link>
            </span>
          </div>

          <div className="basket__container">
            <Link to={`${token ? "/cart-items" : "/signin"}`}>
              <ShoppingCartIcon className="basket__icon" />
            </Link>
            <span className="basket__count">
              {token ? data?.data?.length : ""}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
