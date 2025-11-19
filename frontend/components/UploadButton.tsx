"use client";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

export default function UploadButton() {
  return (
    <>
      <button className="bg-slate-950 dark:bg-white text-white dark:text-black rounded px-2 py-1 transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer ">
        <ArrowUpTrayIcon className="size-4  " />
      </button>
    </>
  );
}
