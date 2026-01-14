import Image from "next/image";
import Hero from "../public/images/HeroImg.png";
import { FolderIcon } from "@heroicons/react/24/outline";
import { FolderArrowDownIcon } from "@heroicons/react/24/outline";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      {/* Text */}


      <Image src={Hero} alt="Hero Image" height={500} width={500} className="" />


      <div className="flex flex-col items-center text-center px-3 space-y-2">
        <div className="flex flex-col items-start ">
          <h1 className=" text-3xl font-semibold tracking-tight">ScrubHub</h1>
          <h1 className=" text-2xl font-semibold tracking-tight">
            Lightning-fast CSV Cleaner
          </h1>
        </div>
        <ul className="flex flex-col items-start text-black/70 dark:text-white/70">
          <li className="flex items-center"><FolderIcon className="size-4 mr-1 dark:text-gray-text" /> Upload a file</li>
          <li className="flex items-center"><DocumentMagnifyingGlassIcon className="size-4 mr-1 dark:text-gray-text" /> Preview messy data</li>
          <li className="flex items-center"><FolderArrowDownIcon className="size-4 mr-1 dark:text-gray-text" />Clean and xxport scrubbed version</li>
        </ul>
      </div>
    </div>
  );
}
