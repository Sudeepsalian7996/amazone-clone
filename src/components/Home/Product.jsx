import React from 'react';
import '../../styles/Product.css'

function Product() {
  return (
    <>
      <div className='product__card'>
          <div className="image__container">
            <img src="https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SR400,600_AGcontrast_.jpg" className="product__image" alt="" />
          </div>
        <div className="product__info">
            <p className="product__title">
                dummy description
            </p>
            <div className="product__price">
                <small>$</small>
                <strong>19.03</strong>
            </div>            
        </div>
        <div className="product__cart__container">
            <button className="product__cart">Add To Cart</button>
          </div>
      </div>
    </>
    
  )
}

export default Product