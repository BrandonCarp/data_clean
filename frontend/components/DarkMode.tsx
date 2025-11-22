"use client";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function DarkButton() {
  const [darkMode, setDarkMode] = useState("");

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode("dark");
    }
  };

  useEffect(() => {
   const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode("dark");
    }
  }, []);

  if (darkMode === "dark") {
    return (
      <button
        onClick={toggleTheme}
        className=" text-black dark:text-white transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
      >
        <SunIcon className="size-5  " />
      </button>
    );
  }
  return (
    <button
      onClick={toggleTheme}
      className=" text-black dark:text-white transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
    >
      <MoonIcon className="size-5  " />
    </button>
  );
}



// Look Into
// 1. state is derived from external stuff *before* effects run
// const [darkMode, setDarkMode] = useState(() => {
//   if (typeof window === "undefined") return "light"; // SSR safety
//   return localStorage.getItem("theme") ?? "light";
// });

// // 2. effect: push state *out* to DOM + localStorage whenever it changes
// useEffect(() => {
//   if (darkMode === "dark") {
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// }, [darkMode]);

// // 3. event handler: flip the state
// const toggleTheme = () => {
//   setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
// };