import React from "react";
import { Link } from 'react-router-dom'
import {FiMenu} from 'react-icons/fi';
import { IconContext } from "react-icons/lib";
import logo from "../../assets/favicon.svg";

import "./styles.css";



const Header = () => {   
   const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
   <header>
     <nav className="w-full z-30 py-1 fixed bg-white shadow-lg border-b border-blue-400 navbar-expand-lg md:w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between md:w-full">
          <div className="logo-area flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/" className="font-extrabold m-3 inline-flex  transition-all duration-500">
            <img src={logo} alt="logo" /> <span className=" px-5  mr-10 text-2xl tracking-tight leading-9 font-extrabold text-purple-900 sm:text-3xl sm:leading-none md:text-3xl" >Souza Portfolio</span>
            </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
             <IconContext.Provider
               value={{ color: 'blue',  }}> 
               <FiMenu/>
               </IconContext.Provider>            
            
            </button>
          </div>
          <div  className={"lg:flex flex-grow  items-center " + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li><Link to='/' className="inline-block no-underline border-b-2 border-transparent hover:border-indigo-400 font-medium md:float-right text-lg py-2 px-4 lg:-ml-2">Home</Link></li>
            <li><Link to="/" className="inline-block no-underline border-b-2 border-transparent hover:border-indigo-400  font-medium text-lg py-2 px-4 lg:-ml-2">Works</Link></li>
            <li><Link to="/" className="inline-block no-underline border-b-2 border-transparent hover:border-indigo-400  font-medium text-lg py-2 px-4 lg:-ml-2">Blog</Link></li>
            <li><Link to="/" className="inline-block no-underline border-b-2 border-transparent hover:border-indigo-400 font-medium text-lg py-2 px-4 lg:-ml-2">Contact</Link></li>
            </ul>
          </div>
          
        </div>
      </nav>
   </header>
    
   
  );
};

export default Header;
