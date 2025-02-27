import React from "react";
import BlogHero from "@/components/blog_components/blog_hero";
import Blogs from "@/components/blog_components/blogs";

export const dynamic = "force-dynamic";
const Blog = () => {
  return (
    <div>
      <BlogHero />
      <Blogs />
    </div>
  );
};

export default Blog;
