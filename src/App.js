import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import CrCoin from './Assets/CrCoin';
function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/exchanges' element={<Exchanges />}/>
    <Route path='/Crcoin/:coinId' element={<CrCoin/>}/>
    </Routes>
  </Router>
  );
}

export default App;
