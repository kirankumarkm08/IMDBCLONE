"use client";
import React from "react";
import { useEffect } from "react";

export const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h1>please try again later</h1>
      <button
        onClick={() => {
          reset();
        }}
      >
        {" "}
        try again
      </button>
    </div>
  );
};
export default error;
