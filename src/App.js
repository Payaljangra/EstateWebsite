import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Companies from "./components/Companies/Companies";
import Residential from "./components/Residents/Residential";
import GetStarted from "./components/GetStarted/GetStarted";
import Value from "./components/Valuess/Value";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
// import { Productss } from "./components/Productss";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residential/>
      {/* <Productss/> */}
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
