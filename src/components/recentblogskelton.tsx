import React from "react";

const RecentBlogsSkeleton = () => {
  return (
    <section className="container mx-auto px-4 sm:px-10 py-12 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-8">
        <div className="h-8 w-1/3 dark:bg-gray-300 bg-gray-600 rounded"></div>
        <div className="h-10 w-32 dark:bg-gray-300 bg-gray-600 rounded"></div>
      </div>

      {/* Featured Blog Skeleton */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Image Skeleton */}
        <div className="lg:w-1/2 h-[400px] dark:bg-gray-300 bg-gray-600 rounded-md"></div>
        {/* Content Skeleton */}
        <div className="lg:w-1/2 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-4 w-16 dark:bg-gray-300 bg-gray-600 rounded"></div>
            <div className="h-4 w-24 dark:bg-gray-300 bg-gray-600 rounded"></div>
          </div>
          <div className="h-6 w-3/4 dark:bg-gray-300 bg-gray-600 rounded"></div>
          <div className="h-4 w-full dark:bg-gray-300 bg-gray-600 rounded"></div>
          <div className="h-4 w-5/6 dark:bg-gray-300 bg-gray-600 rounded"></div>
          <div className="h-10 w-24 dark:bg-gray-300 bg-gray-600 rounded"></div>
        </div>
      </div>

      {/* Blog Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden space-y-4"
          >
            {/* Blog Image */}
            <div className="w-full h-60 dark:bg-gray-300 bg-gray-600 rounded-t-lg"></div>
            {/* Blog Content */}
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-4 w-16 dark:bg-gray-300 bg-gray-600 rounded"></div>
                <div className="h-4 w-24 dark:bg-gray-300 bg-gray-600 rounded"></div>
              </div>
              <div className="h-5 w-3/4 dark:bg-gray-300 bg-gray-600 rounded"></div>
              <div className="h-4 w-full dark:bg-gray-300 bg-gray-600 rounded"></div>
              <div className="h-4 w-5/6 dark:bg-gray-300 bg-gray-600 rounded"></div>
              <div className="h-10 w-24 dark:bg-gray-300 bg-gray-600 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogsSkeleton;
