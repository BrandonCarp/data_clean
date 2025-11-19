import Link from "next/link";
import Image from "next/image";
import github from "../public/images/github.svg";
import logo from "../public/images/logo.png";
import DarkButton from "./DarkMode";
import UploadButton from "./UploadButton";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-5 mt-3 ">
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
        <DarkButton />
        <UploadButton />
      </div>
    </nav>
  );
}
