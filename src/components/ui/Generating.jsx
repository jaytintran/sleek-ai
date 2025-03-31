import { loading } from "@/assets";
import React from "react";

const Generating = ({ className }) => {
  return (
    <div
      className={`max-w-[620px] w-full mx-auto text-base rounded-xl ${className}`}
    >
      <div className="border-n-6 rounded-3xl py-3 flex justify-center items-center bg-n-8/70">
        <img width={25} height={25} src={loading} className="mr-3" />
        <p className="text-white">Generating...</p>
      </div>
    </div>
  );
};

export default Generating;
