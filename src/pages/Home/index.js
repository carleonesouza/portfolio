import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.css";
import Header from "../../components/Header";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex flex-wrap h-screen">
      <Header />

      <div className="flex items-center bg-white w-full md:w-1/2 h-screen">
        <div className="mx-32 sm:items-center md:items-center lg:items-center xl:items-center">
          <h1 className="text-6xl font-bold mt-20" data-aos="fade-right">Hello,</h1>
          <div className="flex mt-10 font-light text-gray-500">
            <div className="pr-4 ">
              <span>I'am</span>
              <p className="text-6xl text-gray-900 font-bold" data-aos="fade-right">
                Carleone Souza
              </p>
            </div>
          </div>
          <div className="description w-full md:w-2/3 mt-2 text-gray-500 text-sm" data-aos="fade-right">
            I live in Belo Horizonte, better know as "BEAGÁ", I'm graduated in
            Sciencie Computer by the Federal Institute of Education, Science and
            Technology of Bahia - Licenciado. I love work with the web area
            because of the thousands of possibilities that this platform offer
            to us.
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-screen h-auto bg-gray-400 hidden lg:block">
        <img
          src="https://source.unsplash.com/7H77FWkK_x4/1200x800"
          className="h-screen w-full"
          alt=""/>
      </div>
      
    </div>
  );
};

export default Home;
