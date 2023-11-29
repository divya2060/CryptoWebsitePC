import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import moment from 'moment';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
const HistoryChart = (props) => {
  const { coinId } = useParams();
  const date = []
  const prices = []
  const data = {
    labels:props.coin.map(value=>moment(value.x).format('MMM DD')),
    datasets:[
      {
     label:coinId,
     data:props.coin.map(val=>val.y),
     borderColor:"darkgrey",
     backgroundColor:['blue','red','green'] 
      },
    ],
  };
  return (
    <div style={{marginTop:'1.2rem'}}>
    <Line
    options={
      {
        responsive:true
      }
    }
    data={data}
    />
    </div>
  )
}

export default HistoryChart