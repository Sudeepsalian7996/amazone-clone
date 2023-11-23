import React from 'react'
import banner from '../images/homebanner.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="image__container">
            <img src={banner} alt="home_banner" className='image__tag'/>
        </div>
    </div>
  )
}

export default Home