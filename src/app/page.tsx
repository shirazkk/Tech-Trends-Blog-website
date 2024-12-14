import Email from "@/components/email";
import Hero from "@/components/hero";
import PopularPost from "@/components/popular_post";
import TopBlogs from "@/components/top_blogs";
export default function Home() {
  return (
    <>
      <Hero />
      <TopBlogs/>
      <PopularPost/>
      <Email/>
    </>
  );
}
