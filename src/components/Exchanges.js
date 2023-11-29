import React, { useState,useEffect } from 'react';
import './Exchange.css';
import {Link} from 'react-router-dom';
import Coin from './Coins';
import Loader from './Loader';
import CrCoin from '../Assets/CrCoin';
import './Search.css';
const Exchanges = () => {
    const [Coins, setCoins] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [result, setresult] = useState('');
    useEffect(() => {
      const fetchData = async ()=>{
        try{ 
      let raw = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
      let data = await raw.json();
      console.log(data);
      setCoins(data);

      setLoading(false);
        } catch(error){
            console.log(error);
        }
     } 
     fetchData();
    },[])
    const getResult =   Coins.filter((coin)=>{
        return  coin.name.includes(result);
        })
    
 
  return (
    <>
    {
      Loading ? 
      <Loader /> : (
        <>
           <div className='SearchBar' style={{background:'rgba(0, 0, 0, 0.725)'}}>
    <input type='text' placeholder='Search Crypto Currency' className='input' onChange={(e)=>{
        setresult(e.target.value)
    }}/>
   </div>
        <div className='Ex-container'>
        {getResult.map((ele)=>{
       return (   
       <Link to={`/Crcoin/${ele.id}`} key={ele.id}  style={{textDecoration:'none',color:'black',fontSize:'1.3vw'}}>
       <Coin  name={ele.name} key={ele.id} image={ele.image} price={ele.current_price} symbol={ele.symbol}/>
       </Link>
       )
        })}
        </div>
        </>
      )
    } 
   

    </>
  )
}

export default Exchanges