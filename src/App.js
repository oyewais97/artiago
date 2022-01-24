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
          <Route exact path="/"  element={<Home/>} >
           
          </Route>
          <Route exact path="/event"  element={<Events/>} >
           
          </Route>
          <Route exact path="interior"  element={<InteriorDesign/>} >
           
           </Route>
        </Routes>
      </Router>
     
    </>
    
    
    );
}

export default App;
