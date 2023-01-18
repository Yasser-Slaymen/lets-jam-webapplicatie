// import Test from './lib/Components/Test'
// import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import HeadSect from './Pages/HeadSect';
import PrimarySection from './Pages/PrimarySection'
import SecondSection from './Pages/SecondSection';
import Test from './lib/Components/Test'
function App() {
  return (
    <div className="App">
       <HeadSect/> 
       <PrimarySection/>
       <SecondSection/>
       <Test/>
    </div>
  );
}

export default App;
