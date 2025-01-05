import React from 'react';
import facebook from '../assets/vectors/facebook-white.svg';
import gmail from '../assets/vectors/gmail-white.svg';
import github from '../assets/vectors/github-white.svg';
import linkedin from '../assets/vectors/linkedin-white.svg';
import CustomButtonWithModal from './CustomButtonwithModal';

const ContactSection = () => {
  // Web3Forms
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9f0712e0-8be1-49d4-bc68-60ff0987891e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    } else {
      console.log("Error", res);
    }
  };

  return (
    <section id="contact" className="py-8 bg-white dark:bg-slate-900 sm:py-2">
      <header className="flex justify-start items-center mb-32 md:mt-20 gap-x-4 w-full sm:mb-12 lg:mb-2">
          <div className="flex items-center gap-x-4">
            <h5 className="text-green-500 text-4xl font-bebas">04.</h5>
            <h1 className="text-4xl font-bold">Contacts</h1>
          </div>
        <div className="flex-grow h-1 bg-green-500 ml-4"></div>
      </header>
      <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 sm:mb-10 lg:mb-1 ">
        {/* Left side: Intro message */}
        <div className="flex flex-col justify-center items-start sm:mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 2xl:text-5xl">Let’s Get in Touch</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-4 2xl:text-2xl">
            I'm available to connect by <span className="text-green-500">email</span> or through <span className="text-green-500">social media</span>. Feel free to reach out, and let's chat!
          </p>
          <div className="flex gap-10 w-full ">
            <a href="https://www.facebook.com/profile.php?id=100014115240375" className="text-white text-lg transition-colors duration-200 hover:text-green-500" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="mailto:icvargasx21@gmail.com" className="text-white text-lg transition-colors duration-200 hover:text-green-500" target="_blank" rel="noopener noreferrer">
              <img src={gmail} alt="Gmail" className="w-6 h-6" />
            </a>
            <a href="https://github.com/IvanVargas21" className="text-white text-lg transition-colors duration-200 hover:text-green-500" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ivan-christopher-vargas-0a6999325/" className="text-white text-lg transition-colors duration-200 hover:text-green-500" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <form onSubmit={onSubmit} className="bg-white dark:bg-slate-900 sm:px-8 md:px-0 2xl:py-0">
          <div className="py-8 lg:pb-8 px-4 mx-auto max-w-screen-md 2xl:py-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white 2xl:text-4xl">
              Contact Me
            </h2>

            {/* Full name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light 2xl:text-xl"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light 2xl:text-xl"
                placeholder="johndoe@example.com"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light 2xl:text-xl"
                placeholder="Subject"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 2xl:text-xl"
                placeholder="Leave a message..."
                required
              ></textarea>
            </div>

           <CustomButtonWithModal/>
          </div>
        </form>
      </div>
      <div>
      </div>
    </section>
  );
};

export default ContactSection;
