import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { fetchHero } from "@/sanity/lib/sanity";

interface HeroData {
  Smallheading: string;
  title: string;
  portraitUrl: string;
}

const Hero = async () => {
  const herodata: HeroData = await fetchHero();

  return (
    <div className="container mx-auto px-4 sm:px-10 py-16 ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 text-left">
          <p className="text-indigo-600 font-semibold mb-4 tracking-wide uppercase">
            {herodata.Smallheading}
          </p>
          <h1 className="dark:text-white text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
            {herodata.title}
          </h1>
          <Link href="/Blog">
            <Button className="px-8 py-5 cursor-pointer bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300 shadow-lg">
              Explore Blogs
            </Button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <Image
            src={herodata.portraitUrl}
            alt="Hero Background"
            width={1920}
            height={1080}
            quality={100}
            className="w-full  h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
