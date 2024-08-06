"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const NavItems = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Suspense>
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
    </Suspense>
  );
};

export default NavItems;
