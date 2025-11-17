import Link from "next/link";
import Image from "next/image";
import github from "../public/images/github.svg";
import logo from "../public/images/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-5 mt-3">
      <Image
        className=""
        src={logo}
        width={125}
        height={125}
        alt="ScrubHub Logo"
      />
      <Link
        className="text-xl text-black  hover:"
        href="https://github.com/BrandonCarp/data_clean"
      >
        <Image
          className="invert hover:scale-125 "
          src={github}
          width={25}
          height={25}
          alt="ScrubHub GitHub Link"
        />
      </Link>
    </nav>
  );
}
