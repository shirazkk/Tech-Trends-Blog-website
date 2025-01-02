import React from "react";

const HeroSkeleton = () => {
  return (
    <div className="container mx-auto px-4 sm:px-10 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section Skeleton */}
        <div className="flex-1">
          <div className="h-4 w-32 dark:bg-gray-300 bg-gray-600 rounded mb-4 animate-pulse"></div>
          <div className="h-8 w-3/4 dark:bg-gray-300 bg-gray-600 rounded mb-6 animate-pulse"></div>
          <div className="h-10 w-40 dark:bg-gray-300 bg-gray-600 rounded animate-pulse"></div>
        </div>

        {/* Right Section Skeleton */}
        <div className="flex-1">
          <div className="w-full h-80 dark:bg-gray-300 bg-gray-600 rounded-xl shadow-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
