import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Residence from "./Pages/Residence/Residence";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
    <ToastContainer />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Residence" element={<Residence />} />
    <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
    </div>
    );
  }
  
  export default App;
  










// import "./App.css";
// import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import About from "./Pages/About/About";
// import Residence from "./Pages/Residence/Residence";
// import ContactUs from "./Pages/ContactUs/ContactUs";
// import { useEffect } from "react";


// function App() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({top: 0, behavior:"smooth"})
//   },[pathname]);


//   return (
//     <BrowserRouter>
//     <Routes>
//           <Route path="/" element=<Home /> />
//           <Route path='/About' element=<About /> />
//           <Route path='/Residence' element=<Residence /> />
//           <Route path='/ContactUs' element=<ContactUs /> />


//         </Routes>
//       </BrowserRouter>
//   );
// }

// export default App;
