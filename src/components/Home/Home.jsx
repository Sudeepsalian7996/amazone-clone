import React from 'react';
import banner from '../../images/homebanner.jpg';
import Product from './Product';
import Banner from './Banner';
import '../../styles/Home.css';

function Home() {
  return (
    <>
       
      <div className='home'>
        <div className="image__container">
            <img src={banner} alt="home_banner" className='image__tag'/>
        </div>
      </div>
      {/* <Banner /> */}
      <div className="product__container">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
      </div>
    </>
  )
}

export default Home