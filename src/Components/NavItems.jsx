"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavItems = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Link
      className={`${
        genre === param
          ? "underline underline-offset-8 decoration-4 rounded-md dark:decoration-amber-500 "
          : ""
      }`}
      href={`/?genre=${param}`}
    >
      {title}
    </Link>
  );
};

export default NavItems;
