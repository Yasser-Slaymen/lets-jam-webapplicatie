import React from 'react';
// import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import Primary from './Pages/PrimarySection'
import HeadSect from './Pages/HeadSect';
// import Navbar from'./lib/Components/Navbar'
// import { ReactNode } from 'react';
// interface Navprops {
//   children: ReactNode;
// }

function App() {
 
  return (
    <div className="App">
       <HeadSect/>    
      <Primary/>
     
    </div>
  );
}

export default App;
