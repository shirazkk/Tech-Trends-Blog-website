import CommentSectionSkeleton from "@/components/commentskelton";
import React from "react";

const SingleBlogSkelton = () => {
  return (
    <div>
      <div className="bg-background min-h-screen">
        <div className="max-w-5xl mx-auto p-6 sm:p-8 animate-pulse">
          {/* Blog Header Skeleton */}
          <header className="text-center mb-10">
            <div className="h-8 w-3/4 bg-gray-300 rounded mx-auto mb-4"></div>
            <div className="h-6 w-1/4 bg-gray-300 rounded mx-auto"></div>
          </header>

          {/* Blog Image Skeleton */}
          <div className="relative mb-10 rounded-lg overflow-hidden">
            <div className="w-full h-60 bg-gray-300 rounded-lg"></div>
          </div>

          {/* Blog Content Skeleton */}
          <article className="max-w-5xl prose prose-lg sm:prose-xl dark:prose-invert prose-gray mx-auto leading-relaxed">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-4 w-full bg-gray-300 rounded mb-4"
              ></div>
            ))}
            <div className="h-4 w-3/4 bg-gray-300 rounded mb-4"></div>
          </article>

          {/* Footer Skeleton */}
          <footer className="mt-12 text-center border-t pt-6">
            <div className="h-6 w-1/2 bg-gray-300 rounded mx-auto"></div>
          </footer>
        </div>
      </div>
      <CommentSectionSkeleton />
    </div>
  );
};

export default SingleBlogSkelton;
