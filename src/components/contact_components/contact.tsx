import React from "react";

const ContactForm = () => {
  return (
    /* From Uiverse.io by themrsami */
    <div className=" container px-4 mx-auto">
      <div className="mx-auto py-52" >
        <div className="max-w-md mx-auto px-8 py-6  rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Contact Us
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-800 dark:text-gray-100 mb-1">Your Name</label>
              <input
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block dark:text-gray-100 text-gray-800 mb-1">Your Email</label>
              <input
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                placeholder="Enter your email"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className="mb-4">
              <label className="block dark:text-gray-100 text-gray-800 mb-1">Your Message</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                rows={4}
                placeholder="Enter your message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button
              className="w-full bg-yellow-300  text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
