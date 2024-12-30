import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { fetchPopularBlogs } from "@/sanity/lib/sanity";

const RecentBlogs = async () => {
  interface RecentBlog {
    imageUrl: string;
    Category: string;
    date: string;
    tittle: string;
    slug: {
      current: string;
    };
    description: string;
  }
  const blogs = await fetchPopularBlogs();

  return (
    <section className="container mx-auto px-4 sm:px-10  py-12 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-3xl font-bold">Our Recent Blogs</h2>
        <Link href="/Blog">
          <Button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-400">
            View All
          </Button>
        </Link>
      </div>

      {/* Featured Blog */}
      {blogs.slice(0, 1).map((blog: RecentBlog) => (
        <div
          key={blog.slug.current}
          className="flex flex-col lg:flex-row gap-8 mb-12"
        >
          <div className="lg:w-1/2">
            <Image
              src={blog.imageUrl}
              alt={blog.tittle}
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-[400px] object-cover rounded-md"
            />
          </div>
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm font-semibold text-blue-600">
                {blog.Category}
              </span>
              <span className="text-sm dark:text-white text-gray-700">
                {blog.date}
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4">{blog.tittle}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {blog.description}
            </p>
            <Link href={`/Blog/${blog.slug.current}`}>
              <Button className="mt-4 px-4 py-2 border bg-transparent border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {blogs.slice(1, 4).map((blog: RecentBlog) => (
          <div
            key={blog.slug.current}
            className="border rounded-lg overflow-hidden"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.tittle}
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 h-full">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm font-semibold text-blue-600">
                  {blog.Category}
                </span>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </div>
              <h4 className="text-xl font-bold mb-4">{blog.tittle}</h4>
              <p className="text-sm dark:text-gray-300 text-gray-500">
                {blog.description}
              </p>
              <Link href={`/Blog/${blog.slug.current}`}>
                <Button className="mt-4 px-4 py-2 border bg-transparent border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;
