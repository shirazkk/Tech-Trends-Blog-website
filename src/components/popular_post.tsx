import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { fetchPopularBlogs } from "@/sanity/lib/sanity";

interface PopularBlog {
  imageUrl: string;
  Category: string;
  date: string;
  tittle: string;
  slug: {
    current: string;
  };
  description: string;
}

const PopularPost = async () => {
  const blogs = await fetchPopularBlogs();

  return (
    <section className="container mx-auto px-4 sm:px-10  py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Our Popular Blogs</h2>
        <Link href="/Blog">
          <Button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-400">
            View All
          </Button>
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.slice(7,10).map((blog: PopularBlog) => (
          <div key={blog.slug.current} className="border rounded-lg overflow-hidden">
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
                <span className="text-sm dark:text-gray-200 text-gray-500">
                  {blog.date}
                </span>
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

export default PopularPost;
