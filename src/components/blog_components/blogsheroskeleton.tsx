import React from "react";

const BlogHeroSkeleton = () => {
  return (
    <div className="h-[400px] w-full flex items-center justify-center animate-pulse">
      <div className="text-center max-w-3xl mx-auto px-4">
        <div className="w-32 h-6 dark:bg-gray-300 bg-gray-600 rounded mx-auto mb-4"></div>
        <div className="w-3/4 h-10 dark:bg-gray-300 bg-gray-600 rounded mx-auto mb-6"></div>
        <div className="w-full h-4 dark:bg-gray-300 bg-gray-600 rounded mx-auto mb-2"></div>
        <div className="w-5/6 h-4 dark:bg-gray-300 bg-gray-600 rounded mx-auto mb-2"></div>
        <div className="w-full h-4 dark:bg-gray-300 bg-gray-600 rounded mx-auto"></div>
      </div>
    </div>
  );
};

export default BlogHeroSkeleton;

