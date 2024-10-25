import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link, useLocation} from 'react-router-dom';
import './Home.css';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Home() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <section id="home">
      <div className="container mx-auto flex px-10 pb-20 md:flex-row flex-col items-center">

          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className=" mt-5 ml-12 mr-12"
              alt="hero"
              src="./avatar.svg"
            />
            
          </div>

          <div className="lg:flex-grow md:w-1/2 flex flex-col  md:items-start md:text-left mb-16 md:mb-0  items-center text-center">
            <h1>WELCOME TO MY WEBSITE</h1>
            <TypeAnimation
              className="title-font  text-xl sm:text-4xl font-medium text-black"
              sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Hi guys!',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'My name is Khanh or Khael',
                  1000,
                  "I'm a Front-end Developer",
                  1000,
                  'Nice to meet you!',
                  1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              />
              <div className="flex justify-start items-start mt-10 lg:mt-32 text-black text-xl">
              <a target="_blank"
              rel="noopener noreferrer" 
              href="https://github.com/khanhledinh27">
              <FaGithub className="mr-3" />
              </a>
              <a target="_blank"
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/khánh-lê-đình-0738aa249/">
              <FaLinkedin className="mr-3"/>
              </a>
              <a target="_blank"
              rel="noopener noreferrer" 
              href="https://www.facebook.com/tenchi.takumi/?locale=vi_VN">
              <FaFacebook />
              </a>
              </div>
            <div className="flex justify-center mt-5 mb-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1QcqupZYMRGjVnaETRs9zFbTCGPr8O13y/view?usp=sharing"
                className="inline-flex rounded text-white bg-black border-solid border py-2 px-2 md:py-2 md:px-6  focus:outline-none hover:bg-white hover:text-black hover:border-black hover:border-2 text-lg">
                Download CV
              </a>
              <Link to="/projects" className={"relative ml-4 inline-flex py-2 px-2 md:py-2 md:px-6 overflow-hidden font-medium text-black bg-white border border-black  rounded shadow-inner group" + (url === "/projects" ?" active" : "")}>
              <span class="absolute rounded top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute rounded bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute rounded top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute rounded bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute rounded inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">My Projects</span>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
};
