"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import github from "../public/images/github.svg";
import logo from "../public/images/logo.png";
import DarkButton from "./DarkMode";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "sticky top-0 z-50 flex justify-between items-center px-5 py-3",
        "transition-colors duration-300",
        scrolled
          ? "bg-white/90 dark:bg-gray-secondary/90 backdrop-blur border-b border-gray-200 dark:border-none shadow-sm"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <Image
        className="invert dark:invert-0 h-auto w-35"
        loading="eager"
        src={logo}
        width={200}
        height={200}
        alt="ScrubHub Logo"
      />

      <div className="flex gap-5">
        <Link
          className="text-xl transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
          href="https://github.com/BrandonCarp/data_clean"
        >
          <Image
            className="dark:invert h-auto w-5"
            src={github}
            width={100}
            height={100}
            alt="ScrubHub GitHub Link"
          />
        </Link>
        <DarkButton />
      </div>
    </nav>
  );
}
