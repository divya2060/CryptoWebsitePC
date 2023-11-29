import React, { useEffect, useState } from 'react'
import './Coin.css';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import HistoryChart from '../components/HistoryChart';
import axios from 'axios';
const CrCoin = () => {
    const {coinId} = useParams();
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`; 
    const [Crcoin, setCrcoin] = useState({});
    const [Loading,setLoading] = useState(true);
    const [ChartArray, setChartArray] = useState([])
    const [days, setdays] = useState('24h');
    useEffect(() => {
     const getCoins = async ()=>{
        try{
            let raw = await fetch(url);
            let data = await raw.json();
            let ChartData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`);
            setCrcoin(data);
            setChartArray(ChartData.data.prices);
            console.log(data);
            console.log(ChartData.data);
            setLoading(false);
        }
        catch(error){   
        setLoading(false)
        }
     }
     getCoins(); 
    }, [coinId])
    const coinChartData = ChartArray.map((value)=>({x:value[0] , y:value[1].toFixed(2)}));
  
  return (
<>
{
  Loading?
  <Loader/>
  :(
    <>
    <HistoryChart arr={ChartArray} coin={coinChartData}/>
<div className='Cr-container'>
  <div className='name'>
  <img src={Crcoin.image.small} alt={Crcoin.name} />
  <h2>{coinId}</h2>
  </div>
  <div className='desc'>
    <p dangerouslySetInnerHTML={{__html:Crcoin.description.en}}></p>
  </div>

</div>
</>
  )
}

</>
  )
}

export default CrCoin