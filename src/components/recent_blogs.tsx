import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const RecentBlogs = () => {
  const blogs = [
    {
      id: 1,
      image: "/vr.jpg",
      category: "Development",
      date: "March 15, 2024",
      title:
        "How to make a Game look more attractive with New VR & AI Technology",
      description:
        "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
    },
    {
      id: 2,
      image: "/uiux.jpg",
      category: "Design",
      date: "March 20, 2024",
      title: "Mastering UI/UX Design Principles",
      description:
        "Learn the core principles of creating user-friendly and visually appealing designs.",
    },
    {
      id: 3,
      image: "/nextjs15.webp",
      category: "Next.Js",
      date: "April 5, 2024",
      title: "Introduction to Next.js 15",
      description:
        "Discover the latest features and improvements in Next.js 15 for developers.",
    },
    {
      id: 4,
      image: "/quantumcom.jpeg",
      category: "Technology",
      date: "April 10, 2024",
      title: "Exploring Quantum Computing Basics",
      description:
        "An introduction to the fundamental concepts of quantum computing and its potential.",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-10  py-12 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-3xl font-bold">Our Recent Posts</h2>
        <Link href="/Blog">
          <Button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-400">
            View All
          </Button>
        </Link>
      </div>

      {/* Featured Blog */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <Image
            src={blogs[0].image}
            alt="Featured Blog"
            width={1920}
            height={1080}
            quality={100}
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm font-semibold text-blue-600">
              {blogs[0].category}
            </span>
            <span className="text-sm dark:text-white text-gray-700">
              {blogs[0].date}
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-4">{blogs[0].title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {blogs[0].description}
          </p>
          <Link href={`/Blog/${blogs[0].id}`}>
            <Button className="mt-4 px-4 py-2 border bg-transparent border-blue-600 text-blue-600 rounded hover:bg-blue-50">
              Read More
            </Button>
          </Link>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.slice(1).map((blog) => (
          <div key={blog.id} className="border rounded-lg overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 h-full">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm font-semibold text-blue-600">
                  {blog.category}
                </span>
                <span className="text-sm text-gray-500">{blog.date}</span>
              </div>
              <h4 className="text-xl font-bold mb-4">{blog.title}</h4>
              <p className="text-sm dark:text-gray-300 text-gray-500">
                {blog.description}
              </p>
              <Link href={`/Blog/${blog.id}`}>
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
