import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./theme_button";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blogs", label: "Blog" },
];

const Header = () => {
  return (
    <nav className="mx-auto bg-background/50 sticky top-0 shadow-lg w-full dark:border-b backdrop-blur z-50 dark:bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/blog_logo.png"
                alt="Blog Logo"
                width={200}
                height={200}
                className="transition duration-300 brightness-100 dark:brightness-[300]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:scale-110 hover:font-bold duration-300 hover:text-black hover:brightness-125 dark:text-gray-300 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}

            <div>
              <Button
                variant="outline"
                className="mx-1 dark:text-white dark:border-white dark:hover:bg-white/10"
              >
                Login
              </Button>
              <Button
                variant="outline"
                className="mx-1 dark:text-white dark:border-white dark:hover:bg-white/10"
              >
                Signup
              </Button>
            </div>
            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex justify-center items-center">
            <Sheet>
              <SheetTrigger asChild>
                <AlignJustify />
              </SheetTrigger>
              <span className="mx-4">
                <ModeToggle />
              </span>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] dark:bg-black dark:text-white"
              >
                <div className="flex flex-col gap-4 mt-8">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium scale-105 hover:font-bold dark:text-gray-300 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-2 mt-4">
                    <Button
                      variant="outline"
                      className="w-full dark:text-white dark:border-white dark:hover:bg-white/10"
                    >
                      Login
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full dark:text-white dark:border-white dark:hover:bg-white/10"
                    >
                      Signup
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
