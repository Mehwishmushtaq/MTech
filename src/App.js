import React from "react";
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";

// Website Development Services
import Services from "./components/Services-section/Services";
import WebsiteDevelopment from "./components/WebDevelopment/web-development"
import HtmlServices from "./components/WebDevelopment/Html-Service";
import WordPressService from "./components/WebDevelopment/Wordpress";
import LaravelService from "./components/WebDevelopment/Laravel";
import ReactService from "./components/WebDevelopment/React";

// Content Writing Services
import ContentWriting from "./components/WebDevelopment/Content-Writing";
import WebsiteContent from "./components/WebDevelopment/Website-Content";
import SocialMediaContent from "./components/WebDevelopment/Social-Media-Content";
import EcommerceContent from "./components/WebDevelopment/Ecommerce-Content";
 
// Digital Marketing Services
import SocialMediaMarketing from "./components/WebDevelopment/Social-Media-Marketing";
import SearchEngineOptimization from "./components/WebDevelopment/Search-Engine-Optimization";
import EmailMarketing from "./components/WebDevelopment/Email-Marketing";


// Graphics Designing Service
import GraphicsDesigning from "./components/WebDevelopment/Graphics-Design";
import WhyChooseUs from './components/whyChooseus/whychoose'
import Design from "./components/Design/Design";
import ContactUs from "./components/ContactUs/ContactUs"
import Portfolio from "./components/Portfolio"




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />

          {/* Website Development Routes */}
          <Route path="/web-development" element={<WebsiteDevelopment />} />
          <Route path="/html-services" element={<HtmlServices />} />
          <Route path="/wordpress-service" element={<WordPressService />} />
          <Route path="/laravel-service" element={<LaravelService />} />
          <Route path="/react-service" element={<ReactService />} />

          {/* Content Writing Routes */}
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/website-content" element={<WebsiteContent />} />
          <Route path="/social-media-content" element={<SocialMediaContent />} />
          <Route path="/ecommerce-content" element={<EcommerceContent />} />

          {/* Digital Marketing Routes */}
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/search-engine-optimization" element={<SearchEngineOptimization />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />


           {/* Graphics Designing Routes */}
          <Route path="/graphics-designing" element={<GraphicsDesigning />} />
          <Route path="/whyChooseUs" element={<WhyChooseUs />} />
          <Route path="/design" element={<Design />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />

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
