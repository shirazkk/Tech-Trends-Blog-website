import React from "react";

const CommentSectionSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 animate-pulse">
      {/* Comments Header Skeleton */}
      <h2 className="h-6 w-1/3 dark:bg-gray-300 bg-slate-600  rounded mb-6"></h2>

      {/* Comment Form Skeleton */}
      <div className="mb-6">
        <div className="w-full h-10 dark:bg-gray-300 bg-slate-600 rounded mb-2"></div>
        <div className="h-10 w-32 dark:bg-gray-300 bg-slate-600 rounded"></div>
      </div>

      {/* Comments List Skeleton */}
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center border p-2 rounded"
          >
            <div className="w-full">
              <div className="h-4 w-3/4 dark:bg-gray-300 bg-slate-600 rounded mb-2"></div>
              <div className="h-3 w-1/2 dark:bg-gray-300 bg-slate-600 rounded"></div>
            </div>
            <div className="h-8 w-20 dark:bg-gray-300 bg-slate-600 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSectionSkeleton;
