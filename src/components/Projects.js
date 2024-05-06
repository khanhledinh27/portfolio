import React from "react";
import { projects } from "../data";

export default function Projects(){
  return (
    <section id="projects" className="text-black body-font">
      <div class="text-center pb-4">
            <p class="font-medium text-blue-500 dark:text-blue-400">Website</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">My own projects that I've developed</h1>

        </div>
      <div className="flex flex-wrap">
      <div className="container mx-auto justify-center flex px-10 md:flex-row flex-col items-center">
      {projects.map((project) => (
        <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.link}
              key={project.image}
              className="sm:w-1/3 w-100 p-4 px-10 hover:scale-110
              ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full border-b-2 border-black" src={project.image} alt=""/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{project.title}</div>
            <div class="font-bold text-sm  text-gray-300 mb-2">{project.subtitle}</div>
            <p class="text-gray-700 text-base">
            {project.description}
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 justify-start">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.database}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.framework2}</span>          
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.framework}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.language}</span>
          </div>
        </div>
        </a>
        ))}
      </div>
      </div>
    </section>
  );
};
