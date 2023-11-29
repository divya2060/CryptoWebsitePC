import React from 'react';
import './Home.css';
import logo from '../images/Currency.jpg';
const Home = () => {
  return (
    <div className='Home-page'>
    <div className='left'>
      <h2 style={{textAlign:'center'}}>Don't Miss The Score On CryptoScore</h2>
      <hr></hr>
      <p>
        Welcome To Our Website We Provide the Latest Updates On prices of 
        Crypto Currency and Details of The Coins Are Also provided Along With prices
      </p>
      <h2 style={{textAlign:'center'}}>Our Goals</h2>
      <hr></hr>
      <p>Our Goal is to Provide Best Services as possible to our Users and create a Healthy Evironment in the BlockChain 
        Community
      </p>
      <h2 style={{textAlign:'center'}}>About Us</h2>
      <hr></hr>
      <p>This Service is created By Divya Prakash Singh Using React and is currently pursuing Btech CS in VIT Vellore
        and Cuurently in 3rd Year of His Degree 
      </p>
      

    </div>
    <div className='right'>
    <img src={logo} alt='this is bitcoin' />
    </div>
    </div>
  )
}

export default Home
