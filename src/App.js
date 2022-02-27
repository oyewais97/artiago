import logo from './logo.svg';
import './App.css';
import  NavBar from './layout/navBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InteriorDesign  from './component/interiorDesign'
import Events from './component/event' 
import Home from './component/home';
import { Footer } from '../src/layout/footer'

function App() {
  return (
    <>
    
     <Router>
        <Routes>
          <Route  path="/"  element={<Home/>} />
           
         
          <Route  path="/event" exact element={<Events/>} />
           
          
          <Route  path="/interior" exact  element={<InteriorDesign/>} />
           
           
        </Routes>
      </Router>
     
    </>
    
    
    );
}

export default App;
