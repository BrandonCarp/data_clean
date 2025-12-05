"use client";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useEffect, useState} from "react";

export default function DarkButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
   
    }
  };

  useEffect(() => {

      const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);


    return (
      <button
        onClick={toggleTheme}
        className=" text-black dark:text-white transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
      >
        <Cog6ToothIcon className="size-5  " />
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