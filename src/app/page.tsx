import Hero from "@/components/hero";
import PopularPost from "@/components/popular_post";
import RecentBlogs from "@/components/recentblog";

export const dynamic = "force-dynamic";
export default async function Home() {
  return (
    <>
      <Hero/>
      <RecentBlogs />
      <PopularPost />
    </>
  );
}
