// import Test from './lib/Components/Test'
// import {Link, Route, Routes} from 'react-router-dom'
import './App.css';
import HeadSect from './Pages/HeadSect';
import PrimarySection from './Pages/PrimarySection'
import SecondSection from './Pages/SecondSection';
function App() {
  return (
    <div className="App">
       <HeadSect/> 
       <PrimarySection/>
       <SecondSection/>
    </div>
  );
}

export default App;
