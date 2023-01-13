import React from 'react';
// import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import Navbar from'./lib/Components/Navbar'

function App() {
 
  return (
    <div className="App">
            <Navbar
            about='About'
            contact="Contact"
            services='Services'
          />  
      <Home/>
     
    </div>
  );
}

export default App;
