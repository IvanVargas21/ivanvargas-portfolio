import React from 'react';
import CVButton from './CVButton';
import ImgAboutSection from './ImgAboutSection';

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col w-full justify-center items-center py-2 mb-20 sm:mb-16 sm:pt-20  lg:mb-10 lg:py-14 2xl:py-5 2xl:pt-10">
      <header className="flex justify-start items-center mb-5 md:mt-20 lg:mt-5 gap-x-4 w-full sm:mb-8 lg:mb-5">
        <div className="flex items-center gap-x-4">
          <h5 className="text-green-500 text-4xl 2xl:text-5xl font-bebas">01.</h5>
          <h1 className="text-4xl 2xl:text-5xl font-bold">About Me</h1>
        </div>
        <div className="flex-grow h-1 bg-green-500 ml-4"></div>
      </header>

      <div className="flex flex-col  w-full lg:flex-row items-start justify-between h-auto lg:h-[calc(100vh-10px)]  lg:gap-x-5 overflow-hidden mb-20 sm:mb-16 md:my-20 lg:my-0 xl:my-2 md:mt-0 sm:items-center md:items-center md:gap-6 lg:items-start">
            {/* text section */} 
            {/* left-side */}
            <div className="flex-grow sm:order-2 md:order-2 lg:order-1 lg:basis-2/3 flex-col justify-center items-start max-w-xl lg:max-w-3xl text-center lg:text-left sm:mt-8 md:mt-0 lg:mt-0 flex-1 lg:py-6">
              <p className="text-base font-normal sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg sm:font-thin text-justify mb-4">
              Hi! I am <span className="text-violet-500 font-bold">Ivan Christopher Vargas</span>, a <span className="text-green-500 font-bold">21-year-old Computer Engineering student</span> in my final year at <span className="text-green-500 font-bold">Universidad De Manila</span>. Growing up, I nurtured a <span className="text-violet-500 font-bold">passion for arts and music</span>, spending countless hours creating <span className="text-violet-500 font-bold">charcoal portraits</span> and playing <span className="text-violet-500 font-bold">instruments</span> with my twin brother during the pandemic. While he pursued music professionally, I was drawn to engineering and the opportunities my alma mater offered. Although my dream course was Architecture, I discovered that designing user interfaces allowed me to channel my creativity into technology.
              </p>

              <p className="text-base font-normal sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg sm:font-thin text-justify mb-4 lg:mb-5">
              In college, I explored programming through courses like <span className="text-green-500 font-bold">Programming Logic and Design (C++)</span>, <span className="text-green-500 font-bold">Object Oriented Programming (OOP)</span>, and <span className="text-green-500 font-bold">Software Engineering (JavaScript)</span>. I developed skills in tools like <span className="text-green-500 font-bold">HTML</span>, <span className="text-green-500 font-bold">CSS</span>, <span className="text-green-500 font-bold">JavaScript</span>, <span className="text-green-500 font-bold">React</span>, and <span className="text-green-500 font-bold">Tailwind</span>, turning ideas into functional and visually appealing projects. Through <span className="text-green-500 font-bold">self-study</span> and <span className="text-green-500 font-bold">personal projects</span>, I continue to merge creativity with technical expertise, bringing me closer to my goal of becoming a <span className="text-green-500 font-bold">Full Stack Web Developer</span>.
              </p>
              <p className="lg:text-2xl font-roboto lg:mb-2 sm:text-left md:text-left md:text-lg md:mb-2">Education</p>
              <div className="flex flex-col w-full font-roboto lg:mb-0 md:items-center">
                <div className="flex w-full  lg:mb-3">
                  <p className="lg:pr-5 text-violet-500 font-bold sm:pr-5 md:pr-5">2021 - Present</p>
                  <div className="text-start">
                    <p className="font-extrabold">Universidad De Manila</p>
                    <p>BS in Computer Engineering</p>
                  </div>
                </div>
                <div className="flex w-full gap-5 lg:mb-3 sm:mb-6">
                  <p className="lg:pr-5 text-violet-500 font-bold  sm:mb-10 md:mb-10 sm:pr-5 md:pr-5">2019 - 2021</p>
                  <div className="text-start md:pb-10 lg:pb-0">
                    <p className="font-extrabold">Universidad De Manila</p>
                    <p>Senior High School - General Academic Strand</p>
                  </div>
                </div>
              <div>
            </div>
            <div className="flex justify-start sm:justify-center md:pr-8 lg:mt-5">
              <CVButton />
            </div>
          </div>
          </div>


            {/* Image Section */}
            {/* right-side */}
            <div className="flex sm:order-1 md:order-1 lg:basis-1/3  mt-28 sm:mt-7  justify-center items-center w-full lg:w-auto lg:items-start lg:relative">
              <ImgAboutSection />
            </div>
      </div>
    </section>
  );
}

export default AboutSection;
