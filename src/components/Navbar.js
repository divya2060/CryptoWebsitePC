import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='logo'>
       <h2>CryptoScore</h2>
      </div>
    <nav>
      <Link to='/' className='a'>Home</Link>
      <Link to='/exchanges'className='a' >Exchanges</Link>
      
    </nav>
    </div>
  )
}

export default Navbar