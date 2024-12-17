import React from "react";

const BlogHero = () => {
  return (
    <div className="h-[400px] w-full flex items-center justify-center dark:text-white ">
      <div className="text-center max-w-3xl mx-auto px-4">
        <p className="text-xl font-medium mb-2">Our Blogs</p>
        <h1 className="text-6xl font-bold mb-4">Find all our blogs here</h1>
        <p className="text-gray-600 dark:text-gray-100 text-lg">
          Our blogs are written through extensive research by well-known
          writers, ensuring that we provide you with the best blogs and articles
          to read.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;
