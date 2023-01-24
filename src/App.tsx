// import {Link, Route, Routes} from 'react-router-dom'
import "./App.css";
import ThirdSection from "./Pages/ThirdSection";
import HeadSect from "./Pages/HeadSect";
import PrimarySection from "./Pages/PrimarySection";
import SecondSection from "./Pages/SecondSection";
import FouthSection from "./Pages/FourthSection";
import FooterSection from "./Pages/FooterSection";
import Jst from "./lib/Components/Jstn";

function App() {
  return (
    <div className="App">
      <Jst />
      <HeadSect />
      <PrimarySection />
      <SecondSection />
      <ThirdSection />
      <FouthSection />
      <FooterSection />
    </div>
  );
}

export default App;
