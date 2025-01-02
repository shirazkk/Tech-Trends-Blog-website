import React from "react";

const BlogsSkeleton = () => {
  return (
    <section className="container mx-auto px-4 md:px-2 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {/* Repeat skeleton blocks for each blog */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="w-full h-60 dark:bg-gray-300 bg-gray-600"></div>

            {/* Content Skeleton */}
            <div className="p-4">
              {/* Category and Date */}
              <div className="flex items-center gap-4 mb-3">
                <div className="w-20 h-4 dark:bg-gray-300 bg-gray-600 rounded"></div>
                <div className="w-16 h-4 dark:bg-gray-300 bg-gray-600 rounded"></div>
              </div>
              {/* Title */}
              <div className="w-3/4 h-6 dark:bg-gray-300 bg-gray-600 rounded mb-4"></div>
              {/* Description */}
              <div className="w-full h-4 dark:bg-gray-300 bg-gray-600 rounded mb-2"></div>
              <div className="w-5/6 h-4 dark:bg-gray-300 bg-gray-600 rounded mb-4"></div>
              {/* Button */}
              <div className="w-24 h-8 dark:bg-gray-300 bg-gray-600 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSkeleton;
