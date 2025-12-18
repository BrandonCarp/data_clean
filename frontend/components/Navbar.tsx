import Link from "next/link";
import Image from "next/image";
import github from "../public/images/github.svg";
import logo from "../public/images/logo.png";
import DarkButton from "./DarkMode";
import UploadButton from "./UploadButton";

// @theme {
//   --color-gray-bg: #0f0f0fff;
//   --color-gray-secondary: #1a1919ff;
//   --color-gray-text: #242323ff;
//   --color-purple-main: #7f20f3ff;
//   --color-purple-light: #8d33faff;
//   --color-orange-main: #f3b43fff;
//   --color-orange-secondary: #f08344ff;
//   --color-orange-text: #f7853aff;

// }
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-5 py-3 border-b-1 bg-white dark:bg-gray-secondary border-gray-200 dark:border-none">
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
          className="text-xl  transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
          href="https://github.com/BrandonCarp/data_clean"
        >
          <Image
            className="dark:invert  h-auto w-5"
            src={github}
            width={100}
            height={100}
            alt="ScrubHub GitHub Link"
          />
        </Link>
        {/* Change dark mode button to toggle or 3 dots with a modal that drops down or  */}
        <DarkButton />
        {/* <UploadButton /> */}
      </div>
    </nav>
  );
}
