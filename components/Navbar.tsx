"use client";

import { Button } from "./ui/button";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/convea-MqcNsicQwpsRcxLDbfSm8jqcFIYp4Y.svg"
            alt="Convea.ai Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </div>
        <div className="flex items-center gap-8">
          <div
            className={`flex items-center gap-8 transition-all duration-300 ${
              scrolled ? "opacity-0 lg:opacity-100" : "opacity-100"
            }`}
          >
            <Link href="#" className="text-sm hover:text-gray-600">
              About
            </Link>
            <Link href="#" className="text-sm hover:text-gray-600">
              Features
            </Link>
            <Link href="#" className="text-sm hover:text-gray-600">
              Blog
            </Link>
          </div>
          <Button
            variant="outline"
            className="rounded-full bg-[#FF4D8C] text-white hover:bg-[#FF4D8C]/90"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
}
