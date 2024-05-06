
import React from "react";
import './Navbar.css';
import { Link, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function Navbar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/about" className="title-font  font-medium text-black mb-4 md:mb-0">
          <a href="/about" className=" text-2xl">
            Khanh Le Dinh
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center font-mono">
          <Link to="/" className={"ml-3 mr-5 hover:text-black " + (url === "/" ?" active" : "")}>Home</Link>
          <Link to="/about" className={"mr-5 hover:text-black " + (url === "/about" ?" active" : "")}>About</Link>
          <Link to="/projects" className={"hover:text-black " + (url === "/projects" ?" active" : "")}>Projects</Link>
        </nav>
        
        <a href="contact" class="">
          
        </a>
        <Link to="/contact" className={"relative inline-flex items-center py-1 px-3 font-medium text-base mt-4 md:mt-0 group " + (url === "/contact" ?" active" : "")}><span class="absolute rounded inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute rounded inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span class="relative text-black group-hover:text-white">Contact Me</span>
        </Link>
      </div>
    </header>
  );
}