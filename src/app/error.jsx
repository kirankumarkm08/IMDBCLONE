"use client";
import React from "react";

export const error = ({ reset }) => {
  return (
    <div className=" flex justify-center items-center flex-col ">
      <h1>please try again later</h1>
      <button
        onClick={() => {
          reset();
        }}
        className="hover:text-amber-500"
      >
        {" "}
        try again
      </button>
    </div>
  );
};
export default error;
