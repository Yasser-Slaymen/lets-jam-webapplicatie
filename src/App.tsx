import React from 'react';
// import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import HeadSect from './Pages/HeadSect';
import PrimarySection from './Pages/PrimarySection'
function App() {
  return (
    <div className="App">
       <HeadSect/> 
       <PrimarySection/>   
    </div>
  );
}

export default App;
