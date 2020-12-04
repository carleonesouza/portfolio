import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.css";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Layout from "./components/Layout";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <div className="font-sans bg-white flex flex-col min-h-screen w-full">
      <Switch>
          <Route basepath ='/app'>
            <Home path="/" />
            <Works path="/works"/>
            <Blog path="/blog"/>
            <Contact path="/contact"/>                       
          </Route>
       </Switch>
        </div>
     
      </Layout>
  );
}

export default App;
