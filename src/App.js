import './App.css';
import GameLogin from './components/gamelogin';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GameSignin from './components/gamesignin';
import Home from './components/home';
import Trailers from './components/trailers';



function App() {
  return (
    <Router>
     <Routes>
     <Route exact path="/signup" element={<GameSignin/>}/>
     <Route exact path="/home" element={<Home/>}/> 
     <Route exact path="/trailers" element={<Trailers/>}/>
       <Route exact path="/" element={<GameLogin/>}/>
       </Routes>
   </Router>
  )};

export default App;