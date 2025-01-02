import HeroSkeleton from "@/components/heroskelton";
import PopularPostSkeleton from "@/components/popularpostskelton";
import RecentBlogsSkeleton from "@/components/recentblogskelton";

export default function HomePageSkeltons() {
  return (
    <div>
      <HeroSkeleton />;
      <RecentBlogsSkeleton />
      <PopularPostSkeleton />
    </div>
  );
}
