import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Blogs = () => {
  const blogs = [
    {
      id: 5,
      image: "/cybersecurity.jpg",
      category: "Cybersecurity",
      date: "May 15, 2024",
      title: "AI-Powered Cybersecurity: Defending the Digital Era",
      description:
        "How artificial intelligence is transforming cybersecurity and protecting against modern threats.",
    },
    {
      id: 6,
      image: "/machinelearning.jpeg",
      category: "Machine Learning",
      date: "May 10, 2024",
      title: "Getting Started with Machine Learning",
      description:
        "A beginner's guide to understanding and working with machine learning models.",
    },
    {
      id: 7,
      image: "/cloudcomputing.jpeg",
      category: "Cloud Computing",
      date: "May 5, 2024",
      title: "The Future of Cloud Computing in 2024",
      description:
        "Explore the trends shaping the future of cloud computing and its impact on businesses.",
    },
    {
      id: 8,
      image: "/airevolution.png",
      category: "AI",
      date: "April 20, 2024",
      title: "How AI is Revolutionizing the IT Industry",
      description:
        "Understand how AI is reshaping various sectors of the IT industry, including automation and analytics.",
    },
    {
      id: 9,
      image: "/fullstackdev.png",
      category: "Web Development",
      date: "April 25, 2024",
      title: "Becoming a Full-Stack Developer in 2024",
      description:
        "Your roadmap to mastering front-end and back-end development for modern web applications.",
    },
    {
      id: 10,
      image: "/aitools.jpeg",
      category: "AI Tools",
      date: "May 1, 2024",
      title: "Top 10 AI Tools to Boost Your Productivity",
      description:
        "A curated list of AI-powered tools that can help improve efficiency and productivity.",
    },

    {
      id: 11,
      image: "/blockchain.jpeg",
      category: "Blockchain",
      date: "May 20, 2024",
      title: "Understanding Blockchain and Its Impact on Industries",
      description:
        "A comprehensive overview of blockchain technology and its applications in various sectors.",
    },
    {
      id: 12,
      image: "/dataprivicy.jpeg",
      category: "Data Privacy",
      date: "May 18, 2024",
      title: "The Importance of Data Privacy in the Digital Age",
      description:
        "Why data privacy is crucial in the digital age and how to protect your personal information online.",
    },
    {
      id: 13,
      image: "/digitalmark.jpeg",
      category: "Digital Marketing",
      date: "May 22, 2024",
      title: "Mastering Digital Marketing in 2024",
      description:
        "Explore the latest trends in digital marketing and how businesses can stay ahead in the competitive market.",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-10 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
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
                <span className="text-sm dark:text-gray-200 text-gray-500">
                  {blog.date}
                </span>
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

export default Blogs;
