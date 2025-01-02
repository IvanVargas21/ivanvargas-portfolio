import React from 'react';
import ImgHeroSection from './ImgHeroSection';

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center h-screen lg:flex-row space-around lg:gap-8 overflow-hidden">
      {/* Text Section */}
      
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="mb-1 text-3xl font-extrabold text-gray-400 sm:text-base md:text-lg lg:text-2xl xl:text-3xl dark:text-gray-400">
          Hello, I am <span className="text-green-500">Ivan</span>
        </h2>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900  sm:text-3xl md:text-5xl lg:text-6xl xl:8xl dark:text-white">
          Front End <br />
          Web Developer
        </h1>
        <p className="mb-4 text-lg font-light text-gray-400 sm:text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400">
            Leveraging Front-End Expertise to Craft <span className="text-violet-500 font-semibold">Seamless</span>, <span className="text-violet-500 font-semibold">Interactive</span> Web Designs
        </p>
        <p className="text-lg font-light text-gray-400 sm:text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400">
            Delivering <span className="text-violet-500 font-semibold">High-Quality</span> User Interfaces That Engage and Delight Your Audience
        </p>
        <div className="pt-10 dark-green-glow">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg border-2 border-green-500 group hover:shadow-green-glow transition-shadow duration-300 hover:-translate-y-2">
          <span className="text-base relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md text-white group-hover:text-green-500">
            Let's Get in Touch!
          </span>
        </button>
          {/* <span></span>
          <span></span>
          <span></span>
           */}
        </div>
      </div>

      {/* Image Section */}
      <div className="mb-8 lg:mb-0 flex justify-center items-center w-full lg:w-auto">
        <ImgHeroSection />
      </div>
    </div>
  );
};

export default HeroSection;
