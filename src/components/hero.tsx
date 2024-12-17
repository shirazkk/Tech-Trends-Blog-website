import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-10 py-16 ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 text-left">
          <p className="text-indigo-600 font-semibold mb-4 tracking-wide uppercase">
            Featured Post
          </p>
          <h1 className="dark:text-white text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
            How will Agentic <br /> AI  Change the World
          </h1>
          <p className="dark:text-white text-lg text-gray-600 mb-8 leading-relaxed">
            Discover how autonomous AI agents are revolutionizing the way we
            interact with technology. From personal assistants to complex
            problem-solving systems, agentic AI is reshaping our future in ways
            we never imagined.
          </p>
          
          <Button className="px-8 py-5 cursor-pointer bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300 shadow-lg">
            Read More
          </Button>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <Image
            src="/ai.jpeg"
            alt="Hero Background"
            width={1920}
            height={1080}
            quality={100}
            className="w-full  h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
