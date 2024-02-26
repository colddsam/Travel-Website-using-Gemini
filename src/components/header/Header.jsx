import React from 'react'
import './Header.css'
import { websiteLogo } from '../../assets/Images'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <section className='header'>
      <div className="left__header">
        <img src={websiteLogo} alt="websiteLogo" />
        <span>PHOENIX TRAVELS</span>
      </div>
      <div className="right__header">
        <button><Link to='/login'>Log In</Link></button>
        <button><Link to='/register'>Sign In</Link></button>
      </div>
    </section>
  )
}

export default Header