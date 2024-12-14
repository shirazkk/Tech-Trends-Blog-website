import React from "react";
import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // Data for navigation links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  // Data for social links
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Github, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-100/80 py-12">
      <div className="max-w-6xl px-4 flex flex-col items-center container mx-auto">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/blog_logo.png"
              alt="Blog Logo"
              width={180}
              height={180}
              className="transition duration-300"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-10 text-gray-600">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                   className="text-gray-600 hover:scale-110 hover:font-bold duration-300 hover:text-black hover:brightness-125 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex gap-6 mb-8 text-gray-600">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="text-2xl hover:scale-110 duration-300 hover:text-purple-600 transition-colors"
            >
              <social.icon />
            </Link>
          ))}
        </div>

        {/* Underline */}
        <div className="w-full h-[1px] bg-purple-600 mb-8"></div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm text-center">
          Copyright Ideapeel Inc © 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
