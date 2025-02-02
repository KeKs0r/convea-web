"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Info, Zap, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { CTAButton } from "./ui/cta-button";

const menuItems = [
  { href: "#", label: "About", icon: Info },
  { href: "#", label: "Features", icon: Zap },
  { href: "/blog", label: "Blog", icon: BookOpen },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isMenuOpen
          ? "bg-white shadow-md"
          : scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/convea-MqcNsicQwpsRcxLDbfSm8jqcFIYp4Y.svg"
              alt="Convea.ai Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              convea.ai
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="flex gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 relative group/item py-2"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-[#FF4D8C] to-[#FF8FB1] transform origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 ease-out"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-50 to-transparent opacity-0 group-hover/item:opacity-100 -z-10 rounded-lg transition-opacity duration-300 ease-out"></span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <CTAButton>Join Waitlist</CTAButton>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto py-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center py-3 px-4 text-sm hover:bg-gray-100 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3 text-[#FF4D8C]" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
