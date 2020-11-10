import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaStackOverflow, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

const Footer = () => {
  return (
    <div className="mb-10">
      <p className="text-center p-4 text-gray-600 mt-10">
        {" "}
        Created by{" "}
        <a
          className="border-b text-blue-500"
          href="https://twitter.com/carleonepereira">
          @CarleonePereira
        </a>
      </p>
      <div className="flex justify-center items-center">
        <div className="flex lg:flex-shrink-0 lg:mt-0">
          <Link to="" className="p-5">
            <span>
              <IconContext.Provider value={{ color: "blue", size: 30 }}>
                <AiFillLinkedin />
              </IconContext.Provider>
            </span>
          </Link>

          <Link to="" className="p-5">
            <span>
              <IconContext.Provider value={{ color: "blue", size: 30 }}>
                <AiOutlineGithub />
              </IconContext.Provider>
            </span>
          </Link>
          <Link to="" className="p-5">
            <span>
              <IconContext.Provider value={{ color: "blue", size: 30 }}>
                <FaStackOverflow />
              </IconContext.Provider>
            </span>
          </Link>
          <Link to="" className="p-5">
            <span>
              <IconContext.Provider value={{ color: "blue", size: 30 }}>
                <FaInstagram/>
              </IconContext.Provider>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
