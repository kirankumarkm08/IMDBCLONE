import React from "react";
import NavItems from "./NavItems";
import { Suspense } from "react";

export const NavBar = () => {
  return (
    <div className=" w-full justify-center items-center flex p-4 dark:bg-gray-400 bg-amber-400 text-lg gap-6 ">
      <Suspense fallback={<div>Loading...</div>}>
        <NavItems title="Trending" param={"fetchTrending"} />
        <NavItems title="Top Rated" param={"fetchToprated"} />
      </Suspense>
    </div>
  );
};
export default NavBar;
