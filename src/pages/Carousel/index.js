import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./styles.css";

import "./styles.css";

const MCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 900 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
      return (
        <section className="px-8 " id="page-work">
          <div className="text-2xl sm:text-3xl text-center xl:mt-20 pb-6 md:m-4">
            Freelance Web Developer based in Nova Lima, Minas Gerais-Brazil.
            <br /> Front-End and Back-End experience.
          </div>
    
        
          <Carousel swipeable={false}
                    draggable={false}
                    responsive={responsive}              
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    customTransition="transform 100ms ease-in"
                    transitionDuration={300}
                    containerClass="carousel-container"             
                    itemClass="carousel-item">
    
            <div className="bg-white mcontainer sm:mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                className="image rounded"
              />
              <div className="overlay content">
                <div className="text-center custom">
                  <h3 className="font-mono ext-lg text-blue-400 mb-4">CHINESE</h3>
                  <p className="text-sm text-center">Lorem ipsum dolor, sit amet</p>
                </div>
    
                <div className="text-center">
                  <Link to="/create-point">
                    <span>
                      <FiLogIn />
                    </span>
                    <strong>View</strong>
                  </Link>
                </div>
              </div>
            </div>
    
            <div className="bg-white container sm:mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                className="image rounded"
              />
              <div className="overlay content">
                <div className="text-center custom">
                  <h3 className="font-mono ext-lg text-blue-400 mb-4">CHINESE</h3>
                  <p className="text-sm text-center">Lorem ipsum dolor, sit amet</p>
                </div>
    
                <div className="text-center">
                  <Link to="/create-point">
                    <span>
                      <FiLogIn />
                    </span>
                    <strong>View</strong>
                  </Link>
                </div>
              </div>
            </div>
    
            <div className="bg-white container sm:mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                className="image rounded"
              />
              <div className="overlay content">
                <div className="text-center custom">
                  <h3 className="font-mono ext-lg text-blue-400 mb-4">CHINESE</h3>
                  <p className="text-sm text-center">Lorem ipsum dolor, sit amet</p>
                </div>
    
                <div className="text-center">
                  <Link to="/create-point">
                    <span>
                      <FiLogIn />
                    </span>
                    <strong>View</strong>
                  </Link>
                </div>
              </div>
            </div>
    
            <div className="bg-white container sm:mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                className="image rounded"
              />
              <div className="overlay content">
                <div className="text-center custom">
                  <h3 className="font-mono ext-lg text-blue-400 mb-4">CHINESE</h3>
                  <p className="text-sm text-center">Lorem ipsum dolor, sit amet</p>
                </div>
    
                <div className="text-center">
                  <Link to="/create-point">
                    <span>
                      <FiLogIn />
                    </span>
                    <strong>View</strong>
                  </Link>
                </div>
              </div>
            </div>
    
            <div className="bg-white container sm:mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                className="image rounded"
              />
              <div className="overlay content">
                <div className="text-center custom">
                  <h3 className="font-mono ext-lg text-blue-400 mb-4">CHINESE</h3>
                  <p className="text-sm text-center">Lorem ipsum dolor, sit amet</p>
                </div>
    
                <div className="text-center">
                  <Link to="/create-point">
                    <span>
                      <FiLogIn />
                    </span>
                    <strong>View</strong>
                  </Link>
                </div>
              </div>
            </div>
    
            <div className="bg-white container sm:mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                className="image rounded"
              />
              <div className="overlay content">
                <div className="text-center custom">
                  <h3 className="font-mono ext-lg text-blue-400 mb-4">CHINESE</h3>
                  <p className="text-sm text-center">Lorem ipsum dolor, sit amet</p>
                </div>
    
                <div className="text-center">
                  <Link to="/create-point">
                    <span>
                      <FiLogIn />
                    </span>
                    <strong>View</strong>
                  </Link>
                </div>
              </div>
            </div>
            </Carousel>
      
        </section>
      );
};

export default MCarousel;
