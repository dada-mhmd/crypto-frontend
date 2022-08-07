import React from 'react'

import HeroImg from '../../assets/hero-img.png'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        {/* left Side  */}
        <div className='left'>
          <p>Buy & Sell Crypto 24/7 using your retirement account </p>
          <h1>Invest in Cryptocurrency with your IRA</h1>
          <p>Buy, Sell, and store hundreds of Cryptocurrencies</p>

          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>

        <div className='right'>
          <div className='img-container'>
            <img src={HeroImg} alt='hero' />
          </div>
        </div>
        {/* Right Side */}
      </div>
    </div>
  )
}

export default Hero
