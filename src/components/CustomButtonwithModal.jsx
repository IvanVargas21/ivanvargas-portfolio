import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const CustomButtonWithModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <div>
      {/* Custom Button */}
      <div className="pt-10 dark-green-glow flex justify-center ">
        <button
          type="submit"
          onClick={handleOpen} // Open modal on button click
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg border-2 border-green-500 group hover:shadow-green-glow transition-shadow duration-300 hover:-translate-y-2"
        >
          <span className="text-base relative px-5 py-2.5 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md text-white group-hover:text-green-500 2xl:text-2xl">
            Send Message
          </span>
        </button>
      </div>

      {/* Material UI Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
        sx={{
          ...modalStyles, // Spread existing styles
          bgcolor: '#333', // Override or add properties
          color: '#fff',
          p:0
        }}
      >
          <div className="relative text-center bg-white rounded-lg shadow dark:bg-gray-800 p-4">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-2.5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Success</span>
            </div>
            <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Message sent successfully.
            </p>
            <button
              onClick={handleClose}
              type="button"
              className="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900 hover:text-green-500"
            >
              Continue
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomButtonWithModal;
