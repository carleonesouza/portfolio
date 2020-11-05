import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Works from "./pages/Works";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div>
      <div className="font-sans bg-white flex flex-col min-h-screen w-full">
        <div>
          <Home/>
          <Works/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
