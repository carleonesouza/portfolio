import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaStackOverflow, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import './styles.css'

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-center p-4 text-gray-600 mt-10">
        {" "}
        Created by{" "}
        <a
          className="border-b text-blue-500"
          href="https://twitter.com/carleonepereira">
          @CarleonePereira
        </a>
      </p>
      <div className="flex justify-center items-center social-footer">
        <div className="flex lg:flex-shrink-0 lg:mt-0">
          <a href="https://www.linkedin.com/in/carleonesouza" target="_blank" rel="noreferrer" className="p-5">
            <span>
              <IconContext.Provider value={{ color: "blue", size: 30 }}>
                <AiFillLinkedin />
              </IconContext.Provider>
            </span>
          </a>

          <a href="https://github.com/carleonesouza" target="_blank" rel="noreferrer" className="p-5">
            <span>
              <IconContext.Provider value={{ color: "blue", size: 30 }}>
                <AiOutlineGithub />
              </IconContext.Provider>
            </span>
          </a>
          <a href="https://stackoverflow.com/users/12150784/carleone-souza" target="_blank" rel="noreferrer" className="p-5">
            <span>
              <IconContext.Provider value={{ color: "blue", size: 30 }}>
                <FaStackOverflow />
              </IconContext.Provider>
            </span>
          </a>
          <a href="https://www.instagram.com/dom.carleone/?hl=en" target="_blank" rel="noreferrer" className="p-5">
            <span>
              <IconContext.Provider value={{ color: "blue", size: 30 }}>
                <FaInstagram/>
              </IconContext.Provider>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
