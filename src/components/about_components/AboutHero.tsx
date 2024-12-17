import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <p className="text-sm font-bold dark:text-gray-100 uppercase tracking-wider text-gray-600 mb-4">
          About Us
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
          Creative Blog Writing and Publishing Site
        </h1>
        <p className="text-gray-600 dark:text-white leading-relaxed">
          Leverage agile frameworks to provide a robust synopsis for high-level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic worldview of disruptive innovation via
          workplace diversity and empowerment.
        </p>
      </div>

      <div className="w-full">
        <Image
          src="/about_banner.jpg"
          width={1920}
          height={1080}
          quality={100}
          alt="About Us"
          className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutHero;
