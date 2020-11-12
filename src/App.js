import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Works from "./pages/Works";
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Carousel from './pages/Carousel';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <div className="font-sans bg-white flex flex-col min-h-screen w-full">
        <div>
          <Home/>
          <Works/>
          <Blog/>
          <Contact/>
          <Carousel/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
