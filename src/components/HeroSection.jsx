import React from 'react';
// import ImgHeroSection from './ImgHeroSection';
import ResumeButton from './ResumeButton';
// import CircularRotatingText from './CircularRoratingText';

const HeroSection = () => {
  return (
    <div id="hero" className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[calc(100vh-100px)] sm:h-screen space-around lg:gap-x-14 overflow-hidden mb-20 sm:mb-16 sm:mt-32  md:my-20 lg:my-0 lg:px-10 xl:m-0 2xl:mx-20 ">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start max-w-xl lg:max-w-3xl text-center lg:text-left sm:mt-8 md:mt-0 lg:mt-0 flex-1 z-20">
          <h2 className="mb-1 text-3xl font-extrabold text-gray-400 sm:text-lg md:text-xl lg:text-3xl xl:text-4xl dark:text-gray-400 md:w-full sm:w-full bg-slate-900 sm:mx-auto">
            Hello, I am <span className="text-green-500">Ivan</span>
          </h2>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl sm:w-full md:w-full dark:text-white bg-slate-900" style={{ textShadow: "-4px 4px 5px rgba(0, 0, 0, 1)" }}>
          Front End <br />
          Web Developer
        </h1>
        <p className="mb-2 text-lg font-light text-gray-400 sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl dark:text-gray-400 sm:px-12 lg:px-0">
          Leveraging Front-End Expertise to Craft <span className="text-violet-500 font-semibold">Seamless</span>, <span className="text-violet-500 font-semibold">Interactive</span> Web Designs
        </p>
        <p className="text-lg font-light text-gray-400 sm:text-base md:text-lg lg:text-xl xl:text-xl dark:text-gray-400 sm:p-0">
          Delivering <span className="text-violet-500 font-semibold">High-Quality</span> User Interfaces That Engage and Delight Your Audience
        </p>
        <div className="mb-72 sm:mb-2 md:mb-4 lg:mb-0 md:w-full sm:w-full">
          <ResumeButton/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
