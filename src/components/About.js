
import React from "react";
import './About.css';
import { skills } from "../data";

export default function About(){
  return (
    <section id="about">
      <div className="container mx-auto border-b-2 flex lg:pt-10 px-10 md:flex-row flex-col items-center">
      
      <img
              className=" w-60 rounded"
              alt="hero"
              src="./avatar.svg"
            />

          <div className="lg:flex-grow md:w-1/2 flex flex-col  md:items-start md:text-left mb-16 md:mb-0  items-center text-center">
            <h1 className="text-black text-2xl pb-2">My name is Khanh</h1>
            <p className="pb-2"> 3rd-years of Van Lang University</p>
            <p className="text-black ">When I was a kid, I was always told my parents that:</p>
            <br></br>
            <p className="text-black ">"I will be a Software Engineer in the future!"</p>
            <br></br>
            <p className="text-black ">That's why I'm here to apply for the position of Front-End Developer in your company.</p>
          </div>
      </div>
      
      <div className="container px-5 py-10 mx-auto">
        <div className=" sm:text-left text-center sm:mb-10">
          <h1 className="sm:text-2xl text-xl font-medium title-font text-black mb-4">
            __Skills
          </h1>

        </div>
        
        <div className="flex flex-wrap sm:justify-center lg:w-4/5 sm:mx-auto -mx-2 ">
          {skills.map((skill) => (
            <div key={skill.image} className=" p-2 sm:w-1/5 w-3/12">
              <div className=" box  border-solid border-black border-2 rounded hover:scale-110 flex p-4 h-full items-center">
                <img 
                className="sm:w-1/3 sm:mr-2"
                alt="gallery"
                src={skill.image}>
                </img>
                <span className="title-font sm:inline hidden font-medium text-black">
                  {skill.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
