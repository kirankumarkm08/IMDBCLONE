import React from "react";
import NavItems from "./NavItems";

export const NavBar = () => {
  return (
    <div className=" w-full justify-center items-center flex p-4 dark:bg-gray-400 bg-amber-400 text-lg gap-6 ">
      <NavItems title="Trending" param={"fetchTrending"} />
      <NavItems title="Top Rated" param={"fetchToprated"} />
    </div>
  );
};
export default NavBar;
