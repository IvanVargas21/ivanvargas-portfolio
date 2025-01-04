import React from 'react'

const CVButton = () => {
  const PDF_FILE_URL = 'http://localhost:5173/VargasIvanChristopherD._CV.pdf';

  const downloadFileAtURL = (url) => {
    try {
      const fileName = url.split('/').pop();
      const aTag = document.createElement('a');
      aTag.href = url;
      aTag.setAttribute('download', fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    } catch (error) {
      console.error('Failed to download the file:', error);
    }
  };
  return (
    <div className="pt-10 sm:pt-0 dark-green-glow">
      <button
        onClick={() => downloadFileAtURL(PDF_FILE_URL)}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm  font-medium text-white rounded-lg border-2 border-green-500 group hover:shadow-green-glow transition-shadow duration-300 hover:-translate-y-2"
      >
        <span className="text-base 2xl:text-2xl relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md text-white group-hover:text-green-500">
          Download CV
        </span>
      </button>
    </div>
  )
}

export default CVButton