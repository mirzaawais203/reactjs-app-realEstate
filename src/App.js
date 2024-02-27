import "./App.css";
import {Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Residence from "./Pages/Residence/Residence";
import ContactUs from "./Pages/ContactUs/ContactUs";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element=<Home/> /> 
    <Route path='/About' element=<About/> />
    <Route path='/Residence' element=<Residence/> />
    <Route path='/ContactUs' element=<ContactUs/> />


    </Routes>
    </BrowserRouter>
    
  );
}

export default App;