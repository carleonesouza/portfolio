import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

const Works = () => {
  return (
    <section className="px-8 " id="page-work">
      <div className="text-2xl sm:text-3xl text-center xl:mt-20 pb-6 md:m-4">
        Freelance Web Developer based in Nova Lima, Minas Gerais-Brazil.
        <br /> Front-End and Back-End experience.
      </div>

      <div className="gap-4 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
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

      </div>
    </section>
  );
};

export default Works;
