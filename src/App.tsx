import Test from './lib/Components/Test'
// import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import HeadSect from './Pages/HeadSect';
import PrimarySection from './Pages/PrimarySection'
function App() {
  return (
    <div className="App">
       <HeadSect/> 
       <PrimarySection/>
       {/* <Test/>    */}
    </div>
  );
}

export default App;
