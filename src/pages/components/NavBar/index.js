import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../../assets/logo.svg";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap bg-red-300 items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container  mx-auto flex flex-wrap items-center justify-between">
          <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/" className="font-extrabold m-3 inline-flex  transition-all duration-500">
            <img src={logo} alt="Ecoleta" />
            </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div  className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li><Link to='/' className="inline-block no-underline border-b-2 border-transparent hover:border-indigo-400 font-medium text-lg py-2 px-4 lg:-ml-2">Home</Link></li>
            <li><Link to="/" className="inline-block no-underline border-b-2 border-transparent hover:border-indigo-400  font-medium text-lg py-2 px-4 lg:-ml-2">Products</Link></li>
            <li><Link to="/" className="inline-block no-underline border-b-2 border-transparent hover:border-indigo-400 font-medium text-lg py-2 px-4 lg:-ml-2">About</Link></li>
            </ul>
          </div>
          
        </div>
      </nav>
    </>
  );
}