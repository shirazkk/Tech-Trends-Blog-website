import React from "react";
import { Button } from "./ui/button";
const Email = () => {
  return (
    <section className="w-full bg-purple-600 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
          Get our stories delivered to your inbox weekly.
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <input
            type="email"
            placeholder="Your email"
            className="bg-gray-400 w-full placeholder:text-white sm:w-auto px-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <Button className="w-full sm:w-auto px-10 py-6 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-purple-600 transition-colors duration-300">
            Get Started
          </Button>
        </div>

        <p className="text-white text-sm md:text-base">
          Get a response tomorrow if you submit by 9 PM today.
          <br className="hidden sm:block" />
          Submissions after 9 PM will receive a response the following day.
        </p>
      </div>
    </section>
  );
};

export default Email;
