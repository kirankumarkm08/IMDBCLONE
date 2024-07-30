"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [seach, setSearch] = useState("");
  const router = useRouter();
  function handlSubmit(e) {
    e.preventDefault();
    router.push(`/search/${seach}`);
  }
  return (
    <div>
      <div className="h-[100px] my-[30px] ">
        <form
          className="flex justify-between max-w-[1280px] mx-auto gap-5  "
          onSubmit={handlSubmit}
        >
          <input
            type="text "
            className="bg-slate-200 w-full px-5 py-3 rounded-xl text-gray-500"
            placeholder="Search Movie..."
            value={seach}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
