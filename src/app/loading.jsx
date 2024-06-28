import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className=" mt-32 justify-center items-center flex">
      <Image src="/loading.svg" width={140} height={140} alt="loading" />
    </div>
  );
};

export default loading;
