import React from 'react'
import { projectsDetails } from '../constants/projects';

const ProjectsSection = () => {
  return (
  <>
    <section id="projects" className="flex flex-col justify-center items-start py-2 mb-16 sm:mb-16 sm:pt-20">
      <header className="flex justify-start items-center mb-24 md:mt-20 lg:mt-20 gap-x-4 w-full sm:mb-12">
        <div className="flex items-center gap-x-4">
          <h5 className="text-green-500 text-4xl font-bebas">03.</h5>
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>
        <div className="flex-grow h-1 bg-green-500 ml-4"></div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-auto mb-14">
        {projectsDetails.map((project, projectIndex) => (
          <div
            key={projectIndex}
            // Added flex and flex-col for better alignment
            className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img src={project.image} alt={project.alt} className="rounded-t-lg" />
            <div
              className="p-5 flex-grow flex flex-col"
              // Added flex-grow and flex-col to make buttons align at the bottom
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <div
                // Added overflow-y-auto and max-h-20 for scrollable long text
                className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-y-auto max-h-36"
              >
                {project.description}
              </div>
              <div
                className="mt-auto flex gap-3"
                // Used mt-auto to push buttons to the bottom
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.codeLink}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:violet-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.demo}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="mx-auto"><p className=" text-green-500">More Projects Coming Soon!</p></div>
      </div>
    </section>
    
  </>
  )
}

export default ProjectsSection
