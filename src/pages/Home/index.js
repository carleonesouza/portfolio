import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.css";
import ImageBackground from '../../assets/background-home.jpeg';
import Header from "../../components/Header";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    
      <div className="w-full bg-gray-200 container mx-auto">
        <Header />
        <div className="flex justify-items-auto">
          <div className="w-full flex">
            <div className="w-full h-auto bg-gray-400 hidden lg:block md:w-1/2 h-screen">
              <img
                src={ImageBackground}
                className="h-screen w-full"
                alt=""/>
            </div>
            <div className=" w-full md:w-1/2  bg-white flex justify-center items-center">
              <div className="flex content-center flex-wrap">
                <div className="row w-full">
                  <h1
                    className=" flex-1 text-6xl font-bold mt-20"
                    data-aos="fade-right" >
                    Hello,
                  </h1>
                </div>
                <div className="row w-full font-light text-gray-400"> <span className="sou-text">I'am</span></div>
                <div className="row w-full">
                  <div className="font-light text-gray-500">                  
                    <div className="pr-4">
                      <p
                        className="flex-1 text-6xl text-gray-900 font-bold"
                        data-aos="fade-right">
                        Carleone Souza
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row w-full">
                  <div
                    className="description pr-20 pl-20 text-gray-700 text-sm"
                    data-aos="fade-right" >
                    I live in Belo Horizonte, better know as "BEAGÁ", I'm
                    graduated in Sciencie Computer by the Federal Institute of
                    Education, Science and Technology of Bahia - Licenciado. I
                    love work with the web develope, there are thousands of
                    possibilities in this platform that I love it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Home;
