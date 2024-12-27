import Comment from "@/components/comment";
import client from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const singlePageQuery = `
    *[_type == "popularblogs" && slug.current == $slug][0] {
      tittle,
      date,
      description,
      "imageUrl": image.asset->url,
      content
    }
  `;
  const blog = await client.fetch(singlePageQuery, {
    slug: (await params).slug,
  });

  // Handle case where no blog is found
  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl font-semibold text-gray-500 dark:text-gray-50">
        No blog found with that slug
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto p-6 sm:p-8">
        {/* Blog Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white leading-tight">
            {blog.tittle}
          </h1>
          <p className="text-sm md:text-base text-black dark:text-white mt-4">
            Published on {new Date(blog.date).toLocaleDateString()}
          </p>
        </header>

        {/* Blog Image */}
        <div className="relative mb-10 rounded-lg overflow-hidden">
          <Image
            src={blog.imageUrl}
            alt={blog.tittle}
            width={1100}
            height={600}
            quality={100}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Blog Content */}
        <article className="max-w-5xl prose prose-lg sm:prose-xl dark:prose-invert prose-gray mx-auto leading-relaxed">
          <PortableText value={blog.content} />
        </article>

        {/* Footer */}
        <footer className="mt-12 text-center border-t pt-6">
          <p className="text-base md:text-lg text-black dark:text-white">
            Thank you for reading this blog post! Stay tuned for more.
          </p>
        </footer>
        <Comment />
      </div>
    </div>
  );
}
