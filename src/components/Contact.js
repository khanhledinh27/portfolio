import React from "react";
import { MdEmail } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact(){
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
      <div class="text-center ">
            <p class="font-medium text-blue-500 dark:text-blue-400">Hire Me</p>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">I'm looking forward to your response!</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">The contacts below.</p>
        </div>

        <img class="object-fit w-full h-64 mt-10 rounded-lg lg:h-96" src="./bg.svg" alt=""/>
        
        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <MdEmail />
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">My Email</h2>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">khanhledinh.work@gmail.com</p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <FaDownload />
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Download CV</h2>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/file/d/1QcqupZYMRGjVnaETRs9zFbTCGPr8O13y/view?usp=sharing"
                    className="">
                    [LeDinhKhanh_Front-end_ReactJS_CV]
                  </a>
                </p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <FaPhoneAlt />
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone Number</h2>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+84 336737916</p>
            </div>
        </div>

      </div>
    </section>
  );
};
