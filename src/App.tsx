import React from 'react';
// import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Navbar from'./components/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar>
          <ul className='list-items'>
            <li>name="about"</li>
            <li></li>
            <li></li>
          </ul>
        </Navbar>
         
      <Home/>
     
    </div>
  );
}

export default App;
