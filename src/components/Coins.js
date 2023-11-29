import React from 'react';
import './Coins.css';
const Coins = (props) => {
  return (
    
    <div  className='Coin-container'>
      <img src={props.image} alt={props.name} width={'80px'} height={'80px'} style={{marginTop:'5px'}}/>
      <h3>{props.name}</h3>
      <h4>{props.symbol}</h4>
      <h4>${props.price}</h4>
    </div>
  )
}

export default Coins;