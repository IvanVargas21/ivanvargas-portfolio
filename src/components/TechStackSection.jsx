import React from 'react'
import imageDetails from '../constants/vectors.jsx';

const TechStackSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-2 mb-20 sm:mb-16">
      <header className="flex justify-start items-center mb-32 gap-x-4 w-full sm:mb-12">
          <div className="flex items-center gap-x-4">
            <h5 className="text-green-500 text-4xl font-bebas">02.</h5>
            <h1 className="text-4xl font-bold">Tech & Tools</h1>
          </div>
        <div className="flex-grow h-1 bg-green-500 ml-4"></div>
      </header>
        <div className="grid grid-cols-3 gap-x-16 gap-y-16 lg:gap-x-20 lg:gap-y-20 xl:gap-x-24 xl:gap-y-24  sm:grid-cols-3 md:grid-cols-4 ps-5 sm:px-8">
          {imageDetails.map((image, index)=>(
            <div key={index} className="flex flex-col justify-center items-center group">
            <p className="mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:translate-y-[-15px]">{image.title}</p>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-12 h-12 sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-28 xl:h-28  transition-all duration-500 ease-in-out transform group-hover:translate-y-[-15px]"
            />
        </div>
        ))}
      </div>
    </section>
  )
}

export default TechStackSection