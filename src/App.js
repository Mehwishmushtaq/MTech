import React from "react";
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import Services from "./components/Services-section/Services";
import Design from "./components/Design/Design";
import ContactUs from "./components/ContactUs/ContactUs"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/design" element={<Design />} />
          <Route path="/contact" element={<ContactUs />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


























// import Home from "./pages/Home";

// function App() {
//   return <Home />;
// }

// export default App;
