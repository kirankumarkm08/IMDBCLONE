import React from "react";
import MenuItems from "./MenuItems";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <Link href={""} className="flex  mx-10  justify-between  py-5 ">
      <div className="flex gap-5">
        <MenuItems title="Home" Icon={FaHome} address={"/"} />
        <MenuItems title="About" Icon={FaInfoCircle} address={"/About"} />
      </div>
      <div className=" text-2xl font-bold  flex gap-5 items-center">
        <span className="bg-amber-400 px-2 py-1 rounded-lg">IMDB </span>
        <span className="hidden sm:inline">CLONE</span>
      </div>
    </Link>
  );
};

export default Header;
