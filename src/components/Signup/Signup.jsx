import React from 'react'

import Img from '../../assets/trade.png'

import './Signup.css'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='container'>
        {/* left */}

        <div className='left'>
          <img src={Img} alt='crypto' />
        </div>

        {/* right */}
        <div className='right'>
          <h2>Earn passive income with crypto.</h2>
          <p>Earn up to 12% annual rewards on 30+ digital assets.</p>

          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Lean More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
