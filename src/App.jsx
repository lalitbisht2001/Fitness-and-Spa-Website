import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import FirstLink from "./Components/HEADER/FirstLink";
import Navbar from "./Components/HEADER/Navbar";
import Digital from "./Components/PAGES/Classes/Digital";
import GroupFitness from "./Components/PAGES/Classes/GroupFitness";
import Personal from "./Components/PAGES/Training/Personal";
import Merge from "./Components/MAIN/Merge";
import Members from "./Components/MAIN/MEMBERS/Members";
import Meditation from "./Components/MAIN/CLASSES/Meditation";
import MobileApp from "./Components/APPLICATION/MobileApp";
import Class from "./Components/MAIN/CLASSES/Class";
import FitnessMeet from "./Components/MAIN/FITNESS/FitnessMeet";
import SidePhoto from "./Components/FORM/SidePhoto";
import Footer from "./Components/FOOTER/fOOTER.JSX";
import Club from "./Components/PAGES/CLUBS/Club";
import Pilates from "./Components/PAGES/Training/PILATES/Pilates";
import Spa from "./Components/PAGES/SPA/Spa";
import SignIn from "./Components/PAGES/SIGN/SignIn";
// import useIsOpen from "./HOOKS/useIsOpen";
// import Members from "./Components/MAIN/MEMBERS/Members";


const App = () => {



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/groupfitness" element={<GroupFitness />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/pilates" element={<Pilates />} />
          <Route path="/clubs" element={<Club />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

const Home = () => {
  // const [isOpen,] = useIsOpen();
  return (
    <div>
      <Navbar />
      <Merge />
      <Members />
      <FitnessMeet />
      <Class />
      <Meditation />
      <MobileApp />
      <SidePhoto />
      <Footer />
    </div>
  )
}
