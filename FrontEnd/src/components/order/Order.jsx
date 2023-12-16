import React from "react";
import "../../styles/Order.css";

const Order = () => {
  return (
    <div className="order__container">
      <div className="title">Your Orders</div>
      <div className="layout">
        <div className="left__layout">
          <div className="header__section">
            <div className="placed__date">
              <div>ORDER PLACED</div>
              <div>20 November 2023</div>
            </div>
            <div className="total">
              <div>TOTAL</div>
              <div>&#8377;99.00</div>
            </div>
            <div className="ship_to">
              <div>SHIP TO</div>
              <div>Sudeep Salian</div>
            </div>
            <div className="order_id">08-6249883-3661</div>
          </div>
          <div className="main__section">
            <div className="deliver__date">Delivered 25-Nov-2023</div>
            <div className="deliver__desc">Package was handed to resident</div>
            <div className="product_detail__container">
              <div className="order_image__container">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTK8MoILqE3OH51v8XlnY8ijUy_JggimWAJYfTwXZkc-lxIDCov"
                  alt=""
                />
              </div>
              <div className="product__description">
                <div className="product__title">
                  crazymonk Naruto Itachi Uchiha Unisex Anime Hoodie - White, M
                </div>
                <div className="return_date">
                  Return window closed on 05-Dec-2023
                </div>
                <div className="buttons">
                  <button className="buy__again">Buy it again</button>
                  <button className="viewagain">View your item</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right__layout"></div>
      </div>
    </div>
  );
};

export default Order;
