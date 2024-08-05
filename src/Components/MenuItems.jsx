"use client";

import Link from "next/link";
import React from "react";

const MenuItems = ({ title, address, Icon }) => {
  return (
    <div className="flex items-center">
      {/* <Link href={address}> */}
      <div className="hover:text-amber-500 flex items-center">
        <Icon className="inline sm:hidden text-2xl" />
        <p className="text-2xl font-bold hidden sm:inline">{title}</p>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default MenuItems;
