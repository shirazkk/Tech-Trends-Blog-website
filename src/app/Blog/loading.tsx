import BlogHeroSkeleton from "@/components/blog_components/blogsheroskeleton";
import BlogsSkeleton from "@/components/blog_components/blogsskeleton";

const BlogPageLoading = () => {
  return (
    <div>
      <BlogHeroSkeleton />
      <BlogsSkeleton />
    </div>
  );
};

export default BlogPageLoading;
