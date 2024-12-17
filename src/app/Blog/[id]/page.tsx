import Comment from "@/components/comment";
import { SingleBlogs } from "../../../../content/singleblog";
import RecentBlogs from "@/components/recent_blogs";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const BlogPost = SingleBlogs.find((blog) => blog.id.toString() === id);

  if (!BlogPost) {
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl font-semibold text-gray-500 dark:text-gray-100">
        No blog found with that ID
      </div>
    );
  }

  return (
    <div className="shadow-lg">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Blog Header */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase font-medium text-blue-500">
            {BlogPost.category}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold dark:text-gray-100 text-gray-800 mt-2">
            {BlogPost.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-100 mt-2">
            Published on {BlogPost.date}
          </p>
        </div>

        {/* Blog Image */}
        <div className="w-full relative mb-8 rounded-lg overflow-hidden">
          <Image
            src={BlogPost.image}
            alt={BlogPost.title}
            layout="responsive"
            width={800}
            height={500}
            quality={100}
            className="rounded-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg sm:prose-xl prose-gray dark:prose-invert mx-auto leading-relaxed">
          <ReactMarkdown>{BlogPost.content}</ReactMarkdown>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center border-t pt-6">
          <p className="text-gray-500 dark:text-gray-100">
            Thank you for reading this blog post! Stay tuned for more.
          </p>
        </div>
        <Comment/>
      </div>
      <RecentBlogs />
    </div>
  );
}
