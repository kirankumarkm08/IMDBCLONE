import Link from "next/link";
import React from "react";

const MenuItems = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="hover:text-amber-500 flex items-center">
      <Icon className="inline sm:hidden text-2xl" />
      <p className="text-2xl font-bold hidden sm:inline">{title}</p>
    </Link>
  );
};

export default MenuItems;
