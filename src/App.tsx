// import Test from './lib/Components/Test'
// import {Link, Route, Routes} from 'react-router-dom'
import "./App.css";
import ThirdSection from "./Pages/ThirdSection";
import HeadSect from "./Pages/HeadSect";
import PrimarySection from "./Pages/PrimarySection";
import SecondSection from "./Pages/SecondSection";
// import Test from './lib/Components/Dtest'
// import Jst from './lib/Components/Jstn'

function App() {
  return (
    <div className="App">
      <HeadSect />
      <PrimarySection />
      <SecondSection />
      <ThirdSection />
      {/* <Test/> */}
      {/* <Jst/> */}
    </div>
  );
}

export default App;
